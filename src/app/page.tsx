
"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Differentials } from "@/components/differentials";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
