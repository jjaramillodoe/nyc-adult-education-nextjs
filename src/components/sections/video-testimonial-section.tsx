'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { Play } from 'lucide-react'

export function VideoTestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Featured Testimonial"
            subtitle="Student Success Story"
            description="Watch this inspiring testimonial from one of our students who transformed their life through Adult Education"
            icon={<Play className="w-8 h-8" />}
          />

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gBuJFi-i3SM"
                title="Student Testimonial - NYC Adult Education"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real Stories, Real Impact
              </h3>
              <p className="text-gray-600">
                Hear directly from our students about their educational journey, challenges overcome, and dreams achieved through our Adult Education programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
