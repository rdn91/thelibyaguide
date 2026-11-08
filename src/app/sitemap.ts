import type { MetadataRoute } from 'next';
import { logistics, sights } from '@/lib/utils';

const BASE = 'https://thelibyaguide.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Every page was fact-checked in the same editorial review, so they share its date.
  const lastModified = logistics.lastEditorialReview;
  const routes = ['', '/is-libya-safe', '/logistics', '/destinations', '/taste-culture', '/local', '/credits'];
  return [
    ...routes.map((r) => ({ url: `${BASE}${r}`, lastModified })),
    ...sights.map((s) => ({ url: `${BASE}/destinations/${s.slug}`, lastModified })),
  ];
}
