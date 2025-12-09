import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Отчети и анализи</h2>
        <p className="text-muted-foreground">
          Преглед на бизнес показателите
        </p>
      </div>

      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Продажби</TabsTrigger>
          <TabsTrigger value="customers">Клиенти</TabsTrigger>
          <TabsTrigger value="menu">Меню</TabsTrigger>
          <TabsTrigger value="reservations">Резервации</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Приход днес</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,340 лв</div>
                <p className="text-xs text-muted-foreground">+12% от вчера</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Приход седмица</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,890 лв</div>
                <p className="text-xs text-muted-foreground">+8% от миналата седмица</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Приход месец</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231 лв</div>
                <p className="text-xs text-muted-foreground">+20% от миналия месец</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Средна сметка</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">58 лв</div>
                <p className="text-xs text-muted-foreground">+3 лв от миналия месец</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Продажби по месеци</CardTitle>
              <CardDescription>Преглед на приходите за последните 12 месеца</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-2">
                {[32, 45, 38, 52, 48, 55, 62, 58, 65, 72, 68, 75].map((value, i) => (
                  <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${value}%` }}>
                    <div className="text-xs text-center text-white pt-2">{value * 10}k</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Ян</span>
                <span>Фев</span>
                <span>Мар</span>
                <span>Апр</span>
                <span>Май</span>
                <span>Юни</span>
                <span>Юли</span>
                <span>Авг</span>
                <span>Сеп</span>
                <span>Окт</span>
                <span>Ное</span>
                <span>Дек</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Клиентски анализ</CardTitle>
              <CardDescription>Статистика за клиентската база</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Общо клиенти</p>
                    <p className="text-2xl font-bold">2,350</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Нови този месец</p>
                    <p className="text-2xl font-bold">180</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">Връщащи се</p>
                    <p className="text-2xl font-bold">68%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
