import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ProgramsSection } from '@/components/sections/programs-section'
import { StatsSection } from '@/components/sections/stats-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { NewsSection } from '@/components/sections/news-section'
import { CTASection } from '@/components/sections/cta-section'
import { OverviewSection } from '@/components/sections/overview-section'
import { EnrollmentInfoSection } from '@/components/sections/enrollment-info-section'
import { TestingLocationsSection } from '@/components/sections/testing-locations-section'
import { FAQSection } from '@/components/sections/faq-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { PartnersSection } from '@/components/sections/partners-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProgramsSection />
        <GallerySection />
        <PartnersSection />
        <OverviewSection />
        <EnrollmentInfoSection />
        <TestingLocationsSection />
        <FAQSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
