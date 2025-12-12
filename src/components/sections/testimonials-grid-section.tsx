'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/static-data'

export function TestimonialsGridSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="More Success Stories"
            subtitle="Student Voices"
            description="Read testimonials from students across all our programs who have achieved their educational and career goals"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-2 bg-gradient-to-br from-nyc-blue-500 to-nyc-green-500 rounded-full text-white flex-shrink-0">
                      <Quote className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        {testimonial.program} Graduate
                        {testimonial.location && ` • ${testimonial.location}`}
                        {testimonial.graduationYear && ` • ${testimonial.graduationYear}`}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {testimonial.currentRole && (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Current Role:</span> {testimonial.currentRole}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 p-8 rounded-2xl border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Share Your Story
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Are you a current or former student? We'd love to hear about your experience and how Adult Education has impacted your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors"
                >
                  Share Your Testimonial
                </a>
                <a
                  href="/enrollment"
                  className="inline-flex items-center px-8 py-3 border-2 border-nyc-blue-600 text-nyc-blue-600 font-semibold rounded-lg hover:bg-nyc-blue-600 hover:text-white transition-colors"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
