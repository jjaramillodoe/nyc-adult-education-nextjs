'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { GraduationCap } from 'lucide-react'

export function AboutHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="About Adult Education"
            subtitle="Our Story"
            description="Discover how we're transforming lives through accessible, quality education for adults across New York City"
            icon={<GraduationCap className="w-8 h-8" />}
          />
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Adult Education offers <span className="font-semibold text-nyc-blue-600">tuition-free classes</span> for eligible students (21 years and older who have not earned a U.S. high school diploma or equivalency) in:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-nyc-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Adult Basic Education (ABE)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-nyc-green-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Career and Technical Education (CTE)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-nyc-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">High School Equivalency Preparation (HSE)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-nyc-teal-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">English for Speakers of Other Languages (ESOL)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 p-6 rounded-lg border-l-4 border-nyc-blue-500">
                <p className="text-gray-700 italic">
                  "We believe that education is a lifelong journey, and every adult deserves the opportunity to pursue their dreams, advance their career, and improve their quality of life through quality education."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
