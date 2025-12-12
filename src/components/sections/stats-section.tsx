'use client'

import * as React from 'react'
import { School, Users, Award, MapPin, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react'
import { siteSettings as staticSiteSettings } from '@/lib/static-data'
import { SiteSettings } from '@/types'
import { motion } from 'framer-motion'

const defaultStats = {
  schoolsInNetwork: 8,
  studentsEmpowered: 10000,
  graduationRate: "95%",
  careerAdvancers: "80%",
  sitesAcrossNYC: 185
}

export function StatsSection() {
  const settings = staticSiteSettings
  const isLoading = false
  const stats = settings.statistics

  const statsData = [
    {
      id: 'schools',
      value: stats.schoolsInNetwork,
      label: 'Schools in Network',
      description: 'Quality education centers across NYC',
      icon: School,
      color: 'nyc-blue',
      gradient: 'from-nyc-blue-500 to-nyc-blue-600',
    },
    {
      id: 'students',
      value: `${Math.floor(stats.studentsEmpowered / 1000)}K+`,
      label: 'Students Empowered',
      description: 'Lives transformed through education',
      icon: Users,
      color: 'nyc-green',
      gradient: 'from-nyc-green-500 to-nyc-green-600',
    },
    {
      id: 'graduation',
      value: stats.graduationRate,
      label: 'Success Rate',
      description: 'Students completing their programs',
      icon: Award,
      color: 'nyc-purple',
      gradient: 'from-nyc-purple-500 to-nyc-purple-600',
    },
    {
      id: 'sites',
      value: stats.sitesAcrossNYC,
      label: 'Sites Across NYC',
      description: 'Convenient locations in all boroughs',
      icon: MapPin,
      color: 'nyc-teal',
      gradient: 'from-nyc-teal-500 to-nyc-teal-600',
    },
    {
      id: 'careers',
      value: stats.careerAdvancers,
      label: 'Career Advancement',
      description: 'Graduates advancing their careers',
      icon: TrendingUp,
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 'time',
      value: '40+',
      label: 'Years of Excellence',
      description: 'Serving NYC adult learners since 1983',
      icon: Clock,
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
    },
  ]

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

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-nyc-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
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
            <Star className="w-4 h-4 text-nyc-blue-600" />
            <span className="text-sm font-semibold text-nyc-blue-700">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-nyc-blue-800 to-nyc-teal-800 bg-clip-text text-transparent mb-6">
            Transforming Lives Through Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our impact speaks for itself. Join thousands of successful graduates 
            who have transformed their lives through our programs.
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            const colorClasses = {
              'nyc-blue': {
                bg: 'bg-gradient-to-br from-nyc-blue-50 to-nyc-blue-100',
                text: 'text-nyc-blue-600',
                valueText: 'text-nyc-blue-700',
                border: 'border-nyc-blue-200',
                hover: 'hover:border-nyc-blue-300 hover:shadow-nyc-blue-100',
              },
              'nyc-green': {
                bg: 'bg-gradient-to-br from-nyc-green-50 to-nyc-green-100',
                text: 'text-nyc-green-600',
                valueText: 'text-nyc-green-700',
                border: 'border-nyc-green-200',
                hover: 'hover:border-nyc-green-300 hover:shadow-nyc-green-100',
              },
              'nyc-purple': {
                bg: 'bg-gradient-to-br from-nyc-purple-50 to-nyc-purple-100',
                text: 'text-nyc-purple-600',
                valueText: 'text-nyc-purple-700',
                border: 'border-nyc-purple-200',
                hover: 'hover:border-nyc-purple-300 hover:shadow-nyc-purple-100',
              },
              'nyc-teal': {
                bg: 'bg-gradient-to-br from-nyc-teal-50 to-nyc-teal-100',
                text: 'text-nyc-teal-600',
                valueText: 'text-nyc-teal-700',
                border: 'border-nyc-teal-200',
                hover: 'hover:border-nyc-teal-300 hover:shadow-nyc-teal-100',
              },
              'yellow': {
                bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
                text: 'text-yellow-600',
                valueText: 'text-yellow-700',
                border: 'border-yellow-200',
                hover: 'hover:border-yellow-300 hover:shadow-yellow-100',
              },
              'orange': {
                bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
                text: 'text-orange-600',
                valueText: 'text-orange-700',
                border: 'border-orange-200',
                hover: 'hover:border-orange-300 hover:shadow-orange-100',
              },
            }

            const colors = colorClasses[stat.color as keyof typeof colorClasses] || colorClasses['nyc-blue']

            return (
              <motion.div
                key={stat.id}
                className={`text-center group p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl backdrop-blur-sm`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 border ${colors.border}`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <IconComponent className={`w-10 h-10 ${colors.text}`} />
                </motion.div>
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold ${colors.valueText} mb-3`}
                  variants={numberVariants}
                >
                  {stat.value}
                </motion.div>
                <div className="text-base font-bold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Achievement Highlights */}
        <motion.div 
          className="bg-gradient-to-r from-nyc-blue-50 via-nyc-teal-50 to-nyc-green-50 rounded-3xl p-10 border border-nyc-blue-100 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <motion.div 
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-nyc-blue-500 to-nyc-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nyc-blue-600 mb-3">15+ Languages</div>
              <div className="text-gray-600 leading-relaxed">
                Multilingual support to serve NYC's diverse communities with comprehensive language programs
              </div>
            </motion.div>
            <motion.div 
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-nyc-green-500 to-nyc-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nyc-green-600 mb-3">Free Programs</div>
              <div className="text-gray-600 leading-relaxed">
                All education programs are completely free for eligible students with no hidden costs
              </div>
            </motion.div>
            <motion.div 
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-nyc-purple-500 to-nyc-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nyc-purple-600 mb-3">Flexible Schedule</div>
              <div className="text-gray-600 leading-relaxed">
                Morning, afternoon, evening, and weekend classes available to fit your lifestyle
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Mission Statement */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-5xl mx-auto">
            <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6">
              "The New York City Department of Education Adult Education's mission is to empower 
              adults in their roles as parents, family members, workers, and community members. 
              We promote life-long learning and the development of problem-solving skills through continuous services."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-nyc-blue-500 to-nyc-teal-500 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm font-semibold text-gray-600">
                NYC Department of Education Adult Education Mission
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
