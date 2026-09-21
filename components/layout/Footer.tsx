import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { site } from '@/data/site';
import { products } from '@/data/products';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr chrome">
      <div className="wrap">
        <div className="ftr-g">
          <div>
            <Logo />
            <p>
              Specialised equipment for the Gas, Fire &amp; Safety, Industrial and Oil &amp; Gas
              sectors — imported, supplied and distributed across the UAE and GCC.
            </p>
          </div>

          <div className="fc">
            <h5>Products</h5>
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                {p.name.replace(' Equipment', '').replace(' Suppression', '').replace('IoT for ', '')}
              </Link>
            ))}
          </div>

          <div className="fc">
            <h5>Company</h5>
            <Link href="/about-us">About Us</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/approvals-compliance">Approvals &amp; Compliance</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="fc">
            <h5>Contact</h5>
            <Link href="/contact">Send an enquiry</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </div>
        </div>

        <div className="ftr-w" aria-hidden="true">
          Global products. Local expertise.
        </div>

        <div className="ftr-b">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>{site.region}</span>
        </div>
      </div>
    </footer>
  );
}