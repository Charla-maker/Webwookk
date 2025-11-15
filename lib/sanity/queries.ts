import { sanityClient, sanityClientPublic } from './client'
import type {
  Testimonial,
  Location,
  HeroContent,
  SiteSettings,
  BlogPost,
  Category,
  FAQ
} from './types'

// GROQ Queries
const TESTIMONIALS_QUERY = `*[_type == "testimonial" && isActive == true] | order(order asc) {
  _id,
  name,
  location,
  rating,
  text,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  order,
  isActive
}`

const LOCATIONS_QUERY = `*[_type == "location" && isActive == true] | order(name asc) {
  _id,
  id,
  name,
  region,
  type,
  suburbs,
  landmarks,
  description,
  mapUrl,
  coordinates,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  isActive
}`

const LOCATION_BY_ID_QUERY = `*[_type == "location" && id == $id && isActive == true][0] {
  _id,
  id,
  name,
  region,
  type,
  suburbs,
  landmarks,
  description,
  mapUrl,
  coordinates,
  image {
    asset->{
      _id,
      url
    },
    alt
  },
  isActive
}`

const HERO_CONTENT_QUERY = `*[_type == "heroContent"][0] {
  _id,
  badge,
  headline,
  subheadline,
  benefits,
  stats
}`

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  phoneNumber,
  email,
  businessHours,
  socialMedia,
  seo
}`

const BLOG_POSTS_QUERY = `*[_type == "blogPost" && isActive == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt,
    caption
  },
  categories[]->{
    _id,
    title,
    slug,
    color
  },
  author,
  publishedAt,
  featured,
  isActive
}`

const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug && isActive == true][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt,
    caption
  },
  categories[]->{
    _id,
    title,
    slug,
    color
  },
  body,
  author,
  publishedAt,
  featured,
  seo,
  isActive
}`

const FEATURED_BLOG_POSTS_QUERY = `*[_type == "blogPost" && isActive == true && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt
}`

const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`

const CATEGORY_BY_SLUG_QUERY = `*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  color
}`

const FAQS_QUERY = `*[_type == "faq" && isActive == true] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order,
  isActive
}`

const FAQS_BY_CATEGORY_QUERY = `*[_type == "faq" && isActive == true && category == $category] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order,
  isActive
}`

// Fetch functions
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonials = await sanityClientPublic.fetch<Testimonial[]>(TESTIMONIALS_QUERY)
    return testimonials
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const locations = await sanityClientPublic.fetch<Location[]>(LOCATIONS_QUERY)
    return locations
  } catch (error) {
    console.error('Error fetching locations:', error)
    return []
  }
}

export async function getLocationById(id: string): Promise<Location | null> {
  try {
    const location = await sanityClientPublic.fetch<Location>(LOCATION_BY_ID_QUERY, { id })
    return location
  } catch (error) {
    console.error('Error fetching location:', error)
    return null
  }
}

export async function getHeroContent(): Promise<HeroContent | null> {
  try {
    const heroContent = await sanityClientPublic.fetch<HeroContent>(HERO_CONTENT_QUERY)
    return heroContent
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const settings = await sanityClientPublic.fetch<SiteSettings>(SITE_SETTINGS_QUERY)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Blog post queries
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClientPublic.fetch<BlogPost[]>(BLOG_POSTS_QUERY)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await sanityClientPublic.fetch<BlogPost>(BLOG_POST_BY_SLUG_QUERY, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClientPublic.fetch<BlogPost[]>(FEATURED_BLOG_POSTS_QUERY)
    return posts
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}

// Category queries
export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await sanityClientPublic.fetch<Category[]>(CATEGORIES_QUERY)
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const category = await sanityClientPublic.fetch<Category>(CATEGORY_BY_SLUG_QUERY, { slug })
    return category
  } catch (error) {
    console.error('Error fetching category:', error)
    return null
  }
}

// FAQ queries
export async function getFAQs(): Promise<FAQ[]> {
  try {
    const faqs = await sanityClientPublic.fetch<FAQ[]>(FAQS_QUERY)
    return faqs
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  try {
    const faqs = await sanityClientPublic.fetch<FAQ[]>(FAQS_BY_CATEGORY_QUERY, { category })
    return faqs
  } catch (error) {
    console.error('Error fetching FAQs by category:', error)
    return []
  }
}
