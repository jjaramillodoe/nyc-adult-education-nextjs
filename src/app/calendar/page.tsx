import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CalendarHeroSection } from '@/components/sections/calendar-hero-section'
import { CalendarSection } from '@/components/sections/calendar-section'

export default function CalendarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CalendarHeroSection />
        <CalendarSection />
      </main>
      <Footer />
    </div>
  )
}
