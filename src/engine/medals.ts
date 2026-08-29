/**
 * Medalhas — todas calculadas do progresso real. Nenhuma vem preenchida:
 * quem abre o app pela primeira vez vê todas por conquistar.
 *
 * Cada medalha declara o seu alvo e como ler o progresso atual no save; o
 * "done" e a barra saem daí. Para criar uma medalha nova, basta acrescentar
 * um item nesta lista.
 */
import type { SaveState } from "./storage";
import { COURSES } from "../content/courses";

export interface Medal {
  id: string;
  icon: string;
  color: string;
  title: string;
  hint: string;      // como conquistar
  have: number;      // progresso atual
  goal: number;      // alvo
  done: boolean;
  pct: number;       // 0–100
}

interface Spec {
  id: string; icon: string; color: string; title: string; hint: string;
  goal: number;
  have: (s: SaveState) => number;
}

const SPECS: Spec[] = [
  { id: "primeira-luz", icon: "i-lamplight", color: "var(--mustard)",
    title: "Primeira Luz", hint: "Conclua o seu primeiro devocional",
    goal: 1, have: (s) => s.seals.length },

  { id: "chama-viva", icon: "i-flame", color: "var(--terra)",
    title: "Chama Viva", hint: "Ofensiva de 7 dias",
    goal: 7, have: (s) => s.streak },

  { id: "firme", icon: "i-anchor", color: "var(--slate)",
    title: "Firme na Fé", hint: "Ofensiva de 14 dias",
    goal: 14, have: (s) => s.streak },

  { id: "fruto", icon: "i-dove", color: "var(--forest)",
    title: "Fruto do Espírito", hint: "Ofensiva de 30 dias",
    goal: 30, have: (s) => s.streak },

  { id: "leitor", icon: "i-book", color: "var(--forest)",
    title: "Leitor Fiel", hint: "Conclua 10 devocionais",
    goal: 10, have: (s) => s.seals.length },

  { id: "peregrino", icon: "i-temple", color: "var(--terra-deep)",
    title: "Peregrino", hint: "Conclua 25 devocionais",
    goal: 25, have: (s) => s.seals.length },

  { id: "madrugador", icon: "i-sunrise", color: "var(--mustard-deep)",
    title: "Madrugador", hint: "Conclua um devocional antes das 8h",
    goal: 1, have: (s) => (s.seals.some((x) => x.hour < 8) ? 1 : 0) },

  { id: "escriba", icon: "i-journal", color: "var(--sage)",
    title: "Escriba", hint: "Guarde 10 reflexões no diário",
    goal: 10, have: (s) => s.diary.length },

  { id: "perfeicao", icon: "i-target", color: "var(--mustard)",
    title: "Perfeição", hint: "Termine uma lição sem nenhum erro",
    goal: 1, have: (s) => s.perfect },

  { id: "tesouro", icon: "i-gem", color: "var(--sage)",
    title: "Tesouro", hint: "Junte 100 gemas",
    goal: 100, have: (s) => s.gems },

  { id: "catecumeno", icon: "i-cross", color: "var(--terra)",
    title: "Catecúmeno", hint: "Chegue a 100% nos Cinco Solas",
    goal: 100, have: (s) => s.mastery.solas ?? 0 },

  { id: "teologo", icon: "i-trophy", color: "var(--slate)",
    title: "Teólogo", hint: "Domine todas as coleções da Academia",
    goal: 100,
    have: (s) => {
      const open = COURSES.filter((c) => !c.locked);
      if (!open.length) return 0;
      const sum = open.reduce((acc, c) => acc + (s.mastery[c.id] ?? 0), 0);
      return Math.round(sum / open.length);
    } }
];

export function computeMedals(state: SaveState): Medal[] {
  return SPECS.map((m) => {
    const have = Math.max(0, m.have(state));
    return {
      id: m.id, icon: m.icon, color: m.color, title: m.title, hint: m.hint,
      have, goal: m.goal,
      done: have >= m.goal,
      pct: Math.min(100, Math.round((have / m.goal) * 100))
    };
  });
}

/**
 * Mapa de constância: uma célula por dia nas últimas `weeks` semanas.
 * O nível vem dos selos daquele dia (0 = nada, 2 = um devocional, 3 = mais).
 */
export function heatmap(seals: SaveState["seals"], weeks = 5): number[] {
  const byDay = new Map<string, number>();
  for (const s of seals) byDay.set(s.iso, (byDay.get(s.iso) ?? 0) + 1);

  const days = weeks * 7;
  const out: number[] = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const c = byDay.get(iso) ?? 0;
    out.push(c === 0 ? 0 : c === 1 ? 2 : 3);
  }
  return out;
}
