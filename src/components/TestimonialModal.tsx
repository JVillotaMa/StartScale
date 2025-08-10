'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface TestimonialModalProps {
  title: string
  screenshot: string
  fullDescription: string
  clientName: string
  projectType: string
  results: string[]
  rating: number
  onClose: () => void
  openContactOptions: () => void
}

export default function TestimonialModal({
  title,
  screenshot,
  fullDescription,
  clientName,
  projectType,
  results,
  rating,
  onClose,
  openContactOptions
}: TestimonialModalProps) {
  const [imageError, setImageError] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const modalContent = (
    <div
      className="fixed inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-2 sm:p-4"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-gradient-to-br from-white via-green-50/80 to-emerald-50/90 rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-4xl w-full max-h-[90vh] sm:max-h-[90vh] overflow-hidden relative border border-green-200/50 backdrop-blur-sm mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/20 to-emerald-400/20 rounded-full blur-2xl"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white p-3 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-2xl sm:rounded-t-3xl"></div>
          <div className="relative z-0 pr-12 sm:pr-16">
            <h3 className="text-lg sm:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-sm line-clamp-2">{title}</h3>
            <p className="text-green-100 text-sm sm:text-lg mb-2">Cliente: <span className="font-semibold">{clientName}</span></p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 sm:w-7 sm:h-7 ${index < rating ? 'text-yellow-300' : 'text-white/30'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-green-100 ml-2 text-xs sm:text-base">({rating}/5)</span>
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm font-medium">{projectType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 max-h-[55vh] sm:max-h-[65vh] overflow-y-auto pb-6">
          <div className="space-y-4 sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-6 sm:space-y-0">
            {/* Screenshot */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-inner border border-green-100">
                <div className="aspect-[16/10] bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden relative">
                  {!imageError ? (
                    <Image
                      src={screenshot}
                      alt={`Screenshot de ${title}`}
                      className="w-full h-full object-cover object-top"
                      width={1600}
                      height={900}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                      <div className="text-center">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs sm:text-sm">Imagen no disponible</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Call to action */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-white mt-2 sm:mt-4">
                <h5 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">¿Tu próximo proyecto?</h5>
                <p className="text-green-100 text-xs sm:text-sm mb-2 sm:mb-3 leading-tight">
                  Conseguir resultados similares con tu PMV
                </p>
                <button onClick={() => {
                  onClose()
                  openContactOptions()
                }} 
                className="bg-white text-green-600 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-green-50 transition-colors text-xs sm:text-sm hover:cursor-pointer w-full sm:w-auto">
                  Contactar ahora
                </button>
              </div>
            </div>


            {/* Description and Results */}
            <div className="order-1 lg:order-2 space-y-3 sm:space-y-6">
              {/* Full Description */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Descripción</h4>
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                    {fullDescription}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Resultados</h4>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-200">
                  <ul className="space-y-2 sm:space-y-3">
                    {results.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="bg-green-500 rounded-full p-1 mt-0.5 sm:mt-1 flex-shrink-0">
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{result}</span>
                      </li>
                    ))}
                    {results.length > 3 && (
                      <li className="text-gray-500 text-xs sm:text-sm italic sm:hidden">
                        +{results.length - 3} resultados más...
                      </li>
                    )}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  // Only render on client side and use portal to render outside carousel
  if (typeof window === 'undefined') return null

  return createPortal(modalContent, document.body)
} 