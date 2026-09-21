import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Approvals from '@/components/sections/Approvals';
import CTASlab from '@/components/sections/CTASlab';

export const metadata: Metadata = {
  title: 'Approvals & Compliance',
  description:
    'Compliance with Civil Defense, Department of Energy requirements and ISO 9001:2015 (under process) for gas, fire & safety and industrial products across the UAE.',
  alternates: { canonical: '/approvals-compliance' }
};

export default function ApprovalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Approvals & compliance"
        title={<>Compliance is part of the business.</>}
        lead="Depending on the product, application and intended installation, we work toward the necessary approvals from the relevant UAE authorities."
      />
      <Approvals />
      <CTASlab />
    </>
  );
}