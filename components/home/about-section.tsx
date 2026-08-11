import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/cta-button'

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-lg lg:order-none">
          <Image
            src="/images/about-gardener.png"
            alt="A local gardener trimming a hedge with hand shears"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Local &amp; Reliable
          </span>
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Here to Help Keep Your Home &amp; Garden Looking Its Best
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            LS Roots &amp; Branch is a local, friendly and reliable handyman and gardening
            service based in Spalding and serving the surrounding areas.
          </p>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether it&apos;s a garden that needs some TLC or those smaller jobs around the
            home, we&apos;re here to help.
          </p>
          <CTAButton render={<Link href="#contact" />} className="mt-2">
            Get a Free Quote
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
