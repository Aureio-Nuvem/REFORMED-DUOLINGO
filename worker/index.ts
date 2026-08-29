/**
 * Lúmen — Worker: serve o app (Static Assets) e a API em /api/*.
 *
 * Configuração: a única coisa manual é criar o banco D1 e apontar o id no
 * wrangler.jsonc. As tabelas e o segredo de sessão nascem sozinhos.
 *
 * Convites: a PRIMEIRA conta criada é a dona do app e não precisa de código.
 * Daí em diante todo cadastro exige um convite, que a dona gera pelo Perfil.
 *
 * Sincronização: o app é local-first. Cada save tem um número de revisão; se
 * outro aparelho gravou antes, devolvemos 409 com o save atual para o cliente
 * mesclar e reenviar. Nada é sobrescrito em silêncio.
 */
import { hashPassword, newId, newSalt, readSession, signSession, verifyPassword } from "./auth";
import { ensureSchema, sessionSecret } from "./db";

export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  SESSION_SECRET?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8" } });
const fail = (status: number, error: string) => json({ error }, status);

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sem 0/O/1/I
function inviteCode(): string {
  const b = crypto.getRandomValues(new Uint8Array(6));
  return "LUMEN-" + Array.from(b, (x) => ALPHABET[x % ALPHABET.length]).join("");
}

function validate(username: string, name: string, password: string): string | null {
  if (!/^[a-z0-9_.-]{3,24}$/.test(username)) return "O usuário deve ter de 3 a 24 caracteres (letras, números, ponto, hífen ou _).";
  if (name.trim().length < 2) return "Diga como quer ser chamado.";
  if (password.length < 8) return "A senha precisa de ao menos 8 caracteres.";
  return null;
}

async function handleApi(req: Request, env: Env, path: string): Promise<Response> {
  if (!env.DB) return fail(503, "O banco de dados ainda não foi conectado a este app.");
  await ensureSchema(env.DB);
  const secret = await sessionSecret(env.DB, env.SESSION_SECRET);

  const session = async (): Promise<string | null> => {
    const auth = req.headers.get("authorization") ?? "";
    return auth.startsWith("Bearer ") ? readSession(auth.slice(7), secret) : null;
  };

  /* ---------- estado da configuração (a tela de cadastro usa) ---------- */
  if (path === "/api/status" && req.method === "GET") {
    const n = await env.DB.prepare("SELECT COUNT(*) AS n FROM users").first<any>();
    return json({ ready: true, needsOwner: (n?.n ?? 0) === 0 });
  }

  /* ---------- cadastro ---------- */
  if (path === "/api/register" && req.method === "POST") {
    const { code = "", username = "", name = "", password = "" } = await req.json<any>().catch(() => ({}));
    const uname = String(username).trim().toLowerCase();

    const bad = validate(uname, String(name), String(password));
    if (bad) return fail(400, bad);

    const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM users").first<any>();
    const isFirst = (count?.n ?? 0) === 0;

    // A primeira conta é a dona e dispensa convite. As demais precisam.
    let invite = "";
    if (!isFirst) {
      invite = String(code).trim().toUpperCase();
      const row = await env.DB.prepare("SELECT code, used_by FROM invites WHERE code = ?").bind(invite).first<any>();
      if (!row) return fail(403, "Código de convite inválido.");
      if (row.used_by) return fail(403, "Este código de convite já foi usado.");
    }

    const taken = await env.DB.prepare("SELECT 1 FROM users WHERE username = ?").bind(uname).first();
    if (taken) return fail(409, "Esse usuário já existe.");

    const id = newId();
    const salt = newSalt();
    const hash = await hashPassword(String(password), salt);
    const now = Date.now();

    const stmts = [
      env.DB.prepare("INSERT INTO users (id, username, name, pw_hash, pw_salt, is_owner, created_at) VALUES (?,?,?,?,?,?,?)")
        .bind(id, uname, String(name).trim(), hash, salt, isFirst ? 1 : 0, now)
    ];
    if (!isFirst) {
      stmts.push(env.DB.prepare("UPDATE invites SET used_by = ?, used_at = ? WHERE code = ? AND used_by IS NULL")
        .bind(id, now, invite));
    }
    await env.DB.batch(stmts);

    return json({
      token: await signSession(id, secret),
      user: { name: String(name).trim(), username: uname, owner: isFirst },
      save: null
    });
  }

  /* ---------- entrar ---------- */
  if (path === "/api/login" && req.method === "POST") {
    const { username = "", password = "" } = await req.json<any>().catch(() => ({}));
    const uname = String(username).trim().toLowerCase();

    const user = await env.DB.prepare("SELECT id, name, username, is_owner, pw_hash, pw_salt FROM users WHERE username = ?")
      .bind(uname).first<any>();
    // Mesma mensagem nos dois casos: não revelamos se o usuário existe.
    if (!user || !(await verifyPassword(String(password), user.pw_salt, user.pw_hash)))
      return fail(401, "Usuário ou senha incorretos.");

    const save = await env.DB.prepare("SELECT data, rev FROM saves WHERE user_id = ?").bind(user.id).first<any>();
    return json({
      token: await signSession(user.id, secret),
      user: { name: user.name, username: user.username, owner: !!user.is_owner },
      save: save ? { data: JSON.parse(save.data), rev: save.rev } : null
    });
  }

  /* ---------- daqui em diante, exige sessão ---------- */
  const uid = await session();
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

  /* ---------- convites (só a dona do app) ---------- */
  const isOwner = async () => {
    const u = await env.DB.prepare("SELECT is_owner FROM users WHERE id = ?").bind(uid).first<any>();
    return !!u?.is_owner;
  };

  if (path === "/api/invites" && req.method === "GET") {
    if (!(await isOwner())) return fail(403, "Só a conta dona do app pode ver os convites.");
    const { results } = await env.DB.prepare(
      "SELECT i.code, i.used_by IS NOT NULL AS used, u.name AS used_name FROM invites i LEFT JOIN users u ON u.id = i.used_by ORDER BY i.created_at DESC"
    ).all<any>();
    return json({ invites: results ?? [] });
  }

  if (path === "/api/invites" && req.method === "POST") {
    if (!(await isOwner())) return fail(403, "Só a conta dona do app pode criar convites.");
    const { count = 1 } = await req.json<any>().catch(() => ({}));
    const n = Math.min(Math.max(Number(count) || 1, 1), 20);
    const now = Date.now();
    const codes = Array.from({ length: n }, inviteCode);
    await env.DB.batch(codes.map((c) =>
      env.DB.prepare("INSERT INTO invites (code, created_at) VALUES (?,?)").bind(c, now)));
    return json({ codes });
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
