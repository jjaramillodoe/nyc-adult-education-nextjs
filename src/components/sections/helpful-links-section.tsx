'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { ExternalLink, Globe, BookOpen, GraduationCap, Briefcase } from 'lucide-react'

export function HelpfulLinksSection() {
  const linkCategories = [
    {
      title: 'Educational Resources',
      icon: BookOpen,
      links: [
        {
          name: 'NYC Department of Education',
          url: 'https://www.schools.nyc.gov',
          description: 'Official NYC DOE website with policies and resources'
        },
        {
          name: 'GED Testing Service',
          url: 'https://ged.com',
          description: 'Official GED testing information and practice tests'
        },
        {
          name: 'NY State Education Department',
          url: 'https://www.nysed.gov',
          description: 'State education policies and requirements'
        },
        {
          name: 'CUNY Adult Education',
          url: 'https://www.cuny.edu/admissions/adult-learners',
          description: 'CUNY programs for adult learners'
        }
      ]
    },
    {
      title: 'Career Development',
      icon: Briefcase,
      links: [
        {
          name: 'NYC Workforce1 Career Centers',
          url: 'https://www1.nyc.gov/site/sbs/careers/workforce1.page',
          description: 'Career counseling and job placement services'
        },
        {
          name: 'Indeed Jobs',
          url: 'https://www.indeed.com',
          description: 'Job search and career opportunities'
        },
        {
          name: 'LinkedIn Learning',
          url: 'https://www.linkedin.com/learning',
          description: 'Professional development courses'
        },
        {
          name: 'O*NET Online',
          url: 'https://www.onetonline.org',
          description: 'Career exploration and skill assessment tools'
        }
      ]
    },
    {
      title: 'Community Support',
      icon: Globe,
      links: [
        {
          name: 'NYC 311',
          url: 'https://portal.311.nyc.gov',
          description: 'City services and information'
        },
        {
          name: 'NYC Housing Connect',
          url: 'https://housingconnect.nyc.gov',
          description: 'Affordable housing opportunities'
        },
        {
          name: 'NYC Health + Hospitals',
          url: 'https://www.nychealthandhospitals.org',
          description: 'Healthcare services and programs'
        },
        {
          name: 'NYC Libraries',
          url: 'https://www.nypl.org',
          description: 'Library services and digital resources'
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Helpful Links"
            subtitle="External Resources"
            description="Connect with valuable external resources and services that can support your educational and career goals"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {linkCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-xl">
                      <div className="p-2 bg-gradient-to-br from-nyc-blue-500 to-nyc-green-500 rounded-lg text-white">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-nyc-blue-300 transition-all group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 group-hover:text-nyc-blue-600 transition-colors mb-1">
                                {link.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {link.description}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-nyc-blue-600 transition-colors flex-shrink-0 ml-2" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50 p-8 rounded-2xl border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need More Help?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Can't find what you're looking for? Our staff is here to help you access the resources you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/enrollment"
                  className="inline-flex items-center px-8 py-3 border-2 border-nyc-blue-600 text-nyc-blue-600 font-semibold rounded-lg hover:bg-nyc-blue-600 hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
