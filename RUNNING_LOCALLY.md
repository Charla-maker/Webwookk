# Step-by-Step Guide: Running the Next.js Website Locally

This guide will walk you through running the SellMyCars Next.js website on your local machine.

---

## Prerequisites

✅ **Already Installed:**
- Node.js: v22.21.0
- npm: 10.9.4
- Project Location: `/home/user/Webwookk`

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project Directory

```bash
cd /home/user/Webwookk
```

**Expected Output:**
```
/home/user/Webwookk
```

---

### Step 2: Install Dependencies

This installs all required packages (React, Next.js, Tailwind, etc.)

```bash
npm install
```

**What this does:**
- Downloads ~200MB of dependencies to `node_modules/`
- Installs React 18.3.1, Next.js 15.1.3, TypeScript 5.3.3, and more
- Creates `package-lock.json` for dependency locking

**Expected Output:**
```
added 365 packages, and audited 366 packages in 30s

127 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**Time:** ~30-60 seconds depending on internet speed

---

### Step 3: Configure Environment Variables (Optional)

The website will run without a database, but forms won't work. To enable full functionality:

#### Option A: Run Without Database (Forms Won't Submit)
```bash
# Skip this step - website will run but forms are non-functional
```

#### Option B: Set Up Supabase (Forms Will Work)

1. **Get Supabase credentials** (you need a Supabase account):
   - Go to https://supabase.com
   - Create a project
   - Get your credentials from Project Settings > API

2. **Update .env.local:**
   ```bash
   nano .env.local
   # OR
   vim .env.local
   # OR use any text editor
   ```

3. **Replace placeholder values:**
   ```bash
   # Change this:
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here

   # To this (example):
   NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
   ```

**Current .env.local status:** ⚠️ Contains placeholder values (forms won't work)

---

### Step 4: Start the Development Server

```bash
npm run dev
```

**What this does:**
- Compiles TypeScript files
- Builds Next.js pages
- Starts server on http://localhost:3000
- Enables hot-reload (auto-refresh on code changes)

**Expected Output:**
```
   ▲ Next.js 15.1.3
   - Local:        http://localhost:3000
   - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 2.5s
```

**Server Status:** Running and watching for changes

---

### Step 5: Access the Website

#### In a Web Browser:

**Open:** http://localhost:3000

**You should see:**
- ✅ SellMyCars homepage
- ✅ Navigation menu
- ✅ Hero section
- ✅ Contact form (UI only, won't submit without Supabase)
- ✅ Location sections
- ✅ Testimonials

#### From Terminal (cURL test):

```bash
# In a new terminal window:
curl http://localhost:3000
```

**Expected:** HTML output of the homepage

---

### Step 6: Test Navigation

**Available Pages:**

1. **Home Page:**
   ```
   http://localhost:3000
   ```

2. **Locations Index:**
   ```
   http://localhost:3000/locations
   ```

3. **Specific Location Pages:**
   ```
   http://localhost:3000/locations/sydney-cbd
   http://localhost:3000/locations/western-sydney
   http://localhost:3000/locations/northern-suburbs
   http://localhost:3000/locations/eastern-suburbs
   http://localhost:3000/locations/southern-sydney
   http://localhost:3000/locations/inner-west
   ```

4. **API Endpoint (Form Submission):**
   ```bash
   curl -X POST http://localhost:3000/api/submit-form \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "phone": "0412345678",
       "email": "test@example.com",
       "make": "Toyota",
       "model": "Camry",
       "year": "2020",
       "condition": "good",
       "message": "Test message"
     }'
   ```

   **Without Supabase:** Will fail with database error
   **With Supabase:** Returns `{"success": true}`

---

### Step 7: Stop the Server

When you're done:

```bash
# Press in the terminal running npm run dev:
Ctrl + C
```

**Expected Output:**
```
^C
```

**Server Status:** Stopped

---

## Quick Reference Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (run once) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |
| `Ctrl + C` | Stop dev server |

---

## Troubleshooting

### Issue: "Cannot find module 'next'"

**Solution:**
```bash
npm install
```

### Issue: "Port 3000 is already in use"

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# OR run on different port
npm run dev -- -p 3001
```

### Issue: "Environment variables not found"

**Solution:**
```bash
# Create .env.local from example
cp .env.local.example .env.local

# Website will run but forms won't work without real Supabase credentials
```

### Issue: Forms submit but show error

**Cause:** Placeholder Supabase credentials in .env.local

**Solution:** Get real Supabase credentials and update .env.local

---

## Development Workflow

### Typical Session:

```bash
# 1. Navigate to project
cd /home/user/Webwookk

# 2. Start dev server (if not running)
npm run dev

# 3. Open browser to http://localhost:3000

# 4. Make code changes in your editor

# 5. Browser auto-refreshes with changes

# 6. When done, stop server with Ctrl+C
```

---

## File Locations

- **Project Root:** `/home/user/Webwookk`
- **Source Code:** `/home/user/Webwookk/app`
- **Components:** `/home/user/Webwookk/components`
- **Environment:** `/home/user/Webwookk/.env.local`
- **Config:** `/home/user/Webwookk/next.config.js`

---

## Current Status

- ✅ Node.js v22.21.0 installed
- ✅ npm 10.9.4 installed
- ✅ Project files migrated to root
- ⚠️ Dependencies NOT installed yet (need `npm install`)
- ⚠️ .env.local has placeholder values (forms won't work)
- ❌ Dev server NOT running yet

---

## Next Steps

Run these commands in order:

```bash
# Step 1: Navigate to project (if not already there)
cd /home/user/Webwookk

# Step 2: Install dependencies
npm install

# Step 3: Start development server
npm run dev

# Step 4: Open in browser
# Visit: http://localhost:3000
```

---

**Generated:** 2025-10-29
**Last Updated:** After Vite removal and Next.js migration to root
