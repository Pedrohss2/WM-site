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
import imagem from "@/assets/image.png";
import ebulidor from "@/assets/ebulidor.jpg";
import coleiraCircular from "@/assets/coleira-circular.png";
import acendedor from "@/assets/acendedor-carvao.png";
import termopar from "@/assets/termopar-j.jpeg";
import tubularComum from "@/assets/tubular-comum.png";
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
        title: "Tubular reto",
        desc: "Cartucho comum presente em seladoras, prensas térmicas, ou injetoras com fácil instalação..",
        image: tubularComum,
        tag: "Cartucho",
      },
      {
        title: "Cartucho Comum",
        desc: "Para seladoras, prensas térmicas e injetoras. Fácil instalação e alta performance.",
        image: cartuchoL,
        tag: "Cartucho",
      },
      {
        title: "Termopar tipo J",
        desc: "Sensor termopar robusto para medição de temperatura exata em qualquer máquinario.",
        image: termopar,
        tag: "Cartucho",
      },
      {
        title: "Cartucho Tipo L",
        desc: "Cartucho comum presente em seladoras, prensas térmicas, ou injetoras com fácil instalação.",
        image: cartucho,
        tag: "Cartucho",
      },
    ],
  },
  {
    name: "Resistências Tubulares",
    items: [
      {
        title: "tubulares caracol",
        desc: "possuem várias voltas em um ponto específico para garantir maior concentração de calor.",
        image: tubularReto,
        tag: "Tubular",
      },
      {
        title: "Tubular para forno",
        desc: "Usadas em fornos comuns ou industriais, são feitas em vários modelos e formas para melhor aquecimento.",
        image: tubularBM,
        tag: "Tubular",
      },
      {
        title: "Tubular Aletada",
        desc: "MFeitas com multiplas aletas para passagem de ar, presentes em túneis de encolhimento, estufas secas e outros..",
        image: tubularFlange,
        tag: "Tubular",
      },
      {
        title: "Resistência flange",
        desc: "São normalmente usadas em saunas, boilers e outros, variam em medidas de 1, 1.1/4, 1.1/2, 2 e 2, 1/2 podendo ter de 1 à 6 elementos.",
        image: tubularRosca,
        tag: "Tubular",
      },
      {
        title: "Rosca ovalada",
        desc: "Este modelo de rosca é fixado por meio de parafusos normalmente encontrado em saunas e aquecedores.",
        image: tubularCaracol,
        tag: "Tubular",
      },
      {
        title: "Tipo Banho Maria",
        desc: "Para balcões térmicos e carros térmicos de restaurantes e refeitórios.",
        image: imagem,
        tag: "Tubular",
      },
    ],
  },
  {
    name: "Coleiras, Bainhas e Utilitários",
    items: [
      {
        title: "Ebolidor rabo quente",
        desc: "Simples e prático para ferver líquidos com agilidade, podendo ser feito tanto para grandes reservatórios ou uma simples caneca.",
        image: coleira,
        tag: "Coleira",
      },
      {
        title: "Acendedor de carvão",
        desc: "Item indispensável para fazer aquele churrasco e adiantar o fogo, fácil de levar e eficaz no serviço que faz",
        image: acendedor,
        tag: "Utilitário",
      },

      {
        title: "Coleira circular",
        desc: "Coleiras para extrusoras e tubos feitas em papel de mica ou em cerâmica, podendo atingir mais que o dobro da potência e durabilidade de uma de mica.",
        image: coleiraCircular,
        tag: "Utilitário",
      },
      {
        title: "Bainha Reta ou L",
        desc: "Bainhas em mica ou cerâmica para seladoras, estamparias, e prensas térmicas, são simples com ligação por fio ou pino e podendo ser feitas em conjunto para injetoras diversas.",
        image: bainha,
        tag: "Utilitário",
      },
    ],
  },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-deep">
      <div className="relative aspect-[4/3] overflow-hidden bg-white dark:bg-secondary">
        {typeof p.image === "string" ? (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-border p-4 md:p-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ember sm:text-xs">
          {p.tag}
        </span>
        <h3 className="mt-1 font-display text-sm text-primary sm:text-xl md:mt-2">{p.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm md:mt-2">
          {p.desc}
        </p>
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
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
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
