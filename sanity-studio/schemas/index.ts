import testimonial from './testimonial'
import location from './location'
import heroContent from './heroContent'
import siteSettings from './siteSettings'
import seo from './seo'
import blockContent from './blockContent'
import category from './category'
import blogPost from './blogPost'
import faq from './faq'

export const schemaTypes = [
  // Object types (used by other schemas)
  seo,
  blockContent,

  // Document types
  testimonial,
  location,
  heroContent,
  siteSettings,
  category,
  blogPost,
  faq,
]
