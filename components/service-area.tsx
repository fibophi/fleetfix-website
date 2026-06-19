import { CoverageMap } from './coverage-map'

const SHIELDS = [
  { route: '400', dir: 'North · to Barrie', blue: false },
  { route: '401', dir: 'West & East · London to Belleville', blue: false },
  { route: 'QEW', dir: 'South · QEW to Niagara / Fort Erie', blue: true },
  { route: '406', dir: 'South · 406 to Welland', blue: false },
]

export function ServiceArea() {
  return (
    <section id="area" className="bg-asphalt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis">
          Where we roll
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-offwhite text-balance">
          Mobile coverage across the 400-series corridor.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted2">
          Based in Mississauga, our units run the major highways across Southern
          Ontario.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — shields */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {SHIELDS.map((s) => (
                <div
                  key={s.route}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-steel/40 p-4"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md border-2 font-mono text-lg font-semibold ${
                      s.blue
                        ? 'border-white/40 bg-[#1C3A6E] text-offwhite'
                        : 'border-ink/20 bg-offwhite text-ink'
                    }`}
                  >
                    {s.route}
                  </span>
                  <span className="text-sm font-medium leading-snug text-concrete">
                    {s.dir}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted2">
              Not sure if you&apos;re in range? Call dispatch — if we can reach
              you, we&apos;ll tell you straight, and how fast.
            </p>
          </div>

          {/* Right — coverage map */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-[#0F151A] p-5">
              <CoverageMap />
            </div>
            <p className="mt-3 font-mono text-xs leading-relaxed text-muted-dark">
              {'// Stylized coverage map — not to scale. Call dispatch to confirm your location.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
