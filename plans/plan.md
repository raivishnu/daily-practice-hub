1) Goal and success criteria

Primary goal: Parents can quickly find and download daily practice sheets (PDFs) for their child’s year level, every day.

Success looks like:
	•	A parent can land → pick Year 3/4/5/6 → pick “Today” (or a date) → download PDF in under 30 seconds.
	•	You can upload/author sheets in minutes, not hours.
	•	SEO brings organic traffic (“Year 4 daily maths worksheets”, etc.).
	•	Optional: simple email capture to build a parent list.

⸻

2) MVP scope (Phase 1: launch fast)

Student/Parent-facing
	•	Home page: value prop + year level tiles.
	•	Year level page (Y3–Y6):
	•	“Today’s Sheet”
	•	Past days (calendar/list)
	•	Subjects filters (Maths / English / Thinking / Mixed)
	•	Sheet page:
	•	Title, year, subject, difficulty, time estimate
	•	Download button (PDF)
	•	Optional preview images (first page as image)
	•	Search: by keyword + filters (year, subject).
	•	Newsletter capture (optional but strong for growth).

Admin/Creator-facing (simple but essential)

Two good MVP options:
	•	Option A (fastest): Use a CMS like Sanity to upload PDFs + metadata.
	•	Option B (developer-centric): Store metadata as markdown/JSON in repo and PDFs in storage.

For your use case (daily uploads), Option A wins because it removes developer friction.

⸻

3) Content model (what you’ll store per sheet)

Each practice sheet should have:
	•	title
	•	yearLevel (3/4/5/6)
	•	subject (Maths/English/Grammar/Reading/etc.)
	•	date (publish date)
	•	pdfUrl
	•	previewImages[] (optional)
	•	tags[] (e.g., fractions, comprehension, punctuation)
	•	durationMinutes (optional)
	•	difficulty (easy/medium/hard)

This structure keeps the website scalable without redesigning later.

⸻

4) Tech stack recommendation (Next.js-first)

Frontend
	•	Next.js (App Router)
	•	TypeScript
	•	Tailwind CSS
	•	shadcn/ui (optional, fast UI components)

Content & file storage (best fit)
	•	Sanity CMS for content + metadata
	•	PDF storage:
	•	Either store PDFs in Sanity assets or use S3-compatible storage (Cloudflare R2 / AWS S3)
	•	CDN delivery: automatic via platform

Hosting
	•	Vercel (simplest for Next.js)
	•	Alternative: Cloudflare Pages (if you want to avoid Vercel coupling)

Analytics & SEO
	•	Plausible / Vercel Analytics
	•	Basic SEO: sitemap, meta templates, structured data for content pages

⸻

5) Key pages and UX flow

Parent journey:
	1.	Google search → Year page
	2.	Sees “Today’s Sheet” + “Download” (no friction)
	3.	Optionally sees “Get daily sheets by email”

Navigation:
	•	Year 3 | Year 4 | Year 5 | Year 6
	•	Subjects
	•	Free resources
	•	About
	•	Contact

⸻

6) Growth strategy baked into the plan (without heavy marketing)
	•	SEO landing pages per year level + subject:
	•	“Year 4 daily maths practice sheets”
	•	“Year 5 comprehension daily worksheets”
	•	Internal linking between sheets, topics, and year pages
	•	“This week’s pack” pages (weekly roundup)
	•	Email list: daily/weekly digest (big long-term asset)

⸻

7) Security and access model (choose one)

You have 3 viable routes:

A) Fully free (fastest growth)
	•	All PDFs downloadable
	•	Monetize later (premium packs / bundles)

B) Freemium (recommended)
	•	Some sheets free (e.g., last 7 days or 1 subject/day)
	•	Premium requires login/payment for full archive or premium categories

C) Paid-only (slowest growth)
	•	Strong content, but discovery friction is higher

For your audience (parents searching daily worksheets), Freemium is usually best.

⸻

8) Phase plan (clear milestones)

Phase 1 — MVP (Core download experience)
	•	Build pages + CMS integration
	•	Upload 30–60 sheets as starter library
	•	Launch with Year pages + “today” logic + archive

Phase 2 — Quality & engagement
	•	Search + filters
	•	PDF preview images
	•	Email capture + basic automation

Phase 3 — Monetization
	•	Bundles: weekly packs, monthly packs, term packs
	•	Stripe checkout
	•	Simple membership gating (only if needed)

Phase 4 — Personalization (optional)
	•	Parent selects year level → homepage adapts
	•	Recommended sheets based on downloads

⸻

9) What you need to prepare (content + ops)
	•	A repeatable “daily sheet creation” workflow (template)
	•	Naming convention (important for sanity later)
	•	Y4_Maths_Fractions_2026-02-08.pdf
	•	Decide upload cadence:
	•	Daily per year level? or daily overall rotating year levels?
	•	Starter pack:
	•	At least 2–4 weeks of content per year level (even if you continue daily)

⸻

10) The biggest decisions (so you can decide whether to proceed)

Here are the “go/no-go” decisions:
	1.	Free vs Freemium vs Paid
	2.	CMS-driven (Sanity) vs Repo-driven content
	3.	Do you want “daily per year level” or “daily overall”?
	4.	Do you want PDF preview images? (helps conversions a lot)

⸻

11) My recommendation for your case

If your goal is speed + consistency + low friction daily uploads:
	•	Next.js + Tailwind + Sanity + Vercel
	•	Start with Freemium
	•	Focus MVP on download speed + clean archive
	•	Add email list early (even if you don’t monetize yet)

⸻

If you say “yes, proceed”, I’ll convert this into:
	•	a page-by-page sitemap,
	•	database/content schema,
	•	CMS structure (Sanity),
	•	and a build checklist (what to code in what order).