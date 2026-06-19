import { Phone } from 'lucide-react'

export function MobileCallBar() {
  return (
    <a
      href="tel:+14372378567"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2.5 bg-hivis py-3.5 font-mono text-base font-semibold text-ink shadow-[0_-4px_20px_rgba(0,0,0,0.35)] min-[921px]:hidden"
    >
      <span className="beacon" aria-hidden="true" />
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      Call 24/7 Dispatch
    </a>
  )
}
