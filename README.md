# Daily Practice Hub 📚

A modern web platform for parents to download daily practice sheets (PDFs) for their children in Years 3-6. Built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## ✨ Features

- 🎯 **Year-specific content** for Years 3-6
- 📅 **Daily practice sheets** with automatic "Today's Sheet" highlighting
- 📖 **Multiple subjects**: Maths, English, Grammar, Reading, Thinking, Mixed
- 🔍 **Subject filtering** for easy navigation
- 📧 **Newsletter subscription** for daily updates
- 📱 **Fully responsive** design
- 🎨 **Modern UI** with shadcn/ui components
- 🚀 **Fast performance** with Next.js App Router

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Sanity.io
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🚀 Quick Start

### 1. Setup Sanity CMS

**Follow the detailed guide in [SANITY_SETUP.md](./SANITY_SETUP.md)**

Quick summary:
1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project called "Daily Practice Hub"
3. Get your Project ID and create an API token

### 2. Configure Environment Variables

Open [.env.local](./.env.local) and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id-here"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token-here"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

### 4. Access Sanity Studio

Go to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content and upload practice sheets.

## 📁 Project Structure

```
daily-practice-hub/
├── app/                     # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── year-3/             # Year 3 sheets
│   ├── year-4/             # Year 4 sheets
│   ├── year-5/             # Year 5 sheets
│   ├── year-6/             # Year 6 sheets
│   ├── sheet/[slug]/       # Sheet detail pages
│   ├── studio/             # Embedded Sanity Studio
│   └── api/newsletter/     # Newsletter API
├── components/             # React components
│   ├── home/              # Home page components
│   ├── layout/            # Header, Footer
│   ├── sheet/             # Sheet components
│   ├── shared/            # Reusable components
│   └── ui/                # shadcn/ui components
├── lib/sanity/            # Sanity config & queries
├── sanity/schemas/        # Content schemas
└── public/                # Static assets
```

## 📝 Content Management

### Uploading Practice Sheets

1. Navigate to [localhost:3000/studio](http://localhost:3000/studio)
2. Click "Practice Sheet" → "Create new"
3. Fill in the form:
   - **Title**: "Fractions Practice: Adding Like Denominators"
   - **Year Level**: 3, 4, 5, or 6
   - **Subject**: Maths, English, etc.
   - **Publish Date**: Today's date for "Today's Sheet"
   - **PDF File**: Upload your PDF
   - **Slug**: Auto-generate from title
   - **Tags**, **Duration**, **Difficulty** (optional)
4. Click "Publish"

## 🎨 Pages Overview

- **Home** (`/`) - Hero, year level cards, newsletter
- **Year Pages** (`/year-3` to `/year-6`) - Today's sheet + archive
- **Sheet Detail** (`/sheet/[slug]`) - Full sheet info + download
- **Studio** (`/studio`) - Content management

## 🚢 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

### Required Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

## 🗺️ Roadmap

### Phase 2
- Search functionality
- PDF preview images
- Email automation
- Advanced filtering

### Phase 3
- Premium content with Stripe
- User accounts
- Download history
- Weekly/monthly packs

### Phase 4
- Cloudflare R2 for PDFs
- Analytics dashboard
- Performance optimizations

## 📚 Documentation

- [SANITY_SETUP.md](./SANITY_SETUP.md) - Detailed Sanity setup guide
- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)

## 🤝 Support

For questions or issues with setup, refer to the documentation links above.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Sanity CMS
