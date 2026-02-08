import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/lib/sanity/client'
import { getSheetBySlugQuery } from '@/lib/sanity/queries'
import DownloadButton from '@/components/shared/download-button'
import DifficultyBadge from '@/components/shared/difficulty-badge'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sheet = await client.fetch(getSheetBySlugQuery(slug)).catch(() => null)

  if (!sheet) {
    return {
      title: 'Sheet Not Found',
    }
  }

  return {
    title: sheet.title,
    description: sheet.description || `Year ${sheet.yearLevel} ${sheet.subject} practice sheet`,
  }
}

export default async function SheetPage({ params }: PageProps) {
  const { slug } = await params
  const sheet = await client.fetch(getSheetBySlugQuery(slug)).catch(() => null)

  if (!sheet) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href={`/year-${sheet.yearLevel}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Year {sheet.yearLevel}
      </Link>

      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge>Year {sheet.yearLevel}</Badge>
          <Badge variant="outline">{sheet.subject}</Badge>
          {sheet.difficulty && <DifficultyBadge difficulty={sheet.difficulty} />}
        </div>

        <h1 className="text-4xl font-bold mb-4">{sheet.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
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

        {sheet.description && (
          <p className="text-lg text-muted-foreground mb-6">{sheet.description}</p>
        )}

        <DownloadButton pdfUrl={sheet.pdfUrl} title={sheet.title} size="lg" />
      </div>

      {sheet.tags && sheet.tags.length > 0 && (
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-sm font-semibold mb-3">Topics covered:</h3>
          <div className="flex flex-wrap gap-2">
            {sheet.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">About this practice sheet</h3>
        <p className="text-sm text-muted-foreground">
          This practice sheet is designed for Year {sheet.yearLevel} students and covers {sheet.subject} topics.
          {sheet.durationMinutes && ` It should take approximately ${sheet.durationMinutes} minutes to complete.`}
          {' '}Download the PDF to get started!
        </p>
      </div>
    </div>
  )
}
