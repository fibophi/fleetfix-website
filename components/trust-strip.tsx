const STATS = [
  { value: '24/7', label: 'Roadside dispatch' },
  { value: '6', label: 'Mobile units' },
  { value: 'MTO', label: 'Certified inspections' },
  { value: '1→6', label: 'Trucks in 5 years' },
]

export function TrustStrip() {
  return (
    <>
      {/* Hazard-stripe divider */}
      <div className="hazard-stripe h-3 w-full" aria-hidden="true" />

      <section className="bg-steel">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-2 lg:grid-cols-4 lg:px-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-6 text-center"
            >
              <span className="font-mono text-3xl font-semibold text-hivis sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-muted2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
