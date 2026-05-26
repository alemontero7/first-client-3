import { Reveal } from "../atoms/Reveal";
import { TrustBrandItem } from "../molecules/TrustBrandItem";

const brands = [
  { iconAddress: "/company_1.svg", name: "Wistupiku" },
  { iconAddress: "/company_2.svg", name: "Constructora Montaño" },
  { iconAddress: "/brand3.svg", name: "Brand 3", smaller: true },
  { iconAddress: "/brand4.svg", name: "Brand 4" },
];

export function TrustBar() {
  return (
    <section className="bg-cx-spring-wood py-12 border-b border-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="none">
          <h2 className="text-center text-xs text-cx-rolling-stone mb-10 uppercase tracking-[0.2em] font-normal">
            Confían en nosotros
          </h2>
        </Reveal>

        {/* Desktop: centered flex */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 80} direction="none">
              <TrustBrandItem
                icon={brand.iconAddress}
                name={brand.name}
                className={brand.smaller ? "h-10" : ""}
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile: auto-scrolling carousel */}
        <style>{`
          @keyframes trustMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .trust-marquee {
            animation: trustMarquee 24s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .trust-marquee {
              animation-duration: 0.01ms !important;
            }
          }
        `}</style>
        <div className="md:hidden relative w-full opacity-50 grayscale">
          <div className="flex gap-12 trust-marquee w-max">
            {[...brands, ...brands].map((brand, i) => (
              <TrustBrandItem
                key={`mobile-${brand.name}-${i}`}
                icon={brand.iconAddress}
                name={brand.name}
                className={brand.smaller ? "h-10" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
