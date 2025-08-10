import Link from "next/link";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 p-8 md:p-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">⚖️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">Aviso Legal</h1>
              <p className="text-gray-600">Información legal y condiciones de uso</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-600 to-green-600 rounded-lg p-4 text-white">
            <p className="text-green-100">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-slate-600 to-gray-800 rounded-full"></span>
              1. Datos identificativos
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Denominación social:</strong> StartScale</p>
                  <p><strong>Actividad:</strong> Desarrollo de software y servicios tecnológicos</p>
                  <p><strong>Dominio web:</strong> startscale.org</p>
                </div>
                <div>
                  <p><strong>Email de contacto:</strong> hello@startscale.org</p>
                  <p><strong>Responsable:</strong> Equipo StartScale</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Objeto y ámbito de aplicación</h2>
            <div className="space-y-4">
              <p>
                Este aviso legal regula el uso del sitio web <strong>startscale.org</strong> (en adelante, &lqduo;el sitio web &lqduo;) 
                que StartScale pone a disposición de los usuarios de Internet.
              </p>
              <p>
                La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una de las 
                disposiciones incluidas en este Aviso Legal.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Importante:</strong> Si no estás de acuerdo con cualquiera de las condiciones aquí establecidas, 
                  no utilices este sitio web.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Condiciones de uso</h2>
            <div className="grid md:grid-cols-1 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">Uso permitido</h3>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>Navegar por el sitio web para información sobre nuestros servicios</li>
                  <li>Solicitar información sobre el desarrollo de MVPs</li>
                  <li>Contactar con nuestro equipo a través de los formularios habilitados</li>
                  <li>Compartir contenido del sitio web citando la fuente</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Uso prohibido</h3>
                <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                  <li>Realizar actividades ilícitas, fraudulentas o que infrinjan derechos de terceros</li>
                  <li>Introducir virus informáticos o realizar acciones que puedan alterar el sistema</li>
                  <li>Intentar acceder a cuentas de correo electrónico ajenas o áreas restringidas</li>
                  <li>Reproducir, copiar, distribuir o permitir acceso público sin autorización previa</li>
                  <li>Usar el sitio web para spam o comunicaciones comerciales no solicitadas</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilidades</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1. Responsabilidades de StartScale</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
                    <li>Mantener el sitio web en funcionamiento en la medida de lo posible</li>
                    <li>Proteger los datos personales conforme a nuestra Política de Privacidad</li>
                    <li>Proporcionar información veraz sobre nuestros servicios</li>
                    <li>Responder a las consultas en un plazo razonable</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2. Limitación de responsabilidad</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm mb-3">
                    StartScale no se hace responsable de:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Interrupciones, suspensiones o errores en el acceso al sitio web</li>
                    <li>Daños causados por virus informáticos o elementos dañinos</li>
                    <li>El uso indebido del sitio web por parte de los usuarios</li>
                    <li>Errores en el contenido del sitio web, salvo negligencia manifiesta</li>
                    <li>Decisiones tomadas en base a la información del sitio web</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propiedad intelectual</h2>
            <div className="space-y-4">
              <p>
                Los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías, gráficos, 
                imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, 
                constituyen una obra cuya propiedad pertenece a StartScale.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Derechos reservados</h3>
                <p className="text-purple-700 text-sm">
                  Quedan expresamente prohibidas la reproducción, distribución y comunicación pública, 
                  incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos 
                  de esta página web, sin autorización expresa de StartScale.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Uso permitido</h3>
                <p className="text-green-700 text-sm">
                  Se permite la visualización, descarga e impresión de contenidos únicamente para uso personal 
                  y privado, siempre que no se modifiquen y se mantengan intactos todos los avisos de propiedad intelectual.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Enlaces a terceros</h2>
            <div className="space-y-4">
              <p>
                El sitio web puede contener enlaces a otros sitios web de terceros. StartScale no tiene control 
                sobre estos sitios y no se hace responsable de sus contenidos o políticas de privacidad.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>Recomendación:</strong> Te aconsejamos revisar las políticas de privacidad y términos de uso 
                  de cualquier sitio web de terceros que visites a través de enlaces desde nuestro sitio.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modificaciones</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                StartScale se reserva el derecho a realizar modificaciones en el sitio web sin previo aviso, 
                así como cambiar, suprimir o añadir tanto los contenidos como las condiciones de uso del mismo.
              </p>
              <p className="text-blue-700 text-sm mt-2">
                Las modificaciones del presente Aviso Legal entrarán en vigor desde su publicación en el sitio web.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Legislación aplicable y jurisdicción</h2>
            <div className="space-y-4">
              <p>
                El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier 
                controversia las partes se someterán a los juzgados y tribunales correspondientes conforme a derecho.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Resolución de conflictos</h3>
                <p className="text-gray-700 text-sm">
                  En caso de controversia, las partes intentarán resolver sus diferencias de manera amistosa. 
                  Si no fuera posible, se someterán a los tribunales competentes según la legislación española.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contacto</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">¿Tienes alguna duda sobre este Aviso Legal?</h3>
              <p className="text-blue-800 mb-2">
                Para cualquier consulta relacionada con este Aviso Legal, puedes contactarnos en:
              </p>
              <p className="text-blue-900 font-semibold">📧 hello@startscale.org</p>
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