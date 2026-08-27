import { useState } from "react";
import type { TeachCard } from "../content/schema";
import { snd } from "../engine/audio";
import { Icon } from "../ui/Icons";

interface Props {
  cards: TeachCard[];
  onQuit: () => void;
  onDone: () => void; // terminou de ler → praticar
}

/** Modo Aprender — lê o material antes de praticar. */
export function TeachRead({ cards, onQuit, onDone }: Props) {
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
        <button className="xbtn" onClick={onQuit} aria-label="Sair"><Icon name="i-x" /></button>
        <div className="pbar"><i style={{ width: (i / cards.length) * 100 + "%" }} /></div>
        <div className="mini-heart" style={{ color: "var(--mustard-deep)" }}>
          <Icon name="i-book" /><span>{i + 1}/{cards.length}</span>
        </div>
      </div>
      <div className="flow-body">
        <div className="teach-card">
          <div className="q-kicker" style={{ color: "var(--mustard-deep)" }}>{c.eyebrow}</div>
          <div className="teach-q">{c.title}</div>
          <div className="teach-a">{c.body}</div>
        </div>
      </div>
      <div className="flow-foot">
        <button className="cta terra" onClick={next}>{last ? "Praticar o que aprendi" : "Continuar"}</button>
      </div>
    </section>
  );
}
