import Icon from '@/components/ui/Icon';
import { accreditationItems } from '@/data/facts';

export default function AccreditationStrip() {
  return (
    <div className="accred">
      <div className="wrap accred-in">
        <span className="lb">Working toward</span>
        <ul>
          {accreditationItems.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} viewBox="0 0 32 32" size={15} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}