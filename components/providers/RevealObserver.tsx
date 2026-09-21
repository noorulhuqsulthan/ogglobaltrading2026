'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduce) {
      document.querySelectorAll<HTMLElement>('[data-r]').forEach((el) => el.classList.add('in'));
      document.querySelectorAll<HTMLElement>('.ct').forEach((el) => {
        el.textContent = el.dataset.t ?? '0';
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    document.querySelectorAll<HTMLElement>('[data-r]:not(.in)').forEach((el) => io.observe(el));

    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target as HTMLElement);
            co.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll<HTMLElement>('.ct:not([data-counted])').forEach((el) => co.observe(el));

    return () => {
      io.disconnect();
      co.disconnect();
    };
  }, [pathname]);

  return null;
}

function animateCounter(el: HTMLElement) {
  el.dataset.counted = '1';
  const to = parseFloat(el.dataset.t ?? '0');
  const dp = parseInt(el.dataset.dp ?? '0', 10);
  const sfx = el.dataset.s ?? '';
  const duration = 1400;
  const start = performance.now();

  const fmt = (v: number) => {
    const n = dp ? v.toFixed(dp) : Math.round(v).toLocaleString('en-US');
    return sfx ? `${n}<span class="sfx">${sfx}</span>` : n;
  };

  function tick(ts: number) {
    const p = Math.min((ts - start) / duration, 1);
    el.innerHTML = fmt(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}