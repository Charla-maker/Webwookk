# SellMyCars - Cash For Cars Sydney

A modern Next.js web application for a cash-for-cars service in Sydney and surrounding regions.

## 🚀 Tech Stack

- **Framework:** Next.js 15.1.3 (App Router)
- **Language:** TypeScript 5.3.3
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** Custom component library with Lucide icons
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── locations/         # Location pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   └── location/         # Location components
├── lib/                   # Utilities
│   ├── data/             # Static data
│   └── supabase/         # Database clients
├── types/                # TypeScript types
└── public/               # Static assets
```

## 🛠️ Setup Instructions

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed setup steps.

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

Required environment variables (see `.env.local.example`):

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-side only)
- `RESEND_API_KEY` - (Optional) For email notifications

## 🏗️ Features

- ✅ Server-side rendering (SSR)
- ✅ Dynamic location pages
- ✅ Contact form with API integration
- ✅ Supabase database integration
- ✅ SEO optimized with metadata
- ✅ Responsive design
- ✅ Image optimization
- ✅ TypeScript type safety

## 📝 Documentation

- [Code Audit Report](./CODE_AUDIT_REPORT.md) - Comprehensive security and quality audit
- [Vite vs Next.js Comparison](./VITE_VS_NEXTJS_COMPARISON.md) - Architecture comparison and migration notes
- [Setup Instructions](./SETUP_INSTRUCTIONS.md) - Detailed setup guide

## ⚠️ Important Notes

**Security Fixes Required Before Production:**

This project requires the following security improvements (see CODE_AUDIT_REPORT.md):

1. Switch API route to use server-side Supabase client
2. Add input validation (Zod)
3. Implement rate limiting
4. Add CSRF protection
5. Sanitize error messages

## 🗂️ Project History

This repository previously contained a Vite-based SPA prototype that has been removed. All functionality has been migrated to this Next.js application. See `VITE_VS_NEXTJS_COMPARISON.md` for details.

## 📞 Contact

Phone: 0420 587 575

---

Built with ❤️ using Next.js and TypeScript
