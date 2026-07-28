import React from 'react';
import { Truck, Plus, FileText, Phone } from 'lucide-react';

export function SuppliersPage() {
  const suppliers = [
    { id: 'sup-1', name: "L'Oréal India Authorized Distributor", contact: 'Ramesh Sharma', phone: '0731-4029999', gstin: '23AAACL1234F1Z1', status: 'Active' },
    { id: 'sup-2', name: 'Schwarzkopf MP Beauty Supplier', contact: 'Vikas Gupta', phone: '9826011223', gstin: '23BBBCS5678G2Z2', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Suppliers & Purchase Orders</h1>
          <p className="text-xs text-slate-400">Manage brand supplier records, GSTIN details, and warehouse purchase orders</p>
        </div>
        <button className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Supplier Record</span>
        </button>
      </div>

      <div className="glass-panel p-5 overflow-x-auto text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
              <th className="py-3 px-2">Supplier Name</th>
              <th className="py-3 px-2">Contact Person</th>
              <th className="py-3 px-2">Phone / Landline</th>
              <th className="py-3 px-2">GSTIN Number</th>
              <th className="py-3 px-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {suppliers.map((s) => (
              <tr key={s.id} className="hover:bg-slate-900/40">
                <td className="py-3 px-2 font-bold text-white">{s.name}</td>
                <td className="py-3 px-2">{s.contact}</td>
                <td className="py-3 px-2">{s.phone}</td>
                <td className="py-3 px-2 font-mono text-brand-300">{s.gstin}</td>
                <td className="py-3 px-2">
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
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
