import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ResourcesHeroSection } from '@/components/sections/resources-hero-section'
import { ResourcesSection } from '@/components/sections/resources-section'
import { HelpfulLinksSection } from '@/components/sections/helpful-links-section'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ResourcesHeroSection />
        <ResourcesSection />
        <HelpfulLinksSection />
      </main>
      <Footer />
    </div>
  )
}