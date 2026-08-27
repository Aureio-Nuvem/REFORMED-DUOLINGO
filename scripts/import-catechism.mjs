// @ts-nocheck
/**
 * Importa o Catecismo Breve de Westminster (domínio público, 107 perguntas).
 *
 * ENTRADA:  content-source/catechism.json  →  [ { "n": 1, "q": "...", "a": "..." }, ... ]
 * SAÍDA:    src/content/catechism.generated.json
 *
 * Onde obter: o Catecismo Breve de Westminster é domínio público; use uma
 * edição em português confiável e formate como o array acima
 * (ver content-source/catechism.sample.json).
 *
 * Rodar:  npm run content:catechism
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IN = join(__dirname, "..", "content-source", "catechism.json");
const OUT = join(__dirname, "..", "src", "content", "catechism.generated.json");

if (!existsSync(IN)) {
  console.error(`\n✗ Arquivo-fonte não encontrado: ${IN}`);
  console.error("  Formate o Catecismo como content-source/catechism.json (ver .sample.json) e rode de novo.\n");
  process.exit(1);
}

const items = JSON.parse(readFileSync(IN, "utf8"));
const clean = items
  .filter((it) => it && typeof it.n === "number" && it.q && it.a)
  .map((it) => ({ n: it.n, q: String(it.q).trim(), a: String(it.a).trim() }))
  .sort((a, b) => a.n - b.n);

writeFileSync(OUT, JSON.stringify(clean) + "\n");
console.log(`\n✓ Catecismo importado: ${clean.length} perguntas → src/content/catechism.generated.json\n`);
