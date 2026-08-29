import { useState } from "react";
import { Icon } from "../ui/Icons";
import { api, type Account } from "../engine/cloud";
import type { SaveState } from "../engine/storage";
import { snd } from "../engine/audio";

interface Props {
  onDone: (token: string, user: Account, save: SaveState | null, rev: number) => void;
  onBack: () => void;
}

type Mode = "login" | "register";

export function AuthScreen({ onDone, onBack }: Props) {
  const [mode, setMode] = useState<Mode>("login");
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = mode === "login"
    ? username.trim().length >= 3 && password.length >= 8
    : code.trim().length > 0 && username.trim().length >= 3 && name.trim().length >= 2 && password.length >= 8;

  async function submit() {
    if (!canSubmit || busy) return;
    setBusy(true); setError(null);
    try {
      const r = mode === "login"
        ? await api.login(username, password)
        : await api.register(code, username, name, password);
      snd.win();
      onDone(r.token, r.user, r.save?.data ?? null, r.save?.rev ?? 0);
    } catch (e: any) {
      setError(e?.message ?? "Não foi possível conectar.");
      snd.wrong();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onBack} aria-label="Voltar">
          <Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} />
        </button>
        <div className="scr-title" style={{ margin: 0 }}>{mode === "login" ? "Entrar" : "Criar conta"}</div>
      </div>
      <div className="scr-sub">
        {mode === "login"
          ? "Entre para guardar o seu progresso e continuar em qualquer aparelho."
          : "Use o código de convite que você recebeu para criar a sua conta."}
      </div>

      <div className="auth-form">
        {mode === "register" && (
          <label className="fld">
            <span>Código de convite</span>
            <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="LUMEN-XXXX" autoCapitalize="characters" autoComplete="off" />
          </label>
        )}
        {mode === "register" && (
          <label className="fld">
            <span>Como quer ser chamado</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" autoComplete="name" />
          </label>
        )}
        <label className="fld">
          <span>Usuário</span>
          <input value={username} onChange={(e) => setUsername(e.target.value.toLowerCase())}
            placeholder="seu.usuario" autoCapitalize="none" autoComplete="username" />
        </label>
        <label className="fld">
          <span>Senha</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="ao menos 8 caracteres"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            onKeyDown={(e) => { if (e.key === "Enter") void submit(); }} />
        </label>

        {error && <div className="auth-err"><Icon name="i-x" />{error}</div>}

        <button className="cta terra" disabled={!canSubmit || busy} onClick={() => void submit()}>
          {busy ? "Um instante…" : mode === "login" ? "Entrar" : "Criar minha conta"}
        </button>
        <button className="ghost-btn" onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(null); snd.tap(); }}>
          {mode === "login" ? "Tenho um código de convite" : "Já tenho conta"}
        </button>
        <div className="auth-fine">
          O seu progresso já está salvo neste aparelho. Ao entrar, ele é somado ao da sua conta — nada se perde.
        </div>
      </div>
    </section>
  );
}
