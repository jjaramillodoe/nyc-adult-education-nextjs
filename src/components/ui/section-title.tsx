'use client'

import { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  children?: ReactNode
}

export function SectionTitle({ title, subtitle, description, className = '', children }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <div className="inline-flex items-center gap-2 bg-nyc-blue-50 px-4 py-2 rounded-full mb-4">
          <div className="w-2 h-2 bg-nyc-blue-600 rounded-full"></div>
          <span className="text-sm font-semibold text-nyc-blue-700 uppercase tracking-wide">
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      
      {children}
    </div>
  )
}

interface SectionTitleWithIconProps {
  title: string
  subtitle?: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function SectionTitleWithIcon({ title, subtitle, description, icon, className = '' }: SectionTitleWithIconProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-nyc-blue-500 to-nyc-green-500 rounded-full text-white shadow-lg">
            {icon}
          </div>
        </div>
      )}
      
      {subtitle && (
        <div className="inline-flex items-center gap-2 bg-nyc-blue-50 px-4 py-2 rounded-full mb-4">
          <div className="w-2 h-2 bg-nyc-blue-600 rounded-full"></div>
          <span className="text-sm font-semibold text-nyc-blue-700 uppercase tracking-wide">
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
