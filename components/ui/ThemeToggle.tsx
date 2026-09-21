'use client';
import { useTheme } from '@/components/providers/ThemeProvider';
import Icon from './Icon';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';
  return (
    <button
      className="tt"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <Icon name="i-sun" className="s-sun" viewBox="0 0 24 24" />
      <Icon name="i-moon" className="s-moon" viewBox="0 0 24 24" />
    </button>
  );
}