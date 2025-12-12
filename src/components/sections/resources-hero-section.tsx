'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { BookOpen } from 'lucide-react'

export function ResourcesHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Student Resources"
            subtitle="Tools & Support"
            description="Access helpful resources, study materials, and support services to help you succeed in your educational journey"
            icon={<BookOpen className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  )
}
