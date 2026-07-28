import { Router, Request, Response, NextFunction } from 'express';
import { CmsBlogService } from '../services/cms-blog.service';
import { authMiddleware, requirePermission, AuthenticatedRequest } from '../common/middleware';

const router = Router();

router.get('/blog/posts', (req: Request, res: Response) => {
  const posts = CmsBlogService.getBlogPosts();
  res.json({ success: true, data: posts });
});

router.get('/blog/posts/:slug', (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = CmsBlogService.getBlogPostBySlug(req.params.slug);
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
});

router.post('/blog/posts', authMiddleware, requirePermission('products.create'), (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const post = CmsBlogService.createBlogPost(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
});

router.get('/pages', (req: Request, res: Response) => {
  const pages = CmsBlogService.getCmsPages();
  res.json({ success: true, data: pages });
});

router.get('/pages/:slug', (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = CmsBlogService.getCmsPageBySlug(req.params.slug);
    res.json({ success: true, data: page });
  } catch (err) {
    next(err);
  }
});

export const cmsBlogController = router;
