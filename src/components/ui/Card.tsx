import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type Surface = 'white' | 'limestone' | 'dark';

const SURFACES: Record<Surface, string> = {
  white: 'bg-white border border-line shadow-card',
  limestone: 'bg-card',
  dark: 'bg-dark text-inverse',
};

export function Card({ surface = 'white', className, ...props }: { surface?: Surface } & ComponentProps<'div'>) {
  return <div className={cn('rounded-2xl', SURFACES[surface], className)} {...props} />;
}

export function Eyebrow({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('text-xs font-semibold uppercase tracking-[0.18em] text-ochre-ink', className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-3 font-display text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{lede}</p>}
    </div>
  );
}
