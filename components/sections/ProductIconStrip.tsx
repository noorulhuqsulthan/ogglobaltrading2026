import Icon from '@/components/ui/Icon';
import { iconStrip } from '@/data/facts';

export default function ProductIconStrip() {
  const items = [...iconStrip, ...iconStrip];
  return (
    <div className="prodstrip" aria-hidden="true">
      <div className="ps-track">
        {items.map((name, i) => (
          <span className="ps-i" key={`${name}-${i}`}>
            <Icon name={name} viewBox="0 0 64 64" />
          </span>
        ))}
      </div>
    </div>
  );
}