'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Users, MessageCircle, FileText, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nyc-blue-600 to-nyc-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
              <span className="block text-nyc-teal-300">We're Here to Help</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Have questions about our programs? Need help finding the right school? 
              Our education counselors are ready to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-nyc-blue-600 hover:bg-gray-100">
                <Link href="tel:+16464818227">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (646) 481-8227
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-nyc-blue-600">
                <Link href="/enrollment">
                  Find a School
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone Support */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-nyc-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-nyc-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak directly with our education counselors for immediate assistance.
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-nyc-blue-600">(646) 481-8227</div>
                  <div className="text-sm text-gray-500">Monday - Friday, 8AM - 6PM</div>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="tel:+16464818227">
                    Call Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-nyc-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-nyc-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us your questions and we'll respond within 24 hours.
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-nyc-green-600">info@adultedu.nyc</div>
                  <div className="text-sm text-gray-500">Response within 24 hours</div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="mailto:info@adultedu.nyc">
                    Send Email
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-nyc-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-nyc-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Main Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visit our main office for in-person assistance and guidance.
                </p>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-nyc-purple-600">52 Chambers Street</div>
                  <div className="text-sm text-gray-500">New York, NY 10007</div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="https://maps.google.com/?q=52+Chambers+Street+New+York+NY+10007" target="_blank">
                    Get Directions
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Fill out the form below and our team will get back to you with personalized 
                guidance for your educational journey. We're here to help you find the perfect 
                program and answer any questions you may have.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 lg:p-12 shadow-xl">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-3xl text-gray-900">Contact Form</CardTitle>
                    <p className="text-gray-600 mt-2">
                      Tell us about your educational goals and we'll provide personalized guidance.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="h-12 text-base"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="h-12 text-base"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="h-12 text-base"
                          />
                        </div>
                        <div>
                          <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-3">
                            Program of Interest
                          </label>
                          <select
                            id="program"
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            className="w-full h-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyc-blue-500 focus:border-transparent text-base"
                          >
                            <option value="">Select a program</option>
                            <option value="abe">Adult Basic Education (ABE)</option>
                            <option value="cte">Career & Technical Education (CTE)</option>
                            <option value="hse">High School Equivalency (HSE)</option>
                            <option value="esol">English for Speakers of Other Languages (ESOL)</option>
                            <option value="general">General Information</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your educational goals, current situation, and how we can help you achieve your dreams..."
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nyc-blue-500 focus:border-transparent resize-none text-base"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-nyc-blue-600 hover:bg-nyc-blue-700 text-white h-12 text-lg font-semibold">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <Clock className="w-6 h-6 mr-3 text-nyc-blue-600" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Monday - Friday</span>
                        <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Saturday</span>
                        <span className="font-semibold text-gray-900">9:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Sunday</span>
                        <span className="font-semibold text-gray-900">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <Users className="w-6 h-6 mr-3 text-nyc-green-600" />
                      Languages Supported
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Our counselors speak multiple languages to serve NYC's diverse communities:
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="text-gray-700 font-medium">• English</div>
                      <div className="text-gray-700 font-medium">• Spanish</div>
                      <div className="text-gray-700 font-medium">• Chinese</div>
                      <div className="text-gray-700 font-medium">• Arabic</div>
                      <div className="text-gray-700 font-medium">• Bengali</div>
                      <div className="text-gray-700 font-medium">• French</div>
                      <div className="text-gray-700 font-medium">• Haitian Creole</div>
                      <div className="text-gray-700 font-medium">• Korean</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <FileText className="w-6 h-6 mr-3 text-nyc-purple-600" />
                      Quick Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Link href="/programs" className="block text-nyc-blue-600 hover:text-nyc-blue-700 hover:underline font-medium">
                        View All Programs
                      </Link>
                      <Link href="/enrollment" className="block text-nyc-blue-600 hover:text-nyc-blue-700 hover:underline font-medium">
                        Find a School Near You
                      </Link>
                      <Link href="/resources" className="block text-nyc-blue-600 hover:text-nyc-blue-700 hover:underline font-medium">
                        Student Resources
                      </Link>
                      <Link href="/faq" className="block text-nyc-blue-600 hover:text-nyc-blue-700 hover:underline font-medium">
                        Frequently Asked Questions
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-nyc-blue-50 to-nyc-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-nyc-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="font-semibold text-nyc-green-600">Need Immediate Assistance?</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Our Hotline</h3>
              <p className="text-gray-700 mb-6">
                For urgent enrollment questions or immediate assistance, call our dedicated hotline.
                Our counselors are standing by to help you get started today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-nyc-green-500 hover:bg-nyc-green-600 text-white">
                  <Link href="tel:+16464818227">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (646) 481-8227
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Link href="/enrollment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 