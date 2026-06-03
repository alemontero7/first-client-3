export interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  /** All product photos. First image is used as the primary display image. */
  images: string[];
  /** Price in bolivianos (BOB). */
  price: number;
  /** Which homepage section this product appears in. */
  section: 'featured' | 'shop';
  /** Physical dimensions (ancho × profundidad × alto). */
  dimensions: string;
  /** Approximate weight. */
  weight: string;
}

export const products: Product[] = [

  // ── Sofás ────────────────────────────────────────────────────────────────
  {
    id: 'sofa-amara-1',
    name: 'Sofá Amara 1',
    description:
      'Sofá de tres plazas con estructura interna de eucalipto, tapizado en lino natural de alta resistencia. Cojines de espuma HR de 30 kg/m³ con funda removible. Diseño de líneas limpias que se adapta a espacios contemporáneos.',
    material: 'Eucalipto y Lino Natural',
    images: [
      '/Products/Sofas/Sofa1/foto1.webp',
      '/Products/Sofas/Sofa1/foto2.webp',
      '/Products/Sofas/Sofa1/foto3.webp',
      '/Products/Sofas/Sofa1/foto0.webp',
    ],
    price: 8500,
    section: 'featured',
    dimensions: '210 × 92 × 88 cm',
    weight: '42 kg',
  },
  {
    id: 'sofa-amara-2',
    name: 'Sofá Amara 2',
    description:
      'Sofá esquinero en L con estructura de madera maciza nacional y tapizado en tela chenilla color tierra. Doce cojines incluidos con relleno de fibra siliconada. Patas de roble en acabado natural.',
    material: 'Madera Maciza y Chenilla',
    images: [
      '/Products/Sofas/Sofa2/foto0.webp',
      '/Products/Sofas/Sofa2/foto1.webp',
      '/Products/Sofas/Sofa2/foto2.webp',
      '/Products/Sofas/Sofa2/foto3.webp',
    ],
    price: 14900,
    section: 'shop',
    dimensions: '280 × 165 × 90 cm',
    weight: '68 kg',
  },
  {
    id: 'sofa-amara-3',
    name: 'Sofá Amara 3',
    description:
      'Sofá de dos plazas tapizado en cuero sintético de alta durabilidad color grafito. Estructura reforzada con tableros de aglomerado enchapado. Ideal para espacios reducidos sin sacrificar estilo.',
    material: 'Cuero Sintético Premium',
    images: [
      '/Products/Sofas/Sofa3/foto0.webp',
      '/Products/Sofas/Sofa3/foto1.webp',
      '/Products/Sofas/Sofa3/foto2.webp',
      '/Products/Sofas/Sofa3/foto3.webp',
    ],
    price: 5800,
    section: 'shop',
    dimensions: '158 × 85 × 82 cm',
    weight: '28 kg',
  },

  // ── Comedores ─────────────────────────────────────────────────────────────
  {
    id: 'comedor-amara-1',
    name: 'Comedor Amara 1',
    description:
      'Juego de comedor para seis personas con mesa de vidrio templado de 10 mm y seis sillas tapizadas en cuero sintético negro. Base de la mesa en acero pintado negro mate. Elegancia minimalista para el hogar moderno.',
    material: 'Vidrio Templado y Acero Negro Mate',
    images: [
      '/Products/Comedores/Comedor1/foto0.webp',
      '/Products/Comedores/Comedor1/foto1.webp',
      '/Products/Comedores/Comedor1/foto2.webp',
      '/Products/Comedores/Comedor1/foto3.webp',
    ],
    price: 22500,
    section: 'featured',
    dimensions: '180 × 90 × 76 cm',
    weight: '85 kg',
  },
  {
    id: 'comedor-amara-2',
    name: 'Comedor Amara 2',
    description:
      'Conjunto rústico para ocho personas en madera de pino macizo barnizado en tono miel. Sillas con respaldo de tablillas y asiento tapizado en cuero genuino. Resistencia y calidez para reuniones familiares.',
    material: 'Pino Macizo Barnizado',
    images: [
      '/Products/Comedores/Comedor2/foto0.webp',
      '/Products/Comedores/Comedor2/foto1.webp',
      '/Products/Comedores/Comedor2/foto2.webp',
      '/Products/Comedores/Comedor2/foto3.webp',
      '/Products/Comedores/Comedor2/foto4.webp',
    ],
    price: 18900,
    section: 'shop',
    dimensions: '220 × 100 × 78 cm',
    weight: '112 kg',
  },
  {
    id: 'comedor-amara-3',
    name: 'Comedor Amara 3',
    description:
      'Comedor contemporáneo para seis personas con tablero en mármol sintético blanco Carrara y seis sillas de roble macizo tapizadas en bouclé beige. Diseño de alto impacto visual para comedores sofisticados.',
    material: 'Mármol Sintético y Roble Macizo',
    images: [
      '/Products/Comedores/Comedor3/foto0.webp',
      '/Products/Comedores/Comedor3/foto1.webp',
      '/Products/Comedores/Comedor3/foto2.webp',
      '/Products/Comedores/Comedor3/foto3.webp',
    ],
    price: 28000,
    section: 'shop',
    dimensions: '200 × 95 × 76 cm',
    weight: '130 kg',
  },
  {
    id: 'comedor-amara-4',
    name: 'Comedor Amara 4',
    description:
      'Juego de comedor industrial para seis personas con mesa de tablero en roble vaporizado y patas de hierro forjado negro. Sillas con asiento en cuero y respaldo de metal perforado. Estética urbana y robustez artesanal.',
    material: 'Roble Vaporizado y Hierro Forjado',
    images: [
      '/Products/Comedores/Comedor4/foto0.webp',
      '/Products/Comedores/Comedor4/foto1.webp',
      '/Products/Comedores/Comedor4/foto2.webp',
      '/Products/Comedores/Comedor4/foto3.webp',
    ],
    price: 21500,
    section: 'shop',
    dimensions: '190 × 90 × 75 cm',
    weight: '95 kg',
  },

  // ── Mesas ─────────────────────────────────────────────────────────────────
  {
    id: 'mesa-amara-1',
    name: 'Mesa Amara 1',
    description:
      'Mesa de comedor extensible en madera de cedro boliviano de primera calidad. Sistema de extensión de alas que amplía la capacidad de 6 a 10 comensales. Acabado natural mate con veta pronunciada y resistente.',
    material: 'Cedro Boliviano',
    images: [
      '/Products/Mesas/Mesa1/foto0.webp',
      '/Products/Mesas/Mesa1/foto1.webp',
      '/Products/Mesas/Mesa1/foto2.webp',
      '/Products/Mesas/Mesa1/foto3.webp',
    ],
    price: 9800,
    section: 'shop',
    dimensions: '160–220 × 90 × 76 cm',
    weight: '58 kg',
  },
  {
    id: 'mesa-amara-2',
    name: 'Mesa Amara 2',
    description:
      'Mesa de comedor circular con tablero de teka Masisa de 36 mm de espesor y base central en madera torneada. Capacidad para cuatro a seis comensales. Superficie tratada con barniz poliuretano de alta resistencia.',
    material: 'Teka Masisa',
    images: [
      '/Products/Mesas/Mesa2/foto0.webp',
      '/Products/Mesas/Mesa2/foto1.webp',
      '/Products/Mesas/Mesa2/foto2.webp',
    ],
    price: 7500,
    section: 'shop',
    dimensions: 'Ø 120 × 76 cm',
    weight: '32 kg',
  },
  {
    id: 'mesa-amara-3',
    name: 'Mesa Amara 3',
    description:
      'Mesa de centro rectangular con tablero de vidrio templado de 10 mm y base de acero inoxidable cepillado. Diseño minimalista que integra ligereza visual y durabilidad. Perfecta para salas de estar contemporáneas.',
    material: 'Vidrio Templado y Acero Inoxidable',
    images: [
      '/Products/Mesas/Mesa3/foto0.webp',
      '/Products/Mesas/Mesa3/foto1.webp',
      '/Products/Mesas/Mesa3/foto2.webp',
    ],
    price: 4200,
    section: 'shop',
    dimensions: '120 × 60 × 42 cm',
    weight: '18 kg',
  },

  // ── Sillas ────────────────────────────────────────────────────────────────
  {
    id: 'silla-amara-1',
    name: 'Silla Amara 1',
    description:
      'Silla de comedor en roble macizo con patas torneadas y asiento acolchado tapizado en tela antimanchas color gris perla. Estructura tratada con aceite de linaza para mayor durabilidad. Vendida por unidad.',
    material: 'Roble Macizo y Tela Antimanchas',
    images: [
      '/Products/Sillas/Silla1/foto0.webp',
      '/Products/Sillas/Silla1/foto1.webp',
      '/Products/Sillas/Silla1/foto2.webp',
      '/Products/Sillas/Silla1/foto3.webp',
    ],
    price: 1850,
    section: 'shop',
    dimensions: '48 × 55 × 92 cm',
    weight: '6 kg',
  },
  {
    id: 'silla-amara-2',
    name: 'Silla Amara 2',
    description:
      'Silla nórdica de comedor fabricada en haya natural con patas cónicas y asiento acolchado en cuero genuino curtido al vegetal. Ensamble mortaja y espiga de alta resistencia. Diseño atemporal de inspiración escandinava.',
    material: 'Haya Natural y Cuero Genuino',
    images: [
      '/Products/Sillas/Silla2/foto0.webp',
      '/Products/Sillas/Silla2/foto1.webp',
      '/Products/Sillas/Silla2/foto2.webp',
      '/Products/Sillas/Silla2/foto3.webp',
    ],
    price: 1650,
    section: 'shop',
    dimensions: '46 × 53 × 90 cm',
    weight: '5 kg',
  },
  {
    id: 'silla-amara-3',
    name: 'Silla Amara 3',
    description:
      'Silla de comedor con estructura de madera lacada en blanco mate y asiento tapizado en terciopelo azul marino. Respaldo con curva anatómica y patas de sección cuadrada. Ideal para comedores de estilo contemporáneo o glam.',
    material: 'Madera Lacada y Terciopelo',
    images: [
      '/Products/Sillas/Silla3/foto0.webp',
      '/Products/Sillas/Silla3/foto1.webp',
      '/Products/Sillas/Silla3/foto2.webp',
      '/Products/Sillas/Silla3/foto3.webp',
    ],
    price: 1950,
    section: 'shop',
    dimensions: '50 × 56 × 95 cm',
    weight: '7 kg',
  },

  // ── Camas ─────────────────────────────────────────────────────────────────
  {
    id: 'cama-amara-1',
    name: 'Cama Amara 1',
    description:
      'Cama matrimonial con cabecera tapizada en tela bouclé crema y estructura de madera maciza nacional. Base con cajones de almacenamiento integrados y láminas de soporte reforzadas. Diseño cálido y funcional para el dormitorio moderno.',
    material: 'Madera Maciza y Tela Bouclé',
    images: [
      '/Products/Camas/Cama1/foto0.webp',
      '/Products/Camas/Cama1/foto1.webp',
      '/Products/Camas/Cama1/foto2.webp',
      '/Products/Camas/Cama1/foto3.webp',
      '/Products/Camas/Cama1/foto4.webp',
    ],
    price: 8900,
    section: 'shop',
    dimensions: '160 × 200 × 120 cm',
    weight: '65 kg',
  },
  {
    id: 'cama-amara-2',
    name: 'Cama Amara 2',
    description:
      'Cama de dos plazas con cabecera de tablillas en roble natural y base plataforma de perfil bajo. Estructura sólida con soporte central de refuerzo. Acabado en aceite de linaza que resalta la veta natural de la madera.',
    material: 'Roble Natural',
    images: [
      '/Products/Camas/Cama2/foto0.webp',
      '/Products/Camas/Cama2/foto1.webp',
      '/Products/Camas/Cama2/foto2.webp',
      '/Products/Camas/Cama2/foto3.webp',
    ],
    price: 7200,
    section: 'shop',
    dimensions: '140 × 200 × 100 cm',
    weight: '52 kg',
  },
  {
    id: 'cama-amara-3',
    name: 'Cama Amara 3',
    description:
      'Cama king size con cabecera tapizada en cuero genuino color camel y patas en madera torneada de cedro boliviano. Base box con altura regulable. Una pieza de autor que combina confort y elegancia para dormitorios de lujo.',
    material: 'Cuero Genuino y Cedro Boliviano',
    images: [
      '/Products/Camas/Cama3/foto0.webp',
      '/Products/Camas/Cama3/foto1.webp',
      '/Products/Camas/Cama3/foto3.webp',
    ],
    price: 12400,
    section: 'featured',
    dimensions: '200 × 200 × 130 cm',
    weight: '80 kg',
  },
  {
    id: 'cama-amara-4',
    name: 'Cama Amara 4',
    description:
      'Cama matrimonial de estilo rústico con cabecera y pie de cama en mara macho maciza con tallado artesanal. Base de listones de madera con separación óptima para la ventilación del colchón. Cada pieza es única por la naturaleza del material.',
    material: 'Mara Macho Maciza',
    images: [
      '/Products/Camas/Cama4/foto0.webp',
      '/Products/Camas/Cama4/foto1.webp',
      '/Products/Camas/Cama4/foto2.webp',
      '/Products/Camas/Cama4/foto3.webp',
    ],
    price: 10500,
    section: 'shop',
    dimensions: '160 × 200 × 140 cm',
    weight: '72 kg',
  },

  // ── Sillones ──────────────────────────────────────────────────────────────
  {
    id: 'sillon-amara-1',
    name: 'Sillón Amara 1',
    description:
      'Sillón reclinable de relax tapizado en cuero genuino azul noche con sistema de inclinación progresiva manual. Descansabrazos anchos con costuras artesanales y base giratoria de nogal. Un punto focal de elegancia para la sala.',
    material: 'Cuero Genuino y Nogal',
    images: [
      '/Products/Sillones/Sillon1/Azul.webp',
      '/Products/Sillones/Sillon1/foto1.webp',
      '/Products/Sillones/Sillon1/foto2.webp',
      '/Products/Sillones/Sillon1/foto3.webp',
    ],
    price: 6800,
    section: 'featured',
    dimensions: '85 × 95 × 102 cm',
    weight: '35 kg',
  },
  {
    id: 'sillon-amara-2',
    name: 'Sillón Amara 2',
    description:
      'Sillón orejero estilo clásico tapizado en bouclé color crema con botones forrados artesanalmente. Estructura interna de caoba con patas torneadas a mano. Cojín de asiento en espuma de alta densidad para un descanso prolongado.',
    material: 'Tela Bouclé y Caoba',
    images: [
      '/Products/Sillones/Sillon2/foto0.webp',
      '/Products/Sillones/Sillon2/foto1.webp',
      '/Products/Sillones/Sillon2/foto2.webp',
      '/Products/Sillones/Sillon2/foto3.webp',
    ],
    price: 5200,
    section: 'shop',
    dimensions: '82 × 88 × 110 cm',
    weight: '28 kg',
  },
  {
    id: 'sillon-amara-3',
    name: 'Sillón Amara 3',
    description:
      'Sillón contemporáneo de una plaza tapizado en terciopelo esmeralda con cojines de plumas de alta densidad. Patas de metal en acabado dorado satinado. Una pieza de autor que añade sofisticación y color a cualquier espacio.',
    material: 'Terciopelo Esmeralda y Metal Dorado',
    images: [
      '/Products/Sillones/Sillon3/foto0.webp',
      '/Products/Sillones/Sillon3/foto1.webp',
      '/Products/Sillones/Sillon3/foto2.webp',
      '/Products/Sillones/Sillon3/foto3.webp',
    ],
    price: 7400,
    section: 'shop',
    dimensions: '80 × 82 × 88 cm',
    weight: '22 kg',
  },
];

export const featuredProducts = products.filter((p) => p.section === 'featured');
export const shopProducts = products.filter((p) => p.section === 'shop');
