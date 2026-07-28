import { Router, Request, Response, NextFunction } from 'express';
import { CheckoutService } from '../services/checkout.service';

const router = Router();

router.post('/calculate', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { items, couponCode, shippingState, shippingPincode } = req.body;
    const totals = CheckoutService.calculateTotals({
      items,
      couponCode,
      shippingState,
      shippingPincode
    });
    res.json({ success: true, data: totals });
  } catch (err) {
    next(err);
  }
});

router.post('/coupon/apply', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { code, cartSubtotal } = req.body;
    const couponResult = CheckoutService.validateCoupon(code, Number(cartSubtotal || 0));
    res.json({ success: true, data: couponResult });
  } catch (err) {
    next(err);
  }
});

export const checkoutRouter = router;
