'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaArrowRight } from 'react-icons/fa'
import ProcessStepCard from './ProcessStepCard'
import { useLanguage } from '../contexts/LanguageContext'

interface HeroSectionProps {
  spotsLeft: number
  totalSpots: number
  onContactClick: () => void
}

export default function HeroSection({
  spotsLeft,
  totalSpots,
  onContactClick
}: HeroSectionProps) {
  const { t } = useLanguage()
  
  const processSteps = [
    {
      step: "1",
      title: t('hero.step1Title'),
      description: t('hero.step1Description'),
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
      textColor: "text-green-300"
    },
    {
      step: "2",
      title: t('hero.step2Title'),
      description: t('hero.step2Description'),
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-300"
    },
    {
      step: "3",
      title: t('hero.step3Title'),
      description: t('hero.step3Description'),
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-300"
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-gray-700/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <FaRocket className="text-green-400" />
            <span className="text-green-100 font-medium">{t('hero.spotsAvailable', { spotsLeft, totalSpots })}</span>
          </div>
        </motion.div>
        <motion.h2
          className='flex justify-start text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed'
        >
          {t('hero.question')}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {t('hero.mainTitle')}{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {t('hero.prototype')}
          </span>
          <br />
          {t('hero.timeframe')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          {t('hero.description').split('{mvpBold}')[0]}
          <strong className="text-white">{t('hero.mvpBold')}</strong>
          {t('hero.description').split('{mvpBold}')[1]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-15 mt-15"
        >
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
              borderColor={step.borderColor}
              textColor={step.textColor}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-1"
        >
          <button
            onClick={onContactClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-lg text-xl transition-colors duration-200 flex items-center gap-3 shadow-lg hover:cursor-pointer"
          >
            {t('hero.contactButton')}
            <FaArrowRight className="text-lg" />
          </button>
          
          <p className="text-gray-200 text-sm">
            {t('hero.noCommitment')}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 