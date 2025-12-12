'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Award, Briefcase, DollarSign, Calendar } from 'lucide-react'

interface ProgramStatsProps {
  colors: {
    icon: string
  }
}

export function ProgramStats({ colors }: ProgramStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center">
          <TrendingUp className={`mr-3 h-6 w-6 ${colors.icon}`} />
          Program Success Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-700">95%</div>
            <div className="text-sm text-green-600">Completion Rate</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">87%</div>
            <div className="text-sm text-blue-600">Job Placement</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-700">$45K</div>
            <div className="text-sm text-purple-600">Avg. Starting Salary</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-700">6-12</div>
            <div className="text-sm text-orange-600">Months Duration</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
