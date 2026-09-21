'use client';
import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const refA = useRef<HTMLSpanElement | null>(null);
  const refB = useRef<HTMLSpanElement | null>(null);
  const refGrid = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const tick = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          const p = Math.min(Math.max(-r.top / window.innerHeight, 0), 1.2);
          if (refA.current) refA.current.style.transform = `translate3d(${p * 60}px, ${p * -70}px, 0)`;
          if (refB.current) refB.current.style.transform = `translate3d(${p * -46}px, ${p * 52}px, 0)`;
          if (refGrid.current) refGrid.current.style.transform = `translate3d(0, ${p * 44}px, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      <span className="hero-orb" ref={refA} />
      <span className="hero-orb b" ref={refB} />
      <span className="hero-grid" ref={refGrid} />
    </div>
  );
}