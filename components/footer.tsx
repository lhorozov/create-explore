import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Ресторант Вкус</h3>
            <p className="text-sm text-muted-foreground">
              Автентична българска кухня с модерен twist. Вкусна храна, приятна атмосфера и отлично обслужване.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Бързи Връзки</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                За нас
              </Link>
              <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                Меню
              </Link>
              <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                Новини
              </Link>
              <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Галерия
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Контакти</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>ул. Витоша 15, София 1000</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+359 2 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@restaurant-vkus.bg</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Работно Време</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Понеделник - Петък: 11:00 - 23:00</p>
              <p>Събота - Неделя: 10:00 - 24:00</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ресторант Вкус. Всички права запазени.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Политика за поверителност
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Условия за ползване
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
