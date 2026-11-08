'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, House } from 'lucide-react';
import { useSite } from './Providers';
import type { Mode } from '@/lib/types';
import { cn } from '@/lib/utils';

const MODES: { id: Mode; Icon: typeof Compass }[] = [
  { id: 'visitor', Icon: Compass },
  { id: 'resident', Icon: House },
];

export default function ModeToggle({ className }: { className?: string }) {
  const { mode, setMode, t } = useSite();
  const pathname = usePathname();
  // Set only by a click, so restoring the saved mode on load never shows the notice.
  const [notice, setNotice] = useState<Mode | null>(null);

  useEffect(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(null), 5000);
    return () => clearTimeout(id);
  }, [notice]);

  const choose = (m: Mode) => {
    if (m === mode) return;
    setMode(m);
    setNotice(m);
  };

  return (
    <>
      <div
        role="group"
        aria-label={t.mode.label}
        className={cn('relative inline-flex rounded-full bg-card p-0.5 text-[13px] font-semibold sm:text-sm', className)}
      >
        {MODES.map(({ id, Icon }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              onClick={() => choose(id)}
              className={cn(
                'relative z-10 inline-flex h-11 items-center gap-1.5 rounded-full px-3 transition-colors active:scale-[0.97] sm:px-4',
                active ? 'text-inverse' : 'text-ink/70 hover:text-ink',
              )}
            >
              {active && (
                <motion.span
                  layoutId="mode-pill"
                  className={cn('absolute inset-0 -z-10 rounded-full', id === 'resident' ? 'bg-olive' : 'bg-sea')}
                  transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                />
              )}
              <Icon className="hidden size-4 sm:block" aria-hidden />
              {t.mode[id]}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {notice && (notice === 'resident' ? t.mode.residentOn : t.mode.visitorOn)}
      </p>
      {/* Portalled: the header's backdrop-filter would otherwise pin this fixed notice to the header box. */}
      {notice &&
        createPortal(
          <motion.div
            key={notice}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'fixed inset-x-4 bottom-4 z-[70] mx-auto flex max-w-md flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl px-5 py-3 text-sm text-inverse shadow-lift sm:inset-x-auto sm:end-6 sm:bottom-6',
              notice === 'resident' ? 'bg-olive' : 'bg-sea',
            )}
          >
            <p className="min-w-48 flex-1" aria-hidden>
              {notice === 'resident' ? t.mode.residentOn : t.mode.visitorOn}
            </p>
            {notice === 'resident' && pathname !== '/local' && (
              <Link
                href="/local"
                onClick={() => setNotice(null)}
                className="inline-flex min-h-11 items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
              >
                {t.mode.openLocal} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
              </Link>
            )}
          </motion.div>,
          document.body,
        )}
    </>
  );
}
