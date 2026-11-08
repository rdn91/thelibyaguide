'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Native <dialog> for focus trapping, Esc handling and inert background for free. */
export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={title}
      className={cn(
        'm-auto w-[min(64rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-hidden rounded-3xl bg-ground p-0 text-ink shadow-lift backdrop:bg-dark/60 backdrop:backdrop-blur-sm',
        className,
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute end-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-ground/90 text-ink shadow-card hover:bg-white"
      >
        <X className="size-5" aria-hidden />
      </button>
      {children}
    </dialog>
  );
}
