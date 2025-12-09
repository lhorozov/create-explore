import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, CheckCircle, XCircle, Clock } from "lucide-react";

export default function ReservationsPage() {
  const reservations = [
    { 
      id: 1, 
      name: "Иван Петров", 
      email: "ivan@email.com",
      phone: "+359 888 123 456",
      guests: 4, 
      date: "2025-03-15", 
      time: "19:00", 
      status: "confirmed",
      notes: "Има хранителна алергия към ядки"
    },
    { 
      id: 2, 
      name: "Мария Георгиева", 
      email: "maria@email.com",
      phone: "+359 887 654 321",
      guests: 2, 
      date: "2025-03-15", 
      time: "20:00", 
      status: "pending",
      notes: ""
    },
    { 
      id: 3, 
      name: "Петър Димитров", 
      email: "peter@email.com",
      phone: "+359 889 111 222",
      guests: 6, 
      date: "2025-03-16", 
      time: "18:30", 
      status: "confirmed",
      notes: "Искат маса до прозореца"
    },
    { 
      id: 4, 
      name: "Елена Василева", 
      email: "elena@email.com",
      phone: "+359 888 333 444",
      guests: 3, 
      date: "2025-03-16", 
      time: "19:30", 
      status: "pending",
      notes: ""
    },
    { 
      id: 5, 
      name: "Георги Стоянов", 
      email: "georgi@email.com",
      phone: "+359 887 555 666",
      guests: 2, 
      date: "2025-03-17", 
      time: "20:00", 
      status: "confirmed",
      notes: ""
    },
    { 
      id: 6, 
      name: "Анна Иванова", 
      email: "anna@email.com",
      phone: "+359 888 777 888",
      guests: 5, 
      date: "2025-03-17", 
      time: "19:00", 
      status: "cancelled",
      notes: "Отказ от клиента"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-600">Потвърдена</Badge>;
      case "pending":
        return <Badge variant="secondary">Чакаща</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Отказана</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const stats = [
    { label: "Общо резервации", value: "142", icon: "📅" },
    { label: "Потвърдени", value: "98", icon: "✅" },
    { label: "Чакащи", value: "32", icon: "⏳" },
    { label: "Отказани", value: "12", icon: "❌" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Резервации</h2>
          <p className="text-muted-foreground">
            Управлявайте резервациите за вашия ресторант
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Нова резервация
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reservations Table */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Всички</TabsTrigger>
          <TabsTrigger value="confirmed">Потвърдени</TabsTrigger>
          <TabsTrigger value="pending">Чакащи</TabsTrigger>
          <TabsTrigger value="cancelled">Отказани</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Всички резервации</CardTitle>
              <CardDescription>
                Преглед на всички резервации в системата
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Клиент</TableHead>
                    <TableHead>Контакт</TableHead>
                    <TableHead>Дата и час</TableHead>
                    <TableHead>Гости</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Бележки</TableHead>
                    <TableHead className="text-right">Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="font-medium">
                        {reservation.name}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{reservation.email}</div>
                          <div className="text-muted-foreground">{reservation.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {reservation.date} в {reservation.time}
                      </TableCell>
                      <TableCell>{reservation.guests}</TableCell>
                      <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {reservation.notes || "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {reservation.status === "pending" && (
                            <>
                              <Button variant="ghost" size="icon" title="Потвърди">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </Button>
                              <Button variant="ghost" size="icon" title="Откажи">
                                <XCircle className="h-4 w-4 text-red-600" />
                              </Button>
                            </>
                          )}
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

      {/* Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Календар на резервациите</CardTitle>
          <CardDescription>
            Преглед по дни
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {["Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"].map((day) => (
              <div key={day} className="text-center font-semibold p-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className="aspect-square border rounded-lg p-2 hover:bg-muted cursor-pointer transition-colors"
              >
                <div className="text-sm font-medium">{i + 1}</div>
                {i < 10 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {Math.floor(Math.random() * 10) + 1} рез.
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
