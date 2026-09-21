import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import IntroBand from '@/components/sections/IntroBand';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CTASlab from '@/components/sections/CTASlab';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'OG Importing and Exporting LLC is a UAE-based trading company specialising in the import, supply and distribution of specialised equipment for Gas, Fire & Safety, Industrial and Oil & Gas sectors across the UAE and GCC.',
  alternates: { canonical: '/about-us' },
  openGraph: { title: 'About — OG Importing & Exporting', url: '/about-us' }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Connecting global suppliers with the UAE &amp; GCC.</>}
        lead={site.description}
      />
      <IntroBand />
      <WhyChooseUs />
      <ProcessTimeline />
      <CTASlab />
    </>
  );
}