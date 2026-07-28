'use client';

import React, { useState } from 'react';
import { Package, Search, Download } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [trackedOrder, setTrackedOrder] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (orderNumber.trim().toUpperCase() === 'GAZAB-2026-1001') {
      setTrackedOrder({
        id: 'ord-1001',
        orderNumber: 'GAZAB-2026-1001',
        customerName: 'Ananya Sharma',
        status: 'delivered',
        placedAt: '2026-07-27',
        paymentMethod: 'Razorpay (Paid)',
        totalAmount: 930,
        items: [
          { productName: "L'Oréal Professionnel Absolut Repair Hair Mask 250ml", quantity: 1, unitPrice: 855 }
        ],
        shippingAddress: {
          line1: '14/2 Vijay Nagar',
          city: 'Indore',
          state: 'Madhya Pradesh',
          pincode: '452010'
        }
      });
    } else {
      setErrorMsg("Order not found. Try sample order ID 'GAZAB-2026-1001'");
      setTrackedOrder(null);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="font-serif text-3xl font-extrabold text-[#111111] flex items-center justify-center">
            <Package className="w-8 h-8 mr-3 text-[#C8A97E]" />
            Track Your Shipment
          </h1>
          <p className="text-neutral-500 text-xs">
            Enter your Order Number and Mobile Number to view live order pipeline status
          </p>
        </div>

        {/* Track Search Form */}
        <div className="p-6 bg-white border border-[#EAEAEA] rounded-2xl max-w-xl mx-auto">
          <form onSubmit={handleTrack} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-700 font-semibold mb-1">Order Number</label>
              <input
                type="text"
                required
                placeholder="e.g. GAZAB-2026-1001"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 uppercase focus:border-[#111111]"
              />
            </div>
            <div>
              <label className="block text-neutral-700 font-semibold mb-1">Mobile Number or Email</label>
              <input
                type="text"
                placeholder="e.g. 9826012345"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl p-3 text-neutral-900 focus:border-[#111111]"
              />
            </div>
            <button type="submit" className="luxury-button-primary w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Track Order Pipeline</span>
            </button>
          </form>

          {errorMsg && <p className="text-xs text-red-600 mt-3 text-center font-medium">{errorMsg}</p>}
        </div>

        {/* Track Result Display */}
        {trackedOrder && (
          <div className="p-6 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl space-y-6">
            <div className="flex flex-wrap justify-between items-center border-b border-[#EAEAEA] pb-4 text-xs gap-2">
              <div>
                <span className="font-serif font-extrabold text-[#111111] text-base">{trackedOrder.orderNumber}</span>
                <span className="text-neutral-500 block text-[10px]">Placed on {trackedOrder.placedAt}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-xs uppercase border border-emerald-200">
                  {trackedOrder.status}
                </span>
                <a
                  href={`http://localhost:4000/api/v1/orders/${trackedOrder.id}/invoice`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button-secondary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 mr-1 text-[#C8A97E]" />
                  <span>GST Invoice PDF</span>
                </a>
              </div>
            </div>

            {/* Pipeline Timeline */}
            <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-2">
              {['Placed', 'Paid', 'Shipped', 'Delivered'].map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center mx-auto text-xs font-bold shadow">
                    ✓
                  </div>
                  <span className="block font-semibold text-[#111111]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
