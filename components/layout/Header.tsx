'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Icon from '@/components/ui/Icon';
import { navigation } from '@/data/navigation';

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();
  const root = '/' + (pathname.split('/')[1] ?? '');

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const open = document.body.dataset.menuOpen === 'true';
    setMenuButtonOpen(open);
  }, [pathname]);

  return (
    <header className={`hdr chrome${stuck ? ' stuck' : ''}`} id="hdr">
      <div className="hdr-in">
        <Logo />

        <nav className="nav" aria-label="Primary">
          {navigation.map((item) => {
            const on = item.href === '/' ? root === '/' : pathname.startsWith(item.href);
            return (
              <div
                key={item.label}
                className={`ni${on ? ' on' : ''}`}
                data-c={item.tint === 'cold' ? 'cold' : item.tint === 'hot' ? 'hot' : undefined}
              >
                <Link href={item.href}>
                  {item.label}
                  {item.children && <Icon name="i-sun" className="cv" viewBox="0 0 24 24" ariaHidden />}
                </Link>
                {item.children && (
                  <div className="pop">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>
                        <b>{c.label}</b>
                        <span>{c.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hdr-right">
          <Link className="btn" href="/contact">
            <i />
            Enquire
          </Link>
          <ThemeToggle />
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={false}
            aria-controls="mobile-sheet"
            onClick={() => toggleMobileMenu()}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function toggleMobileMenu() {
  const open = document.body.dataset.menuOpen !== 'true';
  document.body.dataset.menuOpen = String(open);
  window.dispatchEvent(new CustomEvent('og-menu-change', { detail: open }));
}

function setMenuButtonOpen(open: boolean) {
  const btn = document.querySelector<HTMLButtonElement>('.burger');
  if (!btn) return;
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
}