import { CalendarPlus, CreditCard, MessageSquare } from 'lucide-react'

const ITEMS = [
  {
    icon: CalendarPlus,
    title: 'Book a service online',
    copy: 'Schedule shop visits, PM service and safety inspections without picking up the phone.',
    button: 'Schedule — coming soon',
  },
  {
    icon: CreditCard,
    title: 'Pay online',
    copy: 'Settle invoices and deposits securely from your phone, in the yard or on the road.',
    button: 'Pay invoice — coming soon',
  },
  {
    icon: MessageSquare,
    title: 'Chat with dispatch',
    copy: 'A quick chat to triage your issue before you call, so the conversation starts on point.',
    button: 'Start chat — coming soon',
  },
]

export function ComingSoon() {
  return (
    <section className="bg-asphalt-2 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <span className="inline-block rounded-full bg-hivis/15 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-hivis">
          Coming soon
        </span>
        <h2 className="mt-4 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-offwhite text-balance">
          More ways to work with us — on the way.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted2">
          We&apos;re building these out next. For now, the fastest way to
          anything is the dispatch line.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-dashed border-white/20 bg-transparent p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-muted2">
                <item.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold uppercase text-offwhite">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted2">{item.copy}</p>
              <button
                type="button"
                disabled
                className="mt-5 w-full cursor-not-allowed rounded-lg border border-white/15 px-4 py-2.5 font-mono text-sm font-semibold uppercase tracking-wide text-muted-dark opacity-60"
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
