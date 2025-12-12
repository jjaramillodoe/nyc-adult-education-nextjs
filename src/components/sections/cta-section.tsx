'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MapPin, Clock, Users, Star, CheckCircle, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CTASection() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-nyc-blue-600 via-nyc-blue-700 to-nyc-blue-800 relative overflow-hidden">
      {/* Enhanced Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/graduation-celebration.jpg"
          alt="NYC Adult Education graduation celebration"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nyc-blue-600/95 via-nyc-blue-700/90 to-nyc-blue-800/95"></div>
      </div> */}

      {/* Enhanced Decorative Elements */}
      {/* <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-nyc-teal-400/20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-nyc-green-400/15 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-nyc-purple-400/15 rounded-full blur-2xl z-0"></div> */}

      <div className="relative container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Main CTA */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-5 h-5 mr-2" />
              Join 10,000+ Successful Graduates
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Your Future Starts
              <span className="block bg-gradient-to-r from-nyc-teal-300 to-nyc-green-300 bg-clip-text text-transparent">Today</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Take the first step towards transforming your life through education. 
              Our comprehensive programs, experienced instructors, and supportive community 
              are here to help you achieve your goals.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="xl"
                className="bg-white text-nyc-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg px-8 py-4 rounded-xl"
              >
                <Link href="/enrollment" className="flex items-center">
                  <MapPin className="mr-2 h-6 w-6" />
                  Find Your School
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-nyc-blue-600 backdrop-blur-sm text-lg px-8 py-4 rounded-xl"
              >
                <Link href="tel:+16464818227" className="flex items-center">
                  <Phone className="mr-2 h-6 w-6" />
                  Call (646) 481-8227
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Quick Actions Grid */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                href: "/programs",
                icon: Users,
                title: "Explore Programs",
                description: "Find the right program for your goals",
                color: "nyc-blue"
              },
              {
                href: "/enrollment",
                icon: MapPin,
                title: "Find Locations",
                description: "185 convenient sites across NYC",
                color: "nyc-green"
              },
              {
                href: "/resources",
                icon: Clock,
                title: "Flexible Schedule",
                description: "Day, evening, and weekend classes",
                color: "nyc-purple"
              },
              {
                href: "/contact",
                icon: Phone,
                title: "Get Support",
                description: "Speak with an education counselor",
                color: "yellow"
              }
                         ].map((action, index) => {
               const IconComponent = action.icon
               const colorClasses: Record<string, string> = {
                 'nyc-blue': 'bg-nyc-blue-100 text-nyc-blue-600',
                 'nyc-green': 'bg-nyc-green-100 text-nyc-green-600',
                 'nyc-purple': 'bg-nyc-purple-100 text-nyc-purple-600',
                 'yellow': 'bg-yellow-100 text-yellow-600'
               }

               return (
                 <motion.div
                   key={action.href}
                   variants={cardVariants}
                   whileHover={{ 
                     scale: 1.05,
                     y: -5,
                     transition: { duration: 0.2 }
                   }}
                 >
                   <Link
                     href={action.href}
                     className="rounded-2xl p-6 text-center transition-all duration-300 group"
                   >
                     <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg ${colorClasses[action.color]} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                       <IconComponent className="w-8 h-8" />
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2 text-lg">{action.title}</h3>
                     <p className="text-sm text-gray-700 leading-relaxed">{action.description}</p>
                   </Link>
                 </motion.div>
               )
             })}
          </motion.div>

          {/* Enhanced Key Benefits */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                value: "100% Free",
                description: "All programs are completely free for eligible students",
                color: "nyc-teal-300",
                icon: CheckCircle
              },
              {
                value: "15+ Languages",
                description: "Multilingual support for NYC's diverse communities",
                color: "nyc-green-300",
                icon: Users
              },
              {
                value: "95% Success",
                description: "Outstanding graduation and job placement rates",
                color: "yellow-300",
                icon: Award
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              
              return (
                <motion.div 
                  key={benefit.value}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg ${benefit.color.replace('-300', '-100')} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${benefit.color} mb-3`}>{benefit.value}</div>
                  <div className="text-blue-200 leading-relaxed">{benefit.description}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Enhanced Urgency Message */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto border-2 border-white/30 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-nyc-green-500 rounded-full animate-pulse mr-3"></div>
              <span className="font-semibold text-nyc-green-600 text-lg">Now Enrolling for Spring 2025</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Don't Wait - Classes Fill Up Fast!</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Spring registration is now open. Secure your spot in the program that will 
              transform your future. Our counselors are standing by to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-nyc-green-500 to-nyc-green-600 hover:from-nyc-green-600 hover:to-nyc-green-700 text-white text-lg px-8 py-3 rounded-xl shadow-lg"
              >
                <Link href="/enrollment" className="flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-lg px-8 py-3 rounded-xl"
              >
                <Link href="/contact" className="flex items-center">
                  Ask Questions
                  <Phone className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Call Us</h4>
                <a href="tel:+16464818227" className="text-blue-200 hover:text-white transition-colors text-lg">
                  (646) 481-8227
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Visit Us</h4>
                <div className="text-blue-200 text-lg">
                  52 Chambers Street<br />
                  New York, NY 10007
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Office Hours</h4>
                <div className="text-blue-200 text-lg">
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
