'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ShieldAlert, Stamp } from 'lucide-react';
import { useSite } from '@/components/layout/Providers';
import { Select } from '@/components/ui/Input';
import { logistics } from '@/lib/utils';

/** Hero widget: passport → the visa path and the advisory that applies to that passport. */
export default function QuickCheck() {
  const { t } = useSite();
  const id = useId();
  const [passportId, setPassportId] = useState('');
  const passport = logistics.passports.find((p) => p.id === passportId);
  const advisory = logistics.advisories.find((a) => a.id === passport?.advisory);

  return (
    <div className="rounded-2xl border border-inverse/15 bg-dark/55 p-4 backdrop-blur-md sm:p-5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.18em] text-inverse/70">
        {t.quick.label}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <Select id={id} value={passportId} onChange={(e) => setPassportId(e.target.value)} className="flex-1">
          <option value="">Choose a passport…</option>
          {logistics.passports.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </Select>
        <Link
          href={passport ? `/logistics?passport=${passport.id}#checker` : '/logistics#checker'}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-ochre px-4 text-sm font-semibold text-dark transition-colors hover:bg-[#d49a52]"
        >
          {t.quick.cta} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
        </Link>
      </div>
      <AnimatePresence initial={false}>
        {passport && (
          <motion.div
            key={passport.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
            aria-live="polite"
          >
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex gap-2.5">
                <Stamp className="mt-0.5 size-4 shrink-0 text-ochre" aria-hidden />
                <div>
                  <dt className="font-semibold">Visa path</dt>
                  <dd className="text-inverse/75">
                    {passport.blocked ? 'Entry not possible on this passport.' : 'Operator-sponsored LOI → tourist e-Visa'}
                  </dd>
                </div>
              </div>
              <div className="flex gap-2.5">
                <ShieldAlert className="mt-0.5 size-4 shrink-0 text-ochre" aria-hidden />
                <div>
                  <dt className="font-semibold">Your government says</dt>
                  <dd className="text-inverse/75">{advisory ? advisory.rating : 'Check your foreign ministry'}</dd>
                </div>
              </div>
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
