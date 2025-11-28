import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Ошибка",
        description: "Введите корректный email",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов"
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };
  const sections = [
    {
      number: "01",
      title: "Зачем создан Центр социальной архитектуры",
      description: "Технология системного управления развитием территорий и организаций",
      content: "Центр социальной архитектуры создан для внедрения научно-обоснованных методов управления социальными процессами. Мы превращаем хаос в систему, конфликты — в точки роста, а разрозненные действия — в управляемый результат.",
      icon: "Target",
      stats: [
        { value: "15+", label: "Регионов" },
        { value: "50+", label: "Проектов" },
        { value: "10 лет", label: "Опыт" }
      ]
    },
    {
      number: "02",
      title: "На чем основан метод социальной архитектуры",
      description: "Научная база и технологический фундамент",
      content: "Метод опирается на теорию социальных систем, системную инженерию и управление изменениями. Каждое решение подкреплено математическим моделированием, анализом данных и проверенными практиками.",
      icon: "Network",
      features: [
        "Системный анализ социальных процессов",
        "Математическое моделирование",
        "Управление конфликтами",
        "Проектирование изменений"
      ]
    },
    {
      number: "03",
      title: "Как Центр применяет метод в реальной работе",
      description: "От теории к управленческой практике",
      content: "Каждый проект проходит полный цикл: диагностика системы, проектирование изменений, внедрение решений, контроль результата. Мы не консультируем — мы управляем процессом до достижения измеримого результата.",
      icon: "Workflow",
      process: [
        { step: "Диагностика", desc: "Системный анализ" },
        { step: "Проектирование", desc: "Архитектура решения" },
        { step: "Внедрение", desc: "Управление изменениями" },
        { step: "Контроль", desc: "Измерение результата" }
      ]
    },
    {
      number: "04",
      title: "Какие проекты подтверждают эффективность метода",
      description: "Доказательство через результат",
      content: "Системное управление конфликтами в регионах, реорганизация госструктур, запуск социальных программ с измеримым эффектом. Результаты зафиксированы в отчетах и подтверждены независимыми экспертами.",
      icon: "CheckCircle2",
      projects: [
        { name: "Управление региональными конфликтами", result: "Снижение напряженности на 67%" },
        { name: "Реорганизация госструктур", result: "Рост эффективности на 45%" },
        { name: "Социальные программы", result: "Охват 50K+ человек" }
      ]
    },
    {
      number: "05",
      title: "Как устроена технологическая система Центра",
      description: "Цифровой контур управляемости и прозрачности",
      content: "Вся работа ведется в цифровой среде: системы мониторинга, аналитические дашборды, базы знаний, автоматизированные отчеты. Каждое действие фиксируется, каждый результат измеряется.",
      icon: "Database",
      tech: [
        "Система мониторинга процессов",
        "Аналитические дашборды",
        "База знаний и методологии",
        "Автоматизация отчетности"
      ]
    },
    {
      number: "06",
      title: "Кто отвечает за развитие метода и качество проектов",
      description: "Команда как носитель технологии",
      content: "Методологи с научными степенями, системные аналитики, проектные менеджеры с опытом управления крупными изменениями. Каждый специалист — эксперт в своей области.",
      icon: "Users",
      team: [
        { role: "Методологи", count: "8" },
        { role: "Аналитики", count: "12" },
        { role: "Менеджеры", count: "15" }
      ]
    },
    {
      number: "07",
      title: "Кто входит в рабочий контур Центра",
      description: "Партнеры как подтверждение веса и статуса",
      content: "Федеральные органы власти, региональные администрации, научные институты, крупнейшие компании. Работаем только с теми, кто готов к системным изменениям.",
      icon: "Building2",
      partners: [
        "Федеральные органы власти",
        "Региональные администрации",
        "Научно-исследовательские институты",
        "Крупные корпорации"
      ]
    },
    {
      number: "08",
      title: "Как выйти на взаимодействие с Центром",
      description: "Доступный вход для нужной аудитории",
      content: "Первичная диагностика проблемы, оценка возможности применения метода, формирование предложения. Работаем только с проектами, где метод гарантирует результат.",
      icon: "MessageSquare",
      contact: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/20 z-50">
        <div className="h-full bg-primary animate-slide-in-right" style={{ animationDuration: '2s' }}></div>
      </div>

      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-40 bg-background/80">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Layers" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl">АНО ЦСА</h1>
              <p className="text-xs text-muted-foreground">Центр социальной архитектуры</p>
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Технология управления изменениями
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Превращаем хаос <br />
              в <span className="text-primary">управляемую систему</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Научно-обоснованная методология социальной архитектуры для системного управления развитием территорий и организаций
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Изучить метод
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                Проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sections[0].stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-card border border-border/50 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="font-heading font-bold text-4xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <div key={idx} className="max-w-6xl mx-auto">
                <div className="flex gap-8 items-start flex-col md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Icon name={section.icon as any} className="text-primary" size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-heading font-bold text-5xl text-primary/30">{section.number}</span>
                      <div>
                        <h2 className="font-heading font-bold text-3xl mb-2">{section.title}</h2>
                        <p className="text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg mb-8 leading-relaxed">{section.content}</p>

                    {section.features && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                            <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.process && (
                      <div className="grid md:grid-cols-4 gap-4">
                        {section.process.map((item, pidx) => (
                          <div key={pidx} className="p-6 rounded-xl bg-card border border-border/50 text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3 font-heading font-bold text-primary">
                              {pidx + 1}
                            </div>
                            <div className="font-heading font-semibold mb-1">{item.step}</div>
                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.projects && (
                      <div className="space-y-4">
                        {section.projects.map((project, pjidx) => (
                          <Card key={pjidx} className="p-6 bg-card border-border/50">
                            <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                              <div className="flex-1">
                                <h3 className="font-heading font-semibold text-lg mb-2">{project.name}</h3>
                                <p className="text-primary font-semibold">{project.result}</p>
                              </div>
                              <Icon name="TrendingUp" className="text-primary" size={24} />
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}

                    {section.tech && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.tech.map((item, tidx) => (
                          <div key={tidx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                            <Icon name="CircuitBoard" className="text-primary flex-shrink-0" size={20} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.team && (
                      <div className="flex gap-6 flex-wrap">
                        {section.team.map((member, midx) => (
                          <div key={midx} className="p-6 rounded-xl bg-card border border-border/50 min-w-[180px]">
                            <div className="font-heading font-bold text-4xl text-primary mb-2">{member.count}</div>
                            <div className="text-muted-foreground">{member.role}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.partners && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.partners.map((partner, partidx) => (
                          <div key={partidx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                            <Icon name="Building2" className="text-primary flex-shrink-0" size={20} />
                            <span>{partner}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.contact && (
                      <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30">
                        <div className="max-w-2xl">
                          <h3 className="font-heading font-bold text-2xl mb-4">Готовы к системным изменениям?</h3>
                          <p className="text-muted-foreground mb-6">
                            Заполните форму, и мы проведем первичную диагностику вашей задачи. 
                            Ответим в течение 24 часов.
                          </p>
                          
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">Имя *</label>
                                <Input
                                  placeholder="Иван Иванов"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  className="bg-background border-border/50"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Email *</label>
                                <Input
                                  type="email"
                                  placeholder="ivan@example.com"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  className="bg-background border-border/50"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium mb-2 block">Телефон</label>
                              <Input
                                type="tel"
                                placeholder="+7 (999) 123-45-67"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="bg-background border-border/50"
                              />
                            </div>
                            
                            <div>
                              <label className="text-sm font-medium mb-2 block">Описание задачи *</label>
                              <Textarea
                                placeholder="Опишите вашу задачу или проблему..."
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="bg-background border-border/50 min-h-[120px]"
                                required
                              />
                            </div>
                            
                            <div className="flex gap-4 flex-col sm:flex-row">
                              <Button 
                                type="submit" 
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <>
                                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                                    Отправка...
                                  </>
                                ) : (
                                  <>
                                    <Icon name="Mail" className="mr-2" size={20} />
                                    Отправить заявку
                                  </>
                                )}
                              </Button>
                              <Button type="button" variant="outline" className="border-primary/30 hover:bg-primary/10">
                                <Icon name="Phone" className="mr-2" size={20} />
                                Позвонить
                              </Button>
                            </div>
                          </form>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Layers" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold">АНО ЦСА</h3>
                <p className="text-sm text-muted-foreground">Центр социальной архитектуры</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 АНО ЦСА. Технология системного управления.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;