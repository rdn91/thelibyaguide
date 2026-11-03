import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import RealityComparisonTable from '@/components/interactive/RealityComparisonTable';
import StatusBoard from '@/components/interactive/StatusBoard';
import { Badge } from '@/components/ui/Badge';
import { Eyebrow, SectionHeading } from '@/components/ui/Card';
import { formatDate, logistics } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'The Reality Index — Libya travel advisories, read closely',
  description:
    'US State Department and UK FCDO warnings on Libya, quoted with their dates and set beside how escorted tourism works and what you can verify yourself.',
};

export default function RealityIndexPage() {
  return (
    <>
      <section className="border-b border-line bg-card/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Eyebrow>The Reality Index</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-balance">
            The warnings are real. So is the country behind them.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted text-pretty">
            Western advisories rate Libya at their highest level. We summarise them faithfully, with dates and links.
            Then we set out how licensed, escorted tourism operates inside that risk, and what you can check for
            yourself. We don&apos;t claim the risk is zero. We claim it is specific, and that specific risks can be
            managed or avoided.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {logistics.advisories.map((a) => (
              <article key={a.id} className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{a.issuer}</p>
                  <span className="text-xs text-muted">As of {formatDate(a.asOf)}</span>
                </div>
                <Badge tone="closed" className="mt-4 self-start">
                  {a.rating}
                </Badge>
                <p className="mt-4 leading-relaxed">{a.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.consular}</p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-sea hover:underline"
                >
                  Read the live advisory <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="index-h">
        <SectionHeading
          id="index-h"
          eyebrow="Side by side"
          title="Six claims, six answers, six things to check."
          lede="Column three is the point. Nothing here asks for your trust: every line is something you can confirm with your operator, your insurer or a primary source."
        />
        <div className="mt-12">
          <RealityComparisonTable rows={logistics.realityIndex} />
        </div>

        <aside className="mt-10 rounded-2xl bg-sea-soft p-6 text-sea sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-3xl leading-relaxed">{logistics.heritageFact.label}</p>
          <a
            href={logistics.heritageFact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex shrink-0 items-center gap-1 text-sm font-semibold hover:underline sm:mt-0"
          >
            UNESCO record <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </aside>
      </section>

      <section className="bg-dark text-inverse" aria-labelledby="status-h">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Eyebrow className="text-ochre">Status board</Eyebrow>
          <h2 id="status-h" className="mt-3 font-display text-4xl">
            Airports, borders, roads, visas
          </h2>
          <div className="mt-10">
            <StatusBoard items={logistics.statusBoard} dark />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="accounts-h">
        <div className="grid gap-10 rounded-3xl border border-dashed border-line-strong p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <MessageSquareQuote className="size-12 text-ochre" aria-hidden />
          <div>
            <h2 id="accounts-h" className="font-display text-3xl">
              Traveller accounts, verified or not at all
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              We publish a traveller&apos;s account only after confirming the trip with both the traveller and their
              operator: dates, route, and any incidents, good or bad. None has cleared that bar yet, so this space stays
              empty rather than filled with marketing quotes. If you have travelled since 2023 and are willing to be
              verified,{' '}
              <Link href="/credits#contact" className="font-semibold text-sea underline underline-offset-2">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
