import cartucho from "@/assets/cartucho.jpg";
import cartuchoL from "@/assets/cartucho-l.jpg";
import tubularReto from "@/assets/tubular-reto.jpg";
import tubularForno from "@/assets/tubular-forno.jpg";
import tubularAletada from "@/assets/tubular-aletada.jpg";
import tubularRosca from "@/assets/tubular-rosca.jpg";
import tubularFlange from "@/assets/tubular-flange.jpg";
import tubularBM from "@/assets/tubular-banho-maria.jpg";
import tubularCaracol from "@/assets/tubular-caracol.jpg";
import coleira from "@/assets/coleira.jpg";
import bainha from "@/assets/bainha.jpg";
import ebulidor from "@/assets/ebulidor.jpg";
import Image, { StaticImageData } from "next/image";
import { CatalogDownload } from "./CatalogPDF";


export type Product = {
  title: string;
  desc: string;
  image: StaticImageData | string;
  tag: string;
};

export const groups: { name: string; items: Product[] }[] = [
  {
    name: "Resistências Cartucho",
    items: [
      {
        title: "Cartucho Comum",
        desc: "Para seladoras, prensas térmicas e injetoras. Fácil instalação e alta performance.",
        image: cartucho,
        tag: "Cartucho",
      },
      {
        title: "Cartucho Tipo L",
        desc: "Saída de fio em 90° — ideal para espaços reduzidos e aplicações restritas.",
        image: cartuchoL,
        tag: "Cartucho",
      },
    ],
  },
  {
    name: "Resistências Tubulares",
    items: [
      {
        title: "Tubular Reto",
        desc: "Modelo padrão para aplicações industriais variadas com excelente trocas de calor.",
        image: tubularReto,
        tag: "Tubular",
      },
      {
        title: "Tubular para Forno",
        desc: "Fornos comuns ou industriais — diversas formas para aquecimento uniforme.",
        image: tubularForno,
        tag: "Tubular",
      },
      {
        title: "Tubular Aletada",
        desc: "Múltiplas aletas para passagem de ar — túneis de encolhimento e estufas secas.",
        image: tubularAletada,
        tag: "Tubular",
      },
      {
        title: "Tubular com Rosca",
        desc: "Modelos 1\" a 2.1/2\" com 1 a 6 elementos — saunas, boilers e aquecimento de líquidos.",
        image: tubularRosca,
        tag: "Tubular",
      },
      {
        title: "Resistência Flange",
        desc: "Fixação por flange para alta pressão — boilers, saunas e tanques industriais.",
        image: tubularFlange,
        tag: "Tubular",
      },
      {
        title: "Tipo Banho Maria",
        desc: "Para balcões térmicos e carros térmicos de restaurantes e refeitórios.",
        image: tubularBM,
        tag: "Tubular",
      },
      {
        title: "Tubular Caracol",
        desc: "Várias voltas em um ponto — concentração máxima de calor onde você precisa.",
        image: tubularCaracol,
        tag: "Tubular",
      },
    ],
  },
  {
    name: "Coleiras, Bainhas e Utilitários",
    items: [
      {
        title: "Coleira para Extrusoras",
        desc: "Mica ou cerâmica — versão cerâmica entrega o dobro da potência e durabilidade.",
        image: coleira,
        tag: "Coleira",
      },
      {
        title: "Bainha Reta ou L",
        desc: "Mica ou cerâmica para seladoras, estamparias e prensas térmicas.",
        image: bainha,
        tag: "Bainha",
      },
      {
        title: "Ebulidor Rabo Quente",
        desc: "Simples e prático para ferver líquidos com agilidade — caneca ou reservatório.",
        image: ebulidor,
        tag: "Utilitário",
      },
    ],
  },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-deep">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {typeof p.image === "string" ? (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="border-t border-border p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
          {p.tag}
        </span>
        <h3 className="mt-2 font-display text-xl text-primary">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
      </div>
    </article>
  );
}

export function Produtos() {
  return (
    <section id="produtos" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Catálogo
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Linha completa de <span className="text-gradient-ember">resistências industriais</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todos os produtos podem ser fabricados sob medida, com dimensões e potências conforme
            sua aplicação.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 cursor-pointer">
            <CatalogDownload className="min-w-[200px]" />
          </div>
        </div>

        <div className="mt-16 space-y-20">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
                <h3 className="font-display text-2xl text-primary md:text-3xl">{g.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {g.items.length} {g.items.length === 1 ? "item" : "itens"}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <ProductCard key={p.title} p={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
