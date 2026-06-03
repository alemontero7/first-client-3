import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';

export function ProductCard({ product }: { product: Product }) {
  const waUrl = productWhatsappUrl(product.name);
  const src = product.images[1] ?? product.images[0];

  return (
    <div className="group flex flex-col">
      <Link to={`/producto/${product.id}`} className="block aspect-[4/3] mb-5 overflow-hidden relative bg-cx-pampas">
        <img
          src={src}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 pointer-events-none">
          <p className="text-white text-xs uppercase tracking-widest">{product.name}</p>
          <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Ver más →</p>
        </div>
      </Link>

      <h3 className="text-lg font-medium text-foreground mb-1">{product.name}</h3>
      <p className="text-primary text-xs uppercase tracking-widest">{product.material}</p>
      {/* price hidden */}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
