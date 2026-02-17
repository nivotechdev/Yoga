
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");
  // Nova URL do vídeo cinematográfico
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/Ultraprofessional_cinematic_commercial_20260.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL1VsdHJhcHJvZmVzc2lvbmFsX2NpbmVtYXRpY19jb21tZXJjaWFsXzIwMjYwLm1wNCIsImlhdCI6MTc3MTI4NjU1OCwiZXhwIjo0OTI0ODg2NTU4fQ.wbb6XHux0Gdf3G8H7Gag2I9mWiYlJnozCJCrqP8fRTI";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 h-[120%]"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg?.imageUrl}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback Image */}
          <Image
            src={heroImg?.imageUrl || ""}
            alt={heroImg?.description || ""}
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <h1 className="font-headline text-5xl md:text-7xl mb-6 leading-tight animate-fade-in opacity-0 [animation-delay:200ms]">
          Equilíbrio entre corpo, mente e essência.
        </h1>
        <p className="font-body text-xl md:text-2xl mb-10 opacity-0 animate-fade-in [animation-delay:600ms] text-white/90 font-light">
          Um espaço exclusivo para desacelerar, respirar e reconectar-se com você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in [animation-delay:1000ms]">
          <Button size="lg" variant="default" className="rounded-full px-10 h-14 text-lg hover:scale-105 transition-all shadow-xl" asChild>
            <Link href="#contact">Agende sua aula experimental</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-foreground transition-all" asChild>
            <Link href="#services">Conheça nossas práticas</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
