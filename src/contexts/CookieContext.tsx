'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Google Analytics gtag types
interface GtagConsentParams {
  analytics_storage: 'granted' | 'denied'
  ad_storage?: 'granted' | 'denied'
}

interface WindowWithGtag extends Window {
  gtag?: (
    command: 'consent',
    action: 'update',
    params: GtagConsentParams
  ) => void
}

declare const window: WindowWithGtag

export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

interface CookieContextType {
  cookieConsent: CookieConsent | null
  showBanner: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  updateConsent: (consent: CookieConsent) => void
  showPreferences: () => void
  hideBanner: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const COOKIE_CONSENT_KEY = 'startscale_cookie_consent'
const COOKIE_BANNER_KEY = 'startscale_banner_shown'

export function CookieProvider({ children }: { children: ReactNode }) {
  const [cookieConsent, setCookieConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  // Load existing consent from localStorage
  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    const bannerShown = localStorage.getItem(COOKIE_BANNER_KEY)
    
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent)
        setCookieConsent(consent)
        setShowBanner(false)
      } catch (error) {
        console.error('Error parsing saved cookie consent:', error)
        setShowBanner(true)
      }
    } else if (!bannerShown) {
      setShowBanner(true)
    }
  }, [])

  // Set cookies based on consent
  useEffect(() => {
    if (cookieConsent) {
      // Always allow necessary cookies
      if (cookieConsent.necessary) {
        document.cookie = 'necessary=true; path=/; secure; samesite=strict; max-age=31536000'
      }

      // Analytics cookies (Google Analytics)
      if (cookieConsent.analytics) {
        // Enable Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted'
          })
        }
        document.cookie = 'analytics=true; path=/; secure; samesite=strict; max-age=63072000' // 2 years
      } else {
        // Disable Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'denied'
          })
        }
        // Remove analytics cookies
        document.cookie = 'analytics=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        document.cookie = '_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        document.cookie = '_ga_*=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        document.cookie = '_gid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }

      // Functional cookies
      if (cookieConsent.functional) {
        document.cookie = 'functional=true; path=/; secure; samesite=strict; max-age=15552000' // 6 months
      } else {
        document.cookie = 'functional=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        document.cookie = 'user_preferences=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        document.cookie = 'form_data=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }

      // Marketing cookies (currently not used, but prepared for future)
      if (cookieConsent.marketing) {
        document.cookie = 'marketing=true; path=/; secure; samesite=strict; max-age=31536000'
      } else {
        document.cookie = 'marketing=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    }
  }, [cookieConsent])

  const acceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: false // We don't use marketing cookies yet
    }
    setCookieConsent(consent)
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
    localStorage.setItem(COOKIE_BANNER_KEY, 'true')
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    setCookieConsent(consent)
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
    localStorage.setItem(COOKIE_BANNER_KEY, 'true')
    setShowBanner(false)
  }

  const updateConsent = (consent: CookieConsent) => {
    // Always ensure necessary cookies are enabled
    const finalConsent = { ...consent, necessary: true }
    setCookieConsent(finalConsent)
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(finalConsent))
    localStorage.setItem(COOKIE_BANNER_KEY, 'true')
    setShowBanner(false)
  }

  const showPreferences = () => {
    setShowBanner(true)
  }

  const hideBanner = () => {
    setShowBanner(false)
    localStorage.setItem(COOKIE_BANNER_KEY, 'true')
  }

  return (
    <CookieContext.Provider
      value={{
        cookieConsent,
        showBanner,
        acceptAll,
        acceptNecessary,
        updateConsent,
        showPreferences,
        hideBanner
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider')
  }
  return context
} 