import { Badge } from '@/components/ui/badge'
import type { Difficulty } from '@/lib/sanity/types'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const variants: Record<Difficulty, { label: string; className: string }> = {
    easy: { label: 'Easy', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
    medium: { label: 'Medium', className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' },
    hard: { label: 'Hard', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
  }

  const config = variants[difficulty]

  return (
    <Badge variant="secondary" className={config.className}>
      {config.label}
    </Badge>
  )
}
