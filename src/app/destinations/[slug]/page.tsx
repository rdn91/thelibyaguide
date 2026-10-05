import React from 'react';
import { notFound } from 'next/navigation';
import { destinations } from '@/data/destinations';
import { operators } from '@/data/operators';
import DestinationClientView from './DestinationClientView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Find operators covering this destination's region
  const relevantOperators = operators.filter((op) =>
    op.operatingRegions.some(
      (r) => r.toLowerCase() === destination.region.toLowerCase()
    )
  );

  return (
    <DestinationClientView
      destination={destination}
      relevantOperators={relevantOperators}
    />
  );
}
