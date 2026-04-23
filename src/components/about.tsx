import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {

  return (
    <section id="about" className="py-12 md:py-16 px-6 overflow-hidden">
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
                A Gandha é um refúgio para a harmonia física e espiritual. Baseada no <strong>Hatha Yoga Integrativo</strong>, acolhemos todos os níveis em uma jornada de conexão interna e não-violência, transformando o excesso da vida urbana em equilíbrio profundo.
              </p>

              <div className="pt-6">
                <Button 
                  variant="outline" 
                  className="rounded-full px-12 h-16 border-accent/80 bg-accent/5 text-accent hover:bg-accent hover:text-white hover:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all duration-700 group active:scale-95" 
                  asChild
                >
                  <Link href="/profissionais" className="flex items-center gap-4">
                    <span className="text-[11px] tracking-[0.4em] font-bold uppercase whitespace-nowrap">Conheça Nossa Equipe</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-12 border-t border-accent/10">
                <div>
                  <h4 className="font-headline text-xl text-foreground mb-1">Neura Paludo</h4>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">Yoga</p>
                  <p className="text-sm italic leading-relaxed">
                     Há 15 anos atuando como especialista em autorregulação através da respiração e consciência corporal.
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
            <div className="relative h-full overflow-hidden rounded-[2.5rem]">
              <Image
                src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/Whisk_f2986d6df322671955c4d561328cdeaedr-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL1doaXNrX2YyOTg2ZDZkZjMyMjY3MTk1NWM0ZDU2MTMyOGNkZWFlZHItcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzU1Nzk0MjcsImV4cCI6Mjk3Nzk1NDc0Mjd9.NpgCFYfmSe8R_P-9nA5KVUX0gx_KNiGRKA9vGMBCG-U"
                alt="Ambiente Gandha Yoga"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}