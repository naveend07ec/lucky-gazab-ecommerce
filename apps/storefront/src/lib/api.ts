import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  sku: string;
  barcode?: string;
  hsnCode?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  benefits: string[];
  ingredients: string;
  usageInstructions: string;
  mrp: number;
  sellingPrice: number;
  discountPercent: number;
  isVariantParent?: boolean;
  status?: string;
  avgRating: number;
  reviewCount: number;
  isFeatured?: boolean;
  isBestseller?: boolean;
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
  {
    "id": "sp-1",
    "name": "L'Or\u00e9al Professionnel X-Tenso Oleoshape Smoothing Cream (400g)",
    "slug": "lor\u00e9al-professionnel-x-tenso-oleoshape-smoothing-cream",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-XTENSO-CREAM-400",
    "barcode": "8901526401001",
    "hsnCode": "330590",
    "shortDescription": "Professional hair straightening & smoothing cream for resistant hair.",
    "description": "Authentic L'Or\u00e9al Professionnel X-Tenso Oleoshape Smoothing Cream (400g) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1250,
    "sellingPrice": 1099,
    "discountPercent": 12,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 45,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80&prod=sp-1",
        "altText": "L'Or\u00e9al Professionnel X-Tenso Oleoshape Smoothing Cream (400g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-1",
        "sku": "LOR-XTENSO-CREAM-400",
        "mrp": 1250,
        "sellingPrice": 1099,
        "stock": 25
      }
    ]
  },
  {
    "id": "sp-2",
    "name": "Schwarzkopf Professional Bonacure Peptide Repair Rescue Mask (200ml)",
    "slug": "schwarzkopf-professional-bonacure-peptide-repair-rescue-mask",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-BON-REPAIR-MASK-200",
    "barcode": "8901526401002",
    "hsnCode": "330590",
    "shortDescription": "Reconstructive salon mask for severely damaged, over-processed hair.",
    "description": "Authentic Schwarzkopf Professional Bonacure Peptide Repair Rescue Mask (200ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1150,
    "sellingPrice": 975,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 52,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&prod=sp-2",
        "altText": "Schwarzkopf Professional Bonacure Peptide Repair Rescue Mask (200ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-2",
        "sku": "SCH-BON-REPAIR-MASK-200",
        "mrp": 1150,
        "sellingPrice": 975,
        "stock": 30
      }
    ]
  },
  {
    "id": "sp-3",
    "name": "Matrix Opti.Care Smooth Straight Professional Shampoo (1L)",
    "slug": "matrix-smooth-straight-professional-shampoo",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-OPTI-SHAMP-1000",
    "barcode": "8901526401003",
    "hsnCode": "330590",
    "shortDescription": "Professional shea butter enriched shampoo for chemically straightened hair.",
    "description": "Authentic Matrix Opti.Care Smooth Straight Professional Shampoo (1L) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1100,
    "sellingPrice": 899,
    "discountPercent": 18,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 59,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80&prod=sp-3",
        "altText": "Matrix Opti.Care Smooth Straight Professional Shampoo (1L)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-3",
        "sku": "MAT-OPTI-SHAMP-1000",
        "mrp": 1100,
        "sellingPrice": 899,
        "stock": 35
      }
    ]
  },
  {
    "id": "sp-4",
    "name": "Wella Professionals Invigo Nutri-Enrich Deep Nourishing Mask (500ml)",
    "slug": "wella-professionals-invigo-nutri-enrich-deep-nourishing-mask",
    "brand": "Wella Professionals",
    "category": "Salon Professional Products",
    "sku": "WEL-INVIGO-NUTRI-500",
    "barcode": "8901526401004",
    "hsnCode": "330590",
    "shortDescription": "Salon nourishing mask infused with Goji Berry and Vitamin E.",
    "description": "Authentic Wella Professionals Invigo Nutri-Enrich Deep Nourishing Mask (500ml) distributed by Wella Professionals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1400,
    "sellingPrice": 1190,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 66,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&prod=sp-4",
        "altText": "Wella Professionals Invigo Nutri-Enrich Deep Nourishing Mask (500ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-4",
        "sku": "WEL-INVIGO-NUTRI-500",
        "mrp": 1400,
        "sellingPrice": 1190,
        "stock": 40
      }
    ]
  },
  {
    "id": "sp-5",
    "name": "Olaplex No. 3 Hair Perfector Bond Repair Treatment (100ml)",
    "slug": "olaplex-3-hair-perfector-bond-repair-treatment",
    "brand": "Olaplex",
    "category": "Salon Professional Products",
    "sku": "OLA-NO3-PERFECT-100",
    "barcode": "8901526401005",
    "hsnCode": "330590",
    "shortDescription": "Global salon bond building treatment for broken hair bonds.",
    "description": "Authentic Olaplex No. 3 Hair Perfector Bond Repair Treatment (100ml) distributed by Olaplex. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 3200,
    "sellingPrice": 2850,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 73,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=800&q=80&prod=sp-5",
        "altText": "Olaplex No. 3 Hair Perfector Bond Repair Treatment (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-5",
        "sku": "OLA-NO3-PERFECT-100",
        "mrp": 3200,
        "sellingPrice": 2850,
        "stock": 45
      }
    ]
  },
  {
    "id": "sp-6",
    "name": "GK Hair Juvexin Global Keratin Treatment (300ml)",
    "slug": "gk-hair-juvexin-global-keratin-treatment",
    "brand": "GK Hair",
    "category": "Salon Professional Products",
    "sku": "GKH-JUVEXIN-KERATIN-300",
    "barcode": "8901526401006",
    "hsnCode": "330590",
    "shortDescription": "Professional keratin smoothing treatment infused with Juvexin protein.",
    "description": "Authentic GK Hair Juvexin Global Keratin Treatment (300ml) distributed by GK Hair. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 4500,
    "sellingPrice": 3899,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 80,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&q=80&prod=sp-6",
        "altText": "GK Hair Juvexin Global Keratin Treatment (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-6",
        "sku": "GKH-JUVEXIN-KERATIN-300",
        "mrp": 4500,
        "sellingPrice": 3899,
        "stock": 50
      }
    ]
  },
  {
    "id": "sp-7",
    "name": "Streax Professional Canvoline Hair Straightening Intense Kit",
    "slug": "streax-professional-canvoline-hair-straightening-intense-kit",
    "brand": "Streax Professional",
    "category": "Salon Professional Products",
    "sku": "STR-CANV-KIT-500",
    "barcode": "8901526401007",
    "hsnCode": "330590",
    "shortDescription": "Intense salon straightening cream and neutralizer kit for thick coarse hair.",
    "description": "Authentic Streax Professional Canvoline Hair Straightening Intense Kit distributed by Streax Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 990,
    "sellingPrice": 825,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 87,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80&prod=sp-7",
        "altText": "Streax Professional Canvoline Hair Straightening Intense Kit",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-7",
        "sku": "STR-CANV-KIT-500",
        "mrp": 990,
        "sellingPrice": 825,
        "stock": 55
      }
    ]
  },
  {
    "id": "sp-8",
    "name": "L'Or\u00e9al Professionnel Serie Expert Absolut Repair Wheat Oil Serum (90ml)",
    "slug": "lor\u00e9al-professionnel-serie-expert-absolut-repair-wheat-oil-serum",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-ABS-SERUM-90",
    "barcode": "8901526401008",
    "hsnCode": "330590",
    "shortDescription": "Professional lightweight resurfacing serum for damaged hair tips.",
    "description": "Authentic L'Or\u00e9al Professionnel Serie Expert Absolut Repair Wheat Oil Serum (90ml) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 750,
    "sellingPrice": 645,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 94,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80&prod=sp-8",
        "altText": "L'Or\u00e9al Professionnel Serie Expert Absolut Repair Wheat Oil Serum (90ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-8",
        "sku": "LOR-ABS-SERUM-90",
        "mrp": 750,
        "sellingPrice": 645,
        "stock": 60
      }
    ]
  },
  {
    "id": "sp-9",
    "name": "Schwarzkopf Professional Igora Royal Hair Color Cream Shade 5-0 (60ml)",
    "slug": "schwarzkopf-professional-igora-royal-hair-color-cream-shade-5-0",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-IGORA-5-0-60",
    "barcode": "8901526401009",
    "hsnCode": "330590",
    "shortDescription": "High definition salon permanent hair color cream for 100% white coverage.",
    "description": "Authentic Schwarzkopf Professional Igora Royal Hair Color Cream Shade 5-0 (60ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 490,
    "sellingPrice": 425,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 101,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&prod=sp-9",
        "altText": "Schwarzkopf Professional Igora Royal Hair Color Cream Shade 5-0 (60ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-9",
        "sku": "SCH-IGORA-5-0-60",
        "mrp": 490,
        "sellingPrice": 425,
        "stock": 65
      }
    ]
  },
  {
    "id": "sp-10",
    "name": "Matrix Biolage Smoothproof Camellia Serum (100ml)",
    "slug": "matrix-biolage-smoothproof-camellia-serum",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-BIOLAGE-SERUM-100",
    "barcode": "8901526401010",
    "hsnCode": "330590",
    "shortDescription": "Botanical camellia oil serum for 72-hour anti-frizz humidity protection.",
    "description": "Authentic Matrix Biolage Smoothproof Camellia Serum (100ml) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 650,
    "sellingPrice": 550,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 108,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&prod=sp-10",
        "altText": "Matrix Biolage Smoothproof Camellia Serum (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-10",
        "sku": "MAT-BIOLAGE-SERUM-100",
        "mrp": 650,
        "sellingPrice": 550,
        "stock": 70
      }
    ]
  },
  {
    "id": "sp-11",
    "name": "Wella Professionals Koleston Perfect Me+ Hair Color Shade 4/0 (60ml)",
    "slug": "wella-professionals-koleston-perfect-meplus-hair-color-shade-4-0",
    "brand": "Wella Professionals",
    "category": "Salon Professional Products",
    "sku": "WEL-KOLESTON-4-0-60",
    "barcode": "8901526401011",
    "hsnCode": "330590",
    "shortDescription": "Pure balance technology permanent hair color reducing risk of developing new allergy.",
    "description": "Authentic Wella Professionals Koleston Perfect Me+ Hair Color Shade 4/0 (60ml) distributed by Wella Professionals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 520,
    "sellingPrice": 445,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 115,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80&prod=sp-11",
        "altText": "Wella Professionals Koleston Perfect Me+ Hair Color Shade 4/0 (60ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-11",
        "sku": "WEL-KOLESTON-4-0-60",
        "mrp": 520,
        "sellingPrice": 445,
        "stock": 75
      }
    ]
  },
  {
    "id": "sp-12",
    "name": "Olaplex No. 4 Bond Maintenance Shampoo (250ml)",
    "slug": "olaplex-4-bond-maintenance-shampoo",
    "brand": "Olaplex",
    "category": "Salon Professional Products",
    "sku": "OLA-NO4-SHAMP-250",
    "barcode": "8901526401012",
    "hsnCode": "330590",
    "shortDescription": "Highly moisturizing reparative shampoo that leaves hair easy to manage.",
    "description": "Authentic Olaplex No. 4 Bond Maintenance Shampoo (250ml) distributed by Olaplex. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 3200,
    "sellingPrice": 2850,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 122,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80&prod=sp-12",
        "altText": "Olaplex No. 4 Bond Maintenance Shampoo (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-12",
        "sku": "OLA-NO4-SHAMP-250",
        "mrp": 3200,
        "sellingPrice": 2850,
        "stock": 80
      }
    ]
  },
  {
    "id": "sp-13",
    "name": "GK Hair Deep Conditioner Hair Masque (200g)",
    "slug": "gk-hair-deep-conditioner-hair-masque",
    "brand": "GK Hair",
    "category": "Salon Professional Products",
    "sku": "GKH-DEEP-MASQUE-200",
    "barcode": "8901526401013",
    "hsnCode": "330590",
    "shortDescription": "Intensive salon masque to transform dry coarse hair into smooth soft strands.",
    "description": "Authentic GK Hair Deep Conditioner Hair Masque (200g) distributed by GK Hair. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2200,
    "sellingPrice": 1890,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 129,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&prod=sp-13",
        "altText": "GK Hair Deep Conditioner Hair Masque (200g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-13",
        "sku": "GKH-DEEP-MASQUE-200",
        "mrp": 2200,
        "sellingPrice": 1890,
        "stock": 85
      }
    ]
  },
  {
    "id": "sp-14",
    "name": "L'Or\u00e9al Professionnel Smartbond Step 1 Bond Additive (500ml)",
    "slug": "lor\u00e9al-professionnel-smartbond-step-1-bond-additive",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-SMARTBOND-STEP1",
    "barcode": "8901526401014",
    "hsnCode": "330590",
    "shortDescription": "Salon technical system protecting and strengthening hair during bleaching and coloring.",
    "description": "Authentic L'Or\u00e9al Professionnel Smartbond Step 1 Bond Additive (500ml) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 4800,
    "sellingPrice": 4199,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 136,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&prod=sp-14",
        "altText": "L'Or\u00e9al Professionnel Smartbond Step 1 Bond Additive (500ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-14",
        "sku": "LOR-SMARTBOND-STEP1",
        "mrp": 4800,
        "sellingPrice": 4199,
        "stock": 90
      }
    ]
  },
  {
    "id": "sp-15",
    "name": "Schwarzkopf Professional Osis+ Session Extreme Hold Hairspray (500ml)",
    "slug": "schwarzkopf-professional-osisplus-session-extreme-hold-hairspray",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-OSIS-SESSION-500",
    "barcode": "8901526401015",
    "hsnCode": "330590",
    "shortDescription": "Ultra fine fast-drying salon hairspray for extreme long-lasting hold.",
    "description": "Authentic Schwarzkopf Professional Osis+ Session Extreme Hold Hairspray (500ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1200,
    "sellingPrice": 999,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 143,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&prod=sp-15",
        "altText": "Schwarzkopf Professional Osis+ Session Extreme Hold Hairspray (500ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-15",
        "sku": "SCH-OSIS-SESSION-500",
        "mrp": 1200,
        "sellingPrice": 999,
        "stock": 95
      }
    ]
  },
  {
    "id": "sp-16",
    "name": "Matrix Opti.Straight Neutralizer Cream (500ml)",
    "slug": "matrix-neutralizer-cream",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-OPTI-NEUT-500",
    "barcode": "8901526401016",
    "hsnCode": "330590",
    "shortDescription": "Professional conditioning neutralizer cream for permanent straightening.",
    "description": "Authentic Matrix Opti.Straight Neutralizer Cream (500ml) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 750,
    "sellingPrice": 635,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 150,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&prod=sp-16",
        "altText": "Matrix Opti.Straight Neutralizer Cream (500ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-16",
        "sku": "MAT-OPTI-NEUT-500",
        "mrp": 750,
        "sellingPrice": 635,
        "stock": 100
      }
    ]
  },
  {
    "id": "sp-17",
    "name": "Wella Professionals Elements Renewing Shampoo (250ml)",
    "slug": "wella-professionals-elements-renewing-shampoo",
    "brand": "Wella Professionals",
    "category": "Salon Professional Products",
    "sku": "WEL-ELEMENTS-SHAMP-250",
    "barcode": "8901526401017",
    "hsnCode": "330590",
    "shortDescription": "Zero sulfates zero silicones renewing shampoo formulated with 91% natural origin.",
    "description": "Authentic Wella Professionals Elements Renewing Shampoo (250ml) distributed by Wella Professionals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1050,
    "sellingPrice": 895,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 157,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80&prod=sp-17",
        "altText": "Wella Professionals Elements Renewing Shampoo (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-17",
        "sku": "WEL-ELEMENTS-SHAMP-250",
        "mrp": 1050,
        "sellingPrice": 895,
        "stock": 105
      }
    ]
  },
  {
    "id": "sp-18",
    "name": "Streax Professional Argan Secret Nourishing Hair Serum (100ml)",
    "slug": "streax-professional-argan-secret-nourishing-hair-serum",
    "brand": "Streax Professional",
    "category": "Salon Professional Products",
    "sku": "STR-ARGAN-SERUM-100",
    "barcode": "8901526401018",
    "hsnCode": "330590",
    "shortDescription": "Argan oil enriched salon serum providing intense shine and heat shield.",
    "description": "Authentic Streax Professional Argan Secret Nourishing Hair Serum (100ml) distributed by Streax Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 465,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 164,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228722-d119f01b7642?w=800&q=80&prod=sp-18",
        "altText": "Streax Professional Argan Secret Nourishing Hair Serum (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-18",
        "sku": "STR-ARGAN-SERUM-100",
        "mrp": 550,
        "sellingPrice": 465,
        "stock": 110
      }
    ]
  },
  {
    "id": "sp-19",
    "name": "L'Or\u00e9al Professionnel Scalp Advanced Anti-Dandruff Dermo-Clarifying Shampoo (300ml)",
    "slug": "lor\u00e9al-professionnel-scalp-advanced-anti-dandruff-dermo-clarifying-shampoo",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-SCALP-ADV-300",
    "barcode": "8901526401019",
    "hsnCode": "330590",
    "shortDescription": "Targeted dermo-clarifying salon shampoo for sensitive flaky scalps.",
    "description": "Authentic L'Or\u00e9al Professionnel Scalp Advanced Anti-Dandruff Dermo-Clarifying Shampoo (300ml) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 990,
    "sellingPrice": 845,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 171,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80&prod=sp-19",
        "altText": "L'Or\u00e9al Professionnel Scalp Advanced Anti-Dandruff Dermo-Clarifying Shampoo (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-19",
        "sku": "LOR-SCALP-ADV-300",
        "mrp": 990,
        "sellingPrice": 845,
        "stock": 115
      }
    ]
  },
  {
    "id": "sp-20",
    "name": "Olaplex No. 5 Bond Maintenance Conditioner (250ml)",
    "slug": "olaplex-5-bond-maintenance-conditioner",
    "brand": "Olaplex",
    "category": "Salon Professional Products",
    "sku": "OLA-NO5-COND-250",
    "barcode": "8901526401020",
    "hsnCode": "330590",
    "shortDescription": "Restorative salon conditioner that eliminates damage and frizz.",
    "description": "Authentic Olaplex No. 5 Bond Maintenance Conditioner (250ml) distributed by Olaplex. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 3200,
    "sellingPrice": 2850,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 178,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&prod=sp-20",
        "altText": "Olaplex No. 5 Bond Maintenance Conditioner (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-20",
        "sku": "OLA-NO5-COND-250",
        "mrp": 3200,
        "sellingPrice": 2850,
        "stock": 120
      }
    ]
  },
  {
    "id": "sp-21",
    "name": "GK Hair Shield Shampoo Color Protection (240ml)",
    "slug": "gk-hair-shield-shampoo-color-protection",
    "brand": "GK Hair",
    "category": "Salon Professional Products",
    "sku": "GKH-SHIELD-SHAMP-240",
    "barcode": "8901526401021",
    "hsnCode": "330590",
    "shortDescription": "Color protection shampoo formulated with Juvexin to shield against UV rays.",
    "description": "Authentic GK Hair Shield Shampoo Color Protection (240ml) distributed by GK Hair. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1950,
    "sellingPrice": 1650,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 185,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&prod=sp-21",
        "altText": "GK Hair Shield Shampoo Color Protection (240ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-21",
        "sku": "GKH-SHIELD-SHAMP-240",
        "mrp": 1950,
        "sellingPrice": 1650,
        "stock": 125
      }
    ]
  },
  {
    "id": "sp-22",
    "name": "Schwarzkopf Professional Scalp Clinix Control Shampoo (300ml)",
    "slug": "schwarzkopf-professional-scalp-clinix-control-shampoo",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-SCALP-CLINIX-300",
    "barcode": "8901526401022",
    "hsnCode": "330590",
    "shortDescription": "Biotic technology scalp shampoo rebalancing scalp microbiome.",
    "description": "Authentic Schwarzkopf Professional Scalp Clinix Control Shampoo (300ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1350,
    "sellingPrice": 1149,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 192,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583241799080-877797746ebc?w=800&q=80&prod=sp-22",
        "altText": "Schwarzkopf Professional Scalp Clinix Control Shampoo (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-22",
        "sku": "SCH-SCALP-CLINIX-300",
        "mrp": 1350,
        "sellingPrice": 1149,
        "stock": 130
      }
    ]
  },
  {
    "id": "sp-23",
    "name": "Matrix Biolage Advanced Keratindose Hair Mask (200g)",
    "slug": "matrix-biolage-advanced-keratindose-hair-mask",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-BIOLAGE-KERATIN-200",
    "barcode": "8901526401023",
    "hsnCode": "330590",
    "shortDescription": "Pro-keratin and silk enriched hair mask for over-processed hair.",
    "description": "Authentic Matrix Biolage Advanced Keratindose Hair Mask (200g) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 950,
    "sellingPrice": 799,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 199,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&prod=sp-23",
        "altText": "Matrix Biolage Advanced Keratindose Hair Mask (200g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-23",
        "sku": "MAT-BIOLAGE-KERATIN-200",
        "mrp": 950,
        "sellingPrice": 799,
        "stock": 135
      }
    ]
  },
  {
    "id": "sp-24",
    "name": "Wella Professionals EIMI Thermal Image Heat Protection Spray (150ml)",
    "slug": "wella-professionals-eimi-thermal-image-heat-protection-spray",
    "brand": "Wella Professionals",
    "category": "Salon Professional Products",
    "sku": "WEL-EIMI-HEAT-150",
    "barcode": "8901526401024",
    "hsnCode": "330590",
    "shortDescription": "Phase 1 nourishes hair and Phase 2 shields against styling heat up to 220C.",
    "description": "Authentic Wella Professionals EIMI Thermal Image Heat Protection Spray (150ml) distributed by Wella Professionals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1100,
    "sellingPrice": 935,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 206,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&prod=sp-24",
        "altText": "Wella Professionals EIMI Thermal Image Heat Protection Spray (150ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-24",
        "sku": "WEL-EIMI-HEAT-150",
        "mrp": 1100,
        "sellingPrice": 935,
        "stock": 140
      }
    ]
  },
  {
    "id": "sp-25",
    "name": "Streax Professional Spa Cognac Revitalizing Hair Mask (500g)",
    "slug": "streax-professional-spa-cognac-revitalizing-hair-mask",
    "brand": "Streax Professional",
    "category": "Salon Professional Products",
    "sku": "STR-SPA-COGNAC-500",
    "barcode": "8901526401025",
    "hsnCode": "330590",
    "shortDescription": "Salon hair spa cream enriched with cognac extracts for vitality and bounce.",
    "description": "Authentic Streax Professional Spa Cognac Revitalizing Hair Mask (500g) distributed by Streax Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 850,
    "sellingPrice": 715,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 213,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&prod=sp-25",
        "altText": "Streax Professional Spa Cognac Revitalizing Hair Mask (500g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-25",
        "sku": "STR-SPA-COGNAC-500",
        "mrp": 850,
        "sellingPrice": 715,
        "stock": 145
      }
    ]
  },
  {
    "id": "sp-26",
    "name": "L'Or\u00e9al Professionnel Inoa Ammonia-Free Permanent Hair Color Shade 4 (60g)",
    "slug": "lor\u00e9al-professionnel-inoa-ammonia-free-permanent-hair-color-shade-4",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-INOA-4-60",
    "barcode": "8901526401026",
    "hsnCode": "330590",
    "shortDescription": "Ammonia free ODS technology permanent color providing optimal scalp comfort.",
    "description": "Authentic L'Or\u00e9al Professionnel Inoa Ammonia-Free Permanent Hair Color Shade 4 (60g) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 620,
    "sellingPrice": 535,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 220,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&prod=sp-26",
        "altText": "L'Or\u00e9al Professionnel Inoa Ammonia-Free Permanent Hair Color Shade 4 (60g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-26",
        "sku": "LOR-INOA-4-60",
        "mrp": 620,
        "sellingPrice": 535,
        "stock": 150
      }
    ]
  },
  {
    "id": "sp-27",
    "name": "Olaplex No. 7 Bonding Hair Oil (30ml)",
    "slug": "olaplex-7-bonding-hair-oil",
    "brand": "Olaplex",
    "category": "Salon Professional Products",
    "sku": "OLA-NO7-OIL-30",
    "barcode": "8901526401027",
    "hsnCode": "330590",
    "shortDescription": "Ultra concentrated weightless reparative styling oil for brilliant shine.",
    "description": "Authentic Olaplex No. 7 Bonding Hair Oil (30ml) distributed by Olaplex. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 3200,
    "sellingPrice": 2850,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 227,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337094846-8a8385875974?w=800&q=80&prod=sp-27",
        "altText": "Olaplex No. 7 Bonding Hair Oil (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-27",
        "sku": "OLA-NO7-OIL-30",
        "mrp": 3200,
        "sellingPrice": 2850,
        "stock": 155
      }
    ]
  },
  {
    "id": "sp-28",
    "name": "Schwarzkopf Professional Fibreplex No. 1 Bond Booster (100ml)",
    "slug": "schwarzkopf-professional-fibreplex-1-bond-booster",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-FIBRE-NO1-100",
    "barcode": "8901526401028",
    "hsnCode": "330590",
    "shortDescription": "Protects hair from damage during technical color processes.",
    "description": "Authentic Schwarzkopf Professional Fibreplex No. 1 Bond Booster (100ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2800,
    "sellingPrice": 2390,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 234,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&prod=sp-28",
        "altText": "Schwarzkopf Professional Fibreplex No. 1 Bond Booster (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-28",
        "sku": "SCH-FIBRE-NO1-100",
        "mrp": 2800,
        "sellingPrice": 2390,
        "stock": 160
      }
    ]
  },
  {
    "id": "sp-29",
    "name": "GK Hair Cashmere Hair Cream Serum (50ml)",
    "slug": "gk-hair-cashmere-hair-cream-serum",
    "brand": "GK Hair",
    "category": "Salon Professional Products",
    "sku": "GKH-CASHMERE-CREAM-50",
    "barcode": "8901526401029",
    "hsnCode": "330590",
    "shortDescription": "Specialized light formula smoothing ends and softening hair.",
    "description": "Authentic GK Hair Cashmere Hair Cream Serum (50ml) distributed by GK Hair. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1850,
    "sellingPrice": 1599,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 241,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337651144-8d48a1267860?w=800&q=80&prod=sp-29",
        "altText": "GK Hair Cashmere Hair Cream Serum (50ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-29",
        "sku": "GKH-CASHMERE-CREAM-50",
        "mrp": 1850,
        "sellingPrice": 1599,
        "stock": 165
      }
    ]
  },
  {
    "id": "sp-30",
    "name": "Matrix Opti.Care Smooth Straight Conditioner (198g)",
    "slug": "matrix-smooth-straight-conditioner",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-OPTI-COND-198",
    "barcode": "8901526401030",
    "hsnCode": "330590",
    "shortDescription": "Shea butter formula preventing frizz and split ends.",
    "description": "Authentic Matrix Opti.Care Smooth Straight Conditioner (198g) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 385,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 248,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&prod=sp-30",
        "altText": "Matrix Opti.Care Smooth Straight Conditioner (198g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-30",
        "sku": "MAT-OPTI-COND-198",
        "mrp": 450,
        "sellingPrice": 385,
        "stock": 170
      }
    ]
  },
  {
    "id": "sp-31",
    "name": "Wella Professionals Fusion Intense Repair Shampoo (250ml)",
    "slug": "wella-professionals-fusion-intense-repair-shampoo",
    "brand": "Wella Professionals",
    "category": "Salon Professional Products",
    "sku": "WEL-FUSION-SHAMP-250",
    "barcode": "8901526401031",
    "hsnCode": "330590",
    "shortDescription": "Inspired by spider silk amino acids for up to 95% more resilience.",
    "description": "Authentic Wella Professionals Fusion Intense Repair Shampoo (250ml) distributed by Wella Professionals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1250,
    "sellingPrice": 1060,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 255,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512290900673-70020a7b54d7?w=800&q=80&prod=sp-31",
        "altText": "Wella Professionals Fusion Intense Repair Shampoo (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-31",
        "sku": "WEL-FUSION-SHAMP-250",
        "mrp": 1250,
        "sellingPrice": 1060,
        "stock": 25
      }
    ]
  },
  {
    "id": "sp-32",
    "name": "L'Or\u00e9al Professionnel Serie Expert Metal Detox Mask (250ml)",
    "slug": "lor\u00e9al-professionnel-serie-expert-metal-detox-mask",
    "brand": "L'Or\u00e9al Professionnel",
    "category": "Salon Professional Products",
    "sku": "LOR-METAL-DETOX-250",
    "barcode": "8901526401032",
    "hsnCode": "330590",
    "shortDescription": "Anti-metal protective mask preventing particle deposit after color or bleach.",
    "description": "Authentic L'Or\u00e9al Professionnel Serie Expert Metal Detox Mask (250ml) distributed by L'Or\u00e9al Professionnel. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1650,
    "sellingPrice": 1399,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 262,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&q=80&prod=sp-32",
        "altText": "L'Or\u00e9al Professionnel Serie Expert Metal Detox Mask (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-32",
        "sku": "LOR-METAL-DETOX-250",
        "mrp": 1650,
        "sellingPrice": 1399,
        "stock": 30
      }
    ]
  },
  {
    "id": "sp-33",
    "name": "Streax Professional Vitariche Care Smooth & Shine Masque (500g)",
    "slug": "streax-professional-vitariche-care-smooth-and-shine-masque",
    "brand": "Streax Professional",
    "category": "Salon Professional Products",
    "sku": "STR-VITARICHE-MASQUE-500",
    "barcode": "8901526401033",
    "hsnCode": "330590",
    "shortDescription": "Enriched with Macadamia Oil and Vitamin E for silky hair.",
    "description": "Authentic Streax Professional Vitariche Care Smooth & Shine Masque (500g) distributed by Streax Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 690,
    "sellingPrice": 580,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 269,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&prod=sp-33",
        "altText": "Streax Professional Vitariche Care Smooth & Shine Masque (500g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-33",
        "sku": "STR-VITARICHE-MASQUE-500",
        "mrp": 690,
        "sellingPrice": 580,
        "stock": 35
      }
    ]
  },
  {
    "id": "sp-34",
    "name": "Schwarzkopf Professional Bonacure Color Freeze pH 4.5 Shampoo (250ml)",
    "slug": "schwarzkopf-professional-bonacure-color-freeze-ph-shampoo",
    "brand": "Schwarzkopf Professional",
    "category": "Salon Professional Products",
    "sku": "SCH-COLOR-FREEZE-250",
    "barcode": "8901526401034",
    "hsnCode": "330590",
    "shortDescription": "Patented pH 4.5 balancer technology locking in color pigments.",
    "description": "Authentic Schwarzkopf Professional Bonacure Color Freeze pH 4.5 Shampoo (250ml) distributed by Schwarzkopf Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1050,
    "sellingPrice": 890,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 276,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa909?w=800&q=80&prod=sp-34",
        "altText": "Schwarzkopf Professional Bonacure Color Freeze pH 4.5 Shampoo (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-34",
        "sku": "SCH-COLOR-FREEZE-250",
        "mrp": 1050,
        "sellingPrice": 890,
        "stock": 40
      }
    ]
  },
  {
    "id": "sp-35",
    "name": "Matrix Sensoria Care Brazilian Nut Hair Spa Cream (500g)",
    "slug": "matrix-sensoria-care-brazilian-nut-hair-spa-cream",
    "brand": "Matrix Professional",
    "category": "Salon Professional Products",
    "sku": "MAT-SENSORIA-NUT-500",
    "barcode": "8901526401035",
    "hsnCode": "330590",
    "shortDescription": "Professional hair spa cream deeply conditioning dry brittle hair.",
    "description": "Authentic Matrix Sensoria Care Brazilian Nut Hair Spa Cream (500g) distributed by Matrix Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 600,
    "sellingPrice": 499,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 283,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4525?w=800&q=80&prod=sp-35",
        "altText": "Matrix Sensoria Care Brazilian Nut Hair Spa Cream (500g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sp-35",
        "sku": "MAT-SENSORIA-NUT-500",
        "mrp": 600,
        "sellingPrice": 499,
        "stock": 45
      }
    ]
  },
  {
    "id": "hc-1",
    "name": "Tresemm\u00e9 Keratin Smooth Shampoo with Argan Oil (1L)",
    "slug": "tresemm\u00e9-keratin-smooth-shampoo-with-argan-oil",
    "brand": "Tresemm\u00e9",
    "category": "Hair Care & Hair Color",
    "sku": "TRE-KERATIN-SHAMP-1L",
    "barcode": "8901526401036",
    "hsnCode": "330590",
    "shortDescription": "Salon-quality shampoo with low sulfate and pure argan oil.",
    "description": "Authentic Tresemm\u00e9 Keratin Smooth Shampoo with Argan Oil (1L) distributed by Tresemm\u00e9. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 999,
    "sellingPrice": 799,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 45,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80&prod=hc-1",
        "altText": "Tresemm\u00e9 Keratin Smooth Shampoo with Argan Oil (1L)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-1",
        "sku": "TRE-KERATIN-SHAMP-1L",
        "mrp": 999,
        "sellingPrice": 799,
        "stock": 25
      }
    ]
  },
  {
    "id": "hc-2",
    "name": "Mamaearth Onion Hair Fall Control Shampoo with Plant Keratin (250ml)",
    "slug": "mamaearth-onion-hair-fall-control-shampoo-with-plant-keratin",
    "brand": "Mamaearth",
    "category": "Hair Care & Hair Color",
    "sku": "MAM-ONION-SHAMP-250",
    "barcode": "8901526401037",
    "hsnCode": "330590",
    "shortDescription": "Natural toxin-free onion oil shampoo to reduce hair fall and boost growth.",
    "description": "Authentic Mamaearth Onion Hair Fall Control Shampoo with Plant Keratin (250ml) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 349,
    "sellingPrice": 299,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 52,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&prod=hc-2",
        "altText": "Mamaearth Onion Hair Fall Control Shampoo with Plant Keratin (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-2",
        "sku": "MAM-ONION-SHAMP-250",
        "mrp": 349,
        "sellingPrice": 299,
        "stock": 30
      }
    ]
  },
  {
    "id": "hc-3",
    "name": "BBlunt Intense Moisture Hair Mask for Dry Hair (200g)",
    "slug": "bblunt-intense-moisture-hair-mask-for-dry-hair",
    "brand": "BBlunt",
    "category": "Hair Care & Hair Color",
    "sku": "BBL-INTENSE-MASK-200",
    "barcode": "8901526401038",
    "hsnCode": "330590",
    "shortDescription": "Jojoba and Vitamin E enriched moisture lock mask for Indian hair.",
    "description": "Authentic BBlunt Intense Moisture Hair Mask for Dry Hair (200g) distributed by BBlunt. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 600,
    "sellingPrice": 510,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 59,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80&prod=hc-3",
        "altText": "BBlunt Intense Moisture Hair Mask for Dry Hair (200g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-3",
        "sku": "BBL-INTENSE-MASK-200",
        "mrp": 600,
        "sellingPrice": 510,
        "stock": 35
      }
    ]
  },
  {
    "id": "hc-4",
    "name": "Garnier Fructis Long & Strong Hair Serum (100ml)",
    "slug": "garnier-fructis-long-and-strong-hair-serum",
    "brand": "Garnier",
    "category": "Hair Care & Hair Color",
    "sku": "GAR-FRUCTIS-SERUM-100",
    "barcode": "8901526401039",
    "hsnCode": "330590",
    "shortDescription": "Fruit vitamins enriched smoothing serum preventing split ends.",
    "description": "Authentic Garnier Fructis Long & Strong Hair Serum (100ml) distributed by Garnier. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 325,
    "sellingPrice": 275,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 66,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&prod=hc-4",
        "altText": "Garnier Fructis Long & Strong Hair Serum (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-4",
        "sku": "GAR-FRUCTIS-SERUM-100",
        "mrp": 325,
        "sellingPrice": 275,
        "stock": 40
      }
    ]
  },
  {
    "id": "hc-5",
    "name": "WOW Skin Science Apple Cider Vinegar Shampoo (300ml)",
    "slug": "wow-skin-science-apple-cider-vinegar-shampoo",
    "brand": "WOW Skin Science",
    "category": "Hair Care & Hair Color",
    "sku": "WOW-ACV-SHAMP-300",
    "barcode": "8901526401040",
    "hsnCode": "330590",
    "shortDescription": "Raw apple cider vinegar shampoo restoring scalp pH and removing buildup.",
    "description": "Authentic WOW Skin Science Apple Cider Vinegar Shampoo (300ml) distributed by WOW Skin Science. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 399,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 73,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=800&q=80&prod=hc-5",
        "altText": "WOW Skin Science Apple Cider Vinegar Shampoo (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-5",
        "sku": "WOW-ACV-SHAMP-300",
        "mrp": 499,
        "sellingPrice": 399,
        "stock": 45
      }
    ]
  },
  {
    "id": "hc-6",
    "name": "Dove Intense Repair Conditioner for Damaged Hair (175ml)",
    "slug": "dove-intense-repair-conditioner-for-damaged-hair",
    "brand": "Dove",
    "category": "Hair Care & Hair Color",
    "sku": "DOV-INTENSE-COND-175",
    "barcode": "8901526401041",
    "hsnCode": "330590",
    "shortDescription": "Keraplex nourishing technology repairing signs of hair damage.",
    "description": "Authentic Dove Intense Repair Conditioner for Damaged Hair (175ml) distributed by Dove. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 240,
    "sellingPrice": 199,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 80,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&q=80&prod=hc-6",
        "altText": "Dove Intense Repair Conditioner for Damaged Hair (175ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-6",
        "sku": "DOV-INTENSE-COND-175",
        "mrp": 240,
        "sellingPrice": 199,
        "stock": 50
      }
    ]
  },
  {
    "id": "hc-7",
    "name": "Pilgrim Argan Oil Anti-Frizz Hair Serum (50ml)",
    "slug": "pilgrim-argan-oil-anti-frizz-hair-serum",
    "brand": "Pilgrim",
    "category": "Hair Care & Hair Color",
    "sku": "PIL-ARGAN-SERUM-50",
    "barcode": "8901526401042",
    "hsnCode": "330590",
    "shortDescription": "Korean beauty secret formula with Argan Oil and Camellia.",
    "description": "Authentic Pilgrim Argan Oil Anti-Frizz Hair Serum (50ml) distributed by Pilgrim. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 400,
    "sellingPrice": 340,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 87,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80&prod=hc-7",
        "altText": "Pilgrim Argan Oil Anti-Frizz Hair Serum (50ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-7",
        "sku": "PIL-ARGAN-SERUM-50",
        "mrp": 400,
        "sellingPrice": 340,
        "stock": 55
      }
    ]
  },
  {
    "id": "hc-8",
    "name": "Biotique Bio Kelp Protein Hair Growth Conditioning Shampoo (340ml)",
    "slug": "biotique-bio-kelp-protein-hair-growth-conditioning-shampoo",
    "brand": "Biotique",
    "category": "Hair Care & Hair Color",
    "sku": "BIO-KELP-SHAMP-340",
    "barcode": "8901526401043",
    "hsnCode": "330590",
    "shortDescription": "Ayurvedic kelp and peppermint oil blend stimulating hair growth.",
    "description": "Authentic Biotique Bio Kelp Protein Hair Growth Conditioning Shampoo (340ml) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 239,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 94,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80&prod=hc-8",
        "altText": "Biotique Bio Kelp Protein Hair Growth Conditioning Shampoo (340ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-8",
        "sku": "BIO-KELP-SHAMP-340",
        "mrp": 299,
        "sellingPrice": 239,
        "stock": 60
      }
    ]
  },
  {
    "id": "hc-9",
    "name": "L'Or\u00e9al Paris Casting Cr\u00e8me Gloss Hair Color - Dark Brown 400",
    "slug": "lor\u00e9al-paris-casting-cr\u00e8me-gloss-hair-color---dark-brown-400",
    "brand": "L'Or\u00e9al",
    "category": "Hair Care & Hair Color",
    "sku": "LOR-CASTING-400",
    "barcode": "8901526401044",
    "hsnCode": "330590",
    "shortDescription": "No ammonia glossy shine hair color lasting up to 28 washes.",
    "description": "Authentic L'Or\u00e9al Paris Casting Cr\u00e8me Gloss Hair Color - Dark Brown 400 distributed by L'Or\u00e9al. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 650,
    "sellingPrice": 549,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 101,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&prod=hc-9",
        "altText": "L'Or\u00e9al Paris Casting Cr\u00e8me Gloss Hair Color - Dark Brown 400",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-9",
        "sku": "LOR-CASTING-400",
        "mrp": 650,
        "sellingPrice": 549,
        "stock": 65
      }
    ]
  },
  {
    "id": "hc-10",
    "name": "Garnier Color Naturals Cr\u00e8me Hair Color - Natural Black 1",
    "slug": "garnier-color-naturals-cr\u00e8me-hair-color---natural-black-1",
    "brand": "Garnier",
    "category": "Hair Care & Hair Color",
    "sku": "GAR-COLOR-NAT-1",
    "barcode": "8901526401045",
    "hsnCode": "330590",
    "shortDescription": "Enriched with 3 essential oils (Olive, Almond, Avocado) for 100% grey coverage.",
    "description": "Authentic Garnier Color Naturals Cr\u00e8me Hair Color - Natural Black 1 distributed by Garnier. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 219,
    "sellingPrice": 185,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 108,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&prod=hc-10",
        "altText": "Garnier Color Naturals Cr\u00e8me Hair Color - Natural Black 1",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-10",
        "sku": "GAR-COLOR-NAT-1",
        "mrp": 219,
        "sellingPrice": 185,
        "stock": 70
      }
    ]
  },
  {
    "id": "hc-11",
    "name": "Tresemm\u00e9 Keratin Smooth Hair Serum with Argan Oil (100ml)",
    "slug": "tresemm\u00e9-keratin-smooth-hair-serum-with-argan-oil",
    "brand": "Tresemm\u00e9",
    "category": "Hair Care & Hair Color",
    "sku": "TRE-KERATIN-SERUM-100",
    "barcode": "8901526401046",
    "hsnCode": "330590",
    "shortDescription": "Lightweight serum delivering vibrant shine and taming flyaways.",
    "description": "Authentic Tresemm\u00e9 Keratin Smooth Hair Serum with Argan Oil (100ml) distributed by Tresemm\u00e9. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 375,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 115,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80&prod=hc-11",
        "altText": "Tresemm\u00e9 Keratin Smooth Hair Serum with Argan Oil (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-11",
        "sku": "TRE-KERATIN-SERUM-100",
        "mrp": 450,
        "sellingPrice": 375,
        "stock": 75
      }
    ]
  },
  {
    "id": "hc-12",
    "name": "Mamaearth Rosemary Anti-Hair Fall Hair Oil (150ml)",
    "slug": "mamaearth-rosemary-anti-hair-fall-hair-oil",
    "brand": "Mamaearth",
    "category": "Hair Care & Hair Color",
    "sku": "MAM-ROSEMARY-OIL-150",
    "barcode": "8901526401047",
    "hsnCode": "330590",
    "shortDescription": "Rosemary and Methi enriched root stimulating hair oil.",
    "description": "Authentic Mamaearth Rosemary Anti-Hair Fall Hair Oil (150ml) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 419,
    "sellingPrice": 355,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 122,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80&prod=hc-12",
        "altText": "Mamaearth Rosemary Anti-Hair Fall Hair Oil (150ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-12",
        "sku": "MAM-ROSEMARY-OIL-150",
        "mrp": 419,
        "sellingPrice": 355,
        "stock": 80
      }
    ]
  },
  {
    "id": "hc-13",
    "name": "BBlunt Hot Shot Heat Protection Hair Mist (150ml)",
    "slug": "bblunt-hot-shot-heat-protection-hair-mist",
    "brand": "BBlunt",
    "category": "Hair Care & Hair Color",
    "sku": "BBL-HEAT-MIST-150",
    "barcode": "8901526401048",
    "hsnCode": "330590",
    "shortDescription": "Weightless heat shield mist protecting hair from blow dry heat up to 230C.",
    "description": "Authentic BBlunt Hot Shot Heat Protection Hair Mist (150ml) distributed by BBlunt. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 465,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 129,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&prod=hc-13",
        "altText": "BBlunt Hot Shot Heat Protection Hair Mist (150ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-13",
        "sku": "BBL-HEAT-MIST-150",
        "mrp": 550,
        "sellingPrice": 465,
        "stock": 85
      }
    ]
  },
  {
    "id": "hc-14",
    "name": "WOW Skin Science Red Onion Black Seed Oil Hair Mask (200ml)",
    "slug": "wow-skin-science-red-onion-black-seed-oil-hair-mask",
    "brand": "WOW Skin Science",
    "category": "Hair Care & Hair Color",
    "sku": "WOW-ONION-MASK-200",
    "barcode": "8901526401049",
    "hsnCode": "330590",
    "shortDescription": "Black seed oil and wheat protein restoring shine and scalp health.",
    "description": "Authentic WOW Skin Science Red Onion Black Seed Oil Hair Mask (200ml) distributed by WOW Skin Science. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 479,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 136,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&prod=hc-14",
        "altText": "WOW Skin Science Red Onion Black Seed Oil Hair Mask (200ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-14",
        "sku": "WOW-ONION-MASK-200",
        "mrp": 599,
        "sellingPrice": 479,
        "stock": 90
      }
    ]
  },
  {
    "id": "hc-15",
    "name": "Dove Hair Fall Rescue Shampoo (650ml)",
    "slug": "dove-hair-fall-rescue-shampoo",
    "brand": "Dove",
    "category": "Hair Care & Hair Color",
    "sku": "DOV-HAIRFALL-SHAMP-650",
    "barcode": "8901526401050",
    "hsnCode": "330590",
    "shortDescription": "Nutrilock actives deeply nourishing hair from roots to tips.",
    "description": "Authentic Dove Hair Fall Rescue Shampoo (650ml) distributed by Dove. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 650,
    "sellingPrice": 520,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 143,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&prod=hc-15",
        "altText": "Dove Hair Fall Rescue Shampoo (650ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-15",
        "sku": "DOV-HAIRFALL-SHAMP-650",
        "mrp": 650,
        "sellingPrice": 520,
        "stock": 95
      }
    ]
  },
  {
    "id": "hc-16",
    "name": "Pilgrim Patu\u00e0 & Keratin Smooth Anti-Frizz Conditioner (200ml)",
    "slug": "pilgrim-patu\u00e0-and-keratin-smooth-anti-frizz-conditioner",
    "brand": "Pilgrim",
    "category": "Hair Care & Hair Color",
    "sku": "PIL-PATUA-COND-200",
    "barcode": "8901526401051",
    "hsnCode": "330590",
    "shortDescription": "Amazonian Patua oil smoothing rough cuticles and softening hair.",
    "description": "Authentic Pilgrim Patu\u00e0 & Keratin Smooth Anti-Frizz Conditioner (200ml) distributed by Pilgrim. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 380,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 150,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&prod=hc-16",
        "altText": "Pilgrim Patu\u00e0 & Keratin Smooth Anti-Frizz Conditioner (200ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-16",
        "sku": "PIL-PATUA-COND-200",
        "mrp": 450,
        "sellingPrice": 380,
        "stock": 100
      }
    ]
  },
  {
    "id": "hc-17",
    "name": "Biotique Bio Bhringraj Therapeutic Hair Oil (200ml)",
    "slug": "biotique-bio-bhringraj-therapeutic-hair-oil",
    "brand": "Biotique",
    "category": "Hair Care & Hair Color",
    "sku": "BIO-BHRING-OIL-200",
    "barcode": "8901526401052",
    "hsnCode": "330590",
    "shortDescription": "Pure bhringraj and amla therapeutic oil preventing premature greying.",
    "description": "Authentic Biotique Bio Bhringraj Therapeutic Hair Oil (200ml) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 220,
    "sellingPrice": 175,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 157,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80&prod=hc-17",
        "altText": "Biotique Bio Bhringraj Therapeutic Hair Oil (200ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-17",
        "sku": "BIO-BHRING-OIL-200",
        "mrp": 220,
        "sellingPrice": 175,
        "stock": 105
      }
    ]
  },
  {
    "id": "hc-18",
    "name": "L'Or\u00e9al Paris Extraordinary Oil Hair Serum for Dry Hair (100ml)",
    "slug": "lor\u00e9al-paris-extraordinary-oil-hair-serum-for-dry-hair",
    "brand": "L'Or\u00e9al",
    "category": "Hair Care & Hair Color",
    "sku": "LOR-EXTRA-OIL-100",
    "barcode": "8901526401053",
    "hsnCode": "330590",
    "shortDescription": "Blend of 6 rare flower oils delivering deep nourishment and mirror shine.",
    "description": "Authentic L'Or\u00e9al Paris Extraordinary Oil Hair Serum for Dry Hair (100ml) distributed by L'Or\u00e9al. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 649,
    "sellingPrice": 549,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 164,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228722-d119f01b7642?w=800&q=80&prod=hc-18",
        "altText": "L'Or\u00e9al Paris Extraordinary Oil Hair Serum for Dry Hair (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-18",
        "sku": "LOR-EXTRA-OIL-100",
        "mrp": 649,
        "sellingPrice": 549,
        "stock": 110
      }
    ]
  },
  {
    "id": "hc-19",
    "name": "Garnier Fructis Damage Eraser Hair Mask (300ml)",
    "slug": "garnier-fructis-damage-eraser-hair-mask",
    "brand": "Garnier",
    "category": "Hair Care & Hair Color",
    "sku": "GAR-DAMAGE-ERASER-300",
    "barcode": "8901526401054",
    "hsnCode": "330590",
    "shortDescription": "Phyto-keratin complex rebuilding damaged hair fibers.",
    "description": "Authentic Garnier Fructis Damage Eraser Hair Mask (300ml) distributed by Garnier. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 415,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 171,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80&prod=hc-19",
        "altText": "Garnier Fructis Damage Eraser Hair Mask (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-19",
        "sku": "GAR-DAMAGE-ERASER-300",
        "mrp": 499,
        "sellingPrice": 415,
        "stock": 115
      }
    ]
  },
  {
    "id": "hc-20",
    "name": "Tresemm\u00e9 Botanical Nourish & Replenish Shampoo (580ml)",
    "slug": "tresemm\u00e9-botanical-nourish-and-replenish-shampoo",
    "brand": "Tresemm\u00e9",
    "category": "Hair Care & Hair Color",
    "sku": "TRE-BOTANICAL-SHAMP-580",
    "barcode": "8901526401055",
    "hsnCode": "330590",
    "shortDescription": "Coconut milk and aloe vera blend with zero parabens or dyes.",
    "description": "Authentic Tresemm\u00e9 Botanical Nourish & Replenish Shampoo (580ml) distributed by Tresemm\u00e9. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 525,
    "sellingPrice": 420,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 178,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&prod=hc-20",
        "altText": "Tresemm\u00e9 Botanical Nourish & Replenish Shampoo (580ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-20",
        "sku": "TRE-BOTANICAL-SHAMP-580",
        "mrp": 525,
        "sellingPrice": 420,
        "stock": 120
      }
    ]
  },
  {
    "id": "hc-21",
    "name": "Mamaearth Rice Water Hair Mask for Damage Repair (200g)",
    "slug": "mamaearth-rice-water-hair-mask-for-damage-repair",
    "brand": "Mamaearth",
    "category": "Hair Care & Hair Color",
    "sku": "MAM-RICE-MASK-200",
    "barcode": "8901526401056",
    "hsnCode": "330590",
    "shortDescription": "Fermented rice water and keratin repairing damaged hair shafts.",
    "description": "Authentic Mamaearth Rice Water Hair Mask for Damage Repair (200g) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 509,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 185,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&prod=hc-21",
        "altText": "Mamaearth Rice Water Hair Mask for Damage Repair (200g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-21",
        "sku": "MAM-RICE-MASK-200",
        "mrp": 599,
        "sellingPrice": 509,
        "stock": 125
      }
    ]
  },
  {
    "id": "hc-22",
    "name": "BBlunt Repair Remedy Shampoo for Chemically Treated Hair (250ml)",
    "slug": "bblunt-repair-remedy-shampoo-for-chemically-treated-hair",
    "brand": "BBlunt",
    "category": "Hair Care & Hair Color",
    "sku": "BBL-REPAIR-SHAMP-250",
    "barcode": "8901526401057",
    "hsnCode": "330590",
    "shortDescription": "Keratin and Argan oil formula protecting chemically treated hair.",
    "description": "Authentic BBlunt Repair Remedy Shampoo for Chemically Treated Hair (250ml) distributed by BBlunt. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 400,
    "sellingPrice": 340,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 192,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583241799080-877797746ebc?w=800&q=80&prod=hc-22",
        "altText": "BBlunt Repair Remedy Shampoo for Chemically Treated Hair (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-22",
        "sku": "BBL-REPAIR-SHAMP-250",
        "mrp": 400,
        "sellingPrice": 340,
        "stock": 130
      }
    ]
  },
  {
    "id": "hc-23",
    "name": "WOW Skin Science Moroccan Argan Oil Hair Conditioner (300ml)",
    "slug": "wow-skin-science-moroccan-argan-oil-hair-conditioner",
    "brand": "WOW Skin Science",
    "category": "Hair Care & Hair Color",
    "sku": "WOW-ARGAN-COND-300",
    "barcode": "8901526401058",
    "hsnCode": "330590",
    "shortDescription": "Pure Moroccan argan oil restoring softness and silkiness.",
    "description": "Authentic WOW Skin Science Moroccan Argan Oil Hair Conditioner (300ml) distributed by WOW Skin Science. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 399,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 199,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&prod=hc-23",
        "altText": "WOW Skin Science Moroccan Argan Oil Hair Conditioner (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-23",
        "sku": "WOW-ARGAN-COND-300",
        "mrp": 499,
        "sellingPrice": 399,
        "stock": 135
      }
    ]
  },
  {
    "id": "hc-24",
    "name": "Dove Daily Shine Shampoo (1L)",
    "slug": "dove-daily-shine-shampoo",
    "brand": "Dove",
    "category": "Hair Care & Hair Color",
    "sku": "DOV-DAILY-SHINE-1L",
    "barcode": "8901526401059",
    "hsnCode": "330590",
    "shortDescription": "Micro moisture serum forming a protective shield around hair fibers.",
    "description": "Authentic Dove Daily Shine Shampoo (1L) distributed by Dove. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 999,
    "sellingPrice": 799,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 206,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&prod=hc-24",
        "altText": "Dove Daily Shine Shampoo (1L)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-24",
        "sku": "DOV-DAILY-SHINE-1L",
        "mrp": 999,
        "sellingPrice": 799,
        "stock": 140
      }
    ]
  },
  {
    "id": "hc-25",
    "name": "Pilgrim Spanish Rosemary & Biotin Hair Growth Serum (50ml)",
    "slug": "pilgrim-spanish-rosemary-and-biotin-hair-growth-serum",
    "brand": "Pilgrim",
    "category": "Hair Care & Hair Color",
    "sku": "PIL-ROSEMARY-SERUM-50",
    "barcode": "8901526401060",
    "hsnCode": "330590",
    "shortDescription": "Biotin infused Spanish rosemary root strengthening spray.",
    "description": "Authentic Pilgrim Spanish Rosemary & Biotin Hair Growth Serum (50ml) distributed by Pilgrim. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 465,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 213,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&prod=hc-25",
        "altText": "Pilgrim Spanish Rosemary & Biotin Hair Growth Serum (50ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-25",
        "sku": "PIL-ROSEMARY-SERUM-50",
        "mrp": 550,
        "sellingPrice": 465,
        "stock": 145
      }
    ]
  },
  {
    "id": "hc-26",
    "name": "Biotique Bio Walnut Bark Body Building Shampoo (340ml)",
    "slug": "biotique-bio-walnut-bark-body-building-shampoo",
    "brand": "Biotique",
    "category": "Hair Care & Hair Color",
    "sku": "BIO-WALNUT-SHAMP-340",
    "barcode": "8901526401061",
    "hsnCode": "330590",
    "shortDescription": "Walnut bark and musk root adding body and volume to fine hair.",
    "description": "Authentic Biotique Bio Walnut Bark Body Building Shampoo (340ml) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 239,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 220,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&prod=hc-26",
        "altText": "Biotique Bio Walnut Bark Body Building Shampoo (340ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-26",
        "sku": "BIO-WALNUT-SHAMP-340",
        "mrp": 299,
        "sellingPrice": 239,
        "stock": 150
      }
    ]
  },
  {
    "id": "hc-27",
    "name": "L'Or\u00e9al Paris Excellence Cr\u00e8me Hair Color - Dark Brown 3",
    "slug": "lor\u00e9al-paris-excellence-cr\u00e8me-hair-color---dark-brown-3",
    "brand": "L'Or\u00e9al",
    "category": "Hair Care & Hair Color",
    "sku": "LOR-EXCELLENCE-3",
    "barcode": "8901526401062",
    "hsnCode": "330590",
    "shortDescription": "Triple care color technology protecting hair before during and after coloring.",
    "description": "Authentic L'Or\u00e9al Paris Excellence Cr\u00e8me Hair Color - Dark Brown 3 distributed by L'Or\u00e9al. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 595,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 227,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337094846-8a8385875974?w=800&q=80&prod=hc-27",
        "altText": "L'Or\u00e9al Paris Excellence Cr\u00e8me Hair Color - Dark Brown 3",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-27",
        "sku": "LOR-EXCELLENCE-3",
        "mrp": 699,
        "sellingPrice": 595,
        "stock": 155
      }
    ]
  },
  {
    "id": "hc-28",
    "name": "Garnier Color Naturals Herbal Hair Color Sachet - Black 1",
    "slug": "garnier-color-naturals-herbal-hair-color-sachet---black-1",
    "brand": "Garnier",
    "category": "Hair Care & Hair Color",
    "sku": "GAR-COLOR-SACHET-1",
    "barcode": "8901526401063",
    "hsnCode": "330590",
    "shortDescription": "Single application rich cream color with almond oil nourishment.",
    "description": "Authentic Garnier Color Naturals Herbal Hair Color Sachet - Black 1 distributed by Garnier. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 49,
    "sellingPrice": 42,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 234,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&prod=hc-28",
        "altText": "Garnier Color Naturals Herbal Hair Color Sachet - Black 1",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-28",
        "sku": "GAR-COLOR-SACHET-1",
        "mrp": 49,
        "sellingPrice": 42,
        "stock": 160
      }
    ]
  },
  {
    "id": "hc-29",
    "name": "Tresemm\u00e9 Smooth & Shine Hair Conditioner (190ml)",
    "slug": "tresemm\u00e9-smooth-and-shine-hair-conditioner",
    "brand": "Tresemm\u00e9",
    "category": "Hair Care & Hair Color",
    "sku": "TRE-SMOOTH-COND-190",
    "barcode": "8901526401064",
    "hsnCode": "330590",
    "shortDescription": "Vitamin H and silk protein delivering intense salon shine.",
    "description": "Authentic Tresemm\u00e9 Smooth & Shine Hair Conditioner (190ml) distributed by Tresemm\u00e9. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 240,
    "sellingPrice": 199,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 241,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337651144-8d48a1267860?w=800&q=80&prod=hc-29",
        "altText": "Tresemm\u00e9 Smooth & Shine Hair Conditioner (190ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-29",
        "sku": "TRE-SMOOTH-COND-190",
        "mrp": 240,
        "sellingPrice": 199,
        "stock": 165
      }
    ]
  },
  {
    "id": "hc-30",
    "name": "Mamaearth Henna Paste Hair Color for Natural Grey Coverage (200g)",
    "slug": "mamaearth-henna-paste-hair-color-for-natural-grey-coverage",
    "brand": "Mamaearth",
    "category": "Hair Care & Hair Color",
    "sku": "MAM-HENNA-PASTE-200",
    "barcode": "8901526401065",
    "hsnCode": "330590",
    "shortDescription": "Ready to use natural henna paste infused with indigo and coffee.",
    "description": "Authentic Mamaearth Henna Paste Hair Color for Natural Grey Coverage (200g) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 249,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 248,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&prod=hc-30",
        "altText": "Mamaearth Henna Paste Hair Color for Natural Grey Coverage (200g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-30",
        "sku": "MAM-HENNA-PASTE-200",
        "mrp": 299,
        "sellingPrice": 249,
        "stock": 170
      }
    ]
  },
  {
    "id": "hc-31",
    "name": "BBlunt Dry Shampoo Spring Fling Refresh Spray (125ml)",
    "slug": "bblunt-dry-shampoo-spring-fling-refresh-spray",
    "brand": "BBlunt",
    "category": "Hair Care & Hair Color",
    "sku": "BBL-DRY-SHAMP-125",
    "barcode": "8901526401066",
    "hsnCode": "330590",
    "shortDescription": "Instant oil absorbing spray adding volume and fresh fragrance without water.",
    "description": "Authentic BBlunt Dry Shampoo Spring Fling Refresh Spray (125ml) distributed by BBlunt. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 465,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 255,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512290900673-70020a7b54d7?w=800&q=80&prod=hc-31",
        "altText": "BBlunt Dry Shampoo Spring Fling Refresh Spray (125ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-31",
        "sku": "BBL-DRY-SHAMP-125",
        "mrp": 550,
        "sellingPrice": 465,
        "stock": 25
      }
    ]
  },
  {
    "id": "hc-32",
    "name": "WOW Skin Science Coconut Milk Hair Conditioner (300ml)",
    "slug": "wow-skin-science-coconut-milk-hair-conditioner",
    "brand": "WOW Skin Science",
    "category": "Hair Care & Hair Color",
    "sku": "WOW-COCONUT-COND-300",
    "barcode": "8901526401067",
    "hsnCode": "330590",
    "shortDescription": "Coconut milk extract restoring moisture and softening tangles.",
    "description": "Authentic WOW Skin Science Coconut Milk Hair Conditioner (300ml) distributed by WOW Skin Science. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 399,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 262,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&q=80&prod=hc-32",
        "altText": "WOW Skin Science Coconut Milk Hair Conditioner (300ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-32",
        "sku": "WOW-COCONUT-COND-300",
        "mrp": 499,
        "sellingPrice": 399,
        "stock": 30
      }
    ]
  },
  {
    "id": "hc-33",
    "name": "Dove Oxygen Moisture Shampoo for Fine Flat Hair (240ml)",
    "slug": "dove-oxygen-moisture-shampoo-for-fine-flat-hair",
    "brand": "Dove",
    "category": "Hair Care & Hair Color",
    "sku": "DOV-OXYGEN-SHAMP-240",
    "barcode": "8901526401068",
    "hsnCode": "330590",
    "shortDescription": "Oxyfusion technology restoring up to 95% more volume.",
    "description": "Authentic Dove Oxygen Moisture Shampoo for Fine Flat Hair (240ml) distributed by Dove. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 249,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 269,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&prod=hc-33",
        "altText": "Dove Oxygen Moisture Shampoo for Fine Flat Hair (240ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-33",
        "sku": "DOV-OXYGEN-SHAMP-240",
        "mrp": 299,
        "sellingPrice": 249,
        "stock": 35
      }
    ]
  },
  {
    "id": "hc-34",
    "name": "Pilgrim Clover & Lotus Scalp Detox Scrub (100g)",
    "slug": "pilgrim-clover-and-lotus-scalp-detox-scrub",
    "brand": "Pilgrim",
    "category": "Hair Care & Hair Color",
    "sku": "PIL-DETOX-SCRUB-100",
    "barcode": "8901526401069",
    "hsnCode": "330590",
    "shortDescription": "Exfoliating scalp scrub removing buildup and flakiness.",
    "description": "Authentic Pilgrim Clover & Lotus Scalp Detox Scrub (100g) distributed by Pilgrim. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 380,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 276,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa909?w=800&q=80&prod=hc-34",
        "altText": "Pilgrim Clover & Lotus Scalp Detox Scrub (100g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-34",
        "sku": "PIL-DETOX-SCRUB-100",
        "mrp": 450,
        "sellingPrice": 380,
        "stock": 40
      }
    ]
  },
  {
    "id": "hc-35",
    "name": "Biotique Bio Mountain Ebony Vitalizing Hair Serum (120ml)",
    "slug": "biotique-bio-mountain-ebony-vitalizing-hair-serum",
    "brand": "Biotique",
    "category": "Hair Care & Hair Color",
    "sku": "BIO-EBONY-SERUM-120",
    "barcode": "8901526401070",
    "hsnCode": "330590",
    "shortDescription": "Pure mountain ebony extract stimulating root growth and scalp vigor.",
    "description": "Authentic Biotique Bio Mountain Ebony Vitalizing Hair Serum (120ml) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 195,
    "sellingPrice": 155,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 283,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4525?w=800&q=80&prod=hc-35",
        "altText": "Biotique Bio Mountain Ebony Vitalizing Hair Serum (120ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-hc-35",
        "sku": "BIO-EBONY-SERUM-120",
        "mrp": 195,
        "sellingPrice": 155,
        "stock": 45
      }
    ]
  },
  {
    "id": "sc-1",
    "name": "O3+ Professional Brightening Facial Kit for Radiant Glow",
    "slug": "o3plus-professional-brightening-facial-kit-for-radiant-glow",
    "brand": "O3+ Professional",
    "category": "Skin Care & Facial Kits",
    "sku": "O3-BRIGHT-FACIAL-KIT",
    "barcode": "8901526401071",
    "hsnCode": "330499",
    "shortDescription": "Dermatologist recommended 5-step bridal brightening facial kit.",
    "description": "Authentic O3+ Professional Brightening Facial Kit for Radiant Glow distributed by O3+ Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1450,
    "sellingPrice": 1290,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 45,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80&prod=sc-1",
        "altText": "O3+ Professional Brightening Facial Kit for Radiant Glow",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-1",
        "sku": "O3-BRIGHT-FACIAL-KIT",
        "mrp": 1450,
        "sellingPrice": 1290,
        "stock": 25
      }
    ]
  },
  {
    "id": "sc-2",
    "name": "Minimalist 10% Vitamin C Face Serum for Glowing Skin (30ml)",
    "slug": "minimalist-vitamin-c-face-serum-for-glowing-skin",
    "brand": "Minimalist",
    "category": "Skin Care & Facial Kits",
    "sku": "MIN-VITC-SERUM-30",
    "barcode": "8901526401072",
    "hsnCode": "330499",
    "shortDescription": "Pure Ethyl Ascorbic Acid serum with Centella Water for dark spots.",
    "description": "Authentic Minimalist 10% Vitamin C Face Serum for Glowing Skin (30ml) distributed by Minimalist. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 649,
    "discountPercent": 7,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 52,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&prod=sc-2",
        "altText": "Minimalist 10% Vitamin C Face Serum for Glowing Skin (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-2",
        "sku": "MIN-VITC-SERUM-30",
        "mrp": 699,
        "sellingPrice": 649,
        "stock": 30
      }
    ]
  },
  {
    "id": "sc-3",
    "name": "Dot & Key Cica Calming Niacinamide Night Gel Moisturizer (60ml)",
    "slug": "dot-and-key-cica-calming-niacinamide-night-gel-moisturizer",
    "brand": "Dot & Key Skincare",
    "category": "Skin Care & Facial Kits",
    "sku": "DOT-CICA-GEL-60",
    "barcode": "8901526401073",
    "hsnCode": "330499",
    "shortDescription": "Oil-free soothing night gel for acne-prone sensitive skin.",
    "description": "Authentic Dot & Key Cica Calming Niacinamide Night Gel Moisturizer (60ml) distributed by Dot & Key Skincare. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 595,
    "sellingPrice": 499,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 59,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80&prod=sc-3",
        "altText": "Dot & Key Cica Calming Niacinamide Night Gel Moisturizer (60ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-3",
        "sku": "DOT-CICA-GEL-60",
        "mrp": 595,
        "sellingPrice": 499,
        "stock": 35
      }
    ]
  },
  {
    "id": "sc-4",
    "name": "Cetaphil Gentle Skin Cleanser for All Skin Types (250ml)",
    "slug": "cetaphil-gentle-skin-cleanser-for-all-skin-types",
    "brand": "Cetaphil",
    "category": "Skin Care & Facial Kits",
    "sku": "CET-GENTLE-CLEAN-250",
    "barcode": "8901526401074",
    "hsnCode": "330499",
    "shortDescription": "Dermatologist recommended non-foaming hydrating face wash.",
    "description": "Authentic Cetaphil Gentle Skin Cleanser for All Skin Types (250ml) distributed by Cetaphil. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 633,
    "sellingPrice": 570,
    "discountPercent": 10,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 66,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&prod=sc-4",
        "altText": "Cetaphil Gentle Skin Cleanser for All Skin Types (250ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-4",
        "sku": "CET-GENTLE-CLEAN-250",
        "mrp": 633,
        "sellingPrice": 570,
        "stock": 40
      }
    ]
  },
  {
    "id": "sc-5",
    "name": "The Derma Co 1% Salicylic Acid Gel Face Wash (100ml)",
    "slug": "the-derma-co-salicylic-acid-gel-face-wash",
    "brand": "The Derma Co",
    "category": "Skin Care & Facial Kits",
    "sku": "DER-SALICYLIC-WASH-100",
    "barcode": "8901526401075",
    "hsnCode": "330499",
    "shortDescription": "Active BHA cleanser penetrating deep into pores to treat active acne.",
    "description": "Authentic The Derma Co 1% Salicylic Acid Gel Face Wash (100ml) distributed by The Derma Co. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 259,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 73,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=800&q=80&prod=sc-5",
        "altText": "The Derma Co 1% Salicylic Acid Gel Face Wash (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-5",
        "sku": "DER-SALICYLIC-WASH-100",
        "mrp": 299,
        "sellingPrice": 259,
        "stock": 45
      }
    ]
  },
  {
    "id": "sc-6",
    "name": "Neutrogena Hydro Boost Water Gel Moisturizer (50g)",
    "slug": "neutrogena-hydro-boost-water-gel-moisturizer",
    "brand": "Neutrogena",
    "category": "Skin Care & Facial Kits",
    "sku": "NEU-HYDRO-BOOST-50",
    "barcode": "8901526401076",
    "hsnCode": "330499",
    "shortDescription": "Hyaluronic acid gel formula delivering 72-hour continuous hydration.",
    "description": "Authentic Neutrogena Hydro Boost Water Gel Moisturizer (50g) distributed by Neutrogena. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1050,
    "sellingPrice": 895,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 80,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&q=80&prod=sc-6",
        "altText": "Neutrogena Hydro Boost Water Gel Moisturizer (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-6",
        "sku": "NEU-HYDRO-BOOST-50",
        "mrp": 1050,
        "sellingPrice": 895,
        "stock": 50
      }
    ]
  },
  {
    "id": "sc-7",
    "name": "Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50 (100g)",
    "slug": "lotus-herbals-safe-sun-uv-screen-matte-gel-spf-50",
    "brand": "Lotus Herbals",
    "category": "Skin Care & Facial Kits",
    "sku": "LOT-SAFESUN-SPF50-100",
    "barcode": "8901526401077",
    "hsnCode": "330499",
    "shortDescription": "Non-greasy oil-free matte sunscreen gel protecting against UVA and UVB rays.",
    "description": "Authentic Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50 (100g) distributed by Lotus Herbals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 455,
    "sellingPrice": 385,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 87,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80&prod=sc-7",
        "altText": "Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50 (100g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-7",
        "sku": "LOT-SAFESUN-SPF50-100",
        "mrp": 455,
        "sellingPrice": 385,
        "stock": 55
      }
    ]
  },
  {
    "id": "sc-8",
    "name": "Mamaearth Vitamin C Face Wash with Turmeric for Skin Illumination (100ml)",
    "slug": "mamaearth-vitamin-c-face-wash-with-turmeric-for-skin-illumination",
    "brand": "Mamaearth",
    "category": "Skin Care & Facial Kits",
    "sku": "MAM-VITC-WASH-100",
    "barcode": "8901526401078",
    "hsnCode": "330499",
    "shortDescription": "Natural Vitamin C and Turmeric face wash brightening dull skin tone.",
    "description": "Authentic Mamaearth Vitamin C Face Wash with Turmeric for Skin Illumination (100ml) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 259,
    "sellingPrice": 219,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 94,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80&prod=sc-8",
        "altText": "Mamaearth Vitamin C Face Wash with Turmeric for Skin Illumination (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-8",
        "sku": "MAM-VITC-WASH-100",
        "mrp": 259,
        "sellingPrice": 219,
        "stock": 60
      }
    ]
  },
  {
    "id": "sc-9",
    "name": "Foxtale Ceramide Supercream Moisturizer for Dry Skin (50g)",
    "slug": "foxtale-ceramide-supercream-moisturizer-for-dry-skin",
    "brand": "Foxtale",
    "category": "Skin Care & Facial Kits",
    "sku": "FOX-CERAMIDE-CREAM-50",
    "barcode": "8901526401079",
    "hsnCode": "330499",
    "shortDescription": "5 Essential ceramides repairing skin barrier and locking in moisture.",
    "description": "Authentic Foxtale Ceramide Supercream Moisturizer for Dry Skin (50g) distributed by Foxtale. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 445,
    "sellingPrice": 375,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 101,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&prod=sc-9",
        "altText": "Foxtale Ceramide Supercream Moisturizer for Dry Skin (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-9",
        "sku": "FOX-CERAMIDE-CREAM-50",
        "mrp": 445,
        "sellingPrice": 375,
        "stock": 65
      }
    ]
  },
  {
    "id": "sc-10",
    "name": "Biotique Bio Dandelion Visibly Ageless Serum (190ml)",
    "slug": "biotique-bio-dandelion-visibly-ageless-serum",
    "brand": "Biotique",
    "category": "Skin Care & Facial Kits",
    "sku": "BIO-DANDELION-SERUM-190",
    "barcode": "8901526401080",
    "hsnCode": "330499",
    "shortDescription": "Pure dandelion and nutmeg oil botanical anti-aging formula.",
    "description": "Authentic Biotique Bio Dandelion Visibly Ageless Serum (190ml) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 230,
    "sellingPrice": 185,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 108,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&prod=sc-10",
        "altText": "Biotique Bio Dandelion Visibly Ageless Serum (190ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-10",
        "sku": "BIO-DANDELION-SERUM-190",
        "mrp": 230,
        "sellingPrice": 185,
        "stock": 70
      }
    ]
  },
  {
    "id": "sc-11",
    "name": "O3+ D-TAN Pack for Instant Tan Removal (300g)",
    "slug": "o3plus-d-tan-pack-for-instant-tan-removal",
    "brand": "O3+ Professional",
    "category": "Skin Care & Facial Kits",
    "sku": "O3-DTAN-PACK-300",
    "barcode": "8901526401081",
    "hsnCode": "330499",
    "shortDescription": "Award winning mint and eucalyptus infused tan removal mask for face and body.",
    "description": "Authentic O3+ D-TAN Pack for Instant Tan Removal (300g) distributed by O3+ Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1550,
    "sellingPrice": 1350,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 115,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80&prod=sc-11",
        "altText": "O3+ D-TAN Pack for Instant Tan Removal (300g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-11",
        "sku": "O3-DTAN-PACK-300",
        "mrp": 1550,
        "sellingPrice": 1350,
        "stock": 75
      }
    ]
  },
  {
    "id": "sc-12",
    "name": "Minimalist 2% Salicylic Acid Face Serum for Acne & Blackheads (30ml)",
    "slug": "minimalist-salicylic-acid-face-serum-for-acne-and-blackheads",
    "brand": "Minimalist",
    "category": "Skin Care & Facial Kits",
    "sku": "MIN-SALICYLIC-SERUM-30",
    "barcode": "8901526401082",
    "hsnCode": "330499",
    "shortDescription": "Aloe water based BHA serum exfoliating inner pore walls.",
    "description": "Authentic Minimalist 2% Salicylic Acid Face Serum for Acne & Blackheads (30ml) distributed by Minimalist. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 549,
    "sellingPrice": 499,
    "discountPercent": 9,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 122,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80&prod=sc-12",
        "altText": "Minimalist 2% Salicylic Acid Face Serum for Acne & Blackheads (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-12",
        "sku": "MIN-SALICYLIC-SERUM-30",
        "mrp": 549,
        "sellingPrice": 499,
        "stock": 80
      }
    ]
  },
  {
    "id": "sc-13",
    "name": "Dot & Key Watermelon Cooling Sunscreen SPF 50 PA+++ (80g)",
    "slug": "dot-and-key-watermelon-cooling-sunscreen-spf-50-paplusplusplus",
    "brand": "Dot & Key Skincare",
    "category": "Skin Care & Facial Kits",
    "sku": "DOT-WATERMELON-SPF50-80",
    "barcode": "8901526401083",
    "hsnCode": "330499",
    "shortDescription": "Lightweight fluid sunscreen with cooling watermelon extracts and hyaluronic acid.",
    "description": "Authentic Dot & Key Watermelon Cooling Sunscreen SPF 50 PA+++ (80g) distributed by Dot & Key Skincare. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 495,
    "sellingPrice": 415,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 129,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&prod=sc-13",
        "altText": "Dot & Key Watermelon Cooling Sunscreen SPF 50 PA+++ (80g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-13",
        "sku": "DOT-WATERMELON-SPF50-80",
        "mrp": 495,
        "sellingPrice": 415,
        "stock": 85
      }
    ]
  },
  {
    "id": "sc-14",
    "name": "Cetaphil Daily Advance Ultra Hydrating Lotion (100ml)",
    "slug": "cetaphil-daily-advance-ultra-hydrating-lotion",
    "brand": "Cetaphil",
    "category": "Skin Care & Facial Kits",
    "sku": "CET-DAILY-ADV-100",
    "barcode": "8901526401084",
    "hsnCode": "330499",
    "shortDescription": "Epidermal replenishing complex deeply hydrating dry sensitive skin.",
    "description": "Authentic Cetaphil Daily Advance Ultra Hydrating Lotion (100ml) distributed by Cetaphil. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 485,
    "sellingPrice": 435,
    "discountPercent": 10,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 136,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&prod=sc-14",
        "altText": "Cetaphil Daily Advance Ultra Hydrating Lotion (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-14",
        "sku": "CET-DAILY-ADV-100",
        "mrp": 485,
        "sellingPrice": 435,
        "stock": 90
      }
    ]
  },
  {
    "id": "sc-15",
    "name": "The Derma Co 10% Niacinamide Face Serum for Acne Marks (30ml)",
    "slug": "the-derma-co-niacinamide-face-serum-for-acne-marks",
    "brand": "The Derma Co",
    "category": "Skin Care & Facial Kits",
    "sku": "DER-NIACINAMIDE-SERUM-30",
    "barcode": "8901526401085",
    "hsnCode": "330499",
    "shortDescription": "Niacinamide and Zinc formulation fading acne scars and refining skin texture.",
    "description": "Authentic The Derma Co 10% Niacinamide Face Serum for Acne Marks (30ml) distributed by The Derma Co. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 519,
    "discountPercent": 13,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 143,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&prod=sc-15",
        "altText": "The Derma Co 10% Niacinamide Face Serum for Acne Marks (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-15",
        "sku": "DER-NIACINAMIDE-SERUM-30",
        "mrp": 599,
        "sellingPrice": 519,
        "stock": 95
      }
    ]
  },
  {
    "id": "sc-16",
    "name": "Neutrogena Deep Clean Facial Cleanser (200ml)",
    "slug": "neutrogena-deep-clean-facial-cleanser",
    "brand": "Neutrogena",
    "category": "Skin Care & Facial Kits",
    "sku": "NEU-DEEPCLEAN-WASH-200",
    "barcode": "8901526401086",
    "hsnCode": "330499",
    "shortDescription": "Salicylic acid cleanser washing away 99% dirt and impurities.",
    "description": "Authentic Neutrogena Deep Clean Facial Cleanser (200ml) distributed by Neutrogena. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 475,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 150,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&prod=sc-16",
        "altText": "Neutrogena Deep Clean Facial Cleanser (200ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-16",
        "sku": "NEU-DEEPCLEAN-WASH-200",
        "mrp": 550,
        "sellingPrice": 475,
        "stock": 100
      }
    ]
  },
  {
    "id": "sc-17",
    "name": "Lotus Herbals WhiteGlow Skin Whitening Deep Cleansing Facial Foam (100g)",
    "slug": "lotus-herbals-whiteglow-skin-whitening-deep-cleansing-facial-foam",
    "brand": "Lotus Herbals",
    "category": "Skin Care & Facial Kits",
    "sku": "LOT-WHITEGLOW-FOAM-100",
    "barcode": "8901526401087",
    "hsnCode": "330499",
    "shortDescription": "Saxifraga and Grape extracts reducing dark melanin production.",
    "description": "Authentic Lotus Herbals WhiteGlow Skin Whitening Deep Cleansing Facial Foam (100g) distributed by Lotus Herbals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 275,
    "sellingPrice": 230,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 157,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80&prod=sc-17",
        "altText": "Lotus Herbals WhiteGlow Skin Whitening Deep Cleansing Facial Foam (100g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-17",
        "sku": "LOT-WHITEGLOW-FOAM-100",
        "mrp": 275,
        "sellingPrice": 230,
        "stock": 105
      }
    ]
  },
  {
    "id": "sc-18",
    "name": "Mamaearth Bye Bye Dark Circles Eye Cream with Cucumber & Peptides (20g)",
    "slug": "mamaearth-bye-bye-dark-circles-eye-cream-with-cucumber-and-peptides",
    "brand": "Mamaearth",
    "category": "Skin Care & Facial Kits",
    "sku": "MAM-EYE-CREAM-20",
    "barcode": "8901526401088",
    "hsnCode": "330499",
    "shortDescription": "Cucumber and Hawkweed extract fading dark circles and under eye bags.",
    "description": "Authentic Mamaearth Bye Bye Dark Circles Eye Cream with Cucumber & Peptides (20g) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 399,
    "sellingPrice": 339,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 164,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228722-d119f01b7642?w=800&q=80&prod=sc-18",
        "altText": "Mamaearth Bye Bye Dark Circles Eye Cream with Cucumber & Peptides (20g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-18",
        "sku": "MAM-EYE-CREAM-20",
        "mrp": 399,
        "sellingPrice": 339,
        "stock": 110
      }
    ]
  },
  {
    "id": "sc-19",
    "name": "Foxtale Vitamin C Brightening Serum with L-Ascorbic Acid (30ml)",
    "slug": "foxtale-vitamin-c-brightening-serum-with-l-ascorbic-acid",
    "brand": "Foxtale",
    "category": "Skin Care & Facial Kits",
    "sku": "FOX-VITC-SERUM-30",
    "barcode": "8901526401089",
    "hsnCode": "330499",
    "shortDescription": "15% L-Ascorbic Acid + 1% Vitamin E formula for radiant glass skin.",
    "description": "Authentic Foxtale Vitamin C Brightening Serum with L-Ascorbic Acid (30ml) distributed by Foxtale. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 595,
    "sellingPrice": 499,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 171,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80&prod=sc-19",
        "altText": "Foxtale Vitamin C Brightening Serum with L-Ascorbic Acid (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-19",
        "sku": "FOX-VITC-SERUM-30",
        "mrp": 595,
        "sellingPrice": 499,
        "stock": 115
      }
    ]
  },
  {
    "id": "sc-20",
    "name": "Biotique Bio Papaya Revitalizing Tan Removal Scrub (100g)",
    "slug": "biotique-bio-papaya-revitalizing-tan-removal-scrub",
    "brand": "Biotique",
    "category": "Skin Care & Facial Kits",
    "sku": "BIO-PAPAYA-SCRUB-100",
    "barcode": "8901526401090",
    "hsnCode": "330499",
    "shortDescription": "Pure papaya fruit enzymes gently dissolving dead surface skin cells.",
    "description": "Authentic Biotique Bio Papaya Revitalizing Tan Removal Scrub (100g) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 199,
    "sellingPrice": 159,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 178,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&prod=sc-20",
        "altText": "Biotique Bio Papaya Revitalizing Tan Removal Scrub (100g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-20",
        "sku": "BIO-PAPAYA-SCRUB-100",
        "mrp": 199,
        "sellingPrice": 159,
        "stock": 120
      }
    ]
  },
  {
    "id": "sc-21",
    "name": "O3+ Seaweed Facial Kit for Acne & Oil Control",
    "slug": "o3plus-seaweed-facial-kit-for-acne-and-oil-control",
    "brand": "O3+ Professional",
    "category": "Skin Care & Facial Kits",
    "sku": "O3-SEAWEED-FACIAL-KIT",
    "barcode": "8901526401091",
    "hsnCode": "330499",
    "shortDescription": "Ocean minerals and seaweed pod kit purifying oily breakout prone skin.",
    "description": "Authentic O3+ Seaweed Facial Kit for Acne & Oil Control distributed by O3+ Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1350,
    "sellingPrice": 1190,
    "discountPercent": 12,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 185,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&prod=sc-21",
        "altText": "O3+ Seaweed Facial Kit for Acne & Oil Control",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-21",
        "sku": "O3-SEAWEED-FACIAL-KIT",
        "mrp": 1350,
        "sellingPrice": 1190,
        "stock": 125
      }
    ]
  },
  {
    "id": "sc-22",
    "name": "Minimalist 5% Niacinamide Serum with Hyaluronic Acid (30ml)",
    "slug": "minimalist-niacinamide-serum-with-hyaluronic-acid",
    "brand": "Minimalist",
    "category": "Skin Care & Facial Kits",
    "sku": "MIN-NIACIN-5-30",
    "barcode": "8901526401092",
    "hsnCode": "330499",
    "shortDescription": "Nourishing B3 serum improving barrier function and skin tone.",
    "description": "Authentic Minimalist 5% Niacinamide Serum with Hyaluronic Acid (30ml) distributed by Minimalist. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 549,
    "discountPercent": 8,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 192,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583241799080-877797746ebc?w=800&q=80&prod=sc-22",
        "altText": "Minimalist 5% Niacinamide Serum with Hyaluronic Acid (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-22",
        "sku": "MIN-NIACIN-5-30",
        "mrp": 599,
        "sellingPrice": 549,
        "stock": 130
      }
    ]
  },
  {
    "id": "sc-23",
    "name": "Dot & Key 10% Vitamin C + E Super Bright Face Serum (30ml)",
    "slug": "dot-and-key-vitamin-c-plus-e-super-bright-face-serum",
    "brand": "Dot & Key Skincare",
    "category": "Skin Care & Facial Kits",
    "sku": "DOT-VITC-SERUM-30",
    "barcode": "8901526401093",
    "hsnCode": "330499",
    "shortDescription": "Triple vitamin C formula fading hyperpigmentation and boosting collagen.",
    "description": "Authentic Dot & Key 10% Vitamin C + E Super Bright Face Serum (30ml) distributed by Dot & Key Skincare. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 665,
    "sellingPrice": 565,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 199,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&prod=sc-23",
        "altText": "Dot & Key 10% Vitamin C + E Super Bright Face Serum (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-23",
        "sku": "DOT-VITC-SERUM-30",
        "mrp": 665,
        "sellingPrice": 565,
        "stock": 135
      }
    ]
  },
  {
    "id": "sc-24",
    "name": "Cetaphil Oily Skin Cleanser for Acne-Prone Skin (125ml)",
    "slug": "cetaphil-oily-skin-cleanser-for-acne-prone-skin",
    "brand": "Cetaphil",
    "category": "Skin Care & Facial Kits",
    "sku": "CET-OILY-CLEAN-125",
    "barcode": "8901526401094",
    "hsnCode": "330499",
    "shortDescription": "Low foaming cleanser reducing excess sebum by up to 60%.",
    "description": "Authentic Cetaphil Oily Skin Cleanser for Acne-Prone Skin (125ml) distributed by Cetaphil. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 550,
    "sellingPrice": 490,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 206,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&prod=sc-24",
        "altText": "Cetaphil Oily Skin Cleanser for Acne-Prone Skin (125ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-24",
        "sku": "CET-OILY-CLEAN-125",
        "mrp": 550,
        "sellingPrice": 490,
        "stock": 140
      }
    ]
  },
  {
    "id": "sc-25",
    "name": "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ (50g)",
    "slug": "the-derma-co-hyaluronic-sunscreen-aqua-gel-spf-50-paplusplusplusplus",
    "brand": "The Derma Co",
    "category": "Skin Care & Facial Kits",
    "sku": "DER-HYAL-SUN-50",
    "barcode": "8901526401095",
    "hsnCode": "330499",
    "shortDescription": "Ultra light fluid sunscreen with zero white cast and blue light protection.",
    "description": "Authentic The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ (50g) distributed by The Derma Co. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 439,
    "discountPercent": 12,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 213,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&prod=sc-25",
        "altText": "The Derma Co 1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++ (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-25",
        "sku": "DER-HYAL-SUN-50",
        "mrp": 499,
        "sellingPrice": 439,
        "stock": 145
      }
    ]
  },
  {
    "id": "sc-26",
    "name": "Neutrogena Oil-Free Acne Wash Facial Cleanser (175ml)",
    "slug": "neutrogena-oil-free-acne-wash-facial-cleanser",
    "brand": "Neutrogena",
    "category": "Skin Care & Facial Kits",
    "sku": "NEU-ACNE-WASH-175",
    "barcode": "8901526401096",
    "hsnCode": "330499",
    "shortDescription": "MicroClear technology delivering salicylic acid deep into pores.",
    "description": "Authentic Neutrogena Oil-Free Acne Wash Facial Cleanser (175ml) distributed by Neutrogena. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 675,
    "sellingPrice": 580,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 220,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&prod=sc-26",
        "altText": "Neutrogena Oil-Free Acne Wash Facial Cleanser (175ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-26",
        "sku": "NEU-ACNE-WASH-175",
        "mrp": 675,
        "sellingPrice": 580,
        "stock": 150
      }
    ]
  },
  {
    "id": "sc-27",
    "name": "Lotus Herbals YouthRx Anti-Ageing Transforming Cr\u00e8me SPF 25 (50g)",
    "slug": "lotus-herbals-youthrx-anti-ageing-transforming-cr\u00e8me-spf-25",
    "brand": "Lotus Herbals",
    "category": "Skin Care & Facial Kits",
    "sku": "LOT-YOUTHRX-CREAM-50",
    "barcode": "8901526401097",
    "hsnCode": "330499",
    "shortDescription": "Gineplex youth compound accelerating skin renewal.",
    "description": "Authentic Lotus Herbals YouthRx Anti-Ageing Transforming Cr\u00e8me SPF 25 (50g) distributed by Lotus Herbals. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 695,
    "sellingPrice": 590,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 227,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337094846-8a8385875974?w=800&q=80&prod=sc-27",
        "altText": "Lotus Herbals YouthRx Anti-Ageing Transforming Cr\u00e8me SPF 25 (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-27",
        "sku": "LOT-YOUTHRX-CREAM-50",
        "mrp": 695,
        "sellingPrice": 590,
        "stock": 155
      }
    ]
  },
  {
    "id": "sc-28",
    "name": "Mamaearth Ubtan Face Wash with Saffron & Niacinamide (100ml)",
    "slug": "mamaearth-ubtan-face-wash-with-saffron-and-niacinamide",
    "brand": "Mamaearth",
    "category": "Skin Care & Facial Kits",
    "sku": "MAM-UBTAN-WASH-100",
    "barcode": "8901526401098",
    "hsnCode": "330499",
    "shortDescription": "Saffron and walnut beads removing tan and restoring glow.",
    "description": "Authentic Mamaearth Ubtan Face Wash with Saffron & Niacinamide (100ml) distributed by Mamaearth. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 259,
    "sellingPrice": 219,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 234,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&prod=sc-28",
        "altText": "Mamaearth Ubtan Face Wash with Saffron & Niacinamide (100ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-28",
        "sku": "MAM-UBTAN-WASH-100",
        "mrp": 259,
        "sellingPrice": 219,
        "stock": 160
      }
    ]
  },
  {
    "id": "sc-29",
    "name": "Foxtale Dewy Sunscreen SPF 50 PA++++ with Vitamin C (50g)",
    "slug": "foxtale-dewy-sunscreen-spf-50-paplusplusplusplus-with-vitamin-c",
    "brand": "Foxtale",
    "category": "Skin Care & Facial Kits",
    "sku": "FOX-DEWY-SUN-50",
    "barcode": "8901526401099",
    "hsnCode": "330499",
    "shortDescription": "Hydrating glow sunscreen with zero white cast for normal to dry skin.",
    "description": "Authentic Foxtale Dewy Sunscreen SPF 50 PA++++ with Vitamin C (50g) distributed by Foxtale. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 445,
    "sellingPrice": 375,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 241,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337651144-8d48a1267860?w=800&q=80&prod=sc-29",
        "altText": "Foxtale Dewy Sunscreen SPF 50 PA++++ with Vitamin C (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-29",
        "sku": "FOX-DEWY-SUN-50",
        "mrp": 445,
        "sellingPrice": 375,
        "stock": 165
      }
    ]
  },
  {
    "id": "sc-30",
    "name": "Biotique Bio Wheat Germ Youthful Nourishing Night Cream (50g)",
    "slug": "biotique-bio-wheat-germ-youthful-nourishing-night-cream",
    "brand": "Biotique",
    "category": "Skin Care & Facial Kits",
    "sku": "BIO-WHEATGERM-CREAM-50",
    "barcode": "8901526401100",
    "hsnCode": "330499",
    "shortDescription": "Pure wheat germ oil and sunflower oil firming skin overnight.",
    "description": "Authentic Biotique Bio Wheat Germ Youthful Nourishing Night Cream (50g) distributed by Biotique. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 270,
    "sellingPrice": 215,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 248,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&prod=sc-30",
        "altText": "Biotique Bio Wheat Germ Youthful Nourishing Night Cream (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-30",
        "sku": "BIO-WHEATGERM-CREAM-50",
        "mrp": 270,
        "sellingPrice": 215,
        "stock": 170
      }
    ]
  },
  {
    "id": "sc-31",
    "name": "O3+ Bridal Glow Facial Kit for Instant Radiance",
    "slug": "o3plus-bridal-glow-facial-kit-for-instant-radiance",
    "brand": "O3+ Professional",
    "category": "Skin Care & Facial Kits",
    "sku": "O3-BRIDAL-FACIAL-KIT",
    "barcode": "8901526401101",
    "hsnCode": "330499",
    "shortDescription": "Complete 10-step luxury bridal facial box for flawless glow.",
    "description": "Authentic O3+ Bridal Glow Facial Kit for Instant Radiance distributed by O3+ Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 4850,
    "sellingPrice": 4250,
    "discountPercent": 12,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 255,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512290900673-70020a7b54d7?w=800&q=80&prod=sc-31",
        "altText": "O3+ Bridal Glow Facial Kit for Instant Radiance",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-31",
        "sku": "O3-BRIDAL-FACIAL-KIT",
        "mrp": 4850,
        "sellingPrice": 4250,
        "stock": 25
      }
    ]
  },
  {
    "id": "sc-32",
    "name": "Minimalist SPF 50 PA++++ Sunscreen with Multi-Vitamins (50g)",
    "slug": "minimalist-spf-50-paplusplusplusplus-sunscreen-with-multi-vitamins",
    "brand": "Minimalist",
    "category": "Skin Care & Facial Kits",
    "sku": "MIN-SUNSCREEN-50",
    "barcode": "8901526401102",
    "hsnCode": "330499",
    "shortDescription": "Broad spectrum sunscreen tested in US labs with zero pilling.",
    "description": "Authentic Minimalist SPF 50 PA++++ Sunscreen with Multi-Vitamins (50g) distributed by Minimalist. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 399,
    "sellingPrice": 365,
    "discountPercent": 9,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 262,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&q=80&prod=sc-32",
        "altText": "Minimalist SPF 50 PA++++ Sunscreen with Multi-Vitamins (50g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-32",
        "sku": "MIN-SUNSCREEN-50",
        "mrp": 399,
        "sellingPrice": 365,
        "stock": 30
      }
    ]
  },
  {
    "id": "sc-33",
    "name": "Dot & Key 72HR Hydrating Gel Moisturizer with Probiotics (60ml)",
    "slug": "dot-and-key-72hr-hydrating-gel-moisturizer-with-probiotics",
    "brand": "Dot & Key Skincare",
    "category": "Skin Care & Facial Kits",
    "sku": "DOT-72HR-GEL-60",
    "barcode": "8901526401103",
    "hsnCode": "330499",
    "shortDescription": "Kombucha and Hyaluronic Acid locking in 72-hour moisture.",
    "description": "Authentic Dot & Key 72HR Hydrating Gel Moisturizer with Probiotics (60ml) distributed by Dot & Key Skincare. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 595,
    "sellingPrice": 499,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 269,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&prod=sc-33",
        "altText": "Dot & Key 72HR Hydrating Gel Moisturizer with Probiotics (60ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-33",
        "sku": "DOT-72HR-GEL-60",
        "mrp": 595,
        "sellingPrice": 499,
        "stock": 35
      }
    ]
  },
  {
    "id": "sc-34",
    "name": "Cetaphil Moisturizing Cream for Dry Sensitive Skin (80g)",
    "slug": "cetaphil-moisturizing-cream-for-dry-sensitive-skin",
    "brand": "Cetaphil",
    "category": "Skin Care & Facial Kits",
    "sku": "CET-MOIST-CREAM-80",
    "barcode": "8901526401104",
    "hsnCode": "330499",
    "shortDescription": "Sweet almond oil and Vitamin E providing long lasting hydration.",
    "description": "Authentic Cetaphil Moisturizing Cream for Dry Sensitive Skin (80g) distributed by Cetaphil. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 490,
    "sellingPrice": 435,
    "discountPercent": 11,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 276,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa909?w=800&q=80&prod=sc-34",
        "altText": "Cetaphil Moisturizing Cream for Dry Sensitive Skin (80g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-34",
        "sku": "CET-MOIST-CREAM-80",
        "mrp": 490,
        "sellingPrice": 435,
        "stock": 40
      }
    ]
  },
  {
    "id": "sc-35",
    "name": "The Derma Co 2% Kojic Acid Face Cream for Dark Spots (30g)",
    "slug": "the-derma-co-kojic-acid-face-cream-for-dark-spots",
    "brand": "The Derma Co",
    "category": "Skin Care & Facial Kits",
    "sku": "DER-KOJIC-CREAM-30",
    "barcode": "8901526401105",
    "hsnCode": "330499",
    "shortDescription": "Kojic acid and L-Ascorbic acid fading hyperpigmentation and melasma.",
    "description": "Authentic The Derma Co 2% Kojic Acid Face Cream for Dark Spots (30g) distributed by The Derma Co. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 429,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 283,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4525?w=800&q=80&prod=sc-35",
        "altText": "The Derma Co 2% Kojic Acid Face Cream for Dark Spots (30g)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-sc-35",
        "sku": "DER-KOJIC-CREAM-30",
        "mrp": 499,
        "sellingPrice": 429,
        "stock": 45
      }
    ]
  },
  {
    "id": "cm-1",
    "name": "Maybelline Superstay Matte Ink Liquid Lipstick - Ruler 80",
    "slug": "maybelline-superstay-matte-ink-liquid-lipstick---ruler-80",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-MATTE-INK-RULER-80",
    "barcode": "8901526401106",
    "hsnCode": "330499",
    "shortDescription": "16-Hour transfer-proof liquid matte lipstick in deep reddish berry.",
    "description": "Authentic Maybelline Superstay Matte Ink Liquid Lipstick - Ruler 80 distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 599,
    "discountPercent": 14,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 45,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80&prod=cm-1",
        "altText": "Maybelline Superstay Matte Ink Liquid Lipstick - Ruler 80",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-1",
        "sku": "MAY-MATTE-INK-RULER-80",
        "mrp": 699,
        "sellingPrice": 599,
        "stock": 25
      }
    ]
  },
  {
    "id": "cm-2",
    "name": "Lakm\u00e9 Absolute Skin Natural Mousse Foundation SPF 8 - Ivory Fair",
    "slug": "lakm\u00e9-absolute-skin-natural-mousse-foundation-spf-8---ivory-fair",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-ABS-MOUSSE-IVORY-01",
    "barcode": "8901526401107",
    "hsnCode": "330499",
    "shortDescription": "Feather-light mousse foundation for natural matte finish.",
    "description": "Authentic Lakm\u00e9 Absolute Skin Natural Mousse Foundation SPF 8 - Ivory Fair distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 875,
    "sellingPrice": 725,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 52,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&prod=cm-2",
        "altText": "Lakm\u00e9 Absolute Skin Natural Mousse Foundation SPF 8 - Ivory Fair",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-2",
        "sku": "LAK-ABS-MOUSSE-IVORY-01",
        "mrp": 875,
        "sellingPrice": 725,
        "stock": 30
      }
    ]
  },
  {
    "id": "cm-3",
    "name": "Swiss Beauty Ultimate 9 Color Eyeshadow Palette - Shade 01",
    "slug": "swiss-beauty-ultimate-9-color-eyeshadow-palette---shade-01",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-EYE-PALETTE-01",
    "barcode": "8901526401108",
    "hsnCode": "330499",
    "shortDescription": "Highly pigmented matte and metallic shimmer eyeshadow palette.",
    "description": "Authentic Swiss Beauty Ultimate 9 Color Eyeshadow Palette - Shade 01 distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 349,
    "sellingPrice": 289,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 59,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80&prod=cm-3",
        "altText": "Swiss Beauty Ultimate 9 Color Eyeshadow Palette - Shade 01",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-3",
        "sku": "SWI-EYE-PALETTE-01",
        "mrp": 349,
        "sellingPrice": 289,
        "stock": 35
      }
    ]
  },
  {
    "id": "cm-4",
    "name": "Colorbar Matte Touch Lipstick - Velvet Matte 42",
    "slug": "colorbar-matte-touch-lipstick---velvet-matte-42",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-MATTE-LIP-42",
    "barcode": "8901526401109",
    "hsnCode": "330499",
    "shortDescription": "Enriched with Vitamin E and Shea Butter for velvet matte lips.",
    "description": "Authentic Colorbar Matte Touch Lipstick - Velvet Matte 42 distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 375,
    "sellingPrice": 319,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 66,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&prod=cm-4",
        "altText": "Colorbar Matte Touch Lipstick - Velvet Matte 42",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-4",
        "sku": "COL-MATTE-LIP-42",
        "mrp": 375,
        "sellingPrice": 319,
        "stock": 40
      }
    ]
  },
  {
    "id": "cm-5",
    "name": "Sugar Cosmetics Matte As Hell Crayon Lipstick - Scarlett O'Hara 01",
    "slug": "sugar-cosmetics-matte-as-hell-crayon-lipstick---scarlett-ohara-01",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-CRAYON-LIP-01",
    "barcode": "8901526401110",
    "hsnCode": "330499",
    "shortDescription": "Highly pigmented matte lip crayon with sharpener included.",
    "description": "Authentic Sugar Cosmetics Matte As Hell Crayon Lipstick - Scarlett O'Hara 01 distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 899,
    "sellingPrice": 765,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 73,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=800&q=80&prod=cm-5",
        "altText": "Sugar Cosmetics Matte As Hell Crayon Lipstick - Scarlett O'Hara 01",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-5",
        "sku": "SUG-CRAYON-LIP-01",
        "mrp": 899,
        "sellingPrice": 765,
        "stock": 45
      }
    ]
  },
  {
    "id": "cm-6",
    "name": "Faces Canada Weightless Stay Matte Compact Powder - Natural 02",
    "slug": "faces-canada-weightless-stay-matte-compact-powder---natural-02",
    "brand": "Faces Canada",
    "category": "Branded Cosmetics & Makeup",
    "sku": "FAC-MATTE-COMPACT-02",
    "barcode": "8901526401111",
    "hsnCode": "330499",
    "shortDescription": "Vitamin E enriched pore blurring compact powder with SPF 20.",
    "description": "Authentic Faces Canada Weightless Stay Matte Compact Powder - Natural 02 distributed by Faces Canada. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 249,
    "sellingPrice": 209,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 80,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&q=80&prod=cm-6",
        "altText": "Faces Canada Weightless Stay Matte Compact Powder - Natural 02",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-6",
        "sku": "FAC-MATTE-COMPACT-02",
        "mrp": 249,
        "sellingPrice": 209,
        "stock": 50
      }
    ]
  },
  {
    "id": "cm-7",
    "name": "Maybelline Colossal Waterproof Eyeliner & Mascara Combo Kit",
    "slug": "maybelline-colossal-waterproof-eyeliner-and-mascara-combo-kit",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-COLOSSAL-COMBO-KIT",
    "barcode": "8901526401112",
    "hsnCode": "330499",
    "shortDescription": "Colossal 24h waterproof eyeliner kajal and volume mascara set.",
    "description": "Authentic Maybelline Colossal Waterproof Eyeliner & Mascara Combo Kit distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 799,
    "sellingPrice": 649,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 87,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80&prod=cm-7",
        "altText": "Maybelline Colossal Waterproof Eyeliner & Mascara Combo Kit",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-7",
        "sku": "MAY-COLOSSAL-COMBO-KIT",
        "mrp": 799,
        "sellingPrice": 649,
        "stock": 55
      }
    ]
  },
  {
    "id": "cm-8",
    "name": "Lakm\u00e9 Eyeconic Kajal Twin Pack - Deep Black",
    "slug": "lakm\u00e9-eyeconic-kajal-twin-pack---deep-black",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-EYECONIC-KAJAL-TWIN",
    "barcode": "8901526401113",
    "hsnCode": "330499",
    "shortDescription": "24-Hour smudge-proof waterproof deep black kajal stick.",
    "description": "Authentic Lakm\u00e9 Eyeconic Kajal Twin Pack - Deep Black distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 360,
    "sellingPrice": 299,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 94,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80&prod=cm-8",
        "altText": "Lakm\u00e9 Eyeconic Kajal Twin Pack - Deep Black",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-8",
        "sku": "LAK-EYECONIC-KAJAL-TWIN",
        "mrp": 360,
        "sellingPrice": 299,
        "stock": 60
      }
    ]
  },
  {
    "id": "cm-9",
    "name": "Swiss Beauty Liquid Concealer & Highlighter - Warm Sand 02",
    "slug": "swiss-beauty-liquid-concealer-and-highlighter---warm-sand-02",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-LIQ-CONCEALER-02",
    "barcode": "8901526401114",
    "hsnCode": "330499",
    "shortDescription": "Lightweight full coverage crease-resistant liquid concealer.",
    "description": "Authentic Swiss Beauty Liquid Concealer & Highlighter - Warm Sand 02 distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 249,
    "sellingPrice": 199,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 101,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&prod=cm-9",
        "altText": "Swiss Beauty Liquid Concealer & Highlighter - Warm Sand 02",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-9",
        "sku": "SWI-LIQ-CONCEALER-02",
        "mrp": 249,
        "sellingPrice": 199,
        "stock": 65
      }
    ]
  },
  {
    "id": "cm-10",
    "name": "Colorbar Perfect Match Primer - Oil Free Satin Finish (30ml)",
    "slug": "colorbar-perfect-match-primer---oil-free-satin-finish",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-MATCH-PRIMER-30",
    "barcode": "8901526401115",
    "hsnCode": "330499",
    "shortDescription": "Silicone base oil-free face primer minimizing pores and fine lines.",
    "description": "Authentic Colorbar Perfect Match Primer - Oil Free Satin Finish (30ml) distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 850,
    "sellingPrice": 715,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 108,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&prod=cm-10",
        "altText": "Colorbar Perfect Match Primer - Oil Free Satin Finish (30ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-10",
        "sku": "COL-MATCH-PRIMER-30",
        "mrp": 850,
        "sellingPrice": 715,
        "stock": 70
      }
    ]
  },
  {
    "id": "cm-11",
    "name": "Sugar Cosmetics Contour De Force Mini Blush - Peach Peak 01",
    "slug": "sugar-cosmetics-contour-de-force-mini-blush---peach-peak-01",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-MINI-BLUSH-01",
    "barcode": "8901526401116",
    "hsnCode": "330499",
    "shortDescription": "Silky smooth buildable powder blush delivering a flush of color.",
    "description": "Authentic Sugar Cosmetics Contour De Force Mini Blush - Peach Peak 01 distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 349,
    "sellingPrice": 295,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 115,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80&prod=cm-11",
        "altText": "Sugar Cosmetics Contour De Force Mini Blush - Peach Peak 01",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-11",
        "sku": "SUG-MINI-BLUSH-01",
        "mrp": 349,
        "sellingPrice": 295,
        "stock": 75
      }
    ]
  },
  {
    "id": "cm-12",
    "name": "Faces Canada Comfy Matte Liquid Lipstick - Berry Blush 05",
    "slug": "faces-canada-comfy-matte-liquid-lipstick---berry-blush-05",
    "brand": "Faces Canada",
    "category": "Branded Cosmetics & Makeup",
    "sku": "FAC-COMFY-MATTE-05",
    "barcode": "8901526401117",
    "hsnCode": "330499",
    "shortDescription": "Almond oil enriched comfortable matte liquid lipstick.",
    "description": "Authentic Faces Canada Comfy Matte Liquid Lipstick - Berry Blush 05 distributed by Faces Canada. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 399,
    "sellingPrice": 329,
    "discountPercent": 18,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 122,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80&prod=cm-12",
        "altText": "Faces Canada Comfy Matte Liquid Lipstick - Berry Blush 05",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-12",
        "sku": "FAC-COMFY-MATTE-05",
        "mrp": 399,
        "sellingPrice": 329,
        "stock": 80
      }
    ]
  },
  {
    "id": "cm-13",
    "name": "Maybelline Fit Me Matte + Poreless Liquid Foundation - 128 Warm Nude",
    "slug": "maybelline-fit-me-matte-plus-poreless-liquid-foundation---128-warm-nude",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-FITME-FOUND-128",
    "barcode": "8901526401118",
    "hsnCode": "330499",
    "shortDescription": "Micro-powders controls shine and erases pores for natural matte finish.",
    "description": "Authentic Maybelline Fit Me Matte + Poreless Liquid Foundation - 128 Warm Nude distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 499,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 129,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&prod=cm-13",
        "altText": "Maybelline Fit Me Matte + Poreless Liquid Foundation - 128 Warm Nude",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-13",
        "sku": "MAY-FITME-FOUND-128",
        "mrp": 599,
        "sellingPrice": 499,
        "stock": 85
      }
    ]
  },
  {
    "id": "cm-14",
    "name": "Lakm\u00e9 9to5 Primer + Matte Lip Color - MP7 Rosie Sunday",
    "slug": "lakm\u00e9-9to5-primer-plus-matte-lip-color---mp7-rosie-sunday",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-9TO5-ROSIE-MP7",
    "barcode": "8901526401119",
    "hsnCode": "330499",
    "shortDescription": "Built-in primer formula giving 12-hour intense matte color.",
    "description": "Authentic Lakm\u00e9 9to5 Primer + Matte Lip Color - MP7 Rosie Sunday distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 500,
    "sellingPrice": 420,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 136,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&prod=cm-14",
        "altText": "Lakm\u00e9 9to5 Primer + Matte Lip Color - MP7 Rosie Sunday",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-14",
        "sku": "LAK-9TO5-ROSIE-MP7",
        "mrp": 500,
        "sellingPrice": 420,
        "stock": 90
      }
    ]
  },
  {
    "id": "cm-15",
    "name": "Swiss Beauty Real Makeup Fixer Facial Spray with Aloe Vera (115ml)",
    "slug": "swiss-beauty-real-makeup-fixer-facial-spray-with-aloe-vera",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-MAKEUP-FIXER-115",
    "barcode": "8901526401120",
    "hsnCode": "330499",
    "shortDescription": "Long lasting makeup setting spray preventing melting and fading.",
    "description": "Authentic Swiss Beauty Real Makeup Fixer Facial Spray with Aloe Vera (115ml) distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 349,
    "sellingPrice": 289,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 143,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&prod=cm-15",
        "altText": "Swiss Beauty Real Makeup Fixer Facial Spray with Aloe Vera (115ml)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-15",
        "sku": "SWI-MAKEUP-FIXER-115",
        "mrp": 349,
        "sellingPrice": 289,
        "stock": 95
      }
    ]
  },
  {
    "id": "cm-16",
    "name": "Colorbar Lash Illusion Mascara Length & Volume - Black",
    "slug": "colorbar-lash-illusion-mascara-length-and-volume---black",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-LASH-ILLUSION-BLK",
    "barcode": "8901526401121",
    "hsnCode": "330499",
    "shortDescription": "Dual brush mascara providing intense length and clump-free volume.",
    "description": "Authentic Colorbar Lash Illusion Mascara Length & Volume - Black distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 419,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 150,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&prod=cm-16",
        "altText": "Colorbar Lash Illusion Mascara Length & Volume - Black",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-16",
        "sku": "COL-LASH-ILLUSION-BLK",
        "mrp": 499,
        "sellingPrice": 419,
        "stock": 100
      }
    ]
  },
  {
    "id": "cm-17",
    "name": "Sugar Cosmetics Arch Arrival Brow Definer - Taupe Tom 01",
    "slug": "sugar-cosmetics-arch-arrival-brow-definer---taupe-tom-01",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-BROW-DEFINER-01",
    "barcode": "8901526401122",
    "hsnCode": "330499",
    "shortDescription": "Triangle slant tip eyebrow pencil with spoolie brush for natural brow shape.",
    "description": "Authentic Sugar Cosmetics Arch Arrival Brow Definer - Taupe Tom 01 distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 419,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 157,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80&prod=cm-17",
        "altText": "Sugar Cosmetics Arch Arrival Brow Definer - Taupe Tom 01",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-17",
        "sku": "SUG-BROW-DEFINER-01",
        "mrp": 499,
        "sellingPrice": 419,
        "stock": 105
      }
    ]
  },
  {
    "id": "cm-18",
    "name": "Faces Canada Magneteyes Waterproof Eyeliner - Dramatic Black",
    "slug": "faces-canada-magneteyes-waterproof-eyeliner---dramatic-black",
    "brand": "Faces Canada",
    "category": "Branded Cosmetics & Makeup",
    "sku": "FAC-MAGNET-EYELINER",
    "barcode": "8901526401123",
    "hsnCode": "330499",
    "shortDescription": "Deep black matte liquid eyeliner with fine precision brush tip.",
    "description": "Authentic Faces Canada Magneteyes Waterproof Eyeliner - Dramatic Black distributed by Faces Canada. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 249,
    "sellingPrice": 209,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 164,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228722-d119f01b7642?w=800&q=80&prod=cm-18",
        "altText": "Faces Canada Magneteyes Waterproof Eyeliner - Dramatic Black",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-18",
        "sku": "FAC-MAGNET-EYELINER",
        "mrp": 249,
        "sellingPrice": 209,
        "stock": 110
      }
    ]
  },
  {
    "id": "cm-19",
    "name": "Maybelline Instant Age Rewind Eraser Multi-Use Concealer - Medium",
    "slug": "maybelline-instant-age-rewind-eraser-multi-use-concealer---medium",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-AGE-REWIND-MED",
    "barcode": "8901526401124",
    "hsnCode": "330499",
    "shortDescription": "Micro-corrector sponge applicator erasing dark circles and puffiness.",
    "description": "Authentic Maybelline Instant Age Rewind Eraser Multi-Use Concealer - Medium distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 720,
    "sellingPrice": 599,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 171,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80&prod=cm-19",
        "altText": "Maybelline Instant Age Rewind Eraser Multi-Use Concealer - Medium",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-19",
        "sku": "MAY-AGE-REWIND-MED",
        "mrp": 720,
        "sellingPrice": 599,
        "stock": 115
      }
    ]
  },
  {
    "id": "cm-20",
    "name": "Lakm\u00e9 Absolute Liquid Highlighter - Rose Gold Glow",
    "slug": "lakm\u00e9-absolute-liquid-highlighter---rose-gold-glow",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-ABS-HIGHLIGHT-ROSE",
    "barcode": "8901526401125",
    "hsnCode": "330499",
    "shortDescription": "Light reflecting liquid illuminator creating luminous dewy skin glow.",
    "description": "Authentic Lakm\u00e9 Absolute Liquid Highlighter - Rose Gold Glow distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 675,
    "sellingPrice": 565,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 178,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&prod=cm-20",
        "altText": "Lakm\u00e9 Absolute Liquid Highlighter - Rose Gold Glow",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-20",
        "sku": "LAK-ABS-HIGHLIGHT-ROSE",
        "mrp": 675,
        "sellingPrice": 565,
        "stock": 120
      }
    ]
  },
  {
    "id": "cm-21",
    "name": "Swiss Beauty Soft Matte Lip Cream - Cafe Nude 08",
    "slug": "swiss-beauty-soft-matte-lip-cream---cafe-nude-08",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-SOFT-MATTE-LIP-08",
    "barcode": "8901526401126",
    "hsnCode": "330499",
    "shortDescription": "Velvety smooth non-drying cream lipstick with sweet vanilla scent.",
    "description": "Authentic Swiss Beauty Soft Matte Lip Cream - Cafe Nude 08 distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 229,
    "sellingPrice": 189,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 185,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&prod=cm-21",
        "altText": "Swiss Beauty Soft Matte Lip Cream - Cafe Nude 08",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-21",
        "sku": "SWI-SOFT-MATTE-LIP-08",
        "mrp": 229,
        "sellingPrice": 189,
        "stock": 125
      }
    ]
  },
  {
    "id": "cm-22",
    "name": "Colorbar Sinful Matte Lip Color - Kinky 01",
    "slug": "colorbar-sinful-matte-lip-color---kinky-01",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-SINFUL-MATTE-01",
    "barcode": "8901526401127",
    "hsnCode": "330499",
    "shortDescription": "Luxury sea fennel oil infused smooth matte lipstick in magnetic gold case.",
    "description": "Authentic Colorbar Sinful Matte Lip Color - Kinky 01 distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1200,
    "sellingPrice": 999,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 192,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583241799080-877797746ebc?w=800&q=80&prod=cm-22",
        "altText": "Colorbar Sinful Matte Lip Color - Kinky 01",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-22",
        "sku": "COL-SINFUL-MATTE-01",
        "mrp": 1200,
        "sellingPrice": 999,
        "stock": 130
      }
    ]
  },
  {
    "id": "cm-23",
    "name": "Sugar Cosmetics Goddess Of Flawless BB Cream - Light 10",
    "slug": "sugar-cosmetics-goddess-of-flawless-bb-cream---light-10",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-BB-CREAM-10",
    "barcode": "8901526401128",
    "hsnCode": "330499",
    "shortDescription": "SPF 30 PA+++ matte finish BB cream shielding and unifying skin tone.",
    "description": "Authentic Sugar Cosmetics Goddess Of Flawless BB Cream - Light 10 distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 589,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 199,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&prod=cm-23",
        "altText": "Sugar Cosmetics Goddess Of Flawless BB Cream - Light 10",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-23",
        "sku": "SUG-BB-CREAM-10",
        "mrp": 699,
        "sellingPrice": 589,
        "stock": 135
      }
    ]
  },
  {
    "id": "cm-24",
    "name": "Faces Canada Ultime Pro HD Intense Matte Lip Crayon - Peach 08",
    "slug": "faces-canada-ultime-pro-hd-intense-matte-lip-crayon---peach-08",
    "brand": "Faces Canada",
    "category": "Branded Cosmetics & Makeup",
    "sku": "FAC-ULTIME-CRAYON-08",
    "barcode": "8901526401129",
    "hsnCode": "330499",
    "shortDescription": "Primer infused high coverage matte lip crayon from Germany.",
    "description": "Authentic Faces Canada Ultime Pro HD Intense Matte Lip Crayon - Peach 08 distributed by Faces Canada. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 799,
    "sellingPrice": 669,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 206,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&prod=cm-24",
        "altText": "Faces Canada Ultime Pro HD Intense Matte Lip Crayon - Peach 08",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-24",
        "sku": "FAC-ULTIME-CRAYON-08",
        "mrp": 799,
        "sellingPrice": 669,
        "stock": 140
      }
    ]
  },
  {
    "id": "cm-25",
    "name": "Maybelline Hypercurl Waterproof Mascara - Black",
    "slug": "maybelline-hypercurl-waterproof-mascara---black",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-HYPERCURL-MAS-BLK",
    "barcode": "8901526401130",
    "hsnCode": "330499",
    "shortDescription": "Curled brush holding 75 degree curl for 18 hours without heavy feel.",
    "description": "Authentic Maybelline Hypercurl Waterproof Mascara - Black distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 449,
    "sellingPrice": 375,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 213,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&prod=cm-25",
        "altText": "Maybelline Hypercurl Waterproof Mascara - Black",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-25",
        "sku": "MAY-HYPERCURL-MAS-BLK",
        "mrp": 449,
        "sellingPrice": 375,
        "stock": 145
      }
    ]
  },
  {
    "id": "cm-26",
    "name": "Lakm\u00e9 Absolute Gel Stylist Nail Color - Crimson Red",
    "slug": "lakm\u00e9-absolute-gel-stylist-nail-color---crimson-red",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-GEL-NAIL-CRIMSON",
    "barcode": "8901526401131",
    "hsnCode": "330499",
    "shortDescription": "Salon gel finish high shine nail enamel with wide flat applicator brush.",
    "description": "Authentic Lakm\u00e9 Absolute Gel Stylist Nail Color - Crimson Red distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 350,
    "sellingPrice": 295,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 220,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&prod=cm-26",
        "altText": "Lakm\u00e9 Absolute Gel Stylist Nail Color - Crimson Red",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-26",
        "sku": "LAK-GEL-NAIL-CRIMSON",
        "mrp": 350,
        "sellingPrice": 295,
        "stock": 150
      }
    ]
  },
  {
    "id": "cm-27",
    "name": "Swiss Beauty Precision Waterproof Dipliner - Jet Black",
    "slug": "swiss-beauty-precision-waterproof-dipliner---jet-black",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-DIPLINER-JET-BLK",
    "barcode": "8901526401132",
    "hsnCode": "330499",
    "shortDescription": "Smudge proof quick drying matte liquid eyeliner with fine tip.",
    "description": "Authentic Swiss Beauty Precision Waterproof Dipliner - Jet Black distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 199,
    "sellingPrice": 159,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 227,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337094846-8a8385875974?w=800&q=80&prod=cm-27",
        "altText": "Swiss Beauty Precision Waterproof Dipliner - Jet Black",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-27",
        "sku": "SWI-DIPLINER-JET-BLK",
        "mrp": 199,
        "sellingPrice": 159,
        "stock": 155
      }
    ]
  },
  {
    "id": "cm-28",
    "name": "Colorbar Fruit Drop Hydrating Lip Oil - Raspberry",
    "slug": "colorbar-fruit-drop-hydrating-lip-oil---raspberry",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-LIP-OIL-RASP",
    "barcode": "8901526401133",
    "hsnCode": "330499",
    "shortDescription": "Enriched with 6 fruit oils offering glassy non-sticky lip nourishment.",
    "description": "Authentic Colorbar Fruit Drop Hydrating Lip Oil - Raspberry distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 599,
    "sellingPrice": 499,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 234,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&prod=cm-28",
        "altText": "Colorbar Fruit Drop Hydrating Lip Oil - Raspberry",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-28",
        "sku": "COL-LIP-OIL-RASP",
        "mrp": 599,
        "sellingPrice": 499,
        "stock": 160
      }
    ]
  },
  {
    "id": "cm-29",
    "name": "Sugar Cosmetics Blend Trend Makeup Sponge Beauty Blender",
    "slug": "sugar-cosmetics-blend-trend-makeup-sponge-beauty-blender",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-BEAUTY-SPONGE-BLK",
    "barcode": "8901526401134",
    "hsnCode": "330499",
    "shortDescription": "Edgeless teardrop microfiber beauty sponge for seamless liquid foundation blending.",
    "description": "Authentic Sugar Cosmetics Blend Trend Makeup Sponge Beauty Blender distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 419,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 241,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337651144-8d48a1267860?w=800&q=80&prod=cm-29",
        "altText": "Sugar Cosmetics Blend Trend Makeup Sponge Beauty Blender",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-29",
        "sku": "SUG-BEAUTY-SPONGE-BLK",
        "mrp": 499,
        "sellingPrice": 419,
        "stock": 165
      }
    ]
  },
  {
    "id": "cm-30",
    "name": "Faces Canada Peaches N Cream Tinted Moisturizer - Light",
    "slug": "faces-canada-peaches-n-cream-tinted-moisturizer---light",
    "brand": "Faces Canada",
    "category": "Branded Cosmetics & Makeup",
    "sku": "FAC-PEACHES-TINT-LGT",
    "barcode": "8901526401135",
    "hsnCode": "330499",
    "shortDescription": "Soft peach scent glowing tinted moisturizer for everyday wear.",
    "description": "Authentic Faces Canada Peaches N Cream Tinted Moisturizer - Light distributed by Faces Canada. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 499,
    "sellingPrice": 419,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 248,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&prod=cm-30",
        "altText": "Faces Canada Peaches N Cream Tinted Moisturizer - Light",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-30",
        "sku": "FAC-PEACHES-TINT-LGT",
        "mrp": 499,
        "sellingPrice": 419,
        "stock": 170
      }
    ]
  },
  {
    "id": "cm-31",
    "name": "Maybelline Fit Me Loose Finishing Setting Powder - Fair Light",
    "slug": "maybelline-fit-me-loose-finishing-setting-powder---fair-light",
    "brand": "Maybelline New York",
    "category": "Branded Cosmetics & Makeup",
    "sku": "MAY-FITME-LOOSE-POW",
    "barcode": "8901526401136",
    "hsnCode": "330499",
    "shortDescription": "Mineral-based formula controlling shine and smoothing skin texture.",
    "description": "Authentic Maybelline Fit Me Loose Finishing Setting Powder - Fair Light distributed by Maybelline New York. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 799,
    "sellingPrice": 665,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 255,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512290900673-70020a7b54d7?w=800&q=80&prod=cm-31",
        "altText": "Maybelline Fit Me Loose Finishing Setting Powder - Fair Light",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-31",
        "sku": "MAY-FITME-LOOSE-POW",
        "mrp": 799,
        "sellingPrice": 665,
        "stock": 25
      }
    ]
  },
  {
    "id": "cm-32",
    "name": "Lakm\u00e9 Forever Matte Liquid Lip Color - Nude Dream 12",
    "slug": "lakm\u00e9-forever-matte-liquid-lip-color---nude-dream-12",
    "brand": "Lakm\u00e9 Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "LAK-FOREVER-MATTE-12",
    "barcode": "8901526401137",
    "hsnCode": "330499",
    "shortDescription": "Lightweight 16-hour matte formula that stays smooth without drying.",
    "description": "Authentic Lakm\u00e9 Forever Matte Liquid Lip Color - Nude Dream 12 distributed by Lakm\u00e9 Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 310,
    "sellingPrice": 259,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 262,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&q=80&prod=cm-32",
        "altText": "Lakm\u00e9 Forever Matte Liquid Lip Color - Nude Dream 12",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-32",
        "sku": "LAK-FOREVER-MATTE-12",
        "mrp": 310,
        "sellingPrice": 259,
        "stock": 30
      }
    ]
  },
  {
    "id": "cm-33",
    "name": "Swiss Beauty Make Up Highlight & Contour Studio Palette",
    "slug": "swiss-beauty-make-up-highlight-and-contour-studio-palette",
    "brand": "Swiss Beauty",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SWI-CONTOUR-PALETTE",
    "barcode": "8901526401138",
    "hsnCode": "330499",
    "shortDescription": "4-in-1 contour bronzer and highlighter powder palette for sculpting face.",
    "description": "Authentic Swiss Beauty Make Up Highlight & Contour Studio Palette distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 449,
    "sellingPrice": 375,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 269,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&prod=cm-33",
        "altText": "Swiss Beauty Make Up Highlight & Contour Studio Palette",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-33",
        "sku": "SWI-CONTOUR-PALETTE",
        "mrp": 449,
        "sellingPrice": 375,
        "stock": 35
      }
    ]
  },
  {
    "id": "cm-34",
    "name": "Colorbar Starlight Shimmer Lip Gloss - Quartz 02",
    "slug": "colorbar-starlight-shimmer-lip-gloss---quartz-02",
    "brand": "Colorbar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "COL-STARLIGHT-GLOSS",
    "barcode": "8901526401139",
    "hsnCode": "330499",
    "shortDescription": "Dazzling 3D shine gloss infused with jojoba oil for plump lips.",
    "description": "Authentic Colorbar Starlight Shimmer Lip Gloss - Quartz 02 distributed by Colorbar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 675,
    "sellingPrice": 565,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 276,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa909?w=800&q=80&prod=cm-34",
        "altText": "Colorbar Starlight Shimmer Lip Gloss - Quartz 02",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-34",
        "sku": "COL-STARLIGHT-GLOSS",
        "mrp": 675,
        "sellingPrice": 565,
        "stock": 40
      }
    ]
  },
  {
    "id": "cm-35",
    "name": "Sugar Cosmetics Dream Cover Matte Compact - 15 Cappuccino",
    "slug": "sugar-cosmetics-dream-cover-matte-compact---15-cappuccino",
    "brand": "Sugar Cosmetics",
    "category": "Branded Cosmetics & Makeup",
    "sku": "SUG-DREAM-COMPACT-15",
    "barcode": "8901526401140",
    "hsnCode": "330499",
    "shortDescription": "SPF 15 enriched oil control compact powder with Vitamin E.",
    "description": "Authentic Sugar Cosmetics Dream Cover Matte Compact - 15 Cappuccino distributed by Sugar Cosmetics. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 549,
    "sellingPrice": 465,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 283,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4525?w=800&q=80&prod=cm-35",
        "altText": "Sugar Cosmetics Dream Cover Matte Compact - 15 Cappuccino",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-cm-35",
        "sku": "SUG-DREAM-COMPACT-15",
        "mrp": 549,
        "sellingPrice": 465,
        "stock": 45
      }
    ]
  },
  {
    "id": "ba-1",
    "name": "Vega Professional Pro Touch Hair Dryer 2000W Heavy Duty Motor",
    "slug": "vega-professional-pro-touch-hair-dryer-2000w-heavy-duty-motor",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-PRO-DRYER-2000W",
    "barcode": "8901526401141",
    "hsnCode": "330590",
    "shortDescription": "Heavy-duty AC motor professional salon hair dryer with cool shot.",
    "description": "Authentic Vega Professional Pro Touch Hair Dryer 2000W Heavy Duty Motor distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2990,
    "sellingPrice": 2490,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 45,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80&prod=ba-1",
        "altText": "Vega Professional Pro Touch Hair Dryer 2000W Heavy Duty Motor",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-1",
        "sku": "VEG-PRO-DRYER-2000W",
        "mrp": 2990,
        "sellingPrice": 2490,
        "stock": 25
      }
    ]
  },
  {
    "id": "ba-2",
    "name": "Vega Professional Ceramic Hair Straightener with Temperature Control",
    "slug": "vega-professional-ceramic-hair-straightener-with-temperature-control",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-CERAMIC-STR-PRO",
    "barcode": "8901526401142",
    "hsnCode": "330590",
    "shortDescription": "Ceramic tourmaline floating plates with digital temperature control.",
    "description": "Authentic Vega Professional Ceramic Hair Straightener with Temperature Control distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2790,
    "sellingPrice": 2250,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 52,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&prod=ba-2",
        "altText": "Vega Professional Ceramic Hair Straightener with Temperature Control",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-2",
        "sku": "VEG-CERAMIC-STR-PRO",
        "mrp": 2790,
        "sellingPrice": 2250,
        "stock": 30
      }
    ]
  },
  {
    "id": "ba-3",
    "name": "Professional Nano Ionic Facial Vaporizer Steamer",
    "slug": "professional-nano-ionic-facial-vaporizer-steamer",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-FACIAL-STEAMER-NANO",
    "barcode": "8901526401143",
    "hsnCode": "330590",
    "shortDescription": "Nano ionic facial steamer for deep pore cleansing and hydration.",
    "description": "Authentic Professional Nano Ionic Facial Vaporizer Steamer distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1800,
    "sellingPrice": 1390,
    "discountPercent": 23,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 59,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80&prod=ba-3",
        "altText": "Professional Nano Ionic Facial Vaporizer Steamer",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-3",
        "sku": "VEG-FACIAL-STEAMER-NANO",
        "mrp": 1800,
        "sellingPrice": 1390,
        "stock": 35
      }
    ]
  },
  {
    "id": "ba-4",
    "name": "Vega Professional Japanese Steel Barber Cutting Scissors 6.0 Inch",
    "slug": "vega-professional-japanese-steel-barber-cutting-scissors-inch",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-SCISSORS-60-INCH",
    "barcode": "8901526401144",
    "hsnCode": "330590",
    "shortDescription": "Razor-sharp Japanese stainless steel professional salon hair cutting shears.",
    "description": "Authentic Vega Professional Japanese Steel Barber Cutting Scissors 6.0 Inch distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1490,
    "sellingPrice": 1190,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 66,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80&prod=ba-4",
        "altText": "Vega Professional Japanese Steel Barber Cutting Scissors 6.0 Inch",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-4",
        "sku": "VEG-SCISSORS-60-INCH",
        "mrp": 1490,
        "sellingPrice": 1190,
        "stock": 40
      }
    ]
  },
  {
    "id": "ba-5",
    "name": "Vega Professional 3-in-1 Curling Iron & Hair Curler Set",
    "slug": "vega-professional-3-in-1-curling-iron-and-hair-curler-set",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-CURLER-SET-3IN1",
    "barcode": "8901526401145",
    "hsnCode": "330590",
    "shortDescription": "Interchangeable ceramic barrel hair curler with digital heat control.",
    "description": "Authentic Vega Professional 3-in-1 Curling Iron & Hair Curler Set distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 3290,
    "sellingPrice": 2690,
    "discountPercent": 18,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 73,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=800&q=80&prod=ba-5",
        "altText": "Vega Professional 3-in-1 Curling Iron & Hair Curler Set",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-5",
        "sku": "VEG-CURLER-SET-3IN1",
        "mrp": 3290,
        "sellingPrice": 2690,
        "stock": 45
      }
    ]
  },
  {
    "id": "ba-6",
    "name": "Professional Automatic Roll Wax Heater Machine for Salons",
    "slug": "professional-automatic-roll-wax-heater-machine-for-salons",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-WAX-HEATER-PRO",
    "barcode": "8901526401146",
    "hsnCode": "330590",
    "shortDescription": "Dual pot quick melt temperature control waxing machine for professional salons.",
    "description": "Authentic Professional Automatic Roll Wax Heater Machine for Salons distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1250,
    "sellingPrice": 950,
    "discountPercent": 24,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 80,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&q=80&prod=ba-6",
        "altText": "Professional Automatic Roll Wax Heater Machine for Salons",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-6",
        "sku": "VEG-WAX-HEATER-PRO",
        "mrp": 1250,
        "sellingPrice": 950,
        "stock": 50
      }
    ]
  },
  {
    "id": "ba-7",
    "name": "Vega Professional Paddle Hair Brush with Anti-Static Bristles",
    "slug": "vega-professional-paddle-hair-brush-with-anti-static-bristles",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-PADDLE-BRUSH-PRO",
    "barcode": "8901526401147",
    "hsnCode": "330590",
    "shortDescription": "Large paddle brush for smooth detangling and blow drying long hair.",
    "description": "Authentic Vega Professional Paddle Hair Brush with Anti-Static Bristles distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 375,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 87,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80&prod=ba-7",
        "altText": "Vega Professional Paddle Hair Brush with Anti-Static Bristles",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-7",
        "sku": "VEG-PADDLE-BRUSH-PRO",
        "mrp": 450,
        "sellingPrice": 375,
        "stock": 55
      }
    ]
  },
  {
    "id": "ba-8",
    "name": "Swiss Beauty Professional 12-Piece Synthetic Makeup Brush Set",
    "slug": "swiss-beauty-professional-12-piece-synthetic-makeup-brush-set",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-BRUSH-SET-12PCS",
    "barcode": "8901526401148",
    "hsnCode": "330590",
    "shortDescription": "Soft cruelty-free synthetic makeup brushes with luxury leather pouch.",
    "description": "Authentic Swiss Beauty Professional 12-Piece Synthetic Makeup Brush Set distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 999,
    "sellingPrice": 799,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 94,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80&prod=ba-8",
        "altText": "Swiss Beauty Professional 12-Piece Synthetic Makeup Brush Set",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-8",
        "sku": "SWI-BRUSH-SET-12PCS",
        "mrp": 999,
        "sellingPrice": 799,
        "stock": 60
      }
    ]
  },
  {
    "id": "ba-9",
    "name": "Professional LED Vanity Makeup Mirror with 10x Magnification",
    "slug": "professional-led-vanity-makeup-mirror-with-10x-magnification",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-LED-MIRROR-10X",
    "barcode": "8901526401149",
    "hsnCode": "330590",
    "shortDescription": "Touch screen dimmable LED illuminated countertop vanity mirror.",
    "description": "Authentic Professional LED Vanity Makeup Mirror with 10x Magnification distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1850,
    "sellingPrice": 1490,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 101,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&prod=ba-9",
        "altText": "Professional LED Vanity Makeup Mirror with 10x Magnification",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-9",
        "sku": "SWI-LED-MIRROR-10X",
        "mrp": 1850,
        "sellingPrice": 1490,
        "stock": 65
      }
    ]
  },
  {
    "id": "ba-10",
    "name": "Vega Professional Thermal Round Barrel Blow Dry Brush (45mm)",
    "slug": "vega-professional-thermal-round-barrel-blow-dry-brush",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-ROUND-BRUSH-45MM",
    "barcode": "8901526401150",
    "hsnCode": "330590",
    "shortDescription": "Ceramic ionic thermal round brush for creating voluminous blowout curls.",
    "description": "Authentic Vega Professional Thermal Round Barrel Blow Dry Brush (45mm) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 650,
    "sellingPrice": 525,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 108,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80&prod=ba-10",
        "altText": "Vega Professional Thermal Round Barrel Blow Dry Brush (45mm)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-10",
        "sku": "VEG-ROUND-BRUSH-45MM",
        "mrp": 650,
        "sellingPrice": 525,
        "stock": 70
      }
    ]
  },
  {
    "id": "ba-11",
    "name": "Vega Professional Carbon Antistatic Tail Comb Set (6 Pcs)",
    "slug": "vega-professional-carbon-antistatic-tail-comb-set",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-COMB-SET-6PCS",
    "barcode": "8901526401151",
    "hsnCode": "330590",
    "shortDescription": "Heat-resistant carbon fiber sectioning and styling tail combs for barbers.",
    "description": "Authentic Vega Professional Carbon Antistatic Tail Comb Set (6 Pcs) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 490,
    "sellingPrice": 399,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 115,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80&prod=ba-11",
        "altText": "Vega Professional Carbon Antistatic Tail Comb Set (6 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-11",
        "sku": "VEG-COMB-SET-6PCS",
        "mrp": 490,
        "sellingPrice": 399,
        "stock": 75
      }
    ]
  },
  {
    "id": "ba-12",
    "name": "Professional Stainless Steel Pedicure & Manicure Nail Clipper Set",
    "slug": "professional-stainless-steel-pedicure-and-manicure-nail-clipper-set",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-MANICURE-SET-10",
    "barcode": "8901526401152",
    "hsnCode": "330590",
    "shortDescription": "10-Piece surgical grade stainless steel nail grooming kit in travel case.",
    "description": "Authentic Professional Stainless Steel Pedicure & Manicure Nail Clipper Set distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 549,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 122,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80&prod=ba-12",
        "altText": "Professional Stainless Steel Pedicure & Manicure Nail Clipper Set",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-12",
        "sku": "VEG-MANICURE-SET-10",
        "mrp": 699,
        "sellingPrice": 549,
        "stock": 80
      }
    ]
  },
  {
    "id": "ba-13",
    "name": "Swiss Beauty Teardrop Microfiber Sponge Blender Twin Pack",
    "slug": "swiss-beauty-teardrop-microfiber-sponge-blender-twin-pack",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-SPONGE-TWIN-PACK",
    "barcode": "8901526401153",
    "hsnCode": "330590",
    "shortDescription": "Latex-free streakless liquid foundation blending sponges.",
    "description": "Authentic Swiss Beauty Teardrop Microfiber Sponge Blender Twin Pack distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 299,
    "sellingPrice": 239,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 129,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80&prod=ba-13",
        "altText": "Swiss Beauty Teardrop Microfiber Sponge Blender Twin Pack",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-13",
        "sku": "SWI-SPONGE-TWIN-PACK",
        "mrp": 299,
        "sellingPrice": 239,
        "stock": 85
      }
    ]
  },
  {
    "id": "ba-14",
    "name": "Vega Professional Hot Air Styler Brush & Blowout Volumizer",
    "slug": "vega-professional-hot-air-styler-brush-and-blowout-volumizer",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-BLOWOUT-BRUSH-PRO",
    "barcode": "8901526401154",
    "hsnCode": "330590",
    "shortDescription": "Oval brush design with ionic technology drying and volumizing in one step.",
    "description": "Authentic Vega Professional Hot Air Styler Brush & Blowout Volumizer distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2490,
    "sellingPrice": 1990,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 136,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&prod=ba-14",
        "altText": "Vega Professional Hot Air Styler Brush & Blowout Volumizer",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-14",
        "sku": "VEG-BLOWOUT-BRUSH-PRO",
        "mrp": 2490,
        "sellingPrice": 1990,
        "stock": 90
      }
    ]
  },
  {
    "id": "ba-15",
    "name": "Professional Paraffin Wax Bath Warmer Heater Machine",
    "slug": "professional-paraffin-wax-bath-warmer-heater-machine",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-PARAFFIN-WARMER",
    "barcode": "8901526401155",
    "hsnCode": "330590",
    "shortDescription": "Deep moisturizing heat therapy bath for salon manicure and pedicure treatments.",
    "description": "Authentic Professional Paraffin Wax Bath Warmer Heater Machine distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2990,
    "sellingPrice": 2390,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 143,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80&prod=ba-15",
        "altText": "Professional Paraffin Wax Bath Warmer Heater Machine",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-15",
        "sku": "VEG-PARAFFIN-WARMER",
        "mrp": 2990,
        "sellingPrice": 2390,
        "stock": 95
      }
    ]
  },
  {
    "id": "ba-16",
    "name": "Vega Professional Thinning Texturizing Scissors 5.5 Inch",
    "slug": "vega-professional-thinning-texturizing-scissors-inch",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-THINNING-SHEARS-55",
    "barcode": "8901526401156",
    "hsnCode": "330590",
    "shortDescription": "28-Teeth Japanese steel thinning scissors for hair weight removal.",
    "description": "Authentic Vega Professional Thinning Texturizing Scissors 5.5 Inch distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1590,
    "sellingPrice": 1290,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 150,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&prod=ba-16",
        "altText": "Vega Professional Thinning Texturizing Scissors 5.5 Inch",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-16",
        "sku": "VEG-THINNING-SHEARS-55",
        "mrp": 1590,
        "sellingPrice": 1290,
        "stock": 100
      }
    ]
  },
  {
    "id": "ba-17",
    "name": "Swiss Beauty Kabuki Foundation Makeup Brush",
    "slug": "swiss-beauty-kabuki-foundation-makeup-brush",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-KABUKI-BRUSH-01",
    "barcode": "8901526401157",
    "hsnCode": "330590",
    "shortDescription": "Flat top dense kabuki brush for seamless streak-free liquid foundation application.",
    "description": "Authentic Swiss Beauty Kabuki Foundation Makeup Brush distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 349,
    "sellingPrice": 289,
    "discountPercent": 17,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 157,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80&prod=ba-17",
        "altText": "Swiss Beauty Kabuki Foundation Makeup Brush",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-17",
        "sku": "SWI-KABUKI-BRUSH-01",
        "mrp": 349,
        "sellingPrice": 289,
        "stock": 105
      }
    ]
  },
  {
    "id": "ba-18",
    "name": "Vega Professional Ionic Hair Crimper for Salon Texture & Volume",
    "slug": "vega-professional-ionic-hair-crimper-for-salon-texture-and-volume",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-CRIMPER-PRO-ION",
    "barcode": "8901526401158",
    "hsnCode": "330590",
    "shortDescription": "Wide micro-crimping ceramic plates for adding root volume and salon texture.",
    "description": "Authentic Vega Professional Ionic Hair Crimper for Salon Texture & Volume distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 2390,
    "sellingPrice": 1890,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 164,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1556228722-d119f01b7642?w=800&q=80&prod=ba-18",
        "altText": "Vega Professional Ionic Hair Crimper for Salon Texture & Volume",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-18",
        "sku": "VEG-CRIMPER-PRO-ION",
        "mrp": 2390,
        "sellingPrice": 1890,
        "stock": 110
      }
    ]
  },
  {
    "id": "ba-19",
    "name": "Professional Hair Coloring Dyeing Bowl & Brush Kit (5 Pcs)",
    "slug": "professional-hair-coloring-dyeing-bowl-and-brush-kit",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-COLOR-KIT-5PCS",
    "barcode": "8901526401159",
    "hsnCode": "330590",
    "shortDescription": "Measuring scale bowl, tint brushes, and ear covers for hair coloring.",
    "description": "Authentic Professional Hair Coloring Dyeing Bowl & Brush Kit (5 Pcs) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 350,
    "sellingPrice": 275,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 171,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80&prod=ba-19",
        "altText": "Professional Hair Coloring Dyeing Bowl & Brush Kit (5 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-19",
        "sku": "VEG-COLOR-KIT-5PCS",
        "mrp": 350,
        "sellingPrice": 275,
        "stock": 115
      }
    ]
  },
  {
    "id": "ba-20",
    "name": "Swiss Beauty Eyelash Curler with Refill Silicone Rubber Pads",
    "slug": "swiss-beauty-eyelash-curler-with-refill-silicone-rubber-pads",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-EYELASH-CURLER-01",
    "barcode": "8901526401160",
    "hsnCode": "330590",
    "shortDescription": "Ergonomic contour design curler lifting lashes without pinching.",
    "description": "Authentic Swiss Beauty Eyelash Curler with Refill Silicone Rubber Pads distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 199,
    "sellingPrice": 159,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 178,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&prod=ba-20",
        "altText": "Swiss Beauty Eyelash Curler with Refill Silicone Rubber Pads",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-20",
        "sku": "SWI-EYELASH-CURLER-01",
        "mrp": 199,
        "sellingPrice": 159,
        "stock": 120
      }
    ]
  },
  {
    "id": "ba-21",
    "name": "Vega Professional Electric Threading Machine & Hair Remover",
    "slug": "vega-professional-electric-threading-machine-and-hair-remover",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-THREADING-ELEC",
    "barcode": "8901526401161",
    "hsnCode": "330590",
    "shortDescription": "Pure cotton thread facial hair remover for precise brow shaping.",
    "description": "Authentic Vega Professional Electric Threading Machine & Hair Remover distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1450,
    "sellingPrice": 1150,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 185,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&prod=ba-21",
        "altText": "Vega Professional Electric Threading Machine & Hair Remover",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-21",
        "sku": "VEG-THREADING-ELEC",
        "mrp": 1450,
        "sellingPrice": 1150,
        "stock": 125
      }
    ]
  },
  {
    "id": "ba-22",
    "name": "Professional Salon Hooded Hair Steamer Stand Machine",
    "slug": "professional-salon-hooded-hair-steamer-stand-machine",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-HOODED-STEAMER",
    "barcode": "8901526401162",
    "hsnCode": "330590",
    "shortDescription": "Height adjustable rolling base salon hair treatment steamer hood.",
    "description": "Authentic Professional Salon Hooded Hair Steamer Stand Machine distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 6800,
    "sellingPrice": 5790,
    "discountPercent": 15,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 192,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583241799080-877797746ebc?w=800&q=80&prod=ba-22",
        "altText": "Professional Salon Hooded Hair Steamer Stand Machine",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-22",
        "sku": "VEG-HOODED-STEAMER",
        "mrp": 6800,
        "sellingPrice": 5790,
        "stock": 130
      }
    ]
  },
  {
    "id": "ba-23",
    "name": "Vega Professional Cushion Detangling Hair Brush - Wooden Finish",
    "slug": "vega-professional-cushion-detangling-hair-brush---wooden-finish",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-WOODEN-BRUSH-DET",
    "barcode": "8901526401163",
    "hsnCode": "330590",
    "shortDescription": "Natural wooden ball pin bristles massaging scalp while detangling.",
    "description": "Authentic Vega Professional Cushion Detangling Hair Brush - Wooden Finish distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 490,
    "sellingPrice": 399,
    "discountPercent": 19,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 199,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&prod=ba-23",
        "altText": "Vega Professional Cushion Detangling Hair Brush - Wooden Finish",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-23",
        "sku": "VEG-WOODEN-BRUSH-DET",
        "mrp": 490,
        "sellingPrice": 399,
        "stock": 135
      }
    ]
  },
  {
    "id": "ba-24",
    "name": "Swiss Beauty Powder & Blush Makeup Sponge Puff (4 Pcs)",
    "slug": "swiss-beauty-powder-and-blush-makeup-sponge-puff",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-PUFF-4PCS-SET",
    "barcode": "8901526401164",
    "hsnCode": "330590",
    "shortDescription": "Triangle velour powder puffs for baking under eye setting powder.",
    "description": "Authentic Swiss Beauty Powder & Blush Makeup Sponge Puff (4 Pcs) distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 199,
    "sellingPrice": 159,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 206,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&prod=ba-24",
        "altText": "Swiss Beauty Powder & Blush Makeup Sponge Puff (4 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-24",
        "sku": "SWI-PUFF-4PCS-SET",
        "mrp": 199,
        "sellingPrice": 159,
        "stock": 140
      }
    ]
  },
  {
    "id": "ba-25",
    "name": "Vega Professional Sectioning Hair Clips Alligator Claws (12 Pcs)",
    "slug": "vega-professional-sectioning-hair-clips-alligator-claws",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-CLIPS-12PCS-SET",
    "barcode": "8901526401165",
    "hsnCode": "330590",
    "shortDescription": "Double hinged salon sectioning clips holding thick hair firmly.",
    "description": "Authentic Vega Professional Sectioning Hair Clips Alligator Claws (12 Pcs) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 350,
    "sellingPrice": 275,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 213,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80&prod=ba-25",
        "altText": "Vega Professional Sectioning Hair Clips Alligator Claws (12 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-25",
        "sku": "VEG-CLIPS-12PCS-SET",
        "mrp": 350,
        "sellingPrice": 275,
        "stock": 145
      }
    ]
  },
  {
    "id": "ba-26",
    "name": "Professional Salon Barber Apron Waterproof Hair Stylist Cape",
    "slug": "professional-salon-barber-apron-waterproof-hair-stylist-cape",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-BARBER-CAPE-BLK",
    "barcode": "8901526401166",
    "hsnCode": "330590",
    "shortDescription": "Waterproof stain-resistant adjustable neck closure barber cape.",
    "description": "Authentic Professional Salon Barber Apron Waterproof Hair Stylist Cape distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 450,
    "sellingPrice": 360,
    "discountPercent": 20,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 220,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&prod=ba-26",
        "altText": "Professional Salon Barber Apron Waterproof Hair Stylist Cape",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-26",
        "sku": "VEG-BARBER-CAPE-BLK",
        "mrp": 450,
        "sellingPrice": 360,
        "stock": 150
      }
    ]
  },
  {
    "id": "ba-27",
    "name": "Swiss Beauty Eyebrow Trimmer & Precision Shaver Set (3 Pcs)",
    "slug": "swiss-beauty-eyebrow-trimmer-and-precision-shaver-set",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-BROW-RAZOR-3PCS",
    "barcode": "8901526401167",
    "hsnCode": "330590",
    "shortDescription": "Stainless steel safety blade dermaplaning facial razors.",
    "description": "Authentic Swiss Beauty Eyebrow Trimmer & Precision Shaver Set (3 Pcs) distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 199,
    "sellingPrice": 149,
    "discountPercent": 25,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 227,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337094846-8a8385875974?w=800&q=80&prod=ba-27",
        "altText": "Swiss Beauty Eyebrow Trimmer & Precision Shaver Set (3 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-27",
        "sku": "SWI-BROW-RAZOR-3PCS",
        "mrp": 199,
        "sellingPrice": 149,
        "stock": 155
      }
    ]
  },
  {
    "id": "ba-28",
    "name": "Vega Professional Cordless Hair Trimmer Clipper for Men",
    "slug": "vega-professional-cordless-hair-trimmer-clipper-for-men",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-TRIMMER-CORDLESS",
    "barcode": "8901526401168",
    "hsnCode": "330590",
    "shortDescription": "T-blade zero gap stainless steel blade USB rechargeable hair trimmer.",
    "description": "Authentic Vega Professional Cordless Hair Trimmer Clipper for Men distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1890,
    "sellingPrice": 1490,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 234,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&prod=ba-28",
        "altText": "Vega Professional Cordless Hair Trimmer Clipper for Men",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-28",
        "sku": "VEG-TRIMMER-CORDLESS",
        "mrp": 1890,
        "sellingPrice": 1490,
        "stock": 160
      }
    ]
  },
  {
    "id": "ba-29",
    "name": "Professional UV LED Gel Nail Polish Curing Lamp 48W",
    "slug": "professional-uv-led-gel-nail-polish-curing-lamp-48w",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-UV-NAIL-LAMP-48W",
    "barcode": "8901526401169",
    "hsnCode": "330590",
    "shortDescription": "Auto sensor timer 36 LED bead quick dry gel nail lamp for manicures.",
    "description": "Authentic Professional UV LED Gel Nail Polish Curing Lamp 48W distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1650,
    "sellingPrice": 1290,
    "discountPercent": 22,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 241,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1522337651144-8d48a1267860?w=800&q=80&prod=ba-29",
        "altText": "Professional UV LED Gel Nail Polish Curing Lamp 48W",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-29",
        "sku": "VEG-UV-NAIL-LAMP-48W",
        "mrp": 1650,
        "sellingPrice": 1290,
        "stock": 165
      }
    ]
  },
  {
    "id": "ba-30",
    "name": "Vega Professional Ceramic Thermal Brush Set (4 Sizes)",
    "slug": "vega-professional-ceramic-thermal-brush-set",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-ROUND-SET-4PCS",
    "barcode": "8901526401170",
    "hsnCode": "330590",
    "shortDescription": "Complete set of 4 ceramic thermal round brushes for blowouts.",
    "description": "Authentic Vega Professional Ceramic Thermal Brush Set (4 Sizes) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 1890,
    "sellingPrice": 1490,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 248,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&prod=ba-30",
        "altText": "Vega Professional Ceramic Thermal Brush Set (4 Sizes)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-30",
        "sku": "VEG-ROUND-SET-4PCS",
        "mrp": 1890,
        "sellingPrice": 1490,
        "stock": 170
      }
    ]
  },
  {
    "id": "ba-31",
    "name": "Swiss Beauty Travel Makeup Bag Cosmetic Organizer Box",
    "slug": "swiss-beauty-travel-makeup-bag-cosmetic-organizer-box",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-TRAVEL-BAG-ORGAN",
    "barcode": "8901526401171",
    "hsnCode": "330590",
    "shortDescription": "Waterproof adjustable divider cosmetic vanity storage case.",
    "description": "Authentic Swiss Beauty Travel Makeup Bag Cosmetic Organizer Box distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 699,
    "sellingPrice": 549,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 255,
    "isFeatured": true,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1512290900673-70020a7b54d7?w=800&q=80&prod=ba-31",
        "altText": "Swiss Beauty Travel Makeup Bag Cosmetic Organizer Box",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-31",
        "sku": "SWI-TRAVEL-BAG-ORGAN",
        "mrp": 699,
        "sellingPrice": 549,
        "stock": 25
      }
    ]
  },
  {
    "id": "ba-32",
    "name": "Vega Professional Black Hair Dye Tinting Brush Set (10 Pcs)",
    "slug": "vega-professional-black-hair-dye-tinting-brush-set",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-TINT-BRUSH-10PCS",
    "barcode": "8901526401172",
    "hsnCode": "330590",
    "shortDescription": "Soft feather bristle salon bleach and color application brushes.",
    "description": "Authentic Vega Professional Black Hair Dye Tinting Brush Set (10 Pcs) distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 390,
    "sellingPrice": 310,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.9,
    "reviewCount": 262,
    "isFeatured": false,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=800&q=80&prod=ba-32",
        "altText": "Vega Professional Black Hair Dye Tinting Brush Set (10 Pcs)",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-32",
        "sku": "VEG-TINT-BRUSH-10PCS",
        "mrp": 390,
        "sellingPrice": 310,
        "stock": 30
      }
    ]
  },
  {
    "id": "ba-33",
    "name": "Professional Salon Towel Warmer Cabinet Machine 16L",
    "slug": "professional-salon-towel-warmer-cabinet-machine-16l",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-TOWEL-WARMER-16L",
    "barcode": "8901526401173",
    "hsnCode": "330590",
    "shortDescription": "UV sterilizer and hot towel warmer cabinet for facial spas.",
    "description": "Authentic Professional Salon Towel Warmer Cabinet Machine 16L distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 5200,
    "sellingPrice": 4390,
    "discountPercent": 16,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.6,
    "reviewCount": 269,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&prod=ba-33",
        "altText": "Professional Salon Towel Warmer Cabinet Machine 16L",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-33",
        "sku": "VEG-TOWEL-WARMER-16L",
        "mrp": 5200,
        "sellingPrice": 4390,
        "stock": 35
      }
    ]
  },
  {
    "id": "ba-34",
    "name": "Vega Professional Vent Hair Brush for Fast Blow Drying",
    "slug": "vega-professional-vent-hair-brush-for-fast-blow-drying",
    "brand": "Vega Professional",
    "category": "Beauty Accessories & Tools",
    "sku": "VEG-VENT-BRUSH-PRO",
    "barcode": "8901526401174",
    "hsnCode": "330590",
    "shortDescription": "Curved vent design allowing airflow to pass directly through hair.",
    "description": "Authentic Vega Professional Vent Hair Brush for Fast Blow Drying distributed by Vega Professional. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 390,
    "sellingPrice": 310,
    "discountPercent": 21,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.7,
    "reviewCount": 276,
    "isFeatured": true,
    "isBestseller": false,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa909?w=800&q=80&prod=ba-34",
        "altText": "Vega Professional Vent Hair Brush for Fast Blow Drying",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-34",
        "sku": "VEG-VENT-BRUSH-PRO",
        "mrp": 390,
        "sellingPrice": 310,
        "stock": 40
      }
    ]
  },
  {
    "id": "ba-35",
    "name": "Swiss Beauty Dual Sharpener for Lip & Eye Makeup Pencils",
    "slug": "swiss-beauty-dual-sharpener-for-lip-and-eye-makeup-pencils",
    "brand": "Swiss Beauty",
    "category": "Beauty Accessories & Tools",
    "sku": "SWI-SHARPENER-DUAL",
    "barcode": "8901526401175",
    "hsnCode": "330590",
    "shortDescription": "Stainless steel German blades with protective shavings collector.",
    "description": "Authentic Swiss Beauty Dual Sharpener for Lip & Eye Makeup Pencils distributed by Swiss Beauty. Ground Truth stock in Indore HQ.",
    "highlights": [
      "100% Original Brand Product",
      "Indore Local Express Delivery",
      "GST Invoice Provided"
    ],
    "benefits": [
      "High Performance",
      "Long Lasting",
      "Dermatologist / Salon Approved"
    ],
    "ingredients": "Aqua, Natural Extracts, Active Nutrients.",
    "usageInstructions": "Apply as directed on the packaging for optimal results.",
    "mrp": 129,
    "sellingPrice": 99,
    "discountPercent": 23,
    "isVariantParent": false,
    "status": "active",
    "avgRating": 4.8,
    "reviewCount": 283,
    "isFeatured": false,
    "isBestseller": true,
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1608248597263-0057e57b4525?w=800&q=80&prod=ba-35",
        "altText": "Swiss Beauty Dual Sharpener for Lip & Eye Makeup Pencils",
        "isPrimary": true
      }
    ],
    "variants": [
      {
        "id": "v-ba-35",
        "sku": "SWI-SHARPENER-DUAL",
        "mrp": 129,
        "sellingPrice": 99,
        "stock": 45
      }
    ]
  }
]

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
