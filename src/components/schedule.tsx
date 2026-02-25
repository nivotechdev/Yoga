"use client";

import { CalendarDays, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const scheduleData = [
  {
    day: "Segunda-feira",
    times: ["07:30", "17:00", "18:15"],
  },
  {
    day: "Terça-feira",
    times: ["07:30", "09:00", "17:15", "18:30"],
  },
  {
    day: "Quarta-feira",
    times: ["07:30", "11:00", "12:10", "17:00", "18:15"],
  },
  {
    day: "Quinta-feira",
    times: ["07:30", "09:00", "17:15", "18:30"],
  },
  {
    day: "Sexta-feira",
    times: ["07:30", "12:10", "18:15"],
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal px-0 md:px-4">
          <div className="max-w-2xl">
            <span className="text-accent text-sm tracking-[0.4em] uppercase mb-4 block font-medium">
              Cronograma Exclusivo
            </span>
            <h2 className="font-headline text-4xl md:text-6xl text-foreground mb-6">
              O Momento da Sua Pausa
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Nossos horários são desenhados para respeitar o seu ritmo, 
              proporcionando equilíbrio desde o despertar até o recolhimento.
            </p>
          </div>
        </div>

        <div className="reveal relative group">
          {/* Gradientes de desfoque nas bordas para sensação de infinito */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {scheduleData.map((item, index) => (
                <CarouselItem key={item.day} className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div
                    className="h-full bg-card p-8 rounded-[2.5rem] border border-border/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/card flex flex-col"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="mb-10">
                      <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-700">
                        <CalendarDays className="w-6 h-6" />
                      </div>
                      <h3 className="font-headline text-2xl text-foreground mb-1">
                        {item.day}
                      </h3>
                    </div>

                    <div className="space-y-3 mt-auto">
                      {item.times.map((time) => (
                        <div
                          key={time}
                          className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-transparent hover:border-accent/20 hover:bg-white transition-all duration-300 group/time cursor-pointer"
                        >
                          <span className="text-foreground/70 font-medium group-hover/time:text-accent transition-colors">
                            {time}
                          </span>
                          <Clock className="w-4 h-4 text-primary/30 group-hover/time:text-accent group-hover/time:scale-110 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Botões de navegação posicionados para não serem "comidos" pelos cards no desktop */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-14 w-14 rounded-full border-border/40 bg-white/80 backdrop-blur-sm hover:bg-accent hover:text-white hover:border-accent transition-all shadow-lg z-20" />
              <CarouselNext className="-right-12 h-14 w-14 rounded-full border-border/40 bg-white/80 backdrop-blur-sm hover:bg-accent hover:text-white hover:border-accent transition-all shadow-lg z-20" />
            </div>

            {/* Navegação Mobile simplificada */}
            <div className="flex md:hidden justify-center gap-6 mt-12">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-border/40 bg-card" />
              <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-border/40 bg-card" />
            </div>
          </Carousel>
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-muted-foreground font-light italic text-sm">
            * Aulas exclusivas com no máximo 8 praticantes por turma. 
            <br />
            Agende sua experiência com antecedência para garantir sua vaga.
          </p>
        </div>
      </div>
    </section>
  );
}