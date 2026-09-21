import Link from 'next/link';
import type { ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  variant?: 'outline' | 'solid';
  className?: string;
  showDot?: boolean;
};

type LinkProps = BaseProps & { href: string; external?: boolean };
type ButtonProps = BaseProps & { href?: undefined; type?: 'button' | 'submit'; onClick?: () => void; disabled?: boolean };

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = 'outline', className = '', showDot = true } = props;
  const cls = `btn ${variant === 'solid' ? 'solid' : ''} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer noopener">
          {showDot && <i />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {showDot && <i />}
        {children}
      </Link>
    );
  }

  const { type = 'button', onClick, disabled } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {showDot && <i />}
      {children}
    </button>
  );
}