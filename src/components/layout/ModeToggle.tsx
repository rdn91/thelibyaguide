'use client';

import { motion } from 'framer-motion';
import { useSite } from './Providers';
import type { Mode } from '@/lib/types';
import { cn } from '@/lib/utils';

const MODES: Mode[] = ['visitor', 'resident'];

export default function ModeToggle({ className }: { className?: string }) {
  const { mode, setMode, t } = useSite();
  return (
    <div
      role="radiogroup"
      aria-label="Audience"
      className={cn('relative inline-flex rounded-full border border-line bg-white p-0.5 text-xs font-semibold', className)}
    >
      {MODES.map((m) => {
        const active = mode === m;
        return (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setMode(m)}
            className={cn(
              'relative z-10 rounded-full px-3 py-1.5 transition-colors',
              active ? 'text-inverse' : 'text-muted hover:text-ink',
            )}
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 -z-10 rounded-full bg-sea"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            {t.mode[m]}
          </button>
        );
      })}
    </div>
  );
}
