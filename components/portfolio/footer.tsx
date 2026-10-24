import { profile } from '@/lib/site-data'
import { Reveal } from './reveal'
import { EditorialBar } from './section-header'
import { SocialIcons } from './social-icons'

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
      <EditorialBar />
      <Reveal>
        <p
          aria-hidden="true"
          className="text-outline mt-10 select-none text-center font-display text-[clamp(4rem,19vw,16rem)] uppercase leading-[0.85]"
        >
          Thank You
        </p>
      </Reveal>
      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-2xl uppercase text-cream">{profile.name}</p>
        <a href={`mailto:${profile.email}`} className="text-base text-cream underline-offset-4 hover:underline">
          {profile.email}
        </a>
      </div>
      <div className="mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-body/70">{'\u00A9'} 2026 {profile.name}. All rights reserved.</p>
        <SocialIcons />
      </div>
    </footer>
  )
}
