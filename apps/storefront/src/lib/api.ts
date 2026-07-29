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
    name: "L'Oréal Professionnel X-Tenso Oleoshape Smoothing Cream (400g)",
    slug: 'loreal-xtenso-oleoshape-smoothing-cream',
    brand: "L'Oréal Professionnel",
    category: 'Salon Professional Products',
    sku: 'LOR-XTENSO-CREAM-400',
    shortDescription: 'Professional hair straightening & smoothing cream for resistant hair.',
    description: 'Transform frizzy, unmanageable hair into silky smooth, salon-perfect locks with L\'Oréal Professionnel X-Tenso Oleoshape.',
    highlights: ['Thio technology for long-lasting straightening', 'Enriched with nourishing oils', 'Low odor formulation'],
    benefits: ['Straightens resistant curls', 'Adds radiant shine', 'Reduces hair breakage'],
    ingredients: 'Aqua, Thioglycolic Acid, Cetearyl Alcohol, Ammonium Hydroxide, Mineral Oil.',
    usageInstructions: 'For professional salon use only. Apply cream evenly on washed, towel-dried hair.',
    mrp: 1250,
    sellingPrice: 1099,
    discountPercent: 12,
    avgRating: 4.9,
    reviewCount: 142,
    images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', altText: 'Loreal Xtenso', isPrimary: true }],
    variants: [{ id: 'v-sp1-1', sku: 'LOR-XTENSO-CREAM-400', size: '400g', mrp: 1250, sellingPrice: 1099, stock: 45 }]
  },
  {
    id: 'sp-2',
    name: 'Schwarzkopf Professional Bonacure Peptide Repair Rescue Mask',
    slug: 'schwarzkopf-bonacure-repair-rescue-mask',
    brand: 'Schwarzkopf Professional',
    category: 'Salon Professional Products',
    sku: 'SCH-BON-REPAIR-MASK',
    shortDescription: 'Reconstructive salon mask for severely damaged, over-processed hair.',
    description: 'Schwarzkopf BC Bonacure Repair Rescue Treatment deeply reconstructs damaged inner and outer hair structure.',
    highlights: ['Peptide repair technology', 'Restores elasticity', 'Rebuilds hair cortex'],
    benefits: ['Intensive hair repair', 'Reduces split ends by 95%', 'Protects against heat'],
    ingredients: 'Aqua, Cetearyl Alcohol, Isopropyl Myristate, Behenamidopropyl Dimethylamine, Peptides.',
    usageInstructions: 'Apply to towel-dried hair after shampooing. Leave in for 5-10 minutes and rinse thoroughly.',
    mrp: 1150,
    sellingPrice: 975,
    discountPercent: 15,
    avgRating: 4.8,
    reviewCount: 98,
    images: [{ url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', altText: 'Schwarzkopf Mask', isPrimary: true }],
    variants: [{ id: 'v-sp2-1', sku: 'SCH-BON-REPAIR-MASK', size: '200ml', mrp: 1150, sellingPrice: 975, stock: 60 }]
  },
  {
    id: 'hc-1',
    name: "L'Oréal Professionnel Absolut Repair Hair Mask (250ml)",
    slug: 'loreal-absolut-repair-mask-250',
    brand: "L'Oréal Professionnel",
    category: 'Hair Care & Hair Color',
    sku: 'LOR-ABS-MASK-250',
    shortDescription: 'Deep repair hair mask for damaged and weak hair fibers.',
    description: 'Enriched with Gold Quinoa and Wheat Protein, this mask reduces hair surface damages by 77%.',
    highlights: ['Gold Quinoa Extract', 'Instant shine restoration', 'Lightweight creamy butter texture'],
    benefits: ['77% less damaged hair', '7x shinier hair finish', 'Soft feathertouch feel'],
    ingredients: 'Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Quinoa Seed Extract, Hydrolyzed Wheat Protein.',
    usageInstructions: 'Apply to washed and towel-dried hair. Leave on for 3 to 5 minutes. Rinse thoroughly.',
    mrp: 950,
    sellingPrice: 855,
    discountPercent: 10,
    avgRating: 4.8,
    reviewCount: 160,
    images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', altText: 'Loreal Mask 250ml', isPrimary: true }],
    variants: [{ id: 'v-hc1-1', sku: 'LOR-ABS-MASK-250', size: '250ml', mrp: 950, sellingPrice: 855, stock: 50 }]
  },
  {
    id: 'sc-1',
    name: 'O3+ Professional Brightening Facial Kit for Radiant Glow',
    slug: 'o3-professional-brightening-facial-kit',
    brand: 'O3+ Professional',
    category: 'Skin Care & Facial Kits',
    sku: 'O3-BRIGHT-FACIAL-KIT',
    shortDescription: 'Dermatologist recommended 5-step bridal brightening facial kit.',
    description: 'O3+ Brightening Facial Kit provides deep pore cleansing, pigmentation reduction, and instant glow for special occasions.',
    highlights: ['5 Single-use treatment pods', 'Suitable for all skin types', 'Dermatologically tested'],
    benefits: ['Evens skin tone', 'Removes sun tan', 'Instant 30-minute bridal glow'],
    ingredients: 'Milk Cleanser, Micro Derma Peel, Whitening Cream, Brightening Face Mask.',
    usageInstructions: 'Follow Steps 1 through 5 sequentially as labeled on the individual sachets.',
    mrp: 1450,
    sellingPrice: 1290,
    discountPercent: 11,
    avgRating: 4.9,
    reviewCount: 290,
    images: [{ url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80', altText: 'O3 Facial Kit', isPrimary: true }],
    variants: [{ id: 'v-sc1-1', sku: 'O3-BRIGHT-FACIAL-KIT', size: 'Single Pack 50g', mrp: 1450, sellingPrice: 1290, stock: 65 }]
  },
  {
    id: 'cm-1',
    name: 'Maybelline Superstay Matte Ink Liquid Lipstick - Ruler 80',
    slug: 'maybelline-superstay-matte-ink-ruler',
    brand: 'Maybelline New York',
    category: 'Branded Cosmetics & Makeup',
    sku: 'MAY-MATTE-INK-RULER',
    shortDescription: '16-Hour transfer-proof liquid matte lipstick in deep reddish berry.',
    description: 'Ink your lips in up to 16 hours of saturated liquid matte color with Maybelline Superstay Matte Ink.',
    highlights: ['16 Hour Longwear', 'Arrow applicator for precise application', 'High-pigment matte formula'],
    benefits: ['Transfer-proof & smudge-proof', 'Non-drying matte finish', 'Waterproof'],
    ingredients: 'Isododecane, Dimethicone, Trimethylsiloxysilicate, Polypropylsilsesquioxane, Red 28 Lake.',
    usageInstructions: 'Apply liquid lipstick in the center of your upper lip and follow the contours of your mouth.',
    mrp: 699,
    sellingPrice: 599,
    discountPercent: 14,
    avgRating: 4.8,
    reviewCount: 380,
    images: [{ url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80', altText: 'Maybelline Matte Ink', isPrimary: true }],
    variants: [{ id: 'v-cm1-1', sku: 'MAY-MATTE-INK-RULER', shade: 'Ruler 80', mrp: 699, sellingPrice: 599, stock: 100 }]
  },
  {
    id: 'ba-1',
    name: 'Vega Professional Pro Touch Hair Dryer 2000W Heavy Duty Motor',
    slug: 'vega-pro-touch-hair-dryer-2000w',
    brand: 'Vega Professional',
    category: 'Beauty Accessories & Tools',
    sku: 'VEG-PRO-DRYER-2000W',
    shortDescription: 'Heavy-duty AC motor professional salon hair dryer with cool shot.',
    description: 'Vega Professional Pro Touch Dryer features 2000W heavy-duty motor, 2 speed settings, and cool shot button for salon blowouts.',
    highlights: ['2000 Watts AC Motor', 'Cool Shot Feature', 'Includes 2 Concentrator Nozzles'],
    benefits: ['Fast salon drying time', 'Reduces heat damage', 'Ergonomic non-slip grip'],
    ingredients: 'High grade heat-resistant polycarbonate casing, copper AC coil motor.',
    usageInstructions: 'Towel dry hair. Select speed and heat setting. Use cool shot to lock in style after drying.',
    mrp: 2990,
    sellingPrice: 2490,
    discountPercent: 17,
    avgRating: 4.8,
    reviewCount: 160,
    images: [{ url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', altText: 'Vega Dryer', isPrimary: true }],
    variants: [{ id: 'v-ba1-1', sku: 'VEG-PRO-DRYER-2000W', size: '2000W Black', mrp: 2990, sellingPrice: 2490, stock: 35 }]
  }
];

export async function fetchProducts(category?: string, search?: string): Promise<ProductItem[]> {
  return fetchCatalogProducts(category, search);
}

export async function fetchCatalogProducts(category?: string, search?: string): Promise<ProductItem[]> {
  try {
    let url = `${API_BASE}/catalog`;
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    if (params.toString()) url += `?${params.toString()}`;

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('API Catalog Fetch Failed');
    const json = await res.json();
    return json.products || json.data || initialFallbackProducts;
  } catch (err) {
    let filtered = initialFallbackProducts;
    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));
    }
    return filtered;
  }
}

export async function fetchProductBySlug(slug: string): Promise<ProductItem | null> {
  try {
    const res = await fetch(`${API_BASE}/catalog/product/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Product not found');
    const json = await res.json();
    return json.product || json.data || null;
  } catch (err) {
    return initialFallbackProducts.find(p => p.slug === slug) || null;
  }
}
