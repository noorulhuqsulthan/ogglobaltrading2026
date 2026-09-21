import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AccreditationStrip from '@/components/sections/AccreditationStrip';
import Marquee from '@/components/sections/Marquee';
import IntroBand from '@/components/sections/IntroBand';
import ProductPortfolio from '@/components/sections/ProductPortfolio';
import ProductIconStrip from '@/components/sections/ProductIconStrip';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Markets from '@/components/sections/Markets';
import Approvals from '@/components/sections/Approvals';
import CTASlab from '@/components/sections/CTASlab';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Gas, Fire & Safety, Industrial and Oil & Gas Equipment',
  description: site.description,
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccreditationStrip />
      <Marquee />
      <IntroBand />
      <ProductPortfolio />
      <ProductIconStrip />
      <WhyChooseUs />
      <ProcessTimeline />
      <Markets />
      <Approvals />
      <CTASlab />
    </>
  );
}