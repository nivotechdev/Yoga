
import { CheckCircle2, Waves, Users, UserCircle, Wind } from "lucide-react";

const diffs = [
  {
    title: "Ambiente minimalista e climatizado",
    icon: Wind,
  },
  {
    title: "Professores certificados",
    icon: CheckCircle2,
  },
  {
    title: "Turmas reduzidas",
    icon: Users,
  },
  {
    title: "Atendimento personalizado",
    icon: UserCircle,
  },
  {
    title: "Espaço projetado para conforto e silêncio",
    icon: Waves,
  },
];

export function Differentials() {
  return (
    <section id="differentials" className="py-12 md:py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 text-foreground">
              Experiência além da prática
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-light">
              Oferecemos uma infraestrutura completa e uma abordagem humanizada para que você possa focar inteiramente em sua evolução.
            </p>
            <div className="grid gap-6">
              {diffs.map((diff) => (
                <div key={diff.title} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <diff.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{diff.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal hidden md:block h-[600px]">
             <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
             <div className="absolute inset-4 border border-dashed border-accent/30 rounded-3xl flex items-center justify-center p-12">
                <div className="text-center">
                   <div className="font-headline text-8xl text-accent/20 mb-4 italic">Gandha</div>
                   <p className="text-accent text-sm tracking-[0.3em] uppercase">Silence & Harmony</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
