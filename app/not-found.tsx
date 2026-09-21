import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="sec clear" style={{ minHeight: '70svh', display: 'grid', placeItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Eyebrow>404 — Not found</Eyebrow>
        </div>
        <h1 style={{ marginTop: 20, maxWidth: '14ch', marginInline: 'auto' }}>
          This page isn&apos;t part of our catalogue.
        </h1>
        <p className="lead" style={{ marginTop: 20, marginInline: 'auto' }}>
          The page you were looking for could not be found. It may have been moved or removed.
        </p>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link className="btn solid" href="/"><i />Back to home</Link>
          <Link className="btn" href="/products"><i />View products</Link>
        </div>
      </div>
    </section>
  );
}