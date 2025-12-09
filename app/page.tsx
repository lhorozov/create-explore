import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Star, UtensilsCrossed, ChefHat, Heart } from "lucide-react";

export default function Home() {
  const featuredDishes = [
    {
      name: "Шопска салата",
      description: "Класическа салата със свежи домати, краставици, чушки и сирене",
      price: "8.90 лв",
      category: "Предястия",
      image: "🥗"
    },
    {
      name: "Телешка супа",
      description: "Топла телешка супа с пресни зеленчуци",
      price: "6.50 лв",
      category: "Супи",
      image: "🍲"
    },
    {
      name: "Печено агнешко",
      description: "Крехко агнешко с гарнитура от печени картофи",
      price: "24.90 лв",
      category: "Основни",
      image: "🍖"
    },
    {
      name: "Баклава",
      description: "Домашна баклава с орехи и мед",
      price: "5.90 лв",
      category: "Десерти",
      image: "🥮"
    }
  ];

  const testimonials = [
    {
      name: "Иван Петров",
      text: "Най-доброто място за автентична българска храна в София! Всичко е прясно и вкусно.",
      rating: 5
    },
    {
      name: "Мария Георгиева",
      text: "Страхотна атмосфера и отлично обслужване. Препоръчвам на всеки!",
      rating: 5
    },
    {
      name: "Димитър Иванов",
      text: "Агнешкото е невероятно! Ще се връщам отново и отново.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              Добре дошли в Ресторант Вкус
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Автентична българска кухня с модерен twist
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Открийте вкуса на традицията в съчетание с иновациите. Всяко ястие е приготвено с любов и внимание към детайла.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/menu">
                  <UtensilsCrossed className="mr-2 h-5 w-5" />
                  Виж менюто
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacts">
                  Направи резервация
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <ChefHat className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Професионални готвачи</CardTitle>
                <CardDescription>
                  Нашият екип от опитни шеф-готвачи създава кулинарни шедьоври всеки ден
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Прясна храна</CardTitle>
                <CardDescription>
                  Използваме само най-качествени и пресни продукти от местни доставчици
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Отлично обслужване</CardTitle>
                <CardDescription>
                  Нашият персонал е тук, за да направи вашето изживяване незабравимо
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Специални предложения</h2>
            <p className="text-muted-foreground text-lg">
              Открийте някои от най-популярните ни ястия
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{dish.image}</div>
                  <Badge className="w-fit mb-2">{dish.category}</Badge>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardDescription>{dish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/menu">Виж цялото меню</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <MapPin className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Локация</h3>
              <p className="text-muted-foreground">ул. Витоша 15<br />София 1000</p>
            </div>
            <div className="space-y-4">
              <Clock className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Работно време</h3>
              <p className="text-muted-foreground">Пон-Пет: 11:00-23:00<br />Съб-Нед: 10:00-24:00</p>
            </div>
            <div className="space-y-4">
              <Phone className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-bold">Резервации</h3>
              <p className="text-muted-foreground">+359 2 123 4567<br />info@restaurant-vkus.bg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Какво казват нашите клиенти</h2>
            <p className="text-muted-foreground text-lg">
              Прочетете отзивите на наши доволни гости
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готови за незабравимо изживяване?</h2>
          <p className="text-lg mb-8 opacity-90">Направете вашата резервация днес!</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacts">Свържете се с нас</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
