import type { ReactNode } from 'react';

export default function Eyebrow({
  children,
  plain = false
}: {
  children: ReactNode;
  plain?: boolean;
}) {
  return <span className={`eb${plain ? ' plain' : ''}`}>{children}</span>;
}