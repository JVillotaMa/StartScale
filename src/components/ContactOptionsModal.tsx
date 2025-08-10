'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaWpforms, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

interface ContactOptionsModalProps {
  show: boolean
  onClose: () => void
  onCalendlyClick: () => void
  onFormClick: () => void
  onEmailClick: () => void
}

export default function ContactOptionsModal({
  show,
  onClose,
  onCalendlyClick,
  onFormClick,
  onEmailClick
}: ContactOptionsModalProps) {
  const { t } = useLanguage()
  
  if (!show) return null

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-gradient-to-br from-white via-green-50/80 to-emerald-50/90 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative border border-green-200/50 backdrop-blur-sm mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-6 right-6 z-50 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 hover:cursor-pointer"
        >
          <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white p-4 sm:p-8 rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-3xl"></div>
          <div className="relative z-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-sm">💬 {t('contactModal.title')}</h3>
            <p className="text-green-100 text-base sm:text-lg">{t('contactModal.subtitle')}</p>
          </div>
        </div>

        {/* Options */}
        <div className="p-4 sm:p-8">
          <div className="grid gap-6">
            {/* Calendly Option */}
            <button
              onClick={onCalendlyClick}
              className="hover:cursor-pointer group bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-300 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <FaCalendarAlt className="text-xl sm:text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{t('contactModal.calendlyTitle')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('contactModal.calendlyDescription')}</p>
                  <p className="text-blue-600 font-medium mt-2 text-sm sm:text-base">{t('contactModal.calendlyBenefit')}</p>
                </div>
              </div>
            </button>

            {/* Typeform Option */}
            <button
              onClick={onFormClick}
              className="hover:cursor-pointer group bg-gradient-to-r from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 border-2 border-green-200 hover:border-green-300 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <FaWpforms className="text-xl sm:text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{t('contactModal.typeformTitle')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('contactModal.typeformDescription')}</p>
                  <p className="text-green-600 font-medium mt-2 text-sm sm:text-base">{t('contactModal.typeformBenefit')}</p>
                </div>
              </div>
            </button>

            {/* Email Option */}
            <button
              onClick={onEmailClick}
              className="hover:cursor-pointer group bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 border-2 border-red-200 hover:border-red-300 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-500 rounded-xl p-3 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-xl sm:text-2xl text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{t('contactModal.emailTitle')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('contactModal.emailDescription')}</p>
                  <p className="text-red-600 font-medium mt-2 text-sm sm:text-base">{t('contactModal.emailBenefit')}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 