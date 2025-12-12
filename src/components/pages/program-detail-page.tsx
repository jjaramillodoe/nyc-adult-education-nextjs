'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckCircle, ArrowLeft, Star, Building, Brain, BookOpen, Wrench, GraduationCap, Globe, TrendingUp, Award, Briefcase, DollarSign, Calendar, Heart, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { programs as staticPrograms } from '@/lib/static-data'
import { Program } from '@/types'
import { getColorClasses } from '@/lib/utils'

// Import new components
import { WelcomeSection } from '@/components/program-detail/WelcomeSection'
import { ProgramOverview } from '@/components/program-detail/ProgramOverview'
import { ProgramCourses } from '@/components/program-detail/ProgramCourses'
import { ProgramStats } from '@/components/program-detail/ProgramStats'
import { EnrollmentCTA } from '@/components/program-detail/EnrollmentCTA'
import { ProgramHighlights } from '@/components/program-detail/ProgramHighlights'

const iconMap = {
  BookOpen,
  Wrench,
  GraduationCap,
  Globe,
}

interface ProgramDetailPageProps {
  programId: string
}

export function ProgramDetailPage({ programId }: ProgramDetailPageProps) {
  const program = staticPrograms.find(p => p.id === programId) || null
  const isLoading = false
  const error = program ? null : 'Program not found'
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section Skeleton */}
        <section className="bg-gradient-to-br from-nyc-blue-600 to-nyc-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="h-6 bg-white/20 rounded w-32 mb-6 animate-pulse"></div>
              <div className="h-12 bg-white/20 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="h-6 bg-white/20 rounded w-full animate-pulse"></div>
            </div>
          </div>
        </section>
        
        {/* Content Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-8 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (error || !program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-6">The program you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Programs
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[program.icon as keyof typeof iconMap] || BookOpen
  const colors = getColorClasses(program.color)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Section */}
              <WelcomeSection program={program} colors={colors} />

              {/* Program Overview */}
              <ProgramOverview program={program} />

              {/* Programs & Courses Offered */}
              <ProgramCourses program={program} />

              {/* Program Success Metrics */}
              <ProgramStats colors={colors} />

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Who Can Enroll</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`p-6 ${colors.bg} rounded-lg border-l-4 ${colors.border.replace('border-', 'border-l-')}`}>
                    <p className="text-gray-700 leading-relaxed">
                      {program.eligibility}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Program Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className={`w-5 h-5 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Program Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                        <Star className={`w-5 h-5 ${colors.icon} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Program Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <TrendingUp className={`mr-3 h-6 w-6 ${colors.icon}`} />
                    Program Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-700">95%</div>
                      <div className="text-sm text-green-600">Completion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-700">87%</div>
                      <div className="text-sm text-blue-600">Job Placement</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-700">$45K</div>
                      <div className="text-sm text-purple-600">Avg. Starting Salary</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                      <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-700">6-12</div>
                      <div className="text-sm text-orange-600">Months Duration</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Programs Being Taught */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <BookOpen className={`mr-3 h-6 w-6 ${colors.icon}`} />
                    Programs & Courses Offered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.abbreviation === 'CTE' && (
                      <>
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
                      </>
                    )}
                    {program.abbreviation === 'ESOL' && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border-l-4 border-teal-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <Globe className="w-5 h-5 text-teal-600" />
                              <h4 className="font-semibold text-gray-900">ESOL Levels</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Beginner ESOL</li>
                              <li>• Intermediate ESOL</li>
                              <li>• Advanced ESOL</li>
                              <li>• Workplace English</li>
                              <li>• Academic English</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <Heart className="w-5 h-5 text-blue-600" />
                              <h4 className="font-semibold text-gray-900">Specialized Programs</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Citizenship Preparation</li>
                              <li>• Family Literacy</li>
                              <li>• Healthcare English</li>
                              <li>• Business English</li>
                              <li>• Computer Literacy</li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                    {program.abbreviation === 'HSE' && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <GraduationCap className="w-5 h-5 text-purple-600" />
                              <h4 className="font-semibold text-gray-900">Test Preparation</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• GED Test Preparation</li>
                              <li>• TASC Test Preparation</li>
                              <li>• HiSET Test Preparation</li>
                              <li>• Practice Test Sessions</li>
                              <li>• Test-Taking Strategies</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <BookOpen className="w-5 h-5 text-green-600" />
                              <h4 className="font-semibold text-gray-900">Subject Areas</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Language Arts & Writing</li>
                              <li>• Mathematics</li>
                              <li>• Science</li>
                              <li>• Social Studies</li>
                              <li>• Critical Thinking Skills</li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                    {program.abbreviation === 'ABE' && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <BookOpen className="w-5 h-5 text-blue-600" />
                              <h4 className="font-semibold text-gray-900">Basic Skills</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Reading Fundamentals</li>
                              <li>• Writing Skills</li>
                              <li>• Basic Mathematics</li>
                              <li>• Problem Solving</li>
                              <li>• Study Skills</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                            <div className="flex items-center space-x-3 mb-2">
                              <Brain className="w-5 h-5 text-green-600" />
                              <h4 className="font-semibold text-gray-900">Life Skills</h4>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Financial Literacy</li>
                              <li>• Digital Literacy</li>
                              <li>• Health Literacy</li>
                              <li>• Civic Education</li>
                              <li>• Job Readiness Skills</li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Career Pathways */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Target className={`mr-3 h-6 w-6 ${colors.icon}`} />
                    Career Pathways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.abbreviation === 'CTE' && (
                      <>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Building className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Healthcare</div>
                            <div className="text-sm text-gray-600">Certified Nursing Assistant, Medical Assistant</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Zap className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Technology</div>
                            <div className="text-sm text-gray-600">IT Support, Web Development, Cybersecurity</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Briefcase className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Business</div>
                            <div className="text-sm text-gray-600">Administrative Assistant, Customer Service</div>
                          </div>
                        </div>
                      </>
                    )}
                    {program.abbreviation === 'ESOL' && (
                      <>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Heart className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Healthcare</div>
                            <div className="text-sm text-gray-600">Patient Care Coordinator, Medical Interpreter</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Building className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Education</div>
                            <div className="text-sm text-gray-600">ESOL Teacher, Community Outreach</div>
                          </div>
                        </div>
                      </>
                    )}
                    {program.abbreviation === 'HSE' && (
                      <>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <GraduationCap className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Higher Education</div>
                            <div className="text-sm text-gray-600">Community College, University Preparation</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Briefcase className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Career Advancement</div>
                            <div className="text-sm text-gray-600">Better Job Opportunities, Promotion Eligibility</div>
                          </div>
                        </div>
                      </>
                    )}
                    {program.abbreviation === 'ABE' && (
                      <>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <BookOpen className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Academic Foundation</div>
                            <div className="text-sm text-gray-600">Preparing for HSE, College Readiness</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Brain className={`w-5 h-5 ${colors.icon}`} />
                          <div>
                            <div className="font-semibold text-gray-900">Life Skills</div>
                            <div className="text-sm text-gray-600">Financial Literacy, Digital Literacy</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Heart className={`mr-3 h-6 w-6 ${colors.icon}`} />
                    Success Stories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "This program completely changed my life. The instructors were supportive, 
                      the schedule was flexible, and I gained the skills I needed to advance my career."
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                        <span className={`text-sm font-bold ${colors.text}`}>JD</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">John Doe</div>
                        <div className="text-sm text-gray-600">{program.abbreviation} Graduate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enrollment CTA */}
              <EnrollmentCTA program={program} colors={colors} />

              {/* Program Highlights */}
              <ProgramHighlights colors={colors} />

              {/* Related Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Other Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['ABE', 'CTE', 'HSE', 'ESOL']
                      .filter(abbr => abbr !== program.abbreviation)
                      .map((abbr) => (
                        <Link
                          key={abbr}
                          href={`/programs/${abbr.toLowerCase()}`}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="font-semibold text-gray-900">{abbr}</div>
                          <div className="text-sm text-gray-600">
                            {abbr === 'ABE' && 'Adult Basic Education'}
                            {abbr === 'CTE' && 'Career & Technical Education'}
                            {abbr === 'HSE' && 'High School Equivalency'}
                            {abbr === 'ESOL' && 'English for Speakers of Other Languages'}
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
