import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/customers - Взимане на клиенти
export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: {
            reservations: true,
            orders: true,
          },
        },
      },
    })

    return NextResponse.json(customers)
  } catch (error) {
    console.error('Грешка при взимане на клиентите:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на клиентите' },
      { status: 500 }
    )
  }
}
