# content-source/ — fontes de conteúdo (não versionadas)

Coloque aqui os arquivos-fonte oficiais. Eles **não vão para o Git** (são grandes
e você mantém a fonte de verdade fora do código). Os importadores leem daqui e
geram os arquivos `*.generated.json` em `src/content/`.

## Bíblia — BLIVRE (domínio público)

1. Obtenha a **Bíblia Livre (BLIVRE)** em JSON, no formato de **array de livros**:
   ```json
   [
     { "abbrev": "sl", "name": "Salmos", "chapters": [ ["v1", "v2", "..."], ["..."] ] }
   ]
   ```
   (Veja `blivre.sample.json` para um exemplo mínimo.)
2. Salve como **`content-source/blivre.json`**.
3. Rode: `npm run content:bible`

## Catecismo Breve de Westminster (domínio público, 107 perguntas)

1. Formate uma edição confiável em português como **array**:
   ```json
   [ { "n": 1, "q": "...", "a": "..." } ]
   ```
   (Veja `catechism.sample.json`.)
2. Salve como **`content-source/catechism.json`**.
3. Rode: `npm run content:catechism`

> Enquanto esses arquivos não existirem, o app usa a **semente** de
> desenvolvimento (poucos itens, marcados "conferir"). Não publique com a
> semente — importe as fontes verificadas primeiro.
