'use client'

import * as React from 'react'
import Link from 'next/link'
import { BookOpen, Wrench, GraduationCap, Globe, ArrowRight, CheckCircle, Users, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { programs as staticPrograms } from '@/lib/static-data'
import { Program } from '@/types'
import { getColorClasses } from '@/lib/utils'

const iconMap = {
  BookOpen,
  Wrench,
  GraduationCap,
  Globe,
}

export function ProgramsListingPage() {
  const programs = staticPrograms
  const isLoading = false

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

        {/* Programs Grid Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-8 animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="space-y-2 mb-6">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-3 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
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
              Transform Your Future Through
              <span className="block text-nyc-teal-300">Adult Education</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Choose from our comprehensive education programs designed to meet your goals, 
              schedule, and current skill level. All programs are free and available in multiple languages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-nyc-blue-600 hover:bg-gray-100">
                <Link href="/enrollment">
                  Find a School Near You
                  <MapPin className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-nyc-blue-600">
                <Link href="/contact">
                  Speak with a Counselor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Education Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect program to advance your education and career goals. 
              Each program is designed with flexibility and success in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program) => {
              const IconComponent = iconMap[program.icon as keyof typeof iconMap] || BookOpen
              const colors = getColorClasses(program.color)

              return (
                <Card
                  key={program.id}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2"
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} text-sm font-bold rounded-md mb-2`}>
                          {program.abbreviation}
                        </div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {program.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Detailed Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {program.detailedDescription}
                    </p>

                    {/* Eligibility */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Who Can Enroll:</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        {program.eligibility}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Program Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className={`w-4 h-4 ${colors.icon} mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        asChild
                        className={`${colors.button} text-white flex-1`}
                      >
                        <Link href={`/programs/${program.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1"
                      >
                        <Link href="/enrollment">
                          Find Schools
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-nyc-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  Morning, afternoon, evening, and weekend classes available to fit your life and work schedule.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-nyc-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                <p className="text-gray-600 text-sm">
                  Instruction and support available in 15+ languages to serve NYC's diverse communities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-nyc-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Services</h3>
                <p className="text-gray-600 text-sm">
                  Job placement assistance, resume help, and career counseling for all graduates.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our education counselors are here to help you choose the perfect program 
                based on your goals, schedule, and current skill level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="btn-primary">
                  <Link href="/contact">
                    Speak with a Counselor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary">
                  <Link href="/enrollment">
                    Find a School
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
