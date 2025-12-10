# 🚀 Deployment Guide - Vercel + Neon PostgreSQL# 🚀 Deployment Guide - Vercel + Turso



This guide walks you through deploying the restaurant application to Vercel with Neon serverless PostgreSQL database.This guide walks you through deploying the restaurant application to Vercel with Turso cloud database.



## Prerequisites## Prerequisites



- GitHub account- GitHub account

- Vercel account (free tier)- Vercel account (free tier)

- Neon account (free tier)- Turso account (free tier)



------



## Step 1: Setup Neon Database## Step 1: Setup Turso Database



### 1.1 Create Neon Account & Project### 1.1 Install Turso CLI



1. Go to [neon.tech](https://neon.tech)**macOS/Linux:**

2. Sign up with GitHub (recommended) or email```bash

3. Click **"Create a project"**curl -sSfL https://get.tur.so/install.sh | bash

```

### 1.2 Configure Database

**Windows:**

**Project Settings:**Download from: https://docs.turso.tech/cli/installation

- **Name**: `restaurant-db`

- **Region**: **AWS Europe (Frankfurt)** - `eu-central-1` (best for Europe)### 1.2 Login and Create Database

- **PostgreSQL Version**: Latest (15+)

- **Compute**: Shared (free tier)```bash

# Login

Click **"Create Project"**turso auth login



### 1.3 Get Connection String# Create database

turso db create restaurant-db

After project creation, you'll see the connection string:

# Get connection details

```turso db show restaurant-db --url

postgresql://neondb_owner:XXXXX@ep-XXXXX-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require# Save this URL: libsql://restaurant-db-yourname.turso.io

```

# Create authentication token

**Important Notes:**turso db tokens create restaurant-db

- ✅ Use the **pooled connection** (contains `-pooler`) for Vercel# Save this token: eyJhbGc...

- ✅ Copy and save this string securely```

- ✅ This is your `DATABASE_URL` for production

---

---

## Step 2: Prepare Local Environment

## Step 2: Prepare Local Environment

### 2.1 Setup Environment Variables

### 2.1 Setup Environment Variables

Create `.env.production.local`:

Update your `.env` file:

```env

```envTURSO_DATABASE_URL="libsql://restaurant-db-yourname.turso.io"

# Neon PostgreSQL DatabaseTURSO_AUTH_TOKEN="your-token-from-step-1.2"

DATABASE_URL="postgresql://neondb_owner:XXXXX@ep-XXXXX-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"NODE_ENV="production"

```

# NextAuth (for future authentication)

NEXTAUTH_SECRET="your-secret-key-here-change-in-production"### 2.2 Push Schema to Turso

NEXTAUTH_URL="http://localhost:3000"

``````bash

# Load production environment

### 2.2 Push Schema to Neonexport $(cat .env.production.local | xargs)



```bash# Push database schema

# Push Prisma schema to Neon databasepnpm run db:push

pnpm prisma db push

# Seed with initial data

# Verify schema was createdpnpm run db:seed

pnpm prisma studio```

# Opens Prisma Studio at http://localhost:5555

```### 2.3 Verify Database



### 2.3 Seed Database```bash

# Open Turso shell

```bashturso db shell restaurant-db

# Seed with initial restaurant data

pnpm run db:seed# Check tables

.tables

# Expected output:# Should show: categories, customers, menu_items, etc.

# 🌱 Започване на seed...

# ✅ Създаден администратор: admin@restaurant.bg# Count records

# ✅ Създадени 6 категорииSELECT COUNT(*) FROM menu_items;

# ✅ Създадени 18 менюта# Should show: 18

# ✅ Създадени 3 клиенти

# ✅ Създадени 3 резервации# Exit

# ✅ Създадена примерна поръчка.exit

# 🎉 Seed завърши успешно!```

```

---

### 2.4 Test Locally

## Step 3: Deploy to Vercel

```bash

# Start development server### 3.1 Push to GitHub

pnpm run dev

```bash

# Test API endpointsgit add .

curl http://localhost:3000/api/categoriesgit commit -m "feat: add Turso production support"

curl http://localhost:3000/api/menugit push origin master

curl http://localhost:3000/api/stats```

```

### 3.2 Connect to Vercel

---

1. Go to https://vercel.com/

## Step 3: Deploy to Vercel2. Click "Import Project"

3. Select your GitHub repository

### 3.1 Push to GitHub4. Configure project:

   - Framework Preset: Next.js

```bash   - Build Command: `pnpm run build`

# Make sure all changes are committed   - Output Directory: `.next`

git add .

git commit -m "chore: ready for deployment"### 3.3 Add Environment Variables

git push origin master

```In Vercel dashboard → Settings → Environment Variables, add:



### 3.2 Connect Vercel to GitHub```

TURSO_DATABASE_URL = libsql://restaurant-db-yourname.turso.io

1. Go to [vercel.com](https://vercel.com)TURSO_AUTH_TOKEN = your-token-here

2. Click **"Add New Project"**NODE_ENV = production

3. Import your GitHub repository: `create-explore`NEXTAUTH_SECRET = generate-random-string-here

4. Configure project:NEXTAUTH_URL = https://your-app.vercel.app

   - **Framework Preset**: Next.js```

   - **Root Directory**: `./`

   - **Build Command**: `pnpm run build` (auto-detected)**Generate NEXTAUTH_SECRET:**

   - **Output Directory**: `.next` (auto-detected)```bash

openssl rand -base64 32

### 3.3 Add Environment Variables```



**CRITICAL:** Add environment variables BEFORE first deployment!### 3.4 Deploy



In Vercel project settings:Click "Deploy" button. Vercel will:

1. Go to **Settings** → **Environment Variables**1. Clone your repository

2. Add `DATABASE_URL` with your Neon connection string2. Install dependencies

3. Select: ✓ Production, ✓ Preview, ✓ Development3. Build the project

4. Deploy to edge network

### 3.4 Deploy

---

Click **"Deploy"**

## Step 4: Verify Deployment

Vercel will:

1. Clone your repository### 4.1 Check API Endpoints

2. Install dependencies

3. Run `prisma generate````bash

4. Build Next.js app# Replace with your Vercel URL

5. Deploy to CDNcurl https://your-app.vercel.app/api/menu

curl https://your-app.vercel.app/api/categories

**Build time:** ~2-3 minutescurl https://your-app.vercel.app/api/stats

```

---

### 4.2 Check Logs

## Step 4: Verify Deployment

Vercel dashboard → Deployments → View Function Logs

### 4.1 Test API Endpoints

Look for:

```bash- ✅ "Prisma Client initialized"

# Test categories API- ✅ API responses returning data

curl https://your-app.vercel.app/api/categories- ❌ Any database connection errors



# Expected: JSON array with categories---



# Test menu API## Step 5: Ongoing Maintenance

curl https://your-app.vercel.app/api/menu

### Update Database Schema

# Test stats API

curl https://your-app.vercel.app/api/stats```bash

```# 1. Update prisma/schema.prisma locally

# 2. Push changes to Turso

### 4.2 Test Dashboardexport TURSO_DATABASE_URL="libsql://..."

export TURSO_AUTH_TOKEN="..."

1. Open `https://your-app.vercel.app/dashboard`pnpm run db:push

2. Verify statistics load

3. Check menu, reservations, customers pages# 3. Deploy to Vercel (auto-deploys on git push)

git add prisma/schema.prisma

---git commit -m "update: database schema"

git push

## Troubleshooting```



### Issue: "500 Internal Server Error" on API routes### Monitor Turso Usage



**Fix:**```bash

1. Verify `DATABASE_URL` is set in Vercel Environment Variables# Check database usage

2. Check Neon database is not paused (visit Neon dashboard)turso db show restaurant-db

3. Verify connection string includes `?sslmode=require`

# View metrics

### Issue: API returns empty arraysturso db inspect restaurant-db

```

**Fix:**

```bash---

# Seed production database

pnpm run db:seed## Troubleshooting

```

### Issue: "Database connection failed"

### Issue: Cold starts are slow

**Check:**

**Expected:**```bash

- First request after 5 min inactivity: ~2-3 seconds# Verify environment variables in Vercel

- Subsequent requests: ~100-300msvercel env ls



This is normal for Neon's free tier (auto-suspend).# Test locally with production env

export $(cat .env.production.local | xargs)

---pnpm run build

pnpm start

## Performance Tips```



### 1. Connection Pooling### Issue: "Too many connections"

✅ Already configured with `-pooler` in connection string

Turso free tier limits:

### 2. Database Indexes- 500 databases

Consider adding indexes for frequently queried fields in `schema.prisma`- 1B row reads/month

- 25M row writes/month

### 3. Caching

Implement Next.js revalidation for static data**Solution:** Upgrade to Turso Starter plan or optimize queries.



---### Issue: "Prisma Client not found"



## Cost: $0/month 🎉**Fix:**

```bash

- **Neon Free Tier**: 0.5 GB storage, autoscaling# Regenerate Prisma Client

- **Vercel Hobby**: Unlimited deployments, 100 GB bandwidthpnpm run db:generate

git add -f node_modules/.prisma

---git commit -m "fix: add generated prisma client"

git push

**🎉 Your restaurant app is now live!**```


---

## Cost Breakdown

### Free Tier (Good for 50+ restaurants)

- **Vercel Hobby:** $0/month
  - 100 GB bandwidth
  - 100 GB-hours compute
  - Unlimited deployments

- **Turso Free:** $0/month
  - 9 GB storage
  - 1 billion row reads
  - 25 million row writes
  - 500 databases

**Total:** $0/month for small to medium usage!

### Paid Tiers (If needed)

- **Vercel Pro:** $20/month
- **Turso Starter:** $29/month

---

## Next Steps

- [ ] Setup custom domain in Vercel
- [ ] Configure HTTPS
- [ ] Add monitoring (Sentry, LogRocket)
- [ ] Setup backup strategy
- [ ] Configure CDN for images
- [ ] Add rate limiting
- [ ] Implement caching

---

**Congratulations! Your restaurant app is now live! 🎉**
