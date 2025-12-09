import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/reservations - Взимане на резервации
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const customerId = searchParams.get('customerId')

    const reservations = await prisma.reservation.findMany({
      where: {
        ...(date && { 
          date: {
            gte: new Date(date),
            lt: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000),
          }
        }),
        ...(customerId && { customerId }),
      },
      include: {
        customer: true,
      },
      orderBy: {
        date: 'desc',
      },
    })

    return NextResponse.json(reservations)
  } catch (error) {
    console.error('Грешка при взимане на резервациите:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на резервациите' },
      { status: 500 }
    )
  }
}

// POST /api/reservations - Създаване на резервация
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerName, customerEmail, customerPhone, date, time, guests, notes } = body

    // Проверка дали клиентът съществува, ако не - създаване
    let customer = await prisma.customer.findUnique({
      where: { email: customerEmail },
    })

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
        },
      })
    }

    // Създаване на резервация
    const reservation = await prisma.reservation.create({
      data: {
        customerId: customer.id,
        date: new Date(date),
        time,
        guests: parseInt(guests),
        notes,
        status: 'PENDING',
      },
      include: {
        customer: true,
      },
    })

    return NextResponse.json(reservation, { status: 201 })
  } catch (error) {
    console.error('Грешка при създаване на резервация:', error)
    return NextResponse.json(
      { error: 'Грешка при създаване на резервация' },
      { status: 500 }
    )
  }
}

// PATCH /api/reservations - Актуализиране на статус на резервация
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status } = body

    const reservation = await prisma.reservation.update({
      where: { id },
      data: { status },
      include: {
        customer: true,
      },
    })

    return NextResponse.json(reservation)
  } catch (error) {
    console.error('Грешка при актуализиране на резервация:', error)
    return NextResponse.json(
      { error: 'Грешка при актуализиране на резервация' },
      { status: 500 }
    )
  }
}
