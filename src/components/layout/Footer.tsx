import Link from 'next/link';
import { logistics, formatDate } from '@/lib/utils';

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { href: '/destinations', label: '30 flagship sights' },
      { href: '/destinations?category=classical', label: 'Roman & Greek' },
      { href: '/destinations?category=desert', label: 'The Sahara' },
      { href: '/local', label: 'Local weekends' },
    ],
  },
  {
    title: 'Plan',
    links: [
      { href: '/logistics', label: 'e-Visa & LOI' },
      { href: '/logistics#corridor', label: 'Guided Corridor Protocol' },
      { href: '/logistics#checker', label: 'Can I visit?' },
      { href: '/travel-advisory-debunked', label: 'Reality Index' },
    ],
  },
  {
    title: 'Culture',
    links: [
      { href: '/taste-culture', label: 'Bazeen, mbakbka & tea' },
      { href: '/taste-culture#etiquette', label: 'Etiquette' },
      { href: '/credits', label: 'Photo credits' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-dark text-inverse">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <p className="font-display text-2xl">The Libya Guide</p>
            <p className="mt-1 font-arabic text-ochre" lang="ar">
              دليل ليبيا
            </p>
            <p className="mt-6 text-sm leading-relaxed text-inverse/70">
              An independent editorial guide. We don&apos;t sell tours. Government advisories are quoted with their
              dates and linked to the originals. Read them, and our Reality Index, and make your own call.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-inverse/80 transition-colors hover:text-inverse">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-inverse/15 pt-6 text-xs text-inverse/60 sm:flex-row sm:justify-between">
          <p>Editorial review: {formatDate(logistics.lastEditorialReview)}. Statuses are set by editors, not a live feed.</p>
          <p>
            Photography via{' '}
            <Link href="/credits" className="underline underline-offset-2 hover:text-inverse">
              Wikimedia Commons contributors
            </Link>
            . Map data © OpenStreetMap contributors.
          </p>
        </div>
      </div>
    </footer>
  );
}
