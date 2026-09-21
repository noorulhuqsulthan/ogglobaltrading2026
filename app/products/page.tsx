import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ProductPortfolio from '@/components/sections/ProductPortfolio';
import ProductIconStrip from '@/components/sections/ProductIconStrip';
import CTASlab from '@/components/sections/CTASlab';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Six specialised product families: gas equipment, fire alarm equipment, firefighting equipment, kitchen hood suppression, industrial gas equipment and IoT for Oil & Gas.',
  alternates: { canonical: '/products' }
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product portfolio"
        title={<>Six categories. One supply partner.</>}
        lead="A growing portfolio of specialised equipment serving the Gas, Fire & Safety, Industrial, Commercial and Oil & Gas sectors."
      />
      <ProductPortfolio />
      <ProductIconStrip />
      <CTASlab />
    </>
  );
}