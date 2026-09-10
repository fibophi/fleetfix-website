import { Check } from 'lucide-react'

const CHECKS = [
  'Annual trailer safety inspections done right in your yard',
  'Truck safeties handled in our Mississauga shop',
  'Off-site truck repairs still come to you',
  'Pair a trailer safety with PM service in the same visit',
  'Keep your whole fleet current on one coordinated schedule',
]

const STATS = [
  { value: '0', label: 'trailers shunted' },
  { value: '1', label: 'visit, fleet-wide' },
  { value: '24/7', label: 'scheduling' },
]

// Per shunt (~$284): 2 hrs driver at $25/hr = $50 + 2 hrs opportunity cost at
// $90/hr = $180 + 50km round trip at 38 L/100km x $2.19/L = 19L = $41.61 fuel
// + 50km wear & tear at $0.25/km = $12.50 => $284.11/shunt
const SAVINGS = [
  { trailers: '5', month: '$1,421' },
  { trailers: '10', month: '$2,841' },
  { trailers: '20', month: '$5,682' },
]

export function MtoWedge() {
  return (
    <section id="inspections" className="bg-hivis py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-block rounded-full bg-ink px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-hivis">
            MTO-Certified · Trailer safeties off-site
          </span>
          <h2 className="mt-5 font-heading text-[clamp(28px,4.5vw,46px)] font-bold uppercase leading-[1.05] text-balance">
            Trailer safeties — without leaving the yard.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            In Ontario, most shops can only certify an annual safety inspection
            on their own premises. FleetFix is part of a select group authorized
            to inspect trailers off-site, so trailer safeties come to your yard.
            Truck safeties are done in our shop — but we&apos;ll still come to you
            for off-site truck repairs.
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
            An off-site trailer safety skips the round trip, the driver time, and
            the gap in your schedule. Multiply that across a fleet and the
            difference adds up fast.
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

          {/* Savings breakdown */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-hivis">
              What you keep every month
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {SAVINGS.map((row) => (
                <div
                  key={row.trailers}
                  className="rounded-xl bg-white/5 p-4 text-center"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted2">
                    {row.trailers} trailers/mo
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-offwhite sm:text-3xl">
                    {row.month}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-bold leading-none text-hivis sm:text-3xl">
                    saved!
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-muted2">
              Based on ~$284 per avoided shunt: 2 hrs driver time at $25/hr, 2
              hrs opportunity cost at $90/hr, a 50 km round trip at 38 L/100 km
              and $2.19/L diesel, plus $0.25/km wear and tear. Your numbers scale
              with distance and fleet size.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
