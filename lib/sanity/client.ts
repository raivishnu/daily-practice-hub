import { createClient } from 'next-sanity'

// Use a placeholder if env vars are not set (for initial setup)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (projectId === 'placeholder' && process.env.NODE_ENV === 'development') {
  console.warn(
    '⚠️  Sanity credentials not configured. Please add NEXT_PUBLIC_SANITY_PROJECT_ID to .env.local'
  )
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN // Only needed for mutations
})
