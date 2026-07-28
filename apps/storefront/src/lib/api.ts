import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  sku: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  benefits: string[];
  ingredients: string;
  usageInstructions: string;
  mrp: number;
  sellingPrice: number;
  discountPercent: number;
  avgRating: number;
  reviewCount: number;
  images: Array<{ url: string; altText: string; isPrimary: boolean }>;
  variants: Array<{
    id: string;
    sku: string;
    size?: string;
    color?: string;
    shade?: string;
    mrp: number;
    sellingPrice: number;
    stock: number;
  }>;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export const initialFallbackProducts: ProductItem[] = [
  // Salon Professional Products
  {
    id: 'sp-1',
    name: "L'Oréal Professionnel X-Tenso Oleoshape Smoothing Cream",
    slug: 'loreal-xtenso-oleoshape-smoothing-cream',
    brand: "L'Oréal Professionnel",
    category: 'Salon Professional Products',
    sku: 'LOR-XTENSO-CREAM-400',
    shortDescription: 'Professional salon hair straightening and smoothing cream system.',
    description: 'Transform unruly hair into silky smooth straightened hair with Nutri-Cationic technology.',
    highlights: ['Nutri-Cationic Formula', 'Long-lasting salon straightening', 'Frizz control'],
    benefits: ['Smooth hair', 'Mirror shine'],
    ingredients: 'Aqua, Thioglycolic Acid, Cetearyl Alcohol.',
    usageInstructions: 'For professional salon use only with Neutralizer cream.',
    mrp: 1250,
    sellingPrice: 1099,
    discountPercent: 12,
    avgRating: 4.9,
    reviewCount: 42,
    images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', altText: "L'Oréal X-Tenso", isPrimary: true }],
    variants: [{ id: 'v-sp1', sku: 'LOR-XTENSO-CREAM-400', size: '400ml', mrp: 1250, sellingPrice: 1099, stock: 35 }]
  },
  {
    id: 'sp-2',
    name: 'Schwarzkopf Bonacure Keratin Smooth Perfect Treatment',
    slug: 'schwarzkopf-bonacure-keratin-smooth-treatment',
    brand: 'Schwarzkopf Professional',
    category: 'Salon Professional Products',
    sku: 'SCH-KER-SMOOTH-200',
    shortDescription: 'Deep nourishing salon treatment for frizzy hair.',
    description: 'Intensified keratin treatment that tames unruly hair and protects against humidity.',
    highlights: ['Keratin-infused', 'Anti-humidity barrier', 'Silky manageability'],
    benefits: ['Frizz-free smoothness', 'Heat protection'],
    ingredients: 'Aqua, Hydrolyzed Keratin.',
    usageInstructions: 'Apply to wet hair, leave 5-10 mins, rinse.',
    mrp: 1100,
    sellingPrice: 960,
    discountPercent: 13,
    avgRating: 4.8,
    reviewCount: 28,
    images: [{ url: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80', altText: 'Schwarzkopf Keratin', isPrimary: true }],
    variants: [{ id: 'v-sp2', sku: 'SCH-KER-SMOOTH-200', size: '200ml', mrp: 1100, sellingPrice: 960, stock: 40 }]
  },

  // Hair Care & Hair Color
  {
    id: 'hc-1',
    name: "L'Oréal Professionnel Absolut Repair Hair Mask",
    slug: 'loreal-absolut-repair-mask',
    brand: "L'Oréal Professionnel",
    category: 'Hair Care & Hair Color',
    sku: 'LOR-ABS-MASK-250',
    shortDescription: 'Professional nourishing hair mask for damaged and dry hair.',
    description: 'Expert nourishing hair mask enriched with Gold Quinoa and Wheat Protein.',
    highlights: ['Gold Quinoa + Protein', '13x more damage resistance', 'Salon deep conditioning'],
    benefits: ['Deep repair', 'Shine booster', 'Frizz control'],
    ingredients: 'Aqua, Gold Quinoa Extract, Hydrolyzed Wheat Protein.',
    usageInstructions: 'Apply evenly to towel-dried hair. Leave on 3-5 mins, rinse.',
    mrp: 950,
    sellingPrice: 855,
    discountPercent: 10,
    avgRating: 4.8,
    reviewCount: 34,
    images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', altText: "L'Oréal Hair Mask", isPrimary: true }],
    variants: [{ id: 'v-hc1', sku: 'LOR-ABS-MASK-250', size: '250ml', mrp: 950, sellingPrice: 855, stock: 45 }]
  },
  {
    id: 'hc-2',
    name: 'Schwarzkopf Igora Royal Hair Color Shade 5-0',
    slug: 'schwarzkopf-igora-royal-shade-5-0',
    brand: 'Schwarzkopf Professional',
    category: 'Hair Care & Hair Color',
    sku: 'SCH-IGORA-5-0',
    shortDescription: 'Permanent salon hair color cream with maximum coverage.',
    description: 'Schwarzkopf Igora Royal delivers 100% white hair coverage with unmatched color intensity.',
    highlights: ['100% Grey Coverage', 'Long-lasting color brilliance', 'High definition shine'],
    benefits: ['True to swatch tone', 'Luminous shine'],
    ingredients: 'Aqua, Cetearyl Alcohol, Ammonium Hydroxide.',
    usageInstructions: 'Mix 1:1 with developer. Apply for 30-45 minutes.',
    mrp: 525,
    sellingPrice: 460,
    discountPercent: 12,
    avgRating: 4.7,
    reviewCount: 18,
    images: [{ url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', altText: 'Schwarzkopf Igora', isPrimary: true }],
    variants: [{ id: 'v-hc2', sku: 'SCH-IGORA-5-0', shade: '5-0 Light Brown', size: '60ml', mrp: 525, sellingPrice: 460, stock: 60 }]
  },

  // Skin Care & Facial Kits
  {
    id: 'sc-1',
    name: 'O3+ Professional Brightening Facial Kit',
    slug: 'o3-professional-brightening-facial-kit',
    brand: 'O3+ Professional',
    category: 'Skin Care & Facial Kits',
    sku: 'O3-BRIGHT-FACIAL-KIT',
    shortDescription: 'Dermatologist tested salon professional facial kit for glowing skin.',
    description: 'Award-winning O3+ facial treatment kit designed for salon professionals.',
    highlights: ['Reduces pigmentation', 'Instant glow effect', 'Hygiene packed pods'],
    benefits: ['Even skin tone', 'Radiant glow'],
    ingredients: 'Vitamin C, Niacinamide, Milk Protein.',
    usageInstructions: 'Follow 5-step process.',
    mrp: 1450,
    sellingPrice: 1290,
    discountPercent: 11,
    avgRating: 4.9,
    reviewCount: 52,
    images: [{ url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80', altText: 'O3+ Facial Kit', isPrimary: true }],
    variants: [{ id: 'v-sc1', sku: 'O3-BRIGHT-FACIAL-KIT', size: 'Single Pack (125g)', mrp: 1450, sellingPrice: 1290, stock: 30 }]
  },
  {
    id: 'sc-2',
    name: 'Lotus Herbals Safe Sun UV Screen Matte GEL SPF 50',
    slug: 'lotus-herbals-safe-sun-matte-gel-spf-50',
    brand: 'Lotus Herbals',
    category: 'Skin Care & Facial Kits',
    sku: 'LOT-SUN-SPF50-100',
    shortDescription: 'Ultra-lightweight oil-free matte sunscreen gel.',
    description: 'Protects against UVA & UVB rays while controlling shine and oil.',
    highlights: ['SPF 50 PA+++', 'Non-greasy Matte Gel', 'Sweat resistant'],
    benefits: ['Sunburn protection', 'Oil control'],
    ingredients: 'Horse Chestnut, Comfrey, Vanilla extract.',
    usageInstructions: 'Apply liberally before sun exposure.',
    mrp: 495,
    sellingPrice: 425,
    discountPercent: 14,
    avgRating: 4.8,
    reviewCount: 88,
    images: [{ url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80', altText: 'Lotus Sunscreen Gel', isPrimary: true }],
    variants: [{ id: 'v-sc2', sku: 'LOT-SUN-SPF50-100', size: '100g', mrp: 495, sellingPrice: 425, stock: 80 }]
  },

  // Branded Cosmetics & Makeup
  {
    id: 'cm-1',
    name: 'Maybelline Superstay Matte Ink Liquid Lipstick',
    slug: 'maybelline-superstay-matte-ink',
    brand: 'Maybelline New York',
    category: 'Branded Cosmetics & Makeup',
    sku: 'MAY-MATTE-INK-RULER',
    shortDescription: '16-hour long lasting transfer-proof liquid lipstick.',
    description: 'Ink your lips in up to 16 hours of saturated liquid matte color.',
    highlights: ['Up to 16 Hour Wear', 'Transfer-proof formula', 'Arrow applicator tip'],
    benefits: ['Non-drying formula', 'Bold color payoff'],
    ingredients: 'Dimethicone, Isododecane, Trimethylsiloxysilicate.',
    usageInstructions: 'Apply in center of upper lip and follow contours.',
    mrp: 699,
    sellingPrice: 599,
    discountPercent: 14,
    avgRating: 4.8,
    reviewCount: 89,
    images: [{ url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80', altText: 'Maybelline Liquid Lipstick', isPrimary: true }],
    variants: [{ id: 'v-cm1', sku: 'MAY-MATTE-INK-RULER', shade: '80 Ruler', size: '5ml', mrp: 699, sellingPrice: 599, stock: 50 }]
  },
  {
    id: 'cm-2',
    name: 'Maybelline Fit Me Matte + Poreless Liquid Foundation',
    slug: 'maybelline-fit-me-matte-poreless-foundation',
    brand: 'Maybelline New York',
    category: 'Branded Cosmetics & Makeup',
    sku: 'MAY-FITME-FOUND-128',
    shortDescription: 'Natural matte finish liquid foundation with clay technology.',
    description: 'Refines pores and absorbs oil for a natural, seamless matte finish.',
    highlights: ['Clay tech oil control', 'SPF 22 PA+++', 'Non-comedogenic'],
    benefits: ['Pore refinement', 'Natural coverage'],
    ingredients: 'Aqua, Cyclohexasiloxane, Nylon-12.',
    usageInstructions: 'Apply evenly to face and blend with fingertips.',
    mrp: 649,
    sellingPrice: 550,
    discountPercent: 15,
    avgRating: 4.7,
    reviewCount: 110,
    images: [{ url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80', altText: 'Maybelline Fit Me Foundation', isPrimary: true }],
    variants: [{ id: 'v-cm2', sku: 'MAY-FITME-FOUND-128', shade: '128 Warm Nude', size: '30ml', mrp: 649, sellingPrice: 550, stock: 60 }]
  }
];

export async function fetchProducts(params?: { category?: string; brand?: string; search?: string }) {
  try {
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.brand) query.set('brand', params.brand);
    if (params?.search) query.set('search', params.search);

    const res = await fetch(`${API_BASE}/catalog/products?${query.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    return json.data as ProductItem[];
  } catch (err) {
    let items = [...initialFallbackProducts];
    if (params?.category) {
      const cat = params.category.toLowerCase();
      items = items.filter(i => i.category.toLowerCase().replace(/\s+/g, '-').includes(cat));
    }
    if (params?.search) {
      items = items.filter(i => i.name.toLowerCase().includes(params.search!.toLowerCase()));
    }
    return items;
  }
}

export async function fetchProductBySlug(slug: string) {
  try {
    const res = await fetch(`${API_BASE}/catalog/products/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API fetch failed');
    const json = await res.json();
    return json.data.product as ProductItem;
  } catch {
    return initialFallbackProducts.find(p => p.slug === slug || p.id === slug) || initialFallbackProducts[0];
  }
}
