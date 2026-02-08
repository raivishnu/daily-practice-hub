import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'practiceSheet',
  title: 'Practice Sheet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'yearLevel',
      title: 'Year Level',
      type: 'number',
      options: {
        list: [
          { title: 'Year 3', value: 3 },
          { title: 'Year 4', value: 4 },
          { title: 'Year 5', value: 5 },
          { title: 'Year 6', value: 6 }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      options: {
        list: [
          { title: 'Maths', value: 'maths' },
          { title: 'English', value: 'english' },
          { title: 'Grammar', value: 'grammar' },
          { title: 'Reading', value: 'reading' },
          { title: 'Thinking', value: 'thinking' },
          { title: 'Mixed', value: 'mixed' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'durationMinutes',
      title: 'Duration (minutes)',
      type: 'number',
      validation: Rule => Rule.min(1).max(120)
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Medium', value: 'medium' },
          { title: 'Hard', value: 'hard' }
        ]
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: {
      title: 'title',
      yearLevel: 'yearLevel',
      subject: 'subject',
      date: 'publishDate'
    },
    prepare({ title, yearLevel, subject, date }) {
      return {
        title: title,
        subtitle: `Year ${yearLevel} - ${subject} - ${date}`
      }
    }
  },
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }]
    },
    {
      title: 'Year Level',
      name: 'yearLevelAsc',
      by: [{ field: 'yearLevel', direction: 'asc' }]
    }
  ]
})
