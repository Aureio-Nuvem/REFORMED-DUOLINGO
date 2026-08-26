import { useMemo, useRef, useState } from "react";
import type { Question } from "../content/schema";
import { getVerse } from "../content/bible";
import { shuffle } from "../engine/exercises";
import { snd } from "../engine/audio";
import { Icon } from "../ui/Icons";

interface Props {
  questions: Question[];
  hearts: number;
  header?: React.ReactNode;         // segmentos (devo) ou cronômetro
  onWrong: () => void;
  onQuit: () => void;
  onFinish: (correct: number, total: number) => void;
}

type Fb = { right: boolean; text: string } | null;

export function LessonView({ questions, hearts, header, onWrong, onQuit, onFinish }: Props) {
  const [i, setI] = useState(0);
  const q = questions[i];
  const [locked, setLocked] = useState(false);
  const [feedback, setFeedback] = useState<Fb>(null);
  const [correct, setCorrect] = useState(0);

  // estado por tipo
  const [sel, setSel] = useState<number | null>(null);
  const [built, setBuilt] = useState<number[]>([]); // índices na ordem escolhida (order)
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const leftSel = useRef<number | null>(null);
  const [badPair, setBadPair] = useState<[number, number] | null>(null);

  const orderBank = useMemo(
    () => (q.type === "order" ? shuffle(q.words.map((w, idx) => ({ w, idx }))) : []),
    [i]
  );
  const rightCol = useMemo(
    () => (q.type === "match" ? shuffle(q.pairs.map((p, k) => ({ t: p[1], k }))) : []),
    [i]
  );

  function reset() {
    setSel(null); setBuilt([]); setMatched(new Set()); leftSel.current = null;
    setBadPair(null); setLocked(false); setFeedback(null);
  }

  function showFb(right: boolean, extra: string) {
    if (!right) onWrong();
    if (right) setCorrect((c) => c + 1);
    setFeedback({ right, text: extra });
  }

  function checkMcq() {
    if (q.type !== "mcq" || sel === null || locked) return;
    setLocked(true);
    const right = sel === q.answer;
    right ? snd.correct() : snd.wrong();
    showFb(right, right ? q.exp : `Resposta certa: “${q.opts[q.answer]}”. ${q.exp}`);
  }
  function checkOrder() {
    if (q.type !== "order" || locked) return;
    setLocked(true);
    const got = built.map((bi) => q.words[bi]).join(" ");
    const right = got === q.words.join(" ");
    right ? snd.correct() : snd.wrong();
    showFb(right, right ? q.exp : `Ordem certa: “${q.words.join(" ")}”. ${q.exp}`);
  }
  function pickRight(k: number) {
    if (q.type !== "match" || locked || matched.has(k)) return;
    snd.tap();
    if (leftSel.current === null) return;
    const l = leftSel.current;
    if (l === k) {
      const nm = new Set(matched); nm.add(k); setMatched(nm); leftSel.current = null; snd.correct();
      if (nm.size === q.pairs.length) { setLocked(true); setTimeout(() => showFb(true, q.exp), 350); }
    } else {
      setBadPair([l, k]); snd.wrong();
      const lp = l; const kp = k;
      setTimeout(() => { setBadPair(null); leftSel.current = null; }, 550);
      void lp; void kp;
    }
  }

  function next() {
    if (i + 1 >= questions.length) { onFinish(correct, questions.length); return; }
    setI(i + 1); reset();
  }

  const canCheck =
    (q.type === "mcq" && sel !== null) ||
    (q.type === "order" && built.length === q.words.length);

  return (
    <section className="screen flow" style={{ position: "absolute", inset: 0 }}>
      <div className="flow-top">
        <button className="xbtn" onClick={onQuit} aria-label="Sair"><Icon name="i-x" /></button>
        {header}
        <div className="mini-heart"><Icon name="i-heart" /><span>{hearts}</span></div>
      </div>

      <div className="flow-body">
        <div className="q-kicker">{q.kicker}</div>

        {q.type === "mcq" && <McqBody q={q} sel={sel} locked={locked} onSel={(x) => { setSel(x); snd.tap(); }} />}
        {q.type === "order" && (
          <OrderBody q={q} bank={orderBank} built={built} locked={locked}
            onPlace={(bi) => { setBuilt([...built, bi]); snd.tap(); }}
            onRemoveAt={(pos) => { setBuilt(built.filter((_, p) => p !== pos)); snd.tap(); }} />
        )}
        {q.type === "match" && (
          <MatchBody q={q} rightCol={rightCol} matched={matched} badPair={badPair}
            onLeft={(k) => { if (!matched.has(k)) { leftSel.current = k; snd.tap(); setBadPair(null); } }}
            onRight={pickRight} leftSelRef={leftSel} />
        )}
      </div>

      {q.type !== "match" && !feedback && (
        <div className="flow-foot">
          <button className="cta" disabled={!canCheck}
            onClick={q.type === "mcq" ? checkMcq : checkOrder}>Verificar</button>
        </div>
      )}

      {feedback && (
        <div className={"feedback " + (feedback.right ? "good" : "bad")}>
          <div className="head">
            <span className="fb-ic"><Icon name={feedback.right ? "i-check" : "i-x"} /></span>
            {feedback.right ? "Muito bem!" : "Quase lá"}
          </div>
          <div className="exp">{feedback.text}</div>
          <button className={"cta" + (feedback.right ? "" : " wrong")} onClick={next}>Continuar</button>
        </div>
      )}
    </section>
  );
}

function McqBody({ q, sel, locked, onSel }: { q: Extract<Question, { type: "mcq" }>; sel: number | null; locked: boolean; onSel: (i: number) => void; }) {
  const verse = q.verseRef ? getVerse(q.verseRef) : null;
  const blanked = verse ? verse.text.replace(q.opts[q.answer], "______") : null;
  return (
    <>
      <div className="q-text">{q.q}</div>
      {verse && blanked && (
        <div className="verse-card">“{blanked}”<span className="ref">{verse.ref} · BLIVRE</span></div>
      )}
      <div className="opts">
        {q.opts.map((o, idx) => {
          let cls = "opt";
          if (locked) {
            if (idx === q.answer) cls += " correct";
            else if (idx === sel) cls += " incorrect";
          } else if (idx === sel) cls += " sel";
          return <button key={idx} className={cls} disabled={locked} onClick={() => onSel(idx)}>{o}</button>;
        })}
      </div>
    </>
  );
}

function OrderBody({ q, bank, built, locked, onPlace, onRemoveAt }: {
  q: Extract<Question, { type: "order" }>; bank: { w: string; idx: number }[]; built: number[]; locked: boolean;
  onPlace: (bi: number) => void; onRemoveAt: (pos: number) => void;
}) {
  const usedBankPos = new Set(built);
  return (
    <>
      <div className="q-text">{q.q}</div>
      {q.ref && <div className="q-kicker" style={{ color: "var(--mustard-deep)", marginTop: 6 }}>{q.ref} · BLIVRE</div>}
      <div className="build">
        {built.map((bi, pos) => (
          <button key={pos} className="chip placed" disabled={locked} onClick={() => onRemoveAt(pos)}>{q.words[bi]}</button>
        ))}
      </div>
      <div className="bank">
        {bank.map((b) => (
          <button key={b.idx} className="chip" style={{ visibility: usedBankPos.has(b.idx) ? "hidden" : "visible" }}
            disabled={locked} onClick={() => onPlace(b.idx)}>{b.w}</button>
        ))}
      </div>
    </>
  );
}

function MatchBody({ q, rightCol, matched, badPair, onLeft, onRight, leftSelRef }: {
  q: Extract<Question, { type: "match" }>; rightCol: { t: string; k: number }[]; matched: Set<number>;
  badPair: [number, number] | null; onLeft: (k: number) => void; onRight: (k: number) => void;
  leftSelRef: React.MutableRefObject<number | null>;
}) {
  const [, force] = useState(0);
  return (
    <>
      <div className="q-text">{q.q}</div>
      <div className="match">
        <div className="mcol">
          {q.pairs.map((p, k) => {
            let cls = "mbtn";
            if (matched.has(k)) cls += " matched";
            else if (leftSelRef.current === k) cls += " sel";
            if (badPair && badPair[0] === k) cls += " bad";
            return <button key={k} className={cls} onClick={() => { onLeft(k); force((n) => n + 1); }}>{p[0]}</button>;
          })}
        </div>
        <div className="mcol">
          {rightCol.map((r) => {
            let cls = "mbtn";
            if (matched.has(r.k)) cls += " matched";
            if (badPair && badPair[1] === r.k) cls += " bad";
            return <button key={r.k} className={cls} onClick={() => { onRight(r.k); force((n) => n + 1); }}>{r.t}</button>;
          })}
        </div>
      </div>
    </>
  );
}
