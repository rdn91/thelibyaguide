import { Plane, Route, Stamp, Waypoints } from 'lucide-react';
import { Badge, type Tone } from '@/components/ui/Badge';
import type { StatusItem, StatusLevel } from '@/lib/types';
import { cn, formatDate } from '@/lib/utils';

const STATUS: Record<StatusLevel, { label: string; tone: Tone }> = {
  operating: { label: 'Operating', tone: 'open' },
  check: { label: 'Check before travel', tone: 'permit' },
  closed: { label: 'Closed', tone: 'closed' },
};

const ICONS = { airport: Plane, border: Waypoints, road: Route, visa: Stamp };

export default function StatusBoard({ items, dark = false }: { items: StatusItem[]; dark?: boolean }) {
  return (
    <div>
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = ICONS[item.kind];
          const s = STATUS[item.status];
          return (
            <li key={item.id} className={cn('flex flex-col gap-3 p-5', dark ? 'bg-dark text-inverse' : 'bg-white')}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'inline-flex size-9 items-center justify-center rounded-full',
                      dark ? 'bg-inverse/10' : 'bg-card',
                    )}
                  >
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{item.name}</p>
                    <p className={cn('font-mono text-[11px] tracking-wider', dark ? 'text-inverse/60' : 'text-muted')}>
                      {item.code}
                    </p>
                  </div>
                </div>
                <Badge tone={s.tone} dot pulse={item.status === 'operating'}>
                  {s.label}
                </Badge>
              </div>
              <p className={cn('text-sm leading-relaxed', dark ? 'text-inverse/75' : 'text-muted')}>{item.note}</p>
              <p className={cn('mt-auto text-[11px]', dark ? 'text-inverse/55' : 'text-muted')}>
                {item.lastVerified ? `Verified ${formatDate(item.lastVerified)}` : 'Awaiting editor verification'}
              </p>
            </li>
          );
        })}
      </ul>
      <p className={cn('mt-3 text-xs', dark ? 'text-inverse/60' : 'text-muted')}>
        Editor-set statuses, not a live data feed. Confirm every entry point with your operator 48 hours before travel.
      </p>
    </div>
  );
}
