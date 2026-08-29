import { useCallback, useEffect, useState } from "react";
import { loadState, saveState, todayStr, type SaveState, type Reminder, type Seal } from "./engine/storage";

export const HEART_REFILL_COST = 20; // gemas para recarregar as vidas

export interface GameActions {
  addXp: (n: number) => void;
  addGems: (n: number) => void;
  loseHeart: () => void;
  resetHearts: () => void;
  refillHearts: () => void;   // gasta gemas para reabastecer as vidas
  completeDay: (dayId: string, seal: Omit<Seal, "iso" | "hour">) => void;
  recordResult: (correct: number, total: number) => void;
  setLocalName: (name: string) => void;
  addDiary: (ref: string, text: string) => void;
  bumpMastery: (courseId: string, before: number, gain: number, setTo?: number) => number;
  setStudyPos: (courseId: string, index: number) => void;
  setActiveUnit: (unitId: string) => void;
  setReminder: (r: Reminder) => void;
  migrateDone: (ids: string[]) => void;  // backfill único de progresso legado
  replaceState: (s: SaveState) => void;  // usado pela sincronização na nuvem
  setTheme: (t: SaveState["theme"]) => void;
  setOnboarded: (v: boolean) => void;
  resetDemo: () => void;
}

export function useLumen(): { state: SaveState; actions: GameActions } {
  const [state, setState] = useState<SaveState>(() => loadState());

  useEffect(() => { saveState(state); }, [state]);

  // aplica o tema ao <html>
  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  const addXp = useCallback((n: number) => setState((s) => ({ ...s, xp: s.xp + n })), []);
  const addGems = useCallback((n: number) => setState((s) => ({ ...s, gems: s.gems + n })), []);
  const loseHeart = useCallback(() => setState((s) => ({ ...s, hearts: Math.max(0, s.hearts - 1) })), []);
  const resetHearts = useCallback(() => setState((s) => ({ ...s, hearts: 5 })), []);
  const refillHearts = useCallback(() => setState((s) =>
    s.gems >= HEART_REFILL_COST ? { ...s, gems: s.gems - HEART_REFILL_COST, hearts: 5 } : s), []);
  const completeDay = useCallback((dayId: string, seal: Omit<Seal, "iso" | "hour">) => setState((s) => {
    if (s.doneDays.includes(dayId)) return { ...s, hearts: 5 };
    const now = new Date();
    const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    return {
      ...s,
      doneDays: [...s.doneDays, dayId],
      seals: [{ ...seal, iso, hour: now.getHours() }, ...s.seals],
      dayIndex: s.dayIndex + 1, streak: s.streak + 1, hearts: 5
    };
  }), []);

  /** Uma lição sem nenhum erro conta para a medalha "Perfeição". */
  const recordResult = useCallback((correct: number, total: number) => {
    if (total > 0 && correct === total) setState((s) => ({ ...s, perfect: s.perfect + 1 }));
  }, []);

  const setLocalName = useCallback((name: string) =>
    setState((s) => ({ ...s, localName: name.slice(0, 24) })), []);
  const addDiary = useCallback((ref: string, text: string) => {
    const t = text.trim();
    if (!t) return;
    setState((s) => ({ ...s, diary: [{ d: todayStr(), ref, t }, ...s.diary] }));
  }, []);

  const bumpMastery = useCallback((courseId: string, before: number, gain: number, setTo?: number) => {
    const value = setTo ?? Math.min(100, before + gain);
    setState((s) => ({ ...s, mastery: { ...s.mastery, [courseId]: value } }));
    return value;
  }, []);

  const setStudyPos = useCallback((courseId: string, index: number) =>
    setState((s) => ({ ...s, studyPos: { ...s.studyPos, [courseId]: index } })), []);
  const setActiveUnit = useCallback((unitId: string) => setState((s) => ({ ...s, activeUnit: unitId })), []);
  const setReminder = useCallback((r: Reminder) => setState((s) => ({ ...s, reminder: r })), []);
  const replaceState = useCallback((next: SaveState) => setState(next), []);
  const migrateDone = useCallback((ids: string[]) =>
    setState((s) => (s.doneDays.length ? s : { ...s, doneDays: ids })), []);
  const setTheme = useCallback((t: SaveState["theme"]) => setState((s) => ({ ...s, theme: t })), []);
  const setOnboarded = useCallback((v: boolean) => setState((s) => ({ ...s, onboarded: v })), []);
  const resetDemo = useCallback(() => setState((s) => ({
    ...loadState(), theme: s.theme, onboarded: true, reminder: s.reminder,
    streak: 0, gems: 30, xp: 0, hearts: 5, dayIndex: 0, doneDays: [], activeUnit: "",
    seals: [], perfect: 0, localName: s.localName,
    mastery: {}, studyPos: {}, diary: s.diary
  })), []);

  return {
    state,
    actions: { addXp, addGems, loseHeart, resetHearts, refillHearts, completeDay, recordResult, setLocalName, addDiary, bumpMastery, setStudyPos, setActiveUnit, setReminder, migrateDone, replaceState, setTheme, setOnboarded, resetDemo }
  };
}

export { todayStr };
