'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

// Type for translation parameters
type TranslationParams = Record<string, string | number>

// Type for nested translation messages
type TranslationMessages = {
  [key: string]: string | TranslationMessages
}

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, params?: TranslationParams) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [messages, setMessages] = useState<TranslationMessages>({})

  // Detect browser language on initial load
  useEffect(() => {
    const detectLanguage = (): Language => {
      if (typeof window !== 'undefined') {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
          return savedLanguage
        }

        const browserLanguage = navigator.language.toLowerCase()
        if (browserLanguage.startsWith('en')) {
          return 'en'
        }
        return 'es' // Default to Spanish
      }
      return 'es'
    }

    const detectedLanguage = detectLanguage()
    setLanguageState(detectedLanguage)
  }, [])

  // Load messages when language changes
  useEffect(() => {
    const loadMessages = async () => {
      try {
        let messagesData
        if (language === 'es') {
          messagesData = await import('../messages/es.json')
        } else {
          messagesData = await import('../messages/en.json')
        }
        
        console.log('Loading messages for language:', language, messagesData.default)
        setMessages(messagesData.default || {})
      } catch (error) {
        console.error('Error loading messages for language:', language, error)
        // Fallback to empty object to prevent crashes
        setMessages({})
      }
    }

    if (language) {
      loadMessages()
    }
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage)
    }
  }

  // Translation function
  const t = (key: string, params?: TranslationParams): string => {
    const keys = key.split('.')
    let value: string | TranslationMessages | undefined = messages
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        value = (value as TranslationMessages)[k]
      } else {
        value = undefined
        break
      }
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found for language "${language}"`)
      return key
    }

    // Replace parameters in the string
    if (params) {
      let result = value
      Object.keys(params).forEach(paramKey => {
        const regex = new RegExp(`\\{${paramKey}\\}`, 'g')
        result = result.replace(regex, String(params[paramKey]))
      })
      return result
    }

    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 