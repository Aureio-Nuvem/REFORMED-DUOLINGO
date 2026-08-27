/** Persistência local (localStorage) com try/catch — no futuro, sincroniza na nuvem. */

export interface DiaryEntry { d: string; ref: string; t: string; }

export interface SaveState {
  streak: number;
  gems: number;
  xp: number;
  hearts: number;
  dayIndex: number;            // próximo dia do devocional (índice global no plano)
  mastery: Record<string, number>; // courseId -> % de maestria
  studyPos: Record<string, number>; // courseId -> próximo cartão de estudo (Aprender)
  diary: DiaryEntry[];
  onboarded: boolean;
  theme: "system" | "light" | "dark";
}

const KEY = "lumen_save_v1";

const DEFAULT: SaveState = {
  streak: 0, gems: 30, xp: 0, hearts: 5,
  dayIndex: 0, mastery: {}, studyPos: {}, diary: [], onboarded: false, theme: "system"
};

export function loadState(): SaveState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT };
    return { ...DEFAULT, ...(JSON.parse(raw) as Partial<SaveState>) };
  } catch {
    return { ...DEFAULT };
  }
}

export function saveState(s: SaveState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* modo privado / storage bloqueado — segue em memória */
  }
}

export function todayStr(): string {
  try {
    return new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return "hoje";
  }
}
