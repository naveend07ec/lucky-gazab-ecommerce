'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { User, ShoppingBag, Heart, MapPin, HelpCircle, LogOut, Download, Truck, RefreshCw, Calendar, Mail, Phone, Edit3, ShieldCheck } from 'lucide-react';

export default function AccountPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'support'>('orders');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/account');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-white text-xs text-[#6B7280]">
        Redirecting to login...
      </div>
    );
  }

  // Sample real customer orders
  const sampleOrders = [
    {
      id: 'ord-1001',
      orderNumber: 'GAZAB-2026-1001',
      placedAt: '2026-07-27',
      status: 'delivered',
      totalAmount: 930,
      paymentMethod: 'Razorpay Online (Paid)',
      items: [
        {
          name: "L'Oréal Professionnel Absolut Repair Hair Mask",
          size: '250ml Jar',
          quantity: 1,
          price: 855,
          image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80'
        }
      ]
    }
  ];

  return (
    <div className="bg-[#F8F8F8] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-[#E5E7EB] pb-4 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">
              Client Portal
            </span>
            <h1 className="font-serif text-3xl font-extrabold text-[#111111]">
              My Account Dashboard
            </h1>
          </div>
          <button
            onClick={logout}
            className="luxury-button-secondary px-4 py-2 text-xs rounded-lg font-semibold flex items-center space-x-1.5 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Dashboard Layout: Profile Card + Main Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column: Profile Card & Navigation Menu */}
          <div className="space-y-6">
            
            {/* User Profile Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4 text-center">
              <div className="w-20 h-20 bg-[#8B1E3F] text-white font-serif text-3xl font-bold rounded-full flex items-center justify-center mx-auto shadow-md border-2 border-white">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#111111]">
                  {user?.name || 'Valued Customer'}
                </h3>
                <p className="text-xs text-[#6B7280]">{user?.email || GROUND_TRUTH_DATA.email}</p>
                <div className="inline-flex items-center space-x-1 text-[11px] text-[#8B1E3F] font-semibold bg-[#FBF2F4] px-2.5 py-0.5 rounded-full mt-2 border border-[#F3D5DC]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VIP Beauty Member</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] text-left text-xs space-y-2 text-[#374151]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#8B1E3F]" />
                  <span>{user?.phone || GROUND_TRUTH_DATA.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#8B1E3F]" />
                  <span>Member Since July 2026</span>
                </div>
              </div>
            </div>

            {/* Navigation Cards List */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-2 shadow-sm space-y-1 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'orders' ? 'bg-[#8B1E3F] text-white shadow' : 'text-[#374151] hover:bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-4 h-4" />
                  <span>My Orders</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">{sampleOrders.length}</span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'wishlist' ? 'bg-[#8B1E3F] text-white shadow' : 'text-[#374151] hover:bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4" />
                  <span>Saved Wishlist</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">0</span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'addresses' ? 'bg-[#8B1E3F] text-white shadow' : 'text-[#374151] hover:bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Saved Addresses</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('support')}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === 'support' ? 'bg-[#8B1E3F] text-white shadow' : 'text-[#374151] hover:bg-[#F8F8F8]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-4 h-4" />
                  <span>Customer Support</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Content Tab */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#E5E7EB]">
                  <h2 className="font-serif text-lg font-bold text-[#111111]">Order History</h2>
                  <span className="text-xs text-[#6B7280]">Showing {sampleOrders.length} recent order</span>
                </div>

                {sampleOrders.map((ord) => (
                  <div key={ord.id} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm space-y-4">
                    
                    {/* Order Top Bar */}
                    <div className="flex flex-wrap justify-between items-center pb-4 border-b border-[#E5E7EB] text-xs gap-2">
                      <div>
                        <span className="font-serif text-base font-extrabold text-[#111111]">{ord.orderNumber}</span>
                        <span className="text-[#6B7280] text-[11px] block">Placed on {ord.placedAt}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="bg-emerald-50 text-[#16A34A] border border-emerald-200 font-bold px-3 py-1 rounded-full text-[11px] uppercase">
                          ✓ {ord.status}
                        </span>
                        <span className="font-bold text-[#111111]">Total: ₹{ord.totalAmount}</span>
                      </div>
                    </div>

                    {/* Order Line Items */}
                    <div className="space-y-3">
                      {ord.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-4 p-3 bg-[#F8F8F8] rounded-xl border border-[#E5E7EB]">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-white shrink-0" />
                          <div className="flex-1 space-y-1 text-xs">
                            <h4 className="font-serif font-bold text-[#111111]">{item.name}</h4>
                            <span className="text-[#6B7280] text-[11px] block">Variant: {item.size} • Qty: {item.quantity}</span>
                            <span className="font-bold text-[#111111]">₹{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Actions */}
                    <div className="pt-2 flex flex-wrap gap-3 justify-end text-xs">
                      <Link
                        href={`/track-order?orderNumber=${ord.orderNumber}`}
                        className="luxury-button-secondary px-4 py-2 rounded-lg font-semibold flex items-center space-x-1.5"
                      >
                        <Truck className="w-3.5 h-3.5 text-[#8B1E3F]" />
                        <span>Track Order Pipeline</span>
                      </Link>

                      <a
                        href={`http://localhost:4000/api/v1/orders/${ord.id}/invoice`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="luxury-button-primary px-4 py-2 rounded-lg font-semibold flex items-center space-x-1.5"
                      >
                        <Download className="w-3.5 h-3.5 text-white" />
                        <span>Download GST Invoice PDF</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center space-y-3 shadow-sm">
                <Heart className="w-12 h-12 text-[#8B1E3F] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#111111]">Your Wishlist is Empty</h3>
                <p className="text-xs text-[#6B7280]">Save your favorite salon hair care and luxury cosmetics for later.</p>
                <Link href="/products" className="luxury-button-primary inline-block px-6 py-2.5 rounded-lg text-xs font-semibold">
                  Explore Catalog
                </Link>
              </div>
            )}

            {/* Saved Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 shadow-sm text-xs">
                <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#E5E7EB] pb-3">Default Shipping Address</h3>
                <div className="p-4 bg-[#F8F8F8] border border-[#E5E7EB] rounded-xl space-y-1 text-[#374151]">
                  <span className="font-bold text-[#111111] block">{user?.name || 'Valued Customer'}</span>
                  <p>14/2 Vijay Nagar, Near Anand Bazar Square</p>
                  <p>Indore, Madhya Pradesh - 452010</p>
                  <p>Phone: {user?.phone || GROUND_TRUTH_DATA.mobile}</p>
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-4 shadow-sm text-xs">
                <h3 className="font-serif text-lg font-bold text-[#111111] border-b border-[#E5E7EB] pb-3">Client Concierge & Helpline</h3>
                <p className="text-[#6B7280]">For order inquiries, salon wholesale rates, or product support, reach out directly to our Indore team:</p>
                <div className="space-y-2 font-semibold text-[#111111]">
                  <p>📍 Store Address: {GROUND_TRUTH_DATA.address.streetAddress}, Indore, MP</p>
                  <p>📞 Phone: {GROUND_TRUTH_DATA.phoneLandline} | Mobile: {GROUND_TRUTH_DATA.mobile}</p>
                  <p>✉️ Email: {GROUND_TRUTH_DATA.email}</p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
