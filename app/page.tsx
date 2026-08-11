import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { ServicesSection } from '@/components/home/services-section'
import { AboutSection } from '@/components/home/about-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { HowItWorks } from '@/components/home/how-it-works'
import { GallerySection } from '@/components/home/gallery-section'
import { ServiceArea } from '@/components/home/service-area'
import { CTASection } from '@/components/home/cta-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <HowItWorks />
        <GallerySection />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
