import { brands, type Brand, type BrandPage } from '@/lib/site-data'
import { Reveal } from './reveal'
import { Screenshot } from './screenshot'
import { SectionHeader } from './section-header'
import { TagList } from './tag-list'

function PhonePair({ brand, page }: { brand: string; page: BrandPage }) {
  const label = page.title ? `${brand} ${page.title}` : brand
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5">
      <figure>
        <figcaption className="mb-2 text-xs uppercase tracking-[0.18em] text-body/70">Instagram Insights</figcaption>
        <Screenshot src={page.insights} alt={`${label} Instagram Insights screenshot`} />
      </figure>
      <figure>
        <figcaption className="mb-2 text-xs uppercase tracking-[0.18em] text-body/70">Profile Grid</figcaption>
        <Screenshot src={page.grid} alt={`${label} Instagram grid screenshot`} />
      </figure>
    </div>
  )
}

function BrandSection({ brand, index }: { brand: Brand; index: number }) {
  const reversed = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')
  const multi = brand.pages.length > 1
  const headingId = `brand-${index}-title`

  return (
    <article aria-labelledby={headingId} className="border-t border-border pt-14 md:pt-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className={`lg:col-span-3 ${reversed ? 'lg:order-2 lg:text-right' : ''}`}>
          <div className={`flex items-end justify-between gap-4 lg:flex-col lg:items-start lg:justify-start ${reversed ? 'lg:items-end' : ''}`}>
            <span aria-hidden="true" className="text-outline font-display text-7xl leading-none md:text-8xl lg:text-9xl">
              {number}
            </span>
            <div className={`text-right lg:mt-6 lg:text-left ${reversed ? 'lg:text-right' : ''}`}>
              {!multi && <p className="text-sm font-medium text-cream">{brand.pages[0].handle}</p>}
              <p className="mt-1 text-sm text-body/80">{brand.category}</p>
            </div>
          </div>
          <TagList tags={brand.tags} className={`mt-6 hidden lg:flex ${reversed ? 'justify-end' : ''}`} />
        </Reveal>

        <div className="lg:col-span-9">
          <Reveal>
            <h3
              id={headingId}
              className="font-display text-[clamp(2.25rem,6.5vw,4.75rem)] uppercase leading-[0.92] text-cream text-balance"
            >
              {brand.name}
            </h3>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            {multi ? (
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
                {brand.pages.map((page) => (
                  <div key={page.title}>
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                      <h4 className="font-display text-2xl uppercase text-cream">{page.title}</h4>
                      <span className="text-sm text-body/80">{page.handle}</span>
                    </div>
                    <PhonePair brand={brand.name} page={page} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-2xl lg:mx-0">
                <PhonePair brand={brand.name} page={brand.pages[0]} />
              </div>
            )}
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <div className="rounded-2xl bg-sand p-6 text-ink md:p-8">
              <p className="text-pretty text-base leading-relaxed md:text-lg">{brand.caption}</p>
            </div>
            <TagList tags={brand.tags} className="mt-5 lg:hidden" />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export function Brands() {
  return (
    <section id="brands" aria-labelledby="brands-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        id="brands-title"
        eyebrow="Brands I have worked on"
        title="Brand Portfolio"
        intro="At Social Maadhyam I have worked across 6 brands and 7 Instagram pages, covering content planning, posting, page growth and performance tracking through Instagram Insights."
      />
      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
        {brands.map((brand, i) => (
          <BrandSection key={brand.name} brand={brand} index={i} />
        ))}
      </div>
    </section>
  )
}
