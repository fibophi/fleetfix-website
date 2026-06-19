import { ShieldCheck, BadgeCheck, Handshake } from 'lucide-react'

const BADGES = [
  {
    icon: ShieldCheck,
    title: 'MTO-certified',
    copy: 'Authorized for annual safety inspections — including off-site at your yard.',
  },
  {
    icon: BadgeCheck,
    title: 'Fully insured',
    copy: 'Proper coverage on every job, in the shop and on your property.',
  },
  {
    icon: Handshake,
    title: 'Fair & honest',
    copy: 'Straight answers and fair pricing — the reason customers come back.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-concrete-2 py-20 text-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis-deep">
          About FleetFix
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-balance">
          From one truck to six in five years.
        </h2>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              FleetFix started five years ago with a{' '}
              <strong className="font-bold text-ink">
                single service truck
              </strong>{' '}
              and a simple promise: show up fast, fix it right, charge fairly.
              Today we run{' '}
              <strong className="font-bold text-ink">six mobile units</strong>{' '}
              and a full shop in Mississauga, serving owner-operators and fleets
              across Southern Ontario.
            </p>
            <p>
              We belong to an exclusive group of Ontario truck &amp; trailer
              technicians who are{' '}
              <strong className="font-bold text-ink">
                MTO-certified, fully insured, and committed to fair, honest work
              </strong>{' '}
              — including the rare authorization to perform annual safety
              inspections off-site, at your yard.
            </p>
          </div>

          {/* Growth element */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-ink/10 bg-asphalt p-8 text-center text-offwhite">
            <span className="font-heading text-6xl font-extrabold uppercase text-hivis sm:text-7xl">
              1 → 6
            </span>
            <span className="mt-2 font-mono text-sm uppercase tracking-wider text-muted2">
              service trucks in 5 years
            </span>
          </div>
        </div>

        {/* Badge cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-ink/10 bg-paper p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-hivis/15 text-hivis-deep">
                <b.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold uppercase">
                {b.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-dark">{b.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
