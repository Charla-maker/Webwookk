import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client for server-side operations (with auth token)
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01', // Use current date in YYYY-MM-DD format
  useCdn: false, // Set to false for authenticated requests
  token: process.env.SANITY_API_TOKEN,
})

// Sanity client for client-side operations (no auth token)
export const sanityClientPublic = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance on public reads
})

// Image URL builder helper
const builder = imageUrlBuilder(sanityClientPublic)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
