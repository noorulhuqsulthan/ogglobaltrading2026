import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactSection from '@/components/sections/ContactSection';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Send an enquiry to OG Importing and Exporting LLC. Gas, fire & safety, industrial and Oil & Gas equipment across the UAE and GCC.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s discuss your requirement.</>}
        lead="Tell us the application and specification — we'll identify suitable products and come back to you."
      />
      <ContactSection
        email={site.email}
        phone={site.phone}
        phoneHref={site.phoneHref}
        location={site.location}
      />
    </>
  );
}