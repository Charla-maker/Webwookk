# Sanity Studio for SellMyCars

This is your Sanity Studio - the admin interface where you'll manage all your website content.

## Quick Start

### Step 1: Start the Studio locally
```bash
cd sanity-studio
npm run dev
```

This will start Sanity Studio at: **http://localhost:3333**

### Step 2: Add Content

Once the studio is running, you can add:

1. **Testimonials** - Customer reviews
   - Add 2-3 sample testimonials
   - Upload customer images or use placeholders

2. **Locations** - Service areas
   - Add a few key locations (Sydney CBD, Western Sydney, etc.)
   - Can import from your existing location data later

3. **Hero Content** - Homepage hero section
   - Set the main headline and benefits

4. **Site Settings** - Global settings
   - Phone number, email, business hours

### Step 3: Deploy Studio (Optional)

To make the Studio accessible online:
```bash
npm run build
npx sanity deploy
```

This creates a hosted version at: `https://sellmycars.sanity.studio`

## What's Next?

After adding content, your Next.js website will automatically fetch it from Sanity!
