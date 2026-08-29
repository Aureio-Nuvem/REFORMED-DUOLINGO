import { useEffect, useState } from "react";
import { IconSprite, Icon, type IconName } from "./ui/Icons";
import { useLumen } from "./state";
import { setMuted, isMuted, snd } from "./engine/audio";
import { UNITS } from "./content/devotionals";
import { COURSES } from "./content/courses";
import type { DevotionalDay, Unit } from "./content/schema";
import type { SaveState, Reminder } from "./engine/storage";
import { applyReminder, reminderSupported, reminderPermission, requestReminderPermission } from "./engine/reminder";
import { useSync, type SyncStatus } from "./engine/useSync";
import { AuthScreen } from "./components/AuthScreen";
import { Devotional } from "./components/Devotional";
import { CourseFlow } from "./components/CourseFlow";

/** Unidade ativa: a escolhida, senão a primeira com um dia por concluir. */
function resolveActiveUnit(state: SaveState): Unit {
  const done = new Set(state.doneDays);
  if (state.activeUnit) {
    const u = UNITS.find((x) => x.id === state.activeUnit);
    if (u) return u;
  }
  return UNITS.find((u) => u.days.some((d) => !done.has(d.id))) ?? UNITS[UNITS.length - 1];
}

type Screen = "home" | "academy" | "shop" | "profile" | "course" | "medals" | "diary" | "devo" | "units" | "auth" | "onboard";
const CHROME: Screen[] = ["home", "academy", "shop", "profile"];

const OFFSETS = [0, -1, -2, -1, 0, 1, 2, 1];
function offsetClass(i: number): string {
  const v = OFFSETS[i % OFFSETS.length];
  if (v === 0) return "";
  return v < 0 ? `node-off--${-v}` : `node-off-${v}`;
}

export function App() {
  const { state, actions } = useLumen();
  const [screen, setScreen] = useState<Screen>("home");
  const [courseId, setCourseId] = useState<string | null>(null);
  const [playDay, setPlayDay] = useState<DevotionalDay | null>(null);
  const [muted, setMutedState] = useState(isMuted());
  const sync = useSync(state, actions.replaceState);

  // (Re)agenda o lembrete diário sempre que a configuração mudar.
  useEffect(() => { applyReminder(state.reminder); }, [state.reminder]);

  // Backfill único: progresso legado (dayIndex) → doneDays por dia.
  useEffect(() => {
    if (state.doneDays.length === 0 && state.dayIndex > 0) {
      const flat = UNITS.flatMap((u) => u.days.map((d) => d.id));
      actions.migrateDone(flat.slice(0, state.dayIndex));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showChrome = CHROME.includes(screen) && state.onboarded;

  function go(s: Screen) { setScreen(s); snd.nav(); }

  if (!state.onboarded) {
    return (
      <>
        <IconSprite />
        <div className="app"><Onboard onDone={() => { actions.setOnboarded(true); setScreen("home"); }} /></div>
      </>
    );
  }

  const done = new Set(state.doneDays);
  const activeUnit = resolveActiveUnit(state);
  const currentDay = activeUnit.days.find((d) => !done.has(d.id)) ?? null;

  function startCurrent() {
    if (!currentDay) return;
    setPlayDay(currentDay);
    setScreen("devo");
  }

  return (
    <>
      <IconSprite />
      <div className="app">
        {showChrome && <Hud state={state} />}
        <div className="screens">
          {screen === "home" && (
            <Home unit={activeUnit} done={done} today={currentDay}
              onStart={startCurrent} onOpenUnits={() => go("units")} />
          )}
          {screen === "units" && (
            <Units units={UNITS} done={done} activeId={activeUnit.id}
              onPick={(id) => { actions.setActiveUnit(id); snd.nav(); setScreen("home"); }}
              onBack={() => go("home")} />
          )}
          {screen === "academy" && (
            <Academy mastery={state.mastery} onOpen={(id) => { setCourseId(id); setScreen("course"); }} />
          )}
          {screen === "course" && courseId && (
            <CourseFlow
              course={COURSES.find((c) => c.id === courseId)!}
              mastery={state.mastery[courseId] ?? 0}
              studyPos={state.studyPos[courseId] ?? 0}
              onStudyPos={(idx) => actions.setStudyPos(courseId, idx)}
              hearts={state.hearts}
              gems={state.gems}
              actions={actions}
              onExit={() => setScreen("academy")}
            />
          )}
          {screen === "shop" && <Shop gems={state.gems} />}
          {screen === "profile" && (
            <Profile state={state} muted={muted}
              account={sync.account} syncStatus={sync.status}
              onSignIn={() => go("auth")} onSignOut={sync.signOut} onSyncNow={() => void sync.syncNow()}
              onReminder={(r) => actions.setReminder(r)}
              onDiary={() => go("diary")}
              onMedals={() => go("medals")}
              onToggleMute={() => { const m = !muted; setMuted(m); setMutedState(m); if (!m) snd.correct(); }}
              onToggleTheme={() => actions.setTheme(state.theme === "dark" ? "light" : "dark")}
              onReplayIntro={() => actions.setOnboarded(false)}
              onReset={() => { actions.resetDemo(); setScreen("home"); }} />
          )}
          {screen === "auth" && (
            <AuthScreen onBack={() => go("profile")}
              onDone={(t, u, save, rev) => { void sync.adopt(t, u, save, rev); setScreen("profile"); }} />
          )}
          {screen === "medals" && <Medals onBack={() => go("profile")} />}
          {screen === "diary" && <Diary entries={state.diary} onBack={() => go("profile")} />}
          {screen === "devo" && playDay && (
            <Devotional day={playDay} hearts={state.hearts} gems={state.gems} actions={actions}
              onExit={() => setScreen("home")}
              onDone={() => { actions.completeDay(playDay.id); setScreen("home"); }} />
          )}
        </div>
        {showChrome && <Nav screen={screen} onGo={go} />}
      </div>
    </>
  );
}

/* ---------- HUD & Nav ---------- */
function Hud({ state }: { state: ReturnType<typeof useLumen>["state"] }) {
  return (
    <div className="hud">
      <div className="stat streak"><Icon name="i-flame" /><span className="num">{state.streak}</span></div>
      <div className="stat gem"><Icon name="i-gem" /><span className="num">{state.gems}</span></div>
      <div className="stat xp"><Icon name="i-xp" /><span className="num">{state.xp.toLocaleString("pt-BR")}</span></div>
      <div className="stat heart"><Icon name="i-heart" /><span className="num">{state.hearts}</span></div>
    </div>
  );
}

function Nav({ screen, onGo }: { screen: Screen; onGo: (s: Screen) => void }) {
  const items: { s: Screen; icon: IconName; label: string }[] = [
    { s: "home", icon: "i-home", label: "APRENDER" },
    { s: "academy", icon: "i-temple", label: "ACADEMIA" },
    { s: "shop", icon: "i-shop", label: "LOJA" },
    { s: "profile", icon: "i-lamp", label: "PERFIL" }
  ];
  return (
    <nav className="nav">
      {items.map((it) => (
        <button key={it.s} className={screen === it.s ? "active" : ""} onClick={() => onGo(it.s)}>
          <span className="nic"><Icon name={it.icon} /></span>{it.label}
        </button>
      ))}
    </nav>
  );
}

/* ---------- Home (trilha) ---------- */
function Home({ unit, done, today, onStart, onOpenUnits }: {
  unit: Unit; done: Set<string>; today: DevotionalDay | null; onStart: () => void; onOpenUnits: () => void;
}) {
  const doneAll = !today;
  const doneCount = unit.days.filter((d) => done.has(d.id)).length;
  return (
    <section className="screen">
      <button className="unit-pick" onClick={onOpenUnits}>
        <span className="up-ic" style={{ background: unit.accent ?? "var(--terra)" }}>
          <Icon name={(unit.icon ?? "i-book") as IconName} />
        </span>
        <div className="up-main">
          <div className="up-k">UNIDADE · toque para trocar</div>
          <div className="up-t">{unit.title}</div>
          <div className="up-s">{doneCount}/{unit.days.length} dias · {unit.theme}</div>
        </div>
        <span className="up-go"><Icon name="i-arrow" /></span>
      </button>

      <div className="devo-card">
        <div className="top">
          <span className="k">DEVOCIONAL DE HOJE</span>
          {today && <span className="min"><Icon name="i-clock" />{today.minutes} MIN</span>}
        </div>
        <div className="mid">
          <div>
            <div className="t">{today ? today.title : "Unidade concluída!"}</div>
            <div className="sub">{today ? today.subtitle : "Escolha outra unidade para continuar"}</div>
          </div>
          <div className="masc" style={{ width: 66, height: 66, borderRadius: 16, border: "1.5px dashed var(--forest-soft)", display: "grid", placeItems: "center", color: "var(--forest-soft)" }}>
            <Icon name="i-lamp" style={{ fontSize: 28 }} />
          </div>
        </div>
        <button className={"cta-devo" + (doneAll ? " done" : "")} disabled={doneAll}
          onClick={doneAll ? onOpenUnits : onStart}>
          <Icon name={doneAll ? "i-book" : "i-lamplight"} />{doneAll ? "Escolher unidade" : "Acender a lâmpada"}
        </button>
      </div>

      <div className="unit-div"><span>{unit.title} · {unit.theme}</span><i /></div>

      <div className="path">
        {unit.days.map((d, posInUnit) => {
          const cls = done.has(d.id) ? "done" : d === today ? "current" : "locked";
          const icon: IconName = cls === "done" ? "i-check" : cls === "current" ? "i-arrow" : "i-lock";
          return (
            <div className={"node-row " + offsetClass(posInUnit)} key={d.id}>
              <button className={"node " + cls} disabled={cls !== "current"} onClick={cls === "current" ? onStart : undefined}>
                <span className="cap"><Icon name={icon} /></span>
              </button>
            </div>
          );
        })}
        <div className={"node-row " + offsetClass(unit.days.length)}>
          <button className="node locked marco" disabled><span className="cap"><Icon name="i-trophy" /></span></button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seleção de unidades ---------- */
function Units({ units, done, activeId, onPick, onBack }: {
  units: Unit[]; done: Set<string>; activeId: string; onPick: (id: string) => void; onBack: () => void;
}) {
  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onBack} aria-label="Voltar"><Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} /></button>
        <div className="scr-title" style={{ margin: 0 }}>Unidades</div>
      </div>
      <div className="scr-sub">Escolha por onde caminhar — cada unidade é um plano devocional.</div>
      {units.map((u) => {
        const dc = u.days.filter((d) => done.has(d.id)).length;
        const pct = Math.round((dc / u.days.length) * 100);
        const isActive = u.id === activeId;
        const complete = dc === u.days.length;
        return (
          <button className={"unit-card" + (isActive ? " active" : "")} key={u.id} onClick={() => onPick(u.id)}>
            <span className="uc-ic" style={{ background: u.accent ?? "var(--terra)" }}>
              <Icon name={(u.icon ?? "i-book") as IconName} />
            </span>
            <div className="uc-main">
              <div className="uc-top">
                <span className="uc-t">{u.title}</span>
                {isActive && <span className="uc-badge">ATUAL</span>}
                {complete && <span className="uc-badge done"><Icon name="i-check" /></span>}
              </div>
              <div className="uc-theme">{u.theme}{u.source ? ` · ${u.source}` : ""}</div>
              {u.blurb && <div className="uc-blurb">{u.blurb}</div>}
              <div className="uc-foot">
                <div className="uc-bar"><i style={{ width: pct + "%" }} /></div>
                <span className="uc-count">{dc}/{u.days.length}</span>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
}

/* ---------- Academia ---------- */
function Academy({ mastery, onOpen }: { mastery: Record<string, number>; onOpen: (id: string) => void }) {
  return (
    <section className="screen">
      <div className="scr-title">Academia</div>
      <div className="scr-sub">Estude a fé reformada no seu ritmo · uma homenagem à Academia de Genebra</div>
      <div className="aca-note"><Icon name="i-flame" />Estudar rende XP e maestria. Sua <b>ofensiva</b> continua sendo do devocional diário.</div>
      {COURSES.map((c) => {
        const m = mastery[c.id] ?? 0;
        if (c.locked) return (
          <div className="aca-card locked" key={c.id}>
            <span className="aca-ic" style={{ background: c.color }}><Icon name={c.icon as IconName} /></span>
            <div className="aca-main"><div className="aca-t">{c.title}</div><div className="aca-s">{c.subtitle}</div></div>
            <span className="aca-lock"><Icon name="i-lock" /></span>
          </div>
        );
        return (
          <button className="aca-card" key={c.id} onClick={() => onOpen(c.id)}>
            <span className="aca-ic" style={{ background: c.color }}><Icon name={c.icon as IconName} /></span>
            <div className="aca-main">
              <div className="aca-t">{c.title}</div>
              <div className="aca-s">{c.subtitle}</div>
              <div className="aca-mbar"><i style={{ width: m + "%" }} /></div>
            </div>
            <span className="aca-right"><span className="aca-pct">{m}%</span><span className="go"><Icon name="i-arrow" /></span></span>
          </button>
        );
      })}
    </section>
  );
}

/* ---------- Loja ---------- */
function Shop({ gems }: { gems: number }) {
  const items: { ic: IconName; bg: string; fg: string; t: string; d: string; price: number }[] = [
    { ic: "i-candle", bg: "var(--terra-soft)", fg: "var(--terra)", t: "Vela da Perseverança", d: "Protege sua ofensiva por 1 dia perdido", price: 20 },
    { ic: "i-hourglass", bg: "var(--sage-soft)", fg: "var(--forest)", t: "Fim de semana leve", d: "Mantém a ofensiva sem estudar no domingo", price: 30 },
    { ic: "i-sparkle", bg: "var(--mustard-soft)", fg: "var(--mustard-deep)", t: "XP em Dobro · 15 min", d: "Dobre o XP das próximas lições", price: 25 },
    { ic: "i-heart", bg: "var(--terra-soft)", fg: "var(--terra)", t: "Encher corações", d: "Recupere todas as 5 vidas agora", price: 35 },
    { ic: "i-infinity", bg: "var(--forest-soft)", fg: "var(--forest)", t: "Corações infinitos · 1 dia", d: "Estude sem se preocupar em errar", price: 60 }
  ];
  const [owned, setOwned] = useState<Set<number>>(new Set());
  return (
    <section className="screen">
      <div className="scr-title">Loja</div>
      <div className="scr-sub">Você tem <b>{gems}</b> gemas</div>
      <div className="shop-sec">Poderes & Vidas</div>
      {items.map((it, i) => (
        <div className="shop-item" key={i}>
          <div className="s-ic" style={{ background: it.bg, color: it.fg }}><Icon name={it.ic} /></div>
          <div><div className="s-t">{it.t}</div><div className="s-d">{it.d}</div></div>
          <button className={"buy" + (owned.has(i) ? " owned" : "")} onClick={() => { if (!owned.has(i)) { const n = new Set(owned); n.add(i); setOwned(n); snd.correct(); } }}>
            {owned.has(i) ? <><Icon name="i-check" />Comprado</> : <><Icon name="i-gem" />{it.price}</>}
          </button>
        </div>
      ))}
    </section>
  );
}

/* ---------- Conta e sincronização ---------- */
const SYNC_LABEL: Record<SyncStatus, string> = {
  off: "Só neste aparelho",
  syncing: "Sincronizando…",
  ok: "Progresso salvo na nuvem",
  error: "Sem conexão — salvo aqui"
};

function AccountBox({ account, status, onSignIn, onSignOut, onSyncNow }: {
  account: { name: string; username: string } | null; status: SyncStatus;
  onSignIn: () => void; onSignOut: () => void; onSyncNow: () => void;
}) {
  if (!account) {
    return (
      <div className="acc-box">
        <button className="acc-row" onClick={onSignIn}>
          <span className="acc-ic"><Icon name="i-lock" /></span>
          <div className="acc-main">
            <div className="acc-t">Entrar ou criar conta</div>
            <div className="acc-s">Guarde o seu progresso e continue em outro aparelho</div>
          </div>
          <span className="acc-go"><Icon name="i-arrow" /></span>
        </button>
        <div className="acc-fine">Sem conta, tudo funciona — mas fica só neste navegador.</div>
      </div>
    );
  }
  return (
    <div className="acc-box">
      <div className="acc-row static">
        <span className="acc-ic on"><Icon name="i-check" /></span>
        <div className="acc-main">
          <div className="acc-t">{account.name}</div>
          <div className={"acc-s st-" + status}>{SYNC_LABEL[status]}</div>
        </div>
      </div>
      <div className="acc-actions">
        <button className="ctrl" onClick={onSyncNow}><Icon name="i-reset" />Sincronizar agora</button>
        <button className="ctrl" onClick={onSignOut}><Icon name="i-lock" />Sair da conta</button>
      </div>
    </div>
  );
}

/* ---------- Lembrete diário ---------- */
function ReminderSetting({ reminder, onReminder }: { reminder: Reminder; onReminder: (r: Reminder) => void }) {
  const [perm, setPerm] = useState(reminderPermission());
  if (!reminderSupported()) {
    return <div className="rem-note"><Icon name="i-clock" />Seu navegador não suporta lembretes locais.</div>;
  }
  async function toggle() {
    if (!reminder.enabled) {
      let p = reminderPermission();
      if (p !== "granted") { p = await requestReminderPermission(); setPerm(p); }
      if (p !== "granted") { onReminder({ ...reminder, enabled: false }); return; }
      onReminder({ ...reminder, enabled: true });
    } else {
      onReminder({ ...reminder, enabled: false });
    }
  }
  const blocked = perm === "denied";
  return (
    <div className="rem-box">
      <button className={"rem-toggle" + (reminder.enabled ? " on" : "")} onClick={toggle} disabled={blocked}>
        <span className="rem-ic"><Icon name="i-flame" /></span>
        <div className="rem-main">
          <div className="rem-t">Lembrete diário</div>
          <div className="rem-s">{blocked ? "Permissão de notificação bloqueada no navegador" : reminder.enabled ? "Ativado — te lembramos de acender a lâmpada" : "Receba um toque para não perder a diária"}</div>
        </div>
        <span className={"rem-switch" + (reminder.enabled ? " on" : "")}><i /></span>
      </button>
      {reminder.enabled && !blocked && (
        <label className="rem-time">
          <span>Horário</span>
          <input type="time" value={reminder.time}
            onChange={(e) => onReminder({ ...reminder, time: e.target.value || "07:00" })} />
        </label>
      )}
      <div className="rem-fine">Funciona com o app aberto/instalado. Lembretes com o app fechado chegam na fase de sincronização na nuvem.</div>
    </div>
  );
}

/* ---------- Perfil ---------- */
function Profile({ state, muted, account, syncStatus, onSignIn, onSignOut, onSyncNow, onReminder, onDiary, onMedals, onToggleMute, onToggleTheme, onReplayIntro, onReset }: {
  state: ReturnType<typeof useLumen>["state"]; muted: boolean;
  account: { name: string; username: string } | null; syncStatus: SyncStatus;
  onSignIn: () => void; onSignOut: () => void; onSyncNow: () => void;
  onReminder: (r: Reminder) => void;
  onDiary: () => void; onMedals: () => void; onToggleMute: () => void; onToggleTheme: () => void; onReplayIntro: () => void; onReset: () => void;
}) {
  const heat = [2,3,2,1,3,3,0, 1,2,3,3,2,3,1, 3,3,2,2,3,3,0, 2,1,3,3,2,3,2, 3,2,3,1,3,2,3];
  return (
    <section className="screen">
      <div className="prof-head">
        <div className="prof-av">{(account?.name ?? "A").charAt(0).toUpperCase()}</div>
        <div>
          <div className="prof-name">{account?.name ?? "Visitante"}</div>
          <div className="prof-since">Membro desde agosto de 2026</div>
          <div className="prof-solideo"><Icon name="i-cross" />SOLI DEO GLORIA</div>
        </div>
      </div>
      <div className="pstat-grid">
        <div className="pstat"><span className="p-ic"><Icon name="i-flame" /></span><div><div className="p-v">{state.streak}</div><div className="p-k">Ofensiva</div></div></div>
        <div className="pstat g2"><span className="p-ic"><Icon name="i-xp" /></span><div><div className="p-v">{state.xp.toLocaleString("pt-BR")}</div><div className="p-k">XP total</div></div></div>
        <div className="pstat"><span className="p-ic"><Icon name="i-book" /></span><div><div className="p-v">{state.dayIndex}</div><div className="p-k">Devocionais</div></div></div>
        <div className="pstat g2"><span className="p-ic"><Icon name="i-medal" /></span><div><div className="p-v">4</div><div className="p-k">Medalhas</div></div></div>
      </div>
      <div className="sec-h">Constância devocional · últimas 5 semanas</div>
      <div className="heat">
        <div className="heat-grid">{heat.map((v, i) => <i key={i} className={v ? "l" + v : ""} />)}</div>
        <div className="heat-legend">Menos <b style={{ background: "var(--line)" }} /><b style={{ background: "var(--forest-soft)" }} /><b style={{ background: "var(--sage)" }} /><b style={{ background: "var(--forest)" }} /> Mais</div>
      </div>
      <div className="sec-h">Meu diário</div>
      <button className="open-row" onClick={onDiary}><span className="di"><Icon name="i-journal" /></span>Ver minhas reflexões<span className="arw"><Icon name="i-arrow" /></span></button>
      <button className="open-row" onClick={onMedals}><span className="di"><Icon name="i-medal" /></span>Minhas medalhas<span className="arw"><Icon name="i-arrow" /></span></button>
      <div className="sec-h">Conta</div>
      <AccountBox account={account} status={syncStatus} onSignIn={onSignIn} onSignOut={onSignOut} onSyncNow={onSyncNow} />
      <div className="sec-h">Lembrete</div>
      <ReminderSetting reminder={state.reminder} onReminder={onReminder} />
      <div className="sec-h">Configurações</div>
      <div className="settings">
        <button className="ctrl" onClick={onReplayIntro}><Icon name="i-lamplight" />Rever a introdução</button>
        <button className="ctrl" onClick={onToggleMute}><Icon name="i-audio" />{muted ? "Som desligado" : "Som ligado"}</button>
        <button className="ctrl" onClick={onToggleTheme}><Icon name="i-moon" />Alternar tema (claro/escuro)</button>
        <button className="ctrl" onClick={onReset}><Icon name="i-reset" />Reiniciar progresso</button>
      </div>
    </section>
  );
}

/* ---------- Medalhas ---------- */
function Medals({ onBack }: { onBack: () => void }) {
  const medals: { ic: IconName; t: string; s: string; done: boolean; c?: string; p?: number }[] = [
    { ic: "i-flame", t: "Chama Viva", s: "Ofensiva de 7 dias", done: true, c: "var(--terra)" },
    { ic: "i-book", t: "Leitor Fiel", s: "10 lições", done: true, c: "var(--forest)" },
    { ic: "i-target", t: "Perfeição", s: "Lição sem erros", done: true, c: "var(--mustard)" },
    { ic: "i-cross", t: "Catecúmeno", s: "Concluiu os Solas", done: true, c: "var(--slate)" },
    { ic: "i-sunrise", t: "Madrugador", s: "Antes das 8h", done: false, p: 60 },
    { ic: "i-gem", t: "Tesouro", s: "Junte 100 gemas", done: false, p: 45 },
    { ic: "i-temple", t: "Teólogo", s: "Unidade Institutas", done: false, p: 0 },
    { ic: "i-anchor", t: "Firme na Fé", s: "Ofensiva de 14 dias", done: false, p: 50 },
    { ic: "i-dove", t: "Fruto do Espírito", s: "30 dias seguidos", done: false, p: 23 }
  ];
  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onBack} aria-label="Voltar"><Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} /></button>
        <div className="scr-title" style={{ margin: 0 }}>Medalhas</div>
      </div>
      <div className="scr-sub">Conquistas ao longo da sua caminhada</div>
      <div className="medal-grid">
        {medals.map((m, i) => (
          <div className={"medal " + (m.done ? "done" : "locked")} key={i}>
            <span className="m-badge" style={m.done ? { background: m.c } : undefined}><Icon name={m.done ? m.ic : "i-lock"} /></span>
            <div className="m-t">{m.t}</div><div className="m-s">{m.s}</div>
            {!m.done && <div className="m-prog"><i style={{ width: (m.p ?? 0) + "%" }} /></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Diário ---------- */
function Diary({ entries, onBack }: { entries: { d: string; ref: string; t: string }[]; onBack: () => void }) {
  return (
    <section className="screen">
      <div className="diary-top">
        <button className="xbtn" onClick={onBack} aria-label="Voltar"><Icon name="i-arrow" style={{ transform: "scaleX(-1)" }} /></button>
        <div className="scr-title" style={{ margin: 0 }}>Meu diário</div>
      </div>
      <div className="scr-sub">Suas reflexões devocionais — guardadas só para você</div>
      {entries.length === 0 ? (
        <div className="diary-empty">
          <Icon name="i-journal" />
          <div className="t">Seu diário está em branco</div>
          <div>Sua primeira reflexão nasce hoje, na Estação 5 do devocional.</div>
        </div>
      ) : entries.map((e, i) => (
        <div className="diary-entry" key={i}>
          <div className="de-top"><span className="diary-date">{e.d}</span><span className="diary-ref">{e.ref}</span></div>
          <div className="diary-text">{e.t}</div>
        </div>
      ))}
    </section>
  );
}

/* ---------- Onboarding ---------- */
const ONBOARD: { ic: IconName; c: string; t: string; d: string }[] = [
  { ic: "i-lamplight", c: "var(--terra)", t: "Bem-vindo ao Lúmen", d: "Um devocional reformado que vira hábito. Escrituras, catecismo e os reformadores — um passo com Deus por dia." },
  { ic: "i-book", c: "var(--forest)", t: "O Devocional de hoje", d: "Em poucos minutos: acenda a lâmpada, leia a Palavra, medite, ouça os pais da fé e responda ao desafio." },
  { ic: "i-flame", c: "var(--terra)", t: "Mantenha a lâmpada acesa", d: "Cada dia de devocional acende a sua ofensiva. Volte amanhã para não deixar a chama apagar." },
  { ic: "i-temple", c: "var(--mustard)", t: "A Academia", d: "Quer se aprofundar? Estude os Cinco Solas, as Doutrinas da Graça e o Catecismo no seu ritmo, com maestria." },
  { ic: "i-cross", c: "var(--slate)", t: "Soli Deo Gloria", d: "Tudo aqui existe para um só fim: conhecer a Deus e glorificá-Lo. Vamos começar?" }
];
function Onboard({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const s = ONBOARD[i];
  const last = i === ONBOARD.length - 1;
  return (
    <section className="screen flow" style={{ position: "absolute", inset: 0, background: "var(--card)" }}>
      <div className="ob-top">
        <span className="ob-brand">LÚMEN</span>
        {!last && <button className="ob-skip" onClick={onDone}>Pular</button>}
      </div>
      <div className="ob-body">
        <span className="ob-ic" style={{ background: s.c }}><Icon name={s.ic} /></span>
        <div className="ob-t">{s.t}</div>
        <div className="ob-d">{s.d}</div>
      </div>
      <div className="ob-dots">{ONBOARD.map((_, k) => <i key={k} className={k === i ? "on" : ""} />)}</div>
      <div className="ob-foot">
        <button className="cta terra" onClick={() => { if (last) onDone(); else { setI(i + 1); snd.nav(); } }}>
          {last ? "Acender a primeira lâmpada" : "Continuar"}
        </button>
      </div>
    </section>
  );
}
