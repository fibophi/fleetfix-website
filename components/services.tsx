import {
  ShieldCheck,
  Siren,
  Container,
  Truck,
  Gauge,
  Disc3,
  CircleDot,
  Droplet,
  Cog,
  ArrowRight,
} from 'lucide-react'

const FEATURED = {
  icon: ShieldCheck,
  title: 'Annual Safety Inspections',
  copy: 'MTO-certified annual inspections: trucks in our shop, and — uniquely — trailers at your yard with our mobile units.',
  tag: 'Trucks in-shop · trailers on-site',
}

const SERVICES = [
  {
    icon: Siren,
    title: '24/7 Mobile Roadside',
    copy: 'Eight units across Southern Ontario for breakdowns, blowouts and emergency repairs — any hour.',
    href: '#inspections',
  },
  {
    icon: Container,
    title: 'Trailer Repair',
    copy: 'Reefers, dry vans, flatbeds — structural, electrical, brakes, doors, landing gear and more.',
  },
  {
    icon: Truck,
    title: 'Truck Repair',
    copy: 'Mechanical repairs and engine work — diagnostics, electrical, drivetrain and more.',
  },
  {
    icon: Gauge,
    title: 'Preventative Maintenance',
    copy: 'Scheduled PM service that catches small problems before they strand you and your load.',
  },
  {
    icon: Disc3,
    title: 'Brake Jobs',
    copy: 'Air and hydraulic brake service, drums, shoes, adjustments and full system repairs.',
  },
  {
    icon: CircleDot,
    title: 'Tires',
    copy: 'Replacement, repair, and roadside change-outs for tractor and trailer positions.',
  },
  {
    icon: Droplet,
    title: 'Oil Changes & Fluids',
    copy: "Engine oil, filters and full fluid service done fast so you're back on schedule.",
  },
  {
    icon: Cog,
    title: 'Engine & Transmission Rebuilds',
    copy: 'Bigger jobs like full rebuilds are handled through our trusted partner shop next door — one point of contact, start to finish.',
    tag: 'Via partner shop',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-concrete py-20 text-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis-deep">
          Full-service shop &amp; mobile
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-balance">
          Everything to keep your truck and trailer working.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-dark">
          From a roadside blowout to a full rebuild — in the bay or on the road,
          for owner-operators and fleets alike.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured dark card */}
          <div className="rounded-xl border border-hivis/30 bg-asphalt p-7 text-offwhite sm:col-span-2 lg:col-span-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-hivis text-ink">
              <FEATURED.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-bold uppercase">
              {FEATURED.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted2">{FEATURED.copy}</p>
            <span className="mt-5 inline-block rounded-full bg-hivis/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-hivis">
              {FEATURED.tag}
            </span>
          </div>

          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-hivis-deep/50 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink/5 text-hivis-deep">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold uppercase">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-dark">{s.copy}</p>
              {s.href && (
                <a
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-hivis-deep hover:underline"
                >
                  See mobile units <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
              {s.tag && (
                <span className="mt-5 inline-block rounded-full bg-ink/5 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-muted-dark">
                  {s.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
