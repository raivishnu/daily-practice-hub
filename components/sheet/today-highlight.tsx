import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import DifficultyBadge from '@/components/shared/difficulty-badge'
import DownloadButton from '@/components/shared/download-button'
import { Calendar, Clock, Sparkles } from 'lucide-react'
import { format } from 'date-fns'
import type { PracticeSheet } from '@/lib/sanity/types'

interface TodayHighlightProps {
  sheet: PracticeSheet
}

export default function TodayHighlight({ sheet }: TodayHighlightProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">Today's Sheet</span>
        </div>
        <CardTitle className="text-2xl">{sheet.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Year {sheet.yearLevel}</Badge>
            <Badge variant="outline">{sheet.subject}</Badge>
            {sheet.difficulty && <DifficultyBadge difficulty={sheet.difficulty} />}
          </div>

          {sheet.description && (
            <p className="text-muted-foreground">{sheet.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {format(new Date(sheet.publishDate), 'EEEE, dd MMMM yyyy')}
            </div>
            {sheet.durationMinutes && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {sheet.durationMinutes} minutes
              </div>
            )}
          </div>

          {sheet.tags && sheet.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {sheet.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-2">
            <DownloadButton pdfUrl={sheet.pdfUrl} title={sheet.title} size="lg" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
