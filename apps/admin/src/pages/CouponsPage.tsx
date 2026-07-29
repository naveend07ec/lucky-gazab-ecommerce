import React, { useState } from 'react';
import { Tag, Plus, Trash2 } from 'lucide-react';

export function CouponsPage() {
  const [coupons, setCoupons] = useState([
    { id: 'cp1', code: 'GAZAB10', type: 'PERCENTAGE', discount: '10%', minOrder: '₹500', usage: '42 / 1000', status: 'Active' },
    { id: 'cp2', code: 'SALON100', type: 'FLAT', discount: '₹100 OFF', minOrder: '₹1,500', usage: '18 / 500', status: 'Active' }
  ]);

  const [newCode, setNewCode] = useState('');

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode) return;
    const c = {
      id: `cp-${Date.now()}`,
      code: newCode.toUpperCase(),
      type: 'PERCENTAGE',
      discount: '15%',
      minOrder: '₹1,000',
      usage: '0 / 100',
      status: 'Active'
    };
    setCoupons([c, ...coupons]);
    setNewCode('');
  };

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Coupons & Promotional Banners</h1>
          <p className="text-xs text-[#6B7280]">Manage promo codes, discount percentages, minimum cart thresholds, and usage limits</p>
        </div>
      </div>

      <form onSubmit={handleAddCoupon} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex gap-3 text-xs items-center shadow-xs">
        <input
          type="text"
          required
          placeholder="New Promo Code (e.g. FESTIVE20)"
          value={newCode}
          onChange={(e) => setNewCode(e.target.value)}
          className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all shadow-xs">
          <Plus className="w-4 h-4" />
          <span>Create Coupon Code</span>
        </button>
      </form>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">Promo Code</th>
              <th className="py-3 px-3">Discount Type</th>
              <th className="py-3 px-3">Value</th>
              <th className="py-3 px-3">Min Order</th>
              <th className="py-3 px-3">Usage Limit</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {coupons.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-3 font-mono font-bold text-[#2563EB]">{c.code}</td>
                <td className="py-3.5 px-3 font-medium text-[#475569]">{c.type}</td>
                <td className="py-3.5 px-3 font-bold text-[#111827]">{c.discount}</td>
                <td className="py-3.5 px-3 text-[#374151]">{c.minOrder}</td>
                <td className="py-3.5 px-3 font-mono text-[#6B7280]">{c.usage}</td>
                <td className="py-3.5 px-3">
                  <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    {c.status}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button onClick={() => setCoupons(coupons.filter(item => item.id !== c.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
