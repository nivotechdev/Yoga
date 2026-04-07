"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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

export default function ProfissionaisPage() {
  useReveal();

  const teachers = [
    {
      name: "Neura Paludo",
      role: "Yoga & Breathwork Specialist",
      bio: "Professora de Yoga com formação internacional e instrutora de Breathwork. Sua abordagem é focada na autorregulação profunda através da respiração e consciência corporal, trazendo o equilíbrio necessário para a vida contemporânea.",
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
            A maestria por trás <br /> do <span className="italic text-primary">Gandha Yoga.</span>
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
            const teacherPractices = practices.filter(p => teacher.specialties.includes(p.title));
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

                <div className="mt-16">
                  <h4 className="font-headline text-2xl text-foreground mb-8 italic text-center">Especialidades de {teacher.name.split(" ")[0]}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {teacherPractices.map((practice, index) => {
                      const img = PlaceHolderImages.find((i) => i.id === practice.imageId);
                      return (
                        <div 
                          key={practice.title} 
                          className="reveal group h-full" 
                          style={{ transitionDelay: `${index * 150}ms` }}
                        >
                          <div className="bg-card h-full p-6 rounded-[2.5rem] border border-primary/5 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] mb-8 shadow-inner">
                              <Image
                                src={img?.imageUrl || ""}
                                alt={practice.title}
                                fill
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                data-ai-hint={img?.imageHint}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            <div className="flex-1 flex flex-col">
                              <h3 className="font-headline text-2xl text-foreground transition-colors duration-500 group-hover:text-primary mb-3">
                                {practice.title}
                              </h3>
                              
                              <p className="text-muted-foreground leading-relaxed font-light text-sm mb-4">
                                {practice.description}
                              </p>

                              <div className="mt-auto pt-4 border-t border-primary/10 flex items-center justify-between">
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
