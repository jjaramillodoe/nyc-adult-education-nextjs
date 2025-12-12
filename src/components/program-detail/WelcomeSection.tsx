'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface WelcomeSectionProps {
  program: {
    title: string
    enrollmentForm?: {
      url: string
      qrCodeAvailable: boolean
      quickEnrollment: boolean
    }
  }
  colors: {
    border: string
    bg: string
    button: string
  }
}

export function WelcomeSection({ program, colors }: WelcomeSectionProps) {
  if (!program.enrollmentForm || !program.enrollmentForm.qrCodeAvailable) {
    return null
  }

  return (
    <Card className={`border-l-4 ${colors.border} bg-gradient-to-r ${colors.bg} to-white`}>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Welcome to {program.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Ready to start your journey with our {program.title} program? We're excited to help you achieve your career goals!
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quick Enrollment Available</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Skip the wait and enroll directly using our online form
                </p>
                <a
                  href={program.enrollmentForm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 ${colors.button} text-white rounded-lg hover:opacity-90 transition-opacity`}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Enroll Now
                </a>
              </div>
              <div className="ml-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2 text-center">Scan QR Code</div>
                  <div className="w-20 h-20 bg-black bg-opacity-10 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                    <div className="text-xs text-gray-500 text-center">
                      QR<br />Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
