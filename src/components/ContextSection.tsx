'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaClock } from 'react-icons/fa'
import PainPointCard from './PainPointCard'
import PhaseCard from './PhaseCard'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContextSection() {
  const { t } = useLanguage()
  
  const painPoints = [
    {
      icon: FaLightbulb,
      title: t('context.painPoint1Title'),
      description: t('context.painPoint1Description'),
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      iconBgColor: "bg-red-500"
    },
    {
      icon: FaClock,
      title: t('context.painPoint2Title'),
      description: t('context.painPoint2Description'),
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      iconBgColor: "bg-orange-500"
    },
    {
      icon: FaUsers,
      title: t('context.painPoint3Title'),
      description: t('context.painPoint3Description'),
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      iconBgColor: "bg-yellow-500"
    }
  ]

  const phases = [
    {
      title: t('context.phase1Title'),
      description: t('context.phase1Description')
    },
    {
      title: t('context.phase2Title'),
      description: t('context.phase2Description')
    },
    {
      title: t('context.phase3Title'),
      description: t('context.phase3Description')
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Pain Point */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('context.mainPainTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('context.mainPainDescription')}
          </p>
        </motion.div>

        {/* Three pain points */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {painPoints.map((painPoint, index) => (
            <PainPointCard
              key={index}
              icon={painPoint.icon}
              title={painPoint.title}
              description={painPoint.description}
              bgColor={painPoint.bgColor}
              borderColor={painPoint.borderColor}
              iconBgColor={painPoint.iconBgColor}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('context.opportunityTitle').includes('Imagínate') ? (
              <>
                <span className="text-blue-600">Imagínate</span> mostrar un producto real
              </>
            ) : (
              <>
                <span className="text-blue-600">Imagine</span> showing a real product
              </>
            )}
          </h2>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
            <strong>{t('context.opportunityDescription')}</strong>
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 italic">
              &quot;{t('context.opportunityQuote')}&quot;
            </p>
          </div>
        </motion.div>

        {/* Enfoque y metodología */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-600 to-green-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {t('context.methodologyTitle').includes('Primera') ? (
              <>
                Nuestro enfoque: <span className="text-green-200">Primera fase sólida</span>
              </>
            ) : (
              <>
                Our approach: <span className="text-green-200">Solid first phase</span>
              </>
            )}
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('context.methodologyDescription')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <PhaseCard
                key={index}
                title={phase.title}
                description={phase.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 