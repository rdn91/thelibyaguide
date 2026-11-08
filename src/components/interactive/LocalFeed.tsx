'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowRight, Car } from 'lucide-react';
import { useSite } from '@/components/layout/Providers';
import { SightImage } from '@/components/ui/SightImage';
import { Chips } from './DestinationFilterGrid';
import type { ImageCredit, Region } from '@/lib/types';
import { REGION_LABELS, cn } from '@/lib/utils';

export type LocalType = 'coastal' | 'mountains' | 'classical' | 'market';
export type LocalRegion = Exclude<Region, 'fezzan'>;

const TYPE_LABELS: Record<LocalType, { en: string; ar: string }> = {
  coastal: { en: 'Coast & city', ar: 'ساحل ومدن' },
  mountains: { en: 'Mountains & valleys', ar: 'جبال ووديان' },
  classical: { en: 'Ruins & history', ar: 'آثار وتاريخ' },
  market: { en: 'Markets', ar: 'أسواق' },
};

const REGIONS: LocalRegion[] = ['tripolitania', 'nafusa', 'cyrenaica'];

type Base = { key: string; regions: LocalRegion[]; type: LocalType };
type Stop = { slug: string; nameEn: string; nameAr: string };

export type FeedItem = Base &
  (
    | { kind: 'weekend'; title: string; body: string; from: string; drive: string; image: ImageCredit | null; stops: Stop[] }
    | { kind: 'place'; slug: string; nameEn: string; nameAr: string; summaryEn: string; summaryAr: string; city: string; cityAr: string; image: ImageCredit }
    | { kind: 'market'; name: string; city: string; body: string; find: string[] }
    | { kind: 'note'; title: string; body: string }
  );

type Filters = { region: LocalRegion | 'all'; type: LocalType | 'all' };

const matches = (i: FeedItem, f: Filters) =>
  (f.region === 'all' || i.regions.includes(f.region)) && (f.type === 'all' || i.type === f.type);

export default function LocalFeed({ items }: { items: FeedItem[] }) {
  const { t, lang } = useSite();
  const [filters, setFilters] = useState<Filters>({ region: 'all', type: 'all' });
  const results = useMemo(() => items.filter((i) => matches(i, filters)), [items, filters]);
  const count = (key: keyof Filters, id: string) => items.filter((i) => matches(i, { ...filters, [key]: id } as Filters)).length;
  const ar = lang === 'ar';

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        <Chips
          label={t.filters.region}
          value={filters.region}
          allLabel={t.filters.all}
          onChange={(region) => setFilters((f) => ({ ...f, region }))}
          options={REGIONS.map((id) => ({ id, label: REGION_LABELS[id][lang], count: count('region', id) }))}
        />
        <Chips
          label={t.filters.type}
          value={filters.type}
          allLabel={t.filters.all}
          onChange={(type) => setFilters((f) => ({ ...f, type }))}
          options={(Object.keys(TYPE_LABELS) as LocalType[]).map((id) => ({ id, label: TYPE_LABELS[id][lang], count: count('type', id) }))}
        />
      </div>
      <p className="mt-4 text-sm text-muted" aria-live="polite">
        <span className="font-semibold tabular-nums text-ink">{results.length}</span> {t.filters.ideas}
      </p>

      {results.length === 0 ? (
        <p className="py-24 text-center text-muted">{t.filters.empty}</p>
      ) : (
        <motion.ul layout className="mt-6 grid grid-flow-dense gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {results.map((item) => (
              <motion.li
                key={item.key}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(item.kind === 'weekend' && 'sm:col-span-2')}
              >
                <FeedCard item={item} ar={ar} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </MotionConfig>
  );
}

function FeedCard({ item, ar }: { item: FeedItem; ar: boolean }) {
  const lang = ar ? 'ar' : 'en';
  switch (item.kind) {
    case 'weekend':
      return (
        <article className="grid h-full overflow-hidden rounded-2xl bg-card lg:grid-cols-[1.25fr_1fr]">
          <SightImage
            image={item.image}
            alt={item.stops[0]?.nameEn ?? item.title}
            sizes="(min-width:1024px) 40vw, (min-width:640px) 100vw, 100vw"
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]"
          />
          <div className="flex flex-col p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-ochre-ink">
              <Car className="size-4" aria-hidden /> {item.drive} from {item.from}
            </p>
            <h3 dir="auto" className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{item.title}</h3>
            <p dir="auto" className="mt-3 leading-relaxed">{item.body}</p>
            <ul className="mt-auto flex flex-wrap gap-x-5 pt-4">
              {item.stops.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/destinations/${s.slug}`}
                    className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-sea underline-offset-4 hover:underline"
                  >
                    {ar ? s.nameAr : s.nameEn} <ArrowRight className="size-3.5 rtl:rotate-180" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      );
    case 'place':
      return (
        <Link href={`/destinations/${item.slug}`} className="group block rounded-2xl">
          <SightImage
            image={item.image}
            alt={item.nameEn}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="aspect-[4/3] rounded-2xl"
            credit="none"
          />
          <h3 className="mt-4 font-display text-xl leading-snug group-hover:text-sea">{ar ? item.nameAr : item.nameEn}</h3>
          <p className="mt-1 text-sm text-muted">
            {REGION_LABELS[item.regions[0]][lang]} · {ar ? item.cityAr : item.city}
          </p>
          <p className="mt-2 line-clamp-2 leading-relaxed">{ar ? item.summaryAr : item.summaryEn}</p>
        </Link>
      );
    case 'market':
      return (
        <article className="flex h-full flex-col rounded-2xl bg-olive p-6 text-inverse sm:p-8">
          <p className="text-sm text-inverse/75">
            {TYPE_LABELS.market[lang]} · {item.city}
          </p>
          <h3 dir="auto" className="mt-2 font-display text-2xl leading-tight">{item.name}</h3>
          <p dir="auto" className="mt-3 leading-relaxed text-inverse/90">{item.body}</p>
          <p className="mt-auto pt-6 text-sm leading-relaxed text-[#e6cfa9]">{item.find.join(' · ')}</p>
        </article>
      );
    case 'note':
      return (
        <article className="flex h-full flex-col rounded-2xl bg-sea-soft p-6 sm:p-8">
          <h3 dir="auto" className="font-display text-2xl leading-tight text-sea">{item.title}</h3>
          <p dir="auto" className="mt-3 leading-relaxed">{item.body}</p>
        </article>
      );
  }
}
