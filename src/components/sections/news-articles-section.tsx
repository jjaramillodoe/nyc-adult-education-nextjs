'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { newsArticles } from '@/lib/static-data'

export function NewsArticlesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Latest News & Announcements"
            subtitle="Stay Updated"
            description="Read the latest news, announcements, and updates from our Adult Education community"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-nyc-blue-100 text-nyc-blue-700">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-nyc-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">By {article.author}</span>
                    <div className="flex items-center text-nyc-blue-600 hover:text-nyc-blue-700 font-medium">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-nyc-blue-600 text-white font-semibold rounded-lg hover:bg-nyc-blue-700 transition-colors shadow-lg">
              View All News
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
