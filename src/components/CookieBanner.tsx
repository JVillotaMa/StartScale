'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCookie, FaCog, FaTimes, FaInfoCircle } from 'react-icons/fa'
import { useCookies, CookieConsent } from '../contexts/CookieContext'

export default function CookieBanner() {
  const {  acceptNecessary, updateConsent, cookieConsent } = useCookies()
  const [showPreferences, setShowPreferences] = useState(false)
  const [showQuickPanel, setShowQuickPanel] = useState(false)
  const [tempConsent, setTempConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  })

  // Initialize consent with default values for first-time users
  useEffect(() => {
    if (!cookieConsent) {
      acceptNecessary() // Auto-accept only necessary cookies for new users
    }
  }, [cookieConsent, acceptNecessary])

  const handleSavePreferences = () => {
    updateConsent(tempConsent)
    setShowPreferences(false)
    setShowQuickPanel(false)
  }



  const getStatusText = () => {
    if (!cookieConsent) return 'Configurar cookies'
    
    const acceptedCount = Object.values(cookieConsent).filter(Boolean).length
    if (acceptedCount === 1) return 'Solo técnicas'
    if (acceptedCount === 2) return 'Parcialmente aceptadas'
    if (acceptedCount >= 3) return 'Todas aceptadas'
    return 'Configurar'
  }

  // Always show floating button (no banner anymore)
  return (
    <>
      {/* Floating Cookie Button */}
      <div className="fixed bottom-6 left-6 z-50">
          <div className="relative">
            <button
              onClick={() => setShowQuickPanel(!showQuickPanel)}
              className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer flex items-center justify-center border-2 border-white/20"
              title="Configurar cookies"
            >
              <FaCookie className="text-white text-xl" />
            </button>

            {/* Quick Status Panel */}
            <AnimatePresence>
              {showQuickPanel && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 p-4 w-72"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCookie className="text-green-600 text-lg" />
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">Estado de Cookies</h4>
                        <p className="text-xs text-gray-600">{getStatusText()}</p>
                      </div>
                    </div>

                    {/* Quick Status */}
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Técnicas (necesarias)</span>
                        <span className="text-green-600 font-medium">✓ Activas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Analíticas</span>
                        <span className={cookieConsent?.analytics ? "text-green-600 font-medium" : "text-gray-400"}>
                          {cookieConsent?.analytics ? "✓ Activas" : "✗ Inactivas"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Funcionales</span>
                        <span className={cookieConsent?.functional ? "text-green-600 font-medium" : "text-gray-400"}>
                          {cookieConsent?.functional ? "✓ Activas" : "✗ Inactivas"}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-3 space-y-2">
                      <button
                        onClick={() => {
                          setTempConsent(cookieConsent || {
                            necessary: true,
                            analytics: false,
                            functional: false,
                            marketing: false
                          })
                          setShowPreferences(true)
                          setShowQuickPanel(false)
                        }}
                        className="w-full text-left text-sm text-green-600 hover:text-green-700 font-medium hover:cursor-pointer flex items-center gap-2"
                      >
                        <FaCog className="text-xs" />
                        Mostrar detalles completos
                      </button>
                      <button
                        onClick={() => setShowQuickPanel(false)}
                        className="w-full text-left text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Full Cookie Preferences Modal */}
        <AnimatePresence>
          {showPreferences && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
              onClick={() => setShowPreferences(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <FaCog className="text-green-600 text-xl" />
                      <h3 className="font-bold text-slate-800 text-xl">Configuración de Cookies</h3>
                    </div>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors hover:cursor-pointer"
                    >
                      <FaTimes className="text-gray-400" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Necessary Cookies */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-800">Cookies Técnicas</h4>
                            <p className="text-green-600 text-xs">Siempre activas</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={true}
                          disabled={true}
                          className="w-4 h-4 text-green-600 bg-green-100 border-green-300 rounded focus:ring-green-500"
                        />
                      </div>
                      <p className="text-green-700 text-sm">
                        Necesarias para el funcionamiento básico del sitio web, seguridad y navegación.
                      </p>
                      <div className="mt-2 text-xs text-green-600">
                        <strong>Ejemplos:</strong> sesión, autenticación, preferencias básicas
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📊</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Cookies Analíticas</h4>
                            <p className="text-blue-600 text-xs">Opcional</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={tempConsent.analytics}
                          onChange={(e) => setTempConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                          className="w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <p className="text-blue-700 text-sm">
                        Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web para mejorarlo.
                      </p>
                      <div className="mt-2 text-xs text-blue-600">
                        <strong>Proveedor:</strong> Google Analytics • <strong>Duración:</strong> 2 años
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">🎯</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-800">Cookies Funcionales</h4>
                            <p className="text-purple-600 text-xs">Opcional</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={tempConsent.functional}
                          onChange={(e) => setTempConsent(prev => ({ ...prev, functional: e.target.checked }))}
                          className="w-4 h-4 text-purple-600 bg-white border-purple-300 rounded focus:ring-purple-500"
                        />
                      </div>
                      <p className="text-purple-700 text-sm">
                        Mejoran la funcionalidad y personalización, como recordar preferencias de usuario.
                      </p>
                      <div className="mt-2 text-xs text-purple-600">
                        <strong>Ejemplos:</strong> idioma, configuración de UI • <strong>Duración:</strong> 6 meses
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 opacity-60">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📢</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-700">Cookies de Marketing</h4>
                            <p className="text-gray-500 text-xs">No utilizadas</p>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={false}
                          disabled={true}
                          className="w-4 h-4 text-gray-400 bg-gray-100 border-gray-300 rounded"
                        />
                      </div>
                      <p className="text-gray-600 text-sm">
                        Actualmente no utilizamos cookies de marketing o publicidad comportamental.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        <strong>Estado:</strong> Deshabilitado por diseño
                      </div>
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <FaInfoCircle className="text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Información importante</h4>
                        <p className="text-yellow-700 text-sm">
                          Las cookies técnicas son esenciales y no pueden desactivarse. 
                          Deshabilitar otras cookies puede afectar la funcionalidad del sitio web.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setTempConsent({
                          necessary: true,
                          analytics: false,
                          functional: false,
                          marketing: false
                        })
                      }}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm hover:cursor-pointer"
                    >
                      Rechazar todas (excepto técnicas)
                    </button>
                    <button
                      onClick={() => {
                        setTempConsent({
                          necessary: true,
                          analytics: true,
                          functional: true,
                          marketing: false
                        })
                      }}
                      className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm hover:cursor-pointer"
                    >
                      Aceptar recomendadas
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all font-semibold text-sm shadow-lg hover:shadow-xl flex-1 sm:flex-none hover:cursor-pointer transform hover:scale-105"
                    >
                      Guardar preferencias
                    </button>
                  </div>

                  {/* Legal Links */}
                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <div className="flex justify-center gap-4 text-xs text-gray-500">
                      <a href="/politica-cookies" className="hover:text-green-600 underline hover:cursor-pointer">
                        Más sobre cookies
                      </a>
                      <a href="/politica-privacidad" className="hover:text-green-600 underline hover:cursor-pointer">
                        Política de privacidad
                      </a>
                      <a href="/aviso-legal" className="hover:text-green-600 underline hover:cursor-pointer">
                        Aviso legal
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
} 