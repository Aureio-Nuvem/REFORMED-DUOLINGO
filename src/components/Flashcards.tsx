import { useState } from "react";
import type { Flashcard } from "../engine/exercises";
import { snd } from "../engine/audio";
import { Icon } from "../ui/Icons";

interface Props {
  cards: Flashcard[];
  onQuit: () => void;
  onFinish: (known: number, total: number) => void;
}

/** Revisar — repetição espaçada em cartões: pergunta → revela → "Lembrei/Não lembrei". */
export function Flashcards({ cards, onQuit, onFinish }: Props) {
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState(0);
  const c = cards[i];

  function rate(ok: boolean) {
    if (!revealed) return;
    ok ? snd.correct() : snd.wrong();
    const nextKnown = known + (ok ? 1 : 0);
    if (i + 1 >= cards.length) { onFinish(nextKnown, cards.length); return; }
    setKnown(nextKnown); setI(i + 1); setRevealed(false);
  }

  return (
    <section className="screen flow" style={{ position: "absolute", inset: 0 }}>
      <div className="flow-top">
        <button className="xbtn" onClick={onQuit} aria-label="Sair"><Icon name="i-x" /></button>
        <div className="pbar"><i style={{ width: (i / cards.length) * 100 + "%" }} /></div>
        <div className="mini-heart" style={{ color: "var(--forest)" }}>
          <Icon name="i-reset" /><span>{i + 1}/{cards.length}</span>
        </div>
      </div>
      <div className="flow-body" style={{ display: "flex", flexDirection: "column" }}>
        <button className="flash-card" onClick={() => { if (!revealed) { setRevealed(true); snd.tap(); } }}>
          {revealed ? (
            <>
              <span className="flash-side" style={{ color: "var(--terra-deep)" }}>Resposta</span>
              <span className="flash-back">{c.back}</span>
            </>
          ) : (
            <>
              <span className="flash-side">Pergunta</span>
              <span className="flash-front">{c.front}</span>
              <span className="flash-hint">Toque para revelar a resposta</span>
            </>
          )}
        </button>
        {revealed && (
          <div className="flash-rate">
            <button className="flash-no" onClick={() => rate(false)}>Não lembrei</button>
            <button className="flash-yes" onClick={() => rate(true)}>Lembrei</button>
          </div>
        )}
      </div>
    </section>
  );
}
