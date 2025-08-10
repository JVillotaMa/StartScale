'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import TestimonialsCarousel from './TestimonialsCarousel'
import { useLanguage } from '../contexts/LanguageContext'

interface TestimonialsSectionProps {
  openContactOptions: () => void
}

export default function TestimonialsSection({ openContactOptions }: TestimonialsSectionProps) {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-green-50">
      <div className="w-[85%] mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('testimonials.title').includes('opinión') ? (
              <>La opinión de nuestros <span className="text-green-600">clientes</span></>
            ) : (
              <>Our <span className="text-green-600">clients&apos;</span> opinion</>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <TestimonialsCarousel openContactOptions={openContactOptions} />

        {/* Call to action adicional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('testimonials.ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('testimonials.ctaDescription')}
            </p>
            <button
              onClick={openContactOptions}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center gap-3 mx-auto hover:cursor-pointer"
            >
              {t('testimonials.ctaButton')}
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 