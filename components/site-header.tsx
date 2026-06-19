'use client'

import { useState } from 'react'
import { Truck, Menu, X, Phone } from 'lucide-react'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'MTO Inspections', href: '#inspections' },
  { label: 'For Fleets', href: '#fleet' },
  { label: 'Service Area', href: '#area' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* Wordmark */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-hivis text-ink">
            <Truck className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-heading text-2xl font-extrabold uppercase tracking-wide text-offwhite">
            Fleet<span className="text-hivis">Fix</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 min-[921px]:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted2 transition-colors hover:text-offwhite"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop call button */}
        <a
          href="tel:+14372378567"
          className="hidden items-center gap-2 rounded-lg bg-hivis px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-colors hover:bg-hivis-deep min-[921px]:flex"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          24/7 · (437) 237-8567
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-offwhite min-[921px]:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-white/10 bg-asphalt-2 px-5 py-4 min-[921px]:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-semibold text-offwhite hover:bg-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
