'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProgramOverviewProps {
  program: {
    detailedDescription: string
  }
}

export function ProgramOverview({ program }: ProgramOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Program Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed mb-6">
          {program.detailedDescription}
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">Free</div>
            <div className="text-sm text-gray-600">Tuition</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">Languages</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">185</div>
            <div className="text-sm text-gray-600">NYC Sites</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
