import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/categories - Взимане на всички категории
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        order: 'asc',
      },
      include: {
        _count: {
          select: { menuItems: true },
        },
      },
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Грешка при взимане на категориите:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на категориите' },
      { status: 500 }
    )
  }
}
