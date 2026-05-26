export function injectJsonLd(...schemas: Record<string, unknown>[]): () => void {
  const combined = schemas.length === 1
    ? schemas[0]
    : { '@context': 'https://schema.org', '@graph': schemas };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(combined);
  script.setAttribute('data-seo', 'true');

  document.querySelectorAll('script[data-seo]').forEach((el) => el.remove());
  document.head.appendChild(script);

  return () => {
    document.querySelectorAll('script[data-seo]').forEach((el) => el.remove());
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  price: number;
  images: string[];
  material: string;
  dimensions: string;
  weight: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'BOB',
      availability: 'https://schema.org/InStock',
      url: product.url,
    },
    material: product.material,
    ...(product.dimensions ? { size: product.dimensions } : {}),
    ...(product.weight ? { weight: product.weight } : {}),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: service.provider,
      url: service.url,
    },
    serviceType: service.name,
    areaServed: {
      '@type': 'City',
      name: 'Cochabamba',
    },
  };
}
