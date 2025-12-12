'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Users, BookOpen } from 'lucide-react'

export function LiteracyZonesSection() {
  const literacyZones = [
    {
      borough: 'Bronx',
      name: 'Bronx Literacy Zone',
      address: '1555 Jerome Avenue, Bronx, NY 10452',
      programs: ['ABE', 'ESOL', 'HSE'],
      hours: 'Monday-Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 3:00 PM',
      description: 'Located in the heart of the Bronx, this literacy zone serves as a community hub for adult education and family literacy programs.',
      features: ['Family Literacy Programs', 'Computer Lab', 'Childcare Services', 'Community Events']
    },
    {
      borough: 'Brooklyn',
      name: 'Brooklyn Literacy Zone',
      address: '1200 Bay Ridge Avenue, Brooklyn, NY 11219',
      programs: ['ABE', 'CTE', 'HSE', 'ESOL'],
      hours: 'Monday-Friday: 8:00 AM - 9:00 PM, Saturday: 9:00 AM - 4:00 PM',
      description: 'A comprehensive learning center offering all four program types with state-of-the-art facilities and multilingual support.',
      features: ['Career Counseling', 'Job Placement Services', 'Language Support', 'Digital Literacy']
    },
    {
      borough: 'Manhattan',
      name: 'Manhattan Literacy Zone',
      address: '540 West 49th Street, Manhattan, NY 10019',
      programs: ['ABE', 'CTE', 'HSE', 'ESOL'],
      hours: 'Monday-Friday: 8:00 AM - 9:00 PM, Saturday: 9:00 AM - 2:00 PM',
      description: 'Strategically located in Mid-Manhattan, this zone provides easy access to adult education services for working professionals.',
      features: ['Evening Classes', 'Weekend Programs', 'Professional Development', 'Networking Events']
    },
    {
      borough: 'Queens',
      name: 'Queens Literacy Zone',
      address: '39-15 Queens Boulevard, Queens, NY 11101',
      programs: ['ABE', 'CTE', 'HSE', 'ESOL'],
      hours: 'Monday-Friday: 8:00 AM - 8:30 PM, Saturday: 9:00 AM - 3:00 PM',
      description: 'Serving the diverse Queens community with culturally responsive programming and multilingual instruction.',
      features: ['Cultural Programs', 'Multilingual Staff', 'Community Partnerships', 'Immigration Services']
    },
    {
      borough: 'Staten Island',
      name: 'Staten Island Literacy Zone',
      address: '715 Ocean Terrace, Staten Island, NY 10301',
      programs: ['ABE', 'CTE', 'HSE', 'ESOL'],
      hours: 'Monday-Friday: 8:00 AM - 8:00 PM',
      description: 'A welcoming community space providing personalized attention and small class sizes for optimal learning.',
      features: ['Small Class Sizes', 'Personalized Attention', 'Flexible Scheduling', 'Community Garden']
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Literacy Zones
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Geographically defined as one or more adjacent census tracts using the US Census Bureau data, the New York State Education Department has identified 51 Literacy Zones across the State.
            </p>
            <p className="text-base text-gray-600">
              Each literacy zone is designed to serve its unique community with tailored programs and services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {literacyZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                        {zone.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{zone.borough}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {zone.programs.map((program) => (
                        <span
                          key={program}
                          className="px-2 py-1 text-xs font-medium bg-nyc-blue-100 text-nyc-blue-700 rounded"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {zone.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{zone.address}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{zone.hours}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
