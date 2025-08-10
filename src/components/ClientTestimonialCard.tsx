'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import TestimonialModal from './TestimonialModal'
import Image from 'next/image'

interface ClientTestimonialCardProps {
  title: string
  screenshot: string
  clientTestimonial: string
  fullDescription: string
  clientName: string
  projectType: string
  results: string[]
  rating: number
  delay?: number
  onModalOpen?: () => void
  onModalClose?: () => void
  openContactOptions: () => void
}

export default function ClientTestimonialCard({
  title,
  screenshot,
  clientTestimonial,
  fullDescription,
  clientName,
  projectType,
  results,
  rating,
  delay = 0,
  onModalOpen,
  onModalClose,
  openContactOptions
}: ClientTestimonialCardProps) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
    onModalOpen?.()
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    onModalClose?.()
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="p-3 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        onClick={openModal}
      >
        {/* Project Title */}
        <div className="p-2 pb-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-green-600 font-medium">{clientName}</p>
        </div>

        {/* Screenshot Container - Landscape format */}
        <div className="relative px-2 pb-1">
          <div className="relative aspect-[16/7] bg-gray-100 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={screenshot}
              alt={`Screenshot de ${title}`}
              className="w-full h-full object-cover object-top"
              width={1600}
              height={900}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="px-2 pb-1">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 ${
                  index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({rating}/5)</span>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="px- pb-2">
          <p className="text-gray-700 leading-relaxed mb-2 italic text-base line-clamp-3 pt-3 ">
            &quot;{clientTestimonial}&quot; 
          </p>
          
          {/* Project Type */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-1.5 mb-2 mt-5">
            <p className="text-xs text-green-700 font-medium">{projectType}</p>
          </div>

          {/* Click indicator */}
          <div className="flex items-center text-green-600 text-xs font-medium group-hover:text-green-700 transition-colors">
            <span>Ver caso completo</span>
            <svg className="w-2.5 h-2.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <TestimonialModal
          title={title}
          screenshot={screenshot}
          fullDescription={fullDescription}
          clientName={clientName}
          projectType={projectType}
          results={results}
          rating={rating}
          onClose={closeModal}
          openContactOptions={openContactOptions}
        />
      )}
    </>
  )
} 