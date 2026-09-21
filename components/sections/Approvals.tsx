import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import LinkArrow from '@/components/ui/LinkArrow';
import { approvals } from '@/data/approvals';

export default function Approvals() {
  return (
    <section className="sec" id="approvals">
      <div className="wrap">
        <SectionHeader
          eyebrow="Approvals & compliance"
          title={<>Compliance is part<br />of the business.</>}
          description="Depending on the product, application and intended installation, we work toward the necessary approvals from the relevant UAE authorities."
        />

        <div className="band">
          {approvals.map((a, i) => (
            <div className="bnd" key={a.title} data-r style={{ ['--d' as string]: `${i * 120}ms` }}>
              <span className="seal-i">
                <Icon name={a.icon} viewBox="0 0 32 32" />
              </span>
              <span className="bk">{a.kind}</span>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        <div className="tiles-foot" data-r>
          <LinkArrow href="/approvals-compliance">Approvals &amp; compliance</LinkArrow>
        </div>
      </div>
    </section>
  );
}