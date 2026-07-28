import React, { useState } from 'react';
import { Tag, Plus, Check } from 'lucide-react';

export function CouponsPage() {
  const [coupons, setCoupons] = useState([
    { id: 'c1', code: 'GAZAB10', type: 'Percentage (10%)', minCart: 999, maxDisc: 300, status: 'Active' },
    { id: 'c2', code: 'WELCOME200', type: 'Flat Discount (₹200)', minCart: 1499, maxDisc: 200, status: 'Active' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Coupons & Banner Manager</h1>
          <p className="text-xs text-slate-400">Configure promotional discount codes, minimum cart values, and hero sliders</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-5 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center border-b border-slate-800 pb-3">
            <Tag className="w-4 h-4 text-brand-400 mr-2" />
            Active Discount Coupons
          </h3>
          <div className="space-y-3 text-xs">
            {coupons.map((c) => (
              <div key={c.id} className="glass-card p-4 flex justify-between items-center">
                <div>
                  <span className="font-mono font-bold text-brand-300 text-sm">{c.code}</span>
                  <p className="text-slate-400 text-[10px]">{c.type} • Min Cart: ₹{c.minCart}</p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
