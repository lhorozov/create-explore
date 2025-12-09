import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export default function NewsPage() {
  const news = [
    {
      title: "Ново сезонно меню за пролетта",
      date: "15 Март 2025",
      category: "Меню",
      excerpt: "Открийте нашите нови пролетни специалитети, вдъхновени от сезонните продукти.",
      content: "Нашият шеф-готвач Иван е създал специално меню с пресни зеленчуци и билки. Не пропускайте специалната агнешка вратна пържола с розмарин.",
      icon: "🌸"
    },
    {
      title: "Музикална вечер - Всяка петък",
      date: "10 Март 2025",
      category: "События",
      excerpt: "Присъединете се към нас за живо изпълнение на народна музика всеки петък вечер.",
      content: "От 19:00 до 23:00 часа ще можете да се насладите на автентична българска музика, докато вечеряте в нашия ресторант.",
      icon: "🎵"
    },
    {
      title: "Нова винена карта",
      date: "1 Март 2025",
      category: "Вина",
      excerpt: "Разширихме нашата колекция от български вина с нови марки.",
      content: "Нашият сомелиер Елена избра специално за вас изключителни вина от всички винарски региони на България.",
      icon: "🍷"
    },
    {
      title: "Специална оферта за рожден ден",
      date: "20 Февруари 2025",
      category: "Промоции",
      excerpt: "Празнувайте вашия специален ден с нас и получете десерт подарък!",
      content: "Резервирайте маса за вашия рожден ден и ние ще ви изненадаме със специален десерт от нашия шеф-готвач, напълно безплатно!",
      icon: "🎂"
    },
    {
      title: "Кулинарни курсове - Записвания отворени",
      date: "15 Февруари 2025",
      category: "События",
      excerpt: "Научете тайните на българската кухня директно от нашия главен готвач.",
      content: "Започваме с курс за приготвяне на традиционни български ястия. Курсовете са всяка събота от 10:00 до 14:00 часа.",
      icon: "👨‍🍳"
    },
    {
      title: "Обновена лятна градина",
      date: "1 Февруари 2025",
      category: "Новини",
      excerpt: "Подготвяме нашата градина за новия сезон със специални подобрения.",
      content: "Новата ни лятна градина ще включва повече места, нова озвучителна система и красива градинска декорация.",
      icon: "🌺"
    }
  ];

  const upcomingEvents = [
    {
      title: "Дегустация на вина",
      date: "25 Март 2025",
      time: "18:00 - 21:00"
    },
    {
      title: "Вечер на средиземноморската кухня",
      date: "30 Март 2025",
      time: "19:00 - 23:00"
    },
    {
      title: "Празник на българската баница",
      date: "5 Април 2025",
      time: "10:00 - 14:00"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Новини и събития</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Какво ново в Ресторант Вкус
            </h1>
            <p className="text-lg text-muted-foreground">
              Бъдете в крак с нашите нови менюта, събития и специални оферти
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Последни новини</h2>
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-6xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{item.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground gap-1">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.content}</p>
                  <Button variant="link" className="p-0">
                    Прочети повече →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Предстоящи събития</CardTitle>
                <CardDescription>Не пропускайте нашите специални вечери</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="space-y-2 pb-4 border-b last:border-0 last:pb-0">
                    <h4 className="font-semibold">{event.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Абонирай се</CardTitle>
                <CardDescription>
                  Получавай новини и специални оферти директно в пощата си
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/contacts">Абонирай се</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Всички новини
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Меню
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Події
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Промоции
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Вина
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
