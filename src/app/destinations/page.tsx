import type { Metadata } from 'next';
import { Suspense } from 'react';
import DestinationFilterGrid from '@/components/interactive/DestinationFilterGrid';
import { SectionHeading } from '@/components/ui/Card';
import { sights } from '@/lib/utils';

export const metadata: Metadata = {
  title: '30 sights in Libya, from Leptis Magna to the Sahara',
  description:
    'Leptis Magna, Sabratha, Cyrene, the Acacus, Ghadames and 25 more — filter by region, heritage type and access level.',
  alternates: { canonical: '/destinations' },
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <SectionHeading
        as="h1"
        eyebrow="Destinations"
        title="Thirty places, from the Roman coast to the deep Sahara"
        lede="Filter by region, heritage type and how you get there. Every photo is openly licensed from Wikimedia Commons and credited to its photographer."
      />
      <div className="mt-12">
        <Suspense fallback={<div className="h-48" />}>
          <DestinationFilterGrid sights={sights} />
        </Suspense>
      </div>
    </div>
  );
}
