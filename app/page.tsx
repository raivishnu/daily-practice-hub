import Hero from '@/components/home/hero'
import YearLevelGrid from '@/components/home/year-level-grid'
import NewsletterForm from '@/components/home/newsletter-form'
import SanitySetupNotice from '@/components/shared/sanity-setup-notice'
import { client } from '@/lib/sanity/client'
import { getRecentSheetsQuery } from '@/lib/sanity/queries'

export default async function HomePage() {
  const isSanityConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
                             process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

  // Fetch recent sheets from Sanity
  const recentSheets = await client.fetch(getRecentSheetsQuery).catch(() => [])

  return (
    <>
      <Hero />

      {!isSanityConfigured && (
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <SanitySetupNotice />
          </div>
        </section>
      )}

      <YearLevelGrid recentSheets={recentSheets} />
      <NewsletterForm />
    </>
  )
}
