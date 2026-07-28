'use client';

import React, { useState } from 'react';
import { ShoppingBag, Download, Eye, Search, Filter } from 'lucide-react';

export function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [orders, setOrders] = useState([
    { id: 'GAZAB-2026-1001', dbId: 'ord-1001', customer: 'Ananya Sharma', email: 'ananya@example.com', total: '₹930', items: 1, payment: 'Razorpay', status: 'delivered', date: '2026-07-27' },
    { id: 'GAZAB-2026-1002', dbId: 'ord-1002', customer: 'Vikram Singh', email: 'vikram@example.com', total: '₹1,290', items: 1, payment: 'Razorpay', status: 'shipped', date: '2026-07-28' },
    { id: 'GAZAB-2026-1003', dbId: 'ord-1003', customer: 'Pooja Verma', email: 'pooja@example.com', total: '₹460', items: 2, payment: 'Cash on Delivery', status: 'pending', date: '2026-07-28' }
  ]);

  const handleExportOrdersCsv = () => {
    const headers = ['Order Ref', 'Customer Name', 'Customer Email', 'Total Amount', 'Payment Method', 'Status', 'Date'];
    const rows = orders.map(o => [o.id, `"${o.customer}"`, o.email, o.total, o.payment, o.status, o.date]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `gazab_orders_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-[#111827]">
      {/* Action Header */}
      <div className="flex flex-wrap justify-between items-center border-b border-[#E5E7EB] pb-4 gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Orders & GST Invoices</h1>
          <p className="text-xs text-[#6B7280]">Process fulfillment pipelines and generate GST Tax Invoices</p>
        </div>
        <button
          onClick={handleExportOrdersCsv}
          className="bg-white border border-[#E5E7EB] text-[#111827] px-4 py-2 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors shadow-sm flex items-center space-x-1.5"
        >
          <Download className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Export Orders CSV</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E5E7EB] pb-3">
        <div className="flex items-center space-x-2 text-xs font-semibold">
          {['all', 'pending', 'paid', 'shipped', 'delivered'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                activeFilter === tab ? 'bg-[#2563EB] text-white font-bold' : 'text-[#6B7280] hover:text-[#111827] hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search order ref or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg py-1.5 pl-8 pr-3 text-xs text-[#111827] focus:outline-none focus:border-[#2563EB]"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] text-[#6B7280] uppercase tracking-wider font-semibold border-b border-[#E5E7EB] text-[10px]">
                <th className="py-3 px-4">Order Ref</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Payment</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">GST Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {orders
                .filter(o => (activeFilter === 'all' || o.status === activeFilter) &&
                  (o.id.toLowerCase().includes(searchTerm.toLowerCase()) || o.customer.toLowerCase().includes(searchTerm.toLowerCase())))
                .map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors even:bg-slate-50/30">
                    <td className="py-3.5 px-4 font-bold text-[#111827]">{ord.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-[#111827] block">{ord.customer}</span>
                      <span className="text-[10px] text-[#6B7280]">{ord.email}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#6B7280]">{ord.payment}</td>
                    <td className="py-3.5 px-4 font-bold text-[#111827]">{ord.total}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                        ord.status === 'delivered'
                          ? 'bg-emerald-50 text-[#22C55E] border-emerald-200'
                          : ord.status === 'shipped'
                          ? 'bg-blue-50 text-[#2563EB] border-blue-200'
                          : 'bg-amber-50 text-[#F59E0B] border-amber-200'
                      }`}>
                        {ord.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#6B7280]">{ord.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={`http://localhost:4000/api/v1/orders/${ord.dbId}/invoice`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-[#E5E7EB] text-[#111827] px-3 py-1.5 rounded-lg text-[11px] font-semibold hover:bg-slate-50 transition-colors inline-flex items-center space-x-1"
                      >
                        <Download className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>PDF Invoice</span>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
