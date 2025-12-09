import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Настройки</h2>
        <p className="text-muted-foreground">
          Управлявайте настройките на вашия ресторант
        </p>
      </div>

      <div className="grid gap-6">
        {/* Restaurant Info */}
        <Card>
          <CardHeader>
            <CardTitle>Информация за ресторанта</CardTitle>
            <CardDescription>
              Основна информация и контакти
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Име на ресторанта</Label>
                <Input id="name" defaultValue="Ресторант Вкус" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Имейл</Label>
                <Input id="email" type="email" defaultValue="info@restaurant-vkus.bg" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" defaultValue="+359 2 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input id="address" defaultValue="ул. Витоша 15, София 1000" />
              </div>
            </div>
            <Button>Запази промени</Button>
          </CardContent>
        </Card>

        {/* Working Hours */}
        <Card>
          <CardHeader>
            <CardTitle>Работно време</CardTitle>
            <CardDescription>
              Настройте работното време на ресторанта
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { day: "Понеделник - Петък", hours: "11:00 - 23:00" },
              { day: "Събота - Неделя", hours: "10:00 - 24:00" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">{item.day}</span>
                <Input className="w-48" defaultValue={item.hours} />
              </div>
            ))}
            <Button>Запази промени</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Известия</CardTitle>
            <CardDescription>
              Конфигурирайте известията
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Имейл известия</p>
                <p className="text-sm text-muted-foreground">Получавайте известия за нови резервации</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS известия</p>
                <p className="text-sm text-muted-foreground">Получавайте SMS за спешни случаи</p>
              </div>
              <input type="checkbox" className="h-5 w-5 rounded" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Седмични отчети</p>
                <p className="text-sm text-muted-foreground">Получавайте седмични отчети по имейл</p>
              </div>
              <input type="checkbox" defaultChecked className="h-5 w-5 rounded" />
            </div>
            <Button>Запази промени</Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle>Сигурност</CardTitle>
            <CardDescription>
              Управление на паролата и сигурността
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Текуща парола</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">Нова парола</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Потвърди парола</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Промени паролата</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
