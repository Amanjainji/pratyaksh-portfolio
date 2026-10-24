import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function LongArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M1 6h117M112 1l6 5-6 5" />
    </svg>
  )
}

export function EditorialBar() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4 text-cream/70">
      {/* <span className="text-xs font-medium uppercase tracking-[0.25em]">Digital Marketing</span> */}
      <LongArrow className="h-3 w-20 sm:w-32" />
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow?: string
  title: string
  intro?: ReactNode
  id?: string
}) {
  return (
    <div>
      <EditorialBar />
      <Reveal className="mt-10 md:mt-14">
        {eyebrow && (
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-body/80">{eyebrow}</p>
        )}
        <h2
          id={id}
          className="font-display text-[clamp(3rem,11vw,8.5rem)] uppercase leading-[0.88] text-cream text-balance"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">{intro}</p>
        )}
      </Reveal>
    </div>
  )
}
