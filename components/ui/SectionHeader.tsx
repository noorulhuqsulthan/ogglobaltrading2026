import Eyebrow from './Eyebrow';
import type { ReactNode } from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <div className="sh">
      <div>
        <div data-r>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 data-r="m">{title}</h2>
      </div>
      <p data-r style={{ ['--d' as string]: '120ms' }}>
        {description}
      </p>
    </div>
  );
}