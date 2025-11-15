export default {
  name: 'heroContent',
  title: 'Hero Section Content',
  type: 'document',
  fields: [
    {
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small badge/tag at the top (e.g., "#1 Cash For Cars Sydney")',
    },
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subheadline',
      title: 'Sub Headline',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key benefits (with checkmarks)',
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "$100-$30K", "2 Hours", "5000+"',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Cash Paid", "Average Pickup"',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO settings for the homepage',
    },
  ],
  preview: {
    select: {
      title: 'headline',
    },
  },
}
