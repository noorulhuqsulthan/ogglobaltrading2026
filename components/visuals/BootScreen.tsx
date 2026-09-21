'use client';
import { useEffect, useRef, useState } from 'react';

export default function BootScreen() {
  const [hidden, setHidden] = useState(false);
  const [off, setOff] = useState(false);
  const pcRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only show once per session
    try {
      if (sessionStorage.getItem('og-boot-shown') === '1') {
        setHidden(true);
        return;
      }
      sessionStorage.setItem('og-boot-shown', '1');
    } catch {
      /* ignore */
    }

    const duration = prefersReduce ? 0 : 1000;
    const start = performance.now();

    function done() {
      setOff(true);
      setTimeout(() => setHidden(true), 1100);
    }

    if (duration === 0) {
      if (pcRef.current) pcRef.current.textContent = '100';
      done();
      return;
    }

    let raf = 0;
    function tick(ts: number) {
      const p = Math.min((ts - start) / duration, 1);
      if (pcRef.current) {
        pcRef.current.textContent = String(Math.round(100 * (1 - Math.pow(1 - p, 2)))).padStart(2, '0');
      }
      if (p < 1) raf = requestAnimationFrame(tick);
      else done();
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;
  return (
    <div className={`boot${off ? ' off' : ''}`} aria-hidden="true">
      <b>
        OG Importing
        <br />
        &amp; Exporting
      </b>
      <span className="pc" ref={pcRef}>
        00
      </span>
    </div>
  );
}