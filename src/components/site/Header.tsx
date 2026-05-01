"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import Image from "next/image";
import { InstagramIcon as Instagram } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { CatalogDownload } from "./CatalogPDF";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-card"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-5 text-primary-foreground">
          <Image
            src={logo}
            alt="WM Resistências Logo"
            className="h-[82px] w-[82px] rounded-xl bg-white p-1.5 object-contain shadow-md transition-transform hover:scale-105 md:h-[88px] md:w-[88px]"
          />
          <span className="font-display text-xl leading-tight tracking-wide md:text-2xl">
            WM <span className="text-ember">Resistências</span>
            <span className="block text-xs font-sans font-normal tracking-[0.25em] text-primary-foreground/70">
              ELÉTRICAS LTDA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 transition-colors hover:text-ember"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://instagram.com/wmresistencias"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 hover:text-ember"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <CatalogDownload className="h-10 text-white" />
          <a
            href="https://wa.me/5543996600605"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-105"
          >
            Orçamento
          </a>
        </div>

        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-primary/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-primary-foreground/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5543996600605"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-5 py-3 text-center text-sm font-semibold uppercase text-white shadow-lg transition-transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>
            <CatalogDownload className="w-full" />
            <a
              href="https://instagram.com/wmresistencias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-md border border-white/10 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
