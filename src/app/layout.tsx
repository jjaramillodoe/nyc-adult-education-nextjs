import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import ScrollToTop from '@/components/sections/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://adultedu.nyc'),
  title: 'NYC Adult Education - Transform Your Future Through Learning',
  description: 'Empowering adults in New York City through high-quality education programs including ABE, CTE, HSE, and ESOL. Join thousands of students who have transformed their lives through our comprehensive adult education programs.',
  keywords: 'NYC adult education, GED, high school equivalency, ESL, ESOL, career training, adult basic education, New York City education',
  authors: [{ name: 'NYC Department of Education' }],
  creator: 'NYC Adult Education',
  publisher: 'NYC Department of Education',
  robots: 'index, follow',
  openGraph: {
    title: 'NYC Adult Education - Transform Your Future Through Learning',
    description: 'Empowering adults in New York City through high-quality education programs including ABE, CTE, HSE, and ESOL.',
    url: 'https://adultedu.nyc',
    siteName: 'NYC Adult Education',
    images: [
      {
        url: '/images/hero-education.JPG',
        width: 1200,
        height: 630,
        alt: 'NYC Adult Education students learning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYC Adult Education - Transform Your Future Through Learning',
    description: 'Empowering adults in New York City through high-quality education programs.',
    images: ['/images/hero-education.JPG'],
    creator: '@adultednyc',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "NYC Adult Education",
              "alternateName": "New York City Adult Education",
              "url": "https://adultedu.nyc",
              "logo": "https://adultedu.nyc/images/nyc-education.jpg",
              "description": "Empowering adults in New York City through high-quality education programs including ABE, CTE, HSE, and ESOL.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "52 Chambers Street",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10007",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-646-481-8227",
                "contactType": "Customer Service",
                "availableLanguage": ["en", "es", "ar", "bn", "zh", "fr", "ht", "it", "ko", "pt", "ru", "sw", "ur", "zu"]
              },
              "sameAs": [
                "https://www.facebook.com/adultednyc/",
                "https://www.instagram.com/adultednyc/",
                "https://twitter.com/adultednyc"
              ],
              "offers": [
                {
                  "@type": "Course",
                  "name": "Adult Basic Education (ABE)",
                  "description": "Build essential academic skills in reading, writing, and mathematics"
                },
                {
                  "@type": "Course",
                  "name": "Career and Technical Education (CTE)",
                  "description": "Gain job-specific skills and training in high-demand career fields"
                },
                {
                  "@type": "Course",
                  "name": "High School Equivalency Preparation (HSE)",
                  "description": "Prepare for and earn your high school equivalency diploma"
                },
                {
                  "@type": "Course",
                  "name": "English for Speakers of Other Languages (ESOL)",
                  "description": "Develop English language skills for academic, professional, and everyday communication"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
