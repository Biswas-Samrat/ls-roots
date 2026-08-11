import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Areas We Cover
          </span>
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Serving Spalding &amp; Surrounding Areas
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Based in Spalding, we provide friendly handyman and gardening services to homes
            across Spalding and the surrounding areas.
          </p>
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <MapPin className="size-4" aria-hidden="true" />
            Local &bull; Reliable &bull; Here to Help
          </p>
          <CTAButton render={<Link href="#contact" />} className="mt-2">
            Ask About Your Area
          </CTAButton>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-lg">
          <Image
            src="/images/service-area.png"
            alt="A residential street in Spalding, Lincolnshire with tidy front gardens"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
