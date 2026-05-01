import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { InstagramIcon as Instagram } from "@/components/ui/icons";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="WM Resistências Logo"
                className="h-20 w-20 rounded-xl bg-white p-1.5 object-contain shadow-lg md:h-24 md:w-24"
              />

              <span className="font-display text-xl">
                WM <span className="text-ember">Resistências Elétricas LTDA</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Industrialização de resistências elétricas, montagem e manutenção de fogões e
              fritadeiras industriais. Atendimento sob medida com qualidade e segurança.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/w.m.resistencias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition-colors hover:bg-ember hover:text-ember-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-ember">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-ember" />
                <span>
                  (43) 99660-0605
                  <br />
                  (43) 99631-9414
                  <br />
                  (43) 3244-1734
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-ember" />
                <span>w.m.resistencias@outlook.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-ember" />
                <span>Prado Ferreira — PR</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-ember">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {[
                ["#sobre", "Sobre"],
                ["#produtos", "Produtos"],
                ["#servicos", "Serviços"],
                ["#diferenciais", "Diferenciais"],
                ["#contato", "Contato"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-ember">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} WM Resistências Elétricas LTDA — Todos os direitos
            reservados.
          </p>
          <p>Prado Ferreira · Paraná · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
