'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, Users, Award, MapPin, Star, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-nyc-blue-600 via-nyc-blue-700 to-nyc-blue-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-education.JPG"
          alt="NYC Adult Education students learning"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nyc-blue-600/90 via-nyc-blue-700/80 to-nyc-blue-800/90"></div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-nyc-teal-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-nyc-green-400/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>

      {/* Floating Achievement Badges */}
      <div className="absolute top-16 left-8 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/30 animate-float">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-nyc-green-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-nyc-green-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">#1 in NYC</div>
              <div className="text-xs text-gray-600">Adult Education</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30 animate-fade-in">
                <Award className="w-4 h-4 mr-2" />
                #1 Adult Education Program in NYC
                <div className="ml-2 w-2 h-2 bg-nyc-green-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Title */}
              <div className="space-y-4">
                <h1 className="hero-title text-white leading-tight">
                  Transform Your Future Through
                  <span className="block text-nyc-teal-300 bg-gradient-to-r from-nyc-teal-300 to-nyc-green-300 bg-clip-text text-transparent">
                    Adult Education
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Empower yourself with essential skills through our comprehensive programs. 
                  Join over <span className="font-bold text-white">10,000 students</span> who have transformed their lives with NYC Adult Education.
                </p>
              </div>

              {/* Enhanced Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nyc-green-400 flex-shrink-0" />
                  <span className="text-blue-100">100% Free Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nyc-green-400 flex-shrink-0" />
                  <span className="text-blue-100">185+ Locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nyc-green-400 flex-shrink-0" />
                  <span className="text-blue-100">15+ Languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-nyc-green-400 flex-shrink-0" />
                  <span className="text-blue-100">95% Success Rate</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">185</div>
                <div className="text-sm text-blue-200">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-blue-200">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-blue-200">Languages</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="xl"
                className="bg-white text-nyc-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 group"
              >
                <Link href="/enrollment" className="flex items-center">
                  Find a School Near You
                  <MapPin className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-nyc-blue-600 backdrop-blur-sm group"
              >
                <Link href="/programs" className="flex items-center">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>

            {/* Enhanced Contact Info */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-nyc-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Now Enrolling</span>
                  </div>
                  <span className="text-blue-300">•</span>
                  <span className="text-sm font-medium">Call (646) 481-8227</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">15+ Languages Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 space-y-6 border-white/20 shadow-2xl">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Start Your Journey Today</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                    <BookOpen className="w-8 h-8 text-nyc-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-gray-900 font-bold text-base mb-1">ABE</div>
                    <div className="text-gray-700 text-sm font-medium">Basic Education</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                    <Users className="w-8 h-8 text-nyc-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-gray-900 font-bold text-base mb-1">CTE</div>
                    <div className="text-gray-700 text-sm font-medium">Career Training</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                    <Award className="w-8 h-8 text-nyc-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-gray-900 font-bold text-base mb-1">HSE</div>
                    <div className="text-gray-700 text-sm font-medium">High School Equiv.</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                    <MapPin className="w-8 h-8 text-yellow-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                    <div className="text-gray-900 font-bold text-base mb-1">ESOL</div>
                    <div className="text-gray-700 text-sm font-medium">English Learning</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  asChild
                  className="bg-nyc-teal-500 hover:bg-nyc-teal-600 text-white w-full font-semibold text-base py-3 group"
                >
                  <Link href="/enrollment">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-nyc-teal-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-nyc-green-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-400 rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 320" className="w-full h-20 fill-white">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}
