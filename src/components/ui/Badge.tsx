import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type Tone = 'open' | 'permit' | 'closed' | 'sea' | 'ochre' | 'neutral' | 'inverse';

const TONES: Record<Tone, string> = {
  open: 'bg-open-soft text-open',
  permit: 'bg-permit-soft text-permit-ink',
  closed: 'bg-closed-soft text-closed',
  sea: 'bg-sea-soft text-sea',
  ochre: 'bg-[#f5ebdc] text-ochre-ink',
  neutral: 'bg-card text-muted',
  inverse: 'bg-dark/70 text-inverse backdrop-blur',
};

const DOTS: Partial<Record<Tone, string>> = {
  open: 'bg-open',
  permit: 'bg-permit',
  closed: 'bg-closed',
};

export function Badge({
  tone = 'neutral',
  dot,
  pulse,
  className,
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  pulse?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold',
        TONES[tone],
        className,
      )}
    >
      {dot && (
        <span className="relative flex size-1.5" aria-hidden>
          {pulse && <span className={cn('absolute inset-0 animate-ping rounded-full opacity-60', DOTS[tone])} />}
          <span className={cn('relative size-1.5 rounded-full', DOTS[tone] ?? 'bg-current')} />
        </span>
      )}
      {children}
    </span>
  );
}
