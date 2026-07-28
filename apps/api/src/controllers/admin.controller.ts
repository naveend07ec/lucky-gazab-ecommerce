import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware, requirePermission, AuthenticatedRequest } from '../common/middleware';
import { CatalogService } from '../services/catalog.service';
import { BulkImportService } from '../services/bulk-import.service';
import { MediaService } from '../services/media.service';
import { QueueService } from '../jobs/queue.service';
import { OrderService } from '../services/order.service';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

const router = Router();

router.use(authMiddleware);

router.get('/dashboard', (req: AuthenticatedRequest, res: Response) => {
  const orders = OrderService.getOrders({ limit: 100 }).data;
  const totalRevenue = orders.reduce((acc, o) => acc + (o.paymentStatus === 'paid' ? o.totalAmount : 0), 0);
  const products = CatalogService.getProducts({ limit: 100 }).data;
  const queueStatus = QueueService.getQueueStatus();

  res.json({
    success: true,
    data: {
      businessName: GROUND_TRUTH_DATA.businessName,
      totalOrders: orders.length,
      totalRevenue,
      pendingOrders: orders.filter(o => o.status === 'pending' || o.status === 'processing').length,
      lowStockProducts: products.filter(p => p.variants.some(v => v.stock < 10)).length,
      queueStatus,
      recentOrders: orders.slice(0, 5)
    }
  });
});

router.post('/products', requirePermission('products.create'), (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const product = CatalogService.createProduct(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
});

router.post('/products/bulk-upload', requirePermission('products.create'), (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { rows } = req.body;
    const result = BulkImportService.processBulkImport(rows || []);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.get('/media', (req: AuthenticatedRequest, res: Response) => {
  const result = MediaService.getMediaList();
  res.json({ success: true, ...result });
});

router.post('/media/upload', (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const media = MediaService.uploadMedia(req.body);
    res.status(201).json({ success: true, data: media });
  } catch (err) {
    next(err);
  }
});

router.patch('/orders/:id/status', requirePermission('orders.update'), (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;
    const updated = OrderService.updateOrderStatus(req.params.id, status);
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
});

router.get('/reports/sales', requirePermission('reports.view'), (req: AuthenticatedRequest, res: Response) => {
  const orders = OrderService.getOrders({ limit: 50 }).data;
  res.json({
    success: true,
    data: {
      reportType: 'sales_summary',
      generatedAt: new Date(),
      totalSales: orders.length,
      orders
    }
  });
});

export const adminRouter = router;
