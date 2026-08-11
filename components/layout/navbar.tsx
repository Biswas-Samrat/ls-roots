'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/site-data'
import { CTAButton } from '@/components/ui/cta-button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || '#home')
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'border-border/80 bg-background/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-background/70 backdrop-blur-sm',
      )}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 z-0 hidden h-[calc(100%+2.5rem)] w-64 rounded-bl-[5rem] bg-halo lg:block"
        />
        <Link href="#home" className="flex items-center gap-3 py-3" aria-label="LS Roots & Branch home">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-background sm:size-14">
            <Image
              src="/images/logo-tree.png"
              alt=""
              width={112}
              height={112}
              className="size-[150%] -translate-x-[17%] -translate-y-[17%] object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="flex items-baseline gap-1.5">
              <span className="font-heading text-2xl font-bold text-foreground sm:text-3xl">LS</span>
              <span className="font-heading text-sm font-semibold tracking-wide text-foreground sm:text-base">
                Roots &amp; Branch
              </span>
            </span>
            <span className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-muted-foreground sm:text-[10px]">
              HANDYMAN &amp; GARDENING
            </span>
          </span>
        </Link>

        <ul className="relative z-10 hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={cn(
                    'relative pb-1 text-xs font-semibold tracking-[0.12em] uppercase transition-colors',
                    isActive ? 'text-primary' : 'text-foreground/75 hover:text-primary',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="relative z-10 hidden lg:block">
          <CTAButton className="rounded-[11px] px-7 uppercase" render={<Link href="#contact" />}>
            Get a Free Quote
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
        >
          {isOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden',
          isOpen ? 'max-h-[28rem]' : 'max-h-0 border-t-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  setActiveHash(link.href)
                  setIsOpen(false)
                }}
                className={cn(
                  'block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted hover:text-primary',
                  activeHash === link.href ? 'text-primary' : 'text-foreground/85',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <CTAButton
              render={<Link href="#contact" onClick={() => setIsOpen(false)} />}
              className="w-full justify-center"
            >
              Get a Free Quote
            </CTAButton>
          </li>
        </ul>
      </div>
    </header>
  )
}
