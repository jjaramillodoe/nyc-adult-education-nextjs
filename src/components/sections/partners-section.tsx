'use client'

import Image from 'next/image'
import { SectionTitle } from '@/components/ui/section-title'
import { Users } from 'lucide-react'

export function PartnersSection() {
  const partners = [
    { name: 'CUNY', logo: '/images/partners/imgi_10_CUNY-2.jpg' },
    { name: 'Queens Presbyterian Hospital', logo: '/images/partners/imgi_11_Queens-Prebysterian-Hospital-2.jpg' },
    { name: 'Voces Latinas', logo: '/images/partners/imgi_12_Voces-Latinas-2.png' },
    { name: 'DYCD Beacon', logo: '/images/partners/imgi_13_DYCD_Beacon_logo_color_horizontal-2.png' },
    { name: 'GRYC', logo: '/images/partners/imgi_2_GRYC-NEW-LOGO-2.png' },
    { name: 'Make the Road New York', logo: '/images/partners/imgi_3_Make-the-Road-New-York-2.png' },
    { name: 'Hispanic Federation', logo: '/images/partners/imgi_5_hispanic-federation_full_image-2.jpg' },
    { name: 'Cabrini Immigrant Services', logo: '/images/partners/imgi_6_Cabrini-Immigrant-Services-of-NYC-2.jpg' },
    { name: 'IncludeNYC', logo: '/images/partners/imgi_7_includeNYC_social-2.png' },
    { name: 'La Jornada', logo: '/images/partners/imgi_8_LOGO-LA-JORNADA-2-2.png' },
    { name: 'Queens Community House', logo: '/images/partners/imgi_9_Queens-community-House-2.png' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Partners"
            subtitle="Collaboration"
            description="Working together to provide quality adult education across New York City"
            icon={<Users className="w-8 h-8" />}
          />

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="relative w-full h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Partner Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              These organizations work alongside NYC Adult Education to expand access to quality education and training opportunities.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-nyc-blue-50 rounded-lg">
              <span className="text-nyc-blue-700 font-medium">
                Interested in becoming a partner? 
                <a href="mailto:adultednyc@schools.nyc.gov" className="ml-1 underline hover:text-nyc-blue-800">
                  Contact us
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
