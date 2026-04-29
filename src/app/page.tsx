import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sobre } from "@/components/site/Sobre";
import { Produtos } from "@/components/site/Produtos";
import { Servicos } from "@/components/site/Servicos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { CtaWhatsapp } from "@/components/site/CtaWhatsapp";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <h1 className="sr-only">
        WM Resistências Elétricas — Soluções industriais sob medida em Prado Ferreira, PR
      </h1>
      <Hero />
      <Sobre />
      <Produtos />
      <Servicos />
      <Diferenciais />
      <CtaWhatsapp />
      <Contato />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
