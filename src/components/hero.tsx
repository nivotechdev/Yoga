
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/Ultraprofessional_cinematic_commercial_20260.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL1VsdHJhcHJvZmVzc2lvbmFsX2NpbmVtYXRpY19jb21tZXJjaWFsXzIwMjYwLm1wNCIsImlhdCI6MTc3MTI4NjU1OCwiZXhwIjo0OTI0ODg2NTU4fQ.wbb6XHux0Gdf3G8H7Gag2I9mWiYlJnozCJCrqP8fRTI";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video/Image - Clean and Static for Quality */}
      <div className="absolute inset-0 z-0 w-full h-full">
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
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.75]" />
      </div>

      {/* Content - Simple Entrance without Scroll Interaction */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-headline text-4xl md:text-7xl mb-8 leading-[1.1] tracking-tighter"
        >
          Corpo, Mente e Essência
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-body text-lg md:text-xl mb-12 text-white/80 font-light tracking-widest uppercase"
        >
          Respire. Sinta. Reconecte-se.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button size="lg" variant="default" className="rounded-full px-12 h-14 text-sm tracking-widest font-bold uppercase hover:scale-105 transition-all shadow-2xl" asChild>
            <Link href="#contact">Agendar Aula</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-12 h-14 text-sm tracking-widest font-bold uppercase bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground transition-all" asChild>
            <Link href="#services">Ver Práticas</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - Properly positioned at the bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-[24px] h-[40px] border-[1.5px] border-white/20 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" 
          />
        </div>
        <span className="mt-3 text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold">Descubra</span>
      </div>
    </section>
  );
}
