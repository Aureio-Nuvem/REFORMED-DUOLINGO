import type { CatechismItem, Course, CourseBlock, Question } from "./schema";
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
  { n: 16, q: "Caiu toda a humanidade na primeira transgressão de Adão?", a: "Sendo Adão o representante de toda a humanidade, todos os que dele descendem por geração ordinária pecaram nele e caíram com ele na sua primeira transgressão." },
  { n: 17, q: "A que estado a queda trouxe a humanidade?", a: "A queda trouxe a humanidade ao estado de pecado e de miséria." },
  { n: 18, q: "Em que consiste a pecaminosidade do estado em que o homem caiu?", a: "Consiste na culpa do primeiro pecado de Adão, na falta da justiça original e na corrupção de toda a sua natureza — o que se chama comumente pecado original —, junto com todas as transgressões que dele procedem." },
  { n: 19, q: "Qual é a miséria do estado em que o homem caiu?", a: "Toda a humanidade, pela queda, perdeu a comunhão com Deus, está debaixo da sua ira e maldição, e assim sujeita às misérias desta vida, à morte e às penas do inferno para sempre." },
  { n: 20, q: "Deixou Deus toda a humanidade perecer no estado de pecado e miséria?", a: "Deus, por sua mera boa vontade, tendo desde a eternidade eleito alguns para a vida eterna, entrou num pacto da graça para livrá-los do estado de pecado e miséria e trazê-los a um estado de salvação por um Redentor." },
  { n: 21, q: "Quem é o Redentor dos eleitos de Deus?", a: "O único Redentor dos eleitos de Deus é o Senhor Jesus Cristo, que, sendo o Filho eterno de Deus, se fez homem; e assim foi e continua a ser Deus e homem, em duas naturezas distintas e uma só pessoa, para sempre." },
  { n: 22, q: "Como Cristo, sendo o Filho de Deus, se fez homem?", a: "Cristo, o Filho de Deus, se fez homem tomando para si um verdadeiro corpo e uma alma racional, sendo concebido pelo poder do Espírito Santo no ventre da virgem Maria e dela nascido, mas sem pecado." },
  { n: 23, q: "Que ofícios Cristo executa como nosso Redentor?", a: "Cristo, como nosso Redentor, executa os ofícios de profeta, de sacerdote e de rei, tanto no seu estado de humilhação como no de exaltação." },
  { n: 24, q: "Como Cristo executa o ofício de profeta?", a: "Cristo executa o ofício de profeta revelando-nos, pela sua Palavra e pelo seu Espírito, a vontade de Deus para a nossa salvação." },
  { n: 25, q: "Como Cristo executa o ofício de sacerdote?", a: "Cristo executa o ofício de sacerdote oferecendo-se a si mesmo uma vez em sacrifício, para satisfazer a justiça divina e reconciliar-nos com Deus, e fazendo contínua intercessão por nós." },
  { n: 26, q: "Como Cristo executa o ofício de rei?", a: "Cristo executa o ofício de rei sujeitando-nos a si, governando-nos e defendendo-nos, e refreando e vencendo todos os seus e nossos inimigos." },
  { n: 27, q: "Em que consistiu a humilhação de Cristo?", a: "A humilhação de Cristo consistiu em ter nascido, e isso em baixa condição, feito sob a lei, sofrendo as misérias desta vida, a ira de Deus e a morte maldita da cruz; em ter sido sepultado e permanecido sob o poder da morte por algum tempo." },
  { n: 28, q: "Em que consiste a exaltação de Cristo?", a: "A exaltação de Cristo consiste em ter Ele ressuscitado dos mortos ao terceiro dia, subido ao céu, estar assentado à direita de Deus Pai e vir para julgar o mundo no último dia." },
  { n: 29, q: "Como somos feitos participantes da redenção comprada por Cristo?", a: "Somos feitos participantes da redenção comprada por Cristo pela aplicação eficaz dela a nós, pelo seu Espírito Santo." },
  { n: 30, q: "Como o Espírito nos aplica a redenção comprada por Cristo?", a: "O Espírito nos aplica a redenção comprada por Cristo operando em nós a fé e, assim, unindo-nos a Cristo na nossa vocação eficaz." },
  { n: 31, q: "O que é a vocação eficaz?", a: "É a obra do Espírito de Deus pela qual, convencendo-nos do nosso pecado e miséria, iluminando o nosso entendimento no conhecimento de Cristo e renovando a nossa vontade, Ele nos persuade e capacita a abraçar Jesus Cristo, gratuitamente oferecido no evangelho." },
  { n: 32, q: "Que benefícios recebem nesta vida os que são eficazmente chamados?", a: "Os que são eficazmente chamados participam nesta vida da justificação, da adoção e da santificação, e dos vários benefícios que nesta vida as acompanham ou delas procedem." }
];

/**
 * Blocos temáticos. O catecismo é grande demais para uma maestria só — cada
 * bloco tem um recorte que se sustenta sozinho e é dominado por conta própria.
 * Ao importar as 107 perguntas, basta acrescentar faixas a esta lista.
 */
const BLOCK_RANGES: { id: string; title: string; from: number; to: number }[] = [
  { id: "b1", title: "Deus e a Escritura", from: 1, to: 6 },
  { id: "b2", title: "Criação e providência", from: 7, to: 12 },
  { id: "b3", title: "A queda e o pecado", from: 13, to: 19 },
  { id: "b4", title: "Cristo, o Redentor", from: 20, to: 28 },
  { id: "b5", title: "A aplicação da redenção", from: 29, to: 38 },
  { id: "b6", title: "A lei de Deus", from: 39, to: 52 },
  { id: "b7", title: "Os Dez Mandamentos", from: 53, to: 81 },
  { id: "b8", title: "Fé, arrependimento e os meios da graça", from: 82, to: 97 },
  { id: "b9", title: "A oração e o Pai-Nosso", from: 98, to: 107 }
];

// A fonte importada (107 perguntas) tem prioridade sobre a semente.
const GENERATED = generated as CatechismItem[];
export const SHORTER_CATECHISM: CatechismItem[] = GENERATED.length ? GENERATED : SEED;

/** Gera uma coleção da Academia a partir do catecismo (múltipla escolha). */
function catechismQuestions(items: CatechismItem[], pool: CatechismItem[] = items): Question[] {
  return items.map((item) => {
    // Distratores vêm do catecismo inteiro: num bloco de 6 perguntas, tirar as
    // alternativas só do próprio bloco deixaria a resposta certa evidente.
    const others = pool.filter((o) => o.n !== item.n).map((o) => o.a);
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

const teachCards = (items: CatechismItem[]) =>
  items.map((it) => ({ eyebrow: `Pergunta ${it.n}`, title: it.q, body: it.a }));

/**
 * Monta um bloco por faixa, com distratores tirados do catecismo inteiro
 * (para as alternativas não ficarem óbvias dentro de um bloco pequeno).
 */
const blocks: CourseBlock[] = BLOCK_RANGES
  .map((b) => {
    const items = SHORTER_CATECHISM.filter((it) => it.n >= b.from && it.n <= b.to);
    return { block: b, items };
  })
  .filter(({ items }) => items.length > 0)
  .map(({ block, items }) => ({
    id: block.id,
    title: block.title,
    subtitle: `Perguntas ${items[0].n}–${items[items.length - 1].n}`,
    teach: teachCards(items),
    questions: catechismQuestions(items, SHORTER_CATECHISM)
  }));

export const catechismCourse: Course = {
  id: "catecismo",
  icon: "i-book",
  color: "var(--mustard)",
  title: "Catecismo de Westminster",
  subtitle: `${SHORTER_CATECHISM.length} perguntas · ${blocks.length} blocos`,
  teach: teachCards(SHORTER_CATECHISM),
  questions: catechismQuestions(SHORTER_CATECHISM),
  blocks
};
