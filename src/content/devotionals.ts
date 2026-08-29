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
              { key: "ensino", prompt: "O que a Palavra de hoje afirma sobre o caminho?" },
              { key: "gratidao", prompt: "Por qual passo já iluminado por Deus eu agradeço?" },
              { key: "confissao", prompt: "Onde tenho andado na minha própria luz?" },
              { key: "suplica", prompt: "Que passo peço que Ele firme hoje?" }
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
              { key: "ensino", prompt: "O que significa ter o SENHOR como Pastor?" },
              { key: "gratidao", prompt: "Onde Ele já me guiou sem que eu percebesse?" },
              { key: "confissao", prompt: "Que área da minha vida ainda pastoreio sozinho?" },
              { key: "suplica", prompt: "Que direção peço a Ele hoje?" }
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
              { key: "ensino", prompt: "O que muda na minha situação se Deus reina sobre ela?" },
              { key: "gratidao", prompt: "Que refúgio Ele já foi para mim antes?" },
              { key: "confissao", prompt: "Onde troquei a quietude pela ansiedade?" },
              { key: "suplica", prompt: "Que tempestade peço que Ele aquiete?" }
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
      }
    ]
  },
  {
    id: "salmos-de-confianca",
    title: "Salmos de Confiança",
    theme: "Confiança",
    icon: "i-anchor", accent: "var(--forest)",
    blurb: "Quando o medo aperta e o mundo estremece, os Salmos ensinam o coração a descansar. Luz, deleite na Palavra e a certeza de pertencer a Deus.",
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
              { key: "ensino", prompt: "O que significa Deus ser a minha luz e salvação?" },
              { key: "gratidao", prompt: "De que medo Ele já me livrou?" },
              { key: "confissao", prompt: "A que tenho dado mais peso do que a Ele?" },
              { key: "suplica", prompt: "Que temor entrego agora?" }
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
              { key: "ensino", prompt: "Que verdade da Palavra quero levar comigo hoje?" },
              { key: "gratidao", prompt: "Que fruto a Palavra já deu na minha vida?" },
              { key: "confissao", prompt: "Onde tratei a Escritura como dever, e não como deleite?" },
              { key: "suplica", prompt: "Que raiz peço que Ele aprofunde em mim?" }
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
              { key: "ensino", prompt: "O que muda em saber que não me fiz a mim mesmo?" },
              { key: "gratidao", prompt: "Que dom recebido eu nomeio e agradeço hoje?" },
              { key: "confissao", prompt: "Onde vivi como se fosse dono de mim?" },
              { key: "suplica", prompt: "Que parte de mim devolvo ao Criador?" }
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
      }
    ]
  },
  {
    id: "descanso-e-graca",
    title: "Descanso e Graça",
    theme: "Evangelho",
    icon: "i-dove", accent: "var(--mustard-deep)",
    blurb: "O coração do Evangelho: somos salvos pela graça, não pelo mérito. Descanse no dom de Deus e nas misericórdias que se renovam a cada manhã.",
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
              { key: "ensino", prompt: "O que significa ser salvo por dom, e não por mérito?" },
              { key: "gratidao", prompt: "O que recebi sem nunca ter merecido?" },
              { key: "confissao", prompt: "Onde ainda tento pagar o que já foi pago?" },
              { key: "suplica", prompt: "Que mão fechada peço que Ele abra?" }
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
              { key: "ensino", prompt: "Por que o jugo de Cristo é leve?" },
              { key: "gratidao", prompt: "Onde Ele já carregou o peso comigo?" },
              { key: "confissao", prompt: "Que peso insisti em levar sozinho?" },
              { key: "suplica", prompt: "Que carga entrego a Ele agora?" }
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
              { key: "ensino", prompt: "O que é uma fidelidade que se renova a cada manhã?" },
              { key: "gratidao", prompt: "Que misericórdia eu recebi nesta semana?" },
              { key: "confissao", prompt: "Onde julguei Deus pela dor, e não pelo seu caráter?" },
              { key: "suplica", prompt: "Que manhã peço que Ele ilumine?" }
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
      }
    ]
  },
  {
    id: "livrete-de-ouro",
    title: "O Livrete de Ouro",
    theme: "Vida Cristã · Calvino",
    icon: "i-cross", accent: "var(--slate)",
    source: "Baseado em João Calvino",
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
              { key: "ensino", prompt: "De onde vem a regra da vida cristã, segundo o texto?" },
              { key: "gratidao", prompt: "Que direção recebida de Deus eu agradeço?" },
              { key: "confissao", prompt: "Onde tenho preferido a minha luz à dele?" },
              { key: "suplica", prompt: "Que coração ensinável peço para estes dias?" }
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
              { key: "ensino", prompt: "O que Tiago diz sobre ouvir e praticar?" },
              { key: "gratidao", prompt: "Que verdade já desceu da minha cabeça à minha vida?" },
              { key: "confissao", prompt: "Que verdade eu domino no discurso, mas ainda não pratico?" },
              { key: "suplica", prompt: "Que distância peço ao Espírito que feche?" }
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
              { key: "ensino", prompt: "Como Paulo equilibra “não cheguei lá” com “prossigo”?" },
              { key: "gratidao", prompt: "Que pequeno progresso dos últimos meses posso nomear?" },
              { key: "confissao", prompt: "Onde o perfeccionismo tem me paralisado em vez de me mover?" },
              { key: "suplica", prompt: "Que passo pequeno e concreto peço forças para dar?" }
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
              { key: "ensino", prompt: "O que muda quando agenda, energia e talento são sacrifício, e não propriedade?" },
              { key: "gratidao", prompt: "O que significa para mim ter sido comprado por preço?" },
              { key: "confissao", prompt: "Que área da minha vida ainda trato como território só meu?" },
              { key: "suplica", prompt: "Que posse eu entrego hoje?" }
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
              { key: "ensino", prompt: "Qual é a lógica de Jesus: por que quem perde a vida a acha?" },
              { key: "gratidao", prompt: "Onde renunciar a algo já me trouxe mais vida, e não menos?" },
              { key: "confissao", prompt: "Que decisão atual estou tomando com o ego no trono?" },
              { key: "suplica", prompt: "Em que escolha peço coragem para perguntar “o que TU queres?” primeiro?" }
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
              { key: "ensino", prompt: "O que a pergunta de Paulo desmonta no meu jeito de ver meus talentos?" },
              { key: "gratidao", prompt: "Que dom eu uso todo dia sem lembrar de quem o deu?" },
              { key: "confissao", prompt: "Com quem tenho me comparado, em vez de administrar o que recebi?" },
              { key: "suplica", prompt: "O que peço para ser mordomo, e não dono?" }
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
              { key: "ensino", prompt: "Para que serve a liberdade que Cristo me deu?" },
              { key: "gratidao", prompt: "Quem usou os próprios dons para me servir, e como isso me marcou?" },
              { key: "confissao", prompt: "Que dom usei mais para construir o meu nome do que para servir?" },
              { key: "suplica", prompt: "A quem, especificamente, vou servir nesta semana?" }
            ] },
          { type: "pray", eyebrow: "Estação 06 · Oração", title: "Ore com estas palavras",
            intro: "A semente de oração do dia — ore pelo nome que você acabou de escrever.",
            prayer: "Senhor, faze dos meus talentos uma mesa posta para os outros. Que eu me gaste sem calcular retorno. Amém." }
        ],
        challenge: [
          { type: "mcq", kicker: "Gálatas 5 · O Desafio", q: "Para que fomos chamados à liberdade?", verseRef: "gl.5.13",
            opts: ["como oportunidade para a carne", "servi-vos uns aos outros pelo amor", "para viver sem lei", "para exigir direitos"], answer: 1,
            exp: "A liberdade cristã não é licença — é o que me libera para servir (Gl 5.13)." },
          { type: "mcq", kicker: "A Voz dos Pais · Calvino", q: "Qual é o uso legítimo de qualquer graça recebida?",
            opts: ["guardá-la para si", "comunicá-la generosamente aos irmãos", "exibi-la publicamente", "trocá-la por reconhecimento"], answer: 1,
            exp: "Dons são depósitos para o bem comum — e prestaremos contas dessa mordomia (III.7.5)." },
          { type: "order", kicker: "Memorização · Gálatas 5.14", q: "Monte o resumo da Lei:", ref: "Gálatas 5.14",
            words: ["Amarás", "ao", "teu", "próximo", "como", "a", "ti", "mesmo"],
            exp: "“Amarás ao teu próximo como a ti mesmo” — toda a Lei se cumpre nesta regra (Gl 5.14)." }
        ]
      }
    ]
  }
];
