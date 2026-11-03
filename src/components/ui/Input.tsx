import type { ComponentProps } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const field =
  'h-11 w-full rounded-xl border border-line-strong bg-white text-sm text-ink placeholder:text-muted transition-colors focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/20';

export function SearchInput({ className, ...props }: ComponentProps<'input'>) {
  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input type="search" className={cn(field, 'ps-10 pe-4')} {...props} />
    </div>
  );
}

export function Select({ className, children, ...props }: ComponentProps<'select'>) {
  return (
    <div className={cn('relative', className)}>
      <select className={cn(field, 'appearance-none ps-4 pe-10 font-medium')} {...props}>
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute end-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
    </div>
  );
}
