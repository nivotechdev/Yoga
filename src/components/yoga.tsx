import { Leaf, Heart, Brain, Zap } from "lucide-react";

export function Yoga() {
  const benefits = [
    {
      icon: Heart,
      text: "Fortalece e equilibra o corpo e a mente.",
    },
    {
      icon: Leaf,
      text: "Alivia o estresse e a ansiedade do dia a dia.",
    },
    {
      icon: Zap,
      text: "Renova a sua energia e aumenta a vitalidade.",
    },
    {
      icon: Brain,
      text: "Melhora o foco e a clareza para suas decisões.",
    },
  ];

  return (
    <section id="yoga" className="py-12 md:py-16 bg-background px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto reveal">
        <div className="text-center">
            <span className="text-primary text-xs tracking-[0.5em] uppercase mb-6 block font-semibold">
              Uma Jornada Interior
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-12 text-foreground leading-[1.1]">
              Descubra o poder do <span className="italic text-primary">Yoga.</span>
            </h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
                Mais do que um exercício, o Yoga é uma filosofia de vida, um caminho de autoconhecimento e transformação. A prática de yoga envolve uma profunda conexão com os movimentos físicos e a consciência da respiração, que juntos cultivam a presença que tanto buscamos em nosso dia a dia. É a união entre corpo, mente e espírito, que floresce em um profundo estado de bem-estar.
            </p>
            <p>
                Na Gandha, criamos um refúgio para essa jornada. Nossos instrutores guiam cada prática com cuidado, adaptando as posturas para todos os níveis em um ambiente seguro e acolhedor, onde cada um pode florescer no seu próprio ritmo.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-8 mt-8 border-t border-primary/10">
                {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                        <benefit.icon className="w-5 h-5" />
                    </div>
                    <span className="leading-relaxed text-base">{benefit.text}</span>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
