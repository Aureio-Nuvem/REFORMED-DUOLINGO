import type { Verse } from "./schema";

/**
 * Fonte bíblica: A Bíblia Livre (BLIVRE) — domínio público.
 *
 * A Bíblia completa é servida como asset estático `public/bible.json`
 * (gerado por `npm run content:bible` a partir do arquivo-fonte oficial) e
 * carregada em runtime por `loadBible()`, sendo guardada offline pelo PWA.
 *
 * `VERSES_SEED` é só um fallback de desenvolvimento (poucos versículos). Quando
 * o bible.json carrega, ele sobrescreve a semente. Chave = "livro.cap.ver".
 */
const VERSES_SEED: Record<string, Verse> = {
  "sl.119.18":  { ref: "Salmo 119.18",  text: "Abre meus olhos, para que eu veja as maravilhas de tua lei." },
  "sl.119.105": { ref: "Salmo 119.105", text: "Lâmpada para meus pés é tua palavra, e luz para meu caminho." },
  "sl.119.106": { ref: "Salmo 119.106", text: "Jurei, e o cumprirei, que guardarei teus justos juízos." },
  "sl.119.133": { ref: "Salmo 119.133", text: "Firma meus passos em tua palavra, e não me domine perversidade alguma." },
  "sl.23.1":    { ref: "Salmo 23.1",    text: "O SENHOR é o meu pastor; nada me faltará." },
  "sl.46.1":    { ref: "Salmo 46.1",    text: "Deus é nosso refúgio e força; auxílio bem presente nas angústias." },
  "sl.46.10":   { ref: "Salmo 46.10",   text: "Ficai quietos, e sabei que eu sou Deus." },
  "sl.27.1":    { ref: "Salmo 27.1",    text: "O SENHOR é minha luz e minha salvação; a quem temerei?" },
  "sl.1.2":     { ref: "Salmo 1.2",     text: "Antes, seu prazer está na lei do SENHOR, e em sua lei medita de dia e de noite." },
  "sl.100.3":   { ref: "Salmo 100.3",   text: "Sabei que o SENHOR é Deus; foi ele que nos fez, e não nós a nós mesmos." },
  "ef.2.8":     { ref: "Efésios 2.8",   text: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus." },
  "ef.2.9":     { ref: "Efésios 2.9",   text: "Não vem das obras, para que ninguém se glorie." },
  "mt.11.28":   { ref: "Mateus 11.28",  text: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei." },
  "mt.11.29":   { ref: "Mateus 11.29",  text: "Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e achareis descanso para as vossas almas." },
  "lm.3.22":    { ref: "Lamentações 3.22", text: "As misericórdias do SENHOR são a causa de não sermos consumidos, porque as suas misericórdias não têm fim." },
  "lm.3.23":    { ref: "Lamentações 3.23", text: "Novas são cada manhã; grande é a tua fidelidade." },
  "rm.5.8":     { ref: "Romanos 5.8",   text: "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores." },
  "rm.8.28":    { ref: "Romanos 8.28",  text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus." }
};

// Objeto vivo: começa com a semente e é preenchido pela BLIVRE completa.
export const VERSES: Record<string, Verse> = { ...VERSES_SEED };

let loaded = false;
/** Carrega a BLIVRE completa (public/bible.json). Idempotente. */
export async function loadBible(): Promise<void> {
  if (loaded) return;
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}bible.json`);
    if (res.ok) {
      const data = (await res.json()) as Record<string, Verse>;
      Object.assign(VERSES, data);
    }
  } catch {
    /* offline / falhou: segue com a semente */
  } finally {
    loaded = true;
  }
}

export function getVerse(ref: string): Verse {
  return VERSES[ref] ?? { ref, text: "[versículo não encontrado]" };
}

export function joinVerses(refs: string[]): string {
  return refs.map((r) => getVerse(r).text).join(" ");
}
