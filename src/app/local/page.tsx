import type { Metadata } from 'next';
import Link from 'next/link';
import LocalFeed, { type FeedItem, type LocalRegion, type LocalType } from '@/components/interactive/LocalFeed';
import { SightImage } from '@/components/ui/SightImage';
import type { Region, Sight } from '@/lib/types';
import { cuisine, getSight, sights } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Local weekends — day trips, Friday lunch & markets',
  description:
    'For residents of Tripoli, Benghazi and the mountains: weekend day trips, Friday etiquette and the market clusters for finding what you need.',
  alternates: { canonical: '/local' },
};

const CITY_REGION: Record<string, LocalRegion> = { Tripoli: 'tripolitania', Benghazi: 'cyrenaica' };
// Derna is left out of the feed until its page covers the 2023 flood (research, discrepancy 21).
const NOT_IN_FEED = new Set(['derna-waterfalls']);

const local = (r: Region): r is LocalRegion => r !== 'fezzan';
// Desert sights are filtered out before this is called.
const localType = (s: Sight) => s.category as LocalType;

function buildFeed(): FeedItem[] {
  const { weekendIdeas, marketClusters } = cuisine.local;

  const weekends: FeedItem[] = weekendIdeas.map((w) => {
    const stops = w.sights.map((slug) => {
      const s = getSight(slug);
      if (!s) throw new Error(`cuisine.json weekend "${w.title}": unknown sight "${slug}"`);
      return s;
    });
    return {
      kind: 'weekend',
      key: `w-${w.title}`,
      title: w.title,
      body: w.body,
      from: w.from,
      drive: w.drive,
      image: stops[0]?.image ?? null,
      stops: stops.map(({ slug, nameEn, nameAr }) => ({ slug, nameEn, nameAr })),
      regions: [...new Set(stops.map((s) => s.region).filter(local))],
      type: localType(stops[0]),
    };
  });

  // Places already reached by a weekend idea are linked from its card instead of repeated.
  const inWeekends = new Set(weekendIdeas.flatMap((w) => w.sights));
  const places: FeedItem[] = sights
    .filter(
      (s) =>
        s.access === 'day-trip' &&
        s.category !== 'desert' &&
        local(s.region) &&
        s.image &&
        !NOT_IN_FEED.has(s.slug) &&
        !inWeekends.has(s.slug),
    )
    .map((s) => ({
      kind: 'place',
      key: `p-${s.slug}`,
      slug: s.slug,
      nameEn: s.nameEn,
      nameAr: s.nameAr,
      summaryEn: s.summaryEn,
      summaryAr: s.summaryAr,
      city: s.city,
      cityAr: s.cityAr,
      image: s.image!,
      regions: [s.region as LocalRegion],
      type: localType(s),
    }));

  // Facts from docs/research/libya-verified-facts.md §5.
  const extras: FeedItem[] = [
    {
      kind: 'note',
      key: 'n-beaches',
      title: 'Beach days',
      body: 'Janzour, west of Tripoli, is busy with families at weekends; Zuwara is quieter. Benghazi’s El-Hamra and Juliana beaches are busiest in July and August.',
      regions: ['tripolitania', 'cyrenaica'],
      type: 'coastal',
    },
    ...marketClusters.map<FeedItem>((m) => ({
      kind: 'market',
      key: `m-${m.name}`,
      name: m.name,
      city: m.city,
      body: m.body,
      find: m.find,
      regions: [CITY_REGION[m.city] ?? 'tripolitania'],
      type: 'market',
    })),
    {
      kind: 'note',
      key: 'n-summer',
      title: 'The summer escape',
      body: 'The Green Mountain is the classic way out of the coastal heat: cooler air and forest around Al Bayda, Shahat and Wadi al-Kuf.',
      regions: ['cyrenaica'],
      type: 'mountains',
    },
  ];

  // Interleave like a feed: one weekend, two places, one note or market, repeat.
  const rounds = Math.max(weekends.length, Math.ceil(places.length / 2), extras.length);
  return Array.from({ length: rounds }, (_, i) => [
    weekends[i],
    ...places.slice(i * 2, i * 2 + 2),
    extras[i],
  ]).flat().filter(Boolean);
}

const HERO = ['gharyan-troglodytes', 'ras-al-helal', 'jabal-al-akhdar'] as const;

export default function LocalPage() {
  const [big, ...small] = HERO.map((s) => getSight(s)!);
  const friday = cuisine.etiquette[0];

  return (
    <>
      <section className="bg-olive text-inverse" aria-labelledby="local-h">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h1 id="local-h" dir="auto" className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-balance">
              Your country, one weekend at a time.
            </h1>
            <p className="mt-3 font-arabic text-2xl text-[#e6cfa9]" lang="ar" dir="rtl">
              بلادك، عطلة بعد عطلة
            </p>
            <p dir="auto" className="mt-6 max-w-xl text-lg leading-relaxed text-inverse/90">
              Drives that fit between Friday lunch and sunset, the coast and the mountains, and where to find what you need
              in the city. Residents don&apos;t need an escort. Foreign visitors joining you still do.
            </p>
            <a
              href="#feed"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-inverse px-6 text-[15px] font-semibold text-ink transition-transform hover:bg-white active:scale-[0.98]"
            >
              Find a weekend
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <SightImage
              image={big.image}
              alt={big.nameEn}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="col-span-2 aspect-[16/9] rounded-2xl"
              preload
            />
            {small.map((s) => (
              <SightImage key={s.slug} image={s.image} alt={s.nameEn} sizes="(min-width:1024px) 25vw, 50vw" className="aspect-[4/3] rounded-2xl" />
            ))}
          </div>
        </div>
      </section>

      <section id="feed" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="feed-h">
        <h2 id="feed-h" dir="auto" className="font-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
          Where to this weekend?
        </h2>
        <div className="mt-8">
          <LocalFeed items={buildFeed()} />
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
          Market clusters will grow into a directory of resident-submitted spots. Individual shops are listed only after
          they&apos;ve been checked.
        </p>
      </section>

      <section className="bg-card" aria-labelledby="drive-h">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 id="drive-h" className="font-display text-3xl leading-[1.1] sm:text-4xl">
              Before you drive
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Check road conditions and local news before a long drive, especially on the western coastal road and anywhere
              in the south. Summer brings power cuts and fuel shortages, so plan your fuel stops.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              The Ghadames, Ghat and Nalut festivals have run in past years, but no 2026–27 dates are confirmed. We&apos;ll
              list them once they&apos;re announced.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ['Coast & mountains', 'Best from October to May.'],
              ['Swimming', 'May or June to October, busiest in July and August.'],
              ['Sahara', 'November to March. Avoid June to August, when it passes 40°C.'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xl">{k}</dt>
                <dd className="mt-1 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24" aria-labelledby="friday-h">
        <div className="rounded-3xl bg-dark p-8 text-inverse sm:p-12">
          <h2 id="friday-h" className="font-display text-3xl">
            {friday.title}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-inverse/85">{friday.body}</p>
          <Link
            href="/taste-culture#etiquette"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-ochre hover:underline"
          >
            All etiquette notes →
          </Link>
        </div>
      </section>
    </>
  );
}
