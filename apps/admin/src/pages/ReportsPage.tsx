import React from 'react';
import { BarChart3, TrendingUp, Download, Calendar } from 'lucide-react';

export function ReportsPage() {
  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Financial Analytics & Tax Reports</h1>
          <p className="text-xs text-[#6B7280]">GST tax breakdown, gross sales summary, and revenue reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3 shadow-xs">
          <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider block">July Gross Sales</span>
          <span className="text-2xl font-extrabold text-[#111827] block">₹2,84,500</span>
          <span className="text-[11px] text-[#16A34A] font-semibold">+14.2% vs previous month</span>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3 shadow-xs">
          <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider block">Total CGST + SGST (18%)</span>
          <span className="text-2xl font-extrabold text-[#2563EB] block">₹43,410</span>
          <span className="text-[11px] text-[#6B7280]">Indore Intra-State Tax Split</span>
        </div>

        <div className="bg-white border border-[#E5E2EB] rounded-xl p-5 space-y-3 shadow-xs">
          <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider block">Total Orders Processed</span>
          <span className="text-2xl font-extrabold text-[#111827] block">142</span>
          <span className="text-[11px] text-[#6B7280]">8 pending fulfillment</span>
        </div>
      </div>
    </div>
  );
}
