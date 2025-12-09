import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/stats - Взимане на статистики за dashboard
export async function GET() {
  try {
    // Общ брой резервации за днес и предстоящи
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const todayReservations = await prisma.reservation.count({
      where: {
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    })

    // Общ брой клиенти
    const totalCustomers = await prisma.customer.count()

    // Общ брой поръчки за месеца
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    const monthlyOrders = await prisma.order.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    })

    // Общ приход за месеца
    const monthlyRevenue = await prisma.order.aggregate({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
        status: {
          in: ['DELIVERED', 'READY'],
        },
      },
      _sum: {
        totalPrice: true,
      },
    })

    // Най-популярни ястия този месец
    const popularDishes = await prisma.orderItem.groupBy({
      by: ['menuItemId'],
      _sum: {
        quantity: true,
      },
      _count: {
        _all: true,
      },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
      take: 5,
    })

    // Вземане на информация за популярните ястия
    const popularDishesWithDetails = await Promise.all(
      popularDishes.map(async (dish) => {
        const menuItem = await prisma.menuItem.findUnique({
          where: { id: dish.menuItemId },
        })
        return {
          ...menuItem,
          totalOrders: dish._sum.quantity,
        }
      })
    )

    // Скорошни резервации
    const recentReservations = await prisma.reservation.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        customer: true,
      },
    })

    // Скорошни поръчки
    const recentOrders = await prisma.order.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
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

    return NextResponse.json({
      todayReservations,
      totalCustomers,
      monthlyOrders,
      monthlyRevenue: monthlyRevenue._sum.totalPrice || 0,
      popularDishes: popularDishesWithDetails,
      recentReservations,
      recentOrders,
    })
  } catch (error) {
    console.error('Грешка при взимане на статистиките:', error)
    return NextResponse.json(
      { error: 'Грешка при взимане на статистиките' },
      { status: 500 }
    )
  }
}
