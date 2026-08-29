/**
 * Lúmen — Worker: serve o app (Static Assets) e a API em /api/*.
 *
 * Modelo de sincronização: o app é local-first. O servidor guarda um save por
 * usuário com um número de revisão (`rev`). O cliente envia a revisão que
 * conhece; se outra aparelho gravou antes, devolvemos 409 com o save atual e o
 * cliente mescla e tenta de novo. Assim nada é sobrescrito em silêncio.
 */
import { hashPassword, newId, newSalt, readSession, signSession, verifyPassword } from "./auth";

export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  SESSION_SECRET: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });
const fail = (status: number, error: string) => json({ error }, status);

/** Regras de cadastro — mensagens em português, para a UI mostrar direto. */
function validate(username: string, name: string, password: string): string | null {
  if (!/^[a-z0-9_.-]{3,24}$/.test(username)) return "O usuário deve ter de 3 a 24 caracteres (letras, números, ponto, hífen ou _).";
  if (name.trim().length < 2) return "Diga como quer ser chamado.";
  if (password.length < 8) return "A senha precisa de ao menos 8 caracteres.";
  return null;
}

async function currentUser(req: Request, env: Env): Promise<string | null> {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token || !env.SESSION_SECRET) return null;
  return readSession(token, env.SESSION_SECRET);
}

async function handleApi(req: Request, env: Env, path: string): Promise<Response> {
  if (!env.SESSION_SECRET) return fail(500, "Servidor sem SESSION_SECRET configurado.");

  /* ---------- cadastro com código de convite ---------- */
  if (path === "/api/register" && req.method === "POST") {
    const { code = "", username = "", name = "", password = "" } = await req.json<any>().catch(() => ({}));
    const uname = String(username).trim().toLowerCase();
    const invite = String(code).trim().toUpperCase();

    const bad = validate(uname, String(name), String(password));
    if (bad) return fail(400, bad);

    const row = await env.DB.prepare("SELECT code, used_by FROM invites WHERE code = ?").bind(invite).first<any>();
    if (!row) return fail(403, "Código de convite inválido.");
    if (row.used_by) return fail(403, "Este código de convite já foi usado.");

    const taken = await env.DB.prepare("SELECT 1 FROM users WHERE username = ?").bind(uname).first();
    if (taken) return fail(409, "Esse usuário já existe.");

    const id = newId();
    const salt = newSalt();
    const hash = await hashPassword(String(password), salt);
    const now = Date.now();

    await env.DB.batch([
      env.DB.prepare("INSERT INTO users (id, username, name, pw_hash, pw_salt, created_at) VALUES (?,?,?,?,?,?)")
        .bind(id, uname, String(name).trim(), hash, salt, now),
      env.DB.prepare("UPDATE invites SET used_by = ?, used_at = ? WHERE code = ? AND used_by IS NULL")
        .bind(id, now, invite)
    ]);

    return json({ token: await signSession(id, env.SESSION_SECRET), user: { name: String(name).trim(), username: uname }, save: null });
  }

  /* ---------- entrar ---------- */
  if (path === "/api/login" && req.method === "POST") {
    const { username = "", password = "" } = await req.json<any>().catch(() => ({}));
    const uname = String(username).trim().toLowerCase();

    const user = await env.DB.prepare("SELECT id, name, username, pw_hash, pw_salt FROM users WHERE username = ?")
      .bind(uname).first<any>();
    // Mesma mensagem nos dois casos: não revelamos se o usuário existe.
    if (!user || !(await verifyPassword(String(password), user.pw_salt, user.pw_hash)))
      return fail(401, "Usuário ou senha incorretos.");

    const save = await env.DB.prepare("SELECT data, rev FROM saves WHERE user_id = ?").bind(user.id).first<any>();
    return json({
      token: await signSession(user.id, env.SESSION_SECRET),
      user: { name: user.name, username: user.username },
      save: save ? { data: JSON.parse(save.data), rev: save.rev } : null
    });
  }

  /* ---------- daqui em diante, exige sessão ---------- */
  const uid = await currentUser(req, env);
  if (!uid) return fail(401, "Sessão expirada. Entre novamente.");

  if (path === "/api/save" && req.method === "GET") {
    const save = await env.DB.prepare("SELECT data, rev FROM saves WHERE user_id = ?").bind(uid).first<any>();
    return json(save ? { data: JSON.parse(save.data), rev: save.rev } : { data: null, rev: 0 });
  }

  if (path === "/api/save" && req.method === "PUT") {
    const { data, rev } = await req.json<any>().catch(() => ({}));
    if (!data || typeof data !== "object") return fail(400, "Save inválido.");

    const cur = await env.DB.prepare("SELECT rev FROM saves WHERE user_id = ?").bind(uid).first<any>();
    const curRev: number = cur?.rev ?? 0;

    // Outro aparelho gravou depois da última vez que este viu: devolve o atual
    // para o cliente mesclar, em vez de sobrescrever.
    if (Number(rev) !== curRev) {
      const full = await env.DB.prepare("SELECT data, rev FROM saves WHERE user_id = ?").bind(uid).first<any>();
      return json({ conflict: true, data: full ? JSON.parse(full.data) : null, rev: curRev }, 409);
    }

    const next = curRev + 1;
    await env.DB.prepare(
      `INSERT INTO saves (user_id, data, rev, updated_at) VALUES (?,?,?,?)
       ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, rev = excluded.rev, updated_at = excluded.updated_at`
    ).bind(uid, JSON.stringify(data), next, Date.now()).run();

    return json({ rev: next });
  }

  if (path === "/api/me" && req.method === "GET") {
    const user = await env.DB.prepare("SELECT name, username FROM users WHERE id = ?").bind(uid).first<any>();
    return user ? json({ user }) : fail(401, "Usuário não encontrado.");
  }

  return fail(404, "Rota não encontrada.");
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) {
      try {
        return await handleApi(req, env, url.pathname);
      } catch (err) {
        console.error("api", err);
        return fail(500, "Erro interno.");
      }
    }
    return env.ASSETS.fetch(req);   // o app (SPA)
  }
};
