'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { BookOpen, Wrench, GraduationCap, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ProgramsOverviewSection() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Adult Basic Education (ABE)',
      description: 'Build essential academic skills in reading, writing, and mathematics to prepare for further education and career advancement.',
      href: '/programs/abe',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Career and Technical Education (CTE)',
      description: 'Gain job-specific skills and training in high-demand career fields to advance your professional opportunities.',
      href: '/programs/cte',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'High School Equivalency Preparation (HSE)',
      description: 'Prepare for and earn your high school equivalency diploma through comprehensive test preparation and academic support.',
      href: '/programs/hse',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'English for Speakers of Other Languages (ESOL)',
      description: 'Develop English language skills for academic, professional, and everyday communication needs.',
      href: '/programs/esol',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Our Programs"
            subtitle="Educational Pathways"
            description="Comprehensive tuition-free programs designed to meet the diverse needs of adult learners"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${program.color} text-white flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                        <Link
                          href={program.href}
                          className="inline-flex items-center text-nyc-blue-600 hover:text-nyc-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center px-8 py-4 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors shadow-lg"
            >
              Explore All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
