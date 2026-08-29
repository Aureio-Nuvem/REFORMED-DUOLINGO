-- Lúmen — esquema inicial (Cloudflare D1).
-- Aplicar:  npx wrangler d1 execute lumen-db --remote --file=migrations/0001_init.sql

CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,
  username    TEXT NOT NULL UNIQUE,   -- guardado em minúsculas
  name        TEXT NOT NULL,          -- como a pessoa quer ser chamada
  pw_hash     TEXT NOT NULL,          -- PBKDF2-SHA256, base64
  pw_salt     TEXT NOT NULL,          -- base64
  created_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS invites (
  code        TEXT PRIMARY KEY,       -- guardado em maiúsculas
  note        TEXT,                   -- para quem você criou (opcional)
  used_by     TEXT REFERENCES users(id),
  used_at     INTEGER,
  created_at  INTEGER NOT NULL
);

-- Um save por usuário. `data` é o SaveState em JSON; `rev` cresce a cada
-- gravação e serve para detectar escrita concorrente entre dispositivos.
CREATE TABLE IF NOT EXISTS saves (
  user_id     TEXT PRIMARY KEY REFERENCES users(id),
  data        TEXT NOT NULL,
  rev         INTEGER NOT NULL DEFAULT 1,
  updated_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_invites_unused ON invites(used_by) WHERE used_by IS NULL;
