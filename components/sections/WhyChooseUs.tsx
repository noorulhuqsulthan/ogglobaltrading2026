import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { whyChooseUs } from '@/data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <SectionHeader
          eyebrow="Why choose us"
          title={<>Six reasons customers<br />work with us.</>}
          description="Global sourcing capability paired with local market knowledge and a compliance-first approach to every supply."
        />
        <div className="whygrid">
          {whyChooseUs.map((item, i) => (
            <div className="whyc" key={item.title} data-r style={{ ['--d' as string]: `${i * 80}ms` }}>
              <span className="why-ico">
                <Icon name={item.icon} viewBox="0 0 32 32" />
              </span>
              <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}