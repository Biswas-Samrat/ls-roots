import { trustItems } from '@/lib/site-data'

export function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label} className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:text-left">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
