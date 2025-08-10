'use client'

import { FaCookie, FaCog } from 'react-icons/fa'
import { useCookies } from '../contexts/CookieContext'
import { useLanguage } from '@/contexts/LanguageContext'

interface CookieSettingsProps {
  className?: string
  variant?: 'button' | 'link' | 'floating'
}

export default function CookieSettings({ 
  className = '', 
  variant = 'button' 
}: CookieSettingsProps) {
  const { showPreferences, cookieConsent } = useCookies()
  const { t } = useLanguage() 
  const baseStyles = "transition-all duration-300 flex items-center gap-2"
  
  const variantStyles = {
    button: "bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg border border-gray-300",
    link: "text-green-600 hover:text-green-800 hover:underline",
    floating: "fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl z-40"
  }

  const handleClick = () => {
    showPreferences()
  }

  const getStatusIcon = () => {
    if (!cookieConsent) return '⚠️'
    
    const acceptedCount = Object.values(cookieConsent).filter(Boolean).length
    if (acceptedCount === 1) return '🔒' // Only necessary
    if (acceptedCount === 2) return '⚖️' // Basic consent
    if (acceptedCount >= 3) return '✅' // Full consent
    return '❓'
  }

  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        title={t('footer.changeCookieSettings')}
        aria-label="Configurar preferencias de cookies"
      >
        <FaCookie className="text-lg" />
        <span className="sr-only">Configurar cookies</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label="Configurar preferencias de cookies"
    >
      {variant === 'link' ? (
        <>
          <span className="text-sm">{getStatusIcon()}</span>
          <span>{t('footer.changeCookieSettings')}</span>
        </>
      ) : (
        <>
          <FaCog className="text-sm" />
          <span className="text-sm">{t('footer.cookies')}</span>
          <span className="text-xs">{getStatusIcon()}</span>
        </>
      )}
    </button>
  )
} 