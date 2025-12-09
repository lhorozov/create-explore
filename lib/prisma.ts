import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

// Global type for Prisma singleton
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Determine database URL based on environment
function getDatabaseUrl() {
  const isDevelopment = process.env.NODE_ENV !== 'production'
  
  // Priority: TURSO_DATABASE_URL > DATABASE_URL > local file
  if (process.env.TURSO_DATABASE_URL) {
    return process.env.TURSO_DATABASE_URL
  }
  
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL
  }
  
  // Development fallback to local SQLite
  if (isDevelopment) {
    return 'file:./dev.db'
  }
  
  throw new Error(
    'DATABASE_URL or TURSO_DATABASE_URL must be set in production. ' +
    'For local development, it defaults to file:./dev.db'
  )
}

// Create Prisma adapter with proper configuration
const databaseUrl = getDatabaseUrl()
const adapter = new PrismaLibSql({
  url: databaseUrl,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

// Create Prisma Client with singleton pattern
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

// Store in global scope for hot reload (development only)
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
