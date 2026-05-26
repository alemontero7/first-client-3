export type CatalogProduct = {
  id: string;
  name: string;
  material: string;
  price: string;
  image: string;
  imageAlt: string;
  isNew?: boolean;
};

export const products: CatalogProduct[] = [
  {
    id: '1',
    name: 'Silla Nórdica Ask',
    material: 'Roble macizo y lino',
    price: 'Bs. 850',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDphC89QVPTSjlmz8M3JThoiQYBVSTyCVMxG4paL7eHh3TGEL4-1e0ItGOXDgrp3nobRux0yUzUpFbR4zlYijYjaSXAsYhZJQo31N8-Z4YyieEEC_csqwtC8KYJ5X-8sBDyr0d_vNpDcIMaS6_KAH7poMbZzBag5WLV1G6LvQolzpGy3nZyZejQjVCbKA6sjNyfIu8bzXiRNCw9qXjXIxtKvIJPYMVmS76JZsGqtwiKEH3yF1o80gtSORwkOH1u6CZjeL0qxu9AliOl',
    imageAlt: 'Silla Nórdica Ask',
  },
  {
    id: '2',
    name: 'Mesa de Comedor Lignum',
    material: 'Nogal Americano, 200cm',
    price: 'Bs. 4,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUY_Q8cteMVS0_u9M9KYosoZs1diY0rtxb7XBeCB9Ky5Ew6RCyAuLDoX9HNLB5LZVI0hQtJ9J4UV4Q8_ixIXdRpBM-_jGVDr2nliCnk5Jd_xy7pKIY3bhg6_4LZ67k56iSq6_hBHJlLeTfi26xTFjWt8Y2_jZfduc3kVnHvyvGYL6QdKFtRAxJwFTeuyEAoVL_7pDvZnY1_c-dXJ_KDd1lwicvpJSXQAngLy6LblE35LqA6w0OG385vdUd9e2WorjW5UudiF0ebnv8',
    imageAlt: 'Mesa de Comedor Lignum',
  },
  {
    id: '3',
    name: 'Aparador Silva',
    material: 'Teca maciza y ratán',
    price: 'Bs. 3,150',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCkIph13B6xbOFDJX9CqUjwqXVltjaPwk8qqj9-M-OX9KiXEiKhBvE4FOqvU6bIugqU0gCMT3ObIQvicuhpPU0F7uxWd0HiIvK5fqpJo1Gx3XJkQVOBrDSORqfmsPB5nSnXbxWBxNHWWqkxDIFcajWvMuZiRhLDDWAtIy_P-ssTqO6TzsXK5LM_1_fIDgEpH61ohfC7ZrHo-4juXcdIRQvvyEP6TRUVRac9xwRIFBztEoQOI9ymouhc9E4TJsKkoNd9NF9VIeZWZHL',
    imageAlt: 'Aparador Silva',
    isNew: true,
  },
  {
    id: '4',
    name: 'Mesa Auxiliar Koti',
    material: 'Roble blanco claro',
    price: 'Bs. 480',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLgXYrFdZHy6PhiWrliIqRaH16u7_InUrkF7Af8cDsNCARR8YSpnn3aq4ucs0gElVBH_NRg64Gkwk5C4VMuWjmrnD0xw6550-GcJ0EGbL_wG-vEUxHj285GROPv9l1EKgYcKEByN8UH-Z-WGnem9SP03Xd5vnLygxWJ55HWjf-4bTlV13WQ0QLyKERzaCIv1_-yiH8lfqaMyPw5g4oqOQo-uqNBl6YjZPKiRbks3bBG0whpT5U10ptdxqsYS5eAyslN6GV0jNXHYbQ',
    imageAlt: 'Mesa Auxiliar Koti',
  },
];

export const filterCategories = [
  {
    title: 'Categorías',
    options: [
      { label: 'Sillas', count: 12, checked: false },
      { label: 'Mesas', count: 8, checked: true },
      { label: 'Aparadores', count: 5, checked: false },
      { label: 'Almacenamiento', count: 7, checked: false },
    ],
  },
  {
    title: 'Material',
    options: [
      { label: 'Roble Europeo', checked: false },
      { label: 'Nogal Americano', checked: false },
      { label: 'Teca Reciclada', checked: false },
    ],
  },
];

export const trustBadges = [
  {
    icon: 'Truck', // Will map to Lucide Truck
    title: 'Envío Asegurado',
    description: 'Entregas especializadas y embalaje premium para garantizar que tus muebles lleguen en perfectas condiciones.',
  },
  {
    icon: 'ShieldCheck', // Will map to Lucide ShieldCheck
    title: 'Garantía de Por Vida',
    description: 'Confiamos en nuestra artesanía. Todas las piezas de madera maciza cuentan con garantía estructural de por vida.',
  },
  {
    icon: 'Trees', // Will map to Lucide Trees
    title: 'Madera Sostenible',
    description: 'Materiales provenientes de bosques gestionados responsablemente, certificados FSC.',
  },
];

export const promoData = {
  title: 'La Colección Esencial',
  description: 'Renueva tu espacio con piezas que nacen del oficio artesanal. Cada mueble es tallado a mano con maderas bolivianas para durar generaciones.',
  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
};

// WhatsApp contact number (from your requested defaults)
export const WHATSAPP_NUMBER = '59179785827';

export function getWhatsAppLink(productName: string) {
  const text = encodeURIComponent(`Quiero comprar ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
