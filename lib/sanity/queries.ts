import { groq } from 'next-sanity'

// Get today's sheet for a specific year level
export const getTodaysSheetQuery = (yearLevel: number) => {
  const today = new Date().toISOString().split('T')[0]
  return groq`
    *[_type == "practiceSheet" && yearLevel == ${yearLevel} && publishDate == "${today}"][0] {
      _id,
      _createdAt,
      title,
      yearLevel,
      subject,
      publishDate,
      "pdfUrl": pdfFile.asset->url,
      slug,
      tags,
      durationMinutes,
      difficulty,
      description
    }
  `
}

// Get all sheets for a year level (with optional subject filter)
export const getYearLevelSheetsQuery = (yearLevel: number, subject?: string) => {
  const subjectFilter = subject ? `&& subject == "${subject}"` : ''
  return groq`
    *[_type == "practiceSheet" && yearLevel == ${yearLevel} ${subjectFilter}] | order(publishDate desc) {
      _id,
      _createdAt,
      title,
      yearLevel,
      subject,
      publishDate,
      "pdfUrl": pdfFile.asset->url,
      slug,
      tags,
      durationMinutes,
      difficulty,
      description
    }
  `
}

// Get a single sheet by slug
export const getSheetBySlugQuery = (slug: string) => groq`
  *[_type == "practiceSheet" && slug.current == "${slug}"][0] {
    _id,
    _createdAt,
    title,
    yearLevel,
    subject,
    publishDate,
    "pdfUrl": pdfFile.asset->url,
    slug,
    tags,
    durationMinutes,
    difficulty,
    description
  }
`

// Get recent sheets (homepage)
export const getRecentSheetsQuery = groq`
  *[_type == "practiceSheet"] | order(publishDate desc) [0...12] {
    _id,
    title,
    yearLevel,
    subject,
    publishDate,
    "pdfUrl": pdfFile.asset->url,
    slug,
    difficulty
  }
`

// Get sheets count by year level
export const getSheetsCountQuery = (yearLevel: number) => groq`
  count(*[_type == "practiceSheet" && yearLevel == ${yearLevel}])
`
