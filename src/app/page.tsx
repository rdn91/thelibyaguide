import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import HeroSlider, { type HeroSlide } from '@/components/interactive/HeroSlider';
import StatusBoard from '@/components/interactive/StatusBoard';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Eyebrow, SectionHeading } from '@/components/ui/Card';
import { SightImage } from '@/components/ui/SightImage';
import type { ImageCredit } from '@/lib/types';
import { CATEGORY_LABELS, REGION_LABELS, cuisine, formatDate, getSight, logistics } from '@/lib/utils';

const ACACUS_ARCH: ImageCredit = {
  src: '/images/sights/hero-acacus.jpg',
  width: 2000,
  height: 1333,
  author: 'Luca Galuzzi (Lucag)',
  license: 'CC BY-SA 2.5',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Libya_5101_Fozzigiaren_Arch_Tadrart_Acacus_Luca_Galuzzi_2007.jpg',
};

function slides(): HeroSlide[] {
  const leptis = getSight('leptis-magna')!;
  const waw = getSight('waw-an-namus')!;
  return [
    { image: leptis.image!, place: 'Leptis Magna, Al Khums', placeAr: 'لبدة الكبرى، الخمس', href: '/destinations/leptis-magna' },
    { image: ACACUS_ARCH, place: 'Fozzigiaren Arch, Tadrart Acacus', placeAr: 'قوس أفازجار، أكاكوس', href: '/destinations/tadrart-acacus' },
    { image: waw.image!, place: 'Waw an Namus crater, Fezzan', placeAr: 'واو الناموس، فزان', href: '/destinations/waw-an-namus' },
  ];
}

const FEATURED = ['leptis-magna', 'cyrene', 'tadrart-acacus', 'ghadames', 'sabratha'] as const;

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function HomePage() {
  const [lead, ...rest] = FEATURED.map((s) => getSight(s)!);
  const us = logistics.advisories.find((a) => a.id === 'us')!;

  return (
    <>
      <HeroSlider slides={slides()} trust={{ advisoryAsOf: us.asOf, reviewed: logistics.lastEditorialReview }} />

      {/* Editorial sights */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="sights-h">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="sights-h"
            eyebrow="Five to start with"
            title="Rome, Greece and the Sahara, without the queue"
            lede="Libya has five UNESCO World Heritage Sites. Few foreign tourists reach them, and on most days the sites are quiet."
          />
          <ButtonLink href="/destinations" variant="secondary" className="shrink-0 self-start lg:self-end">
            All 30 sights <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          <Link
            href={`/destinations/${lead.slug}`}
            className="group relative overflow-hidden rounded-3xl sm:col-span-2 lg:col-span-6 lg:row-span-2"
          >
            <SightImage
              image={lead.image}
              alt={lead.nameEn}
              sizes="(min-width:1024px) 58vw, 100vw"
              className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[36rem]"
              credit="none"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-inverse sm:p-8">
              <Badge tone="inverse">UNESCO World Heritage</Badge>
              <h3 className="mt-3 font-display text-4xl sm:text-5xl">{lead.nameEn}</h3>
              <p className="mt-3 max-w-lg text-inverse/85">{lead.summaryEn}</p>
            </div>
          </Link>
          {rest.map((s) => (
            <Link
              key={s.slug}
              href={`/destinations/${s.slug}`}
              className="group relative overflow-hidden rounded-3xl lg:col-span-3"
            >
              <SightImage
                image={s.image}
                alt={s.nameEn}
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.03] lg:aspect-auto lg:h-full"
                credit="none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-inverse">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ochre">
                  {REGION_LABELS[s.region].en} · {CATEGORY_LABELS[s.category].en}
                </p>
                <h3 className="mt-1 font-display text-2xl">{s.nameEn}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reality Index teaser */}
      <section className="bg-dark text-inverse" aria-labelledby="reality-h">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow className="text-ochre">The Reality Index</Eyebrow>
              <h2 id="reality-h" className="mt-3 font-display text-4xl leading-[1.05] text-balance sm:text-5xl">
                We don&apos;t ask you to ignore the warnings. We ask you to read them closely.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-inverse/75">
                Every claim in Western advisories set beside how escorted tourism actually works here — and what you can
                check for yourself before you pay a deposit.
              </p>
              <ButtonLink href="/is-libya-safe" variant="inverse" size="lg" className="mt-8">
                Open the Reality Index <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </ButtonLink>
            </div>
            <figure className="self-start rounded-3xl border border-inverse/15 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="closed">{us.rating}</Badge>
                <span className="text-xs text-inverse/60">
                  {us.issuer} · {formatDate(us.asOf)}
                </span>
              </div>
              <blockquote className="mt-5 font-display text-2xl leading-snug">{us.summary}</blockquote>
              <figcaption className="mt-6 border-t border-inverse/15 pt-5 text-sm leading-relaxed text-inverse/75">
                <span className="font-semibold text-inverse">How tourism works around it: </span>
                {logistics.realityIndex[1].ground}
              </figcaption>
              <a
                href={us.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ochre hover:underline"
              >
                Read the original advisory <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </figure>
          </div>

          <div className="mt-20">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-display text-2xl">Entry points & routes</h3>
              <Link href="/logistics" className="text-sm font-semibold text-ochre hover:underline">
                Full logistics →
              </Link>
            </div>
            <StatusBoard items={logistics.statusBoard} dark />
          </div>
        </div>
      </section>

      {/* Corridor protocol */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="corridor-h">
        <SectionHeading
          id="corridor-h"
          eyebrow="The Guided Corridor Protocol"
          title="Three tiers, one rule: you never travel alone"
          lede="How this guide classifies access. It's an editorial model built from how licensed operators work today, not an official government zoning."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {logistics.corridor.map((c) => (
            <li key={c.tier} className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-line-strong" aria-hidden>
                  {c.tier}
                </span>
                <Badge tone={c.tone} dot>
                  {c.badge}
                </Badge>
              </div>
              <h3 className="mt-6 font-display text-2xl">{c.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.covers.join(' · ')}</p>
            </li>
          ))}
        </ol>
        <ButtonLink href="/logistics#corridor" variant="ghost" className="mt-8 -ms-4">
          See the corridor map and rules <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
        </ButtonLink>
      </section>

      {/* Taste + local bridge */}
      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8" aria-label="Food and local weekends">
        <Link href="/taste-culture" className="group overflow-hidden rounded-3xl bg-card">
          <SightImage
            image={cuisine.dishes[0].image}
            alt="Bazeen, Libya's barley-dough centrepiece"
            sizes="(min-width:1024px) 50vw, 100vw"
            className="aspect-[16/10]"
            credit="none"
          />
          <div className="p-6 sm:p-8">
            <Eyebrow>Taste & culture</Eyebrow>
            <h3 className="mt-2 font-display text-3xl group-hover:text-sea">Bazeen on Friday, tea in three glasses</h3>
            <p className="mt-3 text-muted">Seven dishes, the tea ritual and the table manners to know.</p>
          </div>
        </Link>
        <Link href="/local" className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-olive p-6 text-inverse sm:p-8">
          <div>
            <Eyebrow className="text-[#e6cfa9]">For locals</Eyebrow>
            <h3 className="mt-2 font-display text-3xl">Local weekends and where to shop</h3>
            <p className="mt-3 max-w-md text-inverse/80">
              Day trips from Tripoli and Benghazi, Friday-lunch etiquette, and the market clusters worth the drive.
            </p>
          </div>
          <ul className="mt-10 space-y-3">
            {cuisine.local.weekendIdeas.slice(0, 3).map((w) => (
              <li key={w.title} className="flex items-center justify-between gap-4 border-t border-inverse/20 pt-3 text-sm">
                <span>{w.title}</span>
                <span className="shrink-0 tabular-nums text-inverse/70">{w.drive}</span>
              </li>
            ))}
          </ul>
        </Link>
      </section>
    </>
  );
}
