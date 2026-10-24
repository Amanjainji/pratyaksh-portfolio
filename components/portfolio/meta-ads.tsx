import { Check } from 'lucide-react'
import { metaAds, metaAdsProcess } from '@/lib/site-data'
import { Reveal } from './reveal'
import { Screenshot } from './screenshot'
import { SectionHeader } from './section-header'

export function MetaAds() {
  return (
    <section id="meta-ads" aria-labelledby="meta-ads-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        id="meta-ads-title"
        eyebrow="Paid social"
        title="Meta Ads Campaigns"
        intro="Planned and ran Meta ad campaigns with clear objectives, audience targeting, multiple creatives and budget tracking, then reviewed results to improve performance."
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-20 md:gap-10">
        {metaAds.map((ad, i) => (
          <Reveal key={ad.src} delay={(i % 2) * 0.1}>
            <figure>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cream">{ad.brand}</span>
                <span className="text-xs text-body/60">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <Screenshot src={ad.src} alt={`${ad.brand} Meta ads screenshot ${i + 1}`} aspect="aspect-[8/5]" />
              <figcaption className="mt-3 rounded-xl bg-sand px-5 py-4 text-sm leading-relaxed text-ink md:text-base">
                {ad.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="rounded-2xl bg-sand p-6 text-ink md:p-10">
          <h3 className="font-display text-3xl uppercase md:text-4xl">How I run campaigns</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {metaAdsProcess.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                <Check className="mt-1 size-5 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
