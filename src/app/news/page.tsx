import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NewsHeroSection } from '@/components/sections/news-hero-section'
import { VideoSection } from '@/components/sections/video-section'
import { NewsArticlesSection } from '@/components/sections/news-articles-section'

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsHeroSection />
        <VideoSection />
        <NewsArticlesSection />
      </main>
      <Footer />
    </div>
  )
}