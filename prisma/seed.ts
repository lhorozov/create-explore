import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import 'dotenv/config'

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
})

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Започване на seed...')

  // Изтриване на съществуващи данни
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.reservation.deleteMany()
  await prisma.menuItem.deleteMany()
  await prisma.category.deleteMany()
  await prisma.customer.deleteMany()
  await prisma.user.deleteMany()

  // Създаване на администратор (в production трябва да се хешира паролата)
  const admin = await prisma.user.create({
    data: {
      email: 'admin@restaurant.bg',
      name: 'Администратор',
      password: 'admin123', // В production: използвай bcrypt
      role: 'ADMIN',
    },
  })

  console.log('✅ Създаден администратор:', admin.email)

  // Създаване на категории
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Предястия',
        nameEn: 'Appetizers',
        order: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Супи',
        nameEn: 'Soups',
        order: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Салати',
        nameEn: 'Salads',
        order: 3,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Основни ястия',
        nameEn: 'Main Dishes',
        order: 4,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Десерти',
        nameEn: 'Desserts',
        order: 5,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Напитки',
        nameEn: 'Beverages',
        order: 6,
      },
    }),
  ])

  console.log(`✅ Създадени ${categories.length} категории`)

  // Създаване на менюта
  const menuItems = await Promise.all([
    // Предястия
    prisma.menuItem.create({
      data: {
        name: 'Пъстърва на скара',
        nameEn: 'Grilled Trout',
        description: 'Прясна пъстърва с билки и лимон',
        price: 12.90,
        categoryId: categories[0].id,
        featured: true,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Пилешки крилца',
        nameEn: 'Chicken Wings',
        description: 'Пикантни крилца с BBQ сос',
        price: 9.50,
        categoryId: categories[0].id,
        available: true,
      },
    }),

    // Супи
    prisma.menuItem.create({
      data: {
        name: 'Телешка супа',
        nameEn: 'Beef Soup',
        description: 'Традиционна телешка супа с пресни зеленчуци',
        price: 6.50,
        categoryId: categories[1].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Пилешка супа',
        nameEn: 'Chicken Soup',
        description: 'Ароматна супа с пилешко месо',
        price: 5.90,
        categoryId: categories[1].id,
        available: true,
      },
    }),

    // Салати
    prisma.menuItem.create({
      data: {
        name: 'Шопска салата',
        nameEn: 'Shopska Salad',
        description: 'Класическа салата с домати, краставици, чушки и сирене',
        price: 8.90,
        categoryId: categories[2].id,
        featured: true,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Гръцка салата',
        nameEn: 'Greek Salad',
        description: 'Салата с маслини, сирене фета и зехтин',
        price: 9.50,
        categoryId: categories[2].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Цезар салата',
        nameEn: 'Caesar Salad',
        description: 'Пилешко филе, айсберг, пармезан и крутони',
        price: 11.90,
        categoryId: categories[2].id,
        available: true,
      },
    }),

    // Основни ястия
    prisma.menuItem.create({
      data: {
        name: 'Печено агнешко',
        nameEn: 'Roasted Lamb',
        description: 'Крехко агнешко с гарнитура от печени картофи',
        price: 24.90,
        categoryId: categories[3].id,
        featured: true,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Телешка пържола',
        nameEn: 'Beef Steak',
        description: 'Сочна телешка пържола с гарнитура по избор',
        price: 22.90,
        categoryId: categories[3].id,
        featured: true,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Сьомга на скара',
        nameEn: 'Grilled Salmon',
        description: 'Прясна сьомга с лимон и билки',
        price: 26.90,
        categoryId: categories[3].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Пилешко филе',
        nameEn: 'Chicken Fillet',
        description: 'Сочно пилешко филе с гъби',
        price: 16.90,
        categoryId: categories[3].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Вегетариански мусака',
        nameEn: 'Vegetarian Moussaka',
        description: 'Традиционна мусака със зеленчуци',
        price: 14.90,
        categoryId: categories[3].id,
        available: true,
      },
    }),

    // Десерти
    prisma.menuItem.create({
      data: {
        name: 'Баклава',
        nameEn: 'Baklava',
        description: 'Домашна баклава с орехи и мед',
        price: 5.90,
        categoryId: categories[4].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Тирамису',
        nameEn: 'Tiramisu',
        description: 'Класически италиански десерт',
        price: 6.90,
        categoryId: categories[4].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Крем карамел',
        nameEn: 'Creme Caramel',
        description: 'Нежен крем с карамелен сос',
        price: 5.50,
        categoryId: categories[4].id,
        available: true,
      },
    }),

    // Напитки
    prisma.menuItem.create({
      data: {
        name: 'Кока-кола',
        nameEn: 'Coca-Cola',
        description: '330ml',
        price: 2.50,
        categoryId: categories[5].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Натурален сок',
        nameEn: 'Fresh Juice',
        description: 'Прясно изцеден портокалов сок',
        price: 4.50,
        categoryId: categories[5].id,
        available: true,
      },
    }),
    prisma.menuItem.create({
      data: {
        name: 'Кафе еспресо',
        nameEn: 'Espresso Coffee',
        description: 'Ароматно еспресо',
        price: 2.90,
        categoryId: categories[5].id,
        available: true,
      },
    }),
  ])

  console.log(`✅ Създадени ${menuItems.length} менюта`)

  // Създаване на примерни клиенти
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'Иван Петров',
        email: 'ivan.petrov@example.com',
        phone: '+359888123456',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Мария Георгиева',
        email: 'maria.georgieva@example.com',
        phone: '+359888234567',
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Петър Димитров',
        email: 'petar.dimitrov@example.com',
        phone: '+359888345678',
      },
    }),
  ])

  console.log(`✅ Създадени ${customers.length} клиенти`)

  // Създаване на примерни резервации
  const reservations = await Promise.all([
    prisma.reservation.create({
      data: {
        customerId: customers[0].id,
        date: new Date('2025-12-15'),
        time: '19:00',
        guests: 4,
        status: 'CONFIRMED',
        notes: 'Столче за бебе',
      },
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[1].id,
        date: new Date('2025-12-15'),
        time: '20:00',
        guests: 2,
        status: 'PENDING',
      },
    }),
    prisma.reservation.create({
      data: {
        customerId: customers[2].id,
        date: new Date('2025-12-16'),
        time: '18:30',
        guests: 6,
        status: 'CONFIRMED',
        notes: 'Рожден ден',
      },
    }),
  ])

  console.log(`✅ Създадени ${reservations.length} резервации`)

  // Създаване на примерна поръчка
  const order = await prisma.order.create({
    data: {
      customerId: customers[0].id,
      status: 'DELIVERED',
      totalPrice: 45.70,
      orderItems: {
        create: [
          {
            menuItemId: menuItems[4].id, // Шопска салата
            quantity: 1,
            price: menuItems[4].price,
          },
          {
            menuItemId: menuItems[7].id, // Печено агнешко
            quantity: 1,
            price: menuItems[7].price,
          },
          {
            menuItemId: menuItems[12].id, // Баклава
            quantity: 2,
            price: menuItems[12].price * 2,
          },
        ],
      },
    },
  })

  console.log('✅ Създадена примерна поръчка:', order.id)

  console.log('🎉 Seed завърши успешно!')
}

main()
  .catch((e) => {
    console.error('❌ Грешка при seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
