import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Compass, Landmark, MapPin, Route as RouteIcon, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow } from '@/components/ui/Card';
import { Credit, SightImage } from '@/components/ui/SightImage';
import type { Sight } from '@/lib/types';
import { ACCESS_LABELS, CATEGORY_LABELS, REGION_LABELS, formatCoords, getSight, sights } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sights.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sight = getSight((await params).slug);
  if (!sight) return {};
  return {
    title: sight.nameEn,
    description: sight.summaryEn,
    openGraph: sight.image ? { images: [sight.image.src] } : undefined,
  };
}

function tips(s: Sight): string[] {
  const out = [
    s.access === 'expedition'
      ? 'Part of the Saharan corridor: your operator arranges the desert permits, a minimum of two vehicles and a local crew.'
      : 'Reached as a day trip from a city base. Foreign visitors still travel with their licensed guide and registered itinerary.',
  ];
  if (s.category === 'classical') out.push('Arrive at opening time. Morning light is kinder to the limestone, and there is almost no shade on site.');
  if (s.category === 'desert') out.push('Winter nights drop below freezing. Pack layers, a headlamp and a buff against wind-blown sand.');
  if (s.category === 'mountains') out.push('Roads climb in tight switchbacks. Allow extra time, and expect cooler air than on the coast.');
  if (s.category === 'coastal') out.push('Old-town streets close early on Fridays. Visit in the morning or after the evening prayer.');
  out.push('Ask before photographing people, checkpoints or security buildings.');
  return out;
}

function distance(a: Sight, b: Sight) {
  return Math.hypot(a.coordinates.lat - b.coordinates.lat, a.coordinates.lng - b.coordinates.lng);
}

export default async function SightPage({ params }: PageProps) {
  const sight = getSight((await params).slug);
  if (!sight) notFound();

  const nearby = sights
    .filter((s) => s.region === sight.region && s.slug !== sight.slug)
    .sort((a, b) => distance(a, sight) - distance(b, sight))
    .slice(0, 3);

  const { lat, lng } = sight.coordinates;
  const osm = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=13/${lat}/${lng}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: sight.nameEn,
    alternateName: sight.nameAr,
    description: sight.summaryEn,
    geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
    image: sight.image ? `https://thelibyaguide.com${sight.image.src}` : undefined,
    sameAs: sight.wikipedia ?? undefined,
  };

  const facts = [
    {
      icon: MapPin,
      term: 'GPS',
      value: (
        <a href={osm} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-sea hover:underline">
          {formatCoords(sight.coordinates)}
        </a>
      ),
    },
    { icon: CalendarDays, term: 'Best time', value: sight.bestSeasonEn },
    ...(sight.distanceEn ? [{ icon: RouteIcon, term: 'Getting there', value: sight.distanceEn }] : []),
    { icon: ShieldCheck, term: 'Access', value: ACCESS_LABELS[sight.access].detail },
  ];

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative isolate overflow-hidden bg-dark text-inverse">
        <SightImage
          image={sight.image}
          alt={sight.nameEn}
          sizes="100vw"
          preload
          credit="none"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark via-dark/40 to-dark/25" aria-hidden />
        <div className="mx-auto flex min-h-[68svh] max-w-7xl flex-col px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 self-start rounded-full bg-dark/45 px-3 py-1.5 text-sm backdrop-blur hover:bg-dark/65"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden /> All destinations
          </Link>
          <div className="mt-auto pt-24">
            <div className="flex flex-wrap gap-2">
              {sight.unesco && (
                <Badge tone="inverse">
                  <Landmark className="size-3" aria-hidden /> UNESCO World Heritage
                </Badge>
              )}
              <Badge tone={sight.access === 'expedition' ? 'permit' : 'open'} dot>
                {ACCESS_LABELS[sight.access].en}
              </Badge>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-balance">{sight.nameEn}</h1>
            <p className="mt-2 font-arabic text-2xl text-ochre" lang="ar" dir="rtl">
              {sight.nameAr}
            </p>
            {sight.image && <Credit image={sight.image} className="mt-6 block w-fit" />}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_22rem] lg:gap-20 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <Eyebrow>
            {REGION_LABELS[sight.region].en} · {CATEGORY_LABELS[sight.category].en}
          </Eyebrow>
          {sight.era && <p className="mt-2 text-sm text-muted">{sight.era}</p>}
          <p className="mt-6 font-display text-2xl leading-snug text-pretty sm:text-3xl">{sight.summaryEn}</p>
          <p className="mt-6 font-arabic text-lg leading-loose text-muted" lang="ar" dir="rtl">
            {sight.summaryAr}
          </p>

          <h2 className="mt-14 font-display text-3xl">What to look for</h2>
          <ol className="mt-6 space-y-4">
            {sight.highlightsEn.map((h, i) => (
              <li key={h} className="flex gap-5 border-t border-line pt-4">
                <span className="font-display text-2xl tabular-nums text-ochre-ink">{String(i + 1).padStart(2, '0')}</span>
                <span className="pt-1.5 leading-relaxed">{h}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 font-display text-3xl">Local tips</h2>
          <ul className="mt-6 space-y-3">
            {tips(sight).map((t) => (
              <li key={t} className="flex gap-3 leading-relaxed">
                <Compass className="mt-1 size-4 shrink-0 text-olive" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
            {facts.map(({ icon: Icon, term, value }) => (
              <div key={term} className="flex gap-3 p-5">
                <Icon className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          {sight.wikipedia && (
            <a
              href={sight.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sea hover:underline"
            >
              Background on Wikipedia <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          <Link href="/logistics#checker" className="mt-6 block rounded-2xl bg-sea p-5 text-inverse transition-colors hover:bg-[#0c3354]">
            <p className="font-display text-xl">Can I visit?</p>
            <p className="mt-1 text-sm text-inverse/80">Four steps: passport, visa path, itinerary, operator.</p>
          </Link>
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-labelledby="nearby-h">
          <h2 id="nearby-h" className="font-display text-3xl">
            Also in {REGION_LABELS[sight.region].en}
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {nearby.map((s) => (
              <li key={s.slug}>
                <Link href={`/destinations/${s.slug}`} className="group block overflow-hidden rounded-2xl border border-line bg-white">
                  <SightImage image={s.image} alt={s.nameEn} sizes="(min-width:640px) 33vw, 100vw" className="aspect-[16/10]" credit="none" />
                  <p className="p-4 font-display text-lg group-hover:text-sea">{s.nameEn}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
