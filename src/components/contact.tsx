
"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative py-40 px-6 bg-background overflow-hidden selection:bg-accent selection:text-white"
    >
      {/* Editorial Background Text (Parallax) */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute top-20 -right-20 pointer-events-none select-none"
      >
        <span className="font-headline text-[20vw] leading-none text-primary/5 italic whitespace-nowrap opacity-50">
          Equilibrium
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start relative z-10">
          
          {/* Left Column: Editorial Content */}
          <div className="space-y-16">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="font-headline text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] tracking-tighter"
              >
                Sua jornada <br /> 
                <span className="italic text-accent">começa</span> aqui.
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="font-body text-xl md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed"
            >
              Um convite à quietude e ao encontro com sua essência mais profunda. Permita-nos guiar sua prática em um ambiente de serenidade absoluta.
            </motion.p>

            {/* Structured Info */}
            <div className="grid gap-12 pt-8">
              <InfoItem 
                icon={MapPin}
                label="Endereço"
                value="Av. das Palmeiras, 1000 — Jardim Zen, São Paulo"
                href="https://maps.google.com"
              />
              <div className="flex flex-wrap gap-x-20 gap-y-12">
                <InfoItem 
                  icon={Mail}
                  label="E-mail"
                  value="concierge@equilibrium.com"
                  href="mailto:concierge@equilibrium.com"
                />
                <InfoItem 
                  icon={Instagram}
                  label="Instagram"
                  value="@equilibriumyoga"
                  href="https://instagram.com/equilibriumyoga"
                />
              </div>
            </div>
          </div>

          {/* Right Column: The Magnetic CTA */}
          <div className="lg:h-full flex flex-col justify-end lg:items-end pt-20 lg:pt-0">
            <MagneticButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group"
    >
      <span className="block text-[10px] uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
        {label}
      </span>
      <Link 
        href={href} 
        target="_blank"
        className="font-headline text-2xl text-foreground hover:text-accent transition-colors duration-500 flex items-center gap-3"
      >
        {value}
        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
      </Link>
    </motion.div>
  );
}

function MagneticButton() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic strength
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  // Sync springs with position
  React.useEffect(() => {
    springX.set(position.x);
    springY.set(position.y);
  }, [position, springX, springY]);

  return (
    <div 
      className="relative w-80 h-80 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={buttonRef}
        style={{ x: springX, y: springY }}
        className="w-64 h-64 rounded-full bg-foreground flex items-center justify-center p-8 text-center cursor-pointer group shadow-2xl overflow-hidden relative"
      >
        {/* Animated background on hover */}
        <motion.div 
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-accent z-0"
        />
        
        <Link 
          href="https://wa.me/5511987654321" 
          target="_blank"
          className="relative z-10 flex flex-col items-center gap-4 text-background group-hover:text-white transition-colors duration-500"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.5em] mb-2 font-medium">
            Atendimento Exclusivo
          </span>
          <span className="font-headline text-3xl leading-tight">
            Falar com nosso <br /> Concierge
          </span>
          <ArrowUpRight className="w-8 h-8 mt-4 animate-bounce" />
        </Link>
      </motion.div>

      {/* Outer ring decorative */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 border border-foreground/10 rounded-full pointer-events-none"
      />
    </div>
  );
}
