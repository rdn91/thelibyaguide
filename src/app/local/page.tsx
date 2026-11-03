import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, MapPinned, Store } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow, SectionHeading } from '@/components/ui/Card';
import { SightImage } from '@/components/ui/SightImage';
import { cuisine, getSight } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Local weekends — day trips, Friday lunch & markets',
  description:
    'For residents of Tripoli, Benghazi and the mountains: weekend day trips, Friday etiquette and the market clusters for finding what you need.',
};

export default function LocalPage() {
  const { weekendIdeas, marketClusters } = cuisine.local;
  return (
    <>
      <section className="bg-olive text-inverse">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Badge tone="inverse">Phase 2 · Early preview</Badge>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-balance">
            Your country, one weekend at a time.
          </h1>
          <p className="mt-2 font-arabic text-2xl text-[#e6cfa9]" lang="ar" dir="rtl">
            بلادك، عطلة بعد عطلة
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-inverse/85">
            The same guide, turned inward: drives that fit between Friday lunch and sunset, and where to find what you
            need in the city. Residents don&apos;t need an escort. Foreign visitors joining you still do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="weekends-h">
        <SectionHeading id="weekends-h" eyebrow="Weekend drives" title="Five escapes from the city" />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {weekendIdeas.map((w) => {
            const first = getSight(w.sights[0]);
            return (
              <li key={w.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <SightImage
                  image={first?.image ?? null}
                  alt={first?.nameEn ?? w.title}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="aspect-[16/10]"
                  credit="none"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ochre-ink">
                    <Car className="size-3.5" aria-hidden /> From {w.from} · {w.drive}
                  </p>
                  <h3 className="mt-2 font-display text-xl">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                  <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4">
                    {w.sights.map((slug) => {
                      const s = getSight(slug);
                      return s ? (
                        <Link key={slug} href={`/destinations/${slug}`} className="text-xs font-semibold text-sea hover:underline">
                          {s.nameEn} →
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="markets" className="scroll-mt-24 bg-card/60" aria-labelledby="markets-h">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            id="markets-h"
            eyebrow="Where to find my stuff"
            title="Market clusters, by what you need"
            lede="The first districts in a directory that will grow with resident submissions. Individual shops are listed only after they've been checked."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {marketClusters.map((m) => (
              <li key={m.name} className="rounded-2xl border border-line bg-white p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  <MapPinned className="size-3.5" aria-hidden /> {m.city}
                </p>
                <h3 className="mt-2 font-display text-2xl">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Good for">
                  {m.find.map((f) => (
                    <li key={f}>
                      <Badge tone="neutral">{f}</Badge>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-dashed border-line-strong p-6 md:col-span-3 md:flex-row md:items-center md:gap-6">
              <Store className="size-8 shrink-0 text-olive" aria-hidden />
              <p className="text-sm leading-relaxed text-muted">
                Coming next: searchable clusters for electronics, car parts, building supplies and family services in
                Tripoli, Benghazi and Misrata, plus resident-submitted spots with a verification step.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-dark p-8 text-inverse sm:p-12">
          <Eyebrow className="text-ochre">Friday</Eyebrow>
          <h2 className="mt-2 font-display text-3xl">{cuisine.etiquette[0].title}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-inverse/80">{cuisine.etiquette[0].body}</p>
          <Link href="/taste-culture#etiquette" className="mt-6 inline-block text-sm font-semibold text-ochre hover:underline">
            All etiquette notes →
          </Link>
        </div>
      </section>
    </>
  );
}
