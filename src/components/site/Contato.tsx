import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/icons";
import logo from "@/assets/logo.jpeg";

const phones = [
  { num: "(43) 99660-0605", label: "Josiney", wa: "5543996600605" },
  { num: "(43) 99631-9414", label: "Eliel", wa: "5543996319414" },
  { num: "(43) 3244-1734", label: "Fixo", wa: null },
];

export function Contato() {
  return (
    <section id="contato" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                  Contato
                </span>
                <h2 className="mt-2 font-display text-4xl leading-tight text-primary md:text-5xl">
                  Onde estamos <span className="text-gradient-ember">e como falar conosco</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#E31E24] shadow-[0_8px_20px_-4px_rgba(227,30,36,0.3)] text-white transition-transform group-hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-primary">Localização</h3>
                  <p className="mt-1 text-muted-foreground">
                    Rod. João Lunardelli, 1360-1448
                    <br />
                    Prado Ferreira — Paraná
                    <br />
                    <span className="text-sm">Atendimento regional em todo o estado</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#007AFF] shadow-[0_8px_20px_-4px_rgba(0,122,255,0.3)] text-white transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-primary">Telefones</h3>
                  <ul className="mt-2 space-y-2">
                    {phones.map((p) => (
                      <li key={p.num} className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-foreground">{p.num}</p>
                          <p className="text-xs text-muted-foreground">{p.label}</p>
                        </div>
                        {p.wa && (
                          <a
                            href={`https://wa.me/${p.wa}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-whatsapp-foreground transition-transform hover:scale-105"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            WhatsApp
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#EA4335] shadow-[0_8px_20px_-4px_rgba(234,67,53,0.3)] text-white transition-transform group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-primary">E-mail</h3>
                  <a
                    href="mailto:w.m.resistencias@outlook.com"
                    className="mt-1 block text-muted-foreground transition-colors hover:text-ember"
                  >
                    w.m.resistencias@outlook.com
                  </a>
                  <a
                    href="mailto:compraswm@hotmail.com"
                    className="block text-muted-foreground transition-colors hover:text-ember"
                  >
                    compraswm@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://instagram.com/w.m.resistencias"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-gradient-to-br from-[oklch(0.65_0.22_25)] to-[oklch(0.55_0.24_320)] p-6 text-white shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg">
                <Instagram className="h-6 w-6 text-white" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg">Instagram</h3>
                <p className="text-white/85">@w.m.resistencias</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
                Seguir →
              </span>
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-card lg:col-span-3">
            <iframe
              title="Localização WM Resistências Elétricas — Prado Ferreira PR"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57775.6874639467!2d-51.80372570000001!3d-23.445757600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed6597a99f295d%3A0x4f568a20a41e3fa!2sRod.%20Jo%C3%A3o%20Lunardelli%2C%201360-1448%2C%20Prado%20Ferreira%20-%20PR%2C%2086618-000!5e0!3m2!1spt-BR!2sbr!4v1745945410696!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="h-full min-h-[480px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
