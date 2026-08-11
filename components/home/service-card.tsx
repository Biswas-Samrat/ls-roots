import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <li className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-semibold text-foreground">{service.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
      <Link
        href="#contact"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        Get a Quote
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </li>
  )
}
