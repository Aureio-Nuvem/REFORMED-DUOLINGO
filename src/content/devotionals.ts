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
    days: [
      {
        id: "cad-1",
        title: "A lâmpada dos meus pés",
        subtitle: "Salmo 119 · Providência",
        minutes: 8,
        carryRef: "sl119.105",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Antes de ler, peça a Deus que ilumine a sua Palavra. Toque na lâmpada para começar.",
            prayerRef: "sl119.18" },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "A lâmpada dos meus pés",
            passageRefs: ["sl119.105", "sl119.106"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Medite por um instante",
            verseRef: "sl119.105", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Os óculos da Escritura",
            intro: "Ao longo dos séculos, mestres da fé meditaram nas Escrituras. Nesta estação, um deles ajuda a iluminar o texto de hoje.",
            author: "João Calvino", initial: "C", source: "tema das Institutas, I.6",
            text: "Calvino comparava a Escritura a um par de óculos. Sem eles, enxergamos Deus de forma confusa e borrada; com eles, as letras se ordenam e passamos a ler com clareza quem Deus é. A Palavra não inventa a luz — ela foca a luz para os nossos olhos fracos." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Onde a Palavra iluminou um passo seu hoje?",
            intro: "Escreva uma nota pessoal — isto não é prova, é conversa com Deus. Fica guardado no seu Diário, e só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração para conduzir o seu momento com Deus. Sinta-se livre para orar com as suas próprias palavras.",
            prayer: "Pai, a tua Palavra é lâmpada para os meus pés. Firma os meus passos hoje, guarda-me do mal e faze-me andar na tua luz. Por Cristo, amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 119 · O Desafio", q: "Complete o versículo que você leu:", verseRef: "sl119.105",
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
        carryRef: "sl23.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Comece em silêncio, reconhecendo que o Pastor já está aqui. Toque na lâmpada.",
            prayer: "Bom Pastor, aquieta a minha alma e prepara-me para ouvir a tua voz. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Nada me faltará",
            passageRefs: ["sl23.1"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Descanse na provisão",
            verseRef: "sl23.1", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O coração inquieto",
            intro: "Nesta estação, um pai da Igreja ajuda a entender o descanso que só Deus dá.",
            author: "Agostinho", initial: "A", source: "tema das Confissões",
            text: "Agostinho reconheceu que o coração humano vive inquieto, correndo atrás de mil pastores que não saciam. Só descansa quem se deixa conduzir por Aquele que nos fez. Dizer 'o SENHOR é o meu pastor' é confessar que a busca acabou: encontrei quem cuida de mim." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Em que área você tem tentado ser o próprio pastor?",
            intro: "Entregue essa área ao cuidado de Deus, por escrito. Só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração — ore com as suas próprias palavras, se preferir.",
            prayer: "Senhor, tu és o meu Pastor. Ensina-me a confiar que, contigo, nada me faltará. Guia-me hoje. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 23 · O Desafio", q: "Como o salmo começa?", verseRef: "sl23.1",
            opts: ["O SENHOR é o meu escudo", "O SENHOR é o meu pastor", "O SENHOR é o meu juiz", "O SENHOR é o meu rei"], answer: 1,
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
        carryRef: "sl46.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Traga diante de Deus a sua maior preocupação de hoje. Toque na lâmpada.",
            prayer: "Deus forte, tu és o meu refúgio. Aquieta a tempestade dentro de mim. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Auxílio bem presente",
            passageRefs: ["sl46.1", "sl46.10"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Aquiete-se e saiba",
            verseRef: "sl46.10", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Uma fortaleza forte",
            intro: "Nesta estação, um reformador ecoa a força deste salmo.",
            author: "Martinho Lutero", initial: "L", source: "tema de um hino sobre o Salmo 46",
            text: "Lutero se apoiou neste salmo em tempos de medo e escreveu sobre Deus como uma fortaleza segura. A ideia é simples e firme: quando o mundo treme, o crente não corre para dentro de si mesmo, mas para dentro de Deus. A quietude do versículo 10 não é passividade — é confiança que descansa porque sabe quem reina." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que muda quando você lembra que Deus reina sobre isso?",
            intro: "Escreva o que hoje tenta te tirar a paz — e entregue ao Deus que reina. Só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração — adapte às suas palavras.",
            prayer: "Pai, quando tudo estremece, tu permaneces. Sê hoje o meu refúgio e a minha força. Faze-me quieto para saber que tu és Deus. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 46 · O Desafio", q: "O que Deus é para o seu povo, segundo o v.1?", verseRef: "sl46.1",
            opts: ["Um juiz distante", "Refúgio e força", "Um espectador", "Uma lembrança"], answer: 1,
            exp: "Refúgio (onde nos escondemos) e força (com que enfrentamos): abrigo e coragem." },
          { type: "order", kicker: "Memorização · Salmo 46.10", q: "Monte a ordem do Senhor:", ref: "Salmo 46.10",
            words: ["Ficai", "quietos", "e", "sabei", "que", "eu", "sou", "Deus"],
            exp: "A quietude nasce de saber quem Deus é, não de fingir que o problema sumiu." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "Para onde o crente corre quando o mundo treme?",
            opts: ["Para dentro de si mesmo", "Para dentro de Deus", "Para longe da fé", "Para o acaso"], answer: 1,
            exp: "Deus é a fortaleza segura — corremos para dentro dele." }
        ]
      }
    ]
  },
  {
    id: "salmos-de-confianca",
    title: "Salmos de Confiança",
    theme: "Confiança",
    days: [
      {
        id: "sc-1",
        title: "Minha luz e salvação",
        subtitle: "Salmo 27 · Coragem",
        minutes: 7,
        carryRef: "sl27.1",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Nomeie diante de Deus um medo que você carrega. Toque na lâmpada.",
            prayer: "Senhor, tu és a minha luz. Dissipa o meu medo com a tua presença. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "A quem temerei?", passageRefs: ["sl27.1"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Descanse na luz", verseRef: "sl27.1", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "O temor certo",
            intro: "Um reformador nos ajuda a redirecionar o medo.",
            author: "João Calvino", initial: "C", source: "tema sobre o temor de Deus",
            text: "Calvino ensinava que quem teme a Deus deixa de temer mil outras coisas. O temor reverente do Senhor não paralisa — liberta. Quando Deus é a maior realidade da minha vida, as ameaças diminuem ao seu tamanho verdadeiro." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que medo perde o poder quando Deus é a sua luz?",
            intro: "Escreva e entregue. Só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração — use as suas palavras.",
            prayer: "Senhor, luz da minha vida e minha salvação, a quem temerei? Anda comigo hoje e cala os meus medos. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 27 · O Desafio", q: "O SENHOR é minha luz e minha...", verseRef: "sl27.1",
            opts: ["fortuna", "salvação", "fama", "força apenas"], answer: 1,
            exp: "Luz (que revela) e salvação (que resgata): por isso, a quem temer?" },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "O temor reverente de Deus, segundo Calvino,...",
            opts: ["paralisa o crente", "liberta de outros medos", "é desnecessário", "vem das obras"], answer: 1,
            exp: "Temer a Deus acima de tudo encolhe os outros temores ao tamanho real." },
          { type: "match", kicker: "Ligue", q: "Relacione:",
            pairs: [["Luz", "Revela o caminho"], ["Salvação", "Resgata o pecador"], ["Temor de Deus", "Liberta de outros medos"], ["Confiança", "Descanso na presença"]],
            exp: "O Salmo 27 troca o medo pela confiança na presença de Deus." }
        ]
      },
      {
        id: "sc-2",
        title: "Deleite na Palavra",
        subtitle: "Salmo 1 · Meditação",
        minutes: 7,
        carryRef: "sl1.2",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Peça a Deus prazer — e não só disciplina — na sua Palavra. Toque na lâmpada.",
            prayer: "Pai, dá-me deleite na tua Palavra, não apenas dever. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Medita de dia e de noite", passageRefs: ["sl1.2"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Rumine a Palavra", verseRef: "sl1.2", seconds: 20 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "A árvore plantada",
            intro: "Um reformador ilustra o fruto da meditação.",
            author: "Martinho Lutero", initial: "L", source: "tema sobre meditação nas Escrituras",
            text: "Lutero comparava a meditação a ruminar: voltar ao mesmo texto de novo e de novo, deixando-o descer do olho ao coração. A árvore do Salmo 1 não dá fruto de repente — dá porque está plantada e enraizada junto às águas da Palavra." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "Que verdade da Palavra você quer 'ruminar' hoje?",
            intro: "Escreva uma frase para levar no dia. Só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração.",
            prayer: "Senhor, planta-me junto às águas da tua Palavra, para que eu dê fruto no tempo certo. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 1 · O Desafio", q: "Onde está o prazer do homem bem-aventurado?", verseRef: "sl1.2",
            opts: ["Nas riquezas", "Na lei do SENHOR", "Na fama", "No conselho dos maus"], answer: 1,
            exp: "O deleite na Palavra é a raiz de uma vida frutífera e firme." },
          { type: "mcq", kicker: "A Voz dos Pais · Lutero", q: "Meditar, para Lutero, é como...",
            opts: ["ler uma vez e esquecer", "ruminar o texto até o coração", "decorar sem entender", "evitar as Escrituras"], answer: 1,
            exp: "Voltar ao texto até ele descer do olho ao coração." },
          { type: "order", kicker: "Memorização · Salmo 1.2", q: "Complete a meditação:", ref: "Salmo 1.2",
            words: ["em", "sua", "lei", "medita", "de", "dia", "e", "de", "noite"],
            exp: "A meditação constante mantém a árvore verde e frutífera." }
        ]
      },
      {
        id: "sc-3",
        title: "Ele nos fez",
        subtitle: "Salmo 100 · Adoração",
        minutes: 7,
        carryRef: "sl100.3",
        stations: [
          { type: "light", eyebrow: "Estação 01 · Acender a lâmpada", title: "Aquiete o coração",
            lead: "Comece reconhecendo: eu sou criatura, Ele é o Criador. Toque na lâmpada.",
            prayer: "Criador, ensina-me a viver como quem pertence a ti. Amém." },
          { type: "read", eyebrow: "Estação 02 · A Palavra", title: "Foi ele que nos fez", passageRefs: ["sl100.3"] },
          { type: "breath", eyebrow: "Estação 03 · Respiro", title: "Você pertence a Ele", verseRef: "sl100.3", seconds: 18 },
          { type: "voice", eyebrow: "Estação 04 · A Voz dos Pais", title: "Não a nós mesmos",
            intro: "Um pai da Igreja resume de onde vem a nossa identidade.",
            author: "Agostinho", initial: "A", source: "tema da criação e dependência",
            text: "Agostinho insistia que não nos criamos nem nos sustentamos. Reconhecer 'foi ele que nos fez, e não nós a nós mesmos' derruba o orgulho e funda a adoração: tudo o que sou é dom. Quem se recebe das mãos de Deus aprende a devolvê-lo em louvor." },
          { type: "reflect", eyebrow: "Estação 05 · Reflexão do coração", title: "O que muda ao lembrar que você não se fez a si mesmo?",
            intro: "Escreva um motivo de gratidão de hoje. Só você vê." },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "Uma sugestão de oração.",
            prayer: "Senhor, tu me fizeste e eu sou teu. Recebe hoje a minha vida em adoração. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Salmo 100 · O Desafio", q: "Quem nos fez, segundo o v.3?", verseRef: "sl100.3",
            opts: ["Nós mesmos", "O acaso", "O SENHOR", "O destino"], answer: 2,
            exp: "Somos criatura, não criador — e isso funda a adoração." },
          { type: "mcq", kicker: "A Voz dos Pais · Agostinho", q: "Reconhecer que não nos criamos...",
            opts: ["alimenta o orgulho", "funda a adoração", "não muda nada", "nega a Deus"], answer: 1,
            exp: "Tudo o que sou é dom; por isso adoro." },
          { type: "match", kicker: "Ligue", q: "Relacione:",
            pairs: [["Criador", "Deus"], ["Criatura", "Nós"], ["Pertencer", "Somos dele"], ["Louvor", "Resposta certa"]],
            exp: "Da criação nasce a gratidão, e da gratidão o louvor." }
        ]
      }
    ]
  }
];
