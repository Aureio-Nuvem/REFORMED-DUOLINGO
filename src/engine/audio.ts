/** Efeitos sonoros via WebAudio (leves, opcionais). */
let actx: AudioContext | null = null;
let muted = false;

export function setMuted(v: boolean): void { muted = v; }
export function isMuted(): boolean { return muted; }

function beep(freq: number, dur: number, type: OscillatorType, when = 0): void {
  if (muted) return;
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    actx = actx || new Ctx();
    const t = when + actx.currentTime;
    const o = actx.createOscillator();
    const g = actx.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g); g.connect(actx.destination);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.02);
  } catch {
    /* áudio indisponível */
  }
}

export const snd = {
  tap: () => beep(480, 0.04, "sine"),
  nav: () => beep(520, 0.05, "sine"),
  correct: () => { beep(587, 0.12, "triangle"); beep(880, 0.16, "triangle", 0.1); },
  wrong: () => beep(170, 0.22, "sawtooth"),
  win: () => [523, 659, 784, 988].forEach((f, i) => beep(f, 0.18, "triangle", i * 0.11)),
  chime: () => { beep(392, 0.5, "sine"); beep(588, 0.6, "sine", 0.04); }
};
