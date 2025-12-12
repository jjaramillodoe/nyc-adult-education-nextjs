'use client'

import * as React from 'react'
import Link from 'next/link'
import { BookOpen, Wrench, GraduationCap, Globe, ArrowRight, CheckCircle, Star, Users, Award, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { programs as staticPrograms } from '@/lib/static-data'
import { Program } from '@/types'

const iconMap = {
  BookOpen,
  Wrench,
  GraduationCap,
  Globe,
}

const colorClasses = {
  blue: {
    card: 'program-card-blue',
    text: 'text-nyc-blue-700',
    icon: 'text-nyc-blue-600',
    button: 'bg-nyc-blue-600 hover:bg-nyc-blue-700',
    bg: 'bg-nyc-blue-50',
    border: 'border-nyc-blue-200',
  },
  green: {
    card: 'program-card-green',
    text: 'text-nyc-green-700',
    icon: 'text-nyc-green-600',
    button: 'bg-nyc-green-600 hover:bg-nyc-green-700',
    bg: 'bg-nyc-green-50',
    border: 'border-nyc-green-200',
  },
  purple: {
    card: 'program-card-purple',
    text: 'text-nyc-purple-700',
    icon: 'text-nyc-purple-600',
    button: 'bg-nyc-purple-600 hover:bg-nyc-purple-700',
    bg: 'bg-nyc-purple-50',
    border: 'border-nyc-purple-200',
  },
  teal: {
    card: 'program-card-teal',
    text: 'text-nyc-teal-700',
    icon: 'text-nyc-teal-600',
    button: 'bg-nyc-teal-600 hover:bg-nyc-teal-700',
    bg: 'bg-nyc-teal-50',
    border: 'border-nyc-teal-200',
  },
}

export function ProgramsSection() {
  const programs = staticPrograms
  const isLoading = false

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-nyc-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-nyc-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-nyc-green-100 rounded-full blur-2xl opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-nyc-blue-100 rounded-full text-sm font-semibold text-nyc-blue-700 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Comprehensive Education Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Education Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the perfect program to advance your education and career goals. 
            Our comprehensive offerings are designed to meet you where you are and 
            take you where you want to go.
          </p>
        </div>

        {/* Enhanced Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = iconMap[program.icon as keyof typeof iconMap] || BookOpen
            const colors = colorClasses[program.color] || colorClasses.blue

            return (
              <Card
                key={program.id}
                className={`${colors.card} border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group cursor-pointer hover-lift animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <CardTitle className={`${colors.text} text-xl font-bold mb-3`}>
                    {program.title}
                  </CardTitle>
                  <div className={`text-sm font-bold ${colors.text} ${colors.bg} px-3 py-2 rounded-lg inline-block border ${colors.border}`}>
                    {program.abbreviation}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </CardDescription>
                  
                  {/* Enhanced Key Benefits */}
                  <div className="space-y-3">
                    {program.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-200">
                        <CheckCircle className={`w-5 h-5 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Button
                      asChild
                      size="lg"
                      className={`w-full ${colors.button} text-white group-hover:shadow-lg transition-all duration-300 h-12 text-base font-semibold`}
                    >
                      <Link href={`/programs/${program.id}`} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-nyc-blue-500 to-nyc-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Not Sure Which Program is Right for You?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our education counselors are here to help you choose the perfect program 
            based on your goals, schedule, and current skill level. Get personalized guidance today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="xl" className="bg-nyc-blue-600 hover:bg-nyc-blue-700 text-white h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              <Link href="/contact" className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Speak with a Counselor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 h-14 text-lg font-semibold">
              <Link href="/enrollment" className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Find a School
              </Link>
            </Button>
          </div>
        </div>

        {/* Enhanced Program Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-nyc-blue-500 to-nyc-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h4>
            <p className="text-gray-600 leading-relaxed">
              Morning, afternoon, evening, and weekend classes available to fit your life. 
              Choose the schedule that works best for you and your family.
            </p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-nyc-green-500 to-nyc-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Multilingual Support</h4>
            <p className="text-gray-600 leading-relaxed">
              Instruction and support available in 15+ languages across all our centers. 
              We celebrate NYC's diversity and ensure everyone feels welcome.
            </p>
          </div>
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-nyc-purple-500 to-nyc-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Career Services</h4>
            <p className="text-gray-600 leading-relaxed">
              Job placement assistance, resume help, and career counseling for all graduates. 
              We're committed to your success beyond the classroom.
            </p>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-nyc-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">185+</div>
              <div className="text-gray-600 font-semibold">Locations</div>
              <div className="text-sm text-gray-500 mt-1">Across NYC</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-nyc-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-gray-600 font-semibold">Students</div>
              <div className="text-sm text-gray-500 mt-1">Transformed Lives</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-nyc-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-600 font-semibold">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">Graduation Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-nyc-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600 font-semibold">Languages</div>
              <div className="text-sm text-gray-500 mt-1">Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
