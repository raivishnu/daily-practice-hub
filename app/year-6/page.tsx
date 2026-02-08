import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { getTodaysSheetQuery, getYearLevelSheetsQuery } from '@/lib/sanity/queries'
import TodayHighlight from '@/components/sheet/today-highlight'
import SheetList from '@/components/sheet/sheet-list'
import SubjectFilter from '@/components/sheet/subject-filter'

export const metadata: Metadata = {
  title: 'Year 6 Practice Sheets',
  description: 'Free daily practice sheets for Year 6 students. Download Maths, English, and more.',
}

interface PageProps {
  searchParams: Promise<{ subject?: string }>
}

export default async function Year6Page({ searchParams }: PageProps) {
  const yearLevel = 6
  const params = await searchParams
  const subject = params.subject

  const [todaysSheet, allSheets] = await Promise.all([
    client.fetch(getTodaysSheetQuery(yearLevel)).catch(() => null),
    client.fetch(getYearLevelSheetsQuery(yearLevel, subject)).catch(() => [])
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Year 6 Practice Sheets</h1>
        <p className="text-muted-foreground text-lg">
          Download free daily practice sheets for Year 6 students
        </p>
      </div>

      {todaysSheet && (
        <div className="mb-12">
          <TodayHighlight sheet={todaysSheet} />
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Subject</h2>
        <SubjectFilter currentSubject={subject} yearLevel={yearLevel} />
      </div>

      <SheetList sheets={allSheets} />
    </div>
  )
}
