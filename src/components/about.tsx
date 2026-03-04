import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const aboutImg = PlaceHolderImages.find((img) => img.id === "about-img");

  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-4 block font-medium">
              Nossa Essência
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground leading-[1.1]">
              Sete anos cultivando <br />
              <span className="italic">presença e cuidado.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                O Gandha nasceu do desejo de tocar vidas. Entendemos que o estilo de vida contemporâneo nos sobrecarrega, e por isso oferecemos um refúgio para a harmonia física, mental e espiritual. Acreditamos que seres harmonizados consigo mesmos transformam o mundo ao seu redor.
              </p>
              <p>
                Nossa base é o <strong>Hatha Yoga Integrativo</strong>, método que acolhe todos os níveis de prática. Aqui, o Yoga é uma jornada de conexão interna, respeitando limites e desenvolvendo a não-violência através da consciência corporal.
              </p>
              
              <div className="pt-8 border-t border-accent/10">
                <h4 className="font-headline text-2xl text-foreground mb-2">Neura Paludo</h4>
                <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">Liderança & Consciência</p>
                <p className="text-base italic">
                  Professora de Yoga e Instrutora de Breathwork, Neura dedica-se à autorregulação através da respiração, guiando cada praticante em direção à sua própria essência.
                </p>
              </div>
            </div>
          </div>
          <div className="relative reveal h-[600px] group">
            <div className="absolute inset-0 border border-accent/10 rounded-[2.5rem] -rotate-2 transition-transform group-hover:rotate-0 duration-700" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt="Neura Paludo e o ambiente Gandha Yoga"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                data-ai-hint="yoga teacher meditation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
