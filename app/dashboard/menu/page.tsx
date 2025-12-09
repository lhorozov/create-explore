import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function DashboardMenuPage() {
  const menuItems = [
    { id: 1, name: "Шопска салата", category: "Салати", price: "8.90 лв", status: "Активно", vegetarian: true },
    { id: 2, name: "Телешка супа", category: "Супи", price: "6.50 лв", status: "Активно", vegetarian: false },
    { id: 3, name: "Печено агнешко", category: "Основни", price: "24.90 лв", status: "Активно", vegetarian: false },
    { id: 4, name: "Баклава", category: "Десерти", price: "5.90 лв", status: "Активно", vegetarian: true },
    { id: 5, name: "Пилешки гърди", category: "Основни", price: "15.90 лв", status: "Активно", vegetarian: false },
    { id: 6, name: "Гръцка салата", category: "Салати", price: "10.90 лв", status: "Изчерпано", vegetarian: true },
  ];

  const categories = ["Всички", "Предястия", "Супи", "Салати", "Основни", "Десерти", "Напитки"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Управление на меню</h2>
          <p className="text-muted-foreground">
            Редактирайте и управлявайте вашето меню
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Добави ястие
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category.toLowerCase()}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Всички ястия</CardTitle>
              <CardDescription>
                Общ брой: {menuItems.length} ястия
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Име</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Цена</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Опции</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {menuItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>
                        <Badge variant={item.status === "Активно" ? "default" : "secondary"}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {item.vegetarian && (
                          <Badge variant="outline">🌱 Вегетарианско</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Категории</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 border rounded">
                <span>Предястия</span>
                <Badge>5</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span>Супи</span>
                <Badge>4</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span>Салати</span>
                <Badge>6</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span>Основни</span>
                <Badge>12</Badge>
              </div>
              <div className="flex justify-between items-center p-2 border rounded">
                <span>Десерти</span>
                <Badge>8</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Статистика</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Общо ястия</span>
                <span className="font-bold">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Активни</span>
                <span className="font-bold text-green-600">42</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Изчерпани</span>
                <span className="font-bold text-red-600">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Вегетариански</span>
                <span className="font-bold">18</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Последни промени</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="font-medium">Гръцка салата</p>
              <p className="text-muted-foreground">Промяна на цената - преди 2 часа</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Телешка пържола</p>
              <p className="text-muted-foreground">Добавено - преди 1 ден</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Боб супа</p>
              <p className="text-muted-foreground">Редактирано - преди 2 дни</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
