"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Schedule } from "@/components/schedule";
import { Differentials } from "@/components/differentials";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Differentials />
      <Location />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
