'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Eye, Heart, Users } from 'lucide-react'

export function MissionVisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className="p-3 bg-gradient-to-br from-nyc-blue-500 to-nyc-blue-600 rounded-full text-white mr-4">
                    <Target className="w-6 h-6" />
                  </div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The New York City Department of Education Adult Education's mission is to empower adults in their roles as parents, family members, workers, and community members. We promote life-long learning and the development of problem-solving skills through continuous services.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Services Include:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-nyc-blue-600" />
                      <span className="text-sm text-gray-600">Adult Basic Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-nyc-green-600" />
                      <span className="text-sm text-gray-600">English for Speakers of Other Languages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-nyc-purple-600" />
                      <span className="text-sm text-gray-600">High School Equivalency</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-nyc-teal-600" />
                      <span className="text-sm text-gray-600">Career and Technical Education</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className="p-3 bg-gradient-to-br from-nyc-green-500 to-nyc-green-600 rounded-full text-white mr-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  District 79 / Adult Education Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  District 79 students are empowered and equipped with the knowledge and skills to navigate life and achieve their college, career, and personal goals. They leverage opportunities, manage challenges, and advocate for themselves and others.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-nyc-green-50 to-nyc-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Empowerment</h4>
                    <p className="text-sm text-gray-600">Equipping students with knowledge and skills for life navigation</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-nyc-blue-50 to-nyc-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Goal Achievement</h4>
                    <p className="text-sm text-gray-600">Supporting college, career, and personal goal attainment</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-nyc-purple-50 to-nyc-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Advocacy & Resilience</h4>
                    <p className="text-sm text-gray-600">Teaching students to leverage opportunities and manage challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
