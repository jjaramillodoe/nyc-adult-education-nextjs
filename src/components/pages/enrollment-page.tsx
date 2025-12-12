'use client'

import * as React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Globe, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { enrollmentHubs as staticEnrollmentHubs } from '@/lib/static-data'
import { EnrollmentHub } from '@/types'
import { formatPhoneNumber } from '@/lib/utils'

const boroughs = ['All Boroughs', 'Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island']

export function EnrollmentPage() {
  const hubs = staticEnrollmentHubs
  const [filteredHubs, setFilteredHubs] = React.useState<EnrollmentHub[]>(staticEnrollmentHubs)
  const isLoading = false
  const [selectedBorough, setSelectedBorough] = React.useState('All Boroughs')
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    let filtered = hubs

    // Filter by borough
    if (selectedBorough !== 'All Boroughs') {
      filtered = filtered.filter(hub => hub.borough === selectedBorough)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(hub =>
        hub.name.toLowerCase().includes(query) ||
        hub.address.toLowerCase().includes(query) ||
        hub.borough.toLowerCase().includes(query)
      )
    }

    setFilteredHubs(filtered)
  }, [hubs, selectedBorough, searchQuery])

  const formatHours = (hours: Record<string, string>) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const dayAbbr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    
    const formatted = days.map((day, index) => ({
      day: dayAbbr[index],
      hours: hours[day] || 'Closed'
    }))

    return formatted
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section Skeleton */}
        <section className="bg-gradient-to-br from-nyc-blue-600 to-nyc-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-12 bg-white/20 rounded w-96 mx-auto mb-6 animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded w-3/4 mx-auto animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-64 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nyc-blue-600 to-nyc-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find a School
              <span className="block text-nyc-teal-300">Near You</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              We have 185 convenient locations across all five boroughs of New York City. 
              Find the enrollment center closest to you and start your educational journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-nyc-blue-600 hover:bg-gray-100">
                <Link href="/programs">
                  View All Programs
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-nyc-blue-600">
                <Link href="tel:+16464818227">
                  Call (646) 481-8227
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by school name or address..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedBorough}
                onChange={(e) => setSelectedBorough(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-nyc-blue-500 focus:border-transparent"
              >
                {boroughs.map((borough) => (
                  <option key={borough} value={borough}>
                    {borough}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Schools List */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Enrollment Centers
                </h2>
                <p className="text-gray-600">
                  Showing {filteredHubs.length} {filteredHubs.length === 1 ? 'location' : 'locations'}
                  {selectedBorough !== 'All Boroughs' && ` in ${selectedBorough}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              <div className="space-y-6">
                {filteredHubs.map((hub) => (
                  <Card key={hub.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-gray-900 mb-2">
                            {hub.name}
                          </CardTitle>
                          <div className="inline-block px-3 py-1 bg-nyc-blue-100 text-nyc-blue-700 text-sm font-medium rounded-full">
                            {hub.borough}
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={`https://maps.google.com/maps?q=${encodeURIComponent(hub.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="w-4 h-4 mr-1" />
                            Directions
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Address</div>
                              <div className="text-gray-600">{hub.address}</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Phone</div>
                              <a
                                href={`tel:${hub.phone}`}
                                className="text-nyc-blue-600 hover:underline"
                              >
                                {formatPhoneNumber(hub.phone)}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Email</div>
                              <a
                                href={`mailto:${hub.email}`}
                                className="text-nyc-blue-600 hover:underline"
                              >
                                {hub.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Hours and Programs */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-3">
                              <Clock className="w-5 h-5 text-gray-400" />
                              <div className="font-medium text-gray-900">Hours</div>
                            </div>
                            <div className="space-y-1 text-sm">
                              {formatHours(hub.hours).map((item, index) => (
                                <div key={index} className="flex justify-between">
                                  <span className="text-gray-600">{item.day}:</span>
                                  <span className="text-gray-900">{item.hours}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Available Programs */}
                          {hub.programs && hub.programs.length > 0 && (
                            <div>
                              <div className="font-medium text-gray-900 mb-2">Programs Offered</div>
                              <div className="flex flex-wrap gap-2">
                                {hub.programs.map((program) => (
                                  <span
                                    key={program}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                  >
                                    {program}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Languages */}
                          {hub.languages && hub.languages.length > 0 && (
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <Globe className="w-4 h-4 text-gray-400" />
                                <div className="font-medium text-gray-900">Languages</div>
                              </div>
                              <div className="text-sm text-gray-600">
                                {hub.languages.slice(0, 3).join(', ')}
                                {hub.languages.length > 3 && ` +${hub.languages.length - 3} more`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button asChild className="btn-primary flex-1">
                          <Link href="/contact">
                            Contact This School
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href="/programs">
                            View Programs
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredHubs.length === 0 && (
                  <div className="text-center py-12">
                    <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No schools found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search or filter criteria.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedBorough('All Boroughs')
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">NYC Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-nyc-blue-100 to-nyc-teal-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <div className="font-medium">Interactive Map</div>
                      <div className="text-sm">Coming Soon</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a
                        href="https://maps.google.com/maps?q=NYC+adult+education+centers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Can't find what you're looking for? Our enrollment counselors 
                    are here to help you find the right program and location.
                  </p>
                  
                  <Button asChild size="lg" className="w-full btn-primary">
                    <Link href="tel:+16464818227">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (646) 481-8227
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Send a Message
                    </Link>
                  </Button>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <div className="font-medium mb-1">Office Hours:</div>
                      <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                      <div>Saturday: 9:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nyc-blue-600">185</div>
                    <div className="text-sm text-gray-600">Convenient Locations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nyc-green-600">15+</div>
                    <div className="text-sm text-gray-600">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nyc-purple-600">Free</div>
                    <div className="text-sm text-gray-600">All Programs</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
