import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const occasions = [
    "Корпоративные мероприятия",
    "Праздники внутри компании",
    "Встречи с партнёрами",
    "Дни рождения сотрудников",
    "Камерные офисные события",
  ];

  const advantages = [
    { icon: "Fish", text: "Свежие морепродукты" },
    { icon: "Clock", text: "Работа по предзаказу" },
    { icon: "Award", text: "Премиальная подача" },
    { icon: "Leaf", text: "Экологичная упаковка" },
    { icon: "Users", text: "Индивидуальный подход" },
    { icon: "TruckIcon", text: "Чёткие сроки доставки" },
  ];

  const formats = [
    "Суши бенто / тар-тар",
    "Суши пицца",
    "Суши вафли",
    "Суши панкейки",
    "Гунканы из огурца",
    "Запечённые роллы",
    "Сашими нарезка",
    "Фирменные соусы",
  ];

  const steps = [
    { number: "01", text: "Вы оставляете заявку" },
    { number: "02", text: "Мы уточняем формат и количество гостей" },
    { number: "03", text: "Готовим по предзаказу" },
    { number: "04", text: "Доставляем к вашему событию" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight tracking-tight">
            Премиальный кейтеринг
            <br />
            из морепродуктов
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Авторские сеты для корпоративных мероприятий, офисов и команд
          </p>

          <p className="text-base text-muted-foreground">
            Готовим по предзаказу · Доставляем точно ко времени
          </p>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsDialogOpen(true)}
            >
              Оставить заявку
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Тюмень · Работаем без выходных · Предзаказ 24–48 часов
          </p>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground">
            Для каких случаев
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-background border-border hover:border-primary transition-colors duration-300 cursor-default"
              >
                <p className="text-lg font-light text-foreground">{occasion}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground">
            Почему нас выбирают
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <p className="text-lg font-light text-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground">
            Меню / Форматы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {formats.map((format, index) => (
              <div 
                key={index}
                className="p-6 bg-background border border-border text-center"
              >
                <p className="text-base font-light text-foreground">{format}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7"
              onClick={() => setIsDialogOpen(true)}
            >
              Получить меню и расчёт
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground">
            Как мы работаем
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-6xl font-light text-accent mb-4">{step.number}</div>
                <p className="text-lg font-light text-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-12">
            Для компаний
          </h2>
          
          <div className="space-y-4 text-lg font-light text-muted-foreground">
            <p>Корпоративные условия</p>
            <p>Скидочные карты для сотрудников</p>
            <p>Скидки до 20% для резидентов</p>
            <p>Удобные повторные заказы</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-light text-foreground italic leading-relaxed">
            «Мы готовим так, как готовили бы для своей команды»
          </blockquote>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Есть, что поесть — когда важно произвести впечатление.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open('https://t.me/yourchannel', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7"
              onClick={() => setIsDialogOpen(true)}
            >
              Оставить заявку
            </Button>

            <Button 
              size="lg"
              variant="ghost"
              className="text-lg px-10 py-7"
              onClick={() => window.location.href = 'tel:+79000000000'}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Modal */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
          onClick={() => setIsDialogOpen(false)}
        >
          <div 
            className="bg-background p-12 max-w-md w-full space-y-8 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-light text-foreground">Оставить заявку</h3>
              <p className="text-muted-foreground font-light">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary rounded"
              />
              
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary rounded"
              />

              <textarea
                placeholder="Комментарий к заказу"
                rows={4}
                className="w-full px-4 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary rounded resize-none"
              />

              <Button 
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Отправить заявку
              </Button>
            </form>

            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
