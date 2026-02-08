# Sanity CMS Setup Guide

## Step 1: Create a Sanity Account

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get started" and sign up with your email or GitHub account
3. It's free for up to 3 users and 10GB of assets

## Step 2: Create a New Project

1. After logging in, go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create project"
3. Give it a name: **"Daily Practice Hub"**
4. Keep the dataset name as **"production"**
5. Click "Create project"

## Step 3: Get Your Project ID

1. After creating the project, you'll see your **Project ID** on the project page
2. Copy this ID - you'll need it for the next step

## Step 4: Create an API Token

1. In your Sanity project dashboard, click on "API" in the left sidebar
2. Click on "Tokens" tab
3. Click "Add API token"
4. Give it a name: **"Daily Practice Hub Token"**
5. Set permissions to **Editor** (allows read and write)
6. Click "Create"
7. **IMPORTANT:** Copy the token immediately - you won't be able to see it again!

## Step 5: Update Environment Variables

1. Open `.env.local` in the project root
2. Add your credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id-from-step-3"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token-from-step-4"
```

## Step 6: Start the Development Server

```bash
npm run dev
```

## Step 7: Access Sanity Studio

1. Open your browser and go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Log in with your Sanity account
3. You should see the Sanity Studio interface with:
   - **Practice Sheets** - where you'll upload PDFs
   - **Newsletter Subscribers** - where email signups are stored

## Step 8: Upload Your First Practice Sheet

1. In Sanity Studio, click on "Practice Sheet"
2. Click "Create new Practice Sheet"
3. Fill in the fields:
   - **Title**: e.g., "Fractions Practice: Adding Like Denominators"
   - **Year Level**: Select 3, 4, 5, or 6
   - **Subject**: Select from Maths, English, etc.
   - **Publish Date**: Select today's date or any date
   - **PDF File**: Upload your PDF
   - **Slug**: Click "Generate" to auto-generate from title
   - **Tags** (optional): Add topics like "fractions", "addition"
   - **Duration** (optional): e.g., 20 minutes
   - **Difficulty** (optional): Easy, Medium, or Hard
   - **Description** (optional): Brief description
4. Click "Publish"

## Troubleshooting

**Problem:** Can't access Sanity Studio at localhost:3000/studio

**Solution:** Make sure:
- You've added your NEXT_PUBLIC_SANITY_PROJECT_ID to .env.local
- You've restarted the development server after adding environment variables

**Problem:** Getting 401 errors when uploading

**Solution:** Check that your SANITY_API_TOKEN is correct and has Editor permissions

## Next Steps

Once you have Sanity set up and a few practice sheets uploaded:

1. Navigate to year level pages: [http://localhost:3000/year-3](http://localhost:3000/year-3)
2. You should see "Today's Sheet" if you uploaded one with today's date
3. Browse the archive of all sheets for that year level

Enjoy building your Daily Practice Hub! 🎉
