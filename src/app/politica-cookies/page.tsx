import Link from "next/link";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🍪</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">Política de Cookies</h1>
              <p className="text-gray-600">Gestión transparente de cookies y privacidad</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-600 to-green-600 rounded-lg p-4 text-white">
            <p className="text-green-100">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <p className="text-blue-800 mb-3">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, móvil) 
                cuando visitas un sitio web. Se utilizan para recordar información sobre tu visita, como tu idioma preferido 
                y otras configuraciones.
              </p>
              <p className="text-blue-700 text-sm">
                Las cookies pueden mejorar tu experiencia de navegación haciendo que el sitio web sea más fácil de usar 
                y adaptado a tus intereses y necesidades.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. ¿Qué cookies utiliza StartScale?</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Cookies técnicas (necesarias)
                </h3>
                <p className="text-green-700 text-sm mb-3">
                  Estas cookies son esenciales para el funcionamiento básico del sitio web y <strong>no requieren tu consentimiento</strong>.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-green-200 rounded">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="p-2 text-left">Cookie</th>
                        <th className="p-2 text-left">Finalidad</th>
                        <th className="p-2 text-left">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-t border-green-200">
                        <td className="p-2 font-mono">session_id</td>
                        <td className="p-2">Mantener la sesión del usuario</td>
                        <td className="p-2">Sesión</td>
                      </tr>
                      <tr className="border-t border-green-200">
                        <td className="p-2 font-mono">cookie_consent</td>
                        <td className="p-2">Recordar preferencias de cookies</td>
                        <td className="p-2">1 año</td>
                      </tr>
                      <tr className="border-t border-green-200">
                        <td className="p-2 font-mono">security_token</td>
                        <td className="p-2">Protección contra ataques CSRF</td>
                        <td className="p-2">Sesión</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs">📊</span>
                  Cookies analíticas (opcionales)
                </h3>
                <p className="text-yellow-700 text-sm mb-3">
                  Estas cookies nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web. 
                  <strong>Requieren tu consentimiento explícito</strong>.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-yellow-200 rounded">
                    <thead className="bg-yellow-100">
                      <tr>
                        <th className="p-2 text-left">Cookie</th>
                        <th className="p-2 text-left">Proveedor</th>
                        <th className="p-2 text-left">Finalidad</th>
                        <th className="p-2 text-left">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-t border-yellow-200">
                        <td className="p-2 font-mono">_ga</td>
                        <td className="p-2">Google Analytics</td>
                        <td className="p-2">Distinguir usuarios únicos</td>
                        <td className="p-2">2 años</td>
                      </tr>
                      <tr className="border-t border-yellow-200">
                        <td className="p-2 font-mono">_ga_*</td>
                        <td className="p-2">Google Analytics</td>
                        <td className="p-2">Persistir estado de sesión</td>
                        <td className="p-2">2 años</td>
                      </tr>
                      <tr className="border-t border-yellow-200">
                        <td className="p-2 font-mono">_gid</td>
                        <td className="p-2">Google Analytics</td>
                        <td className="p-2">Distinguir usuarios únicos</td>
                        <td className="p-2">24 horas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">🎯</span>
                  Cookies funcionales (opcionales)
                </h3>
                <p className="text-purple-700 text-sm mb-3">
                  Mejoran la funcionalidad del sitio web y permiten recordar tus preferencias.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-purple-200 rounded">
                    <thead className="bg-purple-100">
                      <tr>
                        <th className="p-2 text-left">Cookie</th>
                        <th className="p-2 text-left">Finalidad</th>
                        <th className="p-2 text-left">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-t border-purple-200">
                        <td className="p-2 font-mono">user_preferences</td>
                        <td className="p-2">Recordar configuración de usuario</td>
                        <td className="p-2">6 meses</td>
                      </tr>
                      <tr className="border-t border-purple-200">
                        <td className="p-2 font-mono">form_data</td>
                        <td className="p-2">Recordar datos de formularios</td>
                        <td className="p-2">30 días</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">🚫</span>
                  Cookies que NO utilizamos
                </h3>
                <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                  <li>Cookies de publicidad comportamental</li>
                  <li>Cookies de redes sociales (excepto si compartes contenido)</li>
                  <li>Cookies de seguimiento entre sitios web</li>
                  <li>Cookies para crear perfiles de usuario con fines comerciales</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Base legal para el uso de cookies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Cookies técnicas</h3>
                <p className="text-green-700 text-sm">
                  <strong>Base legal:</strong> Interés legítimo<br/>
                  <strong>Justificación:</strong> Necesarias para el funcionamiento básico del sitio web
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Cookies analíticas y funcionales</h3>
                <p className="text-blue-700 text-sm">
                  <strong>Base legal:</strong> Consentimiento<br/>
                  <strong>Justificación:</strong> Mejora de la experiencia del usuario
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></span>
              4. ¿Cómo gestionar las cookies?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">🎛️ Panel de control de cookies</h3>
                <p className="text-blue-800 mb-4">
                  Puedes gestionar tus preferencias de cookies en cualquier momento:
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  Configurar cookies
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-4">🌐 Configuración del navegador</h3>
                <p className="text-gray-700 mb-4">
                  También puedes gestionar las cookies directamente desde tu navegador:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                    <p className="text-gray-600 text-sm mb-2">Configuración → Privacidad y seguridad → Cookies</p>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline hover:cursor-pointer">
                      Más información →
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                    <p className="text-gray-600 text-sm mb-2">Preferencias → Privacidad y seguridad</p>
                    <a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline hover:cursor-pointer">
                      Más información →
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                    <p className="text-gray-600 text-sm mb-2">Preferencias → Privacidad</p>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline hover:cursor-pointer">
                      Más información →
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                    <p className="text-gray-600 text-sm mb-2">Configuración → Cookies y permisos del sitio</p>
                    <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline hover:cursor-pointer">
                      Más información →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Consecuencias de deshabilitar las cookies</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Cookies técnicas</h3>
                <p className="text-yellow-700 text-sm">
                  Si deshabilitas las cookies técnicas, es posible que no puedas utilizar todas las funcionalidades 
                  del sitio web correctamente (formularios, navegación, seguridad).
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📊 Cookies analíticas</h3>
                <p className="text-blue-700 text-sm">
                  Si deshabilitas las cookies analíticas, no podremos medir el rendimiento del sitio web 
                  ni mejorarlo basándonos en el comportamiento de los usuarios.
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🎯 Cookies funcionales</h3>
                <p className="text-purple-700 text-sm">
                  Si deshabilitas las cookies funcionales, el sitio web no recordará tus preferencias 
                  y tendrás que configurarlas en cada visita.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Transferencias internacionales</h2>
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <p className="text-orange-800 text-sm mb-3">
                Algunas de las cookies que utilizamos pueden implicar transferencias de datos a países fuera del 
                Espacio Económico Europeo, específicamente:
              </p>
              <ul className="list-disc list-inside space-y-1 text-orange-700 text-sm">
                <li><strong>Google Analytics:</strong> Los datos pueden transferirse a Estados Unidos bajo las garantías de Google</li>
                <li><strong>EmailJS:</strong> Transferencias con garantías adecuadas de protección</li>
              </ul>
              <p className="text-orange-700 text-sm mt-3">
                Estas transferencias se realizan con las garantías apropiadas para proteger tu privacidad.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Actualizaciones de la política</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm mb-2">
                Esta Política de Cookies puede actualizarse periódicamente. Te notificaremos cualquier cambio 
                significativo a través del banner de cookies o mediante comunicación directa.
              </p>
              <p className="text-gray-600 text-xs">
                <strong>Última revisión:</strong> {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">¿Tienes dudas sobre las cookies?</h3>
              <p className="text-blue-800 mb-2">
                Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos:
              </p>
              <div className="space-y-1">
                <p className="text-blue-900 font-semibold">📧 hello@startscale.org</p>
                <p className="text-blue-700 text-sm">📄 También puedes consultar nuestra <a href="/politica-privacidad" className="underline hover:text-blue-900 hover:cursor-pointer">Política de Privacidad</a></p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer transform hover:scale-105"
          >
            ← Volver a StartScale
          </Link>
        </div>
      </div>
    </div>
  )
} 