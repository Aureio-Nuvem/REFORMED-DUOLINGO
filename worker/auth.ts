/**
 * Autenticação do Lúmen — sem dependências externas, só WebCrypto.
 *
 * Senhas: PBKDF2-SHA256 com salt por usuário (nunca guardamos a senha).
 * Sessões: token assinado com HMAC-SHA256 usando SESSION_SECRET, com validade.
 * Nada aqui inventa criptografia própria: são primitivas padrão do WebCrypto.
 */

const ITERATIONS = 100_000;
const SESSION_DAYS = 60;

const enc = new TextEncoder();

function b64(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}
function unb64(s: string): Uint8Array {
  return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
}

/** Comparação em tempo constante — evita vazar informação pelo tempo de resposta. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function newSalt(): string {
  return b64(crypto.getRandomValues(new Uint8Array(16)).buffer);
}

export async function hashPassword(password: string, saltB64: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: unb64(saltB64), iterations: ITERATIONS, hash: "SHA-256" },
    key, 256
  );
  return b64(bits);
}

export async function verifyPassword(password: string, saltB64: string, expected: string): Promise<boolean> {
  return safeEqual(await hashPassword(password, saltB64), expected);
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}

/** Token de sessão: "<userId>.<expiraEm>.<assinatura>" */
export async function signSession(userId: string, secret: string): Promise<string> {
  const exp = Date.now() + SESSION_DAYS * 86_400_000;
  const body = `${userId}.${exp}`;
  const sig = await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(body));
  return `${body}.${b64(sig)}`;
}

export async function readSession(token: string, secret: string): Promise<string | null> {
  const i = token.lastIndexOf(".");
  if (i < 0) return null;
  const body = token.slice(0, i);
  const sig = token.slice(i + 1);
  const expect = b64(await crypto.subtle.sign("HMAC", await hmacKey(secret), enc.encode(body)));
  if (!safeEqual(sig, expect)) return null;

  const [userId, expStr] = body.split(".");
  if (!userId || !expStr) return null;
  if (Number(expStr) < Date.now()) return null;   // expirado
  return userId;
}

export function newId(): string {
  return crypto.randomUUID();
}
