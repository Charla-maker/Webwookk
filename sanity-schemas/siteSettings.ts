export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Main business phone number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      description: 'e.g., "Open 365 days - 8am to 8pm"',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'phoneNumber',
    },
  },
}
