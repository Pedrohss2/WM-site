import { Cog, Flame, Sandwich, SprayCan, CircuitBoard } from "lucide-react";
import Image from "next/image";
import fogao from "@/assets/fogao.jpg";
import fritadeira from "@/assets/fritadeira.jpg";
import painel from "@/assets/painel-aberto.jpg";
import painel2 from "@/assets/painel2.png";

type Service = { title: string; desc: string; image?: any };

const services: Service[] = [
  {
    title: "Fabricação de Resistências",
    desc: "Produção sob medida de qualquer modelo de resistência elétrica industrial.",
  },
  {
    title: "Fogões Industriais",
    desc: "Montagem completa de 1 a 8 bocas — com ou sem chapa e forno inferior.",
    image: fogao,
  },
  {
    title: "Fritadeiras",
    desc: "Fabricação de fritadeiras a óleo ou água/óleo em diversos modelos e potências.",
    image: fritadeira,
  },
  {
    title: "Limpeza & Manutenção",
    desc: "Serviço completo de limpeza, revisão e manutenção dos seus equipamentos.",
  },
  {
    title: "Painéis Industriais",
    desc: "Montagem e instalação de painéis com alta versatilidade para automação.",
    image: painel,
  },
  {
    title: "Painel",
    desc: "Fabricação de painéis com alta versatilidade para automação.",
    image: painel2,
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative bg-primary py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Serviços
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Soluções <span className="text-gradient-ember">completas</span> para sua indústria
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75">
            Da peça ao painel: fabricamos, montamos e mantemos seus equipamentos industriais.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-ember/50 hover:bg-white/[0.08]"
            >
              {s.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4 md:p-6">
                <h3 className="mt-2 font-display text-sm text-primary-foreground sm:text-base md:mt-4 md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70 md:mt-2 md:text-sm">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
