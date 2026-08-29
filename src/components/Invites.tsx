import { useEffect, useState } from "react";
import { Icon } from "../ui/Icons";
import { api } from "../engine/cloud";
import { snd } from "../engine/audio";

type Row = { code: string; used: number; used_name: string | null };

/** Tela da dona do app: gerar e acompanhar os convites, sem terminal. */
export function Invites({ onBack }: { onBack: () => void }) {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const load = () => api.listInvites().then((r) => setRows(r.invites)).catch((e) => setError(e.message));
  useEffect(() => { void load(); }, []);

  async function create(n: number) {
    setBusy(true); setError(null);
    try { await api.createInvites(n); await load(); snd.correct(); }
    catch (e: any) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      snd.tap();
      setTimeout(() => setCopied(null), 1600);
    } catch { /* alguns navegadores bloqueiam — o código está à vista */ }
  }

  const free = rows?.filter((r) => !r.used).length ?? 0;

  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onBack} aria-label="Voltar">
          <Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} />
        </button>
        <div className="scr-title" style={{ margin: 0 }}>Convites</div>
      </div>
      <div className="scr-sub">
        Gere um código e envie para quem você quer no Lúmen. Cada código vale uma conta.
      </div>

      {error && <div className="auth-err"><Icon name="i-x" />{error}</div>}

      <button className="cta terra" disabled={busy} onClick={() => void create(1)}>
        {busy ? "Gerando…" : "Gerar um convite"}
      </button>
      <button className="ghost-btn" disabled={busy} onClick={() => void create(5)}>Gerar 5 de uma vez</button>

      {rows === null ? (
        <div className="inv-empty">Carregando…</div>
      ) : rows.length === 0 ? (
        <div className="inv-empty">
          <Icon name="i-journal" />
          <div className="t">Nenhum convite ainda</div>
          <div>Gere o primeiro e mande para alguém começar a caminhada.</div>
        </div>
      ) : (
        <>
          <div className="sec-h">{free} disponível{free === 1 ? "" : "is"} · {rows.length} no total</div>
          {rows.map((r) => (
            <div className={"inv-row" + (r.used ? " used" : "")} key={r.code}>
              <span className="inv-code">{r.code}</span>
              {r.used ? (
                <span className="inv-tag"><Icon name="i-check" />{r.used_name ?? "usado"}</span>
              ) : (
                <button className="inv-copy" onClick={() => void copy(r.code)}>
                  {copied === r.code ? <><Icon name="i-check" />Copiado</> : "Copiar"}
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </section>
  );
}
