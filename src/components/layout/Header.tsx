'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Languages, Menu, X } from 'lucide-react';
import { useSite } from './Providers';
import ModeToggle from './ModeToggle';
import { cn } from '@/lib/utils';

type NavKey = 'destinations' | 'reality' | 'logistics' | 'taste' | 'local';

const LINKS: { key: NavKey; href: string }[] = [
  { key: 'destinations', href: '/destinations' },
  { key: 'reality', href: '/travel-advisory-debunked' },
  { key: 'logistics', href: '/logistics' },
  { key: 'taste', href: '/taste-culture' },
  { key: 'local', href: '/local' },
];

export default function Header() {
  const { t, lang, setLang, mode } = useSite();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Residents see the Phase 2 local gateway first.
  const links = mode === 'resident' ? [...LINKS].sort((a) => (a.key === 'local' ? -1 : 0)) : LINKS;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const langToggle = (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:bg-card hover:text-ink"
      lang={lang === 'en' ? 'ar' : 'en'}
    >
      <Languages className="size-3.5" aria-hidden />
      {t.lang}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ground/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-baseline gap-2" aria-label="The Libya Guide — home">
          <span className="font-display text-xl font-semibold tracking-tight">The Libya Guide</span>
          <span className="hidden font-arabic text-sm text-ochre-ink sm:inline" lang="ar">
            دليل ليبيا
          </span>
        </Link>

        <nav aria-label="Primary" className="ms-auto hidden items-center gap-1 xl:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.key}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  active ? 'text-sea' : 'text-muted hover:text-ink',
                )}
              >
                {t.nav[l.key]}
                {active && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-sea" />}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto hidden items-center gap-2 xl:ms-0 xl:flex">
          {langToggle}
          <ModeToggle />
        </div>

        <button
          type="button"
          className="ms-auto inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-card xl:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-dark/40"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              className="absolute inset-y-0 end-0 flex w-[min(22rem,88vw)] flex-col bg-ground p-6 shadow-lift"
              initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">Menu</span>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full hover:bg-card"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {links.map((l) => (
                  <li key={l.key}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname.startsWith(l.href) ? 'page' : undefined}
                      className="block rounded-xl px-3 py-3 font-display text-2xl aria-[current=page]:text-sea"
                    >
                      {t.nav[l.key]}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-6">
                <ModeToggle />
                {langToggle}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
