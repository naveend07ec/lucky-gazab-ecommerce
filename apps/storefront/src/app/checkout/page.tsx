'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { CheckCircle2, Download, CreditCard, ShieldCheck, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState<'shipping' | 'confirmation'>('shipping');

  const [customerName, setCustomerName] = useState('Ananya Sharma');
  const [email, setEmail] = useState('ananya@example.com');
  const [phone, setPhone] = useState('9826012345');
  const [addressLine1, setAddressLine1] = useState('14/2 Vijay Nagar');
  const [city, setCity] = useState('Indore');
  const [state, setState] = useState('Madhya Pradesh');
  const [pincode, setPincode] = useState('452010');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');

  const [placedOrder, setPlacedOrder] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setPlacedOrder({
        id: 'ord-1001',
        orderNumber: 'GAZAB-2026-1001',
        totalAmount: 930,
        subtotal: 855,
        taxAmount: 153.9,
        shippingFee: 75,
        paymentStatus: 'paid',
        paymentMethod: paymentMethod === 'razorpay' ? 'Razorpay (Paid)' : 'Cash on Delivery',
        items: [{ productName: "L'Oréal Professionnel Absolut Repair Hair Mask 250ml", quantity: 1, unitPrice: 855 }]
      });
      setIsSubmitting(false);
      setStep('confirmation');
    }, 600);
  };

  if (step === 'confirmation' && placedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-6 text-center bg-white min-h-[70vh]">
        <CheckCircle2 className="w-16 h-16 text-emerald-700 mx-auto" />
        <h1 className="font-serif text-3xl font-extrabold text-[#111111]">Order Placed Successfully!</h1>
        <p className="text-xs text-neutral-600">
          Thank you for shopping with <strong>{GROUND_TRUTH_DATA.businessName}</strong>. Order ID: <strong>{placedOrder.orderNumber}</strong>
        </p>

        <div className="p-6 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl max-w-xl mx-auto text-left text-xs space-y-3">
          <div className="flex justify-between font-semibold border-b border-[#EAEAEA] pb-2 text-[#111111]">
            <span>Order Reference: {placedOrder.orderNumber}</span>
            <span className="text-emerald-700 font-bold uppercase">{placedOrder.paymentStatus}</span>
          </div>
          <p><strong>Shipping Address:</strong> {addressLine1}, {city}, {state} - {pincode}</p>
          <p><strong>Total Amount:</strong> ₹{placedOrder.totalAmount}</p>

          <div className="pt-3 border-t border-[#EAEAEA]">
            <a
              href={`http://localhost:4000/api/v1/orders/${placedOrder.id}/invoice`}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button-primary w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-[#C8A97E]" />
              <span>Download GST Tax Invoice (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#EAEAEA] pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-[#111111]">Checkout & GST Order Placement</h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-white border border-[#EAEAEA] rounded-2xl space-y-4 text-xs">
              <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#EAEAEA] pb-3">
                1. Shipping Address & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 bg-white border border-[#EAEAEA] rounded-2xl space-y-4 text-xs">
              <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#EAEAEA] pb-3">
                2. Select Payment Method
              </h3>
              <div className="space-y-3">
                <label className={`p-4 border rounded-xl flex items-center space-x-3 cursor-pointer ${paymentMethod === 'razorpay' ? 'border-[#111111] bg-[#F8F8F8]' : 'border-[#EAEAEA]'}`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'razorpay'}
                    onChange={() => setPaymentMethod('razorpay')}
                  />
                  <div>
                    <span className="font-bold text-[#111111] block">Razorpay Online Gateway (UPI / Credit Card / Debit Card)</span>
                    <span className="text-neutral-500">Instant GST Invoice generated upon successful payment</span>
                  </div>
                </label>

                <label className={`p-4 border rounded-xl flex items-center space-x-3 cursor-pointer ${paymentMethod === 'cod' ? 'border-[#111111] bg-[#F8F8F8]' : 'border-[#EAEAEA]'}`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <div>
                    <span className="font-bold text-[#111111] block">Cash on Delivery (COD)</span>
                    <span className="text-neutral-500">Pay cash upon delivery in Indore</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Sidebar Order Summary */}
          <div className="p-6 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl space-y-4 text-xs h-fit">
            <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#EAEAEA] pb-3">
              Order Breakdown
            </h3>
            <div className="space-y-2 text-neutral-700">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>₹855</span>
              </div>
              <div className="flex justify-between">
                <span>GST Tax (18% MP Split)</span>
                <span>₹153.90</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>₹75</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#111111] pt-3 border-t border-[#EAEAEA]">
                <span>Total Amount</span>
                <span>₹930</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="luxury-button-primary w-full py-4 rounded-xl font-bold text-sm"
            >
              {isSubmitting ? 'Processing Order...' : 'Confirm Order & Pay ₹930'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
