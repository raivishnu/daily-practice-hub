import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import type { PracticeSheet } from '@/lib/sanity/types'

interface YearLevelGridProps {
  recentSheets: PracticeSheet[]
}

export default function YearLevelGrid({ recentSheets }: YearLevelGridProps) {
  const yearLevels = [
    {
      year: 3,
      title: 'Year 3',
      description: 'Practice sheets for Year 3 students',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      year: 4,
      title: 'Year 4',
      description: 'Practice sheets for Year 4 students',
      gradient: 'from-green-500 to-green-600',
    },
    {
      year: 5,
      title: 'Year 5',
      description: 'Practice sheets for Year 5 students',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      year: 6,
      title: 'Year 6',
      description: 'Practice sheets for Year 6 students',
      gradient: 'from-orange-500 to-orange-600',
    },
  ]

  const getSheetCount = (year: number) => {
    return recentSheets.filter((sheet) => sheet.yearLevel === year).length
  }

  return (
    <section id="year-levels" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Year Level</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your child's year level to browse daily practice sheets tailored to their curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {yearLevels.map((level) => (
            <Link key={level.year} href={`/year-${level.year}`}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                    {level.year}
                  </div>
                  <CardTitle>{level.title}</CardTitle>
                  <CardDescription>{level.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {getSheetCount(level.year)} recent sheets
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
