import { CouponInvalidError, InsufficientStockError } from '../common/errors';
import { initialCoupons } from './store';

export interface CartItemInput {
  productId: string;
  variantId: string;
  quantity: number;
  unitPrice: number;
  productName: string;
  sku: string;
}

export interface CheckoutCalculateInput {
  items: CartItemInput[];
  couponCode?: string;
  shippingState?: string;
  shippingPincode?: string;
}

export class CheckoutService {
  private static coupons = [...initialCoupons];

  static validateCoupon(code: string, cartSubtotal: number) {
    const coupon = this.coupons.find(c => c.code.toUpperCase() === code.toUpperCase() && c.status === 'active');
    if (!coupon) {
      throw new CouponInvalidError(`Coupon '${code}' is invalid or expired.`);
    }

    if (cartSubtotal < coupon.minCartValue) {
      throw new CouponInvalidError(`Coupon '${code}' requires a minimum cart value of ₹${coupon.minCartValue}`);
    }

    let discount = 0;
    if (coupon.type === 'percentage') {
      discount = (cartSubtotal * coupon.value) / 100;
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else {
      discount = coupon.value;
    }

    return {
      couponId: coupon.id,
      code: coupon.code,
      discountAmount: Math.round(discount),
      minCartValue: coupon.minCartValue
    };
  }

  static calculateTotals(input: CheckoutCalculateInput) {
    if (!input.items || input.items.length === 0) {
      return {
        subtotal: 0,
        discountAmount: 0,
        shippingAmount: 0,
        gstBreakdown: { cgst: 0, sgst: 0, igst: 0, totalTax: 0, ratePercent: 18 },
        totalAmount: 0,
        itemsCount: 0
      };
    }

    const subtotal = input.items.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

    let discountAmount = 0;
    let appliedCoupon = null;

    if (input.couponCode) {
      const validRes = this.validateCoupon(input.couponCode, subtotal);
      discountAmount = validRes.discountAmount;
      appliedCoupon = validRes;
    }

    const discountedSubtotal = Math.max(0, subtotal - discountAmount);

    // Free shipping above ₹999, else flat ₹75 for Indore & pan-India
    const shippingAmount = discountedSubtotal >= 999 ? 0 : 75;

    // GST Calculation (Default 18% inclusive/exclusive tax breakdown)
    // Seller State: Madhya Pradesh (MP). If customer state is Madhya Pradesh -> CGST 9% + SGST 9%. Else -> IGST 18%
    const isSameState = !input.shippingState || input.shippingState.toLowerCase().includes('madhya pradesh') || input.shippingState.toLowerCase() === 'mp';

    const taxRatePercent = 18;
    const totalTax = Math.round((discountedSubtotal * taxRatePercent) / 100);

    let cgst = 0;
    let sgst = 0;
    let igst = 0;

    if (isSameState) {
      cgst = Math.round(totalTax / 2);
      sgst = Math.round(totalTax / 2);
    } else {
      igst = totalTax;
    }

    const totalAmount = discountedSubtotal + shippingAmount;

    return {
      subtotal,
      discountAmount,
      appliedCoupon,
      shippingAmount,
      gstBreakdown: {
        cgst,
        sgst,
        igst,
        totalTax,
        ratePercent: taxRatePercent,
        isSameState
      },
      totalAmount,
      itemsCount: input.items.reduce((acc, i) => acc + i.quantity, 0)
    };
  }
}
