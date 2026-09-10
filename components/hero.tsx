import { Phone, ShieldCheck, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src="/hero-vans.png"
        alt="FleetFix mobile service vans with the Toronto skyline at sunset"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      {/* Left-to-right dark gradient + bottom gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(95deg, rgba(15,19,23,.93) 0%, rgba(15,19,23,.78) 38%, rgba(15,19,23,.44) 66%, rgba(15,19,23,.12) 100%), linear-gradient(to top, rgba(15,19,23,.85), rgba(15,19,23,0) 40%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[980px]">
          {/* Eyebrow */}
          <p className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-hivis sm:text-sm">
            <span className="beacon" aria-hidden="true" />
            24/7 Mobile + In-Shop · MTO-Certified · Mississauga, ON
          </p>

          {/* H1 */}
          <h1 className="mt-5 font-heading text-[clamp(31px,6vw,54px)] font-extrabold uppercase leading-[1.02] text-offwhite min-[921px]:whitespace-nowrap">
            We bring the shop <span className="text-hivis">to you.</span>
          </h1>

          {/* Checklist — same font/size as H1 */}
          <ul className="mt-6 space-y-1.5 font-heading text-[clamp(31px,6vw,54px)] font-extrabold uppercase leading-[1.02] text-offwhite">
            <li className="min-[921px]:whitespace-nowrap">
              <span className="text-[0.7em]">✅</span> Roadside Repairs
            </li>
            <li className="min-[921px]:whitespace-nowrap">
              <span className="text-[0.7em]">✅</span> Fleet Maintenance Programs
            </li>
            <li className="min-[921px]:whitespace-nowrap">
              <span className="text-[0.7em]">✅</span> Mobile Trailer Safeties —{' '}
              <span className="text-hivis">AT YOUR YARD</span>
            </li>
          </ul>

          {/* Lede */}
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-concrete sm:text-lg">
            We&apos;re one of the select few in Ontario certified to perform
            annual <strong className="font-bold text-hivis">trailer</strong>{' '}
            safety inspections with our mobile units{' '}
            <strong className="font-bold text-hivis">
              — right in your yard.
            </strong>{' '}
            Truck safeties are done in our Mississauga shop, but we still come to
            you for off-site truck repairs. Plus 24/7 emergency roadside and
            scheduled maintenance, all from one team.
          </p>

          {/* Dispatch card */}
          <div className="mt-8 max-w-md rounded-xl border border-hivis/30 bg-white/5 p-5 backdrop-blur-sm">
            <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-muted2">
              <span className="beacon" aria-hidden="true" />
              Dispatch line · answered 24/7
            </p>
            <a
              href="tel:+14372378567"
              className="mt-2 block font-mono text-3xl font-semibold text-offwhite transition-colors hover:text-hivis sm:text-4xl"
            >
              (437) 237-8567
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted2">
              Breakdowns, bookings &amp; fleet inquiries — a real dispatcher, not
              a queue.
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+14372378567"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-hivis px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-hivis-deep"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call dispatch now
            </a>
            <a
              href="#inspections"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-offwhite transition-colors hover:border-hivis hover:text-hivis"
            >
              Mobile inspections <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating MTO Certified badge */}
      <div className="absolute bottom-6 right-5 hidden items-center gap-2 rounded-lg bg-hivis px-4 py-2.5 font-mono text-sm font-semibold text-ink shadow-lg sm:flex lg:right-8">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
        MTO Certified
      </div>
    </section>
  )
}
