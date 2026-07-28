'use client';

import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, Package, AlertTriangle, ArrowUpRight, Search, Filter, Plus, Download, FileText, Printer, CheckCircle2, X } from 'lucide-react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { motion, AnimatePresence } from 'framer-motion';

export function DashboardPage() {
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showManualOrderModal, setShowManualOrderModal] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  // Manual Order Form State
  const [orderChannel, setOrderChannel] = useState('Walk-in Counter Sale');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState("L'Oréal Professionnel Absolut Repair Hair Mask");
  const [orderAmount, setOrderAmount] = useState('855');

  const metrics = [
    { title: 'Gross Revenue', value: '₹2,84,500', change: '+14.2% vs last month', icon: TrendingUp, color: 'text-[#2563EB]', badgeBg: 'bg-blue-50' },
    { title: 'Total Orders', value: '142', change: '8 pending fulfillment', icon: ShoppingBag, color: 'text-[#22C55E]', badgeBg: 'bg-emerald-50' },
    { title: 'Low Stock Alerts', value: '3 SKUs', change: 'Action required', icon: AlertTriangle, color: 'text-[#F59E0B]', badgeBg: 'bg-amber-50' },
    { title: 'Catalog Items', value: '43 SKUs', change: 'Across 5 Categories', icon: Package, color: 'text-[#2563EB]', badgeBg: 'bg-blue-50' }
  ];

  const [recentOrders, setRecentOrders] = useState([
    { id: 'GAZAB-2026-1001', customer: 'Ananya Sharma', items: "L'Oréal Absolut Repair Mask", amount: '₹930', status: 'Delivered', date: '2026-07-27', channel: 'Online Store' },
    { id: 'GAZAB-2026-1002', customer: 'Vikram Singh', items: 'O3+ Brightening Facial Kit', amount: '₹1,290', status: 'Processing', date: '2026-07-28', channel: 'WhatsApp Concierge' },
    { id: 'GAZAB-2026-1003', customer: 'Pooja Verma', items: 'Schwarzkopf Igora Shade 5-0', amount: '₹460', status: 'Pending', date: '2026-07-28', channel: 'Walk-in Counter Sale' }
  ]);

  const handleCreateManualOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrd = {
      id: `GAZAB-2026-${1000 + recentOrders.length + 1}`,
      customer: customerName || 'Walk-in Customer',
      items: selectedProduct,
      amount: `₹${orderAmount}`,
      status: 'Processing',
      date: new Date().toISOString().split('T')[0],
      channel: orderChannel
    };

    setRecentOrders([newOrd, ...recentOrders]);
    setShowManualOrderModal(false);
    setCustomerName('');
    setCustomerPhone('');
    setSuccessToast(`Manual Order ${newOrd.id} created for ${orderChannel}!`);
    setTimeout(() => setSuccessToast(''), 3500);
  };

  const triggerExport = (format: 'csv' | 'excel' | 'pdf' | 'print') => {
    setShowExportMenu(false);
    if (format === 'csv' || format === 'excel') {
      const headers = ['Order Ref', 'Customer Name', 'Channel', 'Items', 'Total Amount', 'Status', 'Date'];
      const rows = recentOrders.map(o => [o.id, `"${o.customer}"`, `"${o.channel}"`, `"${o.items}"`, o.amount, o.status, o.date]);
      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `dashboard_report_${format}_${Date.now()}.${format === 'excel' ? 'xlsx' : 'csv'}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSuccessToast(`Report exported in ${format.toUpperCase()} format!`);
    } else if (format === 'print') {
      window.print();
    } else {
      alert(`Generating PDF Report summary...`);
    }
    setTimeout(() => setSuccessToast(''), 3000);
  };

  return (
    <div className="space-y-6 text-[#111827] relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 right-8 z-50 bg-[#22C55E] text-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-2 text-xs font-bold"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <div className="flex flex-wrap justify-between items-center border-b border-[#E5E7EB] pb-4 gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Dashboard Overview</h1>
          <p className="text-xs text-[#6B7280]">Real-time operational summary for {GROUND_TRUTH_DATA.businessName} • Indore HQ</p>
        </div>

        <div className="flex items-center space-x-3 relative">
          {/* Professional Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="bg-white border border-[#E5E7EB] text-[#111827] px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors shadow-sm flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Export Report ▼</span>
            </button>

            <AnimatePresence>
              {showExportMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#E5E7EB] rounded-xl shadow-xl z-50 p-1 text-xs space-y-1"
                >
                  <button onClick={() => triggerExport('csv')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Export CSV (.csv)</span>
                  </button>
                  <button onClick={() => triggerExport('excel')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Export Excel (.xlsx)</span>
                  </button>
                  <button onClick={() => triggerExport('pdf')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-red-600" />
                    <span>Export PDF Summary</span>
                  </button>
                  <button onClick={() => triggerExport('print')} className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center space-x-2 border-t border-[#E5E7EB] pt-2">
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    <span>Print Summary</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Button: Create Manual Order */}
          <button
            onClick={() => setShowManualOrderModal(true)}
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-sm flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Create Manual Order</span>
          </button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3 shadow-sm hover:border-slate-300 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{m.title}</span>
                <div className={`p-2 rounded-lg ${m.badgeBg}`}>
                  <Icon className={`w-4 h-4 ${m.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-[#111827] block tracking-tight">{m.value}</span>
                <span className="text-[11px] text-[#6B7280] font-medium flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#22C55E] mr-1" />
                  {m.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm space-y-3 p-5">
        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#E5E7EB] pb-3">
          <div>
            <h3 className="font-bold text-sm text-[#111827]">Recent Store Orders</h3>
            <p className="text-xs text-[#6B7280]">Latest sales across Counter, WhatsApp, B2B & Online channels</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] text-[#6B7280] uppercase tracking-wider font-semibold border-b border-[#E5E7EB] text-[10px]">
                <th className="py-3 px-4">Order Ref</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Channel</th>
                <th className="py-3 px-4">Items</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {recentOrders.map((ord, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors even:bg-slate-50/30">
                  <td className="py-3.5 px-4 font-bold text-[#111827]">{ord.id}</td>
                  <td className="py-3.5 px-4 text-[#111827] font-medium">{ord.customer}</td>
                  <td className="py-3.5 px-4 text-slate-500 font-medium">{ord.channel}</td>
                  <td className="py-3.5 px-4 text-[#6B7280]">{ord.items}</td>
                  <td className="py-3.5 px-4 font-bold text-[#111827]">{ord.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase ${
                      ord.status === 'Delivered'
                        ? 'bg-emerald-50 text-[#22C55E] border-emerald-200'
                        : ord.status === 'Processing'
                        ? 'bg-blue-50 text-[#2563EB] border-blue-200'
                        : 'bg-amber-50 text-[#F59E0B] border-amber-200'
                    }`}>
                      {ord.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[#6B7280]">{ord.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Manual Order Modal Workflow */}
      <AnimatePresence>
        {showManualOrderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 text-xs"
            >
              <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-3">
                <div>
                  <h3 className="font-bold text-sm text-[#111827]">Create Manual Order</h3>
                  <span className="text-[10px] text-[#6B7280]">For Counter Sales, WhatsApp, Phone, & Salon B2B</span>
                </div>
                <button onClick={() => setShowManualOrderModal(false)} className="text-slate-400 hover:text-[#111827]">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateManualOrder} className="space-y-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Order Purpose / Sales Channel</label>
                  <select
                    value={orderChannel}
                    onChange={(e) => setOrderChannel(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB]"
                  >
                    <option value="Walk-in Counter Sale">Walk-in Counter Sale</option>
                    <option value="WhatsApp Order">WhatsApp Concierge Order</option>
                    <option value="Phone Order">Phone Inquiry Sale</option>
                    <option value="Salon B2B Order">Salon B2B Wholesale</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Customer Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Parlor"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="9926089665"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Select Item</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB]"
                  >
                    <option value="L'Oréal Professionnel Absolut Repair Hair Mask">L'Oréal Absolut Repair Hair Mask (₹855)</option>
                    <option value="O3+ Professional Brightening Facial Kit">O3+ Brightening Facial Kit (₹1,290)</option>
                    <option value="Schwarzkopf Igora Royal Hair Color Shade 5-0">Schwarzkopf Igora Shade 5-0 (₹460)</option>
                    <option value="Maybelline Superstay Matte Ink Liquid Lipstick">Maybelline Matte Ink Lipstick (₹599)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Total Amount (₹)</label>
                  <input
                    type="number"
                    required
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB]"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowManualOrderModal(false)}
                    className="bg-white border border-[#E5E7EB] text-[#111827] px-4 py-2 rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold">
                    Confirm & Submit Order
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
