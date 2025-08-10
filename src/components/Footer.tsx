'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 ">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">StartScale</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>hello@startscale.org</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <a 
              href="/politica-privacidad" 
              className="text-gray-300 hover:text-white transition-colors hover:underline hover:cursor-pointer"
            >
              {t('footer.privacyPolicy')}
            </a>
            <span className="text-gray-500">•</span>
            <a 
              href="/aviso-legal" 
              className="text-gray-300 hover:text-white transition-colors hover:underline hover:cursor-pointer"
            >
              {t('footer.legalNotice')}
            </a>
            <span className="text-gray-500">•</span>
            <a 
              href="/politica-cookies" 
              className="text-gray-300 hover:text-white transition-colors hover:underline hover:cursor-pointer"
            >
              {t('footer.cookiePolicy')}
            </a>
            
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>{t('footer.rights')}</p>
            <p className="text-xs mt-2 text-gray-500">
              {t('footer.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 