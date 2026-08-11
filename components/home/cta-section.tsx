import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/cta-button'
import { siteConfig } from '@/lib/site-data'

export function CTASection() {
  return (
    <section id="contact" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl md:text-5xl">
          Got a Job in Mind?
        </h2>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Whether it&apos;s a garden that needs some TLC or a small job around the home, get in
          touch today.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton tone="inverted" render={<a href={`mailto:${siteConfig.email}`} />}>
            <Mail data-icon="inline-start" aria-hidden="true" />
            Get a Free Quote
          </CTAButton>
          <CTAButton
            tone="outline"
            render={<a href={`mailto:${siteConfig.email}`} />}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <MessageCircle data-icon="inline-start" aria-hidden="true" />
            Message Us
          </CTAButton>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-primary-foreground/75 underline-offset-4 hover:underline"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  )
}
