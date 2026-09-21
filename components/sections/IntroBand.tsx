import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import LinkArrow from '@/components/ui/LinkArrow';
import MarketMap from '@/components/visuals/MarketMap';
import { introFacts } from '@/data/facts';

export default function IntroBand() {
  return (
    <section className="sec tight clear">
      <div className="wrap">
        <div className="introband">
          <div className="ib-copy">
            <div data-r><Eyebrow>Who we are</Eyebrow></div>
            <h2 data-r="m">Connecting global suppliers with the UAE &amp; GCC.</h2>
            <p className="lead" data-r style={{ ['--d' as string]: '140ms' }}>
              A UAE-based trading company specialising in the import, supply and distribution of
              specialised equipment and systems for the Gas, Fire &amp; Safety, Industrial,
              Oil &amp; Gas and Commercial sectors.
            </p>
            <p className="body-text" data-r style={{ ['--d' as string]: '210ms' }}>
              We work with international manufacturers and suppliers to source reliable products
              and make them available to customers across the United Arab Emirates and GCC markets —
              with documentation, customs clearance and compliance handled as part of the supply.
            </p>
            <div className="ib-act" data-r style={{ ['--d' as string]: '280ms' }}>
              <Link className="btn" href="/about-us"><i />About the company</Link>
              <LinkArrow href="/approvals-compliance">Approvals &amp; compliance</LinkArrow>
            </div>
          </div>

          <div className="ib-visual">
            <MarketMap />
            <div className="ib-facts">
              {introFacts.map((f, i) => (
                <div className="ib-fact" key={f.title} data-r style={{ ['--d' as string]: `${300 + i * 60}ms` }}>
                  <b>{f.title}</b>
                  <span>{f.body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}