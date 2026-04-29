import { Ruler, ShieldCheck, Headset, Cog, Layers } from "lucide-react";

const items = [
  { icon: Ruler, title: "Sob Medida", desc: "Cada produto fabricado conforme sua aplicação." },
  { icon: ShieldCheck, title: "Alta Durabilidade", desc: "Materiais selecionados para vida útil prolongada." },
  { icon: Headset, title: "Atendimento Direto", desc: "Fale direto com o especialista, sem intermediários." },
  { icon: Cog, title: "Aço Inox 100%", desc: "Equipamentos resistentes à corrosão e ao calor." },
  { icon: Layers, title: "Versatilidade", desc: "Soluções para múltiplos segmentos industriais." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Por que a WM
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Diferenciais que <span className="text-gradient-ember">aquecem</span> sua produção
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-ember/40 hover:shadow-ember"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ember/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="font-display text-5xl text-ember/20 transition-colors group-hover:text-ember/40">
                0{i + 1}
              </span>
              <item.icon className="mt-4 h-7 w-7 text-ember" />
              <h3 className="mt-4 font-display text-lg text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
