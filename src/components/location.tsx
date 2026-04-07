import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  const address = "Av. São João, 1669 - Centro, Caxias do Sul - RS, 95020-340";
  const mapSearchQuery = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapSearchQuery}`;

  return (
    <section id="location" className="py-12 md:py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="reveal lg:col-span-1">
            <span className="text-primary text-xs tracking-[0.4em] uppercase mb-6 block font-medium">
              Onde nos encontrar
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-8 text-foreground leading-tight">
              Um refúgio no coração de <span className="italic text-primary">Caxias do Sul.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline text-xl text-foreground mb-1">Nosso Estúdio</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full h-14 rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all gap-2"
                onClick={() => window.open(mapsUrl, "_blank")}
              >
                <Navigation className="w-4 h-4" />
                Como chegar via GPS
              </Button>

              <div className="p-6 rounded-2xl bg-card border border-border/40">
                <p className="text-sm text-muted-foreground italic font-light">
                  "O espaço foi estrategicamente escolhido para oferecer silêncio e facilidade de acesso, garantindo que sua prática comece antes mesmo de entrar no estúdio."
                </p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="reveal lg:col-span-2 h-[400px] md:h-[600px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Gandha Yoga"
              src={`https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
