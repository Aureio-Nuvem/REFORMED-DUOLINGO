import { useEffect, useRef, useState } from "react";
import type { DevotionalDay, Station, ThreadKey } from "../content/schema";
import { getVerse, joinVerses } from "../content/bible";
import { snd } from "../engine/audio";
import { burst } from "../engine/confetti";
import { Icon } from "../ui/Icons";
import { LessonView } from "./LessonView";
import type { GameActions } from "../state";

interface Props {
  day: DevotionalDay;
  hearts: number;
  gems: number;
  actions: GameActions;
  onExit: () => void;   // sair sem concluir
  onDone: () => void;   // concluiu e guardou o selo
}

/**
 * O que cada fio significa. Isto é fixo e explicado na tela: o conteúdo do dia
 * traz só a pergunta, e aqui dizemos ao usuário para que serve cada campo.
 */
const FIOS: Record<ThreadKey, { n: string; label: string; hint: string; color: string }> = {
  ensino:    { n: "1", label: "Ensino",   hint: "o que o texto me mostra sobre Deus",     color: "var(--mustard-deep)" },
  gratidao:  { n: "2", label: "Gratidão", hint: "pelo que eu agradeço a partir disto",    color: "var(--forest)" },
  confissao: { n: "3", label: "Confissão", hint: "o que eu reconheço diante de Deus",     color: "var(--terra)" },
  suplica:   { n: "4", label: "Súplica",  hint: "o que eu peço a Ele agora",              color: "var(--slate)" }
};

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

export function Devotional({ day, hearts, gems, actions, onExit, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>({ kind: "stations", i: 0 });

  if (phase.kind === "challenge") {
    return (
      <LessonView
        questions={day.challenge}
        hearts={hearts}
        gems={gems}
        header={<div style={{ flex: 1 }}><Segments active={6} /></div>}
        onWrong={actions.loseHeart}
        onRefill={actions.refillHearts}
        onQuit={onExit}
        onFinish={(correct, total) => {
          actions.recordResult(correct, total);
          const xp = 15 + correct * 5;
          actions.addXp(xp);
          actions.addGems(8);
          setPhase({ kind: "selo", xp });
        }}
      />
    );
  }

  if (phase.kind === "selo") {
    return <Selo day={day} xp={phase.xp} onDone={onDone} />;
  }

  const st = day.stations[phase.i];
  const goNext = () => {
    if (st.type === "reflect") {
      const passageRef = getVerse(day.carryRef).ref;
      if (st.threads?.length) {
        // Guarda só os fios que a pessoa preencheu, cada um rotulado.
        const parts = st.threads
          .map((t) => {
            const el = document.getElementById("fio-" + t.key) as HTMLTextAreaElement | null;
            const v = el?.value.trim();
            return v ? FIOS[t.key].label + ": " + v : null;
          })
          .filter(Boolean);
        if (parts.length) actions.addDiary(passageRef + " · BLIVRE", parts.join("\n"));
      } else {
        const el = document.getElementById("reflect-in") as HTMLTextAreaElement | null;
        if (el) actions.addDiary(passageRef + " · BLIVRE", el.value);
      }
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
  const timerRef = useRef<number | null>(null);
  const label =
    station.type === "reflect" ? "Guardar reflexão" :
    station.type === "pray" ? "Amém" :
    station.type === "breath" && !ready ? "Respire…" : "Continuar";

  useEffect(() => {
    if (station.type !== "breath") return;
    setReady(false);
    let left = station.seconds;
    const el = document.getElementById("breath-count");
    if (el) el.textContent = left + "s";
    timerRef.current = window.setInterval(() => {
      left -= 1;
      if (el) el.textContent = left <= 0 ? "✓" : left + "s";
      if (left <= 0) { if (timerRef.current) clearInterval(timerRef.current); timerRef.current = null; setReady(true); snd.chime(); }
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); timerRef.current = null; };
  }, [station]);

  function skipBreath() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    const el = document.getElementById("breath-count");
    if (el) el.textContent = "✓";
    setReady(true); snd.tap();
  }

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
      {station.type === "breath" && !ready && (
        <button className="skip-link" onClick={skipBreath}>Pular a meditação</button>
      )}
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
            {station.threads?.length ? (
              <>
                <div className="fios-note">
                  <b>Os quatro fios</b> são quatro maneiras de responder ao texto — o que ele
                  {" "}<b>ensina</b>, o que desperta <b>gratidão</b>, o que leva à <b>confissão</b> e o
                  que vira <b>pedido</b>. Não precisa preencher todos, nem escrever bonito.
                </div>
                {station.threads.map((t) => {
                  const fio = FIOS[t.key];
                  return (
                    <div className="fio" key={t.key}>
                      <div className="fio-head">
                        <span className="fio-n" style={{ background: fio.color }}>{fio.n}</span>
                        <div>
                          <div className="fio-label">{fio.label}</div>
                          <div className="fio-hint">{fio.hint}</div>
                        </div>
                      </div>
                      <div className="fio-q">{t.prompt}</div>
                      <textarea className="fio-in" id={"fio-" + t.key} rows={2}
                        placeholder="Escreva uma frase…" />
                    </div>
                  );
                })}
              </>
            ) : (
              <textarea className="reflect-in" id="reflect-in" placeholder="Escreva aqui o que Deus falou ao seu coração…" />
            )}
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
      <div className="selo-note">O selo guarda este dia na sua coleção, no Perfil, e marca a data no seu mapa de constância.</div>
      <button className="cta terra" onClick={onDone}>Guardar o selo</button>
    </section>
  );
}
