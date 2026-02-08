import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import DifficultyBadge from '@/components/shared/difficulty-badge'
import DownloadButton from '@/components/shared/download-button'
import { Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'
import type { PracticeSheet } from '@/lib/sanity/types'

interface SheetCardProps {
  sheet: PracticeSheet
  showDownload?: boolean
}

export default function SheetCard({ sheet, showDownload = false }: SheetCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap gap-2">
            <Badge>Year {sheet.yearLevel}</Badge>
            <Badge variant="outline">{sheet.subject}</Badge>
            {sheet.difficulty && <DifficultyBadge difficulty={sheet.difficulty} />}
          </div>
        </div>

        <Link href={`/sheet/${sheet.slug.current}`}>
          <CardTitle className="hover:text-primary transition-colors cursor-pointer">
            {sheet.title}
          </CardTitle>
        </Link>

        {sheet.description && (
          <CardDescription className="line-clamp-2">{sheet.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {format(new Date(sheet.publishDate), 'dd MMM yyyy')}
            </div>
            {sheet.durationMinutes && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {sheet.durationMinutes} mins
              </div>
            )}
          </div>

          {sheet.tags && sheet.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {sheet.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {sheet.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{sheet.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}

          {showDownload && (
            <div className="mt-2">
              <DownloadButton pdfUrl={sheet.pdfUrl} title={sheet.title} size="sm" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
