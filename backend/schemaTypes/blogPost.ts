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
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'url',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
