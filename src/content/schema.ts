/**
 * Lúmen — esquema de conteúdo.
 * Todo o conteúdo do app é DADO tipado (nunca "chumbado" na lógica).
 * Para escalar, basta adicionar arquivos que satisfaçam estes tipos.
 */

/** Versículo — vem do bible.ts (BLIVRE, domínio público). */
export interface Verse {
  ref: string; // ex.: "Salmo 119.105"
  text: string;
}

/** Tipos de exercício reaproveitados pelo motor (desafio, academia, flashcards). */
export type Question =
  | { type: "mcq"; kicker: string; q: string; verseRef?: string; opts: string[]; answer: number; exp: string }
  | { type: "order"; kicker: string; q: string; ref?: string; words: string[]; exp: string }
  | { type: "match"; kicker: string; q: string; pairs: [string, string][]; exp: string };

/**
 * Um dos "quatro fios" da reflexão. O QUE cada fio significa é fixo e vive na
 * interface (o app explica ao usuário); aqui fica só a pergunta daquele dia.
 */
export type ThreadKey = "ensino" | "gratidao" | "confissao" | "suplica";
export interface ReflectThread { key: ThreadKey; prompt: string }

/** Estações do devocional guiado (registros: sereno 1–6, energético 7–8). */
export type Station =
  | { type: "light"; eyebrow: string; title: string; lead: string; prayerRef?: string; prayer?: string }
  | { type: "read"; eyebrow: string; title: string; passageRefs: string[] }
  | { type: "breath"; eyebrow: string; title: string; verseRef: string; seconds: number }
  | { type: "voice"; eyebrow: string; title: string; intro: string; author: string; initial: string; source: string; text: string }
  | { type: "reflect"; eyebrow: string; title: string; intro: string; threads?: ReflectThread[] }
  | { type: "pray"; eyebrow: string; title: string; intro: string; prayer: string };

/** Um dia de devocional dentro de uma unidade/plano. */
export interface DevotionalDay {
  id: string;
  title: string;
  subtitle: string;    // ex.: "Salmo 119 · 8 estações"
  minutes: number;
  stations: Station[]; // as 6 estações serenas (a 7 é o desafio, a 8 o selo)
  challenge: Question[];
  carryRef: string;    // versículo do "selo do dia"
}

/** Unidade = plano ordenado de dias. Um app tem muitas unidades. */
export interface Unit {
  id: string;
  title: string;
  theme: string;       // ex.: "Fundamentos"
  blurb?: string;      // sinopse curta para a tela de escolha
  about?: string;      // de onde vem o conteúdo, para quem não conhece a obra
  icon?: string;       // nome do ícone (padrão: i-book)
  accent?: string;     // var(--...) para o cartão da unidade
  source?: string;     // atribuição (ex.: "Baseado em João Calvino")
  days: DevotionalDay[];
}

/** Cartão de ensino (modo "Aprender": ler/estudar o conteúdo antes de praticar). */
export interface TeachCard {
  eyebrow: string; // ex.: "Pergunta 1" ou "Sola Fide"
  title: string;   // o conceito/pergunta
  body: string;    // a explicação/resposta
}

/** Coleção da Academia (estudo livre). */
export interface Course {
  id: string;
  icon: string;        // nome do ícone
  color: string;       // var(--...) do sistema
  title: string;
  subtitle: string;
  locked?: boolean;
  teach?: TeachCard[]; // material de estudo (modo Aprender)
  questions: Question[];
}

/** Item do Catecismo de Westminster (domínio público). */
export interface CatechismItem {
  n: number;
  q: string;
  a: string;
}
