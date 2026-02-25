
"use client";

import { CalendarDays, Clock } from "lucide-react";

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
    times: ["11:00", "12:10", "17:00", "18:15"],
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
    <section id="schedule" className="py-32 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="text-accent text-sm tracking-[0.4em] uppercase mb-4 block font-medium">
            Cronograma Exclusivo
          </span>
          <h2 className="font-headline text-4xl md:text-6xl text-foreground mb-6">
            O Momento da Sua Pausa
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Nossos horários são desenhados para respeitar o ritmo circadiano, 
            proporcionando equilíbrio desde o despertar até o recolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {scheduleData.map((item, index) => (
            <div
              key={item.day}
              className="reveal bg-card p-8 rounded-[2rem] border border-border/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl text-foreground mb-1">
                  {item.day}
                </h3>
              </div>

              <div className="space-y-4">
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
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-muted-foreground font-light italic text-sm">
            * Aulas exclusivas com no máximo 8 praticantes por turma. 
            <br />
            Sujeito a disponibilidade sob agendamento prévio.
          </p>
        </div>
      </div>
    </section>
  );
}
