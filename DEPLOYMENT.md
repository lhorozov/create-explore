# 🚀 Deployment Guide - Vercel + Turso

This guide walks you through deploying the restaurant application to Vercel with Turso cloud database.

## Prerequisites

- GitHub account
- Vercel account (free tier)
- Turso account (free tier)

---

## Step 1: Setup Turso Database

### 1.1 Install Turso CLI

**macOS/Linux:**
```bash
curl -sSfL https://get.tur.so/install.sh | bash
```

**Windows:**
Download from: https://docs.turso.tech/cli/installation

### 1.2 Login and Create Database

```bash
# Login
turso auth login

# Create database
turso db create restaurant-db

# Get connection details
turso db show restaurant-db --url
# Save this URL: libsql://restaurant-db-yourname.turso.io

# Create authentication token
turso db tokens create restaurant-db
# Save this token: eyJhbGc...
```

---

## Step 2: Prepare Local Environment

### 2.1 Setup Environment Variables

Create `.env.production.local`:

```env
TURSO_DATABASE_URL="libsql://restaurant-db-yourname.turso.io"
TURSO_AUTH_TOKEN="your-token-from-step-1.2"
NODE_ENV="production"
```

### 2.2 Push Schema to Turso

```bash
# Load production environment
export $(cat .env.production.local | xargs)

# Push database schema
pnpm run db:push

# Seed with initial data
pnpm run db:seed
```

### 2.3 Verify Database

```bash
# Open Turso shell
turso db shell restaurant-db

# Check tables
.tables
# Should show: categories, customers, menu_items, etc.

# Count records
SELECT COUNT(*) FROM menu_items;
# Should show: 18

# Exit
.exit
```

---

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub

```bash
git add .
git commit -m "feat: add Turso production support"
git push origin master
```

### 3.2 Connect to Vercel

1. Go to https://vercel.com/
2. Click "Import Project"
3. Select your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Build Command: `pnpm run build`
   - Output Directory: `.next`

### 3.3 Add Environment Variables

In Vercel dashboard → Settings → Environment Variables, add:

```
TURSO_DATABASE_URL = libsql://restaurant-db-yourname.turso.io
TURSO_AUTH_TOKEN = your-token-here
NODE_ENV = production
NEXTAUTH_SECRET = generate-random-string-here
NEXTAUTH_URL = https://your-app.vercel.app
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3.4 Deploy

Click "Deploy" button. Vercel will:
1. Clone your repository
2. Install dependencies
3. Build the project
4. Deploy to edge network

---

## Step 4: Verify Deployment

### 4.1 Check API Endpoints

```bash
# Replace with your Vercel URL
curl https://your-app.vercel.app/api/menu
curl https://your-app.vercel.app/api/categories
curl https://your-app.vercel.app/api/stats
```

### 4.2 Check Logs

Vercel dashboard → Deployments → View Function Logs

Look for:
- ✅ "Prisma Client initialized"
- ✅ API responses returning data
- ❌ Any database connection errors

---

## Step 5: Ongoing Maintenance

### Update Database Schema

```bash
# 1. Update prisma/schema.prisma locally
# 2. Push changes to Turso
export TURSO_DATABASE_URL="libsql://..."
export TURSO_AUTH_TOKEN="..."
pnpm run db:push

# 3. Deploy to Vercel (auto-deploys on git push)
git add prisma/schema.prisma
git commit -m "update: database schema"
git push
```

### Monitor Turso Usage

```bash
# Check database usage
turso db show restaurant-db

# View metrics
turso db inspect restaurant-db
```

---

## Troubleshooting

### Issue: "Database connection failed"

**Check:**
```bash
# Verify environment variables in Vercel
vercel env ls

# Test locally with production env
export $(cat .env.production.local | xargs)
pnpm run build
pnpm start
```

### Issue: "Too many connections"

Turso free tier limits:
- 500 databases
- 1B row reads/month
- 25M row writes/month

**Solution:** Upgrade to Turso Starter plan or optimize queries.

### Issue: "Prisma Client not found"

**Fix:**
```bash
# Regenerate Prisma Client
pnpm run db:generate
git add -f node_modules/.prisma
git commit -m "fix: add generated prisma client"
git push
```

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
