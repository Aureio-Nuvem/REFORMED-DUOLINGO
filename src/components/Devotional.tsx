import { useEffect, useRef, useState } from "react";
import type { DevotionalDay, Station } from "../content/schema";
import { getVerse, joinVerses } from "../content/bible";
import { snd } from "../engine/audio";
import { burst } from "../engine/confetti";
import { Icon } from "../ui/Icons";
import { LessonView } from "./LessonView";
import type { GameActions } from "../state";

interface Props {
  day: DevotionalDay;
  hearts: number;
  actions: GameActions;
  onExit: () => void;   // sair sem concluir
  onDone: () => void;   // concluiu e guardou o selo
}

type Phase = { kind: "stations"; i: number } | { kind: "challenge" } | { kind: "selo"; xp: number };

function Segments({ active }: { active: number }) {
  return (
    <div className="seg">
      {Array.from({ length: 8 }, (_, k) => (
        <i key={k} className={k < active ? "on" : k === active ? "cur" : ""} />
      ))}
    </div>
  );
}

export function Devotional({ day, hearts, actions, onExit, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>({ kind: "stations", i: 0 });

  if (phase.kind === "challenge") {
    return (
      <LessonView
        questions={day.challenge}
        hearts={hearts}
        header={<div style={{ flex: 1 }}><Segments active={6} /></div>}
        onWrong={actions.loseHeart}
        onQuit={onExit}
        onFinish={(correct) => {
          const xp = 15 + correct * 5;
          actions.addXp(xp);
          actions.addGems(8);
          setPhase({ kind: "selo", xp });
        }}
      />
    );
  }

  if (phase.kind === "selo") {
    return <Selo day={day} xp={phase.xp} onDone={() => { actions.completeDay(); onDone(); }} />;
  }

  const st = day.stations[phase.i];
  const goNext = () => {
    if (st.type === "reflect") {
      const el = document.getElementById("reflect-in") as HTMLTextAreaElement | null;
      const passageRef = getVerse(day.carryRef).ref;
      if (el) actions.addDiary(passageRef + " · BLIVRE", el.value);
    }
    snd.tap();
    if (phase.i + 1 < day.stations.length) setPhase({ kind: "stations", i: phase.i + 1 });
    else setPhase({ kind: "challenge" });
  };

  return (
    <section className="screen flow" style={{ position: "absolute", inset: 0 }}>
      <div className="flow-top">
        <button className="xbtn" onClick={onExit} aria-label="Sair"><Icon name="i-x" /></button>
        <Segments active={phase.i} />
      </div>
      <StationBody station={st} onCtaState={() => {}} onNext={goNext} />
    </section>
  );
}

function StationBody({ station, onNext }: { station: Station; onNext: () => void; onCtaState: () => void; }) {
  return (
    <>
      <div className="flow-body">
        <div className="st-eyebrow">{station.eyebrow}</div>
        <div className="st-title">{station.title}</div>
        <StationContent station={station} />
      </div>
      <StationFoot station={station} onNext={onNext} />
    </>
  );
}

/* Cada estação tem o seu conteúdo e a sua regra de "Continuar". */
function StationFoot({ station, onNext }: { station: Station; onNext: () => void }) {
  const [ready, setReady] = useState(station.type !== "light" && station.type !== "breath");
  const label =
    station.type === "reflect" ? "Guardar reflexão" :
    station.type === "pray" ? "Amém" :
    station.type === "breath" && !ready ? "Respire…" : "Continuar";

  useEffect(() => {
    if (station.type !== "breath") return;
    setReady(false);
    let left = station.seconds;
    const el = document.getElementById("breath-count");
    const id = setInterval(() => {
      left -= 1;
      if (el) el.textContent = left <= 0 ? "✓" : left + "s";
      if (left <= 0) { clearInterval(id); setReady(true); snd.chime(); }
    }, 1000);
    return () => clearInterval(id);
  }, [station]);

  // "acender a lâmpada" habilita o Continuar
  useEffect(() => {
    if (station.type !== "light") return;
    const btn = document.getElementById("lamp-btn");
    if (!btn) return;
    const onClick = () => {
      btn.classList.add("lit");
      const hint = document.getElementById("lamp-hint");
      if (hint) hint.textContent = "A luz está acesa";
      setReady(true); snd.chime();
    };
    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, [station]);

  return (
    <div className="flow-foot">
      <button className="cta" disabled={!ready} onClick={onNext}>{label}</button>
    </div>
  );
}

function StationContent({ station }: { station: Station }) {
  switch (station.type) {
    case "light": {
      const prayer = station.prayer ?? (station.prayerRef ? `“${getVerse(station.prayerRef).text}” — ${getVerse(station.prayerRef).ref} (BLIVRE)` : "");
      return (
        <>
          <div className="st-lead">{station.lead}</div>
          <div className="st-body">
            <button className="lamp-btn" id="lamp-btn"><Icon name="i-lamp" /></button>
            <span className="lamp-hint" id="lamp-hint">Toque para acender</span>
          </div>
          <div className="pray-quote">{prayer}</div>
        </>
      );
    }
    case "read": {
      const first = getVerse(station.passageRefs[0]).ref;
      const last = getVerse(station.passageRefs[station.passageRefs.length - 1]).ref;
      const label = station.passageRefs.length > 1 ? `${first}–${last.split(".").pop()} · BLIVRE` : `${first} · BLIVRE`;
      return (
        <div className="st-body" style={{ alignItems: "stretch" }}>
          <div className="passage">{joinVerses(station.passageRefs)}</div>
          <div className="st-eyebrow" style={{ color: "var(--mustard-deep)", marginTop: 18, textAlign: "left" }}>{label}</div>
        </div>
      );
    }
    case "breath": {
      const v = getVerse(station.verseRef);
      return (
        <div className="st-body">
          <div className="breath-wrap">
            <span className="breath-orb"><Icon name="i-candle" /></span>
            <div className="breath-verse">“{v.text}”</div>
            <div className="breath-ref">{v.ref} · BLIVRE</div>
            <div className="breath-count" id="breath-count">{station.seconds}s</div>
          </div>
        </div>
      );
    }
    case "voice":
      return (
        <>
          <div className="st-lead">{station.intro}</div>
          <div className="st-body" style={{ alignItems: "stretch" }}>
            <div className="voice-card">
              <div className="voice-head">
                <span className="voice-av">{station.initial}</span>
                <div><div className="voice-who">{station.author}</div><div className="voice-src">{station.source}</div></div>
              </div>
              <div className="voice-text">{station.text}</div>
            </div>
          </div>
        </>
      );
    case "reflect":
      return (
        <>
          <div className="st-lead">{station.intro}</div>
          <div className="st-body" style={{ alignItems: "stretch" }}>
            <textarea className="reflect-in" id="reflect-in" placeholder="Escreva aqui o que Deus falou ao seu coração…" />
            <div className="reflect-meta">
              <span className="l"><Icon name="i-lock" />SÓ VOCÊ VÊ · SEM CERTO OU ERRADO</span>
            </div>
          </div>
        </>
      );
    case "pray":
      return (
        <>
          <div className="st-lead">{station.intro}</div>
          <div className="st-body">
            <div style={{ color: "var(--terra)", margin: "16px 0 2px" }}><Icon name="i-pray" style={{ fontSize: 44 }} /></div>
            <div className="pray-quote">{station.prayer}</div>
          </div>
        </>
      );
  }
}

function Selo({ day, xp, onDone }: { day: DevotionalDay; xp: number; onDone: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    snd.win();
    if (canvasRef.current) burst(canvasRef.current);
  }, []);
  const carry = getVerse(day.carryRef);
  const date = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "").toUpperCase();
  return (
    <section className="screen selo" style={{ position: "absolute", inset: 0 }}>
      <canvas ref={canvasRef} className="confetti" />
      <div className="halo" />
      <span className="eyebrow">ESTAÇÃO 08 · SELO DO DIA</span>
      <h2>Lâmpada<br />acesa hoje</h2>
      <div className="seal">
        <Icon name="i-check" />
        <span className="d">{date}</span>
        <span className="n">LÚMEN</span>
      </div>
      <div className="selo-rewards">
        <div className="r s1"><Icon name="i-flame" /><span className="v">+1</span><span className="k">OFENSIVA</span></div>
        <div className="r s2"><Icon name="i-xp" /><span className="v">+{xp}</span><span className="k">XP</span></div>
        <div className="r s3"><Icon name="i-gem" /><span className="v">+8</span><span className="k">GEMAS</span></div>
      </div>
      <div className="carry"><div className="k">CARREGUE HOJE</div><div className="v">“{carry.text}”</div></div>
      <button className="cta terra" onClick={onDone}>Guardar o selo</button>
    </section>
  );
}
