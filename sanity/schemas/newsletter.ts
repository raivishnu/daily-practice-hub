import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'preferredYearLevel',
      title: 'Preferred Year Level',
      type: 'number',
      options: {
        list: [3, 4, 5, 6]
      }
    })
  ],
  preview: {
    select: {
      email: 'email',
      date: 'subscribedAt'
    },
    prepare({ email, date }) {
      return {
        title: email,
        subtitle: new Date(date).toLocaleDateString()
      }
    }
  }
})
