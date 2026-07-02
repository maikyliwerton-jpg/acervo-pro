import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  FolderTree,
  Download,
  Layers,
  Shirt,
  Coffee,
  Car,
  Bike,
  Image as ImageIcon,
  Mail,
  Paintbrush,
  Frame,
  PartyPopper,
  Sparkles,
  Package,
  FileImage,
  FolderOpen,
  Users,
  Building2,
  Store,
  Briefcase,
  Palette,
  RefreshCw,
  Globe,
  ShieldCheck,
  ChevronDown,
  Quote,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

// Configurable checkout link (Kiwify)
const CHECKOUT_URL = "https://pay.kiwify.com.br/um28fyz";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <WhatYouGet />
        <Organization />
        <IdealFor />
        <Compatibility />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Layers className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="text-sm font-semibold tracking-tight text-secondary">Acervo Pro</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a className="transition hover:text-secondary" href="#beneficios">Benefícios</a>
          <a className="transition hover:text-secondary" href="#conteudo">Conteúdo</a>
          <a className="transition hover:text-secondary" href="#organizacao">Organização</a>
          <a className="transition hover:text-secondary" href="#faq">FAQ</a>
        </nav>
        <a
          href={CHECKOUT_URL}
          className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary-hover"
        >
          Acessar
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 15% 0%, oklch(0.556 0.213 262 / 0.08), transparent 60%), radial-gradient(50% 40% at 90% 10%, oklch(0.62 0.17 148 / 0.06), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Acervo digital atualizado continuamente
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            A Biblioteca Completa para Quem Trabalha com{" "}
            <span className="text-primary">Sublimação</span> e Personalizados
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tenha acesso imediato a uma enorme coleção de arquivos digitais organizados para
            acelerar sua produção e ampliar seu catálogo de produtos.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={CHECKOUT_URL}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-premium transition hover:bg-primary-hover"
            >
              Quero Acessar Agora
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Acesso vitalício · Download imediato
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}

function HeroMockup() {
  const folders = [
    { name: "Super Pack de Sublimação", count: "1.240 arquivos", tone: "bg-primary/10 text-primary" },
    { name: "Biblioteca Premium — Parte 1", count: "980 arquivos", tone: "bg-accent/10 text-accent" },
    { name: "Estampas para Camisetas", count: "520 arquivos", tone: "bg-primary/10 text-primary" },
    { name: "Mockups Profissionais", count: "310 arquivos", tone: "bg-secondary/5 text-secondary" },
    { name: "Convites Digitais", count: "420 arquivos", tone: "bg-accent/10 text-accent" },
    { name: "Adesivos Automotivos", count: "260 arquivos", tone: "bg-primary/10 text-primary" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-premium">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-strong px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <div className="mx-auto flex items-center gap-2 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
            <FolderOpen className="h-3.5 w-3.5" />
            acervo / biblioteca-digital
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
          {folders.map((f) => (
            <div
              key={f.name}
              className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${f.tone}`}>
                <FolderTree className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-secondary">{f.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{f.count}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border bg-surface-strong px-5 py-3 text-xs text-muted-foreground">
          <span>4.200+ arquivos organizados</span>
          <span className="inline-flex items-center gap-1 text-accent">
            <Check className="h-3.5 w-3.5" /> sincronizado
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Benefits ---------------- */
function Benefits() {
  const items = [
    { icon: Clock, title: "Economize horas de criação", text: "Arquivos prontos para produção, sem retrabalho." },
    { icon: FolderTree, title: "Arquivos organizados", text: "Estrutura de pastas clara e navegação intuitiva." },
    { icon: Download, title: "Download imediato", text: "Acesso liberado logo após a confirmação." },
    { icon: Layers, title: "Compatível com seus programas", text: "Funciona no Photoshop, CorelDRAW e Canva." },
  ];
  return (
    <section id="beneficios" className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Benefícios"
            title="Tudo pensado para acelerar sua produção"
            subtitle="Um acervo criado para quem entrega, todos os dias."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-secondary">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What You Get ---------------- */
function WhatYouGet() {
  const items: { icon: typeof Sparkles; label: string }[] = [
    { icon: Sparkles, label: "Super Pack de Sublimação" },
    { icon: Package, label: "Biblioteca Premium de Arquivos" },
    { icon: Shirt, label: "Estampas para Camisetas" },
    { icon: Coffee, label: "Artes para Canecas" },
    { icon: Car, label: "Adesivos Automotivos" },
    { icon: Bike, label: "Adesivos para Motos" },
    { icon: ImageIcon, label: "Mockups Profissionais" },
    { icon: Mail, label: "Convites Digitais" },
    { icon: Paintbrush, label: "Arquivos para Photoshop" },
    { icon: FileImage, label: "Arquivos para CorelDRAW" },
    { icon: Palette, label: "Arquivos para Canva" },
    { icon: Frame, label: "Quadros Decorativos" },
    { icon: PartyPopper, label: "Artes para Eventos" },
    { icon: Layers, label: "E muito mais" },
  ];
  return (
    <section id="conteudo" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="O que você recebe"
            title="Um catálogo completo em um único lugar"
            subtitle="Cada categoria foi organizada para você encontrar rápido o que precisa."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 40}>
              <div className="group flex h-full items-center gap-4 rounded-xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-secondary">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Organization ---------------- */
function Organization() {
  const folders = [
    "Super Pack de Sublimação",
    "Biblioteca Premium Parte 1",
    "Biblioteca Premium Parte 2",
    "Convites Digitais",
    "Mockups",
    "Artes Editáveis",
  ];
  return (
    <section id="organizacao" className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Área de membros"
            title="Organização profissional, do primeiro clique"
            subtitle="Uma interface limpa para você trabalhar sem procurar arquivos."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
            <div className="flex items-center gap-3 border-b border-border px-5 py-3">
              <FolderOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Meu acervo</span>
              <span className="ml-auto text-xs text-muted-foreground">6 categorias · atualizado hoje</span>
            </div>
            <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {folders.map((name) => (
                <li key={name} className="group bg-background">
                  <div className="flex items-center gap-3 p-5 transition group-hover:bg-surface-strong">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FolderTree className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-secondary">{name}</p>
                      <p className="text-xs text-muted-foreground">Pronto para download</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Ideal For ---------------- */
function IdealFor() {
  const items = [
    { icon: Sparkles, label: "Sublimadores" },
    { icon: Palette, label: "Designers" },
    { icon: Building2, label: "Gráficas" },
    { icon: Briefcase, label: "Papelarias" },
    { icon: Users, label: "Empreendedores" },
    { icon: Store, label: "Lojas de Personalizados" },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Ideal para"
            title="Feito para profissionais do personalizado"
            subtitle="Se você produz, revende ou cria, este acervo economiza seu tempo."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 60}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface p-6 text-center transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-secondary">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Compatibility ---------------- */
function Compatibility() {
  const items = ["Photoshop", "CorelDRAW", "Canva", "SVG", "PNG", "PSD", "CDR"];
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Compatibilidade"
            title="Funciona com os programas que você já usa"
            subtitle="Formatos abertos e prontos para edição."
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {items.map((label, i) => (
            <Reveal key={label} delay={i * 50}>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <FileImage className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-secondary">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials Timeline ---------------- */
function Differentials() {
  const steps = [
    { icon: Download, label: "Download imediato" },
    { icon: FolderTree, label: "Organização profissional" },
    { icon: Layers, label: "Diversas categorias" },
    { icon: RefreshCw, label: "Atualizações futuras" },
    { icon: Globe, label: "Acesso online" },
  ];
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Uma experiência pensada de ponta a ponta"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {steps.map((s) => (
                <li key={s.label} className="flex flex-col items-center text-center">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-secondary">{s.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Carlos Eduardo Souza",
      role: "Sublimador — São Paulo, SP",
      text: "Ganhei muito tempo no dia a dia. Antes passava horas procurando artes ou criando do zero. Agora abro a pasta, encontro o que preciso e mando para a prensa em minutos.",
    },
    {
      name: "Fernanda Lima Ribeiro",
      role: "Designer — Belo Horizonte, MG",
      text: "A organização do acervo é impressionante. Tudo separado por tema, com arquivos em formatos que realmente abrem nos programas que uso. Valeu cada centavo.",
    },
    {
      name: "Ricardo Almeida",
      role: "Proprietário — Papelaria Personalizada — Curitiba, PR",
      text: "Comecei a vender canecas e camisetas e não sabia por onde começar. Com esse acervo já tive material profissional desde o primeiro dia. Meus clientes adoraram.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeader
            eyebrow="Depoimentos"
            title="O que dizem quem já usa"
            subtitle="Relatos de profissionais que já aceleraram sua produção com o acervo."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-soft">
                <Quote className="h-6 w-6 text-primary/60" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-secondary">
                  “{t.text}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-secondary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "Como recebo o acesso?", a: "Assim que a compra é confirmada, você recebe por e-mail o acesso imediato à área de membros com todos os arquivos disponíveis para download." },
    { q: "Posso baixar todos os arquivos?", a: "Sim. Você pode baixar todo o acervo, categoria por categoria, no seu próprio ritmo." },
    { q: "Preciso pagar mensalmente?", a: "Não. O pagamento é único e o acesso é liberado logo em seguida." },
    { q: "Os arquivos funcionam no Canva?", a: "Sim. Boa parte do acervo é compatível com o Canva, além de contar com formatos abertos como PNG e SVG." },
    { q: "Funciona no Photoshop?", a: "Sim. Os arquivos PSD abrem diretamente no Photoshop e permitem edição completa." },
    { q: "Funciona no CorelDRAW?", a: "Sim. O acervo inclui arquivos CDR e vetores editáveis compatíveis com o CorelDRAW." },
  ];
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
        </Reveal>
        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
          {items.map((it, i) => (
            <FAQItem key={i} q={it.q} a={it.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-surface-strong"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-secondary">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-10 text-center shadow-premium sm:p-16"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.21 0.034 265) 0%, oklch(0.28 0.06 265) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 20% 0%, oklch(0.556 0.213 262 / 0.35), transparent 60%), radial-gradient(40% 50% at 90% 100%, oklch(0.62 0.17 148 / 0.25), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Comece Agora Mesmo
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                Tenha acesso imediato a uma biblioteca completa de arquivos para personalização e
                acelere seus projetos com um acervo organizado e pronto para uso.
              </p>
              <a
                href={CHECKOUT_URL}
                className="mt-10 inline-flex h-14 items-center gap-3 rounded-xl bg-accent px-8 text-base font-bold tracking-wide text-accent-foreground shadow-premium transition hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                QUERO MEU ACESSO
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-xs text-white/50">
                Acesso imediato · Pagamento seguro · Sem mensalidade
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Layers className="h-3.5 w-3.5" strokeWidth={2.4} />
          </span>
          <span className="text-sm font-semibold text-secondary">Acervo Pro</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="transition hover:text-secondary">Política de Privacidade</a>
          <a href="#" className="transition hover:text-secondary">Termos de Uso</a>
          <a href="#" className="transition hover:text-secondary">Contato</a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Acervo Pro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
