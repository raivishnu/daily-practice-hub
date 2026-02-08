export type YearLevel = 3 | 4 | 5 | 6

export type Subject = 'maths' | 'english' | 'grammar' | 'reading' | 'thinking' | 'mixed'

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface PracticeSheet {
  _id: string
  _createdAt: string
  title: string
  yearLevel: YearLevel
  subject: Subject
  publishDate: string
  pdfUrl: string
  slug: {
    current: string
  }
  tags?: string[]
  durationMinutes?: number
  difficulty?: Difficulty
  description?: string
}

export interface NewsletterSubscriber {
  _id: string
  email: string
  subscribedAt: string
  preferredYearLevel?: YearLevel
}
