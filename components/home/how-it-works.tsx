import { SectionHeading } from '@/components/ui/section-heading'
import { howItWorks } from '@/lib/site-data'

export function HowItWorks() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Process" title="Simple, Straightforward Service" />

        <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {howItWorks.map((step, index) => {
            const Icon = step.icon
            const isLast = index === howItWorks.length - 1
            return (
              <li key={step.step} className="relative flex flex-col items-start gap-4">
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-8 left-full hidden h-px w-8 -translate-x-4 bg-border sm:block"
                  />
                ) : null}
                <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                  STEP {step.step}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
