import { BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-blue-100 p-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Daily Practice Sheets for Year 3-6
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Download free, high-quality practice sheets in Maths, English, and more.
          New sheets added daily to support your child's learning journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#year-levels"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse Practice Sheets
          </a>
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Get Daily Updates
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Free</div>
            <div className="text-sm text-muted-foreground mt-1">Always</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Daily</div>
            <div className="text-sm text-muted-foreground mt-1">New Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground mt-1">Year Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6+</div>
            <div className="text-sm text-muted-foreground mt-1">Subjects</div>
          </div>
        </div>
      </div>
    </section>
  )
}
