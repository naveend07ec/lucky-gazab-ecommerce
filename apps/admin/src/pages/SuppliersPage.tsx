import React, { useState } from 'react';
import { Truck, Plus, Trash2 } from 'lucide-react';

export function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([
    { id: 's1', name: "L'Oréal India Pvt Ltd Authorized Distributor", contact: 'Rajesh Malhotra', phone: '0731-4026665', email: 'distributor@loreal.in', status: 'Active Verified' },
    { id: 's2', name: 'Schwarzkopf Professional MP Supply Hub', contact: 'Suresh Kumar', phone: '9926089665', email: 'supply@schwarzkopf.in', status: 'Active Verified' }
  ]);

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Suppliers & Purchase Orders</h1>
          <p className="text-xs text-[#6B7280]">Authorized brand distributors, wholesale supply channels, and purchase orders</p>
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">Supplier Name</th>
              <th className="py-3 px-3">Primary Contact</th>
              <th className="py-3 px-3">Phone</th>
              <th className="py-3 px-3">Email Address</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {suppliers.map((s) => (
              <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-3 font-bold text-[#111827]">{s.name}</td>
                <td className="py-3.5 px-3 font-semibold text-[#374151]">{s.contact}</td>
                <td className="py-3.5 px-3 font-mono text-[#475569]">{s.phone}</td>
                <td className="py-3.5 px-3 font-medium text-[#2563EB]">{s.email}</td>
                <td className="py-3.5 px-3">
                  <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    {s.status}
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
