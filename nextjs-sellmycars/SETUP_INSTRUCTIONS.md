# Next.js + Supabase Setup Instructions

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd nextjs-sellmycars
npm install
```

### 2. Set Up Supabase

#### Create Supabase Project
1. Go to https://supabase.com
2. Create a new project
3. Wait for the database to be ready

#### Run SQL Schema
Go to SQL Editor in Supabase and run this:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Personal Information
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Vehicle Information
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year TEXT NOT NULL,
  condition TEXT NOT NULL,
  message TEXT,
  
  -- Metadata
  location_page TEXT,
  ip_address TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'completed', 'cancelled'))
);

-- Create indexes
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin dashboard - optional)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

### 3. Configure Environment Variables

Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Then fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Find these in: Supabase Dashboard → Settings → API

### 4. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## ✅ Testing the Form

1. Fill out the contact form on the homepage
2. Submit the form
3. Check Supabase Dashboard → Table Editor → contact_submissions
4. You should see your submission!

## 🎯 What's Working

- ✅ Contact form with Supabase integration
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success messages
- ✅ All sections from original site
- ✅ SEO optimization
- ✅ Mobile responsive

## 📊 Viewing Submissions

Go to Supabase Dashboard → Table Editor → contact_submissions

You'll see all form submissions with:
- Customer details
- Vehicle information
- Submission timestamp
- Status tracking

## 🔒 Security

- Row Level Security (RLS) enabled
- Public can only INSERT (submit forms)
- Only authenticated users can READ (view submissions)
- Service role key kept server-side only

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel will automatically:
- Build your Next.js app
- Set up SSL
- Provide a production URL
- Enable automatic deployments

## 📧 Email Notifications (Optional)

To add email notifications when forms are submitted:

1. Sign up for Resend: https://resend.com
2. Add API key to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```
3. Uncomment email logic in `app/api/submit-form/route.ts`

## 🎨 Customization

All components are in `/components`:
- `/components/sections` - Page sections
- `/components/ui` - Reusable UI components
- `/components/ContactForm.tsx` - Main contact form

## 🐛 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify Supabase credentials in `.env.local`
- Check Supabase RLS policies are set up correctly

**Can't see submissions?**
- Go to Supabase → Table Editor
- Check the `contact_submissions` table
- Verify RLS policies allow inserts

**Build errors?**
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check all environment variables are set

## 📞 Support

If you need help, check:
- Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
- Tailwind docs: https://tailwindcss.com/docs
