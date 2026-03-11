import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Brain, Heart, Zap, Wind, Sun, Moon, Check, Activity, Sparkles } from "lucide-react";

const practices = [
  {
    title: "Hatha Yoga",
    description: "Prática tradicional focada em alinhamento, respiração e estabilidade física e mental.",
    imageId: "hatha-yoga",
    benefits: [
      { icon: Check, label: "Postura" },
      { icon: Brain, label: "Foco" },
      { icon: Activity, label: "Estabilidade" }
    ]
  },
  {
    title: "Vinyasa Flow",
    description: "Sequências fluidas que conectam movimento e respiração com dinamismo e leveza.",
    imageId: "vinyasa-yoga",
    benefits: [
      { icon: Sparkles, label: "Energia" },
      { icon: Activity, label: "Dinamismo" },
      { icon: Wind, label: "Fluidez" }
    ]
  },
  {
    title: "Breathwork Integrativo",
    description: "Respiração consciente para autorregulação, clareza mental e equilíbrio profundo.",
    imageId: "restorative-yoga",
    benefits: [
      { icon: Wind, label: "Respiração" },
      { icon: Brain, label: "Clareza" },
      { icon: Moon, label: "Sono" }
    ]
  },
  {
    title: "Meditação Guiada",
    description: "Técnicas de atenção plena para reduzir ansiedade e expandir a consciência.",
    imageId: "meditation",
    benefits: [
      { icon: Sun, label: "Presença" },
      { icon: Brain, label: "Atenção" },
      { icon: Sparkles, label: "Consciência" }
    ]
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="text-primary text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 block font-bold">
            Curadoria de Práticas
          </span>
          <h2 className="font-headline text-4xl md:text-6xl text-foreground mb-6">
            Sintonize sua <span className="italic text-primary">frequência.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Escolha o caminho que ressoa com o seu momento atual. Cada prática é um portal para a sua essência, agora em um ambiente de cuidado absoluto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => {
            const img = PlaceHolderImages.find((i) => i.id === practice.imageId);
            return (
              <div 
                key={practice.title} 
                className="reveal group h-full" 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card h-full p-6 rounded-[2.5rem] border border-primary/5 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  {/* Image Container - Inset inside the card */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 shadow-inner">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={practice.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-headline text-2xl text-foreground transition-colors duration-500 group-hover:text-primary mb-3">
                      {practice.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-light text-sm mb-8">
                      {practice.description}
                    </p>

                    {/* Benefits Icons - Sticky at bottom of card */}
                    <div className="mt-auto pt-6 border-t border-primary/10 flex items-center justify-between">
                      {practice.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex flex-col items-center gap-2 group/icon">
                          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-all duration-500 group-hover/icon:bg-primary group-hover/icon:text-white group-hover/icon:scale-110">
                            <benefit.icon className="w-5 h-5" />
                          </div>
                          <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-semibold group-hover/icon:text-primary transition-colors">
                            {benefit.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}