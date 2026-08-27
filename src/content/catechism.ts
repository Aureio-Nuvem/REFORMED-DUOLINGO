import type { CatechismItem, Course, Question } from "./schema";
import generated from "./catechism.generated.json";

/**
 * Catecismo Breve de Westminster — domínio público (107 perguntas).
 *
 * A semente abaixo (P.1–16) é REDAÇÃO PRÓPRIA — tradução original do conteúdo
 * (domínio público) em palavras nossas, para evitar direitos de tradutores de
 * versões modernas. Quando `catechism.generated.json` é preenchido pelo
 * importador (`npm run content:catechism`) com uma edição em português de
 * licença livre, ele TEM PRIORIDADE. Com as 107 perguntas, este arquivo gera
 * dezenas de lições e centenas de flashcards automaticamente.
 */
const SEED: CatechismItem[] = [
  { n: 1, q: "Qual é o fim principal do homem?", a: "O fim principal do homem é glorificar a Deus e desfrutá-Lo para sempre." },
  { n: 2, q: "Que regra deu Deus para nos dirigir sobre como glorificá-Lo e desfrutá-Lo?", a: "A Palavra de Deus, contida nas Escrituras do Antigo e do Novo Testamento, é a única regra para nos dirigir." },
  { n: 3, q: "O que as Escrituras principalmente ensinam?", a: "As Escrituras principalmente ensinam o que o homem deve crer a respeito de Deus e o dever que Deus requer do homem." },
  { n: 4, q: "O que é Deus?", a: "Deus é Espírito, infinito, eterno e imutável no seu ser, sabedoria, poder, santidade, justiça, bondade e verdade." },
  { n: 5, q: "Há mais de um Deus?", a: "Há um só, o Deus vivo e verdadeiro." },
  { n: 6, q: "Quantas pessoas há na divindade?", a: "Há três pessoas na divindade: o Pai, o Filho e o Espírito Santo; e estes três são um só Deus, iguais em poder e glória." },
  { n: 7, q: "Que são os decretos de Deus?", a: "Os decretos de Deus são o seu propósito eterno, pelo qual, para a sua glória, predeterminou tudo o que acontece." },
  { n: 8, q: "Como Deus executa os seus decretos?", a: "Deus executa os seus decretos nas obras da criação e da providência." },
  { n: 9, q: "Qual é a obra da criação?", a: "A obra da criação é aquela pela qual Deus fez do nada todas as coisas, pela palavra do seu poder, em seis dias, e tudo muito bom." },
  { n: 10, q: "Como Deus criou o homem?", a: "Deus criou o homem, homem e mulher, à sua própria imagem, em conhecimento, justiça e santidade, com domínio sobre as criaturas." },
  { n: 11, q: "Quais são as obras de providência de Deus?", a: "As obras de providência de Deus são o seu santíssimo, sábio e poderoso ato de preservar e governar todas as suas criaturas e todas as suas ações." },
  { n: 12, q: "Que ato especial de providência Deus exerceu para com o homem quando o criou?", a: "Deus estabeleceu com o homem um pacto de vida, sob condição de perfeita obediência, proibindo-lhe comer da árvore do conhecimento do bem e do mal, sob pena de morte." },
  { n: 13, q: "Permaneceram os nossos primeiros pais no estado em que foram criados?", a: "Deixados ao seu livre-arbítrio, os nossos primeiros pais caíram do estado em que foram criados, pecando contra Deus." },
  { n: 14, q: "O que é o pecado?", a: "O pecado é qualquer falta de conformidade com a lei de Deus, ou transgressão dela." },
  { n: 15, q: "Qual foi o pecado pelo qual os nossos primeiros pais caíram?", a: "O pecado pelo qual os nossos primeiros pais caíram foi comer do fruto proibido." },
  { n: 16, q: "Caiu toda a humanidade na primeira transgressão de Adão?", a: "Sendo Adão o representante de toda a humanidade, todos os que dele descendem por geração ordinária pecaram nele e caíram com ele na sua primeira transgressão." }
];

// A fonte importada (107 perguntas) tem prioridade sobre a semente.
const GENERATED = generated as CatechismItem[];
export const SHORTER_CATECHISM: CatechismItem[] = GENERATED.length ? GENERATED : SEED;

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
  teach: SHORTER_CATECHISM.map((it) => ({
    eyebrow: `Pergunta ${it.n}`,
    title: it.q,
    body: it.a
  })),
  questions: catechismQuestions(SHORTER_CATECHISM)
};
