import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import LinkArrow from '@/components/ui/LinkArrow';
import { products } from '@/data/products';

export default function ProductPortfolio() {
  return (
    <section className="sec" id="portfolio">
      <div className="wrap">
        <SectionHeader
          eyebrow="Product portfolio"
          title={<>Six categories.<br />One supply partner.</>}
          description="A growing portfolio of specialised equipment serving the Gas, Fire & Safety, Industrial, Commercial and Oil & Gas sectors."
        />

        <div className="catrail" data-r>
          {products.map((p) => (
            <Link key={p.slug} className={`cr-i t-${p.tint}`} href={`/products/${p.slug}`}>
              <span className="cr-n">{p.number}</span>
              <span className="cr-t">{p.name.replace(' Equipment', '')}</span>
            </Link>
          ))}
        </div>

        <div className="ctiles">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              className={`ctile t-${p.tint}`}
              href={`/products/${p.slug}`}
              data-r
              style={{ ['--d' as string]: `${i * 70}ms` }}
            >
              <span className="ct-shot">
                <Icon name={p.icon} viewBox="0 0 64 64" />
              </span>
              <span className="ct-body">
                <span className="ct-n">Category {p.number}</span>
                <span className="ct-name">{p.name}</span>
                <span className="ct-blurb">{p.blurb}</span>
              </span>
              <Icon name="ar" viewBox="0 0 16 16" className="ct-go" />
            </Link>
          ))}
        </div>

        <div className="tiles-foot" data-r>
          <LinkArrow href="/products">View all products</LinkArrow>
        </div>
      </div>
    </section>
  );
}