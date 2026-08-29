/**
 * Gera códigos de convite e imprime o SQL para inseri-los no D1.
 *
 *   node scripts/make-invites.mjs 5 > invites.sql
 *   npx wrangler d1 execute lumen-db --remote --file=invites.sql
 *
 * Ou direto, sem arquivo:
 *   npx wrangler d1 execute lumen-db --remote --command "$(node scripts/make-invites.mjs 5)"
 */
import { randomBytes } from "node:crypto";

const howMany = Number(process.argv[2] ?? 5);
// Sem 0/O/1/I para não confundir na hora de digitar.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const code = () => {
  const b = randomBytes(8);
  return "LUMEN-" + Array.from(b, (x) => ALPHABET[x % ALPHABET.length]).join("").slice(0, 6);
};

const now = Date.now();
const rows = Array.from({ length: howMany }, () => `('${code()}', ${now})`);
console.log(`INSERT INTO invites (code, created_at) VALUES\n${rows.join(",\n")};`);
console.error(`\n${howMany} convite(s) gerado(s). Os códigos aparecem no SQL acima.`);
