import { prisma } from './db';
import { initialProducts, initialBrands, initialCategories, initialCoupons, ProductItem } from '../services/store';

export class Repository {
  static async getProducts(filter?: { category?: string; brand?: string; search?: string }) {
    try {
      if (prisma.product) {
        const where: any = { deletedAt: null };
        if (filter?.category) {
          where.category = { slug: filter.category };
        }
        if (filter?.brand) {
          where.brand = { slug: filter.brand };
        }
        if (filter?.search) {
          where.OR = [
            { name: { contains: filter.search, mode: 'insensitive' } },
            { sku: { contains: filter.search, mode: 'insensitive' } },
            { description: { contains: filter.search, mode: 'insensitive' } }
          ];
        }

        const items = await prisma.product.findMany({
          where,
          include: { brand: true, category: true, variants: true, images: true }
        });

        if (items && items.length > 0) {
          return items.map(p => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            brand: p.brand?.name || 'Lucky Collection',
            category: p.category?.name || 'Branded Cosmetics',
            sku: p.sku,
            barcode: p.barcode || undefined,
            hsnCode: p.hsnCode || undefined,
            shortDescription: p.shortDescription || '',
            description: p.description || '',
            highlights: (p.highlights as string[]) || [],
            benefits: (p.benefits as string[]) || [],
            ingredients: p.ingredients || '',
            usageInstructions: p.usageInstructions || '',
            mrp: Number(p.mrp),
            sellingPrice: Number(p.sellingPrice),
            discountPercent: Math.round(((Number(p.mrp) - Number(p.sellingPrice)) / Number(p.mrp)) * 100),
            isVariantParent: p.isVariantParent,
            status: p.status as any,
            avgRating: Number(p.avgRating),
            reviewCount: p.reviewCount,
            images: p.images.map(i => ({ url: i.url, altText: i.altText, isPrimary: i.isPrimary })),
            variants: p.variants.map(v => ({
              id: v.id,
              sku: v.sku,
              size: v.size || undefined,
              color: v.color || undefined,
              shade: v.shade || undefined,
              mrp: Number(v.mrp || p.mrp),
              sellingPrice: Number(v.sellingPrice || p.sellingPrice),
              stock: 25
            }))
          }));
        }
      }
    } catch {
      // Prisma DB unavailable fallback
    }

    return initialProducts;
  }
}
