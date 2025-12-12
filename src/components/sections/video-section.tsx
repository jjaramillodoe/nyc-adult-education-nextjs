'use client'

import { SectionTitle } from '@/components/ui/section-title'
import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Featured Video"
            subtitle="Watch & Learn"
            description="Discover more about our Adult Education programs and hear from our students and staff"
            icon={<Play className="w-8 h-8" />}
          />

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0QBKbXy-74k"
                title="NYC Adult Education Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                NYC Adult Education Overview
              </h3>
              <p className="text-gray-600">
                Learn about our comprehensive adult education programs and how we're transforming lives across New York City.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
