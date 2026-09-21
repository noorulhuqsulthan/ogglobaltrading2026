import Icon from '@/components/ui/Icon';
import Eyebrow from '@/components/ui/Eyebrow';
import type { ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  lead,
  tint = 'hot',
  icon
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  tint?: 'cold' | 'hot';
  icon?: string;
}) {
  return (
    <section className={`sec clear t-${tint}`} style={{ paddingTop: 'calc(var(--nav) + 64px)' }}>
      <div className="wrap">
        <div className="sh" style={{ marginBottom: 0, alignItems: 'start' }}>
          <div>
            <div data-r>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 data-r="m" style={{ marginTop: 20, maxWidth: '18ch', fontSize: 'clamp(2.4rem,5.4vw,5rem)' }}>
              {title}
            </h1>
          </div>
          <p className="lead" data-r style={{ ['--d' as string]: '140ms' }}>
            {lead}
          </p>
        </div>

        {icon && (
          <div
            data-r
            style={{
              marginTop: 'clamp(28px, 4vw, 56px)',
              border: '1px solid var(--line)',
              padding: 'clamp(20px,3vw,40px)',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(16px,3vw,32px)',
              background: 'linear-gradient(180deg,var(--glass-1),var(--glass-2))'
            }}
          >
            <Icon name={icon} viewBox="0 0 64 64" size={72} className="" />
            <span className="mono" style={{ color: 'var(--fg-mute)', fontSize: '.8rem', letterSpacing: '.1em', textTransform: 'uppercase' }}>
              Category overview
            </span>
          </div>
        )}
      </div>
    </section>
  );
}