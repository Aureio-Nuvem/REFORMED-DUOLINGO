import { useEffect, useMemo, useRef, useState } from "react";
import type { Course, Question } from "../content/schema";
import { buildFlashcards, shuffle } from "../engine/exercises";
import { snd } from "../engine/audio";
import { burst } from "../engine/confetti";
import { Icon, type IconName } from "../ui/Icons";
import { LessonView } from "./LessonView";
import { Flashcards } from "./Flashcards";
import { TeachRead } from "./TeachRead";
import type { GameActions } from "../state";

type Mode = "aprender" | "revisar" | "relampago" | "maestria";
type Phase =
  | { kind: "menu" }
  | { kind: "teach"; start: number }
  | { kind: "flash" }
  | { kind: "quiz"; mode: Mode; questions: Question[] }
  | { kind: "result"; mode: Mode; correct: number; total: number };

const BLOCK = 5; // cartões de estudo por bloco

interface Props {
  course: Course;
  mastery: number;
  hearts: number;
  gems: number;
  studyPos: number;                 // próximo cartão de estudo salvo
  onStudyPos: (index: number) => void;
  masteryKey?: string;              // chave de progresso (coleção ou bloco)
  actions: GameActions;
  onExit: () => void;
}

function Elapsed() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="timer-chip"><Icon name="i-clock" />
      <span>{Math.floor(s / 60)}:{("0" + (s % 60)).slice(-2)}</span>
    </div>
  );
}

export function CourseFlow({ course, mastery, hearts, gems, studyPos, onStudyPos, masteryKey, actions, onExit }: Props) {
  const [phase, setPhase] = useState<Phase>({ kind: "menu" });
  const cards = useMemo(() => buildFlashcards(course.questions), [course]);
  const teach = course.teach ?? [];

  // Sorteia um subconjunto para variar a cada sessão.
  function pick(mode: Mode): Question[] {
    const limit = mode === "maestria" ? Math.min(10, course.questions.length) : Math.min(5, course.questions.length);
    return shuffle(course.questions).slice(0, limit);
  }

  function startMode(mode: Mode) {
    snd.nav();
    if (mode === "revisar") { setPhase({ kind: "flash" }); return; }
    if (mode === "aprender" && teach.length) {
      const start = studyPos >= teach.length ? 0 : studyPos;
      setPhase({ kind: "teach", start });
      return;
    }
    setPhase({ kind: "quiz", mode, questions: pick(mode) });
  }

  if (phase.kind === "teach") {
    const block = teach.slice(phase.start, phase.start + BLOCK);
    const from = phase.start + 1;
    const to = Math.min(teach.length, phase.start + block.length);
    const label = teach.length > BLOCK ? `Bloco ${Math.floor(phase.start / BLOCK) + 1} · ${from}–${to} de ${teach.length}` : undefined;
    return (
      <TeachRead cards={block} blockLabel={label}
        onStop={(readCount) => { onStudyPos(phase.start + readCount); setPhase({ kind: "menu" }); }}
        onDone={() => {
          const np = phase.start + block.length;
          onStudyPos(np >= teach.length ? teach.length : np);
          setPhase({ kind: "quiz", mode: "aprender", questions: pick("aprender") });
        }} />
    );
  }

  if (phase.kind === "flash") {
    return (
      <Flashcards cards={cards} onQuit={() => setPhase({ kind: "menu" })}
        onFinish={(known, total) => setPhase({ kind: "result", mode: "revisar", correct: known, total })} />
    );
  }

  if (phase.kind === "quiz") {
    return (
      <LessonView
        questions={phase.questions}
        hearts={hearts}
        gems={gems}
        header={phase.mode === "relampago" ? <><div style={{ flex: 1 }} /><Elapsed /></> : <div style={{ flex: 1 }} />}
        onWrong={actions.loseHeart}
        onRefill={actions.refillHearts}
        onQuit={() => setPhase({ kind: "menu" })}
        onFinish={(correct, total) => {
          actions.recordResult(correct, total);
          setPhase({ kind: "result", mode: phase.mode, correct, total });
        }}
      />
    );
  }

  if (phase.kind === "result") {
    return (
      <StudyResult course={course} masteryKey={masteryKey ?? course.id} phase={phase} before={mastery} actions={actions}
        onDone={() => setPhase({ kind: "menu" })} />
    );
  }

  const modes: { mode: Mode; icon: IconName; bg: string; fg: string; t: string; d: string; tag?: string }[] = [
    { mode: "aprender", icon: "i-book", bg: "var(--mustard-soft)", fg: "var(--mustard-deep)", t: "Aprender", d: "Estude o conteúdo e depois pratique",
      tag: teach.length ? (studyPos >= teach.length ? "✓ estudado" : `${studyPos}/${teach.length}`) : undefined },
    { mode: "revisar", icon: "i-reset", bg: "var(--sage-soft)", fg: "var(--forest)", t: "Revisar", d: "Flashcards para fixar na memória", tag: `${cards.length} cartões` },
    { mode: "relampago", icon: "i-flame", bg: "var(--terra-soft)", fg: "var(--terra)", t: "Desafio relâmpago", d: "Rápido, valendo XP em dobro", tag: "2× XP" },
    { mode: "maestria", icon: "i-trophy", bg: "var(--forest-soft)", fg: "var(--forest)", t: "Maestria", d: "Prove o seu domínio da coleção", tag: "≥80%" }
  ];

  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onExit} aria-label="Voltar">
          <Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} />
        </button>
        <div className="scr-title" style={{ margin: 0 }}>{course.title}</div>
      </div>
      <div className="col-hero">
        <span className="cic" style={{ background: course.color }}><Icon name={course.icon as IconName} /></span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="s">{course.questions.length} itens · maestria {mastery}%</div>
          <div className="col-mbar"><i style={{ width: mastery + "%" }} /></div>
        </div>
      </div>
      {modes.map((m) => (
        <button key={m.mode} className="mode-card" onClick={() => startMode(m.mode)}>
          <span className="mode-ic" style={{ background: m.bg, color: m.fg }}><Icon name={m.icon} /></span>
          <div><div className="mode-t">{m.t}</div><div className="mode-d">{m.d}</div></div>
          {m.tag && <span className="mode-tag">{m.tag}</span>}
        </button>
      ))}
    </section>
  );
}

function StudyResult({ course, masteryKey, phase, before, actions, onDone }: {
  course: Course; masteryKey: string; phase: { mode: Mode; correct: number; total: number }; before: number; actions: GameActions; onDone: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const acc = Math.round((phase.correct / phase.total) * 100);
  let earned = 10 + phase.correct * 5;
  if (phase.mode === "relampago") earned *= 2;
  const mastered = phase.mode === "maestria" && acc >= 80;
  const gain = Math.round((phase.correct / phase.total) * 18);

  const afterRef = useRef(before);
  useEffect(() => {
    afterRef.current = actions.bumpMastery(masteryKey, before, gain, mastered ? 100 : undefined);
    actions.addXp(earned);
    actions.addGems(5);
    snd.win();
    if (canvasRef.current) burst(canvasRef.current);
    const el = document.getElementById("sd-mbar");
    if (el) { el.style.width = before + "%"; requestAnimationFrame(() => { setTimeout(() => { el.style.width = afterRef.current + "%"; }, 260); }); }
  }, []);

  const after = mastered ? 100 : Math.min(100, before + gain);
  const kindLabel: Record<Mode, string> = { aprender: "", revisar: " · REVISÃO", relampago: " · RELÂMPAGO", maestria: " · MAESTRIA" };

  return (
    <section className="screen" style={{ position: "relative" }}>
      <canvas ref={canvasRef} className="confetti" />
      <div className="sd-wrap">
        <div className="sd-badge"><Icon name={mastered ? "i-trophy" : "i-temple"} /></div>
        <div className="sd-eyebrow">{course.title.toUpperCase()}{kindLabel[phase.mode]}</div>
        <div className="sd-title">{mastered ? "Coleção dominada!" : "Estudo concluído!"}</div>
        <div className="sd-rewards">
          <div className="r"><Icon name="i-xp" /><span className="v">+{earned}</span><span className="k">XP</span></div>
          <div className="r"><Icon name="i-target" /><span className="v">{acc}%</span><span className="k">PRECISÃO</span></div>
          <div className="r"><Icon name="i-gem" /><span className="v">+5</span><span className="k">GEMAS</span></div>
        </div>
        <div className="sd-mastery">
          <div className="sd-mrow"><span>Maestria da coleção</span><span>{after}%</span></div>
          <div className="sd-mbar"><i id="sd-mbar" style={{ width: before + "%" }} /></div>
        </div>
        <button className="cta terra" onClick={onDone}>Continuar na Academia</button>
      </div>
    </section>
  );
}
