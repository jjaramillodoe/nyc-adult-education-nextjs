'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { HelpCircle } from 'lucide-react'

export function FAQHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Get Answers"
            description="Find answers to the most common questions about our Adult Education programs, enrollment process, and services"
            icon={<HelpCircle className="w-8 h-8" />}
          />
        </div>
      </div>
    </section>
  )
}
