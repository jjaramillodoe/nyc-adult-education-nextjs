import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactPage } from '@/components/pages/contact-page'

export const metadata = {
  title: 'Contact Us - NYC Adult Education',
  description: 'Get in touch with NYC Adult Education. We\'re here to help you find the right program, answer questions, and support your educational journey.',
}

export default function ContactPageRoute() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
} 