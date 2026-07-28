import { initialBrands, initialCategories, initialProducts, ProductItem } from './store';
import { NotFoundError } from '../common/errors';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

export class CatalogService {
  private static products: ProductItem[] = [...initialProducts];
  private static categories = [...initialCategories];
  private static brands = [...initialBrands];

  static getProducts(query: {
    category?: string;
    brand?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
    sort?: 'price_asc' | 'price_desc' | 'rating' | 'newest';
    page?: number;
    limit?: number;
  }) {
    let list = [...this.products];

    if (query.category) {
      const catSlug = query.category.toLowerCase();
      list = list.filter(p =>
        p.category.toLowerCase().replace(/\s+/g, '-').includes(catSlug) ||
        p.category.toLowerCase() === catSlug
      );
    }

    if (query.brand) {
      const brandSlug = query.brand.toLowerCase();
      list = list.filter(p =>
        p.brand.toLowerCase().replace(/\s+/g, '-').includes(brandSlug) ||
        p.brand.toLowerCase() === brandSlug
      );
    }

    if (query.search) {
      const q = query.search.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
      );
    }

    if (query.minPrice !== undefined) {
      list = list.filter(p => p.sellingPrice >= query.minPrice!);
    }
    if (query.maxPrice !== undefined) {
      list = list.filter(p => p.sellingPrice <= query.maxPrice!);
    }

    if (query.sort === 'price_asc') {
      list.sort((a, b) => a.sellingPrice - b.sellingPrice);
    } else if (query.sort === 'price_desc') {
      list.sort((a, b) => b.sellingPrice - a.sellingPrice);
    } else if (query.sort === 'rating') {
      list.sort((a, b) => b.avgRating - a.avgRating);
    }

    const page = query.page || 1;
    const limit = query.limit || 12;
    const startIndex = (page - 1) * limit;
    const paginated = list.slice(startIndex, startIndex + limit);

    return {
      data: paginated,
      meta: {
        page,
        limit,
        total: list.length,
        totalPages: Math.ceil(list.length / limit)
      }
    };
  }

  static getProductBySlug(slug: string) {
    const p = this.products.find(item => item.slug === slug || item.id === slug);
    if (!p) {
      throw new NotFoundError(`Product with slug '${slug}' not found`);
    }

    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": p.name,
      "image": p.images.map(img => img.url),
      "description": p.description,
      "sku": p.sku,
      "brand": {
        "@type": "Brand",
        "name": p.brand
      },
      "offers": {
        "@type": "Offer",
        "url": `https://luckygazab.com/product/${p.slug}`,
        "priceCurrency": "INR",
        "price": p.sellingPrice,
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": GROUND_TRUTH_DATA.businessName
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": p.avgRating,
        "reviewCount": p.reviewCount
      }
    };

    return { product: p, jsonLd };
  }

  static getCategories() {
    return this.categories;
  }

  static getBrands() {
    return this.brands;
  }

  static createProduct(newP: Partial<ProductItem>) {
    const item: ProductItem = {
      id: `p-${Date.now()}`,
      name: newP.name || 'New Cosmetics Product',
      slug: (newP.name || 'new-product').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      brand: newP.brand || 'Lucky Collection',
      category: newP.category || 'Branded Cosmetics & Makeup',
      sku: newP.sku || `SKU-${Date.now()}`,
      shortDescription: newP.shortDescription || '',
      description: newP.description || '',
      highlights: newP.highlights || [],
      benefits: newP.benefits || [],
      ingredients: newP.ingredients || '',
      usageInstructions: newP.usageInstructions || '',
      mrp: newP.mrp || 500,
      sellingPrice: newP.sellingPrice || 450,
      discountPercent: Math.round((((newP.mrp || 500) - (newP.sellingPrice || 450)) / (newP.mrp || 500)) * 100),
      isVariantParent: false,
      status: 'active',
      avgRating: 5.0,
      reviewCount: 1,
      images: newP.images || [
        { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', altText: newP.name || 'Product Image', isPrimary: true }
      ],
      variants: newP.variants || [
        { id: `v-${Date.now()}`, sku: newP.sku || `SKU-${Date.now()}`, size: 'Standard', mrp: newP.mrp || 500, sellingPrice: newP.sellingPrice || 450, stock: 25 }
      ]
    };

    this.products.unshift(item);
    return item;
  }
}
