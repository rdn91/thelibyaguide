'use client';

import { Landmark } from 'lucide-react';
import { useSite } from '@/components/layout/Providers';
import { Badge } from '@/components/ui/Badge';
import { SightImage } from '@/components/ui/SightImage';
import type { Sight } from '@/lib/types';
import { ACCESS_LABELS, CATEGORY_LABELS, REGION_LABELS } from '@/lib/utils';

export default function SightCard({ sight, onOpen }: { sight: Sight; onOpen: (s: Sight) => void }) {
  const { lang } = useSite();
  const name = lang === 'ar' ? sight.nameAr : sight.nameEn;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift">
      <div className="relative">
        <SightImage
          image={sight.image}
          alt={sight.nameEn}
          sizes="(min-width:1280px) 400px, (min-width:640px) 50vw, 100vw"
          className="aspect-[4/3] transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
          credit="none"
        />
        <div className="absolute start-3 top-3 flex flex-wrap gap-1.5">
          {sight.unesco && (
            <Badge tone="inverse">
              <Landmark className="size-3" aria-hidden /> UNESCO
            </Badge>
          )}
          <Badge tone={sight.access === 'expedition' ? 'permit' : 'open'} dot>
            {ACCESS_LABELS[sight.access][lang]}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ochre-ink">
          {REGION_LABELS[sight.region][lang]} · {CATEGORY_LABELS[sight.category][lang]}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug">
          <button
            type="button"
            onClick={() => onOpen(sight)}
            className="text-start after:absolute after:inset-0 focus-visible:outline-none"
          >
            {name}
          </button>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {lang === 'ar' ? sight.summaryAr : sight.summaryEn}
        </p>
        <p className="mt-auto pt-4 text-xs font-medium text-muted">{lang === 'ar' ? sight.cityAr : sight.city}</p>
      </div>
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-sea ring-offset-2 opacity-0 group-has-[:focus-visible]:opacity-100"
        aria-hidden
      />
    </article>
  );
}
