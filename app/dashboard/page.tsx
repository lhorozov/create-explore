import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Общ приход",
      value: "45,231 лв",
      change: "+20.1% от миналия месец",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Резервации",
      value: "142",
      change: "+12 от вчера",
      icon: Calendar,
      trend: "up"
    },
    {
      title: "Клиенти",
      value: "2,350",
      change: "+180 нови този месец",
      icon: Users,
      trend: "up"
    },
    {
      title: "Средна оценка",
      value: "4.8/5",
      change: "+0.2 от миналия месец",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const recentReservations = [
    { id: 1, name: "Иван Петров", guests: 4, date: "2025-03-15", time: "19:00", status: "Потвърдена" },
    { id: 2, name: "Мария Георгиева", guests: 2, date: "2025-03-15", time: "20:00", status: "Чакаща" },
    { id: 3, name: "Петър Димитров", guests: 6, date: "2025-03-16", time: "18:30", status: "Потвърдена" },
    { id: 4, name: "Елена Василева", guests: 3, date: "2025-03-16", time: "19:30", status: "Чакаща" },
    { id: 5, name: "Георги Стоянов", guests: 2, date: "2025-03-17", time: "20:00", status: "Потвърдена" },
  ];

  const popularDishes = [
    { name: "Печено агнешко", orders: 45, revenue: "1,120 лв" },
    { name: "Телешка пържола", orders: 38, revenue: "870 лв" },
    { name: "Шопска салата", orders: 52, revenue: "463 лв" },
    { name: "Сьомга на скара", orders: 28, revenue: "753 лв" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Добре дошли обратно!</h2>
        <p className="text-muted-foreground">
          Ето преглед на вашия ресторант от днес.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Reservations */}
        <Card>
          <CardHeader>
            <CardTitle>Скорошни резервации</CardTitle>
            <CardDescription>
              Последните резервации в системата
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-semibold">{reservation.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {reservation.date} в {reservation.time} • {reservation.guests} гости
                    </p>
                  </div>
                  <Badge variant={reservation.status === "Потвърдена" ? "default" : "secondary"}>
                    {reservation.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Dishes */}
        <Card>
          <CardHeader>
            <CardTitle>Популярни ястия</CardTitle>
            <CardDescription>
              Най-поръчваните ястия този месец
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularDishes.map((dish, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-semibold">{dish.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {dish.orders} поръчки
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{dish.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Бързи действия</CardTitle>
          <CardDescription>
            Често използвани функции
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-4xl">📅</div>
                <p className="font-semibold">Нова резервация</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-4xl">🍽️</div>
                <p className="font-semibold">Редактирай меню</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-4xl">👥</div>
                <p className="font-semibold">Виж клиенти</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-2">
                <div className="text-4xl">📊</div>
                <p className="font-semibold">Отчети</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
