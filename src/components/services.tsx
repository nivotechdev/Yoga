import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const practices = [
  {
    title: "Hatha Yoga",
    description: "Prática tradicional focada em alinhamento, respiração e estabilidade.",
    imageId: "hatha-yoga",
  },
  {
    title: "Vinyasa Flow",
    description: "Sequências fluidas que conectam movimento e respiração com dinamismo e leveza.",
    imageId: "vinyasa-yoga",
  },
  {
    title: "Breathwork Integrativo",
    description: "Técnicas de respiração consciente para a autorregulação do sistema nervoso, promovendo clareza mental e equilíbrio profundo.",
    imageId: "restorative-yoga",
  },
  {
    title: "Meditação Guiada",
    description: "Técnicas de atenção plena para reduzir ansiedade e aumentar clareza mental.",
    imageId: "meditation",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-foreground">Nossas Práticas</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Descubra a modalidade que melhor se adapta ao seu momento e objetivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => {
            const img = PlaceHolderImages.find((i) => i.id === practice.imageId);
            return (
              <div key={practice.title} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="h-full bg-background/50 border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={practice.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={img?.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {practice.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
