import { Button } from '../atoms/Button';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/Hero.webp)',
          animation: `heroScale 1.4s ${EASE} both`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent z-10"/>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full flex justify-center pb-[25vh]">
        <div className="max-w-lg text-center">
          <h1
            className="font-bold text-primary-foreground mb-5"
            style={{
              fontSize: 'clamp(44px, 6vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-2) both`,
            }}
          >
            El arte en tu hogar.
          </h1>
          <p
            className="text-base text-primary-foreground/80 mb-10 leading-relaxed px-4"
            style={{ animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-3) both` }}
          >
            Piezas únicas trabajadas en roble, cedro, mara macho y otras maderas selectas de origen boliviano. Diseño que respeta la naturaleza y transforma cada espacio.
          </p>
          <div
            style={{ animation: `fadeUp 0.9s ${EASE} var(--cx-stagger-4) both` }}
          >
            <Button
              variant="ghost"
              className="px-10 py-4"
              onClick={() => document.getElementById('muebles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Colección
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
