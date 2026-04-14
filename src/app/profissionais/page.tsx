"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProfissionaisPage() {
  useReveal();

  const teachers = [
    {
      name: "Neura Paludo",
      role: "Professora de Yoga",
      bio: "Professora de Yoga há mais de 15 anos, com formação internacional e instrutora de Breathwork. Sua abordagem é focada na autorregulação profunda através da respiração e consciência corporal, trazendo o equilíbrio necessário para a vida contemporânea.",
      specialties: ["Hatha Yoga", "Breathwork Integrativo"],
      imageId: "teacher-neura"
    },
    {
      name: "Aline de Vargas",
      role: "Yoga, Terapeuta Integrativa & Coach",
      bio: "Há mais de 10 anos dedicando sua vida ao crescimento pessoal e profissional de seus alunos. Integra o Yoga com terapias vibracionais e coaching, oferecendo uma jornada de cura e expansão de consciência única.",
      specialties: ["Vinyasa Flow", "Meditação Guiada"],
      imageId: "teacher-aline"
    }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-card pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-xs tracking-[0.5em] uppercase mb-6 block font-semibold"
          >
            Nossa Curadoria
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter"
          >
            A maestria por trás <br /> da <span className="italic text-primary">Gandha Yoga.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-10 text-xl text-muted-foreground font-light leading-relaxed"
          >
            Unimos décadas de experiência para oferecer um acompanhamento que transcende a prática física, focando na sua evolução integral.
          </motion.p>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {teachers.map((teacher, index) => {
            const img = PlaceHolderImages.find(i => i.id === teacher.imageId);
            return (
              <div key={teacher.name}>
                <div 
                  className={cn(
                    "grid md:grid-cols-2 gap-16 items-center reveal",
                    index % 2 !== 0 && "md:flex-row-reverse"
                  )}
                >
                  <div className={cn("relative h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl group", index % 2 !== 0 && "md:order-last")}>
                    <Image
                      src={img?.imageUrl || ""}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <span className="text-primary font-medium tracking-widest uppercase text-xs mb-3 block">
                        {teacher.role}
                      </span>
                      <h2 className="font-headline text-4xl md:text-6xl text-foreground leading-none">
                        {teacher.name}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {teacher.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  );
}
