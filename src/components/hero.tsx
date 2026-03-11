
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/Ultraprofessional_cinematic_commercial_20260.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL1VsdHJhcHJvZmVzc2lvbmFsX2NpbmVtYXRpY19jb21tZXJjaWFsXzIwMjYwLm1wNCIsImlhdCI6MTc3MTI4NjU1OCwiZXhwIjo0OTI0ODg2NTU4fQ.wbb6XHux0Gdf3G8H7Gag2I9mWiYlJnozCJCrqP8fRTI";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video/Image with Parallax */}
      <motion.div 
        style={{ y: yVideo }}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImg?.imageUrl}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          {heroImg && (
            <Image
              src={heroImg.imageUrl}
              alt={heroImg.description}
              fill
              className="object-cover"
              priority
            />
          )}
        </video>
        {/* Quality fix: Separate overlay for brightness instead of applying to video tag */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.7]" />
      </motion.div>

      {/* Content with Smooth Reveal and Scroll Animation */}
      <motion.div 
        style={{ y: yContent, opacity: opacityContent, scale: scaleContent }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-headline text-5xl md:text-8xl mb-6 leading-tight tracking-tighter"
        >
          Corpo, Mente e Essência
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-body text-xl md:text-2xl mb-10 text-white/90 font-light tracking-wide"
        >
          Respire. Sinta. Reconecte-se.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" variant="default" className="rounded-full px-10 h-14 text-lg hover:scale-105 transition-all shadow-xl" asChild>
            <Link href="#contact">Agendar Aula</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-foreground transition-all" asChild>
            <Link href="#services">Ver Práticas</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Enhanced Centering and Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: opacityContent }}
        className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="w-[26px] h-[44px] border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-[2px]">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
          />
        </div>
        <span className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
