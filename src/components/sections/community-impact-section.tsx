'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { Users, BookOpen, GraduationCap, Heart } from 'lucide-react'

export function CommunityImpactSection() {
  const impactStats = [
    {
      icon: Users,
      number: '15,000+',
      label: 'Students Served',
      description: 'Adults empowered through our literacy zones'
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Community Partners',
      description: 'Organizations working together for literacy'
    },
    {
      icon: GraduationCap,
      number: '95%',
      label: 'Success Rate',
      description: 'Students who complete their programs'
    },
    {
      icon: Heart,
      number: '185',
      label: 'Sites Across NYC',
      description: 'Literacy zones and learning centers'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Community Impact"
            subtitle="Making a Difference"
            description="Our literacy zones are creating positive change in communities across New York City"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-nyc-blue-500 to-nyc-green-500 text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 p-8 rounded-2xl border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Community
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Become part of a supportive learning community where adults can achieve their educational goals, 
                advance their careers, and improve their quality of life through accessible, quality education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/enrollment"
                  className="inline-flex items-center px-8 py-3 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors"
                >
                  Find Your Nearest Zone
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-nyc-blue-600 text-nyc-blue-600 font-semibold rounded-lg hover:bg-nyc-blue-600 hover:text-white transition-colors"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
