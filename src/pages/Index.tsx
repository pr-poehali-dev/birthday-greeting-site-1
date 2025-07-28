import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0);


  const sections = [
    {
      id: 'hero',
      title: '🎂 С Днем Рождения! 🎂',
      content: 'Самый особенный день в году для самого особенного человека!'
    },
    {
      id: 'wishes',
      title: '💝 Мои пожелания тебе',
      content: 'wishes'
    },
    {
      id: 'gallery',
      title: '📸 Картинки с поздравлениями',
      content: 'gallery'
    },
    {
      id: 'final',
      title: '💕 С безграничной любовью',
      content: 'final'
    }
  ];

  const wishes = [
    {
      icon: '🌟',
      title: 'Пусть сбываются мечты',
      text: 'Каждое твое желание станет реальностью, а мечты найдут свой путь к осуществлению'
    },
    {
      icon: '🌈',
      title: 'Радость каждый день',
      text: 'Пусть каждое утро начинается с улыбки, а каждый вечер заканчивается благодарностью'
    },
    {
      icon: '💎',
      title: 'Здоровье и счастье',
      text: 'Крепкое здоровье, искреннее счастье и море позитивных эмоций'
    },
    {
      icon: '🦋',
      title: 'Удивительные моменты',
      text: 'Пусть жизнь дарит тебе волшебные моменты и незабываемые впечатления'
    }
  ];

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-cream via-pink-50 to-birthday-gold/20">


      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <div className="flex space-x-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-birthday-pink text-white shadow-md'
                  : 'text-birthday-pink hover:bg-birthday-pink/10'
              }`}
            >
              {section.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-pacifico text-6xl md:text-8xl text-birthday-pink drop-shadow-lg animate-bounce-in">
              С Днем Рождения!
            </h1>
            <div className="flex justify-center items-center space-x-4 text-4xl animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <span>🎂</span>
              <span>🎈</span>
              <span>🎉</span>
              <span>🎁</span>
              <span>✨</span>
            </div>
          </div>
          
          <Card className="max-w-2xl mx-auto p-8 bg-white/90 backdrop-blur-sm border-2 border-birthday-pink/20 shadow-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="font-nunito text-xl md:text-2xl text-gray-700 leading-relaxed">
              Сегодня особенный день - твой день рождения! 🌟
              <br />
              <span className="text-birthday-pink font-semibold">
                Хочу сказать тебе пару тёплых слов
              </span>
            </p>
          </Card>

          <Button 
            onClick={() => scrollToSection(1)}
            className="bg-birthday-pink hover:bg-birthday-coral text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in"
            style={{animationDelay: '0.9s'}}
          >
            Читать поздравления 💕
          </Button>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-pacifico text-5xl md:text-6xl text-center text-birthday-pink mb-16 animate-fade-in">
            💝 Мои пожелания тебе
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {wishes.map((wish, index) => (
              <Card 
                key={index}
                className="p-8 bg-white/90 backdrop-blur-sm border-2 border-birthday-gold/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{wish.icon}</div>
                  <h3 className="font-nunito font-bold text-xl text-birthday-coral">
                    {wish.title}
                  </h3>
                  <p className="font-nunito text-gray-700 leading-relaxed">
                    {wish.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => scrollToSection(2)}
              className="bg-birthday-gold hover:bg-birthday-gold/80 text-gray-800 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Посмотреть картинки 📸
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen py-20 px-4 bg-gradient-to-b from-transparent to-birthday-cream/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-pacifico text-5xl md:text-6xl text-center text-birthday-pink mb-16 animate-fade-in">
            📸 Картинки с поздравлениями
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: 'img/939f878a-a132-42de-a106-853bf2b29778.jpg',
                title: 'Сладкий день',
                text: 'Пусть жизнь будет сладкой как торт!'
              },
              {
                image: 'img/cd93c4e2-575c-427b-9269-61f6245317be.jpg',
                title: 'Воздушные мечты',
                text: 'Легкости и воздушности в каждом дне!'
              },
              {
                image: 'img/eded40ec-38ee-4eeb-b699-5946caf76641.jpg',
                title: 'Подарки судьбы',
                text: 'Каждый день - это подарок!'
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-white border-2 border-birthday-pink/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="font-pacifico text-xl text-birthday-pink">
                    {item.title}
                  </h3>
                  <p className="font-nunito text-gray-700">
                    {item.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => scrollToSection(3)}
              className="bg-birthday-coral hover:bg-birthday-pink text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Финальное признание 💕
            </Button>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section id="final" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-birthday-pink/10 via-birthday-gold/10 to-birthday-cream">
        <div className="text-center space-y-12 max-w-4xl mx-auto animate-fade-in">
          <div className="space-y-8">
            <h2 className="font-pacifico text-7xl md:text-9xl text-birthday-pink drop-shadow-lg animate-bounce-in">
              С безграничной любовью
            </h2>
            
            <div className="text-8xl md:text-9xl animate-float">
              ❤️
            </div>
          </div>

          <Card className="p-12 bg-white/95 backdrop-blur-sm border-2 border-birthday-pink/30 shadow-2xl animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="space-y-6">
              <p className="font-nunito text-xl md:text-2xl text-gray-700 leading-relaxed">
                Ты удивительный человек, я рада, что когда-то с тобой познакомилась, 
                хочу сказать тебе огромное спасибо за все! 
              </p>
              
              <p className="font-nunito text-lg md:text-xl text-gray-600 leading-relaxed">
                Пусть каждый день будет полон счастья, радости, смеха и тепла. 
                Пусть мечты сбываются, цели достигаются, а сердце всегда будет наполнено любовью.
              </p>

              <p className="font-nunito text-lg text-gray-600 leading-relaxed">
                Желаю тебе крепкого здоровья, верных друзей, ярких впечатлений и 
                множества причин для улыбки каждый день. Ты заслуживаешь всего самого лучшего в этом мире!
              </p>
            </div>
          </Card>

          <div className="space-y-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex justify-center space-x-4 text-3xl">
              💕 ✨ 🌟 ✨ 💕
            </div>
            <p className="font-pacifico text-3xl md:text-4xl text-birthday-coral">
              С любовью
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}