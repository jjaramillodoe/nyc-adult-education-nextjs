'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Users, Globe, Award, Heart, Shield } from 'lucide-react'

interface ProgramHighlightsProps {
  colors: {
    icon: string
  }
}

export function ProgramHighlights({ colors }: ProgramHighlightsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 flex items-center">
          <Shield className={`mr-2 h-5 w-5 ${colors.icon}`} />
          Program Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <Clock className={`w-5 h-5 ${colors.icon}`} />
          <div>
            <div className="font-semibold text-gray-900">Flexible Schedule</div>
            <div className="text-sm text-gray-600">Day, evening, weekend classes</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Users className={`w-5 h-5 ${colors.icon}`} />
          <div>
            <div className="font-semibold text-gray-900">Small Classes</div>
            <div className="text-sm text-gray-600">Personalized attention</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Globe className={`w-5 h-5 ${colors.icon}`} />
          <div>
            <div className="font-semibold text-gray-900">Multilingual</div>
            <div className="text-sm text-gray-600">15+ languages supported</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Award className={`w-5 h-5 ${colors.icon}`} />
          <div>
            <div className="font-semibold text-gray-900">Industry Certifications</div>
            <div className="text-sm text-gray-600">Recognized credentials</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Heart className={`w-5 h-5 ${colors.icon}`} />
          <div>
            <div className="font-semibold text-gray-900">Supportive Community</div>
            <div className="text-sm text-gray-600">Peer support & mentorship</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
