import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { Breadcrumbs } from '../components/atoms/Breadcrumbs';
import { products } from '../data/products';
import { productWhatsappUrl } from '../lib/whatsapp';
import { productSchema, injectJsonLd, breadcrumbSchema } from '../lib/schema';

// ── Helpers ────────────────────────────────────────────────────────────────

/** Returns `count` random products excluding the one with `excludeId`. */
function getRandomProducts(excludeId: string, count: number) {
  const pool = products.filter((p) => p.id !== excludeId);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── Page ───────────────────────────────────────────────────────────────────

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  // 404 fallback
  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-muted-foreground mb-8">
            El producto que buscas no existe o ha sido removido.
          </p>
          <button
            type="button"
            onClick={() => navigate('/catalogo')}
            className="px-6 py-3 bg-cx-walnut text-primary-foreground uppercase tracking-widest text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Ver Catálogo
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return <ProductDetailView product={product} />;
};

// ── View (separate so hooks are always called) ─────────────────────────────

import type { Product } from '../data/products';

const ProductDetailView: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const recommended = useMemo(
    () => getRandomProducts(product.id, 3),
    [product.id],
  );

  const waUrl = productWhatsappUrl(product.name);

  useEffect(() => {
    const cleanup = injectJsonLd(
      productSchema({
        name: product.name,
        description: product.description,
        price: product.price,
        images: product.images,
        material: product.material,
        dimensions: product.dimensions,
        weight: product.weight,
        url: `https://amaramuebles.bo/producto/${product.id}`,
      }),
      breadcrumbSchema([
        { name: 'Inicio', url: 'https://amaramuebles.bo/' },
        { name: 'Catálogo', url: 'https://amaramuebles.bo/catalogo' },
        { name: product.name },
      ]),
    );
    return cleanup;
  }, [product]);

  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: product.name },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={`${product.description.slice(0, 155)}`} />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24 max-w-[1200px] mx-auto px-6">

        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} className="mb-10" />

        {/* ── Product Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-28">

          {/* Left — Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative w-full aspect-square bg-muted overflow-hidden">
              <img
                key={activeIndex}
                src={product.images[activeIndex]}
                alt={`${product.name} — imagen ${activeIndex + 1}`}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                    className={`relative aspect-square bg-muted overflow-hidden transition-all duration-200 ${
                      i === activeIndex
                        ? 'ring-2 ring-cx-walnut ring-offset-2'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${product.name} miniatura ${i + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Product Info */}
          <div className="flex flex-col">

            {/* Name & Price */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-cx-walnut mb-6">
              Bs. {product.price.toLocaleString()}
            </p>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 py-6 border-t border-b border-border">
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Material
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.material}
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Dimensiones
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.dimensions}
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Peso aprox.
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.weight}
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Acabado
                </span>
                <span className="text-sm font-medium text-foreground">
                  Natural mate
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-xs uppercase tracking-widest font-medium">
                <Truck className="w-3.5 h-3.5 shrink-0" />
                Envío Asegurado
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-xs uppercase tracking-widest font-medium">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                Garantía de Calidad
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-cx-walnut text-primary-foreground uppercase tracking-widest text-xs font-semibold hover:opacity-85 active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        {/* ── Recommended Products ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-10">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {recommended.map((rec) => (
              <button
                key={rec.id}
                type="button"
                onClick={() => navigate(`/producto/${rec.id}`)}
                className="group flex flex-col text-left"
              >
                <div className="relative w-full aspect-[4/3] bg-muted mb-4 overflow-hidden">
                  <img
                    src={rec.images[1] ?? rec.images[0]}
                    alt={rec.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground leading-snug mb-1">
                      {rec.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{rec.material}</p>
                  </div>
                  <span className="text-sm text-foreground font-medium shrink-0">
                    Bs. {rec.price.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
