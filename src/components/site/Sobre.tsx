import { CheckCircle2 } from "lucide-react";

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Sobre nós
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Especialistas em industrialização de{" "}
            <span className="text-gradient-ember">resistências elétricas</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A WM Resistências Elétricas LTDA atua há anos no mercado industrial fabricando
            resistências, montando e mantendo fogões e fritadeiras de uso profissional. Cada
            produto é desenvolvido com matéria-prima de alta qualidade, garantindo segurança e
            durabilidade na linha de produção do nosso cliente.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Produção 100% sob medida para cada aplicação",
              "Atendimento personalizado direto com o especialista",
              "Equipamentos fabricados em aço inox de alta durabilidade",
              "Versatilidade para atender diversos segmentos industriais",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-ember" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl shadow-card sm:aspect-[3/4]">
              <img
                src="/placeholder-removed"
                alt=""
                className="hidden"
              />
              <div className="h-full w-full bg-ember-gradient p-6 text-ember-foreground">
                <p className="font-display text-5xl">+</p>
                <p className="mt-2 font-display text-3xl leading-tight">Produtos sob medida</p>
                <p className="mt-3 text-sm opacity-90">
                  Cartuchos, tubulares, coleiras, bainhas e utilitários para qualquer aplicação.
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:mt-12">
              <div className="rounded-xl bg-primary p-6 text-primary-foreground shadow-card">
                <p className="font-display text-5xl text-ember">100%</p>
                <p className="mt-1 text-sm uppercase tracking-wider opacity-80">Aço inox</p>
              </div>

              <div className="rounded-xl bg-secondary p-6 shadow-card">
                <p className="font-display text-2xl text-primary">BR</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sede no Paraná, com atendimento e envio para todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
