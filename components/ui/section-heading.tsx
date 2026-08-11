import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'inverted'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'text-xs font-semibold tracking-[0.2em] uppercase',
            tone === 'inverted' ? 'text-primary-foreground/70' : 'text-accent',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-balance font-heading text-3xl font-semibold sm:text-4xl md:text-5xl',
          tone === 'inverted' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            tone === 'inverted' ? 'text-primary-foreground/80' : 'text-muted-foreground',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
