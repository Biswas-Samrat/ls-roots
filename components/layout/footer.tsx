import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-foreground/95">
                <Image
                  src="/images/logo-tree.png"
                  alt="LS Roots & Branch logo"
                  width={44}
                  height={44}
                  className="size-[112%] object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold">{siteConfig.name}</span>
                <span className="text-xs font-medium text-primary-foreground/70">
                  {siteConfig.tagline}
                </span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Local, reliable handyman and gardening services in Spalding &amp; surrounding
              areas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-primary-foreground/90">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-primary-foreground/90">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-primary-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>Facebook / Messenger: {siteConfig.facebook}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-primary-foreground/90">
              Service Area
            </h3>
            <p className="flex items-start gap-2.5 text-sm text-primary-foreground/75">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.serviceArea}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-primary-foreground/15 pt-8 text-center text-xs text-primary-foreground/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  )
}
