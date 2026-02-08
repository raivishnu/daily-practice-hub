export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-3">Daily Practice Hub</h3>
            <p className="text-sm text-muted-foreground">
              Free daily practice sheets for Australian Year 3-6 students.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Year Levels</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/year-3" className="text-muted-foreground hover:text-primary">
                  Year 3
                </a>
              </li>
              <li>
                <a href="/year-4" className="text-muted-foreground hover:text-primary">
                  Year 4
                </a>
              </li>
              <li>
                <a href="/year-5" className="text-muted-foreground hover:text-primary">
                  Year 5
                </a>
              </li>
              <li>
                <a href="/year-6" className="text-muted-foreground hover:text-primary">
                  Year 6
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Subjects</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Maths</li>
              <li>English</li>
              <li>Grammar</li>
              <li>Reading</li>
              <li>Thinking</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Daily Practice Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
