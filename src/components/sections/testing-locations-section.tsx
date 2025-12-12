'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { MapPin, Phone, ExternalLink, FileText, ClipboardCheck } from 'lucide-react'

export function TestingLocationsSection() {
  const testingLocations = [
    {
      name: 'Brooklyn Adult Learning Center',
      address: '475 Nostrand Avenue, Brooklyn NY 11216',
      phone: '(718) 638 2635 X 1212'
    },
    {
      name: 'Mid-Manhattan Adult Learning Center',
      address: '269 West 35th Street, 10th Floor, New York, NY 10018',
      phone: '(718) 638 2635 X 1212'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="GED Examination Information"
            subtitle="Testing & Resources"
            description="Adult Education Testing Locations and Resources"
            icon={<ClipboardCheck className="w-8 h-8" />}
          />

          {/* Testing Locations */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testingLocations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="mr-3 h-5 w-5 text-nyc-blue-600" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${location.phone}`} className="text-nyc-blue-600 hover:underline">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ExternalLink className="mr-3 h-5 w-5 text-green-600" />
                  GED Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  View the GED website for more information and resources about the examination process.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://ged.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit GED Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-3 h-5 w-5 text-purple-600" />
                  HSE Transcript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Order a copy of your High School Equivalency transcript for official records.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Order HSE Transcript
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Difference Between ABE and HSE */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-center text-xl">What's the Difference Between Basic Education and High School Equivalency?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-blue-700 mb-2">Basic Education Classes</h3>
                  <p className="text-gray-600">
                    Address lower literacy levels in reading and math to prepare students for High School Equivalency classes (HSE).
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-purple-700 mb-2">HSE Classes</h3>
                  <p className="text-gray-600">
                    Prepare students for the GED® examination and earning their high school equivalency diploma.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
