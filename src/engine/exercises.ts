import type { Question } from "../content/schema";

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface Flashcard { front: string; back: string; }

/** Deriva flashcards (Revisar) das perguntas de uma coleção. */
export function buildFlashcards(questions: Question[]): Flashcard[] {
  const cards: Flashcard[] = [];
  for (const q of questions) {
    if (q.type === "match") {
      for (const [a, b] of q.pairs) cards.push({ front: a, back: b });
    } else if (q.type === "order") {
      cards.push({ front: q.q.replace(/:$/, ""), back: q.words.join(" ") });
    } else {
      cards.push({ front: q.q, back: q.opts[q.answer] });
    }
  }
  return cards;
}
