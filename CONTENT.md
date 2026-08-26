# Guia de conteúdo — Lúmen

Este documento explica **como adicionar conteúdo** e a estratégia que garante
que o app não fique sem material (a preocupação nº 1 de retenção).

## Princípio: conteúdo é dado, não código

Nada de texto "chumbado" na lógica. Todo conteúdo satisfaz os tipos em
`src/content/schema.ts`. Para adicionar conteúdo, você edita/cria arquivos de
dados — **sem tocar em programação**.

## Como o app nunca fica sem conteúdo

Quatro fontes que se somam:

1. **Devocionais** (`devotionals.ts`) — planos/unidades de vários dias, com
   texto **original** (reflexões, orações, perguntas). Escala sem limite e sem
   direito autoral. Meta de produção: planos de 30/60/90 dias.
2. **Catecismo de Westminster** (`catechism.ts`) — 107 perguntas de domínio
   público. Sozinho, gera dezenas de lições e centenas de flashcards
   automaticamente.
3. **Confissões e credos** — WCF, credos apostólico/niceno (domínio público).
4. **Escrituras** (`bible.ts`) — via BLIVRE (domínio público). Referenciadas por
   chave `livro.cap.ver`, nunca digitadas "de memória".

Além disso, a **repetição espaçada** (modo Revisar) faz o conteúdo fixo se
renovar: o app reagenda o que está "esfriando", sustentando o hábito mesmo antes
de haver milhares de itens.

## Adicionar um dia de devocional

Em `src/content/devotionals.ts`, acrescente um `DevotionalDay` a `days` de uma
`Unit` (ou crie uma nova `Unit`). Cada dia tem:

- **6 estações serenas**: `light` (oração de abertura), `read` (passagem),
  `breath` (respiro/meditação), `voice` (a voz dos pais), `reflect` (reflexão
  escrita), `pray` (oração sugerida).
- **`challenge`**: 3+ perguntas ancoradas no texto do dia.
- **`carryRef`**: o versículo do "selo do dia".

As passagens usam **chaves** de `bible.ts` (ex.: `"sl119.105"`). Se a chave
ainda não existe, adicione-a em `VERSES` (do arquivo-fonte BLIVRE).

> As "Vozes dos Pais" devem ser **paráfrases próprias** de temas conhecidos dos
> reformadores (não citações literais), para evitar problemas de fidelidade e
> direito autoral. Sempre reformado/confessional.

## Adicionar uma coleção da Academia

Em `src/content/courses.ts`, acrescente um `Course` a `COURSES` com `questions`
(tipos `mcq`, `order`, `match`). Coleções `locked: true` aparecem como
"Em breve". Os flashcards do modo Revisar são **derivados automaticamente** das
perguntas.

## Importar as fontes verificadas (pendências)

- **BLIVRE completa**: substituir a semente de `bible.ts` por um objeto gerado a
  partir do arquivo-fonte oficial (texto/JSON/XML). Manter a chave
  `livro.cap.ver` como única fonte de verdade.
- **Catecismo (107)**: completar `SHORTER_CATECHISM` a partir de um arquivo-fonte
  verificado. O curso da Academia é gerado a partir dele.

Enquanto essas importações não são feitas, os textos marcados como "semente"
servem só para desenvolvimento e **não devem ir para produção**.
