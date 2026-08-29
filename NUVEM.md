# Lúmen — login e progresso na nuvem

O app é **local-first**: sem conta, tudo funciona e fica salvo no navegador.
Ao entrar, o progresso do aparelho é **somado** ao da conta (nada é perdido) e
passa a acompanhar a pessoa em qualquer dispositivo.

Login por **código de convite + senha**: ninguém entra sem um código gerado
por você.

---

## Configuração (uma vez só)

Estes passos precisam da sua conta Cloudflare, então rode você mesmo.

### 1. Criar o banco D1

```bash
npx wrangler d1 create lumen-db
```

Copie o `database_id` que aparecer e cole em `wrangler.jsonc`, no lugar de
`PREENCHER_APOS_CRIAR_O_BANCO`.

### 2. Criar as tabelas

```bash
npx wrangler d1 execute lumen-db --remote --file=migrations/0001_init.sql
```

### 3. Definir o segredo das sessões

Uma string longa e aleatória. Ela assina os tokens de login — se mudar, todo
mundo precisa entrar de novo.

```bash
# gera um segredo forte
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# e cadastra
npx wrangler secret put SESSION_SECRET
```

### 4. Publicar

```bash
npm run build && npx wrangler deploy
```

Se o deploy automático pelo Git já estiver ligado, o passo 4 acontece sozinho
a cada push — mas os passos 1 a 3 continuam sendo manuais e feitos uma vez só.

---

## Convidar pessoas

```bash
node scripts/make-invites.mjs 5 > invites.sql
npx wrangler d1 execute lumen-db --remote --file=invites.sql
```

Os códigos ficam no arquivo `invites.sql` (formato `LUMEN-XXXXXX`). Entregue um
para cada pessoa: ela abre o app → **Perfil → Entrar ou criar conta → Tenho um
código de convite**. Cada código só funciona uma vez.

Para ver quais já foram usados:

```bash
npx wrangler d1 execute lumen-db --remote \
  --command "SELECT code, used_by IS NOT NULL AS usado FROM invites;"
```

---

## Como a sincronização funciona

- O save vive no `localStorage` e é enviado ao servidor alguns segundos após
  cada mudança (debounce), para não gerar uma escrita por toque.
- Cada save no servidor tem um número de revisão (`rev`). O cliente envia a
  revisão que conhece; se outro aparelho gravou antes, o servidor responde
  **409** com o save atual e o cliente **mescla** e reenvia.
- Regras da mesclagem (`src/engine/merge.ts`): XP, gemas, ofensiva, maestria e
  posição de estudo ficam com o **maior** valor; dias concluídos e diário são
  **unidos**; vidas ficam com o **menor** (para sincronizar não virar um jeito
  de recuperar vidas); preferências seguem o aparelho atual.

## Segurança

- Senhas nunca são guardadas: só o hash **PBKDF2-SHA256** (100.000 iterações)
  com salt por usuário.
- Sessões são tokens assinados com **HMAC-SHA256** e expiram em 60 dias.
- O login responde a mesma mensagem para usuário inexistente e senha errada,
  para não revelar quem tem conta.
- Comparações de hash e assinatura são feitas em tempo constante.

## Custo

Tudo cabe folgado no **plano gratuito** do Cloudflare: D1 dá 5 GB e 5 milhões
de leituras de linha por dia; os Workers, 100 mil requisições por dia. Para
alguns usuários, o consumo é irrisório.
