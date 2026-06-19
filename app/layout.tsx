import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title:
    'FleetFix — 24/7 Truck & Trailer Repair · On-Site MTO Inspections · Mississauga',
  description:
    '24/7 mobile and in-shop truck & trailer repair in Mississauga. MTO-certified to perform annual safety inspections at your yard with our mobile units. Roadside, scheduled fleet PM, brakes, tires, engine repair. Dispatch: (437) 237-8567.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#15191D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${plexMono.variable} bg-asphalt`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
