/**
 * Preparação automática do banco.
 *
 * O objetivo é que a única coisa manual seja criar o banco D1 e colar o id.
 * Tudo o mais — tabelas e segredo de sessão — o Worker cria sozinho na
 * primeira vez que a API é usada.
 */

let prepared = false;

const TABLES = [
  `CREATE TABLE IF NOT EXISTS users (
     id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE, name TEXT NOT NULL,
     pw_hash TEXT NOT NULL, pw_salt TEXT NOT NULL,
     is_owner INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS invites (
     code TEXT PRIMARY KEY, note TEXT, used_by TEXT, used_at INTEGER, created_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS saves (
     user_id TEXT PRIMARY KEY, data TEXT NOT NULL,
     rev INTEGER NOT NULL DEFAULT 1, updated_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS config (key TEXT PRIMARY KEY, value TEXT NOT NULL)`
];

/** Cria as tabelas se ainda não existirem. Barato: roda uma vez por isolate. */
export async function ensureSchema(db: D1Database): Promise<void> {
  if (prepared) return;
  await db.batch(TABLES.map((sql) => db.prepare(sql)));
  prepared = true;
}

/**
 * Segredo que assina as sessões. Se não vier como variável de ambiente,
 * geramos um e guardamos no banco — assim não é preciso configurar nada.
 */
export async function sessionSecret(db: D1Database, fromEnv?: string): Promise<string> {
  if (fromEnv) return fromEnv;

  const row = await db.prepare("SELECT value FROM config WHERE key = 'session_secret'").first<any>();
  if (row?.value) return row.value;

  const generated = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))));
  // INSERT OR IGNORE: se dois pedidos chegarem juntos, o primeiro vence e o
  // segundo relê o valor gravado, em vez de sobrescrever.
  await db.prepare("INSERT OR IGNORE INTO config (key, value) VALUES ('session_secret', ?)").bind(generated).run();
  const saved = await db.prepare("SELECT value FROM config WHERE key = 'session_secret'").first<any>();
  return saved?.value ?? generated;
}
