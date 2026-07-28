import PDFDocument from 'pdfkit';
import { CheckoutService, CheckoutCalculateInput } from './checkout.service';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { NotFoundError } from '../common/errors';

export interface CreateOrderInput extends CheckoutCalculateInput {
  userId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: 'razorpay' | 'cod' | 'upi' | 'card';
}

export interface OrderRecord {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: any;
  items: any[];
  subtotal: number;
  discountAmount: number;
  shippingAmount: number;
  taxAmount: number;
  totalAmount: number;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'refunded';
  paymentMethod: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  invoiceNumber: string;
  placedAt: Date;
  updatedAt: Date;
}

const ordersStore: OrderRecord[] = [];

export class OrderService {
  static createOrder(input: CreateOrderInput) {
    const calc = CheckoutService.calculateTotals({
      items: input.items,
      couponCode: input.couponCode,
      shippingState: input.shippingAddress.state,
      shippingPincode: input.shippingAddress.pincode
    });

    const orderCount = ordersStore.length + 1001;
    const orderNumber = `GAZAB-2026-${orderCount}`;
    const invoiceNumber = `INV-2026-${String(orderCount).padStart(4, '0')}`;

    const newOrder: OrderRecord = {
      id: `ord-${Date.now()}`,
      orderNumber,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      customerPhone: input.customerPhone,
      shippingAddress: input.shippingAddress,
      items: input.items,
      subtotal: calc.subtotal,
      discountAmount: calc.discountAmount,
      shippingAmount: calc.shippingAmount,
      taxAmount: calc.gstBreakdown.totalTax,
      totalAmount: calc.totalAmount,
      status: input.paymentMethod === 'cod' ? 'processing' : 'pending',
      paymentStatus: input.paymentMethod === 'cod' ? 'unpaid' : 'unpaid',
      paymentMethod: input.paymentMethod,
      razorpayOrderId: input.paymentMethod === 'razorpay' ? `order_${Math.random().toString(36).substring(2, 12)}` : undefined,
      invoiceNumber,
      placedAt: new Date(),
      updatedAt: new Date()
    };

    ordersStore.unshift(newOrder);
    return newOrder;
  }

  static verifyRazorpayPayment(orderId: string, paymentId: string, signature?: string) {
    const order = ordersStore.find(o => o.id === orderId || o.orderNumber === orderId);
    if (!order) {
      throw new NotFoundError(`Order ${orderId} not found`);
    }

    order.paymentStatus = 'paid';
    order.status = 'paid';
    order.razorpayPaymentId = paymentId || `pay_${Math.random().toString(36).substring(2, 12)}`;
    order.updatedAt = new Date();

    return order;
  }

  static getOrders(query?: { status?: string; page?: number; limit?: number }) {
    let list = [...ordersStore];
    if (query?.status) {
      list = list.filter(o => o.status === query.status);
    }
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const paginated = list.slice((page - 1) * limit, page * limit);

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

  static getOrderById(id: string) {
    const order = ordersStore.find(o => o.id === id || o.orderNumber === id);
    if (!order) {
      throw new NotFoundError(`Order with ID '${id}' not found`);
    }
    return order;
  }

  static updateOrderStatus(id: string, status: OrderRecord['status']) {
    const order = this.getOrderById(id);
    order.status = status;
    order.updatedAt = new Date();
    return order;
  }

  static generateInvoicePdf(id: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const order = this.getOrderById(id);
      const doc = new PDFDocument({ margin: 40 });
      const buffers: Buffer[] = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      // Header
      doc.fontSize(20).fillColor('#c026d3').text(GROUND_TRUTH_DATA.businessName, { align: 'center' });
      doc.fontSize(10).fillColor('#4b5563').text(GROUND_TRUTH_DATA.tagline, { align: 'center' });
      doc.text(`${GROUND_TRUTH_DATA.address.streetAddress}, ${GROUND_TRUTH_DATA.address.addressLocality}, ${GROUND_TRUTH_DATA.address.postalCode}`, { align: 'center' });
      doc.text(`Phone: ${GROUND_TRUTH_DATA.phoneLandline} | Mobile: ${GROUND_TRUTH_DATA.mobile} | Email: ${GROUND_TRUTH_DATA.email}`, { align: 'center' });
      doc.moveDown(1.5);

      doc.fontSize(14).fillColor('#111827').text(`TAX INVOICE — ${order.invoiceNumber}`);
      doc.fontSize(10).text(`Order Number: ${order.orderNumber} | Date: ${order.placedAt.toLocaleDateString()}`);
      doc.text(`Payment Status: ${order.paymentStatus.toUpperCase()} (${order.paymentMethod})`);
      doc.moveDown();

      // Billed & Shipped To
      doc.fontSize(11).fillColor('#c026d3').text('Customer Details:');
      doc.fontSize(10).fillColor('#111827').text(`Name: ${order.customerName}`);
      doc.text(`Email: ${order.customerEmail} | Phone: ${order.customerPhone}`);
      doc.text(`Address: ${order.shippingAddress.line1}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}`);
      doc.moveDown();

      // Table Header
      doc.fontSize(10).fillColor('#374151').text('Item / Description', 40, doc.y, { width: 250 });
      doc.text('Qty', 300, doc.y, { width: 50, align: 'right' });
      doc.text('Price (INR)', 370, doc.y, { width: 80, align: 'right' });
      doc.text('Total', 460, doc.y, { width: 80, align: 'right' });
      doc.moveDown(0.5);

      // Items
      order.items.forEach((item: any) => {
        doc.fontSize(9).fillColor('#111827').text(item.productName, 40, doc.y, { width: 250 });
        doc.text(String(item.quantity), 300, doc.y, { width: 50, align: 'right' });
        doc.text(`Rs. ${item.unitPrice}`, 370, doc.y, { width: 80, align: 'right' });
        doc.text(`Rs. ${item.quantity * item.unitPrice}`, 460, doc.y, { width: 80, align: 'right' });
        doc.moveDown(0.5);
      });

      doc.moveDown();
      doc.fontSize(10).fillColor('#374151');
      doc.text(`Subtotal: Rs. ${order.subtotal}`, { align: 'right' });
      doc.text(`Discount: - Rs. ${order.discountAmount}`, { align: 'right' });
      doc.text(`Shipping: Rs. ${order.shippingAmount}`, { align: 'right' });
      doc.text(`GST (Included/Added): Rs. ${order.taxAmount}`, { align: 'right' });
      doc.moveDown(0.5);
      doc.fontSize(12).fillColor('#c026d3').text(`Grand Total: Rs. ${order.totalAmount}`, { align: 'right' });

      doc.end();
    });
  }
}
