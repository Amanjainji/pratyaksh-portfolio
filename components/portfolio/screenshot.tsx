'use client'

import { Expand } from 'lucide-react'
import { useLightbox } from './lightbox'

export function Screenshot({
  src,
  alt,
  aspect = 'aspect-[1/2]',
  fit = 'object-cover object-top',
  className = '',
}: {
  src: string
  alt: string
  aspect?: string
  fit?: string
  className?: string
}) {
  const openLightbox = useLightbox()
  return (
    <button
      type="button"
      onClick={() => openLightbox({ src, alt })}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-ink-soft shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] ring-1 ring-cream/10 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${aspect} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className={`size-full ${fit}`} />
      <span className="absolute right-3 top-3 rounded-full bg-ink/80 p-2 text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand className="size-4" aria-hidden="true" />
      </span>
      <span className="sr-only">Open full size</span>
    </button>
  )
}
