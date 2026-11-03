import Image from 'next/image';
import type { ImageCredit } from '@/lib/types';
import { cn } from '@/lib/utils';

/** Commons photo with its required attribution, or a designed fallback where no open-licence photo exists. */
export function SightImage({
  image,
  alt,
  sizes,
  className,
  preload,
  credit = 'overlay',
}: {
  image: ImageCredit | null;
  alt: string;
  sizes: string;
  className?: string;
  preload?: boolean;
  credit?: 'overlay' | 'none';
}) {
  if (!image) {
    return (
      <div
        className={cn(
          'relative flex items-end overflow-hidden bg-[radial-gradient(120%_90%_at_20%_10%,#d8c3a0_0%,#c58940_45%,#8b5a1f_100%)]',
          className,
        )}
        role="img"
        aria-label={`${alt} — no open-licence photograph available yet`}
      >
        <svg className="absolute inset-0 size-full opacity-[0.12]" aria-hidden>
          <pattern id="tess" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M14 0 28 14 14 28 0 14Z" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tess)" />
        </svg>
        <p className="relative p-4 text-xs font-medium text-white/85">No open-licence photograph yet</p>
      </div>
    );
  }
  return (
    <figure className={cn('relative overflow-hidden bg-card', className)}>
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        loading={preload ? 'eager' : undefined}
        fetchPriority={preload ? 'high' : undefined}
        className="object-cover"
      />
      {credit === 'overlay' && <Credit image={image} className="absolute bottom-2 end-2" />}
    </figure>
  );
}

export function Credit({ image, className }: { image: ImageCredit; className?: string }) {
  return (
    <figcaption
      className={cn(
        'max-w-[85%] truncate rounded-full bg-dark/55 px-2 py-0.5 text-[10px] leading-4 text-white/90 backdrop-blur',
        className,
      )}
    >
      <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {image.author}
      </a>
      {' · '}
      {image.licenseUrl ? (
        <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {image.license}
        </a>
      ) : (
        image.license
      )}
    </figcaption>
  );
}
