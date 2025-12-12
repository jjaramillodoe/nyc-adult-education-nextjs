'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { SectionTitle } from '@/components/ui/section-title'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      src: '/images/gallery1.jpg',
      alt: 'Adult Education Classroom',
      caption: 'Students in an Adult Basic Education classroom'
    },
    {
      src: '/images/gallery2.jpg',
      alt: 'Career Training Session',
      caption: 'Career and Technical Education hands-on training'
    },
    {
      src: '/images/gallery3.jpg',
      alt: 'ESOL Language Learning',
      caption: 'English for Speakers of Other Languages class'
    },
    {
      src: '/images/gallery4.jpg',
      alt: 'HSE Preparation',
      caption: 'High School Equivalency preparation session'
    },
    {
      src: '/images/gallery5.jpg',
      alt: 'Graduation Celebration',
      caption: 'Students celebrating their achievements'
    }
  ]

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length].src)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    setSelectedImage(galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length].src)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Gallery"
            subtitle="Visual Journey"
            description="See our students in action and explore our vibrant learning environments"
            icon={<Camera className="w-8 h-8" />}
          />

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => openModal(image.src, index)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 rounded-full p-2">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Captions */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image */}
                <div className="relative">
                  <Image
                    src={selectedImage}
                    alt={galleryImages[currentIndex].alt}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-white text-lg">{galleryImages[currentIndex].caption}</p>
                  <p className="text-gray-300 text-sm mt-1">
                    {currentIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
