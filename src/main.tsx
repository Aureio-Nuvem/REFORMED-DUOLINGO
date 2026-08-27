import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { loadBible } from "./content/bible";
import "./styles/tokens.css";
import "./styles/app.css";

const root = createRoot(document.getElementById("root")!);

// Carrega a BLIVRE (public/bible.json) antes de renderizar. Guardada offline
// pelo PWA, então só a 1ª visita espera; depois é instantâneo.
loadBible().finally(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
