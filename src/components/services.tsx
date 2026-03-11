import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const practices = [
  {
    title: "Hatha Yoga",
    description: "Prática tradicional focada em alinhamento, respiração e estabilidade física e mental.",
    imageId: "hatha-yoga",
  },
  {
    title: "Vinyasa Flow",
    description: "Sequências fluidas que conectam movimento e respiração com dinamismo e leveza.",
    imageId: "vinyasa-yoga",
  },
  {
    title: "Breathwork Integrativo",
    description: "Respiração consciente para autorregulação, clareza mental e equilíbrio profundo.",
    imageId: "restorative-yoga",
  },
  {
    title: "Meditação Guiada",
    description: "Técnicas de atenção plena para reduzir ansiedade e expandir a consciência.",
    imageId: "meditation",
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
                {/* Image Container with Custom Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={practice.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    data-ai-hint={img?.imageHint}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Details Below Image */}
                <div className="space-y-3 px-2">
                  <h3 className="font-headline text-2xl md:text-3xl text-foreground transition-colors duration-500 group-hover:text-primary">
                    {practice.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-primary/30 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                  <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                    {practice.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
