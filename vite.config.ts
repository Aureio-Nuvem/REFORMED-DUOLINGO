import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Lúmen — configuração do PWA (instalável no celular).
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg"],
      manifest: {
        name: "Lúmen — Devocional Reformado",
        short_name: "Lúmen",
        description:
          "Devocional reformado gamificado: Escrituras, catecismo e os reformadores, um dia de cada vez.",
        theme_color: "#33463A",
        background_color: "#E7DCC6",
        display: "standalone",
        lang: "pt-BR",
        icons: [
          { src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }
        ]
      }
    })
  ]
});
