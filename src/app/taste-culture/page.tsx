import type { Metadata } from 'next';
import { Flame } from 'lucide-react';
import { Eyebrow, SectionHeading } from '@/components/ui/Card';
import { SightImage } from '@/components/ui/SightImage';
import { cuisine } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Taste & culture — bazeen, mbakbka, tea and etiquette',
  description:
    "Libya's signature dishes, the three-glass tea ritual, where to eat, and the table manners and customs that matter to visitors.",
  alternates: { canonical: '/taste-culture' },
};

function Heat({ level }: { level: number }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-0.5" role="img" aria-label={`Heat ${level} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Flame key={i} className={i < level ? 'size-3.5 text-closed' : 'size-3.5 text-line-strong'} aria-hidden />
      ))}
    </span>
  );
}

export default function TasteCulturePage() {
  const [lead, ...dishes] = cuisine.dishes;
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <Eyebrow>Taste & culture</Eyebrow>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-balance">
          A cuisine of Friday tables, shared bowls and very strong tea.
        </h1>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8" aria-labelledby="lead-dish">
        <SightImage image={lead.image} alt={lead.nameEn} sizes="(min-width:1024px) 50vw, 100vw" className="aspect-[4/3] rounded-3xl" />
        <div>
          <p className="font-arabic text-2xl text-ochre-ink" lang="ar" dir="rtl">
            {lead.nameAr}
          </p>
          <h2 id="lead-dish" className="mt-2 font-display text-4xl sm:text-5xl">
            {lead.nameEn}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{lead.descriptionEn}</p>
          <p className="mt-4 leading-relaxed text-muted">{lead.loreEn}</p>
          <p className="mt-6 border-s-2 border-ochre ps-4 text-sm leading-relaxed">
            <span className="font-semibold">How to eat it: </span>
            {lead.eatingProtocolEn}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="dishes-h">
        <SectionHeading id="dishes-h" eyebrow="The table" title="Six more to order by name" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => (
            <li key={d.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              {d.image ? (
                <SightImage image={d.image} alt={d.nameEn} sizes="(min-width:1024px) 33vw, 50vw" className="aspect-[16/10]" />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center bg-card" aria-hidden>
                  <span className="font-arabic text-4xl text-ochre-ink" lang="ar" dir="rtl">
                    {d.nameAr}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl">{d.nameEn}</h3>
                  <Heat level={d.spiciness} />
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ochre-ink">{d.originEn}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.descriptionEn}</p>
                {d.image?.caption && <p className="mt-3 text-xs italic text-muted">Photo: {d.image.caption}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-olive text-inverse" aria-labelledby="tea-h">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <Eyebrow className="text-[#e6cfa9]">The tea ritual</Eyebrow>
            <h2 id="tea-h" className="mt-3 font-display text-4xl sm:text-5xl">
              {cuisine.tea.title}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-inverse/90">{cuisine.tea.body}</p>
            <ol className="mt-8 grid grid-cols-3 gap-3 text-center">
              {['Bold', 'Softer', 'Mint or nuts'].map((g, i) => (
                <li key={g} className="rounded-2xl bg-inverse/10 p-4">
                  <span className="block font-display text-3xl tabular-nums">{i + 1}</span>
                  <span className="mt-1 block text-xs text-inverse/85">{g}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="eat-h">
        <SectionHeading
          id="eat-h"
          eyebrow="Where to eat"
          title="Four kinds of table"
          lede="We don't list individual restaurants until we've confirmed they're open. Your guide's own lunch spot is usually better than anything you'll find online."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {cuisine.whereToEat.map((w) => (
            <li key={w.type} className="bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ochre-ink">{w.type}</p>
              <h3 className="mt-2 font-display text-2xl">{w.label}</h3>
              <p className="mt-3 leading-relaxed text-muted">{w.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="etiquette" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8" aria-labelledby="etiquette-h">
        <SectionHeading id="etiquette-h" eyebrow="Etiquette" title="Six customs that open doors" />
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {cuisine.etiquette.map((e, i) => (
            <li key={e.title} className="border-t border-line pt-5">
              <span className="font-display text-lg tabular-nums text-ochre-ink">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-xl">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{e.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
