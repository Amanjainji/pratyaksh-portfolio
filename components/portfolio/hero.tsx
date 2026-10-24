import Image from 'next/image'
import { profile } from '@/lib/site-data'
import { Reveal } from './reveal'
import { EditorialBar } from './section-header'
import { SocialIcons } from './social-icons'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-7xl px-5 pt-8 md:px-8 md:pt-10">
      <EditorialBar />

      <Reveal className="mt-8 flex justify-center md:mt-10">
        <span className="rounded-full border border-cream/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream">
          {profile.role}
        </span>
      </Reveal>

      <div className="relative mt-6">
        <h1
          id="hero-title"
          className="relative z-0 select-none text-center font-display text-[clamp(4.5rem,21.5vw,17.5rem)] uppercase leading-[0.82] text-cream"
        >
          Portfolio
          <span className="sr-only">{` of ${profile.name}`}</span>
        </h1>

        <Reveal
          delay={0.15}
          className="relative z-10 mx-auto -mt-[11vw] w-[58%] max-w-[22rem] sm:w-[44%] md:-mt-[9vw] lg:-mt-36"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-cream/10">
            <Image
              src="/images/profile.png"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 22rem, 58vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mx-auto mt-10 flex max-w-2xl flex-col items-center text-center">
        <p className="font-display text-4xl uppercase tracking-wide text-cream md:text-5xl">{profile.name}</p>
        <p className="mt-4 text-pretty text-base leading-relaxed text-body md:text-lg">
          I plan, create and manage Instagram pages and Meta ad campaigns for growing brands in Delhi NCR.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#brands"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Contact Me
          </a>
        </div>
        <SocialIcons className="mt-8" />
      </Reveal>
    </section>
  )
}
