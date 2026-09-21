import Link from 'next/link';
import { site } from '@/data/site';

export default function Logo({ href = '/' }: { href?: string }) {
  return (
    <Link className="logo" href={href} aria-label={`${site.name} — home`}>
      <span className="logo-m" aria-hidden="true" />
      <span>
        <b>OG Importing &amp; Exporting</b>
        <small>Gas · Fire &amp; Safety · Industrial</small>
      </span>
    </Link>
  );
}