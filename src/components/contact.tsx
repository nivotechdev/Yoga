
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Em breve nossa equipe entrará em contato com você.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-foreground">Comece sua jornada hoje</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Permita-se viver uma experiência de reconexão e bem-estar. Agende sua primeira aula e sinta a diferença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 reveal items-start">
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <h3 className="font-headline text-2xl mb-4 text-foreground">Localização & Contato</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Av. das Palmeiras, 1000 - Jardim Zen<br />São Paulo, SP</p>
                <p>WhatsApp: (11) 98765-4321</p>
                <p>Instagram: @equilibriumyoga</p>
                <p>Email: contato@equilibriumyoga.com</p>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="font-headline text-2xl mb-4 text-primary">Horário de Funcionamento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between"><span>Segunda - Sexta:</span> <span>06:00 - 21:00</span></p>
                <p className="flex justify-between"><span>Sábado:</span> <span>08:00 - 13:00</span></p>
                <p className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" required placeholder="Seu nome" className="rounded-xl border-border/60 bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required placeholder="seu@email.com" className="rounded-xl border-border/60 bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Como podemos te ajudar?</Label>
              <Textarea id="message" required placeholder="Diga qual prática te interessa ou sua dúvida..." className="rounded-xl min-h-[120px] border-border/60 bg-white" />
            </div>
            <Button type="submit" disabled={loading} className="w-full h-14 rounded-full text-lg font-medium shadow-lg hover:scale-[1.02] transition-all">
              {loading ? "Enviando..." : "Quero praticar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
