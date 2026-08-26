import type { Verse } from "./schema";

/**
 * Fonte bíblica: A Bíblia Livre (BLIVRE) — domínio público.
 *
 * ⚠️ ISTO É UMA SEMENTE. As redações abaixo são um rascunho fiel e devem ser
 * SUBSTITUÍDAS pelo texto do arquivo-fonte OFICIAL da BLIVRE. O plano é gerar
 * este objeto a partir do arquivo completo (livro.cap.ver → texto) e mantê-lo
 * como a única fonte de verdade das Escrituras no app.
 *
 * Chave = "livro.capítulo.versículo" (minúsculas, sem espaços).
 */
export const VERSES: Record<string, Verse> = {
  "sl119.18":  { ref: "Salmo 119.18",  text: "Abre meus olhos, para que eu veja as maravilhas de tua lei." },
  "sl119.105": { ref: "Salmo 119.105", text: "Lâmpada para meus pés é tua palavra, e luz para meu caminho." },
  "sl119.106": { ref: "Salmo 119.106", text: "Jurei, e o cumprirei, que guardarei teus justos juízos." },
  "sl119.133": { ref: "Salmo 119.133", text: "Firma meus passos em tua palavra, e não me domine perversidade alguma." },
  "sl23.1":    { ref: "Salmo 23.1",    text: "O SENHOR é o meu pastor; nada me faltará." },
  "sl46.1":    { ref: "Salmo 46.1",    text: "Deus é nosso refúgio e força; auxílio bem presente nas angústias." },
  "sl46.10":   { ref: "Salmo 46.10",   text: "Ficai quietos, e sabei que eu sou Deus." },
  "sl27.1":    { ref: "Salmo 27.1",    text: "O SENHOR é minha luz e minha salvação; a quem temerei?" },
  "sl1.2":     { ref: "Salmo 1.2",     text: "Antes, seu prazer está na lei do SENHOR, e em sua lei medita de dia e de noite." },
  "sl100.3":   { ref: "Salmo 100.3",   text: "Sabei que o SENHOR é Deus; foi ele que nos fez, e não nós a nós mesmos." }
};

export function getVerse(ref: string): Verse {
  return VERSES[ref] ?? { ref, text: "[versículo não encontrado — importar da BLIVRE]" };
}

export function joinVerses(refs: string[]): string {
  return refs.map((r) => getVerse(r).text).join(" ");
}
