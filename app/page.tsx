import { About } from '@/components/portfolio/about'
import { Brands } from '@/components/portfolio/brands'
import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { KeyLearnings } from '@/components/portfolio/key-learnings'
import { LightboxProvider } from '@/components/portfolio/lightbox'
import { MetaAds } from '@/components/portfolio/meta-ads'
import { Navbar } from '@/components/portfolio/navbar'
import { OrganicLeads } from '@/components/portfolio/organic-leads'

export default function Page() {
  return (
    <LightboxProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <MetaAds />
        {/* //<OrganicLeads /> */}
        <Experience />
        <KeyLearnings />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  )
}
