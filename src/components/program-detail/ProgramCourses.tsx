'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Heart, Zap, Wrench } from 'lucide-react'

interface ProgramCoursesProps {
  program: {
    abbreviation: string
  }
}

export function ProgramCourses({ program }: ProgramCoursesProps) {
  if (program.abbreviation !== 'CTE') {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center">
          <BookOpen className="mr-3 h-6 w-6 text-gray-600" />
          Programs & Courses Offered
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Healthcare Programs */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Healthcare Programs</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Certified Clinical Medical Assistant</h5>
                  <p className="text-xs text-gray-600">Prepare to work in hospitals, medical offices, labs and health facilities. Covers medical terminology, vital signs, EKG, phlebotomy, lab tests, infection control, and patient communication. 80% attendance required.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Medical Billing and Coding</h5>
                  <p className="text-xs text-gray-600">Learn to code medical records correctly and optimize reimbursement. Covers CPT, ICD-10, insurance forms, Medicare/Medicaid, and prepares you for National Certification exam. 80% attendance required.</p>
                </div>
              </div>
            </div>

            {/* Technology Programs */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-gray-900">Technology Programs</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Computer Literacy</h5>
                  <p className="text-xs text-gray-600">Hands-on course for new users covering Microsoft Word, Excel, file management, internet security, and basic computer functions. Perfect for beginners or those wanting to refresh skills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Skilled Trades */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center space-x-3 mb-3">
                <Wrench className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Skilled Trades</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Automotive</h5>
                  <p className="text-xs text-gray-600">Essential skills for automotive industry employment. Learn auto maintenance, engine repair, transmission systems, steering, suspension, and electrical systems. Earn Snap-On and ASE certificates.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Welding</h5>
                  <p className="text-xs text-gray-600">Safety basics, equipment setup, Oxygen/Acetylene cutting, welding, brazing, and Arc (stick) welding. No prerequisites required. Course fee includes materials.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Electrical</h5>
                  <p className="text-xs text-gray-600">Hands-on course covering receptacle and switch replacement, wiring tools and techniques, electrical theory, grounding, and wiring diagrams. Wire receptacles and switches.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Carpentry</h5>
                  <p className="text-xs text-gray-600">Advanced woodworking with router, biscuit joiner, saber saw, and coping saw. Learn gluing, clamping, hiding fasteners, joining techniques, and finishing with files, planes, and sanders.</p>
                </div>
              </div>
            </div>

            {/* Personal Care */}
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-3">
                <Heart className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Personal Care</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-1">Barbering</h5>
                  <p className="text-xs text-gray-600">One-year program preparing for NYS barbering license. Covers haircuts, hairstyling, beard care, color, facial treatments, professional image, and infection control. Hands-on experience included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
