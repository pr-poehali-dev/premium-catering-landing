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
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="space-y-8 fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight tracking-tight neon-text text-accent">
              Премиальный кейтеринг
              <br />
              из морепродуктов
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
              Авторские сеты для корпоративных мероприятий, офисов и команд
            </p>

            <p className="text-base text-muted-foreground border-l-2 border-accent pl-4">
              Готовим по предзаказу · Доставляем точно ко времени
            </p>

            <div className="pt-8">
              <Button 
                size="lg" 
                className="text-lg px-12 py-8 bg-accent hover:bg-accent/90 text-accent-foreground neon-glow font-semibold"
                onClick={() => setIsDialogOpen(true)}
              >
                Оставить заявку
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Тюмень · Работаем без выходных · Предзаказ 24–48 часов
            </p>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden neon-border border-2 border-accent">
            <img 
              src="https://cdn.poehali.dev/projects/2c579bf1-62f2-41ad-a6c2-979007a64c43/files/0bef5ff3-7ec5-4b67-9896-14cf1735dec3.jpg"
              alt="Premium seafood catering"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden neon-border border border-secondary group cursor-pointer">
            <img 
              src="https://cdn.poehali.dev/projects/2c579bf1-62f2-41ad-a6c2-979007a64c43/files/7859eaa6-ac70-4c6d-9a71-4e02c229d7e7.jpg"
              alt="Artisan chef preparing sushi"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <p className="text-2xl font-light text-foreground">Ремесло и качество</p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden neon-border border border-secondary group cursor-pointer">
            <img 
              src="https://cdn.poehali.dev/projects/2c579bf1-62f2-41ad-a6c2-979007a64c43/files/7a2fd5ca-3892-44a2-8697-cb584f29649a.jpg"
              alt="Corporate event catering"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <p className="text-2xl font-light text-foreground">Корпоративный уровень</p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground neon-text text-accent">
            Для каких случаев
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-card border-accent/50 hover:border-accent transition-all duration-300 cursor-default hover:neon-glow"
              >
                <p className="text-lg font-light text-foreground">{occasion}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground neon-text text-secondary">
            Почему нас выбирают
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent neon-border group-hover:neon-glow transition-all duration-300">
                  <Icon name={advantage.icon} size={32} className="text-accent" />
                </div>
                <p className="text-lg font-light text-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground neon-text text-accent">
            Меню / Форматы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {formats.map((format, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-accent/30 text-center hover:border-accent transition-all duration-300 hover:neon-glow cursor-default"
              >
                <p className="text-base font-light text-foreground">{format}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-accent text-accent hover:bg-accent hover:text-accent-foreground neon-border"
              onClick={() => setIsDialogOpen(true)}
            >
              Получить меню и расчёт
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-foreground neon-text text-secondary">
            Как мы работаем
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6 group">
                <div className="text-7xl font-light text-accent mb-4 neon-text group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <p className="text-lg font-light text-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-12 neon-text text-accent">
            Для компаний
          </h2>
          
          <div className="space-y-6 text-xl font-light text-muted-foreground">
            <p className="border-l-2 border-accent pl-6">Корпоративные условия</p>
            <p className="border-l-2 border-secondary pl-6">Скидочные карты для сотрудников</p>
            <p className="border-l-2 border-accent pl-6">Скидки до 20% для резидентов</p>
            <p className="border-l-2 border-secondary pl-6">Удобные повторные заказы</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl md:text-5xl font-light text-foreground italic leading-relaxed">
            «Мы готовим так, как готовили бы для <span className="text-accent neon-text">своей команды</span>»
          </blockquote>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Есть, что поесть — когда важно произвести <span className="text-accent neon-text">впечатление</span>.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground neon-glow font-semibold"
              onClick={() => window.open('https://t.me/yourchannel', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-secondary text-secondary hover:bg-secondary hover:text-background neon-border"
              onClick={() => setIsDialogOpen(true)}
            >
              Оставить заявку
            </Button>

            <Button 
              size="lg"
              variant="ghost"
              className="text-lg px-10 py-7 text-muted-foreground hover:text-accent"
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setIsDialogOpen(false)}
        >
          <div 
            className="bg-card p-12 max-w-md w-full space-y-8 rounded-lg border-2 border-accent neon-glow relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-accent transition-colors"
            >
              <Icon name="X" size={24} />
            </button>

            <div className="text-center space-y-4">
              <h3 className="text-3xl font-light text-foreground neon-text text-accent">Оставить заявку</h3>
              <p className="text-muted-foreground font-light">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-4 border border-accent/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent rounded focus:neon-border transition-all"
              />
              
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-4 border border-accent/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent rounded focus:neon-border transition-all"
              />

              <textarea
                placeholder="Комментарий к заказу"
                rows={4}
                className="w-full px-4 py-4 border border-accent/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent rounded resize-none focus:neon-border transition-all"
              />

              <Button 
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground neon-glow font-semibold"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
