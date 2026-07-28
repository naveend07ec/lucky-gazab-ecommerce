import React from 'react';
import { BarChart3, Download, FileText } from 'lucide-react';

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Reports & Financial Analytics</h1>
          <p className="text-xs text-slate-400">Exportable sales reports, GST tax summaries, and inventory low-stock logs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="glass-panel p-5 space-y-3">
          <div className="p-3 bg-brand-500/10 text-brand-400 rounded-xl w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-white text-sm">Monthly Sales & Revenue Report</h3>
          <p className="text-slate-400">Complete transaction history breakdown with customer info and order totals.</p>
          <button className="w-full bg-slate-900 border border-slate-800 hover:border-brand-500 text-white font-bold py-2 rounded-xl flex items-center justify-center space-x-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>

        <div className="glass-panel p-5 space-y-3">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-white text-sm">GST Tax Summary (CGST/SGST/IGST)</h3>
          <p className="text-slate-400">GST tax liability breakdown split by Madhya Pradesh state vs inter-state sales.</p>
          <button className="w-full bg-slate-900 border border-slate-800 hover:border-emerald-500 text-white font-bold py-2 rounded-xl flex items-center justify-center space-x-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Tax Summary</span>
          </button>
        </div>

        <div className="glass-panel p-5 space-y-3">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-white text-sm">Low Stock Inventory Audit Log</h3>
          <p className="text-slate-400">Items falling below low stock threshold for re-ordering with distributors.</p>
          <button className="w-full bg-slate-900 border border-slate-800 hover:border-amber-500 text-white font-bold py-2 rounded-xl flex items-center justify-center space-x-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export Inventory Log</span>
          </button>
        </div>
      </div>
    </div>
  );
}
