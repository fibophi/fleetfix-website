import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ShopOnMove } from '@/components/shop-on-move'
import { MtoWedge } from '@/components/mto-wedge'
import { ForFleets } from '@/components/for-fleets'
import { Services } from '@/components/services'
import { ServiceArea } from '@/components/service-area'
import { About } from '@/components/about'
import { ComingSoon } from '@/components/coming-soon'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { MobileCallBar } from '@/components/mobile-call-bar'

export default function Home() {
  return (
    <div className="min-h-screen bg-asphalt">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <ShopOnMove />
        <MtoWedge />
        <ForFleets />
        <Services />
        <ServiceArea />
        <About />
        <ComingSoon />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  )
}
