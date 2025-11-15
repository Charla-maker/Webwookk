/**
 * Clean up duplicate documents in Sanity CMS
 * This script removes duplicate entries created by running migrations multiple times
 */

import dotenv from 'dotenv'
import { createClient } from '@sanity/client'

// Load environment variables
dotenv.config({ path: '.env.local' })

// Create Sanity client with write permissions
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '90eg8x52',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function removeDuplicates() {
  console.log('🧹 Cleaning up duplicate documents...\n')

  try {
    // Get all documents
    const allDocs = await sanityClient.fetch(`*[_type in ["testimonial", "location", "heroContent", "siteSettings"]] {
      _id,
      _type,
      name,
      "locationId": id.current
    }`)

    console.log(`Found ${allDocs.length} total documents\n`)

    // Group by type and identifier
    const grouped: Record<string, any[]> = {}

    allDocs.forEach((doc: any) => {
      let key = doc._type

      // For locations, use the location ID to group
      if (doc._type === 'location' && doc.locationId) {
        key = `location:${doc.locationId}`
      }
      // For testimonials, use the name
      else if (doc._type === 'testimonial' && doc.name) {
        key = `testimonial:${doc.name}`
      }

      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(doc)
    })

    // Find and remove duplicates
    let deletedCount = 0

    for (const [key, docs] of Object.entries(grouped)) {
      if (docs.length > 1) {
        console.log(`Found ${docs.length} duplicates for: ${key}`)

        // Keep the first one, delete the rest
        const toDelete = docs.slice(1)

        for (const doc of toDelete) {
          await sanityClient.delete(doc._id)
          deletedCount++
          console.log(`  ❌ Deleted duplicate: ${doc._id}`)
        }
      }
    }

    console.log(`\n✅ Cleanup complete! Deleted ${deletedCount} duplicate documents`)

  } catch (error) {
    console.error('❌ Error cleaning up duplicates:', error)
    process.exit(1)
  }
}

// Run cleanup
removeDuplicates()
