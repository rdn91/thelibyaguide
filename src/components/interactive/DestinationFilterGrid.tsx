'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDeferredValue, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Route as RouteIcon } from 'lucide-react';
import { useSite } from '@/components/layout/Providers';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { SightImage } from '@/components/ui/SightImage';
import SightCard from './SightCard';
import type { Access, Category, Region, Sight } from '@/lib/types';
import { ACCESS_LABELS, CATEGORY_LABELS, REGION_LABELS, cn, formatCoords } from '@/lib/utils';

type Filters = { region: Region | 'all'; category: Category | 'all'; access: Access | 'all' };

export function Chips<T extends string>({
  label,
  value,
  options,
  onChange,
  allLabel,
}: {
  label: string;
  value: T | 'all';
  options: { id: T; label: string; count: number }[];
  onChange: (v: T | 'all') => void;
  allLabel: string;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm font-semibold text-muted">{label}</legend>
      <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible">
        {[{ id: 'all' as const, label: allLabel, count: -1 }, ...options].map((o) => {
          const active = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.id as T | 'all')}
              disabled={o.count === 0}
              className={cn(
                'min-h-11 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors active:scale-[0.97]',
                active ? 'border-sea bg-sea text-inverse' : 'border-line bg-white text-ink hover:border-line-strong',
                o.count === 0 && 'opacity-40',
              )}
            >
              {o.label}
              {o.count >= 0 && <span className={cn('ms-1.5 tabular-nums', active ? 'text-inverse/70' : 'text-muted')}>{o.count}</span>}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function DestinationFilterGrid({ sights }: { sights: Sight[] }) {
  const { t, lang } = useSite();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [open, setOpen] = useState<Sight | null>(null);

  // Unknown values (?region=foo) fall back to 'all' instead of emptying the grid.
  const pick = <T extends string>(key: keyof Filters, labels: Record<T, unknown>): T | 'all' => {
    const v = params.get(key);
    return v && Object.hasOwn(labels, v) ? (v as T) : 'all';
  };
  const filters: Filters = {
    region: pick('region', REGION_LABELS),
    category: pick('category', CATEGORY_LABELS),
    access: pick('access', ACCESS_LABELS),
  };

  const setFilter = (key: keyof Filters, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === 'all') next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const matches = (s: Sight, f: Filters, q: string) =>
    (f.region === 'all' || s.region === f.region) &&
    (f.category === 'all' || s.category === f.category) &&
    (f.access === 'all' || s.access === f.access) &&
    (!q || `${s.nameEn} ${s.nameAr} ${s.city} ${s.era ?? ''}`.toLowerCase().includes(q));

  const q = deferredQuery.trim().toLowerCase();
  const results = useMemo(() => sights.filter((s) => matches(s, filters, q)), [sights, filters.region, filters.category, filters.access, q]); // eslint-disable-line react-hooks/exhaustive-deps

  // Facet counts reflect the other active filters, so users never pick into an empty grid.
  const count = (key: keyof Filters, id: string) =>
    sights.filter((s) => matches(s, { ...filters, [key]: id } as Filters, q)).length;

  const anyActive = filters.region !== 'all' || filters.category !== 'all' || filters.access !== 'all' || !!q;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-b border-line bg-ground/90 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
          <SearchInput
            aria-label={t.filters.search}
            placeholder={t.filters.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="self-center text-sm text-muted lg:text-end" aria-live="polite">
            <span className="font-semibold tabular-nums text-ink">{results.length}</span> {t.filters.results}
            {anyActive && (
              <button
                type="button"
                className="ms-3 font-semibold text-sea underline-offset-2 hover:underline"
                onClick={() => {
                  setQuery('');
                  router.replace(pathname, { scroll: false });
                }}
              >
                {t.filters.clear}
              </button>
            )}
          </p>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1.6fr_1fr]">
          <Chips
            label={t.filters.region}
            value={filters.region}
            allLabel={t.filters.all}
            onChange={(v) => setFilter('region', v)}
            options={(Object.keys(REGION_LABELS) as Region[]).map((id) => ({ id, label: REGION_LABELS[id][lang], count: count('region', id) }))}
          />
          <Chips
            label={t.filters.category}
            value={filters.category}
            allLabel={t.filters.all}
            onChange={(v) => setFilter('category', v)}
            options={(Object.keys(CATEGORY_LABELS) as Category[]).map((id) => ({ id, label: CATEGORY_LABELS[id][lang], count: count('category', id) }))}
          />
          <Chips
            label={t.filters.access}
            value={filters.access}
            allLabel={t.filters.all}
            onChange={(v) => setFilter('access', v)}
            options={(Object.keys(ACCESS_LABELS) as Access[]).map((id) => ({ id, label: ACCESS_LABELS[id][lang], count: count('access', id) }))}
          />
        </div>
      </div>

      {results.length === 0 ? (
        <p className="py-24 text-center text-muted">{t.filters.empty}</p>
      ) : (
        <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {results.map((s) => (
              <motion.li
                key={s.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <SightCard sight={s} onOpen={setOpen} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.nameEn ?? ''}>
        {open && (
          <div className="grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-2">
            <SightImage
              image={open.image}
              alt={open.nameEn}
              sizes="(min-width:768px) 512px, 100vw"
              className="aspect-[4/3] md:aspect-auto md:min-h-[32rem]"
            />
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap gap-1.5">
                {open.unesco && <Badge tone="ochre">UNESCO World Heritage</Badge>}
                <Badge tone={open.access === 'expedition' ? 'permit' : 'open'} dot>
                  {ACCESS_LABELS[open.access][lang]}
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight">{lang === 'ar' ? open.nameAr : open.nameEn}</h2>
              {open.era && <p className="mt-1 text-sm text-ochre-ink">{open.era}</p>}
              <p className="mt-4 leading-relaxed text-ink/85">{lang === 'ar' ? open.summaryAr : open.summaryEn}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt>
                    <MapPin className="size-4 text-muted" aria-label="Coordinates" />
                  </dt>
                  <dd className="font-mono text-xs">{formatCoords(open.coordinates)}</dd>
                </div>
                <div className="flex gap-3">
                  <dt>
                    <CalendarDays className="size-4 text-muted" aria-label="Best season" />
                  </dt>
                  <dd>{lang === 'ar' ? open.bestSeasonAr : open.bestSeasonEn}</dd>
                </div>
                {open.distanceEn && (
                  <div className="flex gap-3">
                    <dt>
                      <RouteIcon className="size-4 text-muted" aria-label="Distance" />
                    </dt>
                    <dd>{lang === 'ar' ? open.distanceAr : open.distanceEn}</dd>
                  </div>
                )}
              </dl>
              <Link
                href={`/destinations/${open.slug}`}
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-inverse hover:bg-[#0c3354]"
              >
                Read the full guide <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
