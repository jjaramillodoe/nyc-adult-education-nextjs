import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { TestimonialsHeroSection } from '@/components/sections/testimonials-hero-section'
import { VideoTestimonialSection } from '@/components/sections/video-testimonial-section'
import { TestimonialsGridSection } from '@/components/sections/testimonials-grid-section'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TestimonialsHeroSection />
        <VideoTestimonialSection />
        <TestimonialsGridSection />
      </main>
      <Footer />
    </div>
  )
}
