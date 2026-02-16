
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const aboutImg = PlaceHolderImages.find((img) => img.id === "about-img");

  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 text-foreground leading-tight">
              Um refúgio para o seu bem-estar
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Nosso espaço foi criado para proporcionar uma experiência completa de autocuidado e consciência corporal. Unimos tradição e contemporaneidade em práticas que respeitam o seu tempo, seu ritmo e sua jornada pessoal.
              </p>
              <p>
                Aqui, cada detalhe foi pensado para oferecer acolhimento, serenidade e excelência. Utilizamos materiais naturais e iluminação suave para garantir que sua única preocupação seja estar presente.
              </p>
            </div>
          </div>
          <div className="relative reveal h-[500px] group">
            <div className="absolute inset-0 border border-accent/20 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0" />
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt={aboutImg?.description || ""}
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                data-ai-hint={aboutImg?.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
