import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-sea text-inverse hover:bg-[#0c3354] shadow-card',
  secondary: 'bg-white text-ink border border-line-strong hover:border-ink',
  ghost: 'text-sea hover:bg-sea-soft',
  inverse: 'bg-inverse text-ink hover:bg-white',
};

const SIZES: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background,border-color,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

interface Common {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: Common & ComponentProps<'button'>) {
  return <button className={cn(base, VARIANTS[variant], SIZES[size], className)} {...props} />;
}

export function ButtonLink({ variant = 'primary', size = 'md', className, ...props }: Common & ComponentProps<typeof Link>) {
  return <Link className={cn(base, VARIANTS[variant], SIZES[size], className)} {...props} />;
}
