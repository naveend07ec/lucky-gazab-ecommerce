import React, { useState } from 'react';
import { Users, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react';

export function CustomersPage() {
  const [customers, setCustomers] = useState([
    { id: 'usr-1', name: 'Ananya Sharma', email: 'ananya@example.com', phone: '9826012345', ordersCount: 3, totalSpent: 2840, status: 'active' },
    { id: 'usr-2', name: 'Rajesh Verma (Salon B2B)', email: 'rajesh.salon@example.com', phone: '9926088888', ordersCount: 8, totalSpent: 42500, status: 'active' }
  ]);

  const toggleBlockStatus = (id: string) => {
    setCustomers(customers.map(c => c.id === id ? { ...c, status: c.status === 'active' ? 'blocked' : 'active' } : c));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Customer Profiles & Support</h1>
          <p className="text-xs text-slate-400">View customer order histories, toggle account block status, and reply to support tickets</p>
        </div>
      </div>

      <div className="glass-panel p-5 overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="py-3 px-2">Customer Name</th>
              <th className="py-3 px-2">Contact Email / Phone</th>
              <th className="py-3 px-2">Total Orders</th>
              <th className="py-3 px-2">Lifetime Value</th>
              <th className="py-3 px-2">Account Status</th>
              <th className="py-3 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-900/40">
                <td className="py-3 px-2 font-bold text-white">{c.name}</td>
                <td className="py-3 px-2">
                  <span className="block">{c.email}</span>
                  <span className="text-[10px] text-slate-400">{c.phone}</span>
                </td>
                <td className="py-3 px-2 font-semibold">{c.ordersCount} orders</td>
                <td className="py-3 px-2 font-extrabold text-emerald-400">₹{c.totalSpent}</td>
                <td className="py-3 px-2">
                  {c.status === 'active' ? (
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/30">
                      BLOCKED
                    </span>
                  )}
                </td>
                <td className="py-3 px-2 text-right">
                  <button
                    onClick={() => toggleBlockStatus(c.id)}
                    className="bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 border border-slate-800 px-3 py-1 rounded-lg"
                  >
                    {c.status === 'active' ? 'Block Account' : 'Unblock Account'}
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
