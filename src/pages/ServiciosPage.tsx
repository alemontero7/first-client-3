import {
  MessageCircle,
  Ruler,
  Lightbulb,
  Hammer,
  X,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Helmet } from 'react-helmet-async';
import { Navbar } from "../components/organisms/Navbar";
import { Footer } from "../components/organisms/Footer";
import { Breadcrumbs } from "../components/atoms/Breadcrumbs";
import { Reveal } from "../components/atoms/Reveal";
import { WHATSAPP_NUMBER } from "../config";
import { faqSchema, injectJsonLd } from "../lib/schema";

// ── Mosaic images ───────────────────────────────────────────────────────────

const mosaicImages = [
  { src: "/Products/Sofas/Sofa1/foto1.webp", alt: "Sala amoblada por Amara" },
  { src: "/Products/Sofas/Sofa2/foto0.webp", alt: "Sofá Amara en ambiente" },
  { src: "/Products/Sofas/Sofa3/foto0.webp", alt: "Sala de estar Amara" },
  { src: "/Products/Sofas/Sofa1/foto2.webp", alt: "Detalle artesanal del tapizado a mano" },
  { src: "/Products/Sofas/Sofa2/foto1.webp", alt: "Ambiente con sofá esquinero" },
  { src: "/Products/Sofas/Sofa3/foto1.webp", alt: "Sofá compacto Amara" },
  { src: "/Products/Sofas/Sofa1/foto3.webp", alt: "Living amoblado" },
  { src: "/Products/Sofas/Sofa2/foto2.webp", alt: "Detalle de estructura artesanal" },
  { src: "/Products/Sofas/Sofa3/foto2.webp", alt: "Sala con sofá moderno" },
  { src: "/Products/Sofas/Sofa1/foto0.webp", alt: "Sofá Amara principal" },
  { src: "/Products/Sofas/Sofa2/foto3.webp", alt: "Sofá en sala amplia" },
  { src: "/Products/Sofas/Sofa3/foto3.webp", alt: "Ambiente completo Amara" },
];

// ── Process steps ───────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Consulta inicial",
    description:
      "Nos reunimos contigo para entender tu espacio, tu estilo de vida y tu visión. Medidas, paleta de colores, usos del ambiente y presupuesto.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Render profesional",
    description:
      "Un diseñador de interiores certificado crea un render 3D fotorrealista de tu espacio, con cada mueble ubicado y los materiales definidos.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Fabricación a medida",
    description:
      "Fabricamos cada pieza exactamente como aparece en el render: mismas dimensiones, mismos materiales, mismos acabados. Sin sorpresas.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────

const faqRows = [
  {
    question: "¿Qué incluye el servicio?",
    answer:
      "Visita de medición, sesión de consultoría con el diseñador, render 3D completo, fabricación de todos los muebles y coordinación de entrega e instalación.",
  },
  {
    question: "¿Cómo se cotiza?",
    answer:
      "El servicio de diseño tiene un costo fijo que se descuenta del valor total del proyecto si avanzas con la fabricación. Contáctanos para más detalles.",
  },
  {
    question: "Entrega e instalación",
    answer: "Coordinamos la entrega y la instalación contigo.",
  },
];

// ── WhatsApp URL ───────────────────────────────────────────────────────────

const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, me interesa el servicio de amoblamiento. Quisiera obtener más información.",
)}`;

const breadcrumbs = [{ label: "Inicio", href: "/" }, { label: "Servicios" }];

// ── Page ───────────────────────────────────────────────────────────────────

export function ServiciosPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const cleanup = injectJsonLd(faqSchema(faqRows));
    return cleanup;
  }, []);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        <title>Servicios</title>
        <meta name="description" content="Diseño de interiores y amoblamiento a medida en Cochabamba. Render 3D fotorrealista, fabricación artesanal y entrega completa. Consulta sin costo." />
      </Helmet>
      <Navbar />

      <main className="pt-32">
        {/* ── Breadcrumbs ─────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 mb-10">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative mb-24 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              minHeight: "600px",
              animation: "heroScale 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
          <div className="relative max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <Reveal direction="none" delay={0}>
              <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-6 block">
                Servicios de Amoblamiento
              </span>
            </Reveal>
            <Reveal direction="none" delay={100}>
              <h1
                className="font-bold text-primary-foreground leading-[1.1] mb-8 max-w-3xl"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Tu hogar,
                <br />
                diseñado por expertos.
              </h1>
            </Reveal>
            <Reveal direction="none" delay={200}>
              <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
                Un diseñador de interiores certificado crea el render de tu
                espacio. Nosotros fabricamos cada mueble exactamente como fue
                diseñado. El resultado: un hogar que se ve exactamente como lo
                soñaste.
              </p>
            </Reveal>
            <Reveal direction="none" delay={300}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-cx-walnut uppercase tracking-widest text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar mi proyecto
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── Process steps — alternating timeline ─────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-28">
          <Reveal className="mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4 block">
              Cómo trabajamos
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Del diseño a la realidad, en tres pasos
            </h2>
          </Reveal>

          <div className="space-y-1">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <Reveal key={step.number} delay={i * 120} direction="none">
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 md:gap-16 items-start py-12 border-t border-border`}
                  >
                    <div className="w-full md:w-1/2">
                      <span className="text-6xl md:text-7xl font-bold text-muted/40 leading-none block mb-6 select-none">
                        {step.number}
                      </span>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-5 h-5 text-cx-walnut" strokeWidth={1.5} />
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:block">
                      <div
                        className={`w-full min-h-[240px] overflow-hidden ${
                          isEven ? "rounded-r-lg" : "rounded-l-lg"
                        } transition-transform duration-700 ease-out hover:scale-105`}
                        style={{
                          backgroundImage: `url(/Products/Sofas/Sofa${i + 1}/foto${i}.webp)`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Photo mosaic ─────────────────────────────────────────────── */}
        <section className="mb-28 bg-muted py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <Reveal className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                Nuestra obra
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Ambientes que hablan por sí solos
              </h2>
            </Reveal>

            <div className="columns-2 md:columns-3 gap-3 [column-gap:12px]">
              {mosaicImages.map((img, i) => (
                <Reveal key={i} delay={i * 40} direction="none">
                  <div className="mb-3 break-inside-avoid overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700 ease-out cursor-pointer"
                      loading="lazy"
                      decoding="async"
                      onClick={() => openLightbox(img.src, img.alt)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img.src, img.alt); } }}
                      tabIndex={0}
                      role="button"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value promise ─────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-28">
          <div className="bg-cx-walnut text-primary-foreground px-10 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <Reveal direction="none" delay={0}>
                <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-4 block">
                  Qué incluye
                </span>
              </Reveal>
              <Reveal direction="none" delay={100}>
                <p className="text-lg leading-relaxed text-primary-foreground/85">
                  Cada proyecto incluye un diseñador de interiores certificado,
                  un render 3D fotorrealista de tu espacio y fabricación 100%
                  artesanal boliviana. Sin intermediarios, sin sorpresas.
                </p>
              </Reveal>
            </div>
            <Reveal direction="none" delay={200}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-cx-walnut uppercase tracking-widest text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-6 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6 block">
                Preguntas frecuentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Cómo funciona el servicio?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Desde la primera reunión hasta la instalación final, acompañamos
                cada etapa del proceso. Trabajamos con un número limitado de
                proyectos al mes para garantizar atención personalizada y
                calidad artesanal en cada pieza.
              </p>
            </Reveal>

            <div className="divide-y divide-border">
              {faqRows.map((row, i) => (
                <Reveal key={i} delay={i * 80} className="py-6">
                  <p className="text-xs uppercase tracking-widest text-foreground font-semibold mb-2">
                    {row.question}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {row.answer}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────── */}
        <section className="bg-cx-walnut py-24 mb-0">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Reveal direction="none" delay={0}>
                <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-4 block">
                  Comienza hoy
                </span>
              </Reveal>
              <Reveal direction="none" delay={100}>
                <h2
                  className="font-bold text-primary-foreground leading-tight"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  ¿Listo para transformar
                  <br className="hidden md:block" /> tu espacio?
                </h2>
              </Reveal>
            </div>
            <Reveal direction="none" delay={200}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-cx-walnut uppercase tracking-widest text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <div
            className="absolute inset-0 bg-foreground/90 cursor-pointer"
            onClick={closeLightbox}
          />
          <div className="relative max-w-5xl w-full max-h-[90vh] animate-[fadeUp_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-primary-foreground/70 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Cerrar"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}
