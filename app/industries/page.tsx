import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Markets from '@/components/sections/Markets';
import CTASlab from '@/components/sections/CTASlab';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Thirteen sectors across the UAE & GCC supplied by OG Importing and Exporting LLC — Oil & Gas, industrial facilities, hospitality, contractors, facilities management and more.',
  alternates: { canonical: '/industries' }
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our markets"
        title={<>Thirteen sectors across the UAE &amp; GCC.</>}
        lead="Positioned to serve customers across the United Arab Emirates and GCC markets."
      />
      <Markets />
      <CTASlab />
    </>
  );
}