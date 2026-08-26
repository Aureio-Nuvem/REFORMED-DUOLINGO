import type { CatechismItem, Course, Question } from "./schema";

/**
 * Catecismo Breve de Westminster — domínio público (107 perguntas).
 *
 * ⚠️ SEMENTE: apenas as primeiras perguntas, em redação de trabalho, para
 * demonstrar a arquitetura. O plano é importar as 107 de um arquivo-fonte
 * verificado. Com o catecismo completo, este único arquivo gera dezenas de
 * lições e centenas de flashcards automaticamente (ver `catechismCourse`).
 */
export const SHORTER_CATECHISM: CatechismItem[] = [
  { n: 1, q: "Qual é o fim principal do homem?", a: "O fim principal do homem é glorificar a Deus e desfrutá-Lo para sempre." },
  { n: 2, q: "Que regra deu Deus para nos dirigir sobre como glorificá-Lo e desfrutá-Lo?", a: "A Palavra de Deus, contida nas Escrituras do Antigo e do Novo Testamento, é a única regra para nos dirigir." },
  { n: 3, q: "O que as Escrituras principalmente ensinam?", a: "As Escrituras principalmente ensinam o que o homem deve crer a respeito de Deus e o dever que Deus requer do homem." },
  { n: 4, q: "O que é Deus?", a: "Deus é Espírito, infinito, eterno e imutável no seu ser, sabedoria, poder, santidade, justiça, bondade e verdade." },
  { n: 5, q: "Há mais de um Deus?", a: "Há um só, o Deus vivo e verdadeiro." },
  { n: 6, q: "Quantas pessoas há na divindade?", a: "Há três pessoas na divindade: o Pai, o Filho e o Espírito Santo; e estes três são um só Deus, iguais em poder e glória." },
  { n: 7, q: "Que são os decretos de Deus?", a: "Os decretos de Deus são o seu propósito eterno, pelo qual, para a sua glória, predeterminou tudo o que acontece." }
];

/** Gera uma coleção da Academia a partir do catecismo (múltipla escolha). */
function catechismQuestions(items: CatechismItem[]): Question[] {
  return items.map((item, idx) => {
    // distratores: respostas de outros itens
    const others = items.filter((_, i) => i !== idx).map((o) => o.a);
    const distractors = shuffle(others).slice(0, 3);
    const opts = shuffle([item.a, ...distractors]);
    return {
      type: "mcq",
      kicker: `Catecismo · P.${item.n}`,
      q: item.q,
      opts,
      answer: opts.indexOf(item.a),
      exp: `Catecismo Breve de Westminster, Pergunta ${item.n}.`
    };
  });
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const catechismCourse: Course = {
  id: "catecismo",
  icon: "i-book",
  color: "var(--mustard)",
  title: "Catecismo de Westminster",
  subtitle: "Perguntas e respostas da fé",
  questions: catechismQuestions(SHORTER_CATECHISM)
};
