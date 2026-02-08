import SheetCard from './sheet-card'
import type { PracticeSheet } from '@/lib/sanity/types'

interface SheetListProps {
  sheets: PracticeSheet[]
}

export default function SheetList({ sheets }: SheetListProps) {
  if (sheets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No practice sheets found. Check back soon for new content!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Practice Sheets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheets.map((sheet) => (
          <SheetCard key={sheet._id} sheet={sheet} />
        ))}
      </div>
    </div>
  )
}
