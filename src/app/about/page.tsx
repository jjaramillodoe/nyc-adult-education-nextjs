import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AboutHeroSection } from '@/components/sections/about-hero-section'
import { MissionVisionSection } from '@/components/sections/mission-vision-section'
import { AboutGallerySection } from '@/components/sections/about-gallery-section'
import { ProgramsOverviewSection } from '@/components/sections/programs-overview-section'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <ProgramsOverviewSection />
        <AboutGallerySection />
      </main>
      <Footer />
    </div>
  )
}
