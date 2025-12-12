import axios from 'axios'
import {
  Program,
  EnrollmentHub,
  Testimonial,
  NewsArticle,
  SiteSettings,
  APIResponse,
  APIError,
  ContactForm,
  EnrollmentInquiry,
} from '@/types'

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Helper function to check if we're in a real browser environment
const isBrowser = (): boolean => {
  // First check basic browser environment
  if (
    typeof window === 'undefined' ||
    typeof document === 'undefined' ||
    typeof window.localStorage === 'undefined' ||
    !window.localStorage
  ) {
    return false
  }
  
  // Check that localStorage methods exist and are functions
  const storage = window.localStorage
  if (
    typeof storage.getItem !== 'function' ||
    typeof storage.setItem !== 'function' ||
    typeof storage.removeItem !== 'function'
  ) {
    return false
  }
  
  // Final test: try to actually use localStorage to verify it works
  // This catches broken polyfills that have the methods but they don't work
  try {
    const testKey = '__localStorage_test__'
    storage.setItem(testKey, 'test')
    storage.getItem(testKey)
    storage.removeItem(testKey)
    return true
  } catch (error) {
    // If any localStorage operation fails, we're not in a real browser
    return false
  }
}

// Helper function to safely get token from localStorage
const getAuthToken = (): string | null => {
  if (!isBrowser()) {
    return null
  }
  
  try {
    return window.localStorage.getItem('auth_token')
  } catch (error) {
    // Silently fail if localStorage is not available or throws an error
    return null
  }
}

// Request interceptor to add auth token
// The interceptor function itself is safe - it checks isBrowser() at runtime
// This allows it to be set up even during SSR, but it won't execute localStorage code
api.interceptors.request.use(
  (config) => {
    // Always check if we're in a real browser before accessing localStorage
    // This check happens at runtime for every request
    if (!isBrowser()) {
      return config
    }
    
    try {
      const token = getAuthToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      // Silently fail if localStorage access fails
      // This can happen with broken polyfills or SSR
    }
    
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError: APIError = {
      message: error.response?.data?.error || error.message || 'An error occurred',
      statusCode: error.response?.status || 500,
      error: error.response?.data?.message,
    }
    return Promise.reject(apiError)
  }
)

// Authentication API
export const authAPI = {
  login: async (identifier: string, password: string) => {
    const response = await api.post('/api/auth/local', { identifier, password })
    return response.data
  },

  logout: () => {
    if (!isBrowser()) {
      return
    }
    
    try {
      window.localStorage.removeItem('auth_token')
      window.localStorage.removeItem('user')
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  },

  getCurrentUser: () => {
    if (!isBrowser()) {
      return null
    }
    
    try {
      const user = window.localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    } catch (error) {
      // Silently fail if localStorage is not available
    }
    return null
  },

  isAuthenticated: () => {
    if (!isBrowser()) {
      return false
    }
    
    try {
      return !!window.localStorage.getItem('auth_token')
    } catch (error) {
      // Silently fail if localStorage is not available
    }
    return false
  },
}

// Programs API
export const programsAPI = {
  getAll: async (): Promise<Program[]> => {
    const response = await api.get('/api/programs')
    return response.data.data || []
  },

  getById: async (id: string): Promise<Program> => {
    const response = await api.get(`/api/programs/${id}`)
    return response.data.data
  },

  create: async (program: Partial<Program>): Promise<Program> => {
    const response = await api.post('/api/programs', program)
    return response.data.data
  },

  update: async (id: string, program: Partial<Program>): Promise<Program> => {
    const response = await api.put(`/api/programs/${id}`, program)
    return response.data.data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/api/programs/${id}`)
  },
}

// Enrollment Hubs API
export const enrollmentHubsAPI = {
  getAll: async (): Promise<EnrollmentHub[]> => {
    const response = await api.get('/api/enrollment-hubs')
    return response.data.data || []
  },

  getById: async (id: string): Promise<EnrollmentHub> => {
    const response = await api.get(`/api/enrollment-hubs/${id}`)
    return response.data.data
  },

  getByBorough: async (borough: string): Promise<EnrollmentHub[]> => {
    const hubs = await enrollmentHubsAPI.getAll()
    return hubs.filter(hub => hub.borough.toLowerCase() === borough.toLowerCase())
  },

  create: async (hub: Partial<EnrollmentHub>): Promise<EnrollmentHub> => {
    const response = await api.post('/api/enrollment-hubs', hub)
    return response.data.data
  },

  update: async (id: string, hub: Partial<EnrollmentHub>): Promise<EnrollmentHub> => {
    const response = await api.put(`/api/enrollment-hubs/${id}`, hub)
    return response.data.data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/api/enrollment-hubs/${id}`)
  },
}

// Testimonials API
export const testimonialsAPI = {
  getAll: async (): Promise<Testimonial[]> => {
    const response = await api.get('/api/testimonials')
    return response.data.data || []
  },

  getFeatured: async (): Promise<Testimonial[]> => {
    const testimonials = await testimonialsAPI.getAll()
    return testimonials.filter(testimonial => testimonial.featured)
  },

  getById: async (id: string): Promise<Testimonial> => {
    const response = await api.get(`/api/testimonials/${id}`)
    return response.data.data
  },

  create: async (testimonial: Partial<Testimonial>): Promise<Testimonial> => {
    const response = await api.post('/api/testimonials', testimonial)
    return response.data.data
  },

  update: async (id: string, testimonial: Partial<Testimonial>): Promise<Testimonial> => {
    const response = await api.put(`/api/testimonials/${id}`, testimonial)
    return response.data.data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/api/testimonials/${id}`)
  },
}

// News Articles API
export const newsAPI = {
  getAll: async (): Promise<NewsArticle[]> => {
    const response = await api.get('/api/news-articles')
    return response.data.data || []
  },

  getFeatured: async (): Promise<NewsArticle[]> => {
    const articles = await newsAPI.getAll()
    return articles.filter(article => article.featured)
  },

  getById: async (id: string): Promise<NewsArticle> => {
    const response = await api.get(`/api/news-articles/${id}`)
    return response.data.data
  },

  getByCategory: async (category: string): Promise<NewsArticle[]> => {
    const articles = await newsAPI.getAll()
    return articles.filter(article => article.category === category)
  },

  create: async (article: Partial<NewsArticle>): Promise<NewsArticle> => {
    const response = await api.post('/api/news-articles', article)
    return response.data.data
  },

  update: async (id: string, article: Partial<NewsArticle>): Promise<NewsArticle> => {
    const response = await api.put(`/api/news-articles/${id}`, article)
    return response.data.data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/api/news-articles/${id}`)
  },
}

// Site Settings API
export const siteSettingsAPI = {
  get: async (): Promise<SiteSettings> => {
    const response = await api.get('/api/site-settings')
    return response.data.data
  },

  update: async (settings: Partial<SiteSettings>): Promise<SiteSettings> => {
    const response = await api.put('/api/site-settings', settings)
    return response.data.data
  },
}

// Contact Form API
export const contactAPI = {
  submit: async (form: ContactForm): Promise<void> => {
    // For now, we'll just log the form submission
    // In a real implementation, this would send to an email service
    console.log('Contact form submitted:', form)
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  },

  submitEnrollmentInquiry: async (inquiry: EnrollmentInquiry): Promise<void> => {
    // For now, we'll just log the inquiry
    // In a real implementation, this would create a record in the CMS
    console.log('Enrollment inquiry submitted:', inquiry)
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  },
}

// Search API
export const searchAPI = {
  search: async (query: string, filters?: any) => {
    // For now, implement client-side search
    // In a real implementation, this would be server-side with full-text search
    const [programs, hubs, articles] = await Promise.all([
      programsAPI.getAll(),
      enrollmentHubsAPI.getAll(),
      newsAPI.getAll(),
    ])

    const queryLower = query.toLowerCase()
    const results: Array<{
      id: string
      title: string
      description: string
      type: 'program' | 'hub' | 'article'
      url: string
    }> = []

    // Search programs
    programs.forEach(program => {
      if (
        program.title.toLowerCase().includes(queryLower) ||
        program.description.toLowerCase().includes(queryLower) ||
        program.abbreviation.toLowerCase().includes(queryLower)
      ) {
        results.push({
          id: program.id,
          title: program.title,
          description: program.description,
          type: 'program' as const,
          url: `/programs/${program.id}`,
        })
      }
    })

    // Search enrollment hubs
    hubs.forEach(hub => {
      if (
        hub.name.toLowerCase().includes(queryLower) ||
        hub.borough.toLowerCase().includes(queryLower) ||
        hub.address.toLowerCase().includes(queryLower)
      ) {
        results.push({
          id: hub.id,
          title: hub.name,
          description: `${hub.borough} - ${hub.address}`,
          type: 'hub' as const,
          url: `/enrollment#${hub.id}`,
        })
      }
    })

    // Search articles
    articles.forEach(article => {
      if (
        article.title.toLowerCase().includes(queryLower) ||
        article.excerpt.toLowerCase().includes(queryLower) ||
        article.content.toLowerCase().includes(queryLower)
      ) {
        results.push({
          id: article.id,
          title: article.title,
          description: article.excerpt,
          type: 'article' as const,
          url: `/news/${article.id}`,
        })
      }
    })

    return results
  },
}

// File Upload API
export const uploadAPI = {
  uploadFile: async (file: File): Promise<{ url: string; id: string }> => {
    const formData = new FormData()
    formData.append('file', file)
    
    const response = await api.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    
    return {
      url: response.data.url,
      id: response.data.id,
    }
  },
}

// Admin Dashboard API
export const adminAPI = {
  getDashboardData: async () => {
    const response = await api.get('/api/admin/dashboard')
    return response.data
  },
}

// Health Check API
export const healthAPI = {
  check: async () => {
    const response = await api.get('/health')
    return response.data
  },
}

export default api
