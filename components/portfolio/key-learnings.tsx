import { keyLearnings } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeader } from './section-header'

export function KeyLearnings() {
  return (
    <section aria-labelledby="learnings-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader id="learnings-title" eyebrow="What the work has taught me" title="Key Learnings" />
      <Reveal className="mt-14 md:mt-20">
        <ol className="grid gap-x-10 rounded-2xl bg-sand p-6 text-ink sm:grid-cols-2 md:p-10">
          {keyLearnings.map((item, i) => (
            <li key={item} className="flex items-baseline gap-4 border-b border-ink/15 py-5 last:border-0 sm:[&:nth-last-child(2)]:border-0">
              <span className="font-display text-2xl text-ink/50">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base leading-relaxed md:text-lg">{item}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
