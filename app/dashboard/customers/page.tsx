import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function CustomersPage() {
  const customers = [
    { 
      id: 1, 
      name: "Иван Петров", 
      email: "ivan@email.com",
      phone: "+359 888 123 456",
      visits: 15,
      lastVisit: "2025-03-10",
      totalSpent: "1,250 лв",
      vip: true
    },
    { 
      id: 2, 
      name: "Мария Георгиева", 
      email: "maria@email.com",
      phone: "+359 887 654 321",
      visits: 8,
      lastVisit: "2025-03-12",
      totalSpent: "680 лв",
      vip: false
    },
    { 
      id: 3, 
      name: "Петър Димитров", 
      email: "peter@email.com",
      phone: "+359 889 111 222",
      visits: 22,
      lastVisit: "2025-03-14",
      totalSpent: "2,100 лв",
      vip: true
    },
    { 
      id: 4, 
      name: "Елена Василева", 
      email: "elena@email.com",
      phone: "+359 888 333 444",
      visits: 5,
      lastVisit: "2025-03-08",
      totalSpent: "420 лв",
      vip: false
    },
    { 
      id: 5, 
      name: "Георги Стоянов", 
      email: "georgi@email.com",
      phone: "+359 887 555 666",
      visits: 12,
      lastVisit: "2025-03-13",
      totalSpent: "950 лв",
      vip: false
    },
  ];

  const stats = [
    { label: "Общо клиенти", value: "2,350" },
    { label: "VIP клиенти", value: "127" },
    { label: "Нови този месец", value: "45" },
    { label: "Средни посещения", value: "3.2" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Клиенти</h2>
        <p className="text-muted-foreground">
          Управлявайте вашата клиентска база
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>База данни с клиенти</CardTitle>
          <CardDescription>
            Списък на всички регистрирани клиенти
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Име</TableHead>
                <TableHead>Контакт</TableHead>
                <TableHead>Посещения</TableHead>
                <TableHead>Последно посещение</TableHead>
                <TableHead>Общо похарчено</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">
                    {customer.name}
                    {customer.vip && (
                      <Badge variant="secondary" className="ml-2">VIP</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.visits}</TableCell>
                  <TableCell>{customer.lastVisit}</TableCell>
                  <TableCell className="font-semibold text-primary">
                    {customer.totalSpent}
                  </TableCell>
                  <TableCell>
                    <Badge variant={customer.vip ? "default" : "outline"}>
                      {customer.vip ? "VIP" : "Стандартен"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
