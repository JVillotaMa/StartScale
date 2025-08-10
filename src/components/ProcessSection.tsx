'use client'

import { motion } from 'framer-motion'
import { FaClock, FaCloud } from 'react-icons/fa'
import CommitmentCard from './CommitmentCard'
import { useLanguage } from '../contexts/LanguageContext'

export default function ProcessSection() {
  const { t } = useLanguage()
  
  const commitments = [
    {
      icon: FaClock,
      title: t('process.commitment1Title'),
      description: t('process.commitment1Description'),
      delay: 0
    },
    {
      icon: FaCloud,
      title: t('process.commitment2Title'),
      description: t('process.commitment2Description'),
      delay: 0.2
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('process.title').includes('compromiso') ? (
              <>Mi <span className="text-green-600">compromiso</span> contigo</>
            ) : (
              <>My <span className="text-green-600">commitment</span> to you</>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {commitments.map((commitment, index) => (
            <CommitmentCard
              key={index}
              icon={commitment.icon}
              title={commitment.title}
              description={commitment.description}
              delay={commitment.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 