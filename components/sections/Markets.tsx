import SectionHeader from '@/components/ui/SectionHeader';
import LinkArrow from '@/components/ui/LinkArrow';
import { industries } from '@/data/industries';

export default function Markets() {
  return (
    <section className="sec" id="markets">
      <div className="wrap">
        <SectionHeader
          eyebrow="Our markets"
          title={<>Thirteen sectors<br />across the UAE &amp; GCC.</>}
          description="Positioned to serve customers across the United Arab Emirates and GCC markets."
        />
        <div className="mkgrid">
          {industries.map((name, i) => (
            <div className="mkcell" key={name} data-r style={{ ['--d' as string]: `${i * 45}ms` }}>
              <span className="mk-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="mk-t">{name}</span>
            </div>
          ))}
        </div>
        <div className="tiles-foot" data-r>
          <LinkArrow href="/industries">All industries we supply</LinkArrow>
        </div>
      </div>
    </section>
  );
}