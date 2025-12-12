'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

interface EnrollmentCTAProps {
  program: {
    abbreviation: string
    enrollmentForm?: {
      url: string
      qrCodeAvailable: boolean
      quickEnrollment: boolean
    }
  }
  colors: {
    button: string
    text: string
  }
}

export function EnrollmentCTA({ program, colors }: EnrollmentCTAProps) {
  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Ready to Enroll?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* QR Code Section for Programs with Enrollment Forms */}
        {program.enrollmentForm && program.enrollmentForm.qrCodeAvailable && (
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-700 mb-3">Quick Enrollment</div>
              <div className="bg-white p-4 rounded-lg inline-block mb-3">
                {/* QR Code Placeholder - In a real implementation, you would generate or embed the actual QR code */}
                <div className="w-32 h-32 bg-black bg-opacity-10 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400">
                  <div className="text-xs text-gray-500 text-center">
                    QR Code<br />
                    Scan to enroll
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mb-2">Scan QR code or visit:</div>
              <a
                href={program.enrollmentForm.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium ${colors.text} hover:underline break-all`}
              >
                {program.enrollmentForm.url.replace('https://', '')}
              </a>
            </div>
          </div>
        )}
        
        <Button
          asChild
          size="lg"
          className={`w-full ${colors.button} text-white`}
        >
          <Link href="/enrollment">
            Find a School
            <MapPin className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full"
        >
          <Link href="/contact">
            Speak with Counselor
          </Link>
        </Button>

        <div className="text-center pt-4">
          <div className="text-sm text-gray-600 mb-2">Questions? Call us:</div>
          <a
            href="tel:+16464818227"
            className={`text-lg font-bold ${colors.text} hover:underline`}
          >
            (646) 481-8227
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
