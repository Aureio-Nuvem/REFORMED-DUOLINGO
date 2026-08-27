# Publicar o Lúmen no Cloudflare Pages

O app é um site estático (PWA). O Cloudflare Pages publica direto do GitHub e
republica sozinho a cada `git push`.

## Passo a passo (uma vez, ~2 minutos)

1. Acesse **dash.cloudflare.com** → menu lateral **Workers & Pages** → aba **Pages**.
2. Clique em **Create application** → **Connect to Git** → escolha o repositório
   **`Aureio-Nuvem/REFORMED-DUOLINGO`**.
3. Em **Set up builds and deployments**, preencha:
   - **Production branch:** `claude/reformed-devotional-app-bsspn4`
     *(ou faça o merge para `main` e use `main` — recomendado depois)*
   - **Framework preset:** `Vite` (ou "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** já fica travado em 22 pelo arquivo `.node-version`.
4. Clique em **Save and Deploy**. Em ~1 minuto sai a URL: algo como
   **`https://reformed-duolingo.pages.dev`**.

Pronto — você e os outros usuários abrem essa URL no celular e em **"Adicionar à
tela inicial"** o app instala como um aplicativo (com Bíblia offline).

## Depois (opcional)

- **Domínio próprio:** em Pages → Custom domains, aponte `lumen.seudominio.com`.
- **A cada mudança:** basta `git push` — o Cloudflare republica sozinho.
- Se preferir publicar por linha de comando: `npm i -D wrangler` e
  `npx wrangler pages deploy dist` (exige login na sua conta Cloudflare).
