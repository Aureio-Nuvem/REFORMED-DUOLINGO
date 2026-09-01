/**
 * Valida o conteúdo contra a Bíblia BLIVRE:
 *  1. toda referência citada existe em public/bible.json
 *  2. toda questão "order" (montar o versículo) realmente aparece no texto
 *     do versículo indicado — evita ensinar uma redação que não existe.
 * Uso: node scripts/check-content.mjs
 */
import { readFileSync, readdirSync } from "node:fs";

const bible = JSON.parse(readFileSync("public/bible.json", "utf8"));
const files = readdirSync("src/content").filter((f) => f.endsWith(".ts")).map((f) => "src/content/" + f);
const src = files.map((f) => readFileSync(f, "utf8")).join("\n");

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
   .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

let errors = 0;
const seen = new Set();

// 1) referências existem?
for (const m of src.matchAll(/"([1-3]?[a-z]{2,3}\.\d+\.\d+)"/g)) {
  const ref = m[1];
  if (seen.has(ref)) continue;
  seen.add(ref);
  if (!bible[ref]) { console.error(`REF INEXISTENTE: ${ref}`); errors++; }
}

// 2) questões "order" batem com o texto real?
for (const m of src.matchAll(/type:\s*"order"[\s\S]*?ref:\s*"([^"]+)"[\s\S]*?words:\s*\[([^\]]+)\]/g)) {
  const label = m[1];
  const phrase = m[2].split(",").map((w) => w.trim().replace(/^"|"$/g, "")).join(" ");
  const want = label.replace("Salmo ", "Salmos ");
  const [, wBook, wCh, wV] = want.match(/^(.+?)\s(\d+)\.(\d+)$/) ?? [];
  const hit = Object.values(bible).find((v) => {
    const m = v.ref.match(/^(.+?)\s(\d+)\.(\d+)$/);
    return m && m[2] === wCh && m[3] === wV && m[1].startsWith(wBook);
  });
  if (!hit) { console.error(`ORDER sem versículo localizável: "${label}"`); errors++; continue; }
  if (!norm(hit.text).includes(norm(phrase))) {
    console.error(`ORDER NÃO BATE com ${hit.ref}\n   monta: "${phrase}"\n   real : "${hit.text}"`);
    errors++;
  }
}

// 3) perguntas de preencher lacuna: a resposta precisa existir no versículo,
//    e nenhum distrator pode aparecer nele (ficaria visível ao lado da lacuna).
for (const m of src.matchAll(/type:\s*"mcq"[^}]*?verseRef:\s*"([^"]+)"[\s\S]*?opts:\s*\[([^\]]+)\],\s*answer:\s*(\d+)/g)) {
  const v = bible[m[1]];
  if (!v) continue;
  const opts = m[2].split(/",\s*"/).map((o) => o.replace(/^"|"$/g, "").trim());
  opts.forEach((o, i) => {
    if (i !== Number(m[3]) && norm(v.text).includes(norm(o))) {
      console.error(`DISTRATOR VISÍVEL no versículo ${v.ref}: "${o}"`);
      errors++;
    }
  });
}

console.log(errors ? `\n${errors} problema(s).` : `OK — ${seen.size} referências conferidas.`);
process.exit(errors ? 1 : 0);
