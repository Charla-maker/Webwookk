# Sanity CMS Enhancement Plan

> **📋 IMPLEMENTATION STATUS**: Priority 1 features (1-4) and Priority 2 features (5, 7) are **✅ COMPLETE**!
> See `CMS_ENHANCEMENTS_COMPLETED.md` for full implementation details.

## Completed Features Summary

✅ **SEO Management** - Meta tags, OG images, keywords, canonical URLs
✅ **Blog System** - Posts, categories, featured posts, rich text editor
✅ **Rich Text Editor** - WordPress-level block content system
✅ **Categories** - Full categorization with colors and descriptions
✅ **FAQs** - Organized by category with rich answers
✅ **Media Management** - Enhanced with required alt text

---

## Priority 1: Critical Features

### 1. Media Management
**Status**: ✅ ENHANCED
**WordPress Equivalent**: Media Library

**Implementation**:
- Enable Sanity's built-in image upload
- Add image fields to schemas
- Implement automatic image optimization with Sanity's Image CDN
- Add alt text and metadata fields

**Schema Update Needed**:
```typescript
// Add to testimonial, location, hero schemas
image: {
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true, // Enable smart cropping
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}
```

### 2. Blog/News System
**Status**: ✅ COMPLETE
**WordPress Equivalent**: Posts

**Implementation**:
```typescript
// sanity-studio/schemas/blogPost.ts
export default {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent', // Rich text editor
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo', // SEO schema
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
}
```

### 3. SEO Management
**Status**: ✅ COMPLETE
**WordPress Equivalent**: Yoast SEO / Rank Math

**Implementation**:
```typescript
// sanity-studio/schemas/seo.ts
export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.max(60),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160),
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    },
    {
      name: 'keywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
  ],
}
```

### 4. Rich Text / Page Builder
**Status**: ✅ COMPLETE
**WordPress Equivalent**: Gutenberg / Block Editor

**Implementation**:
```typescript
// sanity-studio/schemas/blockContent.ts
export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
    },
    {
      name: 'callToAction',
      type: 'object',
      title: 'Call to Action',
      fields: [
        {name: 'text', type: 'string'},
        {name: 'url', type: 'url'},
      ],
    },
  ],
}
```

## Priority 2: Important Features

### 5. Categories & Tags
**Status**: ✅ COMPLETE
**WordPress Equivalent**: Categories & Tags

```typescript
// category.ts
export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug', options: {source: 'title'}},
    {name: 'description', type: 'text'},
  ],
}
```

### 6. Vehicle Categories for Car Business
**Status**: Missing
**Specific to Your Business**

```typescript
// vehicleCategory.ts
export default {
  name: 'vehicleCategory',
  title: 'Vehicle Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      // e.g., "Sedans", "SUVs", "Trucks", "Damaged Cars"
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'pricingInfo',
      title: 'Pricing Information',
      type: 'blockContent',
    },
  ],
}
```

### 7. FAQs System
**Status**: ✅ COMPLETE
**Essential for SEO**

```typescript
// faq.ts
export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'faqCategory'}],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
```

### 8. Service Pages
**Status**: Missing
**For Different Services**

```typescript
// servicePage.ts
export default {
  name: 'servicePage',
  title: 'Service Pages',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug'},
    {
      name: 'services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string'},
          {name: 'description', type: 'text'},
          {name: 'icon', type: 'image'},
          {name: 'priceRange', type: 'string'},
        ],
      }],
    },
    {name: 'seo', type: 'seo'},
  ],
}
```

## Priority 3: Advanced Features

### 9. Form Submissions Tracking
**Status**: Missing
**WordPress Equivalent**: Contact Form 7 + Database

```typescript
// formSubmission.ts (Read-only in Studio)
export default {
  name: 'formSubmission',
  title: 'Form Submissions',
  type: 'document',
  readOnly: true, // Can't edit, only view
  fields: [
    {name: 'name', type: 'string'},
    {name: 'email', type: 'string'},
    {name: 'phone', type: 'string'},
    {name: 'vehicleInfo', type: 'object'},
    {name: 'message', type: 'text'},
    {name: 'status', type: 'string', options: {
      list: ['new', 'contacted', 'qualified', 'converted'],
    }},
    {name: 'submittedAt', type: 'datetime'},
  ],
}
```

### 10. Pricing Calculator Settings
**Status**: Missing
**Business-Specific**

```typescript
// pricingCalculator.ts
export default {
  name: 'pricingCalculator',
  title: 'Pricing Calculator Settings',
  type: 'document',
  fields: [
    {
      name: 'basePrice',
      type: 'object',
      fields: [
        {name: 'sedan', type: 'number'},
        {name: 'suv', type: 'number'},
        {name: 'truck', type: 'number'},
      ],
    },
    {
      name: 'conditionMultipliers',
      type: 'object',
      fields: [
        {name: 'excellent', type: 'number'},
        {name: 'good', type: 'number'},
        {name: 'fair', type: 'number'},
        {name: 'poor', type: 'number'},
      ],
    },
  ],
}
```

### 11. Page Builder / Landing Pages
**Status**: Missing
**WordPress Equivalent**: Elementor / Beaver Builder

```typescript
// landingPage.ts
export default {
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug'},
    {
      name: 'sections',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'features'},
        {type: 'testimonials'},
        {type: 'pricing'},
        {type: 'cta'},
        {type: 'faq'},
      ],
    },
    {name: 'seo', type: 'seo'},
  ],
}
```

### 12. Revision History & Drafts
**Status**: Built into Sanity ✅
**WordPress Equivalent**: Post Revisions

Already available in Sanity! Just need to enable in config:
```typescript
// sanity.config.ts
export default defineConfig({
  // ...
  document: {
    productionUrl: async (prev, context) => {
      return `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?slug=${context.document.slug.current}`
    },
  },
})
```

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
1. ✅ Enable image uploads in all schemas
2. ✅ Add SEO schema to all content types
3. ✅ Create rich text editor (blockContent)
4. ✅ Add categories/tags system

### Phase 2: Content Expansion (Week 3-4)
1. Blog/News system
2. FAQ system
3. Service pages
4. Vehicle categories

### Phase 3: Business Features (Week 5-6)
1. Form submission tracking
2. Pricing calculator settings
3. Landing page builder
4. Advanced analytics integration

### Phase 4: Optimization (Week 7-8)
1. Preview mode for unpublished content
2. Scheduled publishing
3. Multilingual support (if needed)
4. Advanced search

## Quick Wins (Implement Today)

### 1. Add SEO to Existing Content Types
I can add SEO fields to your current schemas right now.

### 2. Enable Image Uploads
Switch from external URLs to Sanity's image hosting.

### 3. Add More Testimonial Fields
- Company name
- Rating (already have)
- Date
- Featured toggle

### 4. Enhance Location Pages
- Add rich content for each location
- Service hours per location
- Staff photos
- Location-specific testimonials

## Comparison Table

| Feature | WordPress | Current Setup | Recommended |
|---------|-----------|---------------|-------------|
| Media Library | ✅ Full | ❌ External URLs only | ✅ Sanity Images |
| Blog System | ✅ Built-in | ❌ None | ⚠️ Custom schema |
| SEO Management | ✅ Plugins | ❌ None | ⚠️ SEO schema |
| Page Builder | ✅ Gutenberg | ❌ None | ⚠️ Custom blocks |
| Categories/Tags | ✅ Built-in | ❌ None | ⚠️ Easy to add |
| Forms | ✅ Plugins | ✅ Custom API | ✅ Keep + track |
| Revisions | ✅ Built-in | ✅ Built-in | ✅ Already have |
| User Roles | ✅ Built-in | ✅ Built-in | ✅ Already have |
| Scheduling | ✅ Built-in | ❌ None | ⚠️ Easy to add |
| Multilingual | ⚠️ Plugins | ❌ None | ⚠️ If needed |
| Analytics | ⚠️ Plugins | ❌ None | ⚠️ Can add |

## Cost Comparison

**WordPress**:
- Hosting: $10-50/month
- Premium theme: $60 one-time
- SEO plugin: $99/year
- Page builder: $249/year
- Forms plugin: $199/year
- **Total**: ~$500-800/year

**Sanity CMS** (Current):
- Free tier: 2 users, 500K API requests/month
- Paid tier: $99/month for more users/requests
- Images: Included in Sanity CDN
- **Total**: $0-1200/year

## Advantages Sanity Has Over WordPress

✅ **Performance**: Headless architecture, edge caching
✅ **Security**: No PHP vulnerabilities, no plugin conflicts
✅ **Developer Experience**: TypeScript, modern tooling
✅ **Scalability**: Cloud-native, handles millions of requests
✅ **Flexibility**: Custom schemas, not forced into WP structure
✅ **Real-time**: Instant content updates without rebuilding

---

Would you like me to implement any of these enhancements? I'd recommend starting with:

1. **SEO schema** (30 minutes)
2. **Image uploads** (1 hour)
3. **Blog system** (2 hours)
4. **FAQs** (1 hour)

Let me know which features are most important for your business!
