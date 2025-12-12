'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { BookOpen, Wrench, GraduationCap, Globe, Users, MapPin, Clock, GraduationCap as GraduationCapIcon } from 'lucide-react'

export function OverviewSection() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Adult Basic Education (ABE)',
      description: 'Build essential academic skills in reading, writing, and mathematics to prepare for further education and career advancement.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Career and Technical Education (CTE)',
      description: 'Gain job-specific skills and training in high-demand career fields to advance your professional opportunities.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'High School Equivalency Preparation (HSE)',
      description: 'Prepare for and earn your high school equivalency diploma through comprehensive test preparation and academic support.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'English for Speakers of Other Languages (ESOL)',
      description: 'Develop English language skills for academic, professional, and everyday communication needs.',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Adult Education Overview"
            subtitle="Transform Your Future"
            description={
              <>
                Adult Education provides <span className="font-semibold text-nyc-blue-600">tuition-free classes</span> for eligible students (21 years and older who have not earned a U.S. high school diploma or equivalency)
              </>
            }
            icon={<GraduationCapIcon className="w-8 h-8" />}
          />

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Important Note */}
          <Card className="mb-8 border-l-4 border-orange-500 bg-orange-50">
            <CardContent className="p-6">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Students may be required to pay associated fees for textbooks, certification exams and/or uniforms for specific classes.
              </p>
            </CardContent>
          </Card>

          {/* Class Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-2 h-5 w-5 text-nyc-blue-600" />
                  Class Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer morning, afternoon and evening classes, Monday through Saturday at more than 175 sites in all five boroughs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-2 h-5 w-5 text-nyc-green-600" />
                  Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Classes are held at public schools, community centers and faith-based organizations across NYC.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5 text-nyc-purple-600" />
                  Cross-Borough Enrollment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Students are welcome to take classes at any of our sites, regardless of the borough in which they live.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
