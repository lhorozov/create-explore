import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GalleryPage() {
  const galleryItems = [
    { category: "Интериор", emoji: "🏛️", description: "Уютна атмосфера" },
    { category: "Интериор", emoji: "🪑", description: "Комфортни маси" },
    { category: "Интериор", emoji: "🕯️", description: "Романтично осветление" },
    { category: "Градина", emoji: "🌳", description: "Лятна градина" },
    { category: "Градина", emoji: "🌺", description: "Цветна декорация" },
    { category: "Градина", emoji: "☀️", description: "Слънчева тераса" },
    { category: "Храна", emoji: "🍖", description: "Печено агнешко" },
    { category: "Храна", emoji: "🥗", description: "Свежи салати" },
    { category: "Храна", emoji: "🍲", description: "Традиционни супи" },
    { category: "Храна", emoji: "🍰", description: "Домашни десерти" },
    { category: "Храна", emoji: "🥘", description: "Специалитети" },
    { category: "Храна", emoji: "🍷", description: "Избрани вина" },
    { category: "Події", emoji: "🎉", description: "Празнични вечери" },
    { category: "Події", emoji: "🎵", description: "Музикални вечери" },
    { category: "Дани", emoji: "🎂", description: "Рождени дни" },
    { category: "Екип", emoji: "👨‍🍳", description: "Нашият екип" },
    { category: "Екип", emoji: "👩‍🍳", description: "В кухнята" },
    { category: "Екип", emoji: "👨‍💼", description: "Обслужване" },
  ];

  const categories = ["Всички", "Интериор", "Градина", "Храна", "Події", "Екип"];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Галерия</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Вижте нашия ресторант
            </h1>
            <p className="text-lg text-muted-foreground">
              Разгледайте снимки от нашия интериор, градина, специалитети и събития
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <div className="p-4 space-y-1">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <p className="text-sm font-medium">{item.description}</p>
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
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Посетете ни</h2>
            <p className="text-lg text-muted-foreground">
              Виртуалната галерия е само малка част от цялото изживяване. 
              Заповядайте лично, за да усетите истинската атмосфера на Ресторант Вкус.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Card className="flex-1">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-sm text-muted-foreground">ул. Витоша 15, София 1000</p>
                </CardContent>
              </Card>
              <Card className="flex-1">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-4xl mb-2">⏰</div>
                  <p className="font-semibold">Работно време</p>
                  <p className="text-sm text-muted-foreground">Пон-Пет: 11:00-23:00<br />Съб-Нед: 10:00-24:00</p>
                </CardContent>
              </Card>
              <Card className="flex-1">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="text-4xl mb-2">📞</div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-sm text-muted-foreground">+359 2 123 4567</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Последвайте ни</h2>
          <p className="text-lg mb-8 opacity-90">
            Вижте повече снимки от ежедневието ни в социалните мрежи
          </p>
          <div className="flex gap-4 justify-center text-4xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              📘
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              📷
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              🎥
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
