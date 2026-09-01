import type { Unit } from "./schema";

/**
 * Devocionais — CONTEÚDO ORIGINAL do Lúmen (reflexões, orações e perguntas
 * autorais). As Escrituras referenciam o bible.ts (BLIVRE, domínio público).
 * As "Vozes dos Pais" são paráfrases próprias de temas conhecidos dos
 * reformadores (não citações), numa perspectiva confessional reformada.
 *
 * Para escalar: basta acrescentar mais `DevotionalDay` a uma unidade, ou
 * novas `Unit` a este array. Nada no código precisa mudar.
 */
export const UNITS: Unit[] = [
  {
    id: "conhecendo-a-deus",
    title: "Conhecendo a Deus",
    theme: "Fundamentos",
    icon: "i-lamp", accent: "var(--terra)",
    blurb: "O ponto de partida da fé: quem Deus é e como Ele se dá a conhecer na sua Palavra. Providência, cuidado e refúgio, dos Salmos ao coração.",
    farewell: "Você começou sem saber por onde Deus falaria e termina diante do trono, ouvindo “a quem enviarei?”. Foi este o caminho: a Palavra que ilumina o passo, o Pastor que conduz, o refúgio que sustenta, os céus que proclamam, o olhar que tudo conhece e a santidade que nos põe no lugar certo. Conhecer a Deus nunca foi o fim da linha — é o começo de uma vida enviada. Leve daqui uma certeza: Ele se deu a conhecer porque quis ser conhecido por você.",
    about: "Unidade escrita para o Lúmen, a partir dos Salmos. As leituras vêm da Bíblia Livre (BLIVRE), uma tradução em português de domínio público. Na estação “A Voz dos Pais” você ouve João Calvino (1509–1564) e Agostinho (354–430) — dois mestres que a tradição reformada lê com atenção — em paráfrases nossas dos temas deles, sempre com a fonte indicada.",
    days: [
      {
        id: "cad-1",
        title: "A lâmpada dos meus pés",
        subtitle: "Salmo 119 · Providência",
        minutes: 8,
        carryRef: "sl.119.105",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Antes de ler, peça a Deus que ilumine a sua Palavra. Toque na lâmpada para começar.",
            prayerRef: "sl.119.18" },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "A lâmpada dos meus pés",
            passageRefs: ["sl.119.105", "sl.119.106"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Medite por um instante",
            verseRef: "sl.119.105", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Os óculos da Escritura",
            intro: "Ao longo dos séculos, mestres da fé meditaram nas Escrituras. Nesta estação, um deles ajuda a iluminar o texto de hoje.",
            author: "João Calvino", initial: "C", source: "Institutas I.6.1 · paráfrase",
            text: "Calvino comparava a Escritura a um par de óculos. Sem eles, enxergamos Deus de forma confusa e borrada; com eles, as letras se ordenam e passamos a ler com clareza quem Deus é. A Palavra não inventa a luz — ela foca a luz para os nossos olhos fracos." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde a Palavra iluminou um passo seu hoje?",
            intro: "Responda ao texto de hoje em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus não me mostra o caminho inteiro de uma vez — Ele ilumina o passo de hoje." },
              { key: "gratidao", example: "Agradeço pelas vezes em que a Palavra me impediu de tomar uma decisão ruim." },
              { key: "confissao", example: "Tenho decidido muita coisa sem abrir a Bíblia, confiando só no meu próprio julgamento." },
              { key: "suplica", example: "Senhor, ilumina a decisão que preciso tomar esta semana." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia. Ore com ela ou deixe que ela abra as suas próprias palavras — Deus ouve as duas.",
            prayer: "Pai, a tua Palavra é lâmpada para os meus pés. Firma os meus passos hoje, guarda-me do mal e faze-me andar na tua luz. Por Cristo, amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 119 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl.119.105",
            opts: ["Escudo", "Lâmpada", "Espada", "Coroa"], answer: 1,
            exp: "A Palavra ilumina o próximo passo — não o caminho inteiro de uma vez, mas o suficiente para hoje." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para Calvino, a Escritura é como...",
            opts: ["Uma espada que se quebra.", "Óculos que nos deixam ver Deus com clareza.", "Uma lâmpada que se apaga.", "Um mapa perdido."], answer: 1,
            exp: "Os 'óculos' da Escritura: sem ela vemos Deus de forma confusa; por ela, com clareza." },
          { type: "order", kicker: "Memorização · Salmo 119.133", q: "Monte a primeira parte do versículo:", ref: "Salmo 119.133",
            words: ["Firma", "meus", "passos", "em", "tua", "palavra"],
            exp: "“Firma meus passos em tua palavra” — a providência de Deus sustenta quem anda com Ele." }
        ]
      },
      {
        id: "cad-2",
        title: "O SENHOR é o meu pastor",
        subtitle: "Salmo 23 · Cuidado",
        minutes: 7,
        carryRef: "sl.23.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Comece em silêncio, reconhecendo que o Pastor já está aqui. Toque na lâmpada.",
            prayer: "Bom Pastor, aquieta a minha alma e prepara-me para ouvir a tua voz. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Nada me faltará",
            passageRefs: ["sl.23.1"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Descanse na provisão",
            verseRef: "sl.23.1", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O coração inquieto",
            intro: "Nesta estação, um pai da Igreja ajuda a entender o descanso que só Deus dá.",
            author: "Agostinho", initial: "A", source: "Confissões I.1 · paráfrase",
            text: "Agostinho reconheceu que o coração humano vive inquieto, correndo atrás de mil pastores que não saciam. Só descansa quem se deixa conduzir por Aquele que nos fez. Dizer 'o SENHOR é o meu pastor' é confessar que a busca acabou: encontrei quem cuida de mim." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Em que área você tem tentado ser o próprio pastor?",
            intro: "Responda ao Salmo 23 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus não é só poderoso: Ele cuida de mim de perto, como um pastor cuida da ovelha." },
              { key: "gratidao", example: "Agradeço porque não me faltou o essencial, mesmo quando achei que faltaria." },
              { key: "confissao", example: "Tenho carregado sozinho o peso de resolver tudo, como se não houvesse Pastor." },
              { key: "suplica", example: "Guia-me na área em que estou perdido e não quero admitir." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — deixe que ela abra as suas próprias palavras.",
            prayer: "Senhor, tu és o meu Pastor. Ensina-me a confiar que, contigo, nada me faltará. Guia-me hoje. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 23 · O Desafio", q: "Como o salmo começa?", verseRef: "sl.23.1",
            opts: ["O SENHOR é meu escudo", "O SENHOR é meu pastor", "O SENHOR é meu juiz", "O SENHOR é meu rei"], answer: 1,
            exp: "A imagem do Pastor atravessa toda a Escritura e culmina em Cristo, o Bom Pastor (Jo 10)." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "Segundo Agostinho, o coração humano...",
            opts: ["já nasce em descanso", "descansa em qualquer fé", "só descansa em Deus", "nunca pode descansar"], answer: 2,
            exp: "Feitos por Deus e para Deus, só nele o coração encontra repouso." },
          { type: "match", kicker: "Ligue as imagens", q: "Relacione a imagem ao seu sentido:",
            pairs: [["Pastor", "Cuidado e direção"], ["Ovelha", "Dependência"], ["Nada faltará", "Provisão de Deus"], ["Rebanho", "Povo de Deus"]],
            exp: "O Salmo 23 desdobra o cuidado pastoral de Deus em imagens concretas." }
        ]
      },
      {
        id: "cad-3",
        title: "Deus é o nosso refúgio",
        subtitle: "Salmo 46 · Confiança",
        minutes: 8,
        carryRef: "sl.46.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga diante de Deus a sua maior preocupação de hoje. Toque na lâmpada.",
            prayer: "Deus forte, tu és o meu refúgio. Aquieta a tempestade dentro de mim. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Auxílio bem presente",
            passageRefs: ["sl.46.1", "sl.46.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Aquiete-se e saiba",
            verseRef: "sl.46.9", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Uma fortaleza forte",
            intro: "Nesta estação, um reformador ecoa a força deste salmo.",
            author: "Martinho Lutero", initial: "L", source: "Castelo Forte, sobre o Salmo 46 · paráfrase",
            text: "Lutero se apoiou neste salmo em tempos de medo e escreveu sobre Deus como uma fortaleza segura. A ideia é simples e firme: quando o mundo treme, o crente não corre para dentro de si mesmo, mas para dentro de Deus. A quietude do versículo 10 não é passividade — é confiança que descansa porque sabe quem reina." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que muda quando você lembra que Deus reina sobre isso?",
            intro: "Traga a sua preocupação de hoje e responda em quatro frentes.",
            threads: [
              { key: "ensino", example: "Deus continua reinando mesmo quando tudo à minha volta parece fora de controle." },
              { key: "gratidao", example: "Agradeço por já ter atravessado tempestades que eu achava que não passariam." },
              { key: "confissao", example: "Minha primeira reação ao medo é a ansiedade, não a oração." },
              { key: "suplica", example: "Aquieta o meu coração e lembra-me de quem está no comando." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Ore devagar. Cada frase é um lugar onde descansar, não uma fórmula.",
            prayer: "Pai, quando tudo estremece, tu permaneces. Sê hoje o meu refúgio e a minha força. Faze-me quieto para saber que tu és Deus. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 46 · O Desafio", q: "O que Deus é para o seu povo, segundo o v.1?", verseRef: "sl.46.1",
            opts: ["Um juiz distante", "Refúgio e força", "Um espectador", "Uma lembrança"], answer: 1,
            exp: "Refúgio (onde nos escondemos) e força (com que enfrentamos): abrigo e coragem." },
          { type: "order", kicker: "Memorização · Salmo 46.9", q: "Monte a ordem do Senhor:", ref: "Salmo 46.9",
            words: ["Ficai", "quietos", "e", "sabei", "que", "eu", "sou", "Deus"],
            exp: "A quietude nasce de saber quem Deus é, não de fingir que o problema sumiu." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "Para onde o crente corre quando o mundo treme?",
            opts: ["Para dentro de si mesmo", "Para dentro de Deus", "Para longe da fé", "Para o acaso"], answer: 1,
            exp: "Deus é a fortaleza segura — corremos para dentro dele." }
        ]
      },
      {
        id: "cad-4",
        title: "Os céus proclamam",
        subtitle: "Salmo 19 · Revelação",
        minutes: 8,
        carryRef: "sl.19.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Antes de ler, lembre-se de que Deus já vinha falando antes de você abrir a Bíblia. Toque na lâmpada.",
            prayer: "Senhor, abre os meus olhos para te ver onde eu já deixei de olhar. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "A glória e a lei",
            passageRefs: ["sl.19.1", "sl.19.7"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "A lei que restaura",
            verseRef: "sl.19.7", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O teatro da glória",
            intro: "Calvino explica por que a criação inteira fala de Deus — e por que ela não basta.",
            author: "João Calvino", initial: "C", source: "Institutas I.5 · paráfrase",
            text: "Calvino chamava o mundo criado de teatro da glória de Deus: não há canto do universo onde não brilhe alguma centelha dele. Mas os nossos olhos são fracos demais para ler esse espetáculo corretamente — por isso Deus acrescentou a sua Palavra. A criação nos deixa sem desculpa; a Escritura nos dá o Deus que salva." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde você deixou de ver a mão de Deus por pressa?",
            intro: "Responda ao Salmo 19 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus fala de duas maneiras: pelo mundo que fez e pela Palavra que deu." },
              { key: "gratidao", example: "Agradeço por uma beleza simples que vi hoje e quase não notei." },
              { key: "confissao", example: "Atravesso os dias sem levantar os olhos para nada além das minhas tarefas." },
              { key: "suplica", example: "Restaura a minha alma pela tua Palavra, como este salmo promete." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore com ela ou com as suas palavras.",
            prayer: "Senhor, os céus falam de ti e a tua lei restaura a minha alma. Faze-me ler o teu mundo e a tua Palavra com olhos atentos. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 19 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl.19.1",
            opts: ["sabedoria", "glória", "força", "paz"], answer: 1,
            exp: "“Os céus declaram a glória de Deus” — a criação é testemunha, não acaso (Sl 19.1)." },
          { type: "mcq", kicker: "Salmo 19 · O Desafio", q: "Como o salmo descreve a lei do SENHOR?", verseRef: "sl.19.7",
            opts: ["pesada", "perfeita", "opcional", "confusa"], answer: 1,
            exp: "A lei do SENHOR é perfeita e restaura a alma — ela cura, não apenas exige (Sl 19.7)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Por que a criação não basta, segundo Calvino?",
            opts: ["porque não fala de Deus", "porque os nossos olhos são fracos e precisam da Escritura", "porque Deus se escondeu", "porque a natureza é má"], answer: 1,
            exp: "O mundo é o teatro da glória de Deus, mas só a Palavra nos dá o Deus que salva (I.5)." }
        ]
      },
      {
        id: "cad-5",
        title: "Sonda-me, ó Deus",
        subtitle: "Salmo 139 · Onisciência",
        minutes: 8,
        carryRef: "sl.139.23",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Venha inteiro — inclusive com o que você esconde dos outros. Deus já sabe. Toque na lâmpada.",
            prayer: "Senhor, tu já me conheces por dentro. Não preciso fingir contigo. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Tu me conheces",
            passageRefs: ["sl.139.1", "sl.139.7"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Examina o meu coração",
            verseRef: "sl.139.23", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Mais íntimo do que eu mesmo",
            intro: "Agostinho descobriu que Deus estava mais perto do que ele imaginava — e mais dentro.",
            author: "Agostinho", initial: "A", source: "Confissões III.6 · paráfrase",
            text: "Agostinho passou anos procurando Deus longe, no mundo, e o encontrou dentro: Deus estava mais íntimo a ele do que o seu próprio íntimo, e mais alto do que o mais alto de si. Ser plenamente conhecido por Deus não é ameaça — é a única forma de ser plenamente amado sem máscara." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que você tem escondido, sabendo que Deus já vê?",
            intro: "Responda ao Salmo 139 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Não existe lugar nem pensamento meu que esteja fora do alcance de Deus." },
              { key: "gratidao", example: "Agradeço por ser conhecido por inteiro e ainda assim amado." },
              { key: "confissao", example: "Tenho vivido uma versão editada de mim diante das pessoas — e tentado o mesmo com Deus." },
              { key: "suplica", example: "Sonda-me e mostra-me o que eu mesmo não quero enxergar." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore devagar, sem pressa de terminar.",
            prayer: "Senhor, examina-me e conhece o meu coração. Mostra-me o que precisa mudar e guia-me pelo caminho eterno. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 139 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl.139.1",
            opts: ["esqueces", "conheces", "julgas", "evitas"], answer: 1,
            exp: "“Tu me examinas e me conheces” — Deus me conhece melhor do que eu mesmo (Sl 139.1)." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "Onde Agostinho encontrou a Deus?",
            opts: ["longe, no mundo", "mais íntimo a ele do que o seu próprio íntimo", "apenas no templo", "em lugar nenhum"], answer: 1,
            exp: "Deus é mais íntimo a nós do que nós mesmos — conhecidos por inteiro e amados sem máscara." },
          { type: "order", kicker: "Memorização · Salmo 139.23", q: "Monte o pedido do salmista:", ref: "Salmo 139.23",
            words: ["Examina-me", "Deus", "e", "conhece", "meu", "coração"],
            exp: "“Examina-me, Deus, e conhece meu coração” — quem não tem o que esconder pode pedir isso (Sl 139.23)." }
        ]
      },
      {
        id: "cad-6",
        title: "Santo, santo, santo",
        subtitle: "Isaías 6 · Santidade",
        minutes: 9,
        carryRef: "is.6.8",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Hoje o texto é uma visão do trono. Chegue com reverência. Toque na lâmpada.",
            prayer: "Santo Deus, prepara o meu coração para te ver como tu és. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Diante do trono",
            passageRefs: ["is.6.3", "is.6.5"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Toda a terra cheia da sua glória",
            verseRef: "is.6.3", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Duas coisas que se revelam juntas",
            intro: "Calvino abre as Institutas exatamente com o que acontece a Isaías nesta visão.",
            author: "João Calvino", initial: "C", source: "Institutas I.1.1–2 · paráfrase",
            text: "Calvino começa a sua obra dizendo que quase toda a sabedoria que possuímos consiste em duas partes: o conhecimento de Deus e o de nós mesmos — e que uma revela a outra. Enquanto nos comparamos com pessoas, achamos que vamos bem. Quando levantamos os olhos para Deus, como Isaías, a régua muda e enxergamos a verdade sobre nós. É por isso que a visão do trono termina em “ai de mim”." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Com quem você tem se comparado, em vez de olhar para Deus?",
            intro: "Responda a Isaías 6 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Ver quem Deus é me mostra, ao mesmo tempo, quem eu sou." },
              { key: "gratidao", example: "Agradeço porque, depois do “ai de mim”, veio a purificação e o chamado." },
              { key: "confissao", example: "Meço a minha vida pelas pessoas ao meu redor, e não pela santidade de Deus." },
              { key: "suplica", example: "Purifica os meus lábios e envia-me, como enviaste Isaías." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore com reverência e sem pressa.",
            prayer: "Santo, santo, santo és tu, Senhor. Diante da tua glória reconheço o que sou; purifica-me e faze-me dizer: eis-me aqui, envia-me. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Isaías 6 · O Desafio", q: "Qual foi a reação de Isaías diante da santidade de Deus?", verseRef: "is.6.5",
            opts: ["Sou digno", "Ai de mim", "Nada senti", "Já esperava"], answer: 1,
            exp: "Ver a Deus como Ele é revela o que somos — e isso precede a purificação (Is 6.5)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para Calvino, conhecer a Deus e conhecer a si mesmo...",
            opts: ["não têm relação entre si", "estão ligados: um revela o outro", "se excluem", "são impossíveis"], answer: 1,
            exp: "Quase toda a sabedoria consiste nessas duas partes, e uma revela a outra (I.1.1–2)." },
          { type: "match", kicker: "Isaías 6 · A visão do trono", q: "Relacione cada momento ao seu sentido:",
            pairs: [["Santo, santo, santo", "Quem Deus é"], ["Ai de mim", "Quem eu sou"], ["A brasa do altar", "A purificação"], ["Envia-me", "O chamado"]],
            exp: "A visão do trono segue uma ordem: adoração, confissão, purificação e envio." }
        ]
      }
    ]
  },
  {
    id: "salmos-de-confianca",
    title: "Salmos de Confiança",
    theme: "Confiança",
    icon: "i-anchor", accent: "var(--forest)",
    blurb: "Quando o medo aperta e o mundo estremece, os Salmos ensinam o coração a descansar. Luz, deleite na Palavra e a certeza de pertencer a Deus.",
    farewell: "Seis salmos, seis estados de alma: o medo, o deleite, a adoração, o desamparo, a secura e a culpa. Nenhum deles foi escrito por alguém com a vida resolvida — e é isso que os torna confiáveis. A confiança bíblica não nasce de circunstâncias boas, mas de um Deus que não muda quando elas mudam. Você aprendeu aqui a falar com a sua própria alma quando ela desanima. Continue falando.",
    about: "Três salmos que a Igreja reza há séculos em tempos de medo: o 27 (coragem), o 1 (o deleite na Palavra) e o 100 (adoração). Texto bíblico da Bíblia Livre (BLIVRE), de domínio público; as vozes de Calvino e Lutero aparecem em paráfrases nossas, com a fonte indicada em cada estação.",
    days: [
      {
        id: "sc-1",
        title: "Minha luz e salvação",
        subtitle: "Salmo 27 · Coragem",
        minutes: 7,
        carryRef: "sl.27.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Nomeie diante de Deus um medo que você carrega. Toque na lâmpada.",
            prayer: "Senhor, tu és a minha luz. Dissipa o meu medo com a tua presença. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "A quem temerei?", passageRefs: ["sl.27.1"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Descanse na luz", verseRef: "sl.27.1", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O temor certo",
            intro: "Um reformador nos ajuda a redirecionar o medo.",
            author: "João Calvino", initial: "C", source: "Institutas I.2.2 · paráfrase",
            text: "Calvino ensinava que quem teme a Deus deixa de temer mil outras coisas. O temor reverente do Senhor não paralisa — liberta. Quando Deus é a maior realidade da minha vida, as ameaças diminuem ao seu tamanho verdadeiro." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que medo perde o poder quando Deus é a sua luz?",
            intro: "Nomeie o seu medo e responda em quatro frentes.",
            threads: [
              { key: "ensino", example: "Se Deus é a minha luz e a minha salvação, nenhum medo tem a última palavra." },
              { key: "gratidao", example: "Agradeço porque Ele já me livrou de um medo que me dominava." },
              { key: "confissao", example: "Tenho temido mais a opinião das pessoas do que a Deus." },
              { key: "suplica", example: "Tira de mim o medo que está me travando hoje." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Ore em voz alta, se puder — o medo perde força quando a verdade é dita.",
            prayer: "Senhor, luz da minha vida e minha salvação, a quem temerei? Anda comigo hoje e cala os meus medos. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 27 · O Desafio", q: "O SENHOR é minha luz e minha...", verseRef: "sl.27.1",
            opts: ["fortuna", "salvação", "fama", "força apenas"], answer: 1,
            exp: "Luz (que revela) e salvação (que resgata): por isso, a quem temer?" },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "O temor reverente de Deus, segundo Calvino,...",
            opts: ["paralisa o crente", "liberta de outros medos", "é desnecessário", "vem das obras"], answer: 1,
            exp: "Temer a Deus acima de tudo encolhe os outros temores ao tamanho real." },
          { type: "match", kicker: "Salmo 27 · Luz e temor", q: "Relacione cada palavra ao que ela faz:",
            pairs: [["Luz", "Revela o caminho"], ["Salvação", "Resgata o pecador"], ["Temor de Deus", "Liberta de outros medos"], ["Confiança", "Descanso na presença"]],
            exp: "O Salmo 27 troca o medo pela confiança na presença de Deus." }
        ]
      },
      {
        id: "sc-2",
        title: "Deleite na Palavra",
        subtitle: "Salmo 1 · Meditação",
        minutes: 7,
        carryRef: "sl.1.2",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Peça a Deus prazer — e não só disciplina — na sua Palavra. Toque na lâmpada.",
            prayer: "Pai, dá-me deleite na tua Palavra, não apenas dever. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Medita de dia e de noite", passageRefs: ["sl.1.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Rumine a Palavra", verseRef: "sl.1.2", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A árvore plantada",
            intro: "Um reformador ilustra o fruto da meditação.",
            author: "Martinho Lutero", initial: "L", source: "Oratio, meditatio, tentatio · paráfrase",
            text: "Lutero comparava a meditação a ruminar: voltar ao mesmo texto de novo e de novo, deixando-o descer do olho ao coração. A árvore do Salmo 1 não dá fruto de repente — dá porque está plantada e enraizada junto às águas da Palavra." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que verdade da Palavra você quer 'ruminar' hoje?",
            intro: "Responda ao Salmo 1 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus me quer enraizado nEle, e não apenas informado sobre Ele." },
              { key: "gratidao", example: "Agradeço pelo fruto que a Palavra já deu em mim, mesmo devagar." },
              { key: "confissao", example: "Tenho lido a Bíblia por obrigação, sem prazer nenhum." },
              { key: "suplica", example: "Dá-me deleite na tua Palavra, e não apenas disciplina." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — plante-a e volte a ela durante o dia.",
            prayer: "Senhor, planta-me junto às águas da tua Palavra, para que eu dê fruto no tempo certo. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 1 · O Desafio", q: "Onde está o prazer do homem bem-aventurado?", verseRef: "sl.1.2",
            opts: ["Nas riquezas", "Na lei do SENHOR", "Na fama", "No conselho dos maus"], answer: 1,
            exp: "O deleite na Palavra é a raiz de uma vida frutífera e firme." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "Meditar, para Lutero, é como...",
            opts: ["ler uma vez e esquecer", "ruminar o texto até o coração", "decorar sem entender", "evitar as Escrituras"], answer: 1,
            exp: "Voltar ao texto até ele descer do olho ao coração." },
          { type: "order", kicker: "Memorização · Salmo 1.2", q: "Complete a meditação:", ref: "Salmo 1.2",
            words: ["medita", "em", "sua", "Lei", "de", "dia", "e", "de", "noite"],
            exp: "A meditação constante mantém a árvore verde e frutífera." }
        ]
      },
      {
        id: "sc-3",
        title: "Ele nos fez",
        subtitle: "Salmo 100 · Adoração",
        minutes: 7,
        carryRef: "sl.100.3",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Comece reconhecendo: eu sou criatura, Ele é o Criador. Toque na lâmpada.",
            prayer: "Criador, ensina-me a viver como quem pertence a ti. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Foi ele que nos fez", passageRefs: ["sl.100.3"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Você pertence a Ele", verseRef: "sl.100.3", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Não a nós mesmos",
            intro: "Um pai da Igreja resume de onde vem a nossa identidade.",
            author: "Agostinho", initial: "A", source: "Confissões, criatura e Criador · paráfrase",
            text: "Agostinho insistia que não nos criamos nem nos sustentamos. Reconhecer 'foi ele que nos fez, e não nós a nós mesmos' derruba o orgulho e funda a adoração: tudo o que sou é dom. Quem se recebe das mãos de Deus aprende a devolvê-lo em louvor." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que muda ao lembrar que você não se fez a si mesmo?",
            intro: "Responda como criatura diante do Criador, em quatro frentes.",
            threads: [
              { key: "ensino", example: "Eu não me criei nem me sustento: tudo o que sou vem das mãos de Deus." },
              { key: "gratidao", example: "Agradeço por dons que sempre tratei como mérito meu." },
              { key: "confissao", example: "Tenho vivido como se fosse dono da minha vida e senhor dos meus planos." },
              { key: "suplica", example: "Ensina-me a viver como quem pertence a ti." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Ore como criatura diante do Criador — sem pressa e sem defesa.",
            prayer: "Senhor, tu me fizeste e eu sou teu. Recebe hoje a minha vida em adoração. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 100 · O Desafio", q: "Quem nos fez, segundo o v.3?", verseRef: "sl.100.3",
            opts: ["Nós mesmos", "O acaso", "O SENHOR", "O destino"], answer: 2,
            exp: "Somos criatura, não criador — e isso funda a adoração." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "Reconhecer que não nos criamos...",
            opts: ["alimenta o orgulho", "funda a adoração", "não muda nada", "nega a Deus"], answer: 1,
            exp: "Tudo o que sou é dom; por isso adoro." },
          { type: "match", kicker: "Salmo 100 · Criatura e Criador", q: "Relacione cada termo ao seu lugar:",
            pairs: [["Criador", "Deus"], ["Criatura", "Nós"], ["Pertencer", "Somos dele"], ["Louvor", "Resposta certa"]],
            exp: "Da criação nasce a gratidão, e da gratidão o louvor." }
        ]
      },
      {
        id: "sc-4",
        title: "O guarda que não dorme",
        subtitle: "Salmo 121 · Proteção",
        minutes: 7,
        carryRef: "sl.121.2",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga aquilo que tem tirado o seu sono. Toque na lâmpada.",
            prayer: "Senhor, tu não dormes. Ensina-me a descansar porque tu velas. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "De onde vem o meu socorro",
            passageRefs: ["sl.121.1", "sl.121.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Ele não cochila",
            verseRef: "sl.121.3", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A providência é um Pai, não uma engrenagem",
            intro: "Calvino distingue a providência cristã de um destino cego.",
            author: "João Calvino", initial: "C", source: "Institutas I.16–17 · paráfrase",
            text: "Calvino insistia que a providência não é uma engrenagem impessoal girando sozinha, mas as mãos de um Pai que sustenta cada detalhe. Saber isso não nos torna passivos: torna-nos tranquilos. O crente age, planeja e trabalha — mas dorme, porque quem guarda a sua vida não cochila." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que você tem tentado vigiar sozinho?",
            intro: "Responda ao Salmo 121 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "O meu socorro não vem dos montes nem de mim: vem do SENHOR, que fez os céus e a terra." },
              { key: "gratidao", example: "Agradeço por um perigo do qual fui guardado sem nem ficar sabendo." },
              { key: "confissao", example: "Tenho perdido o sono tentando vigiar o que não está nas minhas mãos." },
              { key: "suplica", example: "Guarda o meu caminho hoje, e ensina-me a descansar enquanto tu velas." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore antes de dormir, se puder.",
            prayer: "Senhor, tu guardas a minha entrada e a minha saída. Vela por mim esta noite e ensina-me a soltar o que não posso controlar. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 121 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl.121.2",
            opts: ["do meu esforço", "do SENHOR", "do acaso", "dos montes"], answer: 1,
            exp: "“Meu socorro vem do SENHOR, que fez os céus e a terra” (Sl 121.2)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "A providência, para Calvino, é...",
            opts: ["uma engrenagem impessoal", "as mãos de um Pai que sustenta cada detalhe", "o mesmo que destino cego", "indiferente ao crente"], answer: 1,
            exp: "Saber disso não nos torna passivos: torna-nos tranquilos (I.16–17)." },
          { type: "order", kicker: "Memorização · Salmo 121.2", q: "Monte a confissão do salmista:", ref: "Salmo 121.2",
            words: ["Meu", "socorro", "vem", "do", "SENHOR"],
            exp: "“Meu socorro vem do SENHOR” — a origem certa da segurança (Sl 121.2)." }
        ]
      },
      {
        id: "sc-5",
        title: "Sede de Deus",
        subtitle: "Salmo 42 · Saudade",
        minutes: 8,
        carryRef: "sl.42.5",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Se hoje a fé parece seca, este salmo foi escrito para você. Toque na lâmpada.",
            prayer: "Senhor, tenho sede de ti mesmo quando não sinto. Vem. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Minha alma tem sede",
            passageRefs: ["sl.42.1", "sl.42.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Espera em Deus",
            verseRef: "sl.42.5", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Feitos para Ele",
            intro: "Agostinho explica por que nada além de Deus sacia por completo.",
            author: "Agostinho", initial: "A", source: "Confissões I.1 · paráfrase",
            text: "Agostinho reconheceu que fomos feitos para Deus, e por isso o coração vive inquieto até descansar nele. A sede que sentimos não é defeito: é bússola. Ela aponta para Aquele que nos fez. O erro não é ter sede — é tentar matá-la em fontes que não sustentam." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Em que fonte você tem tentado matar essa sede?",
            intro: "Responda ao Salmo 42 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "A alma tem uma sede que só Deus sacia — e sentir falta dele já é obra dele em mim." },
              { key: "gratidao", example: "Agradeço porque, mesmo sem sentir, posso esperar nele e Ele não muda." },
              { key: "confissao", example: "Tenho tentado saciar em telas e distrações uma sede que é de Deus." },
              { key: "suplica", example: "Restaura em mim o desejo por ti quando eu não sentir nada." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — vale orar mesmo sem sentir vontade.",
            prayer: "Deus vivo, a minha alma tem sede de ti. Quando eu estiver abatido, ensina-me a falar à minha alma e a esperar em ti. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 42 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl.42.2",
            opts: ["glória", "Deus", "descanso", "respostas"], answer: 1,
            exp: "“Minha alma tem sede de Deus, do Deus vivente” (Sl 42.2)." },
          { type: "mcq", kicker: "Salmo 42 · O Desafio", q: "Como o salmista descreve a própria alma?", verseRef: "sl.42.5",
            opts: ["alegre", "abatida", "distraída", "segura"], answer: 1,
            exp: "Ele fala à própria alma abatida e a manda esperar em Deus — a fé não depende do sentimento (Sl 42.5)." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "A sede que sentimos, segundo Agostinho, é...",
            opts: ["um defeito a ser corrigido", "uma bússola que aponta para Deus", "sinal de pouca fé", "irrelevante"], answer: 1,
            exp: "Fomos feitos para Deus; o erro não é ter sede, mas buscá-la em fontes que não sustentam." }
        ]
      },
      {
        id: "sc-6",
        title: "Cria em mim um coração puro",
        subtitle: "Salmo 51 · Arrependimento",
        minutes: 8,
        carryRef: "sl.51.10",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Este é o salmo de quem errou feio e voltou. Venha como está. Toque na lâmpada.",
            prayer: "Senhor, não venho me defender. Venho me entregar. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Renova um espírito firme",
            passageRefs: ["sl.51.10", "sl.51.12"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Um coração novo",
            verseRef: "sl.51.10", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A vida inteira, arrependimento",
            intro: "A primeira das 95 teses de Lutero fala exatamente disto.",
            author: "Martinho Lutero", initial: "L", source: "95 Teses, tese 1 · paráfrase",
            text: "Lutero abriu as 95 teses dizendo que, quando Cristo chamou ao arrependimento, quis que a vida inteira do crente fosse arrependimento. Não um ato isolado, nem um ritual pago à igreja: um retorno diário. Davi não pede a Deus um remendo — pede um coração criado de novo. Só quem sabe que não pode se consertar sozinho ora assim." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que você precisa trazer à luz hoje?",
            intro: "Responda ao Salmo 51 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus não quer o meu disfarce, mas um coração quebrado — e é isso que Ele refaz." },
              { key: "gratidao", example: "Agradeço porque já fui perdoado de algo que eu achava imperdoável." },
              { key: "confissao", example: "Tenho pedido desculpas por hábito, sem de fato querer mudar." },
              { key: "suplica", example: "Cria em mim um coração puro e restaura a alegria da tua salvação." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore como quem precisa mesmo.",
            prayer: "Ó Deus, cria em mim um coração puro e renova um espírito firme dentro de mim. Restaura a alegria da tua salvação. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 51 · O Desafio", q: "Complete o pedido de Davi:", verseRef: "sl.51.10",
            opts: ["forte", "puro", "alegre", "tranquilo"], answer: 1,
            exp: "“Cria em mim um coração puro, ó Deus” — Davi pede criação, não remendo (Sl 51.10)." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "Para Lutero, o arrependimento é...",
            opts: ["um ato único e isolado", "a vida inteira do crente", "um ritual pago à igreja", "desnecessário depois da conversão"], answer: 1,
            exp: "A primeira das 95 teses: Cristo quis que toda a vida do crente fosse arrependimento." },
          { type: "order", kicker: "Memorização · Salmo 51.10", q: "Monte o pedido de Davi:", ref: "Salmo 51.10",
            words: ["Cria", "em", "mim", "um", "coração", "puro"],
            exp: "“Cria em mim um coração puro, ó Deus” — só o Criador pode criar de novo (Sl 51.10)." }
        ]
      }
    ]
  },
  {
    id: "descanso-e-graca",
    title: "Descanso e Graça",
    theme: "Evangelho",
    icon: "i-dove", accent: "var(--mustard-deep)",
    blurb: "O coração do Evangelho: somos salvos pela graça, não pelo mérito. Descanse no dom de Deus e nas misericórdias que se renovam a cada manhã.",
    farewell: "Você entrou por Efésios 2, de mãos vazias, e sai por Romanos 8, com a certeza de que nada as arranca da mão dele. Entre uma coisa e outra: o convite ao cansado, as misericórdias de cada manhã, o fim da condenação e a alegria do perdão. Se ficar uma só frase, que seja esta — o veredito sobre você já foi dado, e é a favor. Descanse nela.",
    about: "Unidade sobre a graça, no centro da fé reformada: Efésios 2 (salvos por dom), Mateus 11 (o descanso que Cristo oferece) e Lamentações 3 (a fidelidade que se renova). Traz Martinho Lutero (1483–1546), o reformador cuja redescoberta da justificação pela fé abriu a Reforma, e Agostinho — ambos em paráfrases nossas.",
    days: [
      {
        id: "dg-1",
        title: "A graça que salva",
        subtitle: "Efésios 2 · Salvação",
        minutes: 8,
        carryRef: "ef.2.8",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Venha sem nada nas mãos — a graça não se compra. Toque na lâmpada.",
            prayer: "Deus de graça, esvazia as minhas mãos para eu receber o que só tu podes dar. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Pela graça, por meio da fé",
            passageRefs: ["ef.2.8", "ef.2.9"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Descanse no dom", verseRef: "ef.2.8", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Não por mérito, mas por dom",
            intro: "Um reformador resume o coração do Evangelho.",
            author: "Martinho Lutero", initial: "L", source: "Prefácio às obras latinas · paráfrase",
            text: "Lutero descobriu, lendo Paulo, que a justiça de Deus não é uma exigência que nos esmaga, mas um presente que nos veste. Deixamos de tentar subir até Deus por obras e recebemos, de graça, a justiça de Cristo. O crente vive de mãos abertas, não de mãos cheias." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Em que você ainda tenta 'merecer' o amor de Deus?",
            intro: "Responda à graça de Efésios 2 em quatro frentes.",
            threads: [
              { key: "ensino", example: "A salvação é presente de Deus, não pagamento pelo que eu fiz." },
              { key: "gratidao", example: "Agradeço por ser amado sem ter feito nada para merecer." },
              { key: "confissao", example: "Ainda tento provar o meu valor a Deus com desempenho." },
              { key: "suplica", example: "Ajuda-me a descansar na graça, e não na minha performance." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Ore de mãos abertas. Não há nada a apresentar, só a receber.",
            prayer: "Pai, não me salvei a mim mesmo: tu me salvaste pela graça. Que eu viva hoje grato, e não ansioso por merecer. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Efésios 2 · O Desafio", q: "Somos salvos pela graça, por meio de quê?", verseRef: "ef.2.8",
            opts: ["das obras", "da fé", "do mérito", "da lei"], answer: 1,
            exp: "A fé recebe a graça; ambas são dom de Deus, não conquista nossa." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "A justiça de Deus, para Lutero, é...",
            opts: ["uma exigência que esmaga", "um presente que veste o crente", "uma recompensa por obras", "impossível de receber"], answer: 1,
            exp: "A justiça de Cristo é dada de graça a quem crê." },
          { type: "order", kicker: "Memorização · Efésios 2.9", q: "Monte a razão de não haver orgulho:", ref: "Efésios 2.9",
            words: ["para", "que", "ninguém", "tenha", "orgulho", "de", "si", "mesmo"],
            exp: "Se a salvação é dom, toda a glória é de Deus — Soli Deo Gloria." }
        ]
      },
      {
        id: "dg-2",
        title: "Vinde a mim",
        subtitle: "Mateus 11 · Descanso",
        minutes: 7,
        carryRef: "mt.11.28",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga o seu cansaço de hoje — é a ele que Jesus fala. Toque na lâmpada.",
            prayer: "Senhor Jesus, venho cansado. Dá-me o teu descanso. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Eu vos aliviarei",
            passageRefs: ["mt.11.28", "mt.11.29"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Entregue o peso", verseRef: "mt.11.28", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O coração inquieto encontra repouso",
            intro: "Um pai da Igreja fala do descanso da alma.",
            author: "Agostinho", initial: "A", source: "Confissões I.1 · paráfrase",
            text: "Agostinho passou anos exausto, buscando paz em tudo, menos em Deus. O convite de Jesus é o fim dessa corrida: o jugo de Cristo é leve porque Ele carrega conosco. Descansar não é parar de andar — é andar atrelado a Quem sustenta." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que peso você precisa entregar a Cristo hoje?",
            intro: "Traga o seu cansaço e responda em quatro frentes.",
            threads: [
              { key: "ensino", example: "Jesus chama justamente quem está cansado, não quem está forte." },
              { key: "gratidao", example: "Agradeço porque não preciso chegar inteiro para ser recebido por Ele." },
              { key: "confissao", example: "Tenho carregado sozinho um peso que Ele já se ofereceu para levar comigo." },
              { key: "suplica", example: "Toma este cansaço que eu não consigo mais sustentar." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — traga o cansaço junto, não o esconda.",
            prayer: "Jesus, manso e humilde, tomo hoje o teu jugo. Descansa a minha alma em ti. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Mateus 11 · O Desafio", q: "A quem Jesus chama?", verseRef: "mt.11.28",
            opts: ["fortes e prontos", "cansados e sobrecarregados", "somente os justos", "os que não erram"], answer: 1,
            exp: "O convite é para quem não aguenta mais — é ali que a graça age." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "O descanso da alma, segundo Agostinho, está em...",
            opts: ["parar de andar", "buscar paz em tudo", "andar atrelado a Cristo", "esforçar-se mais"], answer: 2,
            exp: "O jugo de Cristo é leve porque Ele carrega conosco." },
          { type: "match", kicker: "Mateus 11 · O convite", q: "Relacione cada palavra do convite:",
            pairs: [["Cansados", "O convite de Jesus"], ["Jugo", "Andar com Cristo"], ["Manso e humilde", "O coração de Jesus"], ["Descanso", "Para a alma"]],
            exp: "Em Cristo, o esforço vira confiança e o peso vira descanso." }
        ]
      },
      {
        id: "dg-3",
        title: "Misericórdias que se renovam",
        subtitle: "Lamentações 3 · Fidelidade",
        minutes: 7,
        carryRef: "lm.3.23",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Mesmo depois de um dia difícil, há misericórdia nova. Toque na lâmpada.",
            prayer: "Deus fiel, abre os meus olhos para as tuas misericórdias de hoje. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Novas cada manhã",
            passageRefs: ["lm.3.22", "lm.3.23"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Grande é a fidelidade", verseRef: "lm.3.23", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A providência que sustenta",
            intro: "Um reformador nos lembra que nada foge das mãos de Deus.",
            author: "João Calvino", initial: "C", source: "Institutas I.16–17 · paráfrase",
            text: "Calvino ensinava que a providência não é um destino frio, mas o cuidado ativo de um Pai. Mesmo em Lamentações — um livro de choro — o crente enxerga misericórdias novas a cada manhã. Confiar na fidelidade de Deus não nega a dor; a atravessa com esperança." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde você já viu a fidelidade de Deus na sua história?",
            intro: "Responda a Lamentações 3 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "A fidelidade de Deus não depende de o meu dia ter sido bom." },
              { key: "gratidao", example: "Agradeço por uma misericórdia pequena que recebi esta semana." },
              { key: "confissao", example: "Julguei o caráter de Deus pela dor que senti." },
              { key: "suplica", example: "Abre os meus olhos para as tuas misericórdias de amanhã." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Ore lembrando: a misericórdia de amanhã já está a caminho.",
            prayer: "Senhor, as tuas misericórdias se renovam a cada manhã. Faze-me confiar na tua fidelidade hoje. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Lamentações 3 · O Desafio", q: "Com que frequência as misericórdias se renovam?", verseRef: "lm.3.23",
            opts: ["uma vez na vida", "cada manhã", "só nos bons dias", "raramente"], answer: 1,
            exp: "Novas a cada manhã — a graça acompanha cada novo dia." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "A providência, para Calvino, é...",
            opts: ["um destino frio", "o cuidado ativo de um Pai", "acaso", "ausência de Deus"], answer: 1,
            exp: "Deus governa todas as coisas com cuidado paternal." },
          { type: "order", kicker: "Memorização · Lamentações 3.23", q: "Complete a confissão:", ref: "Lamentações 3.23",
            words: ["grande", "é", "a", "tua", "fidelidade"],
            exp: "A fidelidade de Deus é a base firme de cada manhã." }
        ]
      },
      {
        id: "dg-4",
        title: "Nenhuma condenação",
        subtitle: "Romanos 8 · Justificação",
        minutes: 8,
        carryRef: "rm.8.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga a acusação que você ouve dentro da cabeça. Toque na lâmpada.",
            prayer: "Senhor, silencia em mim a voz que já foi calada na cruz. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Livre da lei do pecado",
            passageRefs: ["rm.8.1", "rm.8.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Agora, nenhuma condenação",
            verseRef: "rm.8.1", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O veredito já foi dado",
            intro: "Lutero descreve o alívio de descobrir que a sentença já saiu — e é a favor.",
            author: "Martinho Lutero", initial: "L", source: "Prefácio às obras latinas · paráfrase",
            text: "Lutero contou que, ao entender a justiça de Deus como aquilo que Ele nos dá em vez de exigir, sentiu-se renascido e como se tivesse entrado no paraíso por portas abertas. A condenação não foi adiada nem suavizada: foi cumprida em Cristo. Por isso o veredito do último dia já foi anunciado hoje para quem está nele." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "De que você ainda se acusa, mesmo já perdoado?",
            intro: "Responda a Romanos 8 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Para quem está em Cristo, a sentença já foi dada — e não é condenação." },
              { key: "gratidao", example: "Agradeço porque o meu passado não define o meu lugar diante de Deus." },
              { key: "confissao", example: "Continuo me punindo por algo que Deus já perdoou." },
              { key: "suplica", example: "Ajuda-me a crer no teu veredito mais do que na minha culpa." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — repita quando a acusação voltar.",
            prayer: "Pai, em Cristo não há nenhuma condenação para mim. Que essa verdade seja mais alta que a voz que me acusa. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Romanos 8 · O Desafio", q: "O que há para os que estão em Cristo Jesus?", verseRef: "rm.8.1",
            opts: ["pouca condenação", "nenhuma condenação", "condenação parcial", "condenação adiada"], answer: 1,
            exp: "A condenação não foi suavizada: foi cumprida em Cristo (Rm 8.1)." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "O que Lutero entendeu sobre a justiça de Deus?",
            opts: ["que Deus a exige de nós", "que Deus a dá a nós", "que ela é inalcançável", "que ela não existe"], answer: 1,
            exp: "Ao ver a justiça como dom, e não exigência, ele se sentiu renascido." },
          { type: "match", kicker: "Romanos 8 · Justificação", q: "Relacione cada termo ao seu sentido:",
            pairs: [["Condenação", "Cumprida em Cristo"], ["Justificação", "Declarado justo"], ["Em Cristo Jesus", "O lugar seguro"], ["Lei do Espírito", "O que liberta"]],
            exp: "A segurança do crente não está no que ele sente, mas onde ele está: em Cristo." }
        ]
      },
      {
        id: "dg-5",
        title: "A alegria do perdão",
        subtitle: "Salmo 32 · Confissão",
        minutes: 7,
        carryRef: "sl.32.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Guardar pecado cansa. Hoje é dia de soltar. Toque na lâmpada.",
            prayer: "Senhor, não quero mais esconder. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Bem-aventurado o perdoado",
            passageRefs: ["sl.32.1", "sl.32.5"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "A transgressão perdoada",
            verseRef: "sl.32.1", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O salmo dos últimos dias",
            intro: "Este salmo acompanhou Agostinho até o fim da vida.",
            author: "Agostinho", initial: "A", source: "tema dos Salmos penitenciais · paráfrase",
            text: "Conta-se que Agostinho pediu que os salmos penitenciais fossem escritos na parede do seu quarto, para lê-los enquanto morria. Ele, que tanto escreveu sobre a graça, quis terminar olhando não para as próprias obras, mas para o perdão. A bem-aventurança do Salmo 32 não é a de quem nunca errou: é a de quem foi perdoado." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que pesa por estar guardado?",
            intro: "Responda ao Salmo 32 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "A bem-aventurança não é nunca ter errado, mas ter sido perdoado." },
              { key: "gratidao", example: "Agradeço pelo alívio que senti na última vez que confessei de verdade." },
              { key: "confissao", example: "Tenho carregado em silêncio algo que precisava dizer a Deus." },
              { key: "suplica", example: "Dá-me coragem de trazer à luz o que escondo, e recebe-me." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — nomeie diante de Deus o que precisa nomear.",
            prayer: "Senhor, eu reconheço diante de ti o que escondi. Cobre a minha transgressão e devolve-me a alegria de andar contigo. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 32 · O Desafio", q: "Complete a bem-aventurança:", verseRef: "sl.32.1",
            opts: ["escondida", "perdoada", "esquecida", "pequena"], answer: 1,
            exp: "“Bem-aventurado aquele cuja transgressão é perdoada” (Sl 32.1)." },
          { type: "mcq", kicker: "Salmo 32 · O Desafio", q: "O que Davi fez com o seu pecado?", verseRef: "sl.32.5",
            opts: ["disfarcei", "reconheci meu pecado", "justifiquei", "ignorei"], answer: 1,
            exp: "“Eu reconheci meu pecado a ti, e não escondi minha maldade” — confessar é o caminho do alívio (Sl 32.5)." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "Para onde Agostinho quis olhar ao morrer?",
            opts: ["para as próprias obras", "para o perdão de Deus", "para os seus livros", "para os seus discípulos"], answer: 1,
            exp: "Quem mais escreveu sobre a graça quis terminar olhando para ela, não para si." }
        ]
      },
      {
        id: "dg-6",
        title: "Nada nos separa",
        subtitle: "Romanos 8 · Segurança",
        minutes: 8,
        carryRef: "rm.8.39",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Pense no que hoje parece capaz de te afastar de Deus. Toque na lâmpada.",
            prayer: "Senhor, mostra-me que o teu amor é mais forte do que o meu medo. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Nem morte, nem vida",
            passageRefs: ["rm.8.38", "rm.8.39"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Nada pode nos separar",
            verseRef: "rm.8.39", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A segurança não está em mim",
            intro: "Calvino aponta onde repousa a certeza do crente — e onde ela não repousa.",
            author: "João Calvino", initial: "C", source: "Institutas III.24 · paráfrase",
            text: "Calvino ensinava que, se a nossa salvação dependesse da firmeza da nossa fé, ela oscilaria todos os dias. Mas ela repousa na eleição de Deus e na obra de Cristo — fora de nós, onde as nossas quedas não alcançam. Por isso a segurança do crente não é confiança em si mesmo: é confiança em Quem o segura." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que você teme que seja capaz de te separar de Deus?",
            intro: "Responda a Romanos 8 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Nada em toda a criação tem poder de me separar do amor de Deus em Cristo." },
              { key: "gratidao", example: "Agradeço porque Ele me segurou justamente quando eu mais falhei." },
              { key: "confissao", example: "Tenho medido o amor de Deus pelo meu desempenho da semana." },
              { key: "suplica", example: "Firma o meu coração na tua mão, e não na minha." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — leve esta certeza para o seu dia.",
            prayer: "Pai, nem a morte, nem a vida, nem coisa alguma pode me separar do teu amor em Cristo Jesus. Faze-me viver hoje a partir dessa certeza. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Romanos 8 · O Desafio", q: "Complete a certeza de Paulo:", verseRef: "rm.8.38",
            opts: ["nem o tempo, nem o espaço", "nem a morte, nem a vida", "nem o dia, nem a noite", "nem o bem, nem o mal"], answer: 1,
            exp: "A lista de Paulo é exaustiva de propósito: nada resta de fora (Rm 8.38-39)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Onde repousa a segurança do crente, para Calvino?",
            opts: ["na firmeza da própria fé", "na eleição de Deus e na obra de Cristo", "nas boas obras", "no sentimento de paz"], answer: 1,
            exp: "Se dependesse de nós, oscilaria todo dia; ela repousa fora de nós (III.24)." },
          { type: "match", kicker: "Romanos 8 · Segurança", q: "Relacione cada ideia ao seu sentido:",
            pairs: [["Nada nos separa", "A promessa"], ["Em Cristo Jesus", "O fundamento"], ["Fora de nós", "Onde está a certeza"], ["Perseverança", "Deus guarda até o fim"]],
            exp: "A certeza do crente não é confiança em si: é confiança em Quem o segura." }
        ]
      }
    ]
  },
  {
    id: "livrete-de-ouro",
    title: "O Livrete de Ouro",
    theme: "Vida Cristã · Calvino",
    icon: "i-cross", accent: "var(--slate)",
    source: "Baseado em João Calvino",
    farewell: "Dez dias com Calvino, e o essencial já foi dito: a regra vem de fora, e a vida não nos pertence. Você atravessou o chamado à vida cristã e a negação de si — o coração do Livrete. O caminho continua em levar a cruz, meditar na vida futura e usar bem a vida presente. Por ora, leve a frase que organiza todo o resto: não somos nossos; somos de Deus.",
    about: "O “Livrete de Ouro” é o apelido que ganhou um trecho das Institutas da Religião Cristã, a grande obra de João Calvino (1509–1564): os capítulos 6 a 10 do Livro III. Por serem práticos e curtos, foram publicados sozinhos durante séculos, como um pequeno manual de vida cristã — daí o apelido. Não trata de doutrina abstrata, mas de como viver: negar a si mesmo, carregar a cruz, usar bem os bens desta vida. Cada dia aqui traz uma leitura bíblica, uma paráfrase nossa do que Calvino diz naquela seção (com a referência para você conferir na sua edição) e os quatro fios para responder. A obra está em domínio público.",
    blurb: "Uma caminhada pela “Breve Instrução sobre a Vida Cristã” de Calvino (Institutas III.6–10). O chamado à vida cristã e a negação de si: a regra que vem de fora, e a vida que deixa de nos pertencer.",
    days: [
      {
        id: "lo-1",
        title: "A regra que vem de fora",
        subtitle: "Salmo 119 · Institutas III.6",
        minutes: 9,
        carryRef: "sl.119.9",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Antes de desenhar qualquer caminho neste mês, peça a Deus que ilumine o dele. Toque na lâmpada.",
            prayer: "Senhor, antes de eu desenhar qualquer caminho este mês, ilumina o teu. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Bem-aventurados os que andam na lei",
            passageRefs: ["sl.119.1", "sl.119.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Como purificar o caminho",
            verseRef: "sl.119.9", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O alvo vem de fora",
            intro: "Calvino abre o “Livrete de Ouro” apontando de onde vem a regra da vida cristã.",
            author: "João Calvino", initial: "C", source: "Institutas III.6.1–2",
            text: "Calvino abre o Livrete dizendo que o alvo da vida cristã não é inventado por nós: a Escritura nos apresenta um padrão, e esse padrão é a santidade de Deus. Não somos chamados a melhorar por autoajuda, mas a sermos conformados àquele que nos adotou. A regra da vida vem de fora — e isso é liberdade, não prisão, porque nos tira o peso de definir sozinhos o que é uma vida boa." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Quem define o seu caminho: você ou Deus?",
            intro: "Comece o mês respondendo em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "A régua da vida cristã vem de Deus, não da minha opinião sobre o que é bom." },
              { key: "gratidao", example: "Agradeço por não precisar inventar sozinho o sentido da minha vida." },
              { key: "confissao", example: "Tenho preferido a minha luz à dele quando é mais confortável." },
              { key: "suplica", example: "Dá-me um coração ensinável para começar estes dias." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore com as suas próprias palavras, se preferir.",
            prayer: "Senhor, a regra da minha vida vem de ti. Dá-me um coração ensinável para começar estes dias andando na tua luz, e não na minha. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para Calvino, o alvo da vida cristã...",
            opts: ["é inventado por cada um de nós", "nos é dado de fora, na Palavra de Deus", "depende só de autoajuda", "muda a cada geração"], answer: 1,
            exp: "A regra vem de fora — a santidade de Deus — e isso é liberdade, não prisão (Sl 119.1)." },
          { type: "mcq", kicker: "Salmo 119 · O Desafio", q: "Como o jovem purifica o seu caminho?", verseRef: "sl.119.9",
            opts: ["Seguindo o próprio coração", "Sendo obediente conforme a tua palavra", "Evitando as pessoas", "Com boas intenções"], answer: 1,
            exp: "“Sendo o que observa a tua palavra” — a Escritura ilumina antes de pisarmos (Sl 119.9)." },
          { type: "match", kicker: "O chamado à vida cristã", q: "Ligue cada ideia ao seu sentido:",
            pairs: [["Regra de fora", "A Palavra de Deus"], ["O padrão", "A santidade de Deus"], ["Liberdade", "Não definir sozinho o bem"], ["Adoção", "Ser conformado a Deus"]],
            exp: "A vida cristã começa recebendo de Deus o alvo — não o inventando (III.6.1–2)." }
        ]
      },
      {
        id: "lo-2",
        title: "Doutrina que desce ao coração",
        subtitle: "Tiago 1 · Institutas III.6",
        minutes: 9,
        carryRef: "tg.1.22",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Peça que a Palavra de hoje não pare na sua cabeça — desça ao coração e à vida. Toque na lâmpada.",
            prayer: "Senhor, não deixes a tua verdade parar na minha língua. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Praticantes da palavra",
            passageRefs: ["tg.1.22", "tg.1.23"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Ouvir e cumprir",
            verseRef: "tg.1.22", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Doutrina de vida, não de língua",
            intro: "Calvino é direto: a fé não é conteúdo de discurso, mas posse do coração.",
            author: "João Calvino", initial: "C", source: "Institutas III.6.4",
            text: "Calvino é duro aqui: o evangelho não é doutrina de língua, mas de vida. Ele não foi dado para ocupar apenas a memória e o intelecto — só é verdadeiramente recebido quando toma posse da alma inteira e encontra assento no mais íntimo do coração. Um cristianismo que vive só no discurso é, para ele, pior que inútil." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que verdade você domina no discurso, mas ainda não pratica?",
            intro: "Responda a Tiago 1 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus quer a verdade descendo até a minha vida, e não parada na minha cabeça." },
              { key: "gratidao", example: "Agradeço por uma verdade que finalmente virou prática em mim." },
              { key: "confissao", example: "Sei explicar bem aquilo que ainda não vivo." },
              { key: "suplica", example: "Fecha a distância entre o que eu sei e o que eu faço." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — adapte às suas palavras.",
            prayer: "Espírito Santo, faze a tua Palavra descer da minha cabeça ao meu coração, e do coração à minha vida. Que eu seja praticante, e não só ouvinte. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Tiago 1 · O Desafio", q: "Tiago nos chama a ser...", verseRef: "tg.1.22",
            opts: ["apenas ouvintes da palavra", "praticantes da palavra, e não somente ouvintes", "mestres da palavra", "juízes da palavra"], answer: 1,
            exp: "Ouvir sem praticar é enganar-se a si mesmo (Tg 1.22)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para Calvino, o evangelho é doutrina de...",
            opts: ["língua, não de vida", "vida, não apenas de língua", "memória apenas", "intelecto apenas"], answer: 1,
            exp: "A Palavra só é recebida quando toma posse da alma inteira e assenta no coração (III.6.4)." },
          { type: "match", kicker: "Ouvir e cumprir", q: "Ligue cada termo ao seu sentido:",
            pairs: [["Ouvir", "Apenas o começo"], ["Cumprir", "A Palavra recebida"], ["Doutrina de língua", "Fé só no discurso"], ["Doutrina de vida", "Fé que se pratica"]],
            exp: "A teologia verdadeira não para na língua — desce ao coração e à vida." }
        ]
      },
      {
        id: "lo-3",
        title: "Progresso, não perfeição",
        subtitle: "Filipenses 3 · Institutas III.6",
        minutes: 9,
        carryRef: "fp.3.14",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga o cansaço de tentar ser perfeito. Hoje o convite é avançar, não chegar. Toque na lâmpada.",
            prayer: "Senhor, livra-me da perfeição que paralisa; dá-me a constância que avança. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Prossigo para o alvo",
            passageRefs: ["fp.3.13", "fp.3.14"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Rumo ao prêmio",
            verseRef: "fp.3.14", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Jornada, não chegada",
            intro: "Calvino encerra o capítulo com pastoral fina, para que o padrão da santidade não esmague ninguém.",
            author: "João Calvino", initial: "C", source: "Institutas III.6.5",
            text: "Calvino sabia que o padrão da santidade esmagaria qualquer um — por isso encerra com pastoral fina: não exijo, diz ele, que a vida do cristão respire nada além do evangelho perfeito, o que não se encontraria em ninguém. O que importa é a direção: avançar um pouco a cada dia, ainda que com passos pequenos e mancando, sem desistir. A vida cristã é jornada, não chegada." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde o perfeccionismo tem te paralisado em vez de te mover?",
            intro: "Responda a Filipenses 3 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Deus se importa com a direção do meu coração, não com uma perfeição impossível." },
              { key: "gratidao", example: "Agradeço por um progresso pequeno que reconheço nos últimos meses." },
              { key: "confissao", example: "O perfeccionismo tem me paralisado em vez de me mover." },
              { key: "suplica", example: "Dá-me constância para dar um passo pequeno esta semana." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore com as suas palavras.",
            prayer: "Pai, não me peças hoje a perfeição, mas a constância. Faze-me avançar um passo em tua direção, ainda que pequeno, sem desistir. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Filipenses 3 · O Desafio", q: "Complete o que Paulo declara:", verseRef: "fp.3.14",
            opts: ["descanso na margem", "persigo o alvo", "volto atrás", "espero parado"], answer: 1,
            exp: "“Persigo o alvo, rumo ao prêmio da soberana vocação” — a vida cristã avança (Fp 3.14)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "A vida cristã, para Calvino, é...",
            opts: ["chegada imediata à perfeição", "jornada: avançar um pouco a cada dia", "impossível de viver", "reservada a poucos"], answer: 1,
            exp: "Avançar com passos pequenos, mancando, sem desistir — direção importa mais que perfeição (III.6.5)." },
          { type: "match", kicker: "Progresso, não perfeição", q: "Ligue cada ideia ao seu sentido:",
            pairs: [["O alvo", "A soberana vocação"], ["Progresso", "Avançar a cada dia"], ["Perfeccionismo", "Paralisa em vez de mover"], ["Constância", "A marca do cristão"]],
            exp: "Deus busca a direção do coração, não uma perfeição que ninguém alcança nesta vida." }
        ]
      },
      {
        id: "lo-4",
        title: "Não somos nossos",
        subtitle: "Romanos 12 · Institutas III.7",
        minutes: 9,
        carryRef: "rm.12.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Hoje começa o bloco da negação de si. Antes de ler, entregue a posse do dia. Toque na lâmpada.",
            prayer: "Senhor, eu não sou meu. Reina onde eu tenho reinado. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Sacrifício vivo",
            passageRefs: ["rm.12.1", "rm.12.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "O corpo como culto",
            verseRef: "rm.12.1", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Uma transferência de propriedade",
            intro: "A passagem mais conhecida do Livrete — e a que reorganiza tudo o que vem depois.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.1 · paráfrase",
            text: "Não somos nossos, diz Calvino: logo, nem nossa razão nem nossa vontade devem reinar em nossos planos. Não somos nossos: logo, não façamos da nossa conveniência o alvo da vida. Somos de Deus: logo, vivamos e morramos para Ele. Toda a ética cristã nasce dessa transferência de propriedade — e a maior peste que arruína o homem é obedecer a si mesmo." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que área você ainda trata como território só seu?",
            intro: "Responda a Romanos 12 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Eu pertenço a Deus: a minha vida não é propriedade minha." },
              { key: "gratidao", example: "Agradeço por ter sido comprado por preço, e não abandonado." },
              { key: "confissao", example: "Trato a minha agenda e o meu dinheiro como território só meu." },
              { key: "suplica", example: "Reina onde eu tenho reinado." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — repita-a quando o ego voltar ao trono.",
            prayer: "Senhor, eu não sou meu, sou teu. Tira as minhas mãos do leme e reina onde eu tenho reinado. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Romanos 12 · O Desafio", q: "Complete o que Paulo roga:", verseRef: "rm.12.1",
            opts: ["um projeto pessoal", "sacrifício vivo", "um dever pesado", "uma oferta ocasional"], answer: 1,
            exp: "O culto racional é a vida inteira entregue — não um momento religioso isolado (Rm 12.1)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para Calvino, a maior peste que arruína o homem é...",
            opts: ["a pobreza", "obedecer a si mesmo", "o sofrimento", "a ignorância"], answer: 1,
            exp: "Somos de Deus: logo, vivamos e morramos para Ele — não para a nossa conveniência (III.7.1)." },
          { type: "match", kicker: "Romanos 12 · Transferência", q: "Relacione cada termo ao seu sentido:",
            pairs: [["Não somos nossos", "Mudança de dono"], ["Sacrifício vivo", "A vida inteira"], ["Não vos conformeis", "Romper com a era"], ["Renovação da mente", "Como se transforma"]],
            exp: "A ética cristã nasce de uma transferência de propriedade: eu passei a ser de Deus." }
        ]
      },
      {
        id: "lo-5",
        title: "Buscar a vontade dEle",
        subtitle: "Mateus 16 · Institutas III.7",
        minutes: 9,
        carryRef: "mt.16.24",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga uma decisão que está na sua mão agora. Toque na lâmpada.",
            prayer: "Senhor, antes de eu decidir, ensina-me a perguntar o que tu queres. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Negue-se a si mesmo",
            passageRefs: ["mt.16.24", "mt.16.25"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Perder para achar",
            verseRef: "mt.16.25", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Desocupar o trono interno",
            intro: "Calvino explica o que negar a si mesmo significa na prática — e o que não significa.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.2 · paráfrase",
            text: "Negar a si mesmo, explica Calvino, é dar adeus ao ego como conselheiro-chefe. É sair de si para que Deus entre; é desocupar o trono interno onde sentamos para decidir tudo segundo o nosso interesse. Ele chama isso de transferência: deixamos de buscar o que é nosso para buscar o que é do Senhor — e isso não acontece uma vez, mas é o trabalho diário de toda a vida." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que decisão atual você está tomando com o ego no trono?",
            intro: "Traga uma decisão que está na sua mão e responda em quatro frentes.",
            threads: [
              { key: "ensino", example: "Quem entrega a vida a Deus é justamente quem a encontra." },
              { key: "gratidao", example: "Agradeço por uma renúncia que me trouxe mais vida, e não menos." },
              { key: "confissao", example: "Tenho decidido pensando primeiro no que eu quero." },
              { key: "suplica", example: "Dá-me coragem para perguntar o que tu queres antes do que eu quero." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — negar-se não é violência contra si, é entrega.",
            prayer: "Senhor, destrona o meu ego com a tua gentileza firme, e ensina-me a buscar a tua vontade antes da minha. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Mateus 16 · O Desafio", q: "O que Jesus pede a quem quer segui-lo?", verseRef: "mt.16.24",
            opts: ["que se prove digno", "negue-se a si mesmo", "que espere o momento certo", "que julgue os outros"], answer: 1,
            exp: "Negar-se, tomar a cruz e seguir — nessa ordem (Mt 16.24)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Negar a si mesmo, para Calvino, é obra...",
            opts: ["de um único momento", "diária, de toda a vida", "impossível ao crente", "apenas dos pastores"], answer: 1,
            exp: "É a transferência diária: deixar de buscar o que é meu para buscar o que é do Senhor (III.7.2)." },
          { type: "order", kicker: "Memorização · Mateus 16.24", q: "Monte o chamado de Jesus:", ref: "Mateus 16.24",
            words: ["negue-se", "a", "si", "mesmo", "tome", "sobre", "si", "a", "sua", "cruz"],
            exp: "“Negue-se a si mesmo, tome sobre si a sua cruz, e siga-me” (Mt 16.24)." }
        ]
      },
      {
        id: "lo-6",
        title: "O que tens que não recebeste?",
        subtitle: "1 Coríntios 4 · Institutas III.7",
        minutes: 9,
        carryRef: "1co.4.7",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Pense num talento seu do qual você se orgulha. Toque na lâmpada.",
            prayer: "Pai, lembra-me de quem veio tudo o que eu chamo de meu. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Tudo é recebido",
            passageRefs: ["1co.4.7"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Dom, não troféu",
            verseRef: "1co.4.7", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Mordomo, não dono",
            intro: "Calvino ataca a raiz da arrogância — e também a da falsa modéstia.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.4 · paráfrase",
            text: "Tudo o que temos de bom é depósito, não conquista. Talento, inteligência, criatividade, oportunidades — dons confiados, não troféus. Por isso a verdadeira humildade não é fingir que não temos dons, mas reconhecer a fonte deles e usar tudo com gratidão, sem desprezar o irmão que recebeu dons diferentes. Quem entende isso não compete: administra." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde você tem competido em vez de administrar?",
            intro: "Responda a 1 Coríntios 4 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Tudo o que eu tenho de bom foi recebido, não conquistado." },
              { key: "gratidao", example: "Agradeço por um talento que uso todo dia sem lembrar de quem o deu." },
              { key: "confissao", example: "Tenho competido e me comparado em vez de administrar o que recebi." },
              { key: "suplica", example: "Faze-me mordomo dos meus dons, e não dono deles." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — agradeça nomeando os dons, um a um.",
            prayer: "Senhor, cada habilidade minha é carta tua; que eu nunca rasgue a assinatura. Faze-me grato, e não orgulhoso. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "1 Coríntios 4 · O Desafio", q: "Qual é a pergunta que desmonta o orgulho?", verseRef: "1co.4.7",
            opts: ["quanto tu mereces?", "que tens tu, que não tenhas recebido?", "quem és tu para julgar?", "onde está a tua fé?"], answer: 1,
            exp: "Se tudo foi recebido, não há o que exibir como conquista (1 Co 4.7)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "A verdadeira humildade, para Calvino, é...",
            opts: ["fingir que não temos dons", "reconhecer a fonte dos dons e usá-los com gratidão", "esconder os talentos", "recusar toda responsabilidade"], answer: 1,
            exp: "Falsa modéstia não é humildade. Quem reconhece a fonte administra em vez de competir (III.7.4)." },
          { type: "match", kicker: "Dons e mordomia", q: "Relacione cada postura ao seu fruto:",
            pairs: [["Dom como troféu", "Competição"], ["Dom como depósito", "Mordomia"], ["Falsa modéstia", "Negar a fonte"], ["Gratidão", "Humildade real"]],
            exp: "Reconhecer a fonte transforma talento em serviço." }
        ]
      },
      {
        id: "lo-7",
        title: "Dons em depósito",
        subtitle: "Gálatas 5 · Institutas III.7",
        minutes: 9,
        carryRef: "gl.5.13",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Pense em alguém que poderia ser servido por você esta semana. Toque na lâmpada.",
            prayer: "Senhor, faze da minha liberdade um caminho até o outro. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Servi-vos pelo amor",
            passageRefs: ["gl.5.13", "gl.5.14"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Liberdade que serve",
            verseRef: "gl.5.13", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O amor que se gasta",
            intro: "Calvino define para que servem, afinal, os dons recebidos.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.5 · paráfrase",
            text: "Os dons que recebemos, diz Calvino, são depósitos confiados sob a condição de serem aplicados ao bem comum da igreja. O uso legítimo de qualquer graça é, portanto, a comunicação generosa dela aos irmãos. Somos mordomos de tudo o que Deus nos deu para ajudar o próximo — e prestaremos contas dessa mordomia. O amor cristão não calcula retorno; ele se gasta." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "A quem, especificamente, você pode servir esta semana?",
            intro: "Responda a Gálatas 5 em quatro frentes. No último, escreva um nome.",
            threads: [
              { key: "ensino", example: "A liberdade que Cristo me deu é para servir, não para me servir." },
              { key: "gratidao", example: "Agradeço por alguém que usou os próprios dons para me servir." },
              { key: "confissao", example: "Usei os meus dons mais para construir o meu nome do que para servir." },
              { key: "suplica", example: "Mostra-me a quem servir nesta semana, e dá-me coragem de ir." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore pelo nome que você acabou de escrever.",
            prayer: "Senhor, faze dos meus talentos uma mesa posta para os outros. Que eu me gaste sem calcular retorno. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Gálatas 5 · O Desafio", q: "Para que fomos chamados à liberdade?", verseRef: "gl.5.13",
            opts: ["para fazer o que eu quiser", "servi-vos uns aos outros pelo amor", "para viver sem lei", "para exigir direitos"], answer: 1,
            exp: "A liberdade cristã não é licença — é o que me libera para servir (Gl 5.13)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Qual é o uso legítimo de qualquer graça recebida?",
            opts: ["guardá-la para si", "comunicá-la generosamente aos irmãos", "exibi-la publicamente", "trocá-la por reconhecimento"], answer: 1,
            exp: "Dons são depósitos para o bem comum — e prestaremos contas dessa mordomia (III.7.5)." },
          { type: "order", kicker: "Memorização · Gálatas 5.14", q: "Monte o resumo da Lei:", ref: "Gálatas 5.14",
            words: ["Amarás", "ao", "teu", "próximo", "como", "a", "ti", "mesmo"],
            exp: "“Amarás ao teu próximo como a ti mesmo” — toda a Lei se cumpre nesta regra (Gl 5.14)." }
        ]
      },
      {
        id: "lo-8",
        title: "A imagem de Deus no outro",
        subtitle: "Mateus 5 · Institutas III.7",
        minutes: 9,
        carryRef: "mt.5.44",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga o nome de alguém difícil de amar. Ele vai aparecer de novo no fim. Toque na lâmpada.",
            prayer: "Senhor, quando eu olhar para quem me fere, mostra-me a tua imagem nele. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Amai os vossos inimigos",
            passageRefs: ["mt.5.44", "mt.5.45"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Orai pelos que vos perseguem",
            verseRef: "mt.5.44", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Não olhe para o mérito",
            intro: "Calvino responde à pergunta mais difícil desta passagem: como amar quem não merece?",
            author: "João Calvino", initial: "C", source: "Institutas III.7.6 · paráfrase",
            text: "Como amar quem não merece? Calvino responde: não olhe para o que a pessoa merece em si mesma, mas para a imagem de Deus nela — imagem que apaga e cancela toda falta dela, e que por sua dignidade nos atrai a amá-la. A Escritura nos manda olhar não para o que as pessoas merecem, mas para o que Deus imprimiu nelas. Isso vale para o irmão difícil, o cliente injusto e a pessoa que mais nos cansa." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Em quem você tem enxergado só o defeito?",
            intro: "Responda a Mateus 5 em quatro frentes. No último fio, escreva um nome.",
            threads: [
              { key: "ensino", example: "O amor cristão não seleciona destinatários: ele olha a imagem de Deus, não o mérito." },
              { key: "gratidao", example: "Agradeço por ter sido amado sem merecer — por Deus e por pessoas." },
              { key: "confissao", example: "Reduzi alguém ao pior que essa pessoa já fez comigo." },
              { key: "suplica", example: "Hoje vou orar nominalmente por esta pessoa difícil; muda o meu olhar." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore pelo nome que você escreveu.",
            prayer: "Senhor, quando eu olhar para quem me fere, mostra-me a tua imagem nele. Dá-me um amor que não espera merecimento. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Mateus 5 · O Desafio", q: "Complete o mandamento de Jesus:", verseRef: "mt.5.44",
            opts: ["amigos", "inimigos", "irmãos", "vizinhos"], answer: 1,
            exp: "“Amai vossos inimigos e orai pelos que vos perseguem” (Mt 5.44)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Para onde Calvino manda olhar ao amar quem não merece?",
            opts: ["para o mérito da pessoa", "para a imagem de Deus nela", "para o próprio esforço", "para o futuro dela"], answer: 1,
            exp: "A imagem de Deus apaga a falta e nos atrai a amar (III.7.6)." },
          { type: "order", kicker: "Memorização · Mateus 5.44", q: "Monte o mandamento:", ref: "Mateus 5.44",
            words: ["amai", "vossos", "inimigos", "e", "orai", "pelos", "que", "vos", "perseguem"],
            exp: "Orar por alguém é o primeiro passo para deixar de odiá-lo (Mt 5.44)." }
        ]
      },
      {
        id: "lo-9",
        title: "Ambição aquietada",
        subtitle: "Salmo 131 · Institutas III.7",
        minutes: 8,
        carryRef: "sl.131.2",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga aquele projeto que não te deixa descansar. Toque na lâmpada.",
            prayer: "Senhor, aquieta em mim o que corre na frente de ti. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Alma sossegada",
            passageRefs: ["sl.131.1", "sl.131.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Como criança desmamada",
            verseRef: "sl.131.2", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Ambição redirecionada",
            intro: "A negação de si também olha para frente: é descansar na providência.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.8–9 · paráfrase",
            text: "Quem não se nega a si mesmo, diz Calvino, corre atrás de riqueza e posição por ambição inquieta — sempre ansioso, nunca satisfeito. Já o cristão busca antes a bênção de Deus, e prefere ela sozinha a tudo o que conquistaria sem ela, pois sabe que prosperidade sem Deus vira miséria. O contentamento não é falta de ambição: é ambição redirecionada." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde a sua ambição anda inquieta demais para descansar?",
            intro: "Responda ao Salmo 131 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Davi recusa as grandezas que o excedem e abraça o sossego de confiar." },
              { key: "gratidao", example: "Agradeço por uma provisão que provou que eu não precisava ter me afobado." },
              { key: "confissao", example: "Tenho corrido atrás de reconhecimento com uma ansiedade que não descansa." },
              { key: "suplica", example: "Ensina-me a desejar primeiro a tua bênção, e só depois o resultado." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore devagar, respirando entre as frases.",
            prayer: "Senhor, aquieta em mim o que corre na frente de ti. Que eu prefira a tua bênção a qualquer conquista sem ti. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 131 · O Desafio", q: "O que Davi fez com a sua alma?", verseRef: "sl.131.2",
            opts: ["agitei minha alma", "calei minha alma", "exaltei o meu coração", "busquei grandezas"], answer: 1,
            exp: "“Eu me sosseguei e calei minha alma, tal como uma criança com sua mãe” (Sl 131.2)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "O contentamento cristão, para Calvino, é...",
            opts: ["falta de ambição", "ambição redirecionada", "desprezo pelo trabalho", "indiferença ao futuro"], answer: 1,
            exp: "O cristão busca antes a bênção de Deus — prosperidade sem Ele vira miséria (III.7.8–9)." },
          { type: "match", kicker: "Salmo 131 · Sossego", q: "Relacione cada atitude ao seu fruto:",
            pairs: [["Ambição inquieta", "Nunca satisfeito"], ["Buscar a bênção de Deus", "Contentamento"], ["Alma sossegada", "Confiança"], ["Grandezas demais", "O que Davi recusa"]],
            exp: "A negação de si também olha para frente: é descansar na providência." }
        ]
      },
      {
        id: "lo-10",
        title: "A mesma mão que dá e toma",
        subtitle: "Jó 1 · Institutas III.7",
        minutes: 9,
        carryRef: "jó.1.21",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Hoje o texto é duro. Traga uma perda que você ainda não entendeu. Toque na lâmpada.",
            prayer: "Senhor, ensina-me a abrir as duas mãos: a que recebe e a que devolve. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Bendito seja o nome do SENHOR",
            passageRefs: ["jó.1.20", "jó.1.21"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "O SENHOR deu, o SENHOR tomou",
            verseRef: "jó.1.21", seconds: 22 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A prova de fogo",
            intro: "Calvino fecha o capítulo da negação de si com o teste mais difícil.",
            author: "João Calvino", initial: "C", source: "Institutas III.7.10 · paráfrase",
            text: "Calvino fecha o capítulo da negação de si com a prova de fogo: receber prosperidade e adversidade da mesma mão, com o mesmo coração. Quem depende da bênção de Deus não atribui o sucesso à própria esperteza nem o fracasso ao acaso — em tudo reconhece o Pai. Por isso o cristão tem uma tranquilidade que o mundo não entende: a sua paz não flutua com as circunstâncias, porque a sua âncora não está nelas." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Como você reage quando algo dá errado?",
            intro: "Responda a Jó 1 em quatro frentes. Uma frase em cada já basta.",
            threads: [
              { key: "ensino", example: "Jó consegue bendizer no dia da perda porque reconhece o Pai também no que foi tomado." },
              { key: "gratidao", example: "Olhando para trás, um “não” de Deus se revelou cuidado comigo." },
              { key: "confissao", example: "Quando um projeto dá errado, reajo com amargura antes de reconhecer a tua mão." },
              { key: "suplica", example: "Ensina-me a confiar antes da próxima frustração chegar, e não só depois." }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore mesmo que o coração ainda doa.",
            prayer: "Senhor, ensina-me a abrir as duas mãos: a que recebe e a que devolve. Que a minha paz não dependa das circunstâncias, mas de ti. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Jó 1 · O Desafio", q: "O que Jó disse ao perder tudo?", verseRef: "jó.1.21",
            opts: ["Deus me abandonou", "bendito seja o nome do SENHOR", "isto é obra do acaso", "não mereço isto"], answer: 1,
            exp: "“O SENHOR deu, e o SENHOR tomou; bendito seja o nome do SENHOR” (Jó 1.21)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Qual é a prova de fogo da negação de si?",
            opts: ["nunca sofrer", "receber prosperidade e adversidade da mesma mão", "não ter bens", "evitar riscos"], answer: 1,
            exp: "A paz do cristão não flutua com as circunstâncias, porque a âncora não está nelas (III.7.10)." },
          { type: "order", kicker: "Memorização · Jó 1.21", q: "Monte a confissão de Jó:", ref: "Jó 1.21",
            words: ["O", "SENHOR", "deu", "e", "o", "SENHOR", "tomou"],
            exp: "“O SENHOR deu, e o SENHOR tomou; bendito seja o nome do SENHOR” (Jó 1.21)." }
        ]
      }
    ]
  }
];
