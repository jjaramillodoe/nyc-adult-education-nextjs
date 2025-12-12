'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Programs', href: '/programs' },
  { label: 'Find a School', href: '/enrollment' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const learnMoreLinks = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'News', href: '/news' },
  { label: 'Calendar', href: '/calendar' },
]

const programs = [
  { label: 'Adult Basic Education (ABE)', href: '/programs/abe' },
  { label: 'Career & Technical Education (CTE)', href: '/programs/cte' },
  { label: 'High School Equivalency (HSE)', href: '/programs/hse' },
  { label: 'English for Speakers of Other Languages (ESOL)', href: '/programs/esol' },
]

const resources = [
  { label: 'Student Portal', href: '/resources/portal' },
  { label: 'Academic Calendar', href: '/resources/calendar' },
  { label: 'Forms & Documents', href: '/resources/forms' },
  { label: 'Financial Aid', href: '/resources/financial-aid' },
  { label: 'Career Services', href: '/resources/career-services' },
  { label: 'FAQs', href: '/faq' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.png"
                  alt="NYC Adult Education Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold">NYC Adult Education</div>
                <div className="text-sm text-gray-400">Transform Your Future</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering adults in New York City through high-quality education programs 
              including ABE, CTE, HSE, and ESOL. Join thousands of students who have 
              transformed their lives through our comprehensive adult education programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/adultednyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/adultednyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/adultednyc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Learn More</h3>
            <ul className="space-y-2">
              {learnMoreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <div className="text-gray-300">
                  90-01 Sutphin Blvd<br />
                  Jamaica, NY 11420
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+16464818227"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (646) 481-8227
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@adultedu.nyc"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@adultedu.nyc
                </a>
              </div>
            </div>

            {/* Resources Quick List */}
            <div className="pt-4">
              <h4 className="font-medium mb-2">Student Resources</h4>
              <ul className="space-y-1">
                {resources.slice(0, 3).map((resource) => (
                  <li key={resource.href}>
                    <Link
                      href={resource.href}
                      className="text-gray-400 hover:text-white transition-colors text-xs"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-nyc-blue-400">8</div>
              <div className="text-sm text-gray-400">Schools in Network</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-nyc-green-400">10,000+</div>
              <div className="text-sm text-gray-400">Students Empowered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-nyc-purple-400">95%</div>
              <div className="text-sm text-gray-400">Graduation Rate</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-nyc-teal-400">185</div>
              <div className="text-sm text-gray-400">Sites Across NYC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NYC Department of Education. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
