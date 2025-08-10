'use client'

import PolicyLayout from '../../components/PolicyLayout'
import { useLanguage } from '../../contexts/LanguageContext'

export default function PoliticaPrivacidad() {
  const { language } = useLanguage()

  if (language === 'en') {
    return (
      <PolicyLayout type="privacy">
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></span>
            1. Data Controller
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
            <p><strong>Controller:</strong> StartScale</p>
            <p><strong>Contact email:</strong> hello@startscale.org</p>
            <p><strong>Activity:</strong> Development of MVPs (Minimum Viable Products) and technological services</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data We Collect</h2>
          <p>At StartScale we collect only the data strictly necessary to provide our services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identification data:</strong> Full name, email address</li>
            <li><strong>Project data:</strong> Project name, idea description, problem it solves, ideal client</li>
            <li><strong>Technical data:</strong> Technical cookies necessary for website functionality</li>
            <li><strong>Navigation data:</strong> IP address, browser type, pages visited (only with analytical cookies if you give consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Purpose of Processing</h2>
          <p>We use your personal data for the following purposes:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Main purposes:</h3>
              <ul className="text-sm space-y-1">
                <li>• Respond to your contact requests</li>
                <li>• Develop your MVP</li>
                <li>• Provide technical support</li>
                <li>• Send project updates</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Additional purposes:</h3>
              <ul className="text-sm space-y-1">
                <li>• Website improvement (with consent)</li>
                <li>• Statistical analysis (anonymized)</li>
                <li>• Marketing communications (with consent)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
          <p>Under GDPR, you have the following rights:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Access and Control:</h3>
              <ul className="text-sm space-y-1">
                <li>• Right of access to your data</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure</li>
                <li>• Right to restrict processing</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Portability and Opposition:</h3>
              <ul className="text-sm space-y-1">
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
                <li>• Right to withdraw consent</li>
                <li>• Right to lodge a complaint</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p>For any questions about this privacy policy or to exercise your rights:</p>
            <p><strong>Email:</strong> hello@startscale.org</p>
            <p className="text-sm text-gray-600 mt-2">We will respond to your request within 30 days.</p>
          </div>
        </section>
      </PolicyLayout>
    )
  }

  // Spanish version (default)
  return (
    <PolicyLayout type="privacy">
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></span>
          1. Responsable del tratamiento
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p><strong>Responsable:</strong> StartScale</p>
          <p><strong>Email de contacto:</strong> hello@startscale.org</p>
          <p><strong>Actividad:</strong> Desarrollo de MVPs (Mínimos Productos Viables) y servicios tecnológicos</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Datos que recopilamos</h2>
        <p>En StartScale recopilamos únicamente los datos estrictamente necesarios para prestar nuestros servicios:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Datos de identificación:</strong> Nombre completo, dirección de correo electrónico</li>
          <li><strong>Datos del proyecto:</strong> Nombre del proyecto, descripción de la idea, problema que resuelve, cliente ideal</li>
          <li><strong>Datos técnicos:</strong> Cookies técnicas necesarias para el funcionamiento de la web</li>
          <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas (solo con cookies analíticas si das tu consentimiento)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalidad del tratamiento</h2>
        <p>Utilizamos tus datos personales para las siguientes finalidades:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Finalidades principales:</h3>
            <ul className="text-sm space-y-1">
              <li>• Responder a tus solicitudes de contacto</li>
              <li>• Desarrollar tu PMV</li>
              <li>• Proporcionar soporte técnico</li>
              <li>• Enviar actualizaciones del proyecto</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Finalidades adicionales:</h3>
            <ul className="text-sm space-y-1">
              <li>• Mejora del sitio web (con consentimiento)</li>
              <li>• Análisis estadísticos (anonimizados)</li>
              <li>• Comunicaciones de marketing (con consentimiento)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Tus derechos</h2>
        <p>Según el RGPD, tienes los siguientes derechos:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Acceso y Control:</h3>
            <ul className="text-sm space-y-1">
              <li>• Derecho de acceso a tus datos</li>
              <li>• Derecho de rectificación</li>
              <li>• Derecho de supresión</li>
              <li>• Derecho a la limitación del tratamiento</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Portabilidad y Oposición:</h3>
            <ul className="text-sm space-y-1">
              <li>• Derecho a la portabilidad de datos</li>
              <li>• Derecho de oposición</li>
              <li>• Derecho a retirar el consentimiento</li>
              <li>• Derecho a presentar una reclamación</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contacto</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
          <p>Para cualquier consulta sobre esta política de privacidad o para ejercer tus derechos:</p>
          <p><strong>Email:</strong> hello@startscale.org</p>
          <p className="text-sm text-gray-600 mt-2">Responderemos a tu solicitud en un plazo máximo de 30 días.</p>
        </div>
      </section>
    </PolicyLayout>
  )
} 