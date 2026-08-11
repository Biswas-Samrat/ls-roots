import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CTAButtonProps = ComponentProps<typeof Button> & {
  tone?: 'primary' | 'outline' | 'inverted'
}

export function CTAButton({
  className,
  tone = 'primary',
  variant,
  render,
  ...props
}: CTAButtonProps) {
  const toneClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline:
      'border-primary/25 bg-transparent text-primary hover:bg-primary/5 hover:text-primary',
    inverted:
      'border-primary-foreground/30 bg-primary-foreground text-primary hover:bg-primary-foreground/90',
  }[tone]

  return (
    <Button
      variant={tone === 'outline' ? 'outline' : variant}
      className={cn(
        'h-12 rounded-full px-6 text-sm font-semibold tracking-wide',
        toneClasses,
        className,
      )}
      render={render}
      nativeButton={render ? false : undefined}
      {...props}
    />
  )
}
