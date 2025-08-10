'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

interface PolicyLayoutProps {
  type: 'privacy' | 'legal' | 'cookies'
  children: React.ReactNode
}

export default function PolicyLayout({ type, children }: PolicyLayoutProps) {
  const { t } = useLanguage()
  
  const getTitleKey = () => {
    switch (type) {
      case 'privacy': return 'policies.privacyTitle'
      case 'legal': return 'policies.legalTitle'
      case 'cookies': return 'policies.cookiesTitle'
    }
  }
  
  const getSubtitleKey = () => {
    switch (type) {
      case 'privacy': return 'policies.privacySubtitle'
      case 'legal': return 'policies.legalSubtitle'
      case 'cookies': return 'policies.cookiesSubtitle'
    }
  }
  
  const getIcon = () => {
    switch (type) {
      case 'privacy': return '🔒'
      case 'legal': return '⚖️'
      case 'cookies': return '🍪'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
          >
            ← {t('policies.backToHome')}
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">{getIcon()}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">{t(getTitleKey())}</h1>
              <p className="text-gray-600">{t(getSubtitleKey())}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-600 to-green-600 rounded-lg p-4 text-white">
            <p className="text-green-100">
              {t('policies.lastUpdated')} {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          {children}
        </div>
      </div>
    </div>
  )
} 