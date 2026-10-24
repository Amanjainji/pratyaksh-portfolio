import { Download } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeader } from "./section-header";

const details = [
  { label: "Name", value: profile.name },
  { label: "Email", value: profile.email },
  { label: "Location", value: profile.location },
  { label: "Availability", value: profile.availability },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHeader
        id="about-title"
        eyebrow="My background and journey"
        title="About Me"
      />

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.8)] ring-1 ring-cream/10">
              <Image
                src="/images/about.png"
                alt={`${profile.name} portrait`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-semibold text-ink shadow-lg">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-600 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-700" />
              </span>
              Available for work
            </span>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col gap-6 md:col-span-7 md:pt-4"
        >
          <p className="text-pretty text-lg leading-relaxed text-body md:text-xl">
            I'm Pratyaksh Aggarwal, a BBA graduate from GGSIPU with a strong
            interest in digital marketing, social media management, content
            creation, and paid advertising. Through my internships and hands-on
            client projects, I've gained experience working with brands across
            different industries, creating social media content, managing brand
            communication, and working on Meta Ads campaigns. I enjoy combining
            creativity with a data-driven approach to build meaningful digital
            experiences for brands. 
          </p>
          <p className="text-pretty text-lg leading-relaxed text-body md:text-xl">
            I believe effective digital marketing is
            more than just posting content — it's about understanding the
            audience, communicating the right message, and continuously
            improving performance. I'm always eager to learn new strategies,
            explore creative ideas, and grow as a digital marketing
            professional.
          </p>

          <dl className="mt-2 grid gap-px overflow-hidden rounded-2xl bg-ink/15 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="bg-sand p-5 text-ink">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
                  {item.label}
                </dt>
                <dd className="mt-1 break-words text-base font-medium">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={profile.resume}
            download
            className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
