'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface TypeformModalProps {
  show: boolean
  onClose: () => void
}

export default function TypeformModal({ show, onClose }: TypeformModalProps) {
  const { t, language } = useLanguage()
  
  // Use different Typeform URLs based on language
  const typeformUrl = language === 'es' 
    ? 'https://form.typeform.com/to/wUpIc9sC' 
    : 'https://form.typeform.com/to/ii5QEQfi#source=xxxxx'
  
  if (!show) return null

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-1 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-gradient-to-br from-white via-green-50/80 to-emerald-50/90 rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative border border-green-200/50 backdrop-blur-sm mx-2 sm:mx-4"
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
          <svg className="w-5 h-5 sm:w-5 sm:h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/20 to-emerald-400/20 rounded-full blur-2xl"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white p-4 sm:p-8 rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-3xl"></div>
          <div className="relative z-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-sm">{t('typeformModal.title')}</h3>
            <p className="text-green-100 text-base sm:text-lg">{t('typeformModal.subtitle')}</p>
            <div className="mt-4 flex items-center gap-2 text-green-200">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Typeform with beautiful frame */}
        <div className="p-3 sm:p-6">
          <div className="bg-white rounded-2xl shadow-inner border border-green-100 overflow-hidden h-[75vh] sm:h-[70vh] md:h-[65vh]">
            <iframe 
              src={typeformUrl}
              width="100%" 
              height="100%"
              frameBorder="0"
              title={language === 'es' ? 'Solicitud PMV StartScale' : 'StartScale MVP Request'}
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 