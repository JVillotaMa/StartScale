'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface CommitmentCardProps {
  icon: IconType
  title: string
  description: string
  delay?: number
}

export default function CommitmentCard({
  icon: Icon,
  title,
  description,
  delay = 0
}: CommitmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
    >
      <Icon className="text-4xl text-green-600 mb-4" />
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
    </motion.div>
  )
} 