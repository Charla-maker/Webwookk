/**
 * Migration Script: Import existing data into Sanity CMS
 *
 * This script migrates:
 * - Testimonials from components/sections/ModernTestimonials.tsx
 * - Locations from lib/data/locations.ts
 * - Site settings (default values)
 */

import dotenv from 'dotenv'
import { createClient } from '@sanity/client'
import { locationsData } from '../lib/data/locations'

// Load environment variables
dotenv.config({ path: '.env.local' })

// Create Sanity client with explicit config
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '90eg8x52',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Hardcoded testimonials from ModernTestimonials.tsx
const testimonials = [
  {
    name: "Spike Warren",
    location: "Parramatta, NSW",
    rating: 5,
    text: "Fast and easy process! I got a great offer for my car, and they picked it up within hours. Highly recommend!",
    image: "https://c.animaapp.com/mh5qprntqjweLB/assets/young-successful-businessman-checking-emails-while-having-morning-coffee.jpg",
    order: 1,
  },
  {
    name: "Michael Chen",
    location: "Liverpool, NSW",
    rating: 5,
    text: "Fantastic service! The team was professional, and I got cash on the spot. The towing was free and quick too!",
    image: "https://c.animaapp.com/mh5qprntqjweLB/assets/stylish-man.jpg",
    order: 2,
  },
  {
    name: "Nicole Roberts",
    location: "Blacktown, NSW",
    rating: 5,
    text: "Very pleased with the experience! I sold my old truck easily and got a fair price. Will definitely use them again!",
    image: "https://c.animaapp.com/mh5qprntqjweLB/assets/ready-to-help-and-serve-shot-of-a-young-businesswoman-working-in-a-call-center-.jpg",
    order: 3,
  },
]

// Site settings
const siteSettings = {
  phoneNumber: "0420 587 575",
  email: "info@sellmycars.com.au",
  businessHours: "Open 365 days - 8am to 8pm",
  socialMedia: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
}

// Hero content
const heroContent = {
  badge: "#1 Cash For Cars Sydney",
  headline: "Sell Your Car Get Cash Today",
  subheadline: "Fast, fair, and hassle-free. We buy any car, truck, ute, or 4x4 in any condition. Free towing. Cash on the spot.",
  benefits: [
    "Instant cash offers - no waiting",
    "Free towing anywhere in Sydney",
    "Open 365 days - 8am to 8pm"
  ],
  stats: [
    {
      value: "$100-$30K",
      label: "Cash Paid",
      description: "Cash Paid"
    },
    {
      value: "2 Hours",
      label: "Average Pickup",
      description: "Average Pickup"
    },
    {
      value: "5000+",
      label: "Cars Bought",
      description: "Cars Bought"
    }
  ]
}

async function migrateTestimonials() {
  console.log('\n📝 Migrating Testimonials...')

  for (const testimonial of testimonials) {
    try {
      // Create testimonial document without image
      const doc = await sanityClient.create({
        _type: 'testimonial',
        name: testimonial.name,
        location: testimonial.location,
        rating: testimonial.rating,
        text: testimonial.text,
        order: testimonial.order,
        isActive: true,
      })

      console.log(`✅ Created testimonial: ${doc.name}`)
    } catch (error) {
      console.error(`❌ Error creating testimonial for ${testimonial.name}:`, error)
    }
  }
}

async function migrateLocations() {
  console.log('\n📍 Migrating Locations...')
  console.log(`Total locations to migrate: ${locationsData.length}`)

  let successCount = 0
  let errorCount = 0

  for (const location of locationsData) {
    try {
      // Create location document without image
      const doc = await sanityClient.create({
        _type: 'location',
        id: {
          _type: 'slug',
          current: location.id,
        },
        name: location.name,
        region: location.region,
        type: location.type,
        suburbs: location.suburbs,
        landmarks: location.landmarks,
        description: location.description,
        mapUrl: location.mapUrl,
        coordinates: location.coordinates,
        isActive: true,
      })

      successCount++
      if (successCount % 10 === 0) {
        console.log(`✅ Migrated ${successCount} locations...`)
      }
    } catch (error) {
      errorCount++
      console.error(`❌ Error creating location for ${location.name}:`, error)
    }
  }

  console.log(`\n✅ Successfully migrated ${successCount} locations`)
  if (errorCount > 0) {
    console.log(`❌ Failed to migrate ${errorCount} locations`)
  }
}

async function migrateSiteSettings() {
  console.log('\n⚙️  Migrating Site Settings...')

  try {
    const doc = await sanityClient.create({
      _type: 'siteSettings',
      ...siteSettings,
    })

    console.log('✅ Created site settings')
  } catch (error) {
    console.error('❌ Error creating site settings:', error)
  }
}

async function migrateHeroContent() {
  console.log('\n🎯 Migrating Hero Content...')

  try {
    const doc = await sanityClient.create({
      _type: 'heroContent',
      ...heroContent,
    })

    console.log('✅ Created hero content')
  } catch (error) {
    console.error('❌ Error creating hero content:', error)
  }
}

async function main() {
  console.log('🚀 Starting Sanity CMS Migration...')
  console.log('=====================================\n')

  try {
    // Run migrations
    await migrateTestimonials()
    await migrateSiteSettings()
    await migrateHeroContent()
    await migrateLocations()

    console.log('\n=====================================')
    console.log('✅ Migration Complete!')
    console.log('\nYou can now view your content at:')
    console.log('http://localhost:3333')
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
main()
