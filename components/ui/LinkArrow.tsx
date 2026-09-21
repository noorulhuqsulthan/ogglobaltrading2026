import Link from 'next/link';
import Icon from './Icon';
import type { ReactNode } from 'react';

export default function LinkArrow({
  href,
  children,
  className = ''
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`tl ${className}`.trim()} href={href}>
      <i />
      {children}
      <Icon name="ar" viewBox="0 0 16 16" className="ico" />
    </Link>
  );
}