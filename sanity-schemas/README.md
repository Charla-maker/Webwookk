# Sanity CMS Schemas for SellMyCars

This directory contains the schema definitions for your Sanity Studio.

## How to Add These Schemas to Your Sanity Studio

### Option 1: Using Sanity Studio Dashboard (Easiest)

1. **Go to your Sanity Studio**
   - Visit: https://your-project-id.sanity.studio (replace with your project ID: 90eg8x52)
   - Or: https://www.sanity.io/manage

2. **Navigate to Schema**
   - Go to your project → Schema → Vision/Deploy Studio

3. **Add Schemas via Sanity Manage**
   - You can create schemas directly in the Sanity Manage interface
   - Copy the schema definitions from the files in this directory
   - Paste them into the schema builder

### Option 2: Using Sanity CLI (Recommended for Developers)

1. **Install Sanity CLI globally** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

2. **Initialize Sanity Studio in your project**:
   ```bash
   npx sanity init
   ```
   - Select your existing project (90eg8x52)
   - Choose "production" dataset
   - Choose default project structure

3. **Copy schema files**:
   ```bash
   cp sanity-schemas/*.ts sanity/schemas/
   ```

4. **Update `sanity/schema.ts`** to import all schemas:
   ```typescript
   import {schemaTypes as customSchemas} from '../sanity-schemas'

   export const schema = {
     types: [...customSchemas],
   }
   ```

5. **Deploy the Studio**:
   ```bash
   cd sanity
   npx sanity deploy
   ```

## Schema Overview

### 1. **Testimonials** (`testimonial.ts`)
- Customer reviews and ratings
- Fields: name, location, rating, text, image, order, isActive

### 2. **Locations** (`location.ts`)
- Service areas and regions
- Fields: id (slug), name, region, type, suburbs, landmarks, description, mapUrl, coordinates, image, isActive

### 3. **Hero Content** (`heroContent.ts`)
- Homepage hero section content
- Fields: badge, headline, subheadline, benefits, stats

### 4. **Site Settings** (`siteSettings.ts`)
- Global site settings
- Fields: phoneNumber, email, businessHours, socialMedia

## Next Steps

1. ✅ Add schemas to your Sanity Studio
2. ✅ Create your first content entries:
   - Add 3 testimonials
   - Add a few key locations (Sydney CBD, Western Sydney, etc.)
   - Configure hero content
   - Set up site settings

3. ✅ Once content is added, we'll update the Next.js components to fetch from Sanity

## Need Help?

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Schema Types: https://www.sanity.io/docs/schema-types
