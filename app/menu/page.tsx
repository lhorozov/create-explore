"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Category = "all" | "appetizers" | "soups" | "salads" | "mains" | "desserts" | "drinks";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: Category;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  icon: string;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const menuItems: MenuItem[] = [
    // Предястия
    { name: "Пържени картофи", description: "Хрупкави картофи с билки", price: "4.50 лв", category: "appetizers", isVegetarian: true, icon: "🍟" },
    { name: "Пушена скумрия", description: "Домашно пушена скумрия със зеленчуци", price: "9.90 лв", category: "appetizers", icon: "🐟" },
    { name: "Панирани калмари", description: "Хрупкави панирани калмари с лимон", price: "12.90 лв", category: "appetizers", icon: "🦑" },
    { name: "Кашкавал на скара", description: "Печен кашкавал с домати", price: "7.90 лв", category: "appetizers", isVegetarian: true, icon: "🧀" },
    
    // Супи
    { name: "Телешка супа", description: "Топла телешка супа с пресни зеленчуци", price: "6.50 лв", category: "soups", icon: "🍲" },
    { name: "Пилешка супа", description: "Домашна пилешка супа с фиде", price: "5.90 лв", category: "soups", icon: "🍜" },
    { name: "Боб супа", description: "Традиционна боб супа", price: "5.50 лв", category: "soups", isVegetarian: true, icon: "🥘" },
    { name: "Таратор", description: "Студена супа от кисело мляко и краставици", price: "4.90 лв", category: "soups", isVegetarian: true, icon: "🥒" },
    
    // Салати
    { name: "Шопска салата", description: "Класическа салата със свежи домати, краставици, чушки и сирене", price: "8.90 лв", category: "salads", isVegetarian: true, icon: "🥗" },
    { name: "Овчарска салата", description: "Салата с печени чушки, домати и сирене", price: "9.90 лв", category: "salads", isVegetarian: true, icon: "🥗" },
    { name: "Зелена салата", description: "Свежа зелена салата с маслини", price: "7.50 лв", category: "salads", isVegetarian: true, icon: "🥬" },
    { name: "Гръцка салата", description: "Домати, краставици, чушки, маслини и фета", price: "10.90 лв", category: "salads", isVegetarian: true, icon: "🥗" },
    
    // Основни ястия
    { name: "Печено агнешко", description: "Крехко агнешко с гарнитура от печени картофи", price: "24.90 лв", category: "mains", icon: "🍖" },
    { name: "Телешка пържола", description: "Сочна телешка пържола с билки", price: "22.90 лв", category: "mains", icon: "🥩" },
    { name: "Пилешки гърди", description: "Печени пилешки гърди с гарнитура по избор", price: "15.90 лв", category: "mains", icon: "🍗" },
    { name: "Свинска кавърма", description: "Традиционна кавърма със зеленчуци", price: "18.90 лв", category: "mains", icon: "🍲" },
    { name: "Сьомга на скара", description: "Прясна сьомга с гарнитура от ориз", price: "26.90 лв", category: "mains", icon: "🐟" },
    { name: "Постна мусака", description: "Традиционна постна мусака", price: "14.90 лв", category: "mains", isVegetarian: true, icon: "🥘" },
    
    // Десерти
    { name: "Баклава", description: "Домашна баклава с орехи и мед", price: "5.90 лв", category: "desserts", isVegetarian: true, icon: "🥮" },
    { name: "Крем карамел", description: "Класически крем карамел", price: "4.90 лв", category: "desserts", isVegetarian: true, icon: "🍮" },
    { name: "Тирамису", description: "Италиански тирамису", price: "6.90 лв", category: "desserts", isVegetarian: true, icon: "🍰" },
    { name: "Сладолед", description: "Избор от три вкуса", price: "3.90 лв", category: "desserts", isVegetarian: true, icon: "🍨" },
    
    // Напитки
    { name: "Домашна ракия", description: "Грозда, кайсия или слива", price: "4.50 лв", category: "drinks", icon: "🥃" },
    { name: "Червено вино", description: "Избор от български вина", price: "от 15 лв", category: "drinks", icon: "🍷" },
    { name: "Бяло вино", description: "Избор от български вина", price: "от 15 лв", category: "drinks", icon: "🥂" },
    { name: "Бира", description: "Разливна бира 0.5л", price: "4.00 лв", category: "drinks", icon: "🍺" },
    { name: "Безалкохолно", description: "Кока-кола, Фанта, Спрайт", price: "3.00 лв", category: "drinks", icon: "🥤" },
    { name: "Пресни сокове", description: "Портокал, грейпфрут", price: "5.50 лв", category: "drinks", icon: "🧃" },
  ];

  const categories = [
    { id: "all", label: "Всички" },
    { id: "appetizers", label: "Предястия" },
    { id: "soups", label: "Супи" },
    { id: "salads", label: "Салати" },
    { id: "mains", label: "Основни ястия" },
    { id: "desserts", label: "Десерти" },
    { id: "drinks", label: "Напитки" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Нашето меню</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Открийте нашите кулинарни творения
            </h1>
            <p className="text-lg text-muted-foreground">
              Всяко ястие е приготвено с любов и внимание към детайла
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id as Category)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <span className="text-xl font-bold text-primary whitespace-nowrap">{item.price}</span>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {item.isVegetarian && (
                      <Badge variant="secondary">🌱 Вегетарианско</Badge>
                    )}
                    {item.isSpicy && (
                      <Badge variant="secondary">🌶️ Лютиво</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Важна информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">🌱 Вегетариански опции</h4>
                <p className="text-muted-foreground">Предлагаме разнообразие от вегетариански ястия. Потърсете символа 🌱.</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">🥜 Алергени</h4>
                <p className="text-muted-foreground">Моля, уведомете нашия персонал за всякакви хранителни алергии или ограничения.</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">📞 Поръчки за вкъщи</h4>
                <p className="text-muted-foreground">Обадете се на +359 2 123 4567 за поръчки за вкъщи.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
