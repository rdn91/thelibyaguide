import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function Eyebrow({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('text-xs font-semibold uppercase tracking-[0.18em] text-ochre-ink', className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  id,
  as: Heading = 'h2',
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  id?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading id={id} className="mt-3 font-display text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {lede && <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{lede}</p>}
    </div>
  );
}
