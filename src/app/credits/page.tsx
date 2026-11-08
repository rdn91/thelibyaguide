import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/Card';
import type { ImageCredit } from '@/lib/types';
import { cuisine, sights } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Photo credits & sources',
  description: 'Every photograph on The Libya Guide, with its photographer, licence and Wikimedia Commons source.',
  alternates: { canonical: '/credits' },
};

const ACACUS: ImageCredit = {
  src: '/images/sights/hero-acacus.jpg',
  width: 2000,
  height: 1333,
  author: 'Luca Galuzzi (Lucag)',
  license: 'CC BY-SA 2.5',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Libya_5101_Fozzigiaren_Arch_Tadrart_Acacus_Luca_Galuzzi_2007.jpg',
};

export default function CreditsPage() {
  const rows: { subject: string; href?: string; image: ImageCredit }[] = [
    ...sights.filter((s) => s.image).map((s) => ({ subject: s.nameEn, href: `/destinations/${s.slug}`, image: s.image! })),
    { subject: 'Fozzigiaren Arch, Tadrart Acacus (home hero)', image: ACACUS },
    ...cuisine.dishes.filter((d) => d.image).map((d) => ({ subject: d.nameEn, image: d.image! })),
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <SectionHeading
        as="h1"
        eyebrow="Credits"
        title="Photographs & sources"
        lede="Every photograph comes from Wikimedia Commons under an open licence. Where the licence is CC BY or CC BY-SA, adapted versions are shared under the same terms."
      />

      <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="border-b border-line bg-card/60 text-xs uppercase tracking-[0.12em] text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Subject
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Photographer
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Licence
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r.image.src}>
                <td className="px-4 py-3">
                  {r.href ? (
                    <Link href={r.href} className="font-medium hover:text-sea">
                      {r.subject}
                    </Link>
                  ) : (
                    r.subject
                  )}
                </td>
                <td className="px-4 py-3">
                  <a href={r.image.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sea hover:underline">
                    {r.image.author}
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  {r.image.licenseUrl ? (
                    <a href={r.image.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {r.image.license}
                    </a>
                  ) : (
                    r.image.license
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid gap-8 text-sm leading-relaxed text-muted sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-ink">Text & data</h2>
          <p className="mt-2">
            Coordinates come from Wikipedia articles where available. Advisory summaries paraphrase the US State
            Department and UK FCDO and link to the live pages. Corridor routes are illustrative, not navigational.
          </p>
        </div>
        <div id="contact" className="scroll-mt-24">
          <h2 className="font-display text-xl text-ink">Corrections & traveller accounts</h2>
          <p className="mt-2">
            Found something out of date, or travelled recently and willing to be verified? A contact channel is being
            set up. Until then, corrections go through the project repository.
          </p>
        </div>
      </div>
    </div>
  );
}
