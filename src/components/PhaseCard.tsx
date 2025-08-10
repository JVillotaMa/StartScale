'use client'


interface PhaseCardProps {
  title: string
  description: string
  delay?: number
}

export default function PhaseCard({
  title,
  description,
}: PhaseCardProps) {
  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-green-100 text-sm">{description}</p>
    </div>
  )
} 