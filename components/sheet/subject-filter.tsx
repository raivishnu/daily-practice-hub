'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { Subject } from '@/lib/sanity/types'

interface SubjectFilterProps {
  currentSubject?: string
  yearLevel: number
}

export default function SubjectFilter({ currentSubject, yearLevel }: SubjectFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const subjects: { value: Subject | 'all'; label: string }[] = [
    { value: 'all', label: 'All Subjects' },
    { value: 'maths', label: 'Maths' },
    { value: 'english', label: 'English' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'reading', label: 'Reading' },
    { value: 'thinking', label: 'Thinking' },
    { value: 'mixed', label: 'Mixed' },
  ]

  const handleFilterChange = (subject: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (subject === 'all') {
      params.delete('subject')
    } else {
      params.set('subject', subject)
    }
    const newUrl = params.toString() ? `?${params}` : ''
    router.push(`/year-${yearLevel}${newUrl}`)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {subjects.map((subject) => (
        <Button
          key={subject.value}
          variant={
            (currentSubject === subject.value) ||
            (!currentSubject && subject.value === 'all')
              ? 'default'
              : 'outline'
          }
          size="sm"
          onClick={() => handleFilterChange(subject.value)}
        >
          {subject.label}
        </Button>
      ))}
    </div>
  )
}
