/**
 * Lembrete diário do devocional.
 *
 * IMPORTANTE — limite da web: um lembrete 100% no cliente só dispara enquanto
 * o app está aberto (aba viva ou PWA em segundo plano por pouco tempo, a
 * depender do sistema). Notificações agendadas com o app FECHADO exigem Web
 * Push (Push API + servidor com chaves VAPID), que fica para a fase de nuvem.
 * No iOS, notificações web só funcionam com o app instalado na tela inicial
 * (iOS 16.4+). Aqui entregamos o agendador local + a permissão do navegador.
 */

export interface ReminderCfg { enabled: boolean; time: string } // time: "HH:MM"

let timer: number | null = null;

export function reminderSupported(): boolean {
  return typeof window !== "undefined" && "Notification" in window;
}

export function reminderPermission(): NotificationPermission {
  return reminderSupported() ? Notification.permission : "denied";
}

export async function requestReminderPermission(): Promise<NotificationPermission> {
  if (!reminderSupported()) return "denied";
  try { return await Notification.requestPermission(); } catch { return "denied"; }
}

function msUntil(time: string): number {
  const [h, m] = time.split(":").map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(h || 0, m || 0, 0, 0);
  if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
  return next.getTime() - now.getTime();
}

async function fire(): Promise<void> {
  const title = "Lúmen · seu devocional de hoje";
  const opts: NotificationOptions = {
    body: "Acenda a lâmpada e mantenha a sua ofensiva. Um passo com Deus hoje.",
    icon: `${import.meta.env.BASE_URL}icon.svg`,
    tag: "lumen-daily"
  };
  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) { await reg.showNotification(title, opts); return; }
    }
    new Notification(title, opts);
  } catch { /* silencioso */ }
}

/** (Re)agenda o lembrete diário. Chamar sempre que a config mudar. */
export function applyReminder(r: ReminderCfg): void {
  if (timer !== null) { clearTimeout(timer); timer = null; }
  if (!r.enabled || reminderPermission() !== "granted") return;
  const schedule = () => {
    timer = window.setTimeout(async () => {
      await fire();
      schedule(); // reagenda para o próximo dia
    }, msUntil(r.time));
  };
  schedule();
}
