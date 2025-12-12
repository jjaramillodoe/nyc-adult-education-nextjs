'use client'

import * as React from 'react'
import Image from 'next/image'
import { Quote, Star, ChevronLeft, ChevronRight, Award, Heart, Users, TrendingUp, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { testimonials as staticTestimonials } from '@/lib/static-data'
import { Testimonial } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

export function TestimonialsSection() {
  const testimonials = staticTestimonials
  const isLoading = false
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  React.useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextTestimonial, 8000)
      return () => clearInterval(interval)
    }
  }, [testimonials.length])

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

  const testimonialVariants = {
    enter: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-nyc-teal-50 to-nyc-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-50 via-nyc-teal-50 to-nyc-green-50 relative overflow-hidden">
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
            <Heart className="w-4 h-4 text-nyc-blue-600" />
            <span className="text-sm font-semibold text-nyc-blue-700">Student Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-nyc-blue-800 to-nyc-teal-800 bg-clip-text text-transparent mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from graduates who have transformed their lives through our education programs. 
            Their journeys inspire us and show what's possible when you commit to learning.
          </p>
        </motion.div>

        {/* Enhanced Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-2xl border-0 overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Enhanced Quote Background */}
                  <div className="absolute top-8 left-8 text-nyc-blue-100 opacity-30">
                    <Quote className="w-16 h-16" />
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        variants={testimonialVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="grid lg:grid-cols-3 gap-8 items-center"
                      >
                        {/* Enhanced Student Photo */}
                        <div className="lg:col-span-1 text-center">
                          <motion.div 
                            className="relative w-40 h-40 mx-auto mb-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-nyc-blue-400 via-nyc-teal-400 to-nyc-green-400 rounded-full blur-lg opacity-30"></div>
                            <div className="relative w-full h-full bg-gradient-to-br from-nyc-blue-400 to-nyc-teal-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                              {currentTestimonial.image ? (
                                <Image
                                  src={currentTestimonial.image}
                                  alt={currentTestimonial.name}
                                  fill
                                  className="rounded-full object-cover"
                                />
                              ) : (
                                <span className="text-3xl font-bold text-white">
                                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              )}
                            </div>
                          </motion.div>
                          
                          {/* Enhanced Student Info */}
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {currentTestimonial.name}
                            </h3>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nyc-blue-100 to-nyc-teal-100 px-4 py-2 rounded-full mb-3">
                              <Award className="w-4 h-4 text-nyc-blue-600" />
                              <span className="text-sm font-semibold text-nyc-blue-700">
                                {currentTestimonial.program} Graduate
                              </span>
                            </div>
                            {currentTestimonial.currentRole && (
                              <div className="text-sm text-gray-600 mb-2 font-medium">
                                {currentTestimonial.currentRole}
                              </div>
                            )}
                            {currentTestimonial.location && (
                              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {currentTestimonial.location}
                              </div>
                            )}
                            
                            {/* Enhanced Rating */}
                            <div className="flex justify-center mt-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Quote */}
                        <div className="lg:col-span-2">
                          <motion.blockquote 
                            className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10 italic"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            "{currentTestimonial.quote}"
                          </motion.blockquote>
                          
                          {currentTestimonial.graduationYear && (
                            <motion.div 
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-nyc-blue-500 to-nyc-teal-500 text-white rounded-full text-sm font-semibold shadow-lg"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.5 }}
                            >
                              Class of {currentTestimonial.graduationYear}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Navigation */}
          <motion.div 
            className="flex items-center justify-center mt-8 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-gray-300 hover:border-nyc-blue-500 hover:text-nyc-blue-600 hover:shadow-lg transition-all duration-300 w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Enhanced Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-nyc-blue-500 to-nyc-teal-500 scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-gray-300 hover:border-nyc-blue-500 hover:text-nyc-blue-600 hover:shadow-lg transition-all duration-300 w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Additional Testimonials Grid */}
        {testimonials.length > 1 && (
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className="bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-nyc-blue-200 rounded-2xl overflow-hidden"
                    onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-nyc-blue-400 to-nyc-teal-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-lg font-bold text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-base mb-2">
                            {testimonial.name}
                          </h4>
                          <div className="text-sm text-nyc-blue-600 font-semibold mb-3">
                            {testimonial.program}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                            "{testimonial.quote.slice(0, 120)}..."
                          </p>
                          <div className="flex items-center mt-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        )}

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto border border-gray-100">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nyc-blue-100 to-nyc-teal-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-nyc-blue-600" />
              <span className="text-sm font-semibold text-nyc-blue-700">Join Our Community</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of students who have transformed their lives through education. 
              Your journey to a brighter future starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-3 rounded-xl">
                <a href="/enrollment">
                  Start Your Journey
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-3 rounded-xl">
                <a href="/testimonials">
                  Read More Stories
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
