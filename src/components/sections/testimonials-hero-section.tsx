'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { Heart } from 'lucide-react'

export function TestimonialsHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Student Testimonials"
            subtitle="Success Stories"
            description="Hear from our students about their transformative journeys and how Adult Education has changed their lives"
            icon={<Heart className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  )
}
