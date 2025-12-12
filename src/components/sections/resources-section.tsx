'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Download, 
  BookOpen, 
  Calculator, 
  Globe, 
  FileText, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

export function ResourcesSection() {
  const resources = [
    {
      category: 'Study Materials',
      icon: BookOpen,
      items: [
        {
          title: 'ESOL Practice Tests',
          description: 'Practice English language skills with sample tests and exercises',
          type: 'PDF Download',
          download: true
        },
        {
          title: 'HSE Study Guide',
          description: 'Comprehensive guide for High School Equivalency exam preparation',
          type: 'PDF Download',
          download: true
        },
        {
          title: 'Latin American History Notes',
          description: 'Study materials for Latin American history coursework',
          type: 'PDF Download',
          download: true
        },
        {
          title: 'Math Worksheets',
          description: 'Practice problems for basic math skills development',
          type: 'Online Resource',
          download: false
        }
      ]
    },
    {
      category: 'Academic Resources',
      icon: Calculator,
      items: [
        {
          title: 'Grade Calculator',
          description: 'Calculate your grades and track your academic progress',
          type: 'Online Tool',
          download: false
        },
        {
          title: 'Student Handbook',
          description: 'Complete guide to policies, procedures, and resources',
          type: 'PDF Download',
          download: true
        },
        {
          title: 'Academic Calendar',
          description: 'Important dates, holidays, and enrollment periods',
          type: 'PDF Download',
          download: true
        },
        {
          title: 'Library Access',
          description: 'Access to digital libraries and research databases',
          type: 'Online Resource',
          download: false
        }
      ]
    },
    {
      category: 'Support Services',
      icon: Phone,
      items: [
        {
          title: 'Counseling Services',
          description: 'Academic and career counseling support',
          type: 'Contact Info',
          download: false
        },
        {
          title: 'Tutoring Services',
          description: 'One-on-one and group tutoring sessions',
          type: 'Contact Info',
          download: false
        },
        {
          title: 'Technology Support',
          description: 'Help with online learning platforms and digital tools',
          type: 'Contact Info',
          download: false
        },
        {
          title: 'Financial Aid Information',
          description: 'Resources for tuition assistance and financial support',
          type: 'PDF Download',
          download: true
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Resources
            </h2>
            <p className="text-lg text-gray-600">
              Access study materials, tools, and support services to enhance your learning experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <div key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-xl">
                        <div className="p-2 bg-gradient-to-br from-nyc-blue-500 to-nyc-green-500 rounded-lg text-white">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span>{resource.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resource.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{item.title}</h4>
                              {item.download && (
                                <Download className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                              {item.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
