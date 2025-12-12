'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { Newspaper } from 'lucide-react'

export function NewsHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="News & Updates"
            subtitle="Stay Informed"
            description="Stay up to date with the latest news, announcements, and updates from NYC Adult Education"
            icon={<Newspaper className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  )
}
