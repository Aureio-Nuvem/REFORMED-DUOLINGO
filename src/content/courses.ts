import type { Course } from "./schema";
import { catechismCourse } from "./catechism";

/**
 * Academia — coleções de estudo livre. Conteúdo reformado de redação própria
 * (perguntas autorais) e do domínio público (catecismo). Adicionar uma coleção
 * é só acrescentar um objeto aqui.
 */
const solas: Course = {
  id: "solas", icon: "i-cross", color: "var(--terra)",
  title: "Os Cinco Solas", subtitle: "As bandeiras da Reforma",
  teach: [
    { eyebrow: "Introdução", title: "As cinco bandeiras da Reforma", body: "No século XVI, a Reforma resgatou cinco verdades do Evangelho, resumidas em cinco 'solas' (do latim, 'somente'). Elas apontam para onde está a autoridade e de quem é a salvação e a glória." },
    { eyebrow: "Sola Scriptura", title: "Somente a Escritura", body: "A Palavra de Deus é a autoridade final e infalível em fé e prática. Tradições e concílios se submetem à Escritura — nunca o contrário." },
    { eyebrow: "Sola Gratia", title: "Somente a graça", body: "A salvação é inteiramente pela graça de Deus, um favor imerecido. Não a iniciamos, não a completamos nem a merecemos: é dom de Deus do início ao fim." },
    { eyebrow: "Sola Fide", title: "Somente a fé", body: "Somos justificados somente pela fé, que recebe a justiça de Cristo. As boas obras são fruto da salvação, jamais a sua causa." },
    { eyebrow: "Solus Christus", title: "Somente Cristo", body: "Cristo é o único Mediador entre Deus e os homens. Só a sua obra — vida, morte e ressurreição — nos salva. Não há outro nome nem outro caminho." },
    { eyebrow: "Soli Deo Gloria", title: "Glória somente a Deus", body: "Se a salvação é de Deus do princípio ao fim, então toda a glória também é somente dele." }
  ],
  questions: [
    { type: "match", kicker: "Cinco Solas", q: "Ligue cada sola ao seu significado:",
      pairs: [["Sola Scriptura", "Somente a Escritura"], ["Sola Fide", "Somente a fé"], ["Sola Gratia", "Somente a graça"], ["Solus Christus", "Somente Cristo"]],
      exp: "As cinco solas resumem o coração da Reforma: só a Escritura, só a graça, só a fé, só Cristo, só a Deus a glória." },
    { type: "mcq", kicker: "Sola Fide", q: "O que a doutrina da 'Sola Fide' afirma?",
      opts: ["Somos justificados somente pela fé, não pelas obras.", "A fé e as obras nos justificam igualmente.", "Basta ser sincero em qualquer fé.", "A fé é dispensável se houver boas obras."], answer: 0,
      exp: "Sola Fide: a fé recebe a justiça de Cristo. As obras são fruto da salvação, não sua causa." },
    { type: "mcq", kicker: "Sola Scriptura", q: "Segundo a 'Sola Scriptura', qual é a autoridade final em fé e prática?",
      opts: ["A tradição da igreja.", "As Escrituras.", "A hierarquia eclesiástica.", "A experiência pessoal."], answer: 1,
      exp: "Sola Scriptura: a Palavra de Deus é a norma suprema, acima de tradições e concílios." },
    { type: "mcq", kicker: "Soli Deo Gloria", q: "'Soli Deo Gloria' significa que...",
      opts: ["a glória é dividida entre Deus e os santos.", "toda a glória pertence somente a Deus.", "o homem busca a própria glória.", "a igreja recebe a glória."], answer: 1,
      exp: "Toda a glória é de Deus, e só dele (Rm 11.36; 1 Co 10.31)." },
    { type: "mcq", kicker: "Solus Christus", q: "Quem é o único Mediador entre Deus e os homens?",
      opts: ["Os santos", "A igreja", "Jesus Cristo", "Os anjos"], answer: 2,
      exp: "Há um só Mediador entre Deus e os homens: Cristo Jesus (1 Tm 2.5)." },
    { type: "mcq", kicker: "Sola Gratia", q: "As boas obras, na fé reformada, são...",
      opts: ["a causa da salvação", "o fruto da salvação", "um mérito diante de Deus", "desnecessárias"], answer: 1,
      exp: "Salvos para boas obras — elas são fruto, não causa (Ef 2.10; Tg 2.17)." },
    { type: "order", kicker: "Memorização · Romanos 1.17", q: "Monte a base da justificação:", ref: "Romanos 1.17",
      words: ["o", "justo", "viverá", "pela", "fé"],
      exp: "“O justo viverá pela fé” — o coração da Sola Fide (Rm 1.17)." },
    { type: "mcq", kicker: "Sola Scriptura", q: "A 'Sola Scriptura' se opõe a...",
      opts: ["ler a Bíblia", "pregar a Palavra", "colocar tradições no mesmo nível da Escritura", "estudar teologia"], answer: 2,
      exp: "A Escritura é inspirada e suficiente para nos instruir (2 Tm 3.16-17)." },
    { type: "match", kicker: "Cinco Solas", q: "Ligue cada sola à sua ênfase:",
      pairs: [["Sola Scriptura", "Autoridade"], ["Sola Gratia", "Origem da salvação"], ["Sola Fide", "Meio de recepção"], ["Soli Deo Gloria", "Fim de todas as coisas"]],
      exp: "As solas se encaixam: de onde vem, como se recebe, e para quem é a glória." }
  ]
};

const tulip: Course = {
  id: "tulip", icon: "i-anchor", color: "var(--forest)",
  title: "Doutrinas da Graça", subtitle: "TULIP · a soberania na salvação",
  teach: [
    { eyebrow: "Introdução", title: "As Doutrinas da Graça", body: "As 'doutrinas da graça' (conhecidas pela sigla TULIP) descrevem a salvação como obra soberana de Deus, do princípio ao fim. São cinco pontos que se sustentam juntos." },
    { eyebrow: "T · Depravação Total", title: "Incapacidade do pecador", body: "O pecado atingiu toda a natureza humana — mente, vontade e afetos. Não que sejamos tão maus quanto poderíamos ser, mas que nenhuma parte de nós escapou do pecado, e por isso não podemos nos salvar." },
    { eyebrow: "U · Eleição Incondicional", title: "A escolha graciosa de Deus", body: "Antes da fundação do mundo, Deus escolheu os seus por pura graça, não por prever méritos ou fé neles. A escolha se funda na vontade de Deus, não em nós." },
    { eyebrow: "L · Expiação Particular", title: "Cristo salva os seus", body: "A morte de Cristo salva de modo eficaz o seu povo. A cruz não apenas tornou a salvação possível — ela de fato garante a redenção dos que são de Cristo." },
    { eyebrow: "I · Graça Irresistível", title: "O chamado eficaz", body: "Quando Deus chama eficazmente os seus, o Espírito vence a resistência do coração e o faz crer. A graça que salva alcança o seu propósito." },
    { eyebrow: "P · Perseverança dos Santos", title: "Guardados até o fim", body: "Aqueles que Deus verdadeiramente salva, Ele guarda até o fim. A segurança da salvação está no poder de Deus, não na força do crente." }
  ],
  questions: [
    { type: "mcq", kicker: "Depravação Total", q: "A Depravação Total ensina que o pecado afetou...",
      opts: ["apenas o corpo.", "toda a natureza humana — mente, vontade e coração.", "somente algumas pessoas.", "nada essencial no homem."], answer: 1,
      exp: "A depravação é total em extensão: não há parte de nós intocada pelo pecado." },
    { type: "mcq", kicker: "Eleição Incondicional", q: "A Eleição Incondicional afirma que Deus escolhe os seus...",
      opts: ["por prever méritos neles.", "por pura graça, segundo a sua vontade.", "por causa de obras futuras.", "ao acaso."], answer: 1,
      exp: "A eleição não se baseia em nada em nós — é livre e graciosa (Ef 1)." },
    { type: "mcq", kicker: "Perseverança dos Santos", q: "A Perseverança dos Santos ensina que...",
      opts: ["o crente pode perder a salvação a qualquer hora.", "aqueles que Deus verdadeiramente salva, Ele guarda até o fim.", "a salvação depende do esforço final.", "ninguém pode ter segurança."], answer: 1,
      exp: "Quem o Pai dá ao Filho, o Filho não perde nenhum (Jo 6, 10)." },
    { type: "match", kicker: "TULIP", q: "Ligue a doutrina ao seu tema:",
      pairs: [["Depravação", "Incapacidade do pecador"], ["Eleição", "Escolha graciosa"], ["Expiação", "Cristo salva os seus"], ["Graça", "Chamado eficaz"]],
      exp: "TULIP: a salvação é obra soberana de Deus, do início ao fim." },
    { type: "mcq", kicker: "Expiação Particular", q: "A Expiação Particular ensina que a morte de Cristo...",
      opts: ["apenas tornou a salvação possível para todos.", "salva de modo eficaz o povo pelo qual Ele morreu.", "não garante a salvação de ninguém.", "foi um exemplo moral apenas."], answer: 1,
      exp: "O Bom Pastor dá a vida pelas ovelhas — e as salva de fato (Jo 10.11,15)." },
    { type: "mcq", kicker: "Graça Irresistível", q: "A Graça Irresistível afirma que aquele que o Pai dá ao Filho...",
      opts: ["pode recusar para sempre a Cristo.", "certamente virá a Cristo, pois o Espírito vence sua resistência.", "só vem se colaborar primeiro.", "vem por mérito próprio."], answer: 1,
      exp: "“Todo o que o Pai me dá virá a mim” (Jo 6.37)." },
    { type: "mcq", kicker: "Eleição Incondicional", q: "Quando Deus escolheu os seus, segundo Efésios 1?",
      opts: ["Depois que creram.", "Antes da fundação do mundo.", "Ao verem suas boas obras.", "No fim dos tempos."], answer: 1,
      exp: "Ele nos escolheu antes da fundação do mundo, para sermos santos (Ef 1.4-5)." },
    { type: "order", kicker: "Memorização · João 10.27", q: "Monte a palavra de Cristo sobre os seus:", ref: "João 10.27",
      words: ["Minhas", "ovelhas", "ouvem", "minha", "voz"],
      exp: "“Minhas ovelhas ouvem minha voz, e eu as conheço, e elas me seguem” — o chamado eficaz do Pastor (Jo 10.27)." },
    { type: "mcq", kicker: "Perseverança dos Santos", q: "Em quem se funda a segurança da salvação?",
      opts: ["Na força de vontade do crente.", "No poder de Deus, que completa a obra iniciada.", "Na constância dos sentimentos.", "Na ausência total de pecado."], answer: 1,
      exp: "Aquele que começou a boa obra há de completá-la (Fp 1.6)." },
    { type: "match", kicker: "TULIP · siglas", q: "Ligue cada letra à sua doutrina:",
      pairs: [["T", "Depravação Total"], ["U", "Eleição Incondicional"], ["L", "Expiação Particular"], ["I", "Graça Irresistível"], ["P", "Perseverança dos Santos"]],
      exp: "TULIP resume os cinco pontos das doutrinas da graça." }
  ]
};

const credos: Course = {
  id: "credos", icon: "i-dove", color: "var(--sage)",
  title: "Credos da Igreja", subtitle: "Em breve", locked: true, questions: []
};

const confissao: Course = {
  id: "confissao", icon: "i-temple", color: "var(--slate)",
  title: "Confissão de Westminster", subtitle: "Em breve", locked: true, questions: []
};

const historia: Course = {
  id: "historia", icon: "i-flame", color: "var(--terra-deep)",
  title: "História da Reforma", subtitle: "Em breve", locked: true, questions: []
};

export const COURSES: Course[] = [solas, tulip, catechismCourse, credos, confissao, historia];
