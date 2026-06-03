import type { Product } from '../../data/products';
import { productWhatsappUrl } from '../../lib/whatsapp';
import { ProductImageSlideshow } from '../atoms/ProductImageSlideshow';
import { cn } from '../../lib/cn';

/** 'wide' = landscape 4/3, spans 2 grid cols on desktop. 'tall' = portrait 3/4, 1 grid col. */
type ShopItemVariant = 'wide' | 'tall';

interface ShopItemProps {
  product: Product;
  variant?: ShopItemVariant;
}

export function ShopItem({ product, variant = 'tall' }: ShopItemProps) {
  const waUrl = productWhatsappUrl(product.name);

  return (
    <div className="flex flex-col">
      <div className={cn(
        'bg-card mb-4 relative transition-[box-shadow,transform] duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden',
        variant === 'wide' ? 'aspect-[4/3]' : 'aspect-[3/4]',
      )}>
        <ProductImageSlideshow images={product.images} alt={product.name} />
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-cx-walnut uppercase tracking-widest">{product.name}</h3>
        {/* price hidden */}
        <p className="text-muted-foreground text-xs mt-1">{product.material}</p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 bg-cx-walnut text-primary-foreground text-xs uppercase tracking-widest text-center hover:opacity-80 active:scale-95 transition-[opacity,transform] duration-300"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
