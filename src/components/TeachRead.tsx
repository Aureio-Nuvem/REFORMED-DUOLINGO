import { useState } from "react";
import type { TeachCard } from "../content/schema";
import { snd } from "../engine/audio";
import { Icon } from "../ui/Icons";

interface Props {
  cards: TeachCard[];        // o bloco atual de cartões
  blockLabel?: string;       // ex.: "Bloco 2 · P.6–10"
  onStop: (readCount: number) => void; // parar e salvar (quantos cartões viu)
  onDone: () => void;                  // terminou o bloco → praticar
}

/** Modo Aprender — lê o material (em blocos), com opção de parar e continuar depois. */
export function TeachRead({ cards, blockLabel, onStop, onDone }: Props) {
  const [i, setI] = useState(0);
  const c = cards[i];
  const last = i + 1 >= cards.length;

  function next() {
    snd.tap();
    if (last) onDone();
    else setI(i + 1);
  }

  return (
    <section className="screen flow" style={{ position: "absolute", inset: 0 }}>
      <div className="flow-top">
        <button className="xbtn" onClick={() => onStop(i)} aria-label="Parar"><Icon name="i-x" /></button>
        <div className="pbar"><i style={{ width: (i / cards.length) * 100 + "%" }} /></div>
        <div className="mini-heart" style={{ color: "var(--mustard-deep)" }}>
          <Icon name="i-book" /><span>{i + 1}/{cards.length}</span>
        </div>
      </div>
      <div className="flow-body">
        {blockLabel && <div className="q-kicker" style={{ color: "var(--mustard-deep)", marginBottom: 4 }}>{blockLabel}</div>}
        <div className="teach-card">
          <div className="q-kicker" style={{ color: "var(--mustard-deep)" }}>{c.eyebrow}</div>
          <div className="teach-q">{c.title}</div>
          <div className="teach-a">{c.body}</div>
        </div>
      </div>
      <div className="flow-foot">
        <button className="cta terra" onClick={next}>{last ? "Praticar o que aprendi" : "Continuar"}</button>
        <button className="ghost-btn" onClick={() => onStop(i)}>Parar e continuar depois</button>
      </div>
    </section>
  );
}
