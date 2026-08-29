-- Reserva: o Worker cria estas tabelas sozinho na primeira vez que a API roda.
-- Este arquivo só é útil se você quiser inspecionar ou recriar o esquema à mão:
--   npx wrangler d1 execute lumen-db --remote --file=migrations/0001_init.sql

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE, name TEXT NOT NULL,
  pw_hash TEXT NOT NULL, pw_salt TEXT NOT NULL,
  is_owner INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS invites (
  code TEXT PRIMARY KEY, note TEXT, used_by TEXT, used_at INTEGER, created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS saves (
  user_id TEXT PRIMARY KEY, data TEXT NOT NULL,
  rev INTEGER NOT NULL DEFAULT 1, updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS config (key TEXT PRIMARY KEY, value TEXT NOT NULL);
