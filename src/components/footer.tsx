import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'site-logo');
  const instagramUrl = "https://www.instagram.com/gandhayoga/";
  const whatsappUrl = "https://wa.me/5554999882995";
  const email = "devargasaline@gmail.com";

  return (
    <footer className="bg-foreground text-background py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-12 w-48">
                <Image
                  src={logo?.imageUrl || ""}
                  alt="Gandha Yoga"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-background/60 max-w-sm mb-6 font-light">
              Nossa missão é guiar você em uma jornada de autoconhecimento e equilíbrio através de práticas milenares adaptadas ao ritmo contemporâneo.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-background/60 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-3 text-background/60 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>(54) 99988-2995</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link 
                href={instagramUrl} 
                target="_blank"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href={whatsappUrl} 
                target="_blank"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline text-xl mb-6 text-accent">Links Rápidos</h4>
            <ul className="space-y-3 text-background/60 font-light">
              <li><Link href="#about" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Práticas</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Agendamento</Link></li>
              <li><Link href="/profissionais" className="hover:text-white transition-colors">Profissionais</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-xl mb-6 text-accent">Legal</h4>
            <ul className="space-y-3 text-background/60 font-light">
              <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/40 font-light">
          <p>© {new Date().getFullYear()} Gandha Yoga Space. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
