import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users, Leaf } from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Иван Стоянов",
      role: "Главен шеф-готвач",
      description: "С 15 години опит в кулинарията, Иван носи традиция и иновации в нашата кухня.",
      icon: "👨‍🍳"
    },
    {
      name: "Мария Димитрова",
      role: "Су-шеф",
      description: "Специалист по десерти и паста, Мария добавя сладост към нашето меню.",
      icon: "👩‍🍳"
    },
    {
      name: "Георги Петров",
      role: "Мениджър",
      description: "Георги се грижи всичко да върви гладко и вие да имате незабравимо изживяване.",
      icon: "👨‍💼"
    },
    {
      name: "Елена Василева",
      role: "Сомелиер",
      description: "Експерт по вина, Елена ще ви помогне да изберете перфектното вино за вашето ястие.",
      icon: "🍷"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Страст към храната",
      description: "Всяко ястие е приготвено с любов и внимание към всеки детайл"
    },
    {
      icon: Leaf,
      title: "Пресни продукти",
      description: "Работим само с местни доставчици на био и екологично чисти продукти"
    },
    {
      icon: Users,
      title: "Семейна атмосфера",
      description: "Нашите гости са част от нашето семейство"
    },
    {
      icon: Award,
      title: "Качество и традиция",
      description: "Съчетаваме традиционни рецепти с модерни техники"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Нашата история</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              За Ресторант Вкус
            </h1>
            <p className="text-lg text-muted-foreground">
              От 2010 година създаваме незабравими кулинарни изживявания
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Нашата история</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ресторант Вкус започна като малко семейно заведение в сърцето на София. Нашата мисия беше проста - 
                да споделим любовта си към традиционната българска кухня с всеки наш гост.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Днес, след повече от 13 години, продължаваме да следваме същата философия. Всяка рецепта е 
                предадена от поколение на поколение, но не се страхуваме да експериментираме и да добавяме 
                модерен щрих към класическите ястия.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Нашият ресторант е място, където се срещат традицията и иновациите, където всяко ястие 
                разказва история, а всеки гост се чувства като у дома си.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Нашите ценности</h2>
            <p className="text-lg text-muted-foreground">
              Това, което ни прави специални
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Нашият екип</h2>
            <p className="text-lg text-muted-foreground">
              Запознайте се с хората, които правят магията възможна
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {member.role}
                  </Badge>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Нашата мисия</h2>
            <p className="text-lg opacity-90">
              Да създаваме незабравими кулинарни изживявания, съчетавайки традиционната българска кухня 
              с модерни техники и презентация. Да бъдем място, където се събират семейства и приятели, 
              за да споделят радостта от доброто хранене.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
