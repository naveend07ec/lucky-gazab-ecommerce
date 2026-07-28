import { Router, Request, Response, NextFunction } from 'express';
import { CatalogService } from '../services/catalog.service';
import { ReviewService } from '../services/review.service';

const router = Router();

router.get('/products', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, brand, search, minPrice, maxPrice, sort, page, limit } = req.query;
    const result = CatalogService.getProducts({
      category: category as string,
      brand: brand as string,
      search: search as string,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      sort: sort as any,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 12
    });
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
});

router.get('/search/autocomplete', (req: Request, res: Response) => {
  const query = (req.query.q as string || '').toLowerCase().trim();
  if (!query) {
    return res.json({ success: true, data: [] });
  }
  const products = CatalogService.getProducts({ search: query, limit: 5 }).data;
  const suggestions = products.map(p => ({
    id: p.id,
    name: p.name,
    slug: p.slug,
    brand: p.brand,
    category: p.category,
    sellingPrice: p.sellingPrice,
    thumbnail: p.images[0]?.url || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80'
  }));
  res.json({ success: true, data: suggestions });
});

router.get('/products/:slug', (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = CatalogService.getProductBySlug(req.params.slug);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.get('/products/:id/reviews', (req: Request, res: Response) => {
  const reviews = ReviewService.getProductReviews(req.params.id);
  res.json({ success: true, data: reviews });
});

router.post('/products/:id/reviews', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userName, rating, title, comment } = req.body;
    const review = ReviewService.submitReview({
      productId: req.params.id,
      userName: userName || 'Customer',
      rating: Number(rating || 5),
      title: title || 'Great product',
      comment: comment || ''
    });
    res.status(201).json({ success: true, data: review });
  } catch (err) {
    next(err);
  }
});

router.get('/categories', (req: Request, res: Response) => {
  const categories = CatalogService.getCategories();
  res.json({ success: true, data: categories });
});

router.get('/brands', (req: Request, res: Response) => {
  const brands = CatalogService.getBrands();
  res.json({ success: true, data: brands });
});

export const catalogRouter = router;
