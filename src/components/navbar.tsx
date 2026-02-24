
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Leaf, Instagram, Facebook, MessageCircle } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      // Usando uma lógica mais estável para evitar atualizações excessivas
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Verificação inicial
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Práticas", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div
        className={cn(
          "w-full transition-all duration-500 ease-[0.22,1,0.36,1] flex items-center pointer-events-auto",
          isScrolled
            ? "max-w-3xl h-16 bg-white/80 backdrop-blur-lg rounded-full border border-white/20 shadow-xl shadow-black/5 px-8"
            : "max-w-7xl h-20 bg-transparent px-0"
        )}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 w-full items-center">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2 group">
              <Leaf className={cn(
                "w-6 h-6 transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )} />
              <span className={cn(
                "font-headline text-2xl tracking-wide transition-colors duration-500",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                Equilibrium <span className="text-accent font-light">Yoga</span>
              </span>
            </Link>
          </div>

          <nav className="flex justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-500",
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
              className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
              asChild
            >
              <Link href="#contact">Agendar</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className={cn(
              "w-5 h-5 transition-colors duration-500",
              isScrolled ? "text-primary" : "text-white"
            )} />
            <span className={cn(
              "font-headline text-xl tracking-wide transition-colors duration-500",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Equilibrium
            </span>
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
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px] bg-background">
              <SheetHeader className="text-left mb-8">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                    <Leaf className="w-6 h-6 text-primary" />
                    <span className="font-headline text-2xl">
                      Equilibrium <span className="text-accent">Yoga</span>
                    </span>
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
                        className="text-2xl font-headline text-foreground/80 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-8 pb-6">
                <div className="flex gap-6 justify-center text-primary/60">
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
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
