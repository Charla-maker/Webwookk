export default {
  name: 'location',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'URL Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., sydney-cbd, western-sydney)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'e.g., Central Sydney, Greater Western Sydney',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Region', value: 'region' },
          { title: 'Suburb', value: 'suburb' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'suburbs',
      title: 'Suburbs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of suburbs in this location',
    },
    {
      name: 'landmarks',
      title: 'Landmarks',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Notable landmarks in this area',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'SEO-friendly description of this location',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Embed URL from Google Maps',
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        },
        {
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        },
      ],
    },
    {
      name: 'image',
      title: 'Location Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO settings for this location page',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this location',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'region',
      media: 'image',
    },
  },
}
