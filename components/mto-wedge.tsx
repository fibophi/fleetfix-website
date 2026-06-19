import { Check } from 'lucide-react'

const CHECKS = [
  'Annual safety inspections for trucks and trailers, done in your yard',
  'No shunting equipment to a shop — no driver hours or fuel burned',
  'Pair inspections with PM service in the same visit',
  'Keep your whole fleet current on one coordinated schedule',
]

const STATS = [
  { value: '0', label: 'trucks shunted' },
  { value: '1', label: 'visit, fleet-wide' },
  { value: '24/7', label: 'scheduling' },
]

export function MtoWedge() {
  return (
    <section id="inspections" className="bg-hivis py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-block rounded-full bg-ink px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-hivis">
            MTO-Certified · Authorized off-site
          </span>
          <h2 className="mt-5 font-heading text-[clamp(28px,4.5vw,46px)] font-bold uppercase leading-[1.05] text-balance">
            Annual inspections — without leaving the yard.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            In Ontario, most shops can only certify an annual safety inspection
            on their own premises, which means hauling each truck and trailer in
            and back. FleetFix is part of a select group authorized to inspect
            off-site, so we bring the inspection to you.
          </p>
          <ul className="mt-7 space-y-3.5">
            {CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink text-hivis">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — dark savings card */}
        <div className="rounded-2xl bg-asphalt p-8 text-offwhite lg:p-10">
          <p className="font-mono text-sm font-semibold uppercase tracking-wider text-hivis">
            Why fleets choose on-site
          </p>
          <p className="mt-4 font-heading text-[clamp(24px,3.5vw,34px)] font-bold uppercase leading-tight text-balance">
            Every shunt to a shop is money out of your pocket.
          </p>
          <p className="mt-4 leading-relaxed text-muted2">
            An off-site inspection skips the round trip, the driver time, and the
            gap in your schedule. Multiply that across a fleet and the difference
            adds up fast.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-semibold text-hivis sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
