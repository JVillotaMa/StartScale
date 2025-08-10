'use client'


interface ProcessStepCardProps {
  step: string
  title: string
  description: string
  bgColor: string
  borderColor: string
  textColor: string
  delay?: number
}

export default function ProcessStepCard({
  step,
  title,
  description,
  bgColor,
  borderColor,
  textColor,
}: ProcessStepCardProps) {
  return (
    <div className="text-center">
      <div className={`${bgColor} border ${borderColor} rounded-lg p-4 h-24 md:h-32 flex flex-col justify-center`}>
        <h3 className={`text-base md:text-lg font-semibold ${textColor} mb-2 md:mb-3`}>
          {step}. {title}
        </h3>
        <p className="text-xs md:text-sm text-blue-100">{description}</p>
      </div>
    </div>
  )
} 