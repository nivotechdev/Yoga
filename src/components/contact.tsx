"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-40 px-6 bg-[#F9F7F2] overflow-hidden"
    >
      {/* Editorial Decorative Background */}
      <div className="absolute top-10 right-[-5%] pointer-events-none select-none hidden lg:block">
        <span className="font-headline text-[15vw] leading-none text-primary/5 italic whitespace-nowrap">
          Concierge
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
        <div className="mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 block font-semibold"
          >
            Atendimento Exclusivo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] tracking-tighter"
          >
            Sua jornada <br /> 
            <span className="italic text-accent">começa</span> aqui.
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed border-l-2 border-accent/20 pl-6 md:pl-8">
            <p>
              A verdadeira sofisticação reside na clareza da mente e na harmonia do corpo. O <span className="text-foreground font-medium italic">Gandha</span> não é apenas um estúdio; é o santuário onde o tempo desacelera e sua melhor versão emerge.
            </p>
            <p>
              Em nossas turmas exclusivas de número reduzido, você não é apenas um praticante, é parte de uma comunidade que valoriza a <span className="text-accent font-medium">excelência</span> e o autoconhecimento profundo. 
            </p>
            <p className="text-foreground font-normal">
              O convite está feito: troque o excesso pela essência. Agende sua primeira prática e sinta o impacto imediato de um corpo e mente em perfeito equilíbrio.
            </p>
          </div>
        </motion.div>

        {/* The Majestic Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link 
            href="https://wa.me/5511987654321"
            target="_blank"
            className="group relative flex items-center justify-center w-full md:w-max md:px-16 h-20 md:h-24 bg-primary text-white rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Pulsing Glow Effect */}
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/10"
            />
            
            <div className="relative z-10 flex items-center gap-4">
              <span className="font-body text-lg md:text-xl tracking-widest uppercase font-medium">
                Agendar minha primeira prática
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>
          <p className="mt-8 text-muted-foreground/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">
            Vagas limitadas para novas turmas mensais • Atendimento Concierge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
