'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import { useTheme } from '@/components/providers/ThemeProvider';
import { navigation } from '@/data/navigation';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onMenu = (e: Event) => {
      const detail = (e as CustomEvent<boolean>).detail;
      setOpen(detail);
      document.body.style.overflow = detail ? 'hidden' : '';
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('og-menu-change', onMenu as EventListener);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('og-menu-change', onMenu as EventListener);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function close() {
    setOpen(false);
    document.body.dataset.menuOpen = 'false';
    document.body.style.overflow = '';
    window.dispatchEvent(new CustomEvent('og-menu-change', { detail: false }));
  }

  const productItem = navigation.find((n) => n.children);

  return (
    <nav
      id="mobile-sheet"
      className={`sheet chrome${open ? ' open' : ''}`}
      aria-label="Mobile"
      aria-hidden={!open}
    >
      <Link href="/" onClick={close}>Home</Link>
      <Link href="/about-us" onClick={close}>About</Link>

      {productItem && (
        <>
          <button
            type="button"
            className="sheet-link"
            aria-expanded={productsOpen}
            onClick={() => setProductsOpen((v) => !v)}
          >
            Products
          </button>
          <div className="sub" style={{ maxHeight: productsOpen ? 400 : undefined }}>
            <Link href="/products" onClick={close}>All products</Link>
            {productItem.children!.map((c) => (
              <Link key={c.href} href={c.href} onClick={close}>
                {c.label}
              </Link>
            ))}
          </div>
        </>
      )}

      <Link href="/industries" onClick={close}>Industries</Link>
      <Link href="/approvals-compliance" onClick={close}>Approvals &amp; Compliance</Link>
      <Link href="/quality" onClick={close}>Quality</Link>
      <Link href="/contact" onClick={close}>Contact</Link>

      <div className="sheet-theme">
        <span>Appearance</span>
        <div className="seg" role="group" aria-label="Theme">
          <button
            type="button"
            className={theme === 'dark' ? 'on' : ''}
            onClick={() => setTheme('dark')}
          >
            <Icon name="i-moon" viewBox="0 0 24 24" />Dark
          </button>
          <button
            type="button"
            className={theme === 'light' ? 'on' : ''}
            onClick={() => setTheme('light')}
          >
            <Icon name="i-sun" viewBox="0 0 24 24" />Light
          </button>
        </div>
      </div>

      <Link className="btn solid" href="/contact" onClick={close}>
        <i />
        Send an enquiry
      </Link>
      <div className="sheet-meta">
        OG Importing and Exporting LLC
        <br />
        United Arab Emirates
      </div>
    </nav>
  );
}