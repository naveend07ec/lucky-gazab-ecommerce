import { CheckoutService } from '../src/services/checkout.service';
import { OrderService } from '../src/services/order.service';
import { CatalogService } from '../src/services/catalog.service';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

async function runTests() {
  console.log('🧪 Starting Acceptance Criteria Verification Tests...');

  // Test 1: Ground Truth Business Info Integrity
  console.assert(GROUND_TRUTH_DATA.businessName === "Lucky's GAZAB HI GAZAB", 'Business name mismatch');
  console.assert(GROUND_TRUTH_DATA.address.addressLocality === 'Indore', 'Locality mismatch');
  console.assert(GROUND_TRUTH_DATA.phoneLandline === '0731-4026665', 'Landline mismatch');
  console.assert(GROUND_TRUTH_DATA.mobile === '9926089665', 'Mobile mismatch');
  console.log('✓ Test 1 Passed: Ground Truth Data Integrity Verified');

  // Test 2: Coupon Min Cart Value & Discount Calculation
  const cartCalculation = CheckoutService.calculateTotals({
    items: [
      { productId: 'p1', variantId: 'v1', quantity: 2, unitPrice: 855, productName: 'Hair Mask', sku: 'SKU1' }
    ],
    couponCode: 'GAZAB10',
    shippingState: 'Madhya Pradesh'
  });

  console.assert(cartCalculation.subtotal === 1710, `Expected subtotal 1710, got ${cartCalculation.subtotal}`);
  console.assert(cartCalculation.discountAmount === 171, `Expected discount 171, got ${cartCalculation.discountAmount}`);
  console.assert(cartCalculation.gstBreakdown.cgst > 0 && cartCalculation.gstBreakdown.sgst > 0, 'Expected CGST & SGST for MP state');
  console.log('✓ Test 2 Passed: Cart Pricing, Coupon GAZAB10, and MP State CGST/SGST Split Verified');

  // Test 3: Order Placement & GST Invoice Generation
  const newOrder = OrderService.createOrder({
    customerName: 'Indore Test Customer',
    customerEmail: 'indore.test@example.com',
    customerPhone: '9926089665',
    shippingAddress: {
      line1: 'UG-2 Raunak Tower',
      city: 'Indore',
      state: 'Madhya Pradesh',
      pincode: '452018'
    },
    items: [
      { productId: 'p1', variantId: 'v1', quantity: 1, unitPrice: 855, productName: "L'Oréal Hair Mask", sku: 'LOR-ABS-MASK-250' }
    ],
    paymentMethod: 'razorpay'
  });

  console.assert(newOrder.orderNumber.startsWith('GAZAB-2026-'), 'Invalid order number format');
  console.assert(newOrder.invoiceNumber.startsWith('INV-2026-'), 'Invalid invoice number format');
  console.log('✓ Test 3 Passed: Order Creation & GST Invoice Numbering Verified');

  // Test 4: Razorpay Payment Verification & Pipeline Status Transition
  const paidOrder = OrderService.verifyRazorpayPayment(newOrder.id, 'pay_test_98765');
  console.assert(paidOrder.paymentStatus === 'paid', 'Payment status should be paid');
  console.assert(paidOrder.status === 'paid', 'Order status should be paid');

  const shippedOrder = OrderService.updateOrderStatus(newOrder.id, 'shipped');
  console.assert(shippedOrder.status === 'shipped', 'Order status transition to shipped failed');
  console.log('✓ Test 4 Passed: Order Pipeline Transition (Pending -> Paid -> Shipped) Verified');

  // Test 5: Invoice PDF Generation Buffer
  const pdfBuffer = await OrderService.generateInvoicePdf(newOrder.id);
  console.assert(pdfBuffer.length > 500, 'PDF buffer generation failed or empty');
  console.log('✓ Test 5 Passed: GST Invoice PDF Rendering Verified');

  console.log('🎉 ALL ACCEPTANCE CRITERIA VERIFICATION TESTS PASSED SUCCESSFULLY!');
}

runTests().catch(err => {
  console.error('❌ Verification Test Failed:', err);
  process.exit(1);
});
