'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg"
      >
        <div className="flex gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code as 'es' | 'en')}
              className={`
                relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${language === lang.code
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
              title={lang.name}
            >
              <span className="text-lg">{lang.flag}</span>
              {language === lang.code && (
                <motion.div
                  layoutId="languageBackground"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 