'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSite } from '@/components/layout/Providers';
import { ButtonLink } from '@/components/ui/Button';
import { Credit } from '@/components/ui/SightImage';
import QuickCheck from './QuickCheck';
import type { ImageCredit } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface HeroSlide {
  image: ImageCredit;
  place: string;
  placeAr: string;
  href: string;
}

const INTERVAL = 7000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const { t, mode, lang } = useSite();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, reduce, slides.length]);

  const slide = slides[index];
  const resident = mode === 'resident';

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured places"
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-dark text-inverse"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image.src}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={slide.image.src} alt="" fill sizes="100vw" loading="eager" fetchPriority={index === 0 ? 'high' : 'auto'} className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(12_19_26/0.55)_0%,rgb(12_19_26/0.15)_35%,rgb(12_19_26/0.4)_60%,rgb(12_19_26/0.94)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(12_19_26/0.6)_0%,rgb(12_19_26/0.25)_45%,transparent_75%)] rtl:-scale-x-100"
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ochre">{t.hero.eyebrow}</p>
        <motion.h1
          key={`h-${mode}-${lang}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.98] text-balance"
        >
          {resident ? t.hero.residentTitle : t.hero.title}
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-inverse/85 text-pretty sm:text-xl">
          {resident ? t.hero.residentSub : t.hero.sub}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={resident ? '/local' : '/destinations'} variant="inverse" size="lg">
            {resident ? t.hero.weekends : t.hero.explore}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </ButtonLink>
          <ButtonLink
            href="/travel-advisory-debunked"
            size="lg"
            className="border border-inverse/40 bg-transparent text-inverse shadow-none hover:bg-inverse/10"
          >
            {t.hero.reality}
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-end">
          {!resident && <QuickCheck />}
          <div className={cn('flex items-end justify-between gap-4', resident && 'lg:col-span-2')}>
            <div className="min-w-0" aria-live="polite">
              <a href={slide.href} className="font-display text-lg hover:underline">
                {lang === 'ar' ? slide.placeAr : slide.place}
              </a>
              <Credit image={slide.image} className="mt-1 block w-fit bg-transparent px-0 backdrop-blur-none" />
            </div>
            <div className="flex shrink-0 items-center gap-2" role="tablist" aria-label="Choose slide">
              {slides.map((s, i) => (
                <button
                  key={s.image.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.place}`}
                  onClick={() => setIndex(i)}
                  className="relative h-8 w-10"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-inverse/30">
                    {i === index && (
                      <motion.span
                        key={`${index}-${paused}`}
                        className="absolute inset-y-0 start-0 bg-inverse"
                        initial={{ width: reduce ? '100%' : '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: paused || reduce ? 0 : INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
