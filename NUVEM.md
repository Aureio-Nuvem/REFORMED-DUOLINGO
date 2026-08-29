# Lúmen — login e progresso na nuvem

Sem conta, o app funciona normalmente e salva no próprio navegador.
Com conta, o progresso acompanha a pessoa em qualquer aparelho.

## O único passo manual: criar o banco

Tudo o mais (tabelas, segredo de sessão, convites) o app resolve sozinho.

1. Entre em **dash.cloudflare.com**
2. No menu, **Storage & Databases → D1 SQL Database**
3. **Create** → nome exatamente `lumen-db` → **Create**
4. Copie o **Database ID** que aparecer na página do banco
5. Cole em `wrangler.jsonc`, no lugar de `PREENCHER_APOS_CRIAR_O_BANCO`

Ao salvar esse arquivo no Git, o Cloudflare publica sozinho.

## Primeiro acesso

Abra o app → **Perfil → Entrar ou criar conta**.

A **primeira conta criada é a dona do app** e não precisa de convite — então
crie a sua logo depois de publicar. Daí em diante, ninguém entra sem um código.

## Convidar pessoas

Como dona, você tem **Perfil → Convidar pessoas**: gere os códigos, copie e
envie. Cada código vale uma conta, e a tela mostra quais já foram usados.

Quem recebe abre o app → **Perfil → Entrar ou criar conta → Tenho um código**.

---

## Como a sincronização funciona

- O save vive no navegador e sobe alguns segundos depois de cada mudança.
- Cada save tem um número de revisão. Se outro aparelho gravou antes, o
  servidor devolve o save atual e o cliente **mescla** em vez de sobrescrever.
- Regras da mesclagem (`src/engine/merge.ts`): XP, gemas, ofensiva, maestria e
  posição de estudo ficam com o **maior** valor; dias concluídos e diário são
  **unidos**; vidas ficam com o **menor**; preferências seguem o aparelho atual.

## Segurança

- Senhas nunca são guardadas: só o hash PBKDF2-SHA256 (100 mil iterações) com
  salt por usuário.
- Sessões são tokens assinados com HMAC-SHA256, válidos por 60 dias.
- O login dá a mesma resposta para usuário inexistente e senha errada.
- O segredo que assina as sessões nasce sozinho e fica no banco. Se preferir
  defini-lo você: `npx wrangler secret put SESSION_SECRET` (ele tem prioridade).

## Custo

Cabe folgado no plano gratuito: o D1 dá 5 GB e 5 milhões de leituras por dia;
os Workers, 100 mil requisições por dia. Para poucos usuários é irrisório.

## Se precisar mexer no banco

```bash
# quem tem conta
npx wrangler d1 execute lumen-db --remote --command "SELECT name, username FROM users;"

# transformar alguém em dono (se perder o acesso)
npx wrangler d1 execute lumen-db --remote --command "UPDATE users SET is_owner=1 WHERE username='seu.usuario';"
```
