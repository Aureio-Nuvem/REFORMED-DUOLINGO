// @ts-nocheck
/**
 * Importa a BLIVRE (A Bíblia Livre — domínio público) para o app.
 *
 * ENTRADA:  content-source/blivre.json
 * SAÍDA:    src/content/bible.generated.json  (chave "abbrev.cap.ver" → { ref, text })
 *
 * Formato esperado da entrada (dataset livre amplamente usado — array de livros):
 *   [
 *     { "abbrev": "gn", "name": "Gênesis", "chapters": [ ["v1", "v2", ...], ... ] },
 *     { "abbrev": "sl", "name": "Salmos",  "chapters": [ ... ] },
 *     ...
 *   ]
 *
 * Onde obter: procure por um dataset da "Bíblia Livre" (BLIVRE) em JSON no
 * formato acima (livre/domínio público) e salve como content-source/blivre.json.
 *
 * Rodar:  npm run content:bible
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IN = join(__dirname, "..", "content-source", "blivre.json");
// Servido como asset estático (não embutido no bundle JS): carregado em runtime
// e guardado offline pelo PWA.
const OUT = join(__dirname, "..", "public", "bible.json");

if (!existsSync(IN)) {
  console.error(`\n✗ Arquivo-fonte não encontrado: ${IN}\n`);
  console.error("  1. Baixe a BLIVRE em JSON (formato de array de livros — ver comentário no topo).");
  console.error("  2. Salve como content-source/blivre.json");
  console.error("  3. Rode novamente: npm run content:bible\n");
  process.exit(1);
}

const raw = JSON.parse(readFileSync(IN, "utf8"));
const books = Array.isArray(raw) ? raw : raw.books || [];

const out = {};
let count = 0;
for (const book of books) {
  const abbrev = String(book.abbrev || book.abbr || "").toLowerCase();
  const name = book.name || book.book || book.nome || abbrev;
  const chapters = book.chapters || [];
  if (!abbrev || !chapters.length) continue;
  chapters.forEach((verses, ci) => {
    verses.forEach((text, vi) => {
      const ch = ci + 1;
      const vs = vi + 1;
      let clean = String(text).trim();
      // Salmo 119 é acróstico: a BLIVRE prefixa o nome da letra hebraica
      // ("Nun :", "Alef :"…) no 1º versículo de cada bloco. Removemos.
      if (abbrev === "sl" && ch === 119) clean = clean.replace(/^[\p{L}]+\s*:\s*/u, "");
      out[`${abbrev}.${ch}.${vs}`] = { ref: `${name} ${ch}.${vs}`, text: clean };
      count++;
    });
  });
}

writeFileSync(OUT, JSON.stringify(out) + "\n");
console.log(`\n✓ BLIVRE importada: ${count} versículos → public/bible.json`);
console.log(`  (carregado em runtime; sobrescreve a semente de bible.ts)\n`);
