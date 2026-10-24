import { profile } from '@/lib/site-data'
import { ContactForm } from './contact-form'
import { CopyButton } from './copy-button'
import { Reveal } from './reveal'
import { SectionHeader } from './section-header'

const contactItems = [
  { label: 'Email', value: profile.email },
  { label: 'Phone', value: profile.phone },
  { label: 'LinkedIn', value: profile.linkedin },
  { label: 'Instagram', value: profile.instagram },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader id="contact-title" eyebrow="Let's work together" title="Get In Touch" />

      <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <ul className="divide-y divide-border border-y border-border">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 py-5">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body/70">{item.label}</p>
                  <p className="mt-1 truncate text-lg text-cream">{item.value}</p>
                </div>
                <CopyButton value={item.value} label={item.label} />
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-3 text-base text-body">
            <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-emerald-500" />
            Available for freelance and full-time opportunities
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
