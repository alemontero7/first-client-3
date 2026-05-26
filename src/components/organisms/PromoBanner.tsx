import React from 'react';
import { promoData, WHATSAPP_NUMBER } from '../../data/mockData';
import { Button } from '../atoms/Button';
import { MessageCircle } from 'lucide-react';
import { Reveal } from '../atoms/Reveal';

export const PromoBanner: React.FC = () => {
  return (
    <section className="mt-24 mb-16 relative w-full h-[500px] bg-muted rounded overflow-hidden flex items-center">
      <img
        alt={promoData.title}
        src={promoData.image}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ animation: 'heroScale 1.2s cubic-bezier(0.22, 1, 0.36, 1) both' }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
      <div className="relative z-10 p-12 md:p-24 max-w-2xl">
        <Reveal direction="none" delay={150}>
          <h2 className="text-[40px] md:text-[56px] leading-tight font-bold text-primary-foreground mb-4">
            {promoData.title}
          </h2>
        </Reveal>
        <Reveal direction="none" delay={250}>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-lg">
            {promoData.description}
          </p>
        </Reveal>
        <Reveal direction="none" delay={350}>
          <Button
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(promoData.title)}`}
            className="gap-2 bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar Oferta
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
