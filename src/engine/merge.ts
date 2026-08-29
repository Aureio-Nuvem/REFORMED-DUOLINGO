/**
 * Mesclagem de progresso entre aparelhos.
 *
 * Regra geral: progresso não retrocede e nada do usuário se perde. Onde há
 * conflito real (preferências), vence o lado local — é o aparelho em que a
 * pessoa está mexendo agora.
 */
import type { SaveState, DiaryEntry } from "./storage";

const maxN = (a: number, b: number) => Math.max(a ?? 0, b ?? 0);

function mergeNumMap(a: Record<string, number>, b: Record<string, number>): Record<string, number> {
  const out: Record<string, number> = { ...a };
  for (const k of Object.keys(b ?? {})) out[k] = maxN(out[k], b[k]);
  return out;
}

/** Duas entradas iguais de diário viriam do mesmo aparelho sincronizado duas vezes. */
function mergeDiary(a: DiaryEntry[], b: DiaryEntry[]): DiaryEntry[] {
  const seen = new Set<string>();
  const out: DiaryEntry[] = [];
  for (const e of [...(a ?? []), ...(b ?? [])]) {
    const key = `${e.d}|${e.ref}|${e.t}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(e);
  }
  return out;
}

export function mergeSaves(local: SaveState, remote: SaveState): SaveState {
  return {
    ...local,
    // Progresso: sempre o maior / a união.
    xp: maxN(local.xp, remote.xp),
    gems: maxN(local.gems, remote.gems),
    streak: maxN(local.streak, remote.streak),
    dayIndex: maxN(local.dayIndex, remote.dayIndex),
    doneDays: [...new Set([...(local.doneDays ?? []), ...(remote.doneDays ?? [])])],
    mastery: mergeNumMap(local.mastery ?? {}, remote.mastery ?? {}),
    studyPos: mergeNumMap(local.studyPos ?? {}, remote.studyPos ?? {}),
    diary: mergeDiary(local.diary, remote.diary),
    // Vidas: o menor, para não virar uma forma de recuperar vidas sincronizando.
    hearts: Math.min(local.hearts ?? 5, remote.hearts ?? 5),
    // Preferências: vence o aparelho atual.
    onboarded: local.onboarded || remote.onboarded
  };
}
