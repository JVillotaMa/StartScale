'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

interface CTASectionProps {
  onContactClick: () => void
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('cta.title').includes('validar') ? (
              <>¿Tienes una idea que quieres <span className="text-green-600">validar</span>?</>
            ) : (
              <>Have an idea you want to <span className="text-green-600">validate</span>?</>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t('cta.description')}
          </p>
          <button
            onClick={onContactClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center gap-3 mx-auto hover:cursor-pointer"
          >
            {t('cta.buttonText')}
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 