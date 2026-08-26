import { useCallback, useEffect, useState } from "react";
import { loadState, saveState, todayStr, type SaveState } from "./engine/storage";

export interface GameActions {
  addXp: (n: number) => void;
  addGems: (n: number) => void;
  loseHeart: () => void;
  resetHearts: () => void;
  completeDay: () => void;
  addDiary: (ref: string, text: string) => void;
  bumpMastery: (courseId: string, before: number, gain: number, setTo?: number) => number;
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
  const completeDay = useCallback(() => setState((s) => ({
    ...s, dayIndex: s.dayIndex + 1, streak: s.streak + 1, hearts: 5
  })), []);
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

  const setTheme = useCallback((t: SaveState["theme"]) => setState((s) => ({ ...s, theme: t })), []);
  const setOnboarded = useCallback((v: boolean) => setState((s) => ({ ...s, onboarded: v })), []);
  const resetDemo = useCallback(() => setState((s) => ({
    ...loadState(), theme: s.theme, onboarded: true,
    streak: 0, gems: 30, xp: 0, hearts: 5, dayIndex: 0, mastery: {}, diary: s.diary
  })), []);

  return {
    state,
    actions: { addXp, addGems, loseHeart, resetHearts, completeDay, addDiary, bumpMastery, setTheme, setOnboarded, resetDemo }
  };
}

export { todayStr };
