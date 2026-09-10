import { Truck } from 'lucide-react'

const SERVICES = [
  'On-site trailer safeties',
  'Fleet maintenance',
  'Mobile roadside',
  'PM service',
  'Brakes/tires/oil',
]

export function SiteFooter() {
  return (
    <footer className="bg-asphalt pb-24 pt-16 min-[921px]:pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-hivis text-ink">
                <Truck className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-heading text-2xl font-extrabold uppercase tracking-wide text-offwhite">
                Fleet<span className="text-hivis">Fix</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted2">
              24/7 mobile and in-shop truck &amp; trailer repair. MTO-certified
              for on-site annual trailer safeties and in-shop truck safeties
              across Southern Ontario.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-hivis">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-muted2 transition-colors hover:text-offwhite"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-hivis">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-muted2">
              <li>
                <a
                  href="tel:+14372378567"
                  className="font-mono text-offwhite transition-colors hover:text-hivis"
                >
                  (437) 237-8567
                </a>{' '}
                · 24/7
              </li>
              <li>6731 Columbus Rd, Unit 13</li>
              <li>Mississauga, ON L5T 2M4</li>
              <li>Open 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FleetFix. All rights reserved.</p>
          <p className="font-mono">
            MTO-certified · Insured · Mississauga &amp; Southern Ontario
          </p>
        </div>
      </div>
    </footer>
  )
}
