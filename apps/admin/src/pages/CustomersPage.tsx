import React, { useState } from 'react';
import { Users, Search, Mail, Phone, ShoppingBag } from 'lucide-react';

export function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    { id: 'c1', name: 'Ananya Sharma', email: 'ananya@example.com', phone: '9826011223', ordersCount: 5, totalSpent: '₹4,650', status: 'Active VIP' },
    { id: 'c2', name: 'Vikram Singh', email: 'vikram@example.com', phone: '9893044556', ordersCount: 3, totalSpent: '₹3,870', status: 'Active' },
    { id: 'c3', name: 'Pooja Verma', email: 'pooja@example.com', phone: '9926088776', ordersCount: 1, totalSpent: '₹460', status: 'Active' }
  ];

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Customers & CRM</h1>
          <p className="text-xs text-[#6B7280]">Customer profiles, order histories, total spending, and VIP tier tracking</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex items-center justify-between shadow-xs">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search customer name, email, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg py-2 pl-9 pr-3 text-xs text-[#111827] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
          />
          <Search className="w-4 h-4 text-[#475569] absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">Customer Name</th>
              <th className="py-3 px-3">Email Address</th>
              <th className="py-3 px-3">Phone Number</th>
              <th className="py-3 px-3 text-center">Orders</th>
              <th className="py-3 px-3 text-right">Total Spent</th>
              <th className="py-3 px-3">VIP Tier Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {customers
              .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.email.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-[#111827]">{c.name}</td>
                  <td className="py-3.5 px-3 font-medium text-[#475569]">{c.email}</td>
                  <td className="py-3.5 px-3 font-mono text-[#475569]">{c.phone}</td>
                  <td className="py-3.5 px-3 font-semibold text-center text-[#111827]">{c.ordersCount}</td>
                  <td className="py-3.5 px-3 font-extrabold text-[#111827] text-right">{c.totalSpent}</td>
                  <td className="py-3.5 px-3">
                    <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
