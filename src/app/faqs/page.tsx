import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FAQHeroSection } from '@/components/sections/faq-hero-section'
import { FAQSection } from '@/components/sections/faq-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FAQHeroSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
