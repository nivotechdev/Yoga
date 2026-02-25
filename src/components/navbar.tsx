"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const logoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/sign/yoga/yoga-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jOWY1OGE2Ni03MDFhLTRhNDQtOWJhZC0zOGRkNmVkYTNhODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ5b2dhL3lvZ2EtcmVtb3ZlYmctcHJldmlldy5wbmciLCJpYXQiOjE3NzIwMzEyNzQsImV4cCI6MzMzMDgwMzEyNzR9.KpEnBPjF57rgceI_Ka7v5gWMmhyYF901NYXC81Bomzk";
  const instagramUrl = "https://www.instagram.com/gandhayoga/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Práticas", href: "#services" },
    { name: "Horários", href: "#schedule" },
    { name: "Sobre", href: "#about" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Contato", href: "#contact" },
  ];

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={cn(
          "w-full transition-all duration-500 ease-dynamic-island flex items-center pointer-events-auto overflow-hidden",
          isScrolled
            ? "max-w-4xl h-16 bg-white/80 backdrop-blur-lg rounded-full border border-white/20 shadow-xl shadow-black/5 px-6"
            : "max-w-7xl h-20 bg-transparent px-4"
        )}
      >
        <div className="hidden md:grid grid-cols-3 w-full items-center">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative h-10 w-40">
                <Image
                  src={logoUrl}
                  alt="Gandha Yoga"
                  fill
                  className={cn(
                    "object-contain transition-all duration-500",
                    isScrolled ? "brightness-100" : "brightness-0 invert"
                  )}
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="flex justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-500 whitespace-nowrap",
                  isScrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-end">
            <Button 
              variant="default" 
              className={cn(
                "rounded-full px-6 transition-all duration-300 hover:scale-105",
                isScrolled ? "bg-primary" : "bg-primary/90 text-white"
              )}
              asChild
            >
              <Link href="#contact">Agendar</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-8 w-32">
              <Image
                src={logoUrl}
                alt="Gandha Yoga"
                fill
                className={cn(
                  "object-contain transition-all duration-500",
                  isScrolled ? "brightness-100" : "brightness-0 invert"
                )}
              />
            </div>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "transition-colors duration-500",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[350px] bg-background">
              <SheetHeader className="text-left mb-8">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                    <div className="relative h-10 w-40">
                      <Image
                        src={logoUrl}
                        alt="Gandha Yoga"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-2xl font-headline text-foreground/80 hover:text-primary transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-8 pb-6">
                <div className="flex gap-6 justify-center text-primary/60">
                  <Link href={instagramUrl} target="_blank" className="hover:text-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link href="https://wa.me/5511987654321" target="_blank" className="hover:text-primary transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </Link>
                </div>
                <Button className="w-full h-14 rounded-full text-lg font-medium" asChild onClick={handleLinkClick}>
                  <Link href="#contact">Agendar Agora</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}