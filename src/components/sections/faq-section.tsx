'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { HelpCircle, Globe, FileText, User, MessageCircle } from 'lucide-react'

export function FAQSection() {
  const faqs = [
    {
      icon: Globe,
      question: 'What if I have a high school diploma or college degree from another country?',
      answer: 'You can still take our Adult Ed classes.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      question: 'Do students need social security numbers or documents to take adult education classes?',
      answer: 'No documentation is needed for English as a Second Language, Adult Basic Education, or High School Equivalency classes. However, if you want to register for a Career and Technical Education class leading to certification and job placement, you may need to give a social security number or other documents to verify your identity.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: User,
      question: 'I am 18-21 years old. This page says Adult Education is for ages 21+. What do I do?',
      answer: 'We have other services for those between the ages of 17-21. Check out the information for High School Equivalency.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Get Answers"
            description="Common questions about our Adult Education programs"
            icon={<MessageCircle className="w-8 h-8" />}
          />

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${faq.color} text-white flex-shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-16">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Information */}
          <Card className="mt-8 bg-gradient-to-r from-nyc-blue-50 to-nyc-green-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-nyc-blue-100 flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-nyc-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Need More Information?</h3>
                  <p className="text-gray-600 mb-4">
                    If you have additional questions or need personalized guidance, our enrollment counselors are here to help you decide the next step in your educational journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="mailto:adultednyc@schools.nyc.gov" 
                      className="inline-flex items-center px-4 py-2 bg-nyc-blue-600 text-white rounded-lg hover:bg-nyc-blue-700 transition-colors"
                    >
                      Email Us
                    </a>
                    <a 
                      href="tel:+16464818227" 
                      className="inline-flex items-center px-4 py-2 bg-nyc-green-600 text-white rounded-lg hover:bg-nyc-green-700 transition-colors"
                    >
                      Call (646) 481-8227
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
