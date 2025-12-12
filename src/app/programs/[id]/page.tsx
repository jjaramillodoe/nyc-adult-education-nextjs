import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProgramDetailPage } from '@/components/pages/program-detail-page'
import { GraduationCap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return [
    { id: 'abe' },
    { id: 'cte' },
    { id: 'hse' },
    { id: 'esol' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const programTitles = {
    abe: 'Adult Basic Education (ABE)',
    cte: 'Career and Technical Education (CTE)',
    hse: 'High School Equivalency (HSE)',
    esol: 'English for Speakers of Other Languages (ESOL)',
  }
  const { id } = await params;
  const title = programTitles[id as keyof typeof programTitles] || 'Program Details'
  return {
    title: `${title} - NYC Adult Education`,
    description: `Learn more about our ${title} program and how it can help transform your future through quality education.`,
  }
}

export default async function ProgramDetailPageRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const programTitles = {
    abe: 'Adult Basic Education (ABE)',
    cte: 'Career and Technical Education (CTE)',
    hse: 'High School Equivalency (HSE)',
    esol: 'English for Speakers of Other Languages (ESOL)',
  }
  const title = programTitles[id as keyof typeof programTitles] || 'Program Details';
  return (
    <div className="min-h-screen bg-gradient-to-br from-nyc-blue-50 via-white to-nyc-green-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-nyc-blue-600 via-nyc-blue-700 to-nyc-blue-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-nyc-green-200" />
                <span className="text-sm font-semibold text-nyc-green-100">NYC Adult Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Learn more about our {title} program and how it can help transform your future through quality education.
              </p>
              <Link href="/programs" className="inline-flex items-center px-6 py-3 bg-white text-nyc-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Programs
              </Link>
            </div>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-nyc-green-400/20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-nyc-blue-400/20 rounded-full blur-3xl z-0"></div>
        </section>
        {/* Program Details Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <ProgramDetailPage programId={id} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
