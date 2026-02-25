
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-16 md:mb-24">
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

        {/* Mobile-First Deep Linking Grid */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <ContactCard 
            icon={MessageCircle}
            label="WhatsApp"
            value="Atendimento Exclusivo"
            href="https://wa.me/5511987654321"
            delay={0.1}
          />
          <ContactCard 
            icon={MapPin}
            label="Endereço"
            value="Visite nosso Estúdio"
            subValue="Jardim Zen, São Paulo"
            href="https://maps.google.com"
            delay={0.2}
          />
          <ContactCard 
            icon={Instagram}
            label="Instagram"
            value="Nossa Comunidade"
            href="https://instagram.com/equilibriumyoga"
            delay={0.3}
          />
        </div>

        {/* The Majestic Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <Link 
            href="https://wa.me/5511987654321"
            target="_blank"
            className="group relative flex items-center justify-center w-full h-20 md:h-24 bg-primary text-white rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
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
          <p className="text-center mt-6 text-muted-foreground/60 text-xs tracking-widest uppercase font-light">
            Vagas limitadas para novas turmas mensais
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon: Icon, 
  label, 
  value, 
  subValue, 
  href, 
  delay 
}: { 
  icon: any, 
  label: string, 
  value: string, 
  subValue?: string, 
  href: string,
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Link 
        href={href} 
        target="_blank"
        className="block p-8 bg-white/50 backdrop-blur-sm border border-black/[0.03] rounded-3xl group transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98]"
      >
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon className="w-5 h-5" />
          </div>
          
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 font-bold">
            {label}
          </span>
          
          <h4 className="font-headline text-2xl text-foreground mb-1">
            {value}
          </h4>
          
          {subValue && (
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              {subValue}
            </p>
          )}
          
          <div className="mt-8 flex items-center text-xs tracking-widest uppercase font-medium text-primary/40 group-hover:text-primary transition-colors">
            Acessar agora
            <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
