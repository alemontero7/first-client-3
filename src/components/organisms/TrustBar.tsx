import { Reveal } from '../atoms/Reveal';
import { TrustBrandItem } from '../molecules/TrustBrandItem';

const brands = [
  { iconAddress: '/company_1.svg', name: 'Wistupiku' },
  { iconAddress: '/company_2.svg', name: 'Constructora Montaño' },
  { iconAddress: '/brand3.svg', name: 'Brand 3' },
  { iconAddress: '/brand4.svg', name: 'Brand 4' },
];

export function TrustBar() {
  return (
    <section className="bg-cx-spring-wood py-12 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal direction="none">
          <p className="text-center text-xs text-cx-rolling-stone mb-10 uppercase tracking-[0.2em]">
            Confían en nosotros
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 80} direction="none">
              <TrustBrandItem icon={brand.iconAddress} name={brand.name} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
