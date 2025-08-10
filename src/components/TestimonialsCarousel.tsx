'use client'

import { useState, useEffect } from 'react'
import { motion, } from 'framer-motion'
import ClientTestimonialCard from './ClientTestimonialCard'
import testimonials from '../../public/testimonials/testimonials'


interface TestimonialsCarouselProps {
  openContactOptions: () => void
}

export default function TestimonialsCarousel({ openContactOptions }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(3)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Check if carousel should move (only if we have more testimonials than items to show)
  const shouldMove = testimonials.length > itemsToShow
  
  // Check screen size on mount
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        let newItemsToShow = 3
        if (window.innerWidth < 640) newItemsToShow = 1 // mobile
        else if (window.innerWidth < 768) newItemsToShow = 2 // small tablet
        else newItemsToShow = 3 // tablet and desktop - always 3
        
        if (itemsToShow !== newItemsToShow) {
          setItemsToShow(newItemsToShow)
          setCurrentIndex(0) // Reset index when switching modes
        }
      }
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [itemsToShow])

  // Auto-scroll effect - infinite loop to the right (pauses when modal is open or carousel shouldn't move)
  useEffect(() => {
    if (isModalOpen || !shouldMove) return // Don't start interval if modal is open or carousel shouldn't move
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1
        // Reset to 0 when we complete one full cycle through original testimonials
        if (nextIndex >= testimonials.length) {
          return 0
        }
        return nextIndex
      })
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [itemsToShow, isModalOpen, shouldMove])

  // Create infinite loop by duplicating testimonials only if needed
  const infiniteTestimonials = shouldMove ? [...testimonials, ...testimonials] : testimonials
  const maxIndex = testimonials.length

  return (
    <div className="relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/95 via-green-50/90 to-emerald-100/95 rounded-3xl -z-10"></div>
      <div className="absolute top-4 left-4 md:left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-200/30 to-green-300/35 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 md:right-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-green-200/30 to-emerald-300/35 rounded-full blur-2xl"></div>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl py-4">
        
        <motion.div
          className="flex gap-1"
          animate={{ 
            x: shouldMove ? `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * 2}px)` : '0%'
          }}
          transition={{ 
            type: "tween",
            duration: shouldMove ? 0.8 : 0,
            ease: "easeInOut"
          }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.title}-${index}`}
              className="flex-shrink-0"
              style={{ 
                width: itemsToShow === 1 
                  ? '100%' 
                  : itemsToShow === 2 
                    ? 'calc(50% - 2px)' 
                    : 'calc(33.333% - 2px)'
              }}
            >
              <ClientTestimonialCard
                title={testimonial.title}
                clientName={testimonial.clientName}
                screenshot={testimonial.screenshot}
                clientTestimonial={testimonial.clientTestimonial}
                fullDescription={testimonial.fullDescription}
                projectType={testimonial.projectType}
                rating={testimonial.rating}
                results={testimonial.results}
                delay={0}
                onModalOpen={() => setIsModalOpen(true)}
                onModalClose={() => setIsModalOpen(false)}
                openContactOptions={openContactOptions}
              />
            </div>
          ))}
        </motion.div>
      </div>



      {/* Dots Indicator - Only show if carousel should move */}
      {shouldMove && (
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === (currentIndex % maxIndex)
                  ? 'w-3 h-3 bg-emerald-600'
                  : 'w-2 h-2 bg-emerald-300 hover:bg-emerald-400'
              }`}
            />
          ))}
        </div>
      )}


    </div>
  )
} 