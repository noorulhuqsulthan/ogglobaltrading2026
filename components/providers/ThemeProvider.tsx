'use client';
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const initial = (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
    
    setThemeState(initial);

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('og-theme')) return;
      } catch {
        /* ignore */
      }
      applyTheme(e.matches ? 'light' : 'dark', false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyTheme = useCallback((t: Theme, persist = true) => {
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.style.colorScheme = t;
    const meta = document.getElementById('meta-theme');
    if (meta) meta.setAttribute('content', t === 'light' ? '#EFF2F1' : '#050D12');
    if (persist) {
      try {
        localStorage.setItem('og-theme', t);
      } catch {
        /* ignore */
      }
    }
    setThemeState(t);
    window.dispatchEvent(new CustomEvent('og-theme-change', { detail: t }));
  }, []);

  const toggle = useCallback(() => {
    applyTheme(theme === 'light' ? 'dark' : 'light', true);
  }, [theme, applyTheme]);

  return <ThemeCtx.Provider value={{ theme, toggle, setTheme: applyTheme }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}