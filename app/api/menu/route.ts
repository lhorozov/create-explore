import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/menu - Взимане на всички ястия от менюто
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('categoryId')
    const featured = searchParams.get('featured')

    const menuItems = await prisma.menuItem.findMany({
      where: {
        ...(categoryId && { categoryId }),
        ...(featured === 'true' && { featured: true }),
        available: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        name: 'asc',
      },
    })

    return NextResponse.json(menuItems)
  } catch (error) {
    console.error('Грешка при взимане на менюто:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на менюто' },
      { status: 500 }
    )
  }
}
