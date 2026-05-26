import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Navbar } from '../organisms/Navbar';
import { SidebarFilters } from '../organisms/SidebarFilters';
import { PromoBanner } from '../organisms/PromoBanner';
import { Footer } from '../organisms/Footer';
import { CatalogProductCard } from '../molecules/CatalogProductCard';
import { Breadcrumbs } from '../atoms/Breadcrumbs';
import { Reveal } from '../atoms/Reveal';
import { products } from '../../data/products';
import { breadcrumbSchema, injectJsonLd } from '../../lib/schema';

// ── Sort ───────────────────────────────────────────────────────────────────

type SortOrder = 'recommended' | 'price-asc' | 'price-desc' | 'newest';

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: 'recommended', label: 'Recomendados' },
  { value: 'price-asc',   label: 'Precio: Menor a Mayor' },
  { value: 'price-desc',  label: 'Precio: Mayor a Menor' },
  { value: 'newest',      label: 'Nuevos Ingresos' },
];

// ── Category mapping ────────────────────────────────────────────────────────

function categoryFromId(id: string): string {
  if (id.startsWith('sofa'))    return 'Sofás';
  if (id.startsWith('comedor')) return 'Comedores';
  if (id.startsWith('mesa'))    return 'Mesas';
  if (id.startsWith('silla'))   return 'Sillas';
  if (id.startsWith('sillon'))  return 'Sillones';
  return '';
}

// ── Breadcrumbs ─────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo' },
];

// ── Component ───────────────────────────────────────────────────────────────

export const CatalogTemplate: React.FC = () => {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());
  const [sortOrder, setSortOrder] = useState<SortOrder>('recommended');
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = injectJsonLd(
      breadcrumbSchema([
        { name: 'Inicio', url: 'https://amaramuebles.bo/' },
        { name: 'Catálogo' },
      ]),
    );
    return cleanup;
  }, []);

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const displayedProducts = useMemo(() => {
    let list = [...products];

    if (activeCategories.size > 0) {
      list = list.filter((p) => activeCategories.has(categoryFromId(p.id)));
    }

    switch (sortOrder) {
      case 'price-asc':  return list.sort((a, b) => a.price - b.price);
      case 'price-desc': return list.sort((a, b) => b.price - a.price);
      case 'newest':     return list.reverse();
      default:           return list;
    }
  }, [activeCategories, sortOrder]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="pt-32 pb-20 max-w-[1200px] mx-auto px-6">

        {/* Breadcrumbs */}
        <Reveal direction="none" delay={0}>
          <Breadcrumbs items={breadcrumbs} className="mb-10" />
        </Reveal>

        {/* Page Header */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <Reveal direction="none" delay={80}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Colección Completa
            </h1>
          </Reveal>
          <Reveal direction="none" delay={160}>
            <p className="text-lg text-muted-foreground">
              Cada pieza es tallada a mano por nuestros artesanos. Cedro, eucalipto, 
              pino y maderas seleccionadas, trabajadas con oficio para dar calidez y 
              carácter a tu hogar.
            </p>
          </Reveal>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Filters */}
          <Reveal direction="none" delay={200}>
            <SidebarFilters
              activeCategories={activeCategories}
              onToggleCategory={toggleCategory}
            />
          </Reveal>

          {/* Product Grid */}
          <div className="flex-1">

            {/* Toolbar */}
            <Reveal direction="none" delay={240}>
              <div className="flex justify-between items-center mb-8">
                <span
                  className="text-sm text-muted-foreground transition-opacity duration-300"
                  key={displayedProducts.length}
                >
                  {displayedProducts.length === products.length
                    ? `${products.length} productos`
                    : `${displayedProducts.length} de ${products.length} productos`}
                </span>

                <div className="relative flex items-center">
                  <label htmlFor="catalog-sort" className="sr-only">
                    Ordenar productos
                  </label>
                  <select
                    id="catalog-sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                    className="appearance-none bg-transparent text-foreground text-xs uppercase tracking-widest cursor-pointer pr-5 pl-0 py-3 border-none focus:outline-none focus:ring-0 font-semibold"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="normal-case tracking-normal font-normal text-sm bg-background text-foreground">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-muted-foreground" />
                </div>
              </div>
            </Reveal>

            {/* Grid or empty state */}
            {displayedProducts.length === 0 ? (
              <Reveal direction="none" delay={100}>
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    No hay productos en esta categoría.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveCategories(new Set())}
                    className="text-xs uppercase tracking-widest text-cx-walnut font-semibold hover:opacity-70 transition-opacity underline underline-offset-4"
                  >
                    Ver todos los productos
                  </button>
                </div>
              </Reveal>
            ) : (
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 auto-rows-auto">
                {displayedProducts.map((product, index) => (
                  <Reveal
                    key={product.id}
                    direction="none"
                    delay={Math.min(index * 60, 800)}
                  >
                    <CatalogProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Promotional Banner */}
        <Reveal direction="none" delay={100}>
          <PromoBanner />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};
