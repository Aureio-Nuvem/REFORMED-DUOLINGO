/**
 * Cliente da API do Lúmen (nuvem opcional).
 * Sem login, o app segue 100% local — nada aqui é chamado.
 */
import type { SaveState } from "./storage";

export interface Account { name: string; username: string }
export interface AuthResult { token: string; user: Account; save: { data: SaveState; rev: number } | null }

const TOKEN_KEY = "lumen_token";
const ACCOUNT_KEY = "lumen_account";

export function loadToken(): string | null {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
}
export function loadAccount(): Account | null {
  try { const r = localStorage.getItem(ACCOUNT_KEY); return r ? JSON.parse(r) : null; } catch { return null; }
}
export function storeSession(token: string, user: Account): void {
  try { localStorage.setItem(TOKEN_KEY, token); localStorage.setItem(ACCOUNT_KEY, JSON.stringify(user)); } catch { /* ignora */ }
}
export function clearSession(): void {
  try { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(ACCOUNT_KEY); } catch { /* ignora */ }
}

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = loadToken();
  const res = await fetch(path, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...(init.headers ?? {})
    }
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error((body as any)?.error ?? "Não foi possível conectar.");
    (err as any).status = res.status;
    (err as any).body = body;
    throw err;
  }
  return body as T;
}

export const api = {
  register: (code: string, username: string, name: string, password: string) =>
    call<AuthResult>("/api/register", { method: "POST", body: JSON.stringify({ code, username, name, password }) }),

  login: (username: string, password: string) =>
    call<AuthResult>("/api/login", { method: "POST", body: JSON.stringify({ username, password }) }),

  getSave: () => call<{ data: SaveState | null; rev: number }>("/api/save"),

  putSave: (data: SaveState, rev: number) =>
    call<{ rev: number }>("/api/save", { method: "PUT", body: JSON.stringify({ data, rev }) })
};
