// API Response Types
export interface APIResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// Program Types
export interface Program {
  id: string
  title: string
  abbreviation: string
  description: string
  detailedDescription: string
  eligibility: string
  benefits: string[]
  features: string[]
  color: 'blue' | 'green' | 'purple' | 'teal'
  icon: string
  enrollmentForm?: {
    url: string
    qrCodeAvailable: boolean
    quickEnrollment: boolean
  }
  createdAt?: string
  updatedAt?: string
}

// Enrollment Hub Types
export interface EnrollmentHub {
  id: string
  borough: string
  name: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  phone: string
  email: string
  hours: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  programs: string[]
  languages: string[]
  accessibility: string[]
  createdAt?: string
  updatedAt?: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  program: string
  quote: string
  image?: string
  location?: string
  graduationYear?: number
  currentRole?: string
  featured?: boolean
  createdAt?: string
  updatedAt?: string
}

// News Article Types
export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'achievements' | 'programs' | 'enrollment' | 'events' | 'general'
  author: string
  publishDate: string
  readTime: number
  featured?: boolean
  image?: string
  tags: string[]
  createdAt?: string
  updatedAt?: string
}

// Site Settings Types
export interface SiteSettings {
  siteName: string
  siteDescription: string
  contactPhone: string
  contactEmail: string
  address: string
  statistics: {
    schoolsInNetwork: number
    studentsEmpowered: number
    graduationRate: string
    careerAdvancers: string
    sitesAcrossNYC: number
  }
  mission: string
  vision: string
  socialMedia: {
    instagram?: string
    facebook?: string
    twitter?: string
    linkedin?: string
  }
  languages: string[]
  updatedAt?: string
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  phone: string
  program?: string
  message: string
  preferredContact: 'email' | 'phone'
  borough?: string
}

export interface EnrollmentInquiry {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  zipCode: string
  preferredProgram: string
  previousEducation: string
  goals: string
  preferredLocation?: string
  preferredSchedule: 'morning' | 'afternoon' | 'evening' | 'weekend'
  hasAccommodationNeeds: boolean
  accommodationDetails?: string
  languagePreference: string
  emergencyContactName: string
  emergencyContactPhone: string
  emergencyContactRelationship: string
}

// Search Types
export interface SearchResult {
  id: string
  title: string
  description: string
  type: 'program' | 'hub' | 'article' | 'page'
  url: string
  relevance?: number
}

export interface SearchFilters {
  type?: string[]
  borough?: string[]
  program?: string[]
  language?: string[]
  dateRange?: {
    start: string
    end: string
  }
}

// Navigation Types
export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  external?: boolean
  icon?: string
}

// User Types (for admin)
export interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  createdAt: string
  updatedAt: string
}

export interface AuthUser {
  jwt: string
  user: User
}

// Map Types
export interface MapMarker {
  id: string
  position: {
    lat: number
    lng: number
  }
  title: string
  info: EnrollmentHub
}

export interface MapBounds {
  north: number
  south: number
  east: number
  west: number
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface CardProps {
  title?: string
  description?: string
  image?: string
  href?: string
  className?: string
  children?: React.ReactNode
}

// Error Types
export interface APIError {
  message: string
  statusCode: number
  error?: string
}

// Analytics Types
export interface PageView {
  page: string
  timestamp: number
  userAgent?: string
  referrer?: string
}

export interface Event {
  action: string
  category: string
  label?: string
  value?: number
  timestamp: number
}

// Accessibility Types
export interface AccessibilityFeature {
  id: string
  name: string
  description: string
  available: boolean
}

// Language Types
export interface Language {
  code: string
  name: string
  nativeName: string
  flag?: string
}

// Statistics Types
export interface ProgramStatistics {
  enrollmentCount: number
  completionRate: number
  employmentRate?: number
  averageTimeToCompletion?: number
  satisfactionScore?: number
}

export interface HubStatistics {
  totalStudents: number
  activePrograms: number
  completionRate: number
  demographics?: {
    ageGroups: Record<string, number>
    languages: Record<string, number>
    programs: Record<string, number>
  }
}

// File Upload Types
export interface UploadedFile {
  id: string
  name: string
  url: string
  mime: string
  size: number
  createdAt: string
}

// Notification Types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  timestamp: number
  read: boolean
  actions?: {
    label: string
    action: () => void
  }[]
}

// Theme Types
export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
  }
}

// Utility Types
export type WithLoading<T> = T & {
  loading?: boolean
}

export type WithError<T> = T & {
  error?: string | null
}

export type PaginatedResponse<T> = {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type SortOrder = 'asc' | 'desc'

export type SortField = string

export interface SortConfig {
  field: SortField
  order: SortOrder
}
