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
            Escolha o caminho que ressoa com o seu momento atual. Cada prática é um portal para a sua essência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {practices.map((practice, index) => {
            const img = PlaceHolderImages.find((i) => i.id === practice.imageId);
            return (
              <div 
                key={practice.title} 
                className="reveal group cursor-pointer" 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Container with Smaller Aspect Ratio */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={practice.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Details Below Image */}
                <div className="space-y-4 px-2">
                  <h3 className="font-headline text-2xl md:text-3xl text-foreground transition-colors duration-500 group-hover:text-primary leading-none">
                    {practice.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    {practice.description}
                  </p>

                  {/* Benefits Icons */}
                  <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                    {practice.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex flex-col items-center gap-1.5 group/icon">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-colors group-hover/icon:bg-primary group-hover/icon:text-white">
                          <benefit.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium group-hover/icon:text-primary transition-colors">
                          {benefit.label}
                        </span>
                      </div>
                    ))}
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
