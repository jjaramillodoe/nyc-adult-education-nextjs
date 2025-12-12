'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, Newspaper, TrendingUp, Users, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { newsArticles as staticNewsArticles } from '@/lib/static-data'
import { NewsArticle } from '@/types'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'

export function NewsSection() {
  const articles = staticNewsArticles
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3)
  const isLoading = false

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-nyc-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (articles.length === 0) {
    return null
  }

  const categoryColors = {
    achievements: {
      bg: 'bg-gradient-to-br from-nyc-green-50 to-nyc-green-100',
      text: 'text-nyc-green-700',
      border: 'border-nyc-green-200',
      hover: 'hover:border-nyc-green-300',
    },
    programs: {
      bg: 'bg-gradient-to-br from-nyc-blue-50 to-nyc-blue-100',
      text: 'text-nyc-blue-700',
      border: 'border-nyc-blue-200',
      hover: 'hover:border-nyc-blue-300',
    },
    enrollment: {
      bg: 'bg-gradient-to-br from-nyc-purple-50 to-nyc-purple-100',
      text: 'text-nyc-purple-700',
      border: 'border-nyc-purple-200',
      hover: 'hover:border-nyc-purple-300',
    },
    events: {
      bg: 'bg-gradient-to-br from-nyc-teal-50 to-nyc-teal-100',
      text: 'text-nyc-teal-700',
      border: 'border-nyc-teal-200',
      hover: 'hover:border-nyc-teal-300',
    },
    general: {
      bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
      text: 'text-gray-700',
      border: 'border-gray-200',
      hover: 'hover:border-gray-300',
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-nyc-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-nyc-blue-200 to-nyc-teal-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-nyc-green-200 to-nyc-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nyc-blue-100 to-nyc-teal-100 px-4 py-2 rounded-full mb-6">
            <Newspaper className="w-4 h-4 text-nyc-blue-600" />
            <span className="text-sm font-semibold text-nyc-blue-700">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-nyc-blue-800 to-nyc-teal-800 bg-clip-text text-transparent mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments, success stories, and 
            opportunities in NYC Adult Education.
          </p>
        </motion.div>

        {/* Enhanced News Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => {
            const categoryColor = categoryColors[article.category] || categoryColors.general
            
            return (
              <motion.div
                key={article.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 transform overflow-hidden border-2 border-transparent hover:border-nyc-blue-200 rounded-2xl bg-white">
                  {/* Enhanced Article Image */}
                  <div className="relative h-56 overflow-hidden">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-nyc-blue-100 via-nyc-teal-100 to-nyc-green-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Tag className="w-16 h-16 mx-auto mb-3" />
                          <div className="text-sm font-medium">News Article</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Enhanced Featured Badge */}
                    {article.featured && (
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Enhanced Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${categoryColor.bg} ${categoryColor.text} ${categoryColor.border} border`}>
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-nyc-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Enhanced Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-3 py-1 rounded-full border border-gray-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 font-medium">
                        By {article.author}
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-nyc-blue-600 hover:text-nyc-blue-700 p-0 group/btn"
                      >
                        <Link href={`/news/${article.id}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-nyc-blue-50 via-nyc-teal-50 to-nyc-green-50 rounded-3xl p-10 border border-nyc-blue-100 shadow-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nyc-blue-100 to-nyc-teal-100 px-4 py-2 rounded-full mb-6">
            <Bell className="w-4 h-4 text-nyc-blue-600" />
            <span className="text-sm font-semibold text-nyc-blue-700">Stay Connected</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Connected with NYC Adult Education
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on important updates, success stories, and new opportunities. 
            Follow us on social media and subscribe to our newsletter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-3 rounded-xl">
              <Link href="/news" className="flex items-center">
                View All News
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-3 rounded-xl">
              <Link href="/contact" className="flex items-center">
                Subscribe to Updates
                <Bell className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Enhanced News Categories */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/news?category=${category}`} className="group">
                <div className={`${colorClass.bg} ${colorClass.border} border-2 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 ${colorClass.hover}`}>
                  <div className="font-bold text-lg mb-2 group-hover:underline">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                  <div className="text-sm text-gray-600">
                    Latest updates
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
