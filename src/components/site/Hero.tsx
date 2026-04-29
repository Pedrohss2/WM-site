import { ArrowRight, MessageCircle, ShieldCheck, Wrench, Factory } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-hero-gradient pt-24 text-primary-foreground"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt="Resistências elétricas industriais incandescentes em forno"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-12 md:px-8 md:pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
            Indústria · Prado Ferreira — PR
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Soluções em <span className="text-gradient-ember">Resistências Elétricas</span>{" "}
            Industriais
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Fabricação, manutenção e montagem de equipamentos industriais sob medida — com a
            qualidade, segurança e durabilidade que sua produção exige.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5543996600605?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-ember-gradient px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ember-foreground shadow-ember transition-transform hover:scale-[1.03]"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5543996600605"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { icon: ShieldCheck, label: "Qualidade", value: "Aço Inox" },
              { icon: Wrench, label: "Sob Medida", value: "100%" },
              { icon: Factory, label: "Indústria", value: "Pesada" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="h-6 w-6 text-ember" />
                <dt className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">
                  {s.label}
                </dt>
                <dd className="font-display text-xl text-primary-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="absolute -right-20 top-12 h-[520px] w-[520px] rounded-full bg-ember/20 blur-3xl" />
          <div className="relative ml-auto mt-8 aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-deep animate-float">
            <img
              src={heroImage.src}
              alt="Forno industrial com resistências em operação"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-ember">
                Em operação
              </p>
              <p className="mt-1 font-display text-2xl text-primary-foreground">
                Calor controlado, performance industrial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
