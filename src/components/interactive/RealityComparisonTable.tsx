import { ArrowUpRight, CircleCheck, Megaphone, ShieldCheck } from 'lucide-react';
import type { RealityRow } from '@/lib/types';

const COLS = [
  { key: 'advisory', label: 'The advisory', icon: Megaphone, className: 'text-closed' },
  { key: 'ground', label: 'Ground reality & security model', icon: ShieldCheck, className: 'text-open' },
  { key: 'verify', label: 'What you can verify yourself', icon: CircleCheck, className: 'text-sea' },
] as const;

function VerifyList({ row }: { row: RealityRow }) {
  return (
    <ul className="space-y-2">
      {row.verify.map((v) => (
        <li key={v.label} className="flex gap-2 text-sm leading-relaxed">
          <span className="mt-2 size-1 shrink-0 rounded-full bg-sea" aria-hidden />
          {v.url ? (
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sea underline decoration-sea/30 underline-offset-2 hover:decoration-sea"
            >
              {v.label}
              <ArrowUpRight className="ms-0.5 inline size-3.5 align-[-2px]" aria-hidden />
            </a>
          ) : (
            <span className="text-ink/85">{v.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function RealityComparisonTable({ rows }: { rows: RealityRow[] }) {
  return (
    <>
      {/* Desktop: true table for screen readers and scanning */}
      <div className="hidden overflow-hidden rounded-2xl border border-line bg-white shadow-card lg:block">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            Western travel advisory claims compared with how guided tourism operates, and how to check each point
          </caption>
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[26%]" />
            <col className="w-[33%]" />
            <col className="w-[26%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-line bg-card/60">
              <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Topic
              </th>
              {COLS.map((c) => (
                <th key={c.key} scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  <span className="inline-flex items-center gap-2">
                    <c.icon className={`size-4 ${c.className}`} aria-hidden />
                    {c.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-line align-top last:border-0">
                <th scope="row" className="px-5 py-6 font-display text-lg font-normal leading-snug">
                  {r.topic}
                </th>
                <td className="px-5 py-6 text-sm leading-relaxed text-ink/80">{r.advisory}</td>
                <td className="px-5 py-6 text-sm leading-relaxed">{r.ground}</td>
                <td className="px-5 py-6">
                  <VerifyList row={r} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile and tablet: stacked cards */}
      <ol className="space-y-4 lg:hidden">
        {rows.map((r) => (
          <li key={r.id} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <h3 className="font-display text-xl">{r.topic}</h3>
            <dl className="mt-4 space-y-4">
              {COLS.map((c) => (
                <div key={c.key}>
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    <c.icon className={`size-4 ${c.className}`} aria-hidden />
                    {c.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed">
                    {c.key === 'verify' ? <VerifyList row={r} /> : r[c.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
    </>
  );
}
