import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { LiteracyZonesHeroSection } from '@/components/sections/literacy-zones-hero-section'
import { LiteracyZonesSection } from '@/components/sections/literacy-zones-section'
import { CommunityImpactSection } from '@/components/sections/community-impact-section'

export default function LiteracyZonesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LiteracyZonesHeroSection />
        <LiteracyZonesSection />
        <CommunityImpactSection />
      </main>
      <Footer />
    </div>
  )
}
