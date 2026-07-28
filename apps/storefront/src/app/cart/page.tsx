'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Trash2, Tag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>({
    code: 'GAZAB10',
    discount: 85
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 'item-1',
      name: 'L\'Oréal Professionnel Absolut Repair Hair Mask',
      variant: '250ml Jar',
      price: 855,
      mrp: 950,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80'
    }
  ]);

  const subtotal = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const shipping = subtotal - discount >= 999 ? 0 : 75;
  const grandTotal = Math.max(0, subtotal - discount) + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'GAZAB10') {
      setAppliedCoupon({ code: 'GAZAB10', discount: Math.round((subtotal * 10) / 100) });
    } else if (couponCode.toUpperCase() === 'WELCOME200') {
      setAppliedCoupon({ code: 'WELCOME200', discount: 200 });
    } else {
      alert("Invalid coupon code. Try 'GAZAB10' or 'WELCOME200'");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4 bg-white min-h-[60vh]">
        <div className="w-16 h-16 bg-[#F8F8F8] border border-[#EAEAEA] text-neutral-400 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8 text-[#C8A97E]" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#111111]">Your Shopping Bag is Empty</h2>
        <p className="text-xs text-neutral-500">Explore our luxury beauty and salon professional collection.</p>
        <Link href="/products" className="luxury-button-primary inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-xs">
          <span>Explore Collections</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#EAEAEA] pb-4">
          <h1 className="font-serif text-3xl font-extrabold text-[#111111] flex items-center">
            <ShoppingBag className="w-8 h-8 mr-3 text-[#C8A97E]" />
            Your Shopping Bag ({cartItems.length})
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-[#EAEAEA] rounded-xl flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-[#F8F8F8] shrink-0" />
                <div className="flex-1 space-y-1">
                  <h3 className="font-serif text-sm font-bold text-[#111111]">{item.name}</h3>
                  <span className="text-[11px] text-neutral-500 block">{item.variant}</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-sm font-extrabold text-[#111111]">₹{item.price}</span>
                    <span className="text-xs text-neutral-400 line-through">₹{item.mrp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-semibold text-neutral-600">Qty: {item.quantity}</span>
                  <button
                    onClick={() => setCartItems([])}
                    className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Checkout Box */}
          <div className="p-6 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl space-y-6 text-xs">
            <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#EAEAEA] pb-3">
              Order Summary
            </h3>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <label className="block text-neutral-700 font-semibold">Apply Voucher or Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Try GAZAB10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-white border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs uppercase"
                />
                <button type="submit" className="luxury-button-primary px-4 py-2 text-xs rounded-lg font-bold">
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <span className="text-[11px] text-emerald-700 font-semibold block">
                  ✓ Voucher <strong>{appliedCoupon.code}</strong> applied (-₹{appliedCoupon.discount})
                </span>
              )}
            </form>

            <div className="space-y-3 pt-3 border-t border-[#EAEAEA] text-neutral-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#111111]">₹{subtotal}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Voucher Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-[#111111] pt-3 border-t border-[#EAEAEA]">
                <span>Grand Total</span>
                <span className="text-lg">₹{grandTotal}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="luxury-button-primary w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
