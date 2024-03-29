import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogpost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Date Published',
      name: 'datePublished',
      type: 'date',
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
