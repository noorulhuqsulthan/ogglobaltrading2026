import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Approvals from '@/components/sections/Approvals';
import CTASlab from '@/components/sections/CTASlab';

export const metadata: Metadata = {
  title: 'Quality',
  description:
    'Our quality approach: verified international sourcing, technical and commercial evaluation and documented processes — with ISO 9001:2015 certification currently under process.',
  alternates: { canonical: '/quality' }
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={<>Quality is built into every stage.</>}
        lead="From supplier selection and technical evaluation through to delivery — every step is documented and reviewed."
      />
      <WhyChooseUs />
      <ProcessTimeline />
      <Approvals />
      <CTASlab />
    </>
  );
}