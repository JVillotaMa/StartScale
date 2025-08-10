'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Import all the modular components
import HeroSection from '../components/HeroSection'
import ContextSection from '../components/ContextSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import ContactOptionsModal from '../components/ContactOptionsModal'
import TypeformModal from '../components/TypeformModal'
import EmailModal from '../components/EmailModal'

export default function Home() {
  const [spotsLeft, setSpotsLeft] = useState(2)
  const [totalSpots] = useState(5)
  const [showModal, setShowModal] = useState(false)
  const [showContactOptions, setShowContactOptions] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailSending, setEmailSending] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailFormData, setEmailFormData] = useState({
    userEmail: '',
    fullName: '',
    projectName: '',
    projectIdea: '',
    problemSolved: '',
    idealClient: '',
    willTest: true,
    acceptsPrivacyPolicy: false,
    acceptsCommercialCommunications: false
  })

  const openContactOptions = () => {
    setShowContactOptions(true)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }

  const openFormModal = () => {
    setShowContactOptions(false)
    setShowModal(true)
  }

  const openEmailModal = () => {
    setShowContactOptions(false)
    setShowEmailModal(true)
  }

  const openCalendly = () => {
    // Open Calendly in a new tab
    window.open('https://calendly.com/hello-startscale/30min', '_blank')
    setShowContactOptions(false)
    document.body.style.overflow = 'unset'
  }

  const closeFormModal = () => {
    console.log('Closing modal...') // Debug log
    setShowModal(false)
    document.body.style.overflow = 'unset' // Restore scroll
  }

  const closeEmailModal = () => {
    setShowEmailModal(false)
    setEmailSent(false)
    setEmailSending(false)
    setEmailFormData({
      userEmail: '',
      fullName: '',
      projectName: '',
      projectIdea: '',
      problemSolved: '',
      idealClient: '',
      willTest: true,
      acceptsPrivacyPolicy: false,
      acceptsCommercialCommunications: false
    })
    document.body.style.overflow = 'unset'
  }

  const handleEmailFormChange = (field: string, value: string | boolean) => {
    setEmailFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const sendEmail = async () => {
    setEmailSending(true)
    
    try {
      // Initialize EmailJS using environment variables
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your .env.local file.')
      }

      emailjs.init(publicKey)
      
      const templateParams = {
        to_email: 'hello@startscale.org',
        from_email: emailFormData.userEmail,
        from_name: emailFormData.fullName,
        subject: 'Peticición PMV 48horas',
        full_name: emailFormData.fullName,
        user_email: emailFormData.userEmail,
        project_name: emailFormData.projectName,
        project_idea: emailFormData.projectIdea,
        problem_solved: emailFormData.problemSolved,
        ideal_client: emailFormData.idealClient,
        will_test: emailFormData.willTest ? 'Sí, estoy dispuesto/a a probar el PMV y participar en una reunión de 15 minutos para dar feedback tras la entrega del PMV.' : 'No',
        privacy_policy_accepted: emailFormData.acceptsPrivacyPolicy ? 'Sí, ha aceptado la Política de Privacidad' : 'No ha aceptado la Política de Privacidad',
        commercial_communications: emailFormData.acceptsCommercialCommunications ? 'Sí, acepta recibir comunicaciones comerciales' : 'No acepta comunicaciones comerciales'
      }

      await emailjs.send(serviceId, templateId, templateParams)
      
      setEmailSent(true)
      setEmailSending(false)
    } catch (error) {
      console.error('Error sending email:', error)
      setEmailSending(false)
      alert('Error al enviar el email. Por favor, intenta de nuevo.')
    }
  }

  const closeContactOptions = () => {
    setShowContactOptions(false)
    document.body.style.overflow = 'unset'
  }

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showModal) {
          closeFormModal()
        } else if (showEmailModal) {
          closeEmailModal()
        } else if (showContactOptions) {
          closeContactOptions()
        }
      }
    }
    
    if (showModal || showEmailModal || showContactOptions) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [showModal, showEmailModal, showContactOptions])

  useEffect(() => {
    // Simular contador dinámico de plazas
    const interval = setInterval(() => {
      setSpotsLeft(prev => prev > 5 ? prev - 1 : prev)
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection
        spotsLeft={spotsLeft}
        totalSpots={totalSpots}
        onContactClick={openContactOptions}
      />

      <ContextSection />

      <ProcessSection />

      <CTASection onContactClick={openContactOptions} />

      <TestimonialsSection openContactOptions={openContactOptions} />

      <Footer />

      <ContactOptionsModal
        show={showContactOptions}
        onClose={closeContactOptions}
        onCalendlyClick={openCalendly}
        onFormClick={openFormModal}
        onEmailClick={openEmailModal}
      />

      <TypeformModal
        show={showModal}
        onClose={closeFormModal}
      />

      <EmailModal
        show={showEmailModal}
        onClose={closeEmailModal}
        emailSending={emailSending}
        emailSent={emailSent}
        emailFormData={emailFormData}
        onFormChange={handleEmailFormChange}
        onSendEmail={sendEmail}
      />
    </main>
  )
}
