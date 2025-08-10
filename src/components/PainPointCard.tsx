'use client'

import { IconType } from 'react-icons'

interface PainPointCardProps {
  icon: IconType
  title: string
  description: string
  bgColor: string
  borderColor: string
  iconBgColor: string
  delay?: number
}

export default function PainPointCard({
  icon: Icon,
  title,
  description,
  bgColor,
  borderColor,
  iconBgColor,
}: PainPointCardProps) {
  return (
    <div className={`text-center p-6 ${bgColor} rounded-2xl border ${borderColor}`}>
      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 