'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export default function Header() {
  const yearLevels = [3, 4, 5, 6]

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="h-6 w-6" />
            <span>Daily Practice Hub</span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              {yearLevels.map((year) => (
                <Link
                  key={year}
                  href={`/year-${year}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Year {year}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <select
                className="text-sm font-medium border rounded-md px-3 py-1"
                onChange={(e) => {
                  if (e.target.value) {
                    window.location.href = e.target.value
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Year
                </option>
                {yearLevels.map((year) => (
                  <option key={year} value={`/year-${year}`}>
                    Year {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
