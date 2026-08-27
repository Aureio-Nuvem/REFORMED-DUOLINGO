/** Persistência local (localStorage) com try/catch — no futuro, sincroniza na nuvem. */

export interface DiaryEntry { d: string; ref: string; t: string; }

export interface Reminder { enabled: boolean; time: string; } // time: "HH:MM"

export interface SaveState {
  streak: number;
  gems: number;
  xp: number;
  hearts: number;
  dayIndex: number;            // total de devocionais concluídos (para estatísticas)
  doneDays: string[];          // ids dos dias já concluídos (progresso por dia)
  activeUnit: string;          // unidade escolhida ("" = automática)
  mastery: Record<string, number>; // courseId -> % de maestria
  studyPos: Record<string, number>; // courseId -> próximo cartão de estudo (Aprender)
  diary: DiaryEntry[];
  reminder: Reminder;          // lembrete diário do devocional
  onboarded: boolean;
  theme: "system" | "light" | "dark";
}

const KEY = "lumen_save_v1";

const DEFAULT: SaveState = {
  streak: 0, gems: 30, xp: 0, hearts: 5,
  dayIndex: 0, doneDays: [], activeUnit: "", mastery: {}, studyPos: {}, diary: [],
  reminder: { enabled: false, time: "07:00" }, onboarded: false, theme: "system"
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
