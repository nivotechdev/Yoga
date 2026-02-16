
import { Quote } from "lucide-react";

const feedbacks = [
  {
    text: "Minha vida mudou após começar as aulas de Hatha. Sinto uma redução drástica na ansiedade e minha postura melhorou muito.",
    author: "Juliana Mendes",
    role: "Praticante há 2 anos"
  },
  {
    text: "O ambiente é impecável. Entro no estúdio e já sinto uma paz imediata. As aulas de Vinyasa são o ponto alto da minha semana.",
    author: "Ricardo Santos",
    role: "Praticante há 6 meses"
  },
  {
    text: "A meditação guiada me ajudou a ter clareza em momentos difíceis. O atendimento é extremamente atencioso e personalizado.",
    author: "Beatriz Lima",
    role: "Praticante há 1 ano"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-foreground">O que nossos alunos sentem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((fb, index) => (
            <div key={index} className="reveal bg-background p-10 rounded-2xl shadow-sm border border-border/40 relative" style={{ animationDelay: `${index * 150}ms` }}>
              <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />
              <p className="text-muted-foreground italic mb-8 leading-relaxed font-light text-lg relative z-10">
                "{fb.text}"
              </p>
              <div>
                <h4 className="font-headline text-xl text-foreground font-semibold">{fb.author}</h4>
                <p className="text-accent text-sm uppercase tracking-wider">{fb.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
