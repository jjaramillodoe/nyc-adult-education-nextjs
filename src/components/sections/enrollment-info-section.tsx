'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { Clock, MapPin, Phone, Mail, Users, GraduationCap, UserCheck } from 'lucide-react'

export function EnrollmentInfoSection() {
  const dayEnrollmentSites = [
    { borough: 'Bronx', name: 'Adult Learning Center', address: '3450 East Tremont Avenue 3rd Fl, Bronx, NY 10465' },
    { borough: 'Brooklyn', name: 'Adult Education @ PS 13', address: '557 Granville Payne Avenue, Brooklyn, NY 11207' },
    { borough: 'Brooklyn', name: 'Adult Learning Center', address: '475 Nostrand Avenue, Brooklyn NY 11216' },
    { borough: 'Brooklyn', name: 'Melrose Alternate Learning Center', address: '271 Melrose Street, Brooklyn, NY 11206' },
    { borough: 'Manhattan', name: 'Manhattan Hub', address: '269 West 35th Street 7th Fl, New York, NY 10001' },
    { borough: 'Manhattan', name: 'Mid-Manhattan Adult Learning Center', address: '212 West 120th Street, New York, NY 10027' },
    { borough: 'Queens', name: 'Adult Learning Center', address: '27-35 Jackson Avenue, Long Island City, NY 11101' },
    { borough: 'Queens', name: 'Queens Transition Center (Day)', address: '142-10 Linden Boulevard, Queens, NY 11436' }
  ]

  const eveningEnrollmentSites = [
    { borough: 'Brooklyn', name: 'Melrose Alternate Learning Center', address: '271 Melrose Street, Brooklyn, NY 11206' },
    { borough: 'Staten Island', name: 'St. George', address: '450 St. Marks Place, Staten Island, NY 10301' },
    { borough: 'Queens', name: 'District 79', address: '90-01 Sutphin Blvd, Jamaica, NY 11420' }
  ]

  const eligibilityRequirements = [
    {
      icon: Users,
      title: 'Age Requirement',
      description: '21 years or older'
    },
    {
      icon: GraduationCap,
      title: 'Education Status',
      description: 'Does not have U.S. High School diploma or equivalency (HSE)'
    },
    {
      icon: Clock,
      title: 'CTE Exception',
      description: 'Some CTE classes have limited space for adults who do have high school equivalency diplomas'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Who Can Enroll */}
          <SectionTitle
            title="Who Can Enroll?"
            subtitle="Eligibility"
            description="Any New York City resident who meets the following requirements:"
            icon={<UserCheck className="w-8 h-8" />}
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {eligibilityRequirements.map((requirement, index) => {
              const IconComponent = requirement.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-nyc-blue-100">
                        <IconComponent className="w-6 h-6 text-nyc-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{requirement.title}</h3>
                    <p className="text-gray-600">{requirement.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Enrollment Hours */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Day Enrollment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-3 h-6 w-6 text-green-600" />
                  Day Enrollment: 9:00 AM - 1:00 PM
                </CardTitle>
                <p className="text-sm text-gray-600">Monday-Thursday</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dayEnrollmentSites.map((site, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{site.name}</h4>
                          <p className="text-sm text-gray-600">{site.borough}</p>
                          <p className="text-xs text-gray-500">{site.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Evening Enrollment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-3 h-6 w-6 text-blue-600" />
                  Evening Enrollment: 5:00 PM - 8:00 PM
                </CardTitle>
                <p className="text-sm text-gray-600">Monday-Thursday</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eveningEnrollmentSites.map((site, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{site.name}</h4>
                          <p className="text-sm text-gray-600">{site.borough}</p>
                          <p className="text-xs text-gray-500">{site.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Contact Us for More Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-nyc-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:adultednyc@schools.nyc.gov" className="text-nyc-blue-600 hover:underline">
                    adultednyc@schools.nyc.gov
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-nyc-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a href="tel:+16464818227" className="text-nyc-green-600 hover:underline">
                    (646) 481-8227
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Button asChild className="bg-nyc-blue-600 hover:bg-nyc-blue-700 text-white">
                    <a href="/enrollment">Begin Enrollment Process</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <Card className="mt-8 border-l-4 border-orange-500 bg-orange-50">
            <CardContent className="p-6">
              <p className="text-gray-700">
                <span className="font-semibold">Important:</span> If a CTE class you desire requires a HS diploma or equivalent, you may dually enroll in Adult Basic Education (ABE).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
