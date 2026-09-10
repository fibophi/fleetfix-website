import { Siren, ClipboardCheck, CalendarClock } from 'lucide-react'

const CARDS = [
  {
    icon: Siren,
    title: 'Emergency roadside',
    copy: 'Eight mobile units running 24/7 for breakdowns, blowouts, brakes and air faults. We carry the parts to fix most jobs on the spot — or get you safely towed to our bay.',
    tag: 'Answered any hour',
  },
  {
    icon: ClipboardCheck,
    title: 'On-site trailer safeties',
    copy: 'Certified to perform annual trailer safety inspections with our mobile units — at your yard. Truck safeties are done in-shop, but off-site truck repairs come to you.',
    tag: 'Few in Ontario can',
  },
  {
    icon: CalendarClock,
    title: 'Scheduled PM & maintenance',
    copy: 'Recurring preventative maintenance, oil and fluids, brakes and tires — done on a schedule that fits your routes, in our shop or on your lot.',
    tag: 'Built around uptime',
  },
]

export function ShopOnMove() {
  return (
    <section className="bg-asphalt-2 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis">
          Three ways we come to you
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-offwhite text-balance">
          The shop, on the move.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted2">
          Most of what your truck or trailer needs, we can do where it already
          sits — the shoulder of the 401 or the back of your yard.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-white/10 bg-steel/40 p-7 transition-all hover:-translate-y-1 hover:border-hivis/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-hivis/15 text-hivis">
                <card.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-offwhite">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted2">{card.copy}</p>
              <span className="mt-5 inline-block rounded-full bg-hivis/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-hivis">
                {card.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
