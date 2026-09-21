import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import CTASlab from '@/components/sections/CTASlab';
import Icon from '@/components/ui/Icon';
import Eyebrow from '@/components/ui/Eyebrow';
import { products, getProduct } from '@/data/products';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product' };
  return {
    title: product.name,
    description: product.blurb,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — OG Importing & Exporting`,
      description: product.blurb,
      url: `/products/${product.slug}`
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Category ${product.number}`}
        title={<>{product.name}</>}
        lead={product.description}
        tint={product.tint}
        icon={product.icon}
      />

      <section className="sec clear">
        <div className="wrap">
          <div className="sh">
            <div>
              <Eyebrow>Range</Eyebrow>
              <h2 data-r="m">What we supply.</h2>
            </div>
            <p data-r style={{ ['--d' as string]: '120ms' }}>
              Sourced from qualified international manufacturers and delivered to the UAE and GCC.
            </p>
          </div>

          <div className="whygrid">
            {product.features.map((f, i) => (
              <div key={f.title} className="whyc" data-r style={{ ['--d' as string]: `${i * 80}ms` }}>
                <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sh">
            <div>
              <Eyebrow>Applications</Eyebrow>
              <h2 data-r="m">Where it&apos;s used.</h2>
            </div>
            <p data-r style={{ ['--d' as string]: '120ms' }}>
              Typical sectors and applications supplied across the region.
            </p>
          </div>

          <div className="mkgrid">
            {product.applications.map((a, i) => (
              <div key={a} className="mkcell" data-r style={{ ['--d' as string]: `${i * 45}ms` }}>
                <span className="mk-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="mk-t">{a}</span>
              </div>
            ))}
          </div>

          <div className="tiles-foot" data-r>
            <Link className="tl" href="/products">
              <i />Back to all products
              <Icon name="ar" className="ico" />
            </Link>
          </div>
        </div>
      </section>

      <CTASlab />
    </>
  );
}