import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export function CtaWhatsapp() {
  return (
    <section id="orcamento" className="relative overflow-hidden bg-ember-gradient py-24 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center text-ember-foreground md:px-8">
        <h2 className="mt-6 font-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
          Faça seu <span className="text-primary">orçamento</span>
          <br /> agora mesmo
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Atendimento rápido, direto com o especialista. Receba seu orçamento personalizado em
          minutos.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5543996600605?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-primary px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-deep transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar via WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+554332441734"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-primary/30 bg-white/10 px-8 py-5 text-sm font-bold uppercase tracking-[0.15em] text-ember-foreground backdrop-blur transition-colors hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            (43) 3244-1734
          </a>
        </div>
      </div>
    </section>
  );
}
