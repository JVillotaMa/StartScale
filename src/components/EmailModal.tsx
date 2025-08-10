'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPaperPlane, FaTimes } from 'react-icons/fa'

interface EmailFormData {
  userEmail: string
  fullName: string
  projectName: string
  projectIdea: string
  problemSolved: string
  idealClient: string
  willTest: boolean
  acceptsPrivacyPolicy: boolean
  acceptsCommercialCommunications: boolean
}

interface EmailModalProps {
  show: boolean
  onClose: () => void
  emailSending: boolean
  emailSent: boolean
  emailFormData: EmailFormData
  onFormChange: (field: string, value: string | boolean) => void
  onSendEmail: () => void
}

export default function EmailModal({
  show,
  onClose,
  emailSending,
  emailSent,
  emailFormData,
  onFormChange,
  onSendEmail
}: EmailModalProps) {
  if (!show) return null

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-slate-800/80 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden relative border border-gray-200/50"
        onClick={(e) => e.stopPropagation()}
      >
        {emailSent ? (
          /* Beautiful Success State */
          <div className="p-12 text-center bg-gradient-to-br from-green-50 to-emerald-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-3">¡Email enviado con éxito!</h3>
              <p className="text-lg text-gray-600 mb-2">Tu solicitud de PMV ha sido enviada correctamente</p>
              <p className="text-gray-500">📧 hello@startscale.org</p>
              <p className="text-sm text-green-600 mt-4 font-medium">✅ Te responderemos en las próximas 24 horas</p>
            </motion.div>
            <button
              onClick={onClose}
              className="hover:cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Perfecto, cerrar
            </button>
          </div>
        ) : (
          /* Beautiful Gmail Interface */
          <div className="flex flex-col h-full max-h-[95vh]">
            {/* Elegant Gmail Header */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200/80 p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Solicitud PMV StartScale</h3>
                  <p className="text-sm text-gray-500">Redactar nuevo mensaje</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-110 hover:cursor-pointer"
              >
                <FaTimes className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>

            {/* Email Form - Optimized for no scroll */}
            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-slate-50/30">
              {/* Compact To/Subject Fields */}
              <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-medium text-sm w-12">Para:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="text-gray-800 font-medium text-sm">hello@startscale.org</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-medium text-sm w-12">De:</span>
                    <input
                      type="email"
                      placeholder="tu-email@ejemplo.com"
                      value={emailFormData.userEmail}
                      onChange={(e) => onFormChange('userEmail', e.target.value)}
                      className="flex-1 text-gray-800 bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400 focus:bg-white transition-all placeholder-gray-400 text-sm"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-medium text-sm w-16">Asunto:</span>
                    <span className="text-gray-800 font-mono bg-yellow-50 px-2 py-1 rounded text-xs border border-yellow-200">Peticición PMV 48horas</span>
                  </div>
                </div>
              </div>

              {/* Compact Email Body with Two Columns */}
              <div className="p-4 text-sm leading-relaxed">
                {/* Header Message */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
                  <p className="text-gray-800 mb-2">👋 <strong>Hola equipo de StartScale,</strong></p>
                  <p className="text-gray-700 text-sm">Me interesa solicitar un PMV gratuito de 48 horas. A continuación, proporciono la información solicitada:</p>
                </div>
                
                {/* Two Column Layout for Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">👤</span>
                        Nombre completo:
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={emailFormData.fullName}
                        onChange={(e) => onFormChange('fullName', e.target.value)}
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none bg-gray-50 px-3 py-2 rounded-lg transition-all placeholder-gray-400 text-sm"
                      />
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-xs">🚀</span>
                        Nombre del proyecto:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: MiApp, TuPlataforma, etc."
                        value={emailFormData.projectName}
                        onChange={(e) => onFormChange('projectName', e.target.value)}
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none bg-gray-50 px-3 py-2 rounded-lg transition-all placeholder-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center text-xs">💡</span>
                        Idea de proyecto (3 frases):
                      </label>
                      <textarea
                        placeholder="Ej: Una app que conecta estudiantes con tutores. Permite agendar sesiones y hacer pagos. Facilita el aprendizaje personalizado."
                        value={emailFormData.projectIdea}
                        onChange={(e) => onFormChange('projectIdea', e.target.value)}
                        rows={2}
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none bg-gray-50 p-3 rounded-lg resize-none transition-all placeholder-gray-400 text-sm"
                      />
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs">🎯</span>
                        Problema que resuelve:
                      </label>
                      <textarea
                        placeholder="Ej: Los estudiantes no encuentran tutores fácilmente..."
                        value={emailFormData.problemSolved}
                        onChange={(e) => onFormChange('problemSolved', e.target.value)}
                        rows={2}
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none bg-gray-50 p-3 rounded-lg resize-none transition-all placeholder-gray-400 text-sm"
                      />
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-xs">👥</span>
                        Cliente ideal:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Estudiantes universitarios 18-25 años"
                        value={emailFormData.idealClient}
                        onChange={(e) => onFormChange('idealClient', e.target.value)}
                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none bg-gray-50 px-3 py-2 rounded-lg transition-all placeholder-gray-400 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Commitment Section */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 rounded-lg p-4 shadow-sm mb-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailFormData.willTest}
                      onChange={(e) => onFormChange('willTest', e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500 focus:ring-1"
                    />
                    <div>
                      <span className="text-amber-800 font-semibold text-sm">
                        ✅ Compromiso importante
                      </span>
                      <p className="text-amber-700 mt-1 text-sm">
                        <strong>Confirmo que estoy dispuesto/a a probar el PMV y participar en una reunión de 15 minutos para dar feedback tras la entrega.</strong>
                      </p>
                    </div>
                  </label>
                </div>

                {/* Privacy and Data Protection Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 rounded-lg p-4 shadow-sm mb-4">
                  <h4 className="text-blue-900 font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">🔒</span>
                    Protección de Datos y Privacidad
                  </h4>
                  
                  {/* Mandatory Privacy Policy Acceptance */}
                  <label className="flex items-start gap-3 cursor-pointer mb-3">
                    <input
                      type="checkbox"
                      checked={emailFormData.acceptsPrivacyPolicy || false}
                      onChange={(e) => onFormChange('acceptsPrivacyPolicy', e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-1"
                      required
                    />
                    <div>
                      <p className="text-blue-800 text-sm">
                        <strong className="text-red-600">* Obligatorio:</strong> He leído y acepto la{' '}
                        <a 
                          href="/politica-privacidad" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800 font-medium hover:cursor-pointer"
                        >
                          Política de Privacidad
                        </a>{' '}
                        y autorizo el tratamiento de mis datos personales para el procesamiento de mi solicitud de PMV.
                      </p>
                    </div>
                  </label>

                  {/* Optional Commercial Communications */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailFormData.acceptsCommercialCommunications || false}
                      onChange={(e) => onFormChange('acceptsCommercialCommunications', e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 bg-white border-blue-300 rounded focus:ring-blue-500 focus:ring-1"
                    />
                    <div>
                      <p className="text-blue-700 text-sm">
                        <strong>Opcional:</strong> Deseo recibir comunicaciones comerciales, newsletter y promociones de StartScale por email.
                      </p>
                      <p className="text-blue-600 text-xs mt-1">
                        Puedes darte de baja en cualquier momento enviando un email a hello@startscale.org
                      </p>
                    </div>
                  </label>
                </div>

                {/* Legal Information Notice */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
                  <p className="text-gray-700 text-xs leading-relaxed">
                    <strong>Información adicional:</strong> Consulta nuestro{' '}
                    <a href="/aviso-legal" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 hover:cursor-pointer">
                      Aviso Legal
                    </a>{' '}
                    y{' '}
                    <a href="/politica-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 hover:cursor-pointer">
                      Política de Cookies
                    </a>
                    . Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad enviando un email a hello@startscale.org.
                  </p>
                </div>

                {/* Footer Message */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-800 mb-1 text-sm">Gracias por la oportunidad de trabajar juntos.</p>
                  <p className="text-gray-700 text-sm">Quedo atento/a a su respuesta.</p>
                  <p className="text-gray-800 mt-2 text-sm">Saludos cordiales,</p>
                  <p className="text-blue-600 font-medium text-sm">{emailFormData.fullName || '[Tu nombre]'}</p>
                </div>
              </div>
            </div>

            {/* Beautiful Gmail Footer */}
            <div className="border-t border-gray-200 p-4 bg-gradient-to-r from-slate-50 to-gray-50 flex items-center justify-between">
              <button
                onClick={onSendEmail}
                disabled={emailSending || !emailFormData.userEmail || !emailFormData.fullName || !emailFormData.projectName || !emailFormData.willTest || !emailFormData.acceptsPrivacyPolicy}
                className="hover:cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
              >
                {emailSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    Enviar Solicitud
                  </>
                )}
              </button>
              <div className="hover:cursor-pointer text-sm text-gray-500 bg-white px-3 py-2 rounded-lg border border-gray-200">
                {!emailFormData.userEmail || !emailFormData.fullName || !emailFormData.projectName || !emailFormData.willTest || !emailFormData.acceptsPrivacyPolicy
                  ? '⚠️ Completa campos y acepta política de privacidad' 
                  : '✅ Listo para enviar'
                }
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
} 