import { Reveal } from "../atoms/Reveal";
import { contactWhatsappUrl } from "../../lib/whatsapp";

const materials = [
  { wood: "Nogal", origin: "Valle de Cochabamba" },
  { wood: "Roble", origin: "Santa Cruz" },
  { wood: "Teca", origin: "Tierras del Beni" },
];

export function BrandStory() {
  return (
    <section
      id="nuestra-historia"
      className="flex flex-col md:flex-row items-stretch scroll-mt-20"
      style={{ minHeight: "680px" }}
    >
      {/* Left: craftsman image with identity layer */}
      <Reveal
        className="w-full md:w-[42%] min-h-[300px] md:min-h-0"
        direction="none"
      >
        <div className="bg-cx-teak w-full h-full min-h-[300px] relative overflow-hidden flex items-center justify-center">
          {/* Craftsman photo */}
          <img
            src="/AboutUs/image1.webp"
            alt="Maestro artesano trabajando la madera"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Warm teak tint overlay */}
        </div>
      </Reveal>

      {/* Right: story content */}
      <div className="w-full md:w-[58%] bg-cx-walnut text-primary-foreground flex flex-col justify-center px-12 py-16 md:px-16 lg:px-20">
        <Reveal className="mb-8" delay={80}>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6 block">
            Nuestra Historia
          </span>
          <h2
            className="font-black leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4.2vw, 52px)" }}
          >
            Cada mueble cuenta una historia.
          </h2>
        </Reveal>

        <Reveal className="mb-10" delay={160}>
          <p className="text-base leading-relaxed opacity-80">
            En Amara Muebles trabajamos exclusivamente con maderas de alta
            calidad. Cada pieza tarda entre tres y seis semanas en
            completarse, respetando los tiempos de la madera, no los de una
            fábrica.
          </p>
        </Reveal>

        {/* Material origins */}
        <Reveal delay={320}>
          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.25em] opacity-50 mb-4">
              Hecho con madera Boliviana
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {materials.map((m) => (
                <div key={m.wood} className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold">{m.wood}</span>
                  <span className="text-xs opacity-70">{m.origin}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* WhatsApp CTA */}
        <Reveal delay={420}>
          <div className="mt-10 border-t border-primary-foreground/15 pt-6">
            <a
              href={contactWhatsappUrl(
                "Hola, me gustaría conversar sobre un mueble para mi hogar.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors underline underline-offset-4"
            >
              Conversemos sobre tu espacio →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
