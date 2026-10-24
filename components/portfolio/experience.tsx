import { experience } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionHeader } from './section-header'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader id="experience-title" eyebrow="Where I have worked" title="Work Experience" />

      <ol className="mt-14 md:mt-20">
        {experience.map((job, i) => (
          <li key={job.role} className="grid md:grid-cols-[16rem_1fr] md:gap-10">
            <Reveal delay={i * 0.05} className="hidden pt-1 text-right md:block">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-body/80">{job.date}</p>
            </Reveal>
            <div className="relative border-l border-cream/20 pb-14 pl-8 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-ink bg-cream ring-4 ring-cream/15"
              />
              <Reveal delay={i * 0.05}>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-body/80 md:hidden">{job.date}</p>
                <h3 className="font-display text-4xl uppercase leading-none text-cream md:text-5xl">{job.role}</h3>
                <p className="mt-2 text-lg text-body">{job.company}</p>
                <ul className="mt-6 grid gap-3 rounded-2xl bg-sand p-6 text-ink md:p-8">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-relaxed">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
