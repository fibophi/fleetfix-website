'use client'

import { useState, type FormEvent } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'

// Replace REPLACE_ME with your Formspree form ID to receive submissions by email.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME'

const EQUIPMENT = ['Truck', 'Trailer', 'Both', 'Fleet']
const NEEDS = [
  'Roadside / emergency',
  'Annual safety inspection',
  'On-site fleet inspections',
  'PM / scheduled maintenance',
  'Shop repair',
  'Brakes',
  'Tires',
  'Oil change',
  'Other',
]

const fieldClass =
  'w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-hivis-deep focus:ring-2 focus:ring-hivis/40'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    if (FORMSPREE_ENDPOINT.includes('REPLACE_ME')) {
      // Fallback: open the user's email client with the details prefilled.
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('%0D%0A')
      window.location.href = `mailto:dispatch@fleetfix.ca?subject=Service%20request&body=${body}`
      setStatus('sent')
      form.reset()
      return
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-concrete py-20 text-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-sm font-medium uppercase tracking-wider text-hivis-deep">
          Get a hold of us
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-[clamp(28px,4.5vw,44px)] font-bold uppercase leading-tight text-balance">
          Call dispatch or send the details.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact details */}
          <div className="space-y-7">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-dark">
                <Phone className="h-4 w-4 text-hivis-deep" /> 24/7 Dispatch
              </p>
              <a
                href="tel:+14372378567"
                className="mt-1 block font-mono text-3xl font-semibold text-ink transition-colors hover:text-hivis-deep sm:text-4xl"
              >
                (437) 237-8567
              </a>
            </div>

            <div>
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-dark">
                <MapPin className="h-4 w-4 text-hivis-deep" /> Shop
              </p>
              <p className="mt-1 text-lg leading-relaxed">
                6731 Columbus Rd, Unit 13, Mississauga, ON L5T 2M4
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-dark">
                <Clock className="h-4 w-4 text-hivis-deep" /> Hours
              </p>
              <p className="mt-1 text-lg leading-relaxed">
                Open 24 hours · 7 days a week
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-ink/10">
              <iframe
                title="FleetFix shop location map"
                src="https://www.google.com/maps?q=6731+Columbus+Rd+%2313,+Mississauga,+ON+L5T+2M4&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-ink/10 bg-paper p-7 lg:p-8">
            <h3 className="font-heading text-2xl font-bold uppercase">
              Request service, an inspection, or a fleet plan
            </h3>

            {status === 'sent' ? (
              <div className="mt-6 rounded-lg bg-hivis/15 p-5 text-ink">
                <p className="font-semibold">Thanks — your request is on its way.</p>
                <p className="mt-1 text-sm text-muted-dark">
                  For anything urgent, call dispatch at (437) 237-8567.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Name
                    <input
                      name="name"
                      type="text"
                      required
                      className={`mt-1.5 ${fieldClass}`}
                    />
                  </label>
                  <label className="block text-sm font-semibold">
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      required
                      className={`mt-1.5 ${fieldClass}`}
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    Equipment
                    <select name="equipment" className={`mt-1.5 ${fieldClass}`}>
                      {EQUIPMENT.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-semibold">
                    I need
                    <select name="need" className={`mt-1.5 ${fieldClass}`}>
                      {NEEDS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  Where are you?
                  <input
                    name="location"
                    type="text"
                    placeholder="City, highway, or yard address"
                    className={`mt-1.5 ${fieldClass}`}
                  />
                </label>

                <label className="block text-sm font-semibold">
                  Details
                  <textarea
                    name="details"
                    rows={4}
                    className={`mt-1.5 ${fieldClass}`}
                  />
                </label>

                {status === 'error' && (
                  <p className="text-sm font-medium text-red-700">
                    Something went wrong. Please call dispatch instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-hivis px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-hivis-deep disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send request'}
                </button>
                <p className="text-center text-sm text-muted-dark">
                  For anything urgent, call dispatch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
