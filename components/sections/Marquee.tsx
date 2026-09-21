'use client';
import { useEffect, useRef } from 'react';

export default function Marquee() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el && el.parentElement) {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom > -200 && r.top < window.innerHeight + 200) {
          const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
          el.style.transform = `translate3d(${(-p * 44).toFixed(2)}%, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-in" ref={ref}>
        <span className="f">Gas</span><span>—</span>
        <span className="g">Fire</span><span>—</span>
        <span className="f">Industrial</span><span>—</span>
        <span className="g">Oil &amp; Gas</span><span>—</span>
        <span className="f">Gas</span><span>—</span>
        <span className="g">Fire</span><span>—</span>
        <span className="f">Industrial</span><span>—</span>
        <span className="g">Oil &amp; Gas</span><span>—</span>
      </div>
    </div>
  );
}