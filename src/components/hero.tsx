"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/videocorreto.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL3ZpZGVvY29ycmV0by5tcDQiLCJpYXQiOjE3NzQ5ODAyMTcsImV4cCI6ODc3NTk3MjIxN30.uRd1BRVKqr3hASXuLYxFCg32QdhhmFzWGTXx3z8BG3c";

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
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "59% 25%" }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] backdrop-brightness-60 backdrop-contrast-120 backdrop-saturate-80" />
      </div>

      {/* Content - Simple Entrance without Scroll Interaction */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white flex flex-col items-center justify-center translate-y-12">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2, type: "spring", stiffness: 50 }}
          className="mt-16"
        >
          <Image 
            src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/yoga-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL3lvZ2EtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzQ3OTMzMzYsImV4cCI6NDg5Njg1NzMzNn0.K2r0j6h4vxZVqslIvfvKceukbAoCWajbQzX8Irve5Wc" 
            alt="Gandha Logo" 
            width={150} 
            height={150} 
            className="brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
