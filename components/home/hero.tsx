import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

const trustPoints = ['No job too small', 'Competitive prices', 'Friendly local service']

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-6 lg:pr-6">
          <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase">
            Local &bull; Reliable &bull; Trustworthy
          </span>
          <h1 className="text-balance font-heading text-4xl leading-[1.12] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Your Local Handyman &amp; Gardening Experts
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Reliable gardening and handyman services across Spalding &amp; surrounding areas.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton render={<Link href="#contact" />}>Get a Free Quote</CTAButton>
            <CTAButton tone="outline" render={<Link href="#contact" />}>
              <MessageCircle data-icon="inline-start" aria-hidden="true" />
              Message Us
            </CTAButton>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg py-8 lg:mr-0 lg:-ml-2 lg:w-[calc(100%+2.5rem)] lg:max-w-none lg:py-2">
          <div className="relative z-10 aspect-[6/5] w-full overflow-hidden shadow-xl lg:aspect-[6/5]">
            <Image
              src="/images/Hero%20for%20learge.png"
              alt="A gardener planting flowers in a well-kept British back garden, with a drill and toolbox in the foreground representing handyman work"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover object-[58%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
