/** Confete em blocos sólidos (estética vintage), respeitando reduced-motion. */
const COLORS = ["#C05B3A", "#33463A", "#C39433", "#9DAE8C", "#EBCDB9"];

export function burst(canvas: HTMLCanvasElement): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const host = canvas.parentElement;
  if (!host) return;
  canvas.width = host.clientWidth;
  canvas.height = host.clientHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const parts = Array.from({ length: 150 }, (_, i) => ({
    x: canvas.width / 2,
    y: canvas.height * 0.34,
    vx: (Math.random() - 0.5) * 10,
    vy: Math.random() * -12 - 3,
    s: Math.random() * 8 + 5,
    c: COLORS[i % COLORS.length],
    a: Math.random() * 6,
    va: (Math.random() - 0.5) * 0.4
  }));

  let t0 = performance.now();
  function frame(now: number) {
    const dt = Math.min(32, now - t0) / 16;
    t0 = now;
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of parts) {
      p.vy += 0.42 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.a += p.va * dt;
      if (p.y < canvas.height + 20) alive = true;
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.a);
      ctx!.fillStyle = p.c;
      ctx!.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.72);
      ctx!.restore();
    }
    if (alive) requestAnimationFrame(frame);
    else ctx!.clearRect(0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(frame);
}
