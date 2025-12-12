import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProgramsListingPage } from '@/components/pages/programs-listing-page'
import { BookOpen, GraduationCap, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Education Programs - NYC Adult Education',
  description: 'Explore our comprehensive adult education programs including ABE, CTE, HSE, and ESOL. Transform your future through quality education in New York City.',
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-nyc-blue-600 via-nyc-blue-700 to-nyc-blue-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-nyc-green-200" />
                <span className="text-sm font-semibold text-nyc-green-100">NYC Adult Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Education Programs</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Discover a wide range of free programs designed to help you achieve your goals—whether you want to earn your diploma, learn English, or advance your career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#program-list" className="inline-flex items-center px-6 py-3 bg-nyc-green-500 hover:bg-nyc-green-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200">
                  View Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/enrollment" className="inline-flex items-center px-6 py-3 bg-white text-nyc-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200">
                  How to Enroll
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-nyc-green-400/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-nyc-blue-400/20 rounded-full blur-3xl z-0"></div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-nyc-blue-50 via-white to-nyc-green-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-nyc-blue-100 text-nyc-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Programs</h3>
                <p className="text-gray-700">From basic education to career training and English language learning.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-nyc-green-100 text-nyc-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
                <p className="text-gray-700">Learn with experienced instructors and a network of motivated students.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-nyc-purple-100 text-nyc-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Success</h3>
                <p className="text-gray-700">Thousands of graduates have transformed their lives through our programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Listing Section */}
        <section id="program-list" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <ProgramsListingPage />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
