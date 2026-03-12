import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  const aboutImg = PlaceHolderImages.find((img) => img.id === "about-img");

  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <span className="text-accent text-xs tracking-[0.4em] uppercase mb-6 block font-medium">
              Nossa Essência
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground leading-[1.1]">
              Sete anos de <br />
              <span className="italic text-accent">presença e cuidado.</span>
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                O Gandha é um refúgio para a harmonia física e espiritual. Baseados no <strong>Hatha Yoga Integrativo</strong>, acolhemos todos os níveis em uma jornada de conexão interna e não-violência, transformando o excesso da vida urbana em equilíbrio profundo.
              </p>

              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="rounded-full px-10 h-14 border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-white hover:border-accent transition-all duration-500 group shadow-lg hover:shadow-accent/20 active:scale-95" 
                  asChild
                >
                  <Link href="/profissionais" className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Conheça Nossa Equipe</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-12 border-t border-accent/10">
                <div>
                  <h4 className="font-headline text-xl text-foreground mb-1">Neura Paludo</h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">Yoga & Breathwork</p>
                  <p className="text-sm italic leading-relaxed">
                    Especialista em autorregulação através da respiração e consciência corporal.
                  </p>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-foreground mb-1">Aline de Vargas</h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">Yoga & Terapias</p>
                  <p className="text-sm italic leading-relaxed">
                    Há 10 anos guiando o crescimento pessoal através de terapias integrativas e vibracionais.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative reveal h-[500px] md:h-[650px] group">
            <div className="absolute inset-0 border border-accent/10 rounded-[2.5rem] -rotate-2 transition-transform group-hover:rotate-0 duration-1000" />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt="Ambiente Gandha Yoga"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                data-ai-hint="yoga meditation space"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
