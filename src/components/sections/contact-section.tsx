'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Still Have Questions?"
            subtitle="Get Help"
            description="Can't find what you're looking for? Our team is here to help you with any questions about our programs"
            icon={<MessageCircle className="w-8 h-8" />}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <Phone className="mr-3 h-5 w-5 text-nyc-blue-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak directly with our enrollment counselors
                </p>
                <a
                  href="tel:+16464818227"
                  className="text-nyc-blue-600 hover:text-nyc-blue-700 font-semibold text-lg"
                >
                  (646) 481-8227
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <Mail className="mr-3 h-5 w-5 text-nyc-green-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us your questions via email
                </p>
                <a
                  href="mailto:adultednyc@schools.nyc.gov"
                  className="text-nyc-green-600 hover:text-nyc-green-700 font-semibold"
                >
                  adultednyc@schools.nyc.gov
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <MapPin className="mr-3 h-5 w-5 text-nyc-purple-600" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stop by one of our enrollment centers
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/enrollment">Find a Location</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
