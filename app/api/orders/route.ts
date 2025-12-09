import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/orders - Взимане на поръчки
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId')
    const status = searchParams.get('status')

    const orders = await prisma.order.findMany({
      where: {
        ...(customerId && { customerId }),
        ...(status && { status: status as any }),
      },
      include: {
        customer: true,
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Грешка при взимане на поръчките:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на поръчките' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Създаване на поръчка
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerName, customerEmail, customerPhone, items, notes } = body

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

    // Изчисляване на обща цена
    let totalPrice = 0
    const orderItemsData = []

    for (const item of items) {
      const menuItem = await prisma.menuItem.findUnique({
        where: { id: item.menuItemId },
      })

      if (!menuItem) {
        return NextResponse.json(
          { error: `Ястието с ID ${item.menuItemId} не съществува` },
          { status: 404 }
        )
      }

      const itemTotal = menuItem.price * item.quantity
      totalPrice += itemTotal

      orderItemsData.push({
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price: itemTotal,
      })
    }

    // Създаване на поръчка
    const order = await prisma.order.create({
      data: {
        customerId: customer.id,
        totalPrice,
        notes,
        status: 'PENDING',
        orderItems: {
          create: orderItemsData,
        },
      },
      include: {
        customer: true,
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Грешка при създаване на поръчка:', error)
    return NextResponse.json(
      { error: 'Грешка при създаване на поръчка' },
      { status: 500 }
    )
  }
}

// PATCH /api/orders - Актуализиране на статус на поръчка
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status } = body

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: {
        customer: true,
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error('Грешка при актуализиране на поръчка:', error)
    return NextResponse.json(
      { error: 'Грешка при актуализиране на поръчка' },
      { status: 500 }
    )
  }
}
