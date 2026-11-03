import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import CanIVisitChecker from '@/components/interactive/CanIVisitChecker';
import InteractiveCorridorMap from '@/components/interactive/InteractiveCorridorMap';
import StatusBoard from '@/components/interactive/StatusBoard';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow, SectionHeading } from '@/components/ui/Card';
import { logistics, sights } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Visa, LOI & logistics',
  description:
    'How the Libyan tourist e-Visa works: operator sponsorship, the Letter of Invitation, entry airports and borders, the Guided Corridor Protocol, and a 4-step readiness check.',
};

export default function LogisticsPage() {
  const { visa } = logistics;
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <Eyebrow>Visa & logistics</Eyebrow>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-balance">
          No operator, no visa. Start there.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted text-pretty">
          Tourist entry to Libya is sponsored. A licensed Libyan operator requests security clearance, issues your
          Letter of Invitation and lodges the e-Visa. Everything else follows from that choice.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8" aria-labelledby="visa-h">
        <div>
          <h2 id="visa-h" className="sr-only">
            e-Visa steps
          </h2>
          <ol className="space-y-8">
            {visa.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sea font-display text-inverse">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink/85">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 rounded-2xl bg-permit-soft p-5 text-sm leading-relaxed text-permit-ink">{visa.caveat}</p>
        </div>
        <aside className="rounded-2xl border border-line bg-white p-6 shadow-card lg:self-start">
          <h3 className="font-display text-xl">Before you apply</h3>
          <ul className="mt-4 space-y-3">
            {visa.requirements.map((r) => (
              <li key={r} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-open" aria-hidden />
                {r}
              </li>
            ))}
          </ul>
          <a
            href={visa.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sea hover:underline"
          >
            Official portal: evisa.gov.ly <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </aside>
      </section>

      <section id="checker" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="checker-h">
        <SectionHeading
          id="checker-h"
          eyebrow="Can I visit Libya?"
          title="Four steps to a straight answer."
          lede="Passport, visa timing, itinerary and operator. The checker runs in your browser and sends nothing anywhere."
        />
        <div className="mt-10">
          <CanIVisitChecker />
        </div>
      </section>

      <section id="corridor" className="scroll-mt-24 bg-card/60" aria-labelledby="corridor-h">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            id="corridor-h"
            eyebrow="The Guided Corridor Protocol"
            title="Where tourism runs, and how."
            lede="An editorial classification drawn from how licensed operators work today. It is not an official government zoning, and it does not override any advisory."
          />
          <div className="mt-10">
            <InteractiveCorridorMap routes={logistics.routes} sights={sights} />
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {logistics.corridor.map((c) => (
              <li key={c.tier} className="rounded-2xl border border-line bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl">
                    <span className="text-muted">{c.tier} · </span>
                    {c.name}
                  </h3>
                  <Badge tone={c.tone} dot>
                    {c.badge}
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.covers.join(' · ')}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {c.rules.map((r) => (
                    <li key={r} className="flex gap-2 text-sm">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-ink" aria-hidden />
                      {r}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="entry-h">
        <SectionHeading
          id="entry-h"
          eyebrow="Getting in"
          title="Airports and land borders"
          lede="Tripoli International has been closed since 2014. Mitiga is the capital's working airport, and most visitors fly in via Istanbul, Tunis, Cairo or Amman."
        />
        <div className="mt-10">
          <StatusBoard items={logistics.statusBoard} />
        </div>
      </section>
    </>
  );
}
