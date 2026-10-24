import { organicLeads } from '@/lib/site-data'
import { Reveal } from './reveal'
import { Screenshot } from './screenshot'
import { SectionHeader } from './section-header'

export function OrganicLeads() {
  return (
    <section
      id="organic-leads"
      aria-labelledby="organic-leads-title"
      className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeader
        id="organic-leads-title"
        eyebrow="Content that converts"
        title="Organic Leads"
        intro="Leads that came in directly through organic Instagram content, without paid ads."
      />

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-10">
        {organicLeads.map((lead, i) => (
          <Reveal key={lead.src} delay={i * 0.1}>
            <figure>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream">Brand: {lead.brand}</p>
              <Screenshot src={lead.src} alt={`${lead.brand} organic lead screenshot ${i + 1}`} aspect="aspect-[27/40]" />
              <figcaption className="mt-4 rounded-2xl bg-sand p-6 text-base leading-relaxed text-ink">
                {lead.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
