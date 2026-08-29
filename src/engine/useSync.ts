/**
 * Sincronização com a nuvem — opcional e não bloqueante.
 *
 * Ao entrar: baixa o save do servidor, mescla com o local (nada se perde) e
 * envia o resultado. Depois: envia com atraso (debounce) a cada mudança.
 * Se outro aparelho gravou no meio, o servidor responde 409 e nós mesclamos
 * e reenviamos uma vez.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { SaveState } from "./storage";
import { mergeSaves } from "./merge";
import { api, loadAccount, loadToken, storeSession, clearSession, type Account } from "./cloud";

export type SyncStatus = "off" | "syncing" | "ok" | "error";

const PUSH_DELAY = 2500;

export function useSync(state: SaveState, replaceState: (s: SaveState) => void) {
  const [account, setAccount] = useState<Account | null>(() => (loadToken() ? loadAccount() : null));
  const [status, setStatus] = useState<SyncStatus>(() => (loadToken() ? "ok" : "off"));
  const rev = useRef(0);
  const timer = useRef<number | null>(null);
  const ready = useRef(false);          // só empurra depois do primeiro puxão
  const latest = useRef(state);
  latest.current = state;

  /** Envia o estado atual, resolvendo conflito com uma mesclagem e um retry. */
  const push = useCallback(async () => {
    if (!loadToken()) return;
    setStatus("syncing");
    try {
      const res = await api.putSave(latest.current, rev.current);
      rev.current = res.rev;
      setStatus("ok");
    } catch (e: any) {
      if (e?.status === 409 && e.body?.data) {
        const merged = mergeSaves(latest.current, e.body.data as SaveState);
        rev.current = e.body.rev ?? 0;
        replaceState(merged);
        latest.current = merged;
        try {
          const res = await api.putSave(merged, rev.current);
          rev.current = res.rev;
          setStatus("ok");
          return;
        } catch { /* cai no erro abaixo */ }
      }
      if (e?.status === 401) { clearSession(); setAccount(null); setStatus("off"); return; }
      setStatus("error");
    }
  }, [replaceState]);

  /** Puxa o save do servidor e mescla com o que já existe no aparelho. */
  const pull = useCallback(async () => {
    if (!loadToken()) return;
    setStatus("syncing");
    try {
      const res = await api.getSave();
      rev.current = res.rev ?? 0;
      if (res.data) {
        const merged = mergeSaves(latest.current, res.data);
        replaceState(merged);
        latest.current = merged;
      }
      ready.current = true;
      await push();
    } catch (e: any) {
      if (e?.status === 401) { clearSession(); setAccount(null); setStatus("off"); return; }
      setStatus("error");
    }
  }, [push, replaceState]);

  // Ao abrir o app já logado, sincroniza uma vez.
  useEffect(() => { if (loadToken()) void pull(); /* eslint-disable-next-line */ }, []);

  // A cada mudança, agenda um envio.
  useEffect(() => {
    if (!ready.current || !loadToken()) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => { void push(); }, PUSH_DELAY);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [state, push]);

  /** Depois de entrar/cadastrar: guarda a sessão e concilia os dois saves. */
  const adopt = useCallback(async (token: string, user: Account, remote: SaveState | null, remoteRev: number) => {
    storeSession(token, user);
    setAccount(user);
    rev.current = remoteRev;
    const merged = remote ? mergeSaves(latest.current, remote) : latest.current;
    replaceState(merged);
    latest.current = merged;
    ready.current = true;
    await push();
  }, [push, replaceState]);

  const signOut = useCallback(() => {
    clearSession();
    setAccount(null);
    setStatus("off");
    ready.current = false;
    rev.current = 0;
  }, []);

  return { account, status, adopt, signOut, syncNow: pull };
}
