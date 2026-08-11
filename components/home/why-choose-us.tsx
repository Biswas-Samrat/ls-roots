import { SectionHeading } from '@/components/ui/section-heading'
import { benefits } from '@/lib/site-data'

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Why Choose LS Roots & Branch?" />

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <li key={benefit.title} className="flex flex-col items-start gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
