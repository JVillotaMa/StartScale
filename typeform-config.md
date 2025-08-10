# Configuración Typeform - StartScale PMV

## WELCOME SCREEN
**Título**: Solicitud PMV Gratuito - StartScale
**Descripción**: 
👋 ¡Hola! Soy Jaime de StartScale

Quiero ayudarte a convertir tu idea en un PMV funcional en 48h.

Este formulario me ayuda a entender tu proyecto y priorizarlo.

⏱️ Tiempo estimado: 3-5 minutos

**Button text**: Empezar solicitud

---

## SECCIÓN 1: CONTACTO

### Pregunta 1: Nombre
**Tipo**: Short text
**Pregunta**: ¿Cuál es tu nombre completo?
**Required**: Sí
**Placeholder**: Ej: Ana García López

### Pregunta 2: Email  
**Tipo**: Email
**Pregunta**: ¿Cuál es tu email?
**Required**: Sí
**Validation**: Email format

### Pregunta 3: LinkedIn/Web
**Tipo**: Website
**Pregunta**: LinkedIn o página web (opcional)
**Required**: No
**Placeholder**: https://linkedin.com/in/tu-perfil

---

## SECCIÓN 2: TU IDEA

### Pregunta 4: Introducción
**Tipo**: Statement
**Texto**: 
💡 Ahora cuéntame sobre tu idea

No tiene que ser perfecta, solo necesito entenderla claramente.

### Pregunta 5: Descripción de la idea
**Tipo**: Long text
**Pregunta**: Explica tu idea de startup en 1-3 frases
**Required**: Sí
**Placeholder**: Ej: Una app que conecta dueños de perros con cuidadores locales cuando viajan. Los usuarios pueden buscar cuidadores verificados y hacer reservas online.
**Max characters**: 500

### Pregunta 6: Problema
**Tipo**: Long text  
**Pregunta**: ¿Qué problema específico resuelve tu idea?
**Required**: Sí
**Placeholder**: Ej: Los dueños de mascotas no tienen opciones confiables y accesibles para cuidado cuando viajan
**Max characters**: 300

### Pregunta 7: Usuario objetivo
**Tipo**: Short text
**Pregunta**: ¿Quién es tu usuario ideal?
**Required**: Sí
**Placeholder**: Ej: Dueños de perros de 25-45 años, clase media-alta, que viajan por trabajo
**Max characters**: 200

---

## SECCIÓN 3: INTENCIÓN

### Pregunta 8: Introducción
**Tipo**: Statement
**Texto**: 
🎯 Esto me ayuda a priorizar fundadores serios

Quiero trabajar con personas que realmente van a usar el PMV.

### Pregunta 9: Qué harías con el PMV
**Tipo**: Multiple choice
**Pregunta**: Si te gusta el PMV, ¿qué harías con él?
**Required**: Sí
**Opciones**:
- 🚀 Lanzarlo online para usuarios reales
- 💼 Presentarlo a inversores
- 🧪 Testearlo con usuarios para obtener feedback
- 🤔 Solo curiosidad / explorar la idea

### Pregunta 10: Llamada de seguimiento
**Tipo**: Yes/No
**Pregunta**: ¿Estarías abierto a una llamada corta (15-30 min) para discutir resultados y próximos pasos?
**Required**: Sí

---

## SECCIÓN 4: EXPECTATIVAS

### Pregunta 11: Introducción
**Tipo**: Statement
**Texto**: 
⚡ Importante: Expectativas claras

Es crucial que entiendas qué estoy ofreciendo exactamente.

### Pregunta 12: Entendimiento PMV básico
**Tipo**: Yes/No
**Pregunta**: ¿Entiendes que es un PMV básico, construido rápidamente, y puede ser desactivado en unos días si no acordamos siguientes pasos?
**Required**: Sí

### Pregunta 13: Plan de pago futuro
**Tipo**: Yes/No
**Pregunta**: ¿Entiendes que si el PMV te resulta útil y quieres mantenerlo online o mejorarlo, discutiremos un plan de pago?
**Required**: Sí

---

## SECCIÓN 5: PREGUNTA BONUS

### Pregunta 14: Por qué tu idea
**Tipo**: Long text
**Pregunta**: ¿Por qué debería elegir tu idea para un PMV gratuito?
**Required**: No
**Placeholder**: Cuéntame qué hace especial tu proyecto o por qué crees que tiene potencial...
**Max characters**: 500

---

## THANK YOU PAGE

**Título**: ¡Solicitud recibida! 🎉

**Mensaje**:
Perfecto, ya tengo toda la información.

**Próximos pasos:**
✅ Revisaré tu solicitud en las próximas 24 horas
✅ Te contactaré por email con mi decisión
✅ Si tu proyecto es seleccionado, empezaremos inmediatamente

**Mientras tanto:**
Puedes escribirme directamente a hello@startscale.org si tienes preguntas.

¡Gracias por confiar en StartScale!

**Redirect**: No redirect

---

## CONFIGURACIÓN ADICIONAL

### Logic Jumps:
- Si pregunta 9 = "Solo curiosidad" → Mostrar mensaje: "Gracias por tu interés. Actualmente priorizo proyectos con intención de lanzamiento real."

### Notifications:
- Email a hello@startscale.org con cada respuesta
- Subject: "Nueva solicitud PMV: [Nombre del usuario]"

### Design:
- Theme: Professional
- Colors: Verde (#16a34a) y gris oscuro (#1f2937)
- Font: Inter o similar 