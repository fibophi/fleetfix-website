import { Check, Phone } from 'lucide-react'

const COVERS = [
  'On-site annual trailer safeties; truck safeties in-shop',
  'Scheduled preventative maintenance on your cycle',
  'Brakes, tires, oil & fluids handled in the same visit',
  '24/7 roadside priority when a unit goes down',
  'One point of contact for the whole program',
]

export function ForFleets() {
  return (
    <section id="fleet" className="bg-concrete-2 py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <div>
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis-deep">
            For fleets
          </p>
          <h2 className="mt-3 font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-balance">
            One vendor for inspections and maintenance.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            Hire FleetFix to keep your equipment road-legal and running — annual
            safety inspections and scheduled PM, coordinated for your whole fleet
            and carried out at your yard.
          </p>
          <p className="mt-4 leading-relaxed text-muted-dark">
            Whether you run five trucks or fifty, we&apos;ll build a recurring
            schedule around your routes and downtime so nothing falls behind and
            nothing gets parked waiting on a shop.
          </p>
        </div>

        {/* Right — dark card */}
        <div className="rounded-2xl bg-asphalt p-8 text-offwhite lg:p-10">
          <h3 className="font-heading text-2xl font-bold uppercase text-offwhite">
            A fleet partnership covers
          </h3>
          <ul className="mt-6 space-y-3.5">
            {COVERS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-hivis text-ink">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="leading-relaxed text-concrete">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted2">
            Tell dispatch your fleet size and where you&apos;re based — we&apos;ll
            put a plan together.
          </p>
          <a
            href="tel:+14372378567"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-hivis px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-hivis-deep"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Talk to dispatch about a fleet plan
          </a>
        </div>
      </div>
    </section>
  )
}
