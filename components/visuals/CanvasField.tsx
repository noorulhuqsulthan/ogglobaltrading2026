'use client';
import { useEffect, useRef } from 'react';

export default function CanvasField() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let DPR = 1;
    let P: Particle[] = [];
    let raf = 0;
    let t = 0;
    let prev = performance.now();
    let heat = 0.62;
    const heatT = 0.62;
    let px = -1e4;
    let py = -1e4;
    let pHeat = 0;
    let vel = 0;
    let lastY = 0;

    const C_DARK = { cold: [79, 163, 199], warm: [159, 227, 242], hot: [217, 130, 15] };
    const C_LIGHT = { cold: [34, 102, 127], warm: [79, 163, 199], hot: [178, 96, 10] };

    type Particle = {
      x: number;
      y: number;
      ox: number;
      oy: number;
      l: number;
      a: number;
    };

    const isLight = () => document.documentElement.getAttribute('data-theme') === 'light';
    const palette = () => (isLight() ? C_LIGHT : C_DARK);

    const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

    function size() {
      W = window.innerWidth;
      H = window.innerHeight;
      DPR = Math.min(window.devicePixelRatio || 1, 1.7);
      cv!.width = Math.round(W * DPR);
      cv!.height = Math.round(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      paintBase();
      seed();
    }

    function paintBase() {
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = isLight() ? '#EFF2F1' : '#050D12';
      ctx!.fillRect(0, 0, W, H);
    }

    function seed() {
      const n = Math.min(200, Math.max(56, Math.round((W * H) / 9000)));
      P = [];
      for (let i = 0; i < n; i++) P.push(spawn());
    }

    function spawn(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        ox: 0,
        oy: 0,
        l: 60 + Math.random() * 260,
        a: 0.2 + Math.random() * 0.8
      };
    }

    const flow = (x: number, y: number, tt: number) =>
      Math.sin(x * 0.0017 + tt * 0.16) * 1.55 +
      Math.cos(y * 0.0022 - tt * 0.12) * 1.55 +
      Math.sin((x + y) * 0.0009 + tt * 0.07) * 1.1;

    function tempAt(x: number, y: number) {
      let h = heat;
      if (pHeat > 0.01) {
        const dx = x - px;
        const dy = y - py;
        const d2 = dx * dx + dy * dy;
        const r = 190;
        h += pHeat * Math.exp(-d2 / (r * r)) * 1.2;
      }
      return clamp(h, 0, 1);
    }

    function mix(h: number) {
      const P = palette();
      let a: number[], b: number[], k: number;
      if (h < 0.5) {
        a = P.cold;
        b = P.warm;
        k = h * 2;
      } else {
        a = P.warm;
        b = P.hot;
        k = (h - 0.5) * 2;
      }
      return [
        Math.round(lerp(a[0], b[0], k)),
        Math.round(lerp(a[1], b[1], k)),
        Math.round(lerp(a[2], b[2], k))
      ];
    }

    function still() {
      paintBase();
      const g = ctx!.createLinearGradient(0, H, W, 0);
      if (isLight()) {
        g.addColorStop(0, 'rgba(34,102,127,.13)');
        g.addColorStop(0.5, 'rgba(239,242,241,0)');
        g.addColorStop(1, 'rgba(178,96,10,.11)');
      } else {
        g.addColorStop(0, 'rgba(79,163,199,.18)');
        g.addColorStop(0.5, 'rgba(5,13,18,0)');
        g.addColorStop(1, 'rgba(217,130,15,.16)');
      }
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, W, H);
    }

    function step(ts: number) {
      raf = requestAnimationFrame(step);
      if (document.hidden) {
        prev = ts;
        return;
      }
      const dt = Math.min((ts - prev) / 1000, 0.05);
      prev = ts;
      t += dt;

      heat = lerp(heat, heatT, 1 - Math.pow(0.004, dt));
      pHeat = Math.max(0, pHeat - dt * 0.55);

      const y = window.scrollY;
      vel = lerp(vel, Math.min(Math.abs(y - lastY) * 1.1, 52), 0.14);
      lastY = y;

      const light = isLight();

      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = light ? 'rgba(239,242,241,.19)' : 'rgba(5,13,18,.19)';
      ctx!.fillRect(0, 0, W, H);

      ctx!.globalCompositeOperation = light ? 'multiply' : 'lighter';
      ctx!.lineCap = 'round';

      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        const h = tempAt(p.x, p.y);
        const ang = flow(p.x, p.y, t);
        const sp = 14 + h * 72 + vel;

        p.ox = p.x;
        p.oy = p.y;
        p.x += Math.cos(ang) * sp * dt;
        p.y += Math.sin(ang) * sp * dt - (h - 0.42) * 74 * dt;
        p.l -= dt * 60;

        if (p.l < 0 || p.x < -40 || p.x > W + 40 || p.y < -40 || p.y > H + 40) {
          P[i] = spawn();
          P[i].ox = P[i].x;
          P[i].oy = P[i].y;
          continue;
        }

        const c = mix(h);
        const a = light ? (p.a * (0.4 + h * 0.5)).toFixed(3) : (p.a * (0.18 + h * 0.3)).toFixed(3);
        ctx!.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${a})`;
        ctx!.lineWidth = light ? 0.7 + h * 1.2 : 0.6 + h * 1.1;
        ctx!.beginPath();
        ctx!.moveTo(p.ox, p.oy);
        ctx!.lineTo(p.x, p.y);
        ctx!.stroke();
      }

      ctx!.globalCompositeOperation = 'source-over';
    }

    const onResize = () => {
      size();
      if (prefersReduce) still();
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      px = e.clientX;
      py = e.clientY;
      pHeat = 1;
    };
    const onTheme = () => {
      paintBase();
      if (prefersReduce) still();
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('og-theme-change', onTheme as EventListener);

    size();
    if (prefersReduce) still();
    else {
      prev = performance.now();
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('og-theme-change', onTheme as EventListener);
    };
  }, []);

  return <canvas id="field" ref={ref} aria-hidden="true" />;
}