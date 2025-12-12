import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { EnrollmentPage } from '@/components/pages/enrollment-page'
import { MapPin, Users, Clock, Phone, ArrowRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Find a School - NYC Adult Education',
  description: 'Find an adult education center near you. We have 185 convenient locations across all five boroughs of New York City.',
}

export default function EnrollmentPageRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-nyc-blue-600 via-nyc-blue-700 to-nyc-blue-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5 text-nyc-green-200" />
                <span className="text-sm font-semibold text-nyc-green-100">Find Your School</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Find a School Near You</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover one of our 185 convenient locations across all five boroughs of New York City. 
                Start your educational journey today with our free programs.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-nyc-green-300 mb-2">185+</div>
                  <div className="text-blue-200">Locations Across NYC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nyc-green-300 mb-2">100%</div>
                  <div className="text-blue-200">Free Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nyc-green-300 mb-2">15+</div>
                  <div className="text-blue-200">Languages Supported</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#school-finder" className="inline-flex items-center px-8 py-4 bg-nyc-green-500 hover:bg-nyc-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 text-lg">
                  Find My School
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
                <Link href="tel:+16464818227" className="inline-flex items-center px-8 py-4 bg-white text-nyc-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200 text-lg">
                  <Phone className="mr-2 w-6 h-6" />
                  Call (646) 481-8227
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-nyc-green-400/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-nyc-blue-400/20 rounded-full blur-3xl z-0"></div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Enroll</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Getting started is easy. Follow these simple steps to begin your educational journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-blue-100 text-nyc-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Find Your School</h3>
                <p className="text-gray-600">Use our school finder to locate the nearest adult education center to you.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-green-100 text-nyc-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Contact the School</h3>
                <p className="text-gray-600">Call or visit the school to speak with an education counselor.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nyc-purple-100 text-nyc-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Start Learning</h3>
                <p className="text-gray-600">Begin your classes and start transforming your future through education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Form Section */}
        <section id="school-finder" className="py-16 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <EnrollmentPage />
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Need to Enroll</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nyc-green-100 text-nyc-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Valid ID</div>
                      <div className="text-gray-600">Driver's license, passport, or other government-issued ID</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nyc-green-100 text-nyc-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Proof of NYC Residency</div>
                      <div className="text-gray-600">Utility bill, lease agreement, or other proof of address</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-nyc-green-100 text-nyc-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Assessment (if required)</div>
                      <div className="text-gray-600">Some programs may require a placement assessment</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-nyc-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Flexible Class Times</div>
                      <div className="text-gray-600">Morning, afternoon, evening, and weekend classes available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-nyc-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Small Class Sizes</div>
                      <div className="text-gray-600">Personalized attention and support from experienced instructors</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-nyc-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Progress at Your Pace</div>
                      <div className="text-gray-600">Learn at a comfortable pace with ongoing support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
