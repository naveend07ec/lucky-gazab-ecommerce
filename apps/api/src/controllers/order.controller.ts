import { Router, Request, Response, NextFunction } from 'express';
import { OrderService } from '../services/order.service';

const router = Router();

router.post('/create', (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = OrderService.createOrder(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

router.post('/verify-payment', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderId, paymentId, signature } = req.body;
    const verifiedOrder = OrderService.verifyRazorpayPayment(orderId, paymentId, signature);
    res.json({ success: true, data: verifiedOrder });
  } catch (err) {
    next(err);
  }
});

router.get('/track', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderNumber, phone, email } = req.query;
    if (!orderNumber) {
      return res.status(400).json({ success: false, error: { code: 'VALIDATION_ERROR', message: 'Order number is required' } });
    }
    const order = OrderService.getOrderById(String(orderNumber));
    if (phone && order.customerPhone !== phone && order.customerEmail !== email) {
      return res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'No matching order found for provided phone/email' } });
    }
    res.json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = OrderService.getOrderById(req.params.id);
    res.json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

router.get('/:id/invoice', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pdfBuffer = await OrderService.generateInvoicePdf(req.params.id);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=Invoice-${req.params.id}.pdf`);
    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
});

export const orderRouter = router;
