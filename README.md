# Lúmen 🕯️

Devocional reformado gamificado — um "Duolingo para cristãos reformados".
Escrituras, catecismo e os reformadores, um dia de cada vez, numa perspectiva
confessional reformada (calvinista).

Aplicativo **PWA** (instalável no celular), construído com **React + Vite +
TypeScript**. Este repositório é a versão de produção; o protótipo interativo
que validou o design e os fluxos foi feito à parte.

## Os dois pilares

- **Devocional** (disciplina do coração) — um fluxo guiado de 8 estações que
  vira hábito diário. A **ofensiva** (streak) pertence só a este pilar.
- **Academia** (disciplina da mente) — estudo livre de catecismo, solas, TULIP
  etc., com os modos **Aprender · Revisar (flashcards) · Desafio relâmpago ·
  Maestria**. Rende XP e maestria, mas não mexe na ofensiva.

## Rodando localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção (tsc + vite) → dist/
npm run preview    # pré-visualiza o build
npm run typecheck  # checagem de tipos
```

## Estrutura

```
src/
  main.tsx              # ponto de entrada
  App.tsx               # shell (HUD, navegação, telas) e roteamento
  state.ts              # estado do jogo (progresso persistente)
  styles/
    tokens.css          # tokens do sistema visual (claro + escuro)
    app.css             # estilos de componentes
  ui/Icons.tsx          # sprite de ícones do sistema
  engine/
    storage.ts          # persistência local (localStorage)
    audio.ts            # efeitos sonoros (WebAudio)
    confetti.ts         # confete das telas de vitória
    exercises.ts        # utilidades do motor (shuffle, flashcards)
  components/
    LessonView.tsx      # motor de exercícios (múltipla escolha / montar / ligar)
    Flashcards.tsx      # modo Revisar (repetição espaçada)
    Devotional.tsx      # fluxo devocional (estações → desafio → selo)
    CourseFlow.tsx      # Academia (modos de estudo → resultado)
  content/              # TODO O CONTEÚDO É DADO — ver CONTENT.md
    schema.ts           # tipos de conteúdo
    bible.ts            # versículos (BLIVRE, domínio público) — semente
    catechism.ts        # Catecismo de Westminster — semente
    devotionals.ts      # planos/unidades de devocional (conteúdo original)
    courses.ts          # coleções da Academia
```

## Conteúdo & profundidade

O conteúdo é **100% dado tipado**, separado do código — adicionar conteúdo não
exige programar. Ver **[CONTENT.md](./CONTENT.md)** para o guia de autoria e a
estratégia que garante que o app não se esgote.

## ⚠️ Licenciamento bíblico

- Fonte adotada: **A Bíblia Livre (BLIVRE)** — domínio público, livre para uso
  em apps. As redações em `src/content/bible.ts` são **rascunho** e devem ser
  substituídas pelo **arquivo-fonte oficial da BLIVRE** antes de publicar.
- A **ARA/ARC** (Sociedade Bíblica do Brasil) é protegida por direitos autorais
  e exigiria licença — por isso não é usada.
- O **Catecismo de Westminster** é domínio público; a semente em
  `src/content/catechism.ts` cobre as primeiras perguntas e deve ser completada
  a partir de um arquivo-fonte verificado (107 perguntas).

## Próximos passos

- [ ] Importar o arquivo-fonte completo da BLIVRE (`bible.ts` → gerado).
- [ ] Completar o Catecismo de Westminster (107 perguntas).
- [ ] Progresso na nuvem + login (ex.: Supabase).
- [ ] Repetição espaçada com agendamento real (SRS) no modo Revisar.
- [ ] Lembrete diário (notificações) e ícones PNG do PWA.
- [ ] Portar telas restantes com a fidelidade visual completa do protótipo.

_Soli Deo Gloria._
