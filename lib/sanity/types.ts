// Sanity document types for SellMyCars

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  name: string
  location: string
  rating: number
  text: string
  image: SanityImage
  order?: number
  isActive: boolean
}

export interface Location {
  _id: string
  _type: 'location'
  id: string
  name: string
  region: string
  type: 'region' | 'suburb'
  suburbs: string[]
  landmarks: string[]
  description: string
  mapUrl: string
  coordinates: {
    lat: number
    lng: number
  }
  image: SanityImage
  isActive: boolean
}

export interface HeroContent {
  _id: string
  _type: 'heroContent'
  badge: string
  headline: string
  subheadline: string
  benefits: string[]
  stats: {
    label: string
    value: string
    description: string
  }[]
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  phoneNumber: string
  email: string
  businessHours: string
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  seo?: SEO
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImage
  keywords?: string[]
  canonicalUrl?: string
  noIndex?: boolean
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  mainImage?: SanityImage
  categories?: Category[]
  body: any[] // Block content
  author?: string
  publishedAt: string
  featured?: boolean
  seo?: SEO
  isActive: boolean
}

export interface FAQ {
  _id: string
  _type: 'faq'
  question: string
  answer: any[] // Block content
  category?: 'general' | 'pricing' | 'process' | 'vehicles' | 'payment' | 'towing'
  order?: number
  isActive: boolean
}
