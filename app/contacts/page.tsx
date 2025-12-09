"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    alert("Благодарим за вашата резервация! Ще се свържем с вас скоро.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Контакти</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Свържете се с нас
            </h1>
            <p className="text-lg text-muted-foreground">
              Направете резервация или се свържете с нас за повече информация
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Резервация</CardTitle>
                <CardDescription>
                  Попълнете формата за резервация и ние ще се свържем с вас за потвърждение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Име *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Вашето име"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Имейл *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+359 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Час *</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Гости *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        placeholder="2"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Съобщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Допълнителна информация или специални изисквания..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Изпрати резервация
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Информация за контакт</CardTitle>
                <CardDescription>
                  Може също да се свържете с нас директно
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      ул. Витоша 15<br />
                      София 1000<br />
                      България
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">
                      +359 2 123 4567<br />
                      +359 888 123 456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Имейл</h4>
                    <p className="text-muted-foreground">
                      info@restaurant-vkus.bg<br />
                      reservations@restaurant-vkus.bg
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Работно време</h4>
                    <p className="text-muted-foreground">
                      Понеделник - Петък: 11:00 - 23:00<br />
                      Събота - Неделя: 10:00 - 24:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Локация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-6xl">
                  🗺️
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Намираме се в сърцето на София, на улица Витоша, близо до метростанция Сердика.
                </p>
              </CardContent>
            </Card>

            {/* Social */}
            <Card>
              <CardHeader>
                <CardTitle>Социални мрежи</CardTitle>
                <CardDescription>Последвайте ни за новини и промоции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <span className="text-xl">📘</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <span className="text-xl">📷</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <span className="text-xl">🎥</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Често задавани въпроси</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Приемате ли резервации?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, препоръчваме резервация, особено за уикендите и празничните дни. Можете да резервирате онлайн или да ни се обадите.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Имате ли паркинг?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Има платен обществен паркинг на 100 метра от ресторанта. Можем да валидираме вашия паркинг билет.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Предлагате ли вегетариански опции?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, имаме разнообразие от вегетариански и веган опции в нашето меню.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Организирате ли частни събития?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, имаме зала за частни събития с капацитет до 50 души. Свържете се с нас за повече информация.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
