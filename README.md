# 🍽️ Restaurant Management System

A modern, full-stack restaurant management web application built with Next.js 15, TypeScript, Prisma 7, and SQLite. This project demonstrates professional-grade architecture, database design, and RESTful API implementation.

## 🎯 Project Overview

This is a comprehensive restaurant website featuring both customer-facing pages and an admin dashboard for managing reservations, orders, menu items, and customer data. The application showcases modern web development practices and real-world business logic implementation.

## ✨ Key Features

### Customer-Facing Features
- **Interactive Homepage** with hero video background and featured dishes
- **Dynamic Menu System** with categories and filtering
- **Online Reservations** with customer management
- **Gallery Section** with categorized restaurant photos
- **About & Contact Pages** with business information
- **Testimonials & Reviews** from satisfied customers

### Admin Dashboard Features
- **Real-time Statistics** - revenue, reservations, customer metrics
- **Reservation Management** - view, confirm, and track bookings
- **Order Management** - monitor and update order status
- **Menu Administration** - add, edit, and manage menu items
- **Customer Database** - comprehensive customer information
- **Reports & Analytics** - business insights and trends

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon system

### Backend & Database
- **Prisma 7** - Next-generation ORM
- **SQLite** - Embedded database (production-ready for PostgreSQL)
- **@libsql/client** - High-performance database adapter
- **Next.js API Routes** - Serverless API endpoints

### Development Tools
- **ESLint** - Code linting
- **pnpm** - Fast, disk space efficient package manager
- **tsx** - TypeScript execution for seed scripts

## 📊 Database Architecture

### Entity Relationship Design

```
Users (Admin/Staff)
├── id, email, name, password, role
└── Roles: ADMIN, MANAGER, STAFF

Customers
├── id, name, email, phone
├── → Reservations (1:many)
└── → Orders (1:many)

Reservations
├── id, date, time, guests, status, notes
├── → Customer (many:1)
└── Status: PENDING, CONFIRMED, CANCELLED, COMPLETED

Categories
├── id, name, nameEn, order
└── → MenuItems (1:many)

MenuItems
├── id, name, description, price, imageUrl
├── available, featured
├── → Category (many:1)
└── → OrderItems (1:many)

Orders
├── id, totalPrice, status, notes
├── → Customer (many:1)
├── → OrderItems (1:many)
└── Status: PENDING, CONFIRMED, PREPARING, READY, DELIVERED, CANCELLED

OrderItems
├── id, quantity, price
├── → Order (many:1)
└── → MenuItem (many:1)
```

## 🔌 API Endpoints

### Menu & Categories
```typescript
GET    /api/menu          // Get all menu items (with filters)
GET    /api/categories    // Get all categories with item counts
```

### Reservations
```typescript
GET    /api/reservations  // List reservations (with filters)
POST   /api/reservations  // Create new reservation
PATCH  /api/reservations  // Update reservation status
```

### Orders
```typescript
GET    /api/orders        // List orders (with filters)
POST   /api/orders        // Create new order
PATCH  /api/orders        // Update order status
```

### Customers & Analytics
```typescript
GET    /api/customers     // Get all customers with stats
GET    /api/stats         // Dashboard statistics & metrics
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/lhorozov/create-explore.git
cd create-explore
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
# .env file is already configured for development
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Initialize the database**
```bash
# Push schema to database
pnpm exec prisma db push

# Generate Prisma Client
pnpm exec prisma generate

# Seed with initial data
pnpm run db:seed
```

5. **Start the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Database Seeding

The project includes a comprehensive seed script that populates the database with:

- **1 Admin User** (admin@restaurant.bg / admin123)
- **6 Food Categories** (Appetizers, Soups, Salads, Main Dishes, Desserts, Beverages)
- **18 Menu Items** with prices and descriptions
- **3 Sample Customers** with contact information
- **3 Sample Reservations** with different statuses
- **1 Sample Order** with multiple items

Run the seed script anytime:
```bash
pnpm run db:seed
```

## 🗄️ Database Management

### Useful Commands
```bash
# View database in browser
pnpm run db:studio

# Push schema changes
pnpm run db:push

# Create migration (production)
pnpm run db:migrate

# Generate Prisma Client
pnpm run db:generate
```

## 📁 Project Structure

```
create-explore/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   ├── categories/
│   │   ├── customers/
│   │   ├── menu/
│   │   ├── orders/
│   │   ├── reservations/
│   │   └── stats/
│   ├── dashboard/            # Admin Dashboard
│   │   ├── customers/
│   │   ├── menu/
│   │   ├── orders/
│   │   ├── reports/
│   │   ├── reservations/
│   │   └── settings/
│   ├── about/
│   ├── contacts/
│   ├── gallery/
│   ├── login/
│   ├── menu/
│   ├── news/
│   ├── layout.tsx
│   └── page.tsx
├── components/               # React Components
│   ├── ui/                   # shadcn/ui components
│   ├── navigation.tsx
│   └── footer.tsx
├── lib/                      # Utilities
│   ├── prisma.ts            # Prisma Client singleton
│   └── utils.ts             # Helper functions
├── prisma/                   # Database
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Seed script
├── public/                   # Static assets
└── dev.db                    # SQLite database file
```

## 🎨 UI Components

The project uses **shadcn/ui** components for a consistent, accessible design:

- Navigation Menu
- Cards & Dialogs
- Buttons & Inputs
- Tables & Tabs
- Avatars & Badges
- Dropdown Menus
- Separators & Sheets

## 🔒 Authentication (Planned)

Future implementation will include:
- NextAuth.js integration
- Role-based access control (RBAC)
- Protected admin routes
- Session management

## 📈 Future Enhancements

- [ ] Customer authentication & profiles
- [ ] Email notifications (reservations, orders)
- [ ] SMS confirmations
- [ ] Payment integration (Stripe)
- [ ] Real-time order tracking
- [ ] Advanced analytics & reporting
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Image uploads for menu items
- [ ] QR code menu generation
- [ ] Table management system
- [ ] Inventory tracking

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Production Database
For production, switch to PostgreSQL:
```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
}
```

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**Lyuben Horozov**  
Full-Stack Developer

- GitHub: [@lhorozov](https://github.com/lhorozov)
- LinkedIn: [@lyubenhorozov](https://www.linkedin.com/in/lyubenhorozov)

---

## 🎓 Technical Highlights for Recruiters

This project demonstrates:

✅ **Full-Stack Development** - End-to-end application development  
✅ **Modern React/Next.js** - Latest App Router patterns and Server Components  
✅ **Database Design** - Normalized schema with proper relationships  
✅ **TypeScript Proficiency** - Fully typed codebase  
✅ **RESTful API Design** - Clean, scalable API architecture  
✅ **State Management** - Efficient data fetching and caching  
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS  
✅ **Code Organization** - Clean architecture and separation of concerns  
✅ **Git Workflow** - Professional version control practices  
✅ **Documentation** - Clear, comprehensive documentation  

**Built with attention to:** Performance, Scalability, Maintainability, User Experience, and Best Practices.
