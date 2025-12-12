'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Adult Basic Education (ABE)', href: '/programs/abe' },
      { label: 'Career & Technical Education (CTE)', href: '/programs/cte' },
      { label: 'High School Equivalency (HSE)', href: '/programs/hse' },
      { label: 'English for Speakers of Other Languages (ESOL)', href: '/programs/esol' },
    ],
  },
  { label: 'Find a School', href: '/enrollment' },
  {
    label: 'Learn More',
    href: '/learn-more',
    children: [
      { label: 'FAQs', href: '/faqs' },
      { label: 'News', href: '/news' },
      { label: 'Calendar', href: '/calendar' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Literacy Zones', href: '/literacy-zones' },
      { label: 'Resources', href: '/resources' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
  { code: 'fr', name: 'Français' },
  { code: 'ht', name: 'Kreyòl' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedLanguage, setSelectedLanguage] = React.useState('en')
  const pathname = usePathname()

  const closeMenu = () => setIsMenuOpen(false)
  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      {/* Top bar with contact info and language selector */}
      <div className="bg-nyc-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>(646) 481-8227</span>
              </div>
              <span className="hidden md:block">90-01 Sutphin Blvd, Jamaica, NY 11420</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-3 w-3" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent border-none text-white text-sm focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image
                src="/images/logo.png"
                alt="NYC Adult Education Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">NYC Adult Education</div>
              <div className="text-xs text-gray-600">Transform Your Future</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'nav-link',
                    pathname === item.href && 'active'
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-nyc-blue-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-nyc-blue-600"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-gray-600 hover:text-nyc-blue-600"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white m-4 rounded-lg shadow-xl max-w-2xl mx-auto mt-20">
            <form onSubmit={handleSearch} className="p-6">
              <div className="flex items-center space-x-4">
                <Search className="h-6 w-6 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search programs, locations, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg border-0 focus:ring-0"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={closeSearch}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Press <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> to search or{' '}
                <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> to close
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden">
          <div className="bg-white w-full max-w-sm h-full shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-lg font-semibold">Menu</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-4">
              {navigation.map((item) => (
                <div key={item.href} className="mb-2">
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-nyc-blue-600 transition-colors',
                      pathname === item.href && 'bg-nyc-blue-50 text-nyc-blue-600'
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-nyc-blue-600"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
