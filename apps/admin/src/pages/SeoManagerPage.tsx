import React, { useState } from 'react';
import { Search, Globe, Link2, AlertOctagon } from 'lucide-react';

export function SeoManagerPage() {
  const [activeTab, setActiveTab] = useState<'meta' | 'redirects' | '404logs'>('meta');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">SEO Meta, 301 Redirects & 404 Tracker</h1>
          <p className="text-xs text-slate-400">Manage per-page custom title tags, meta descriptions, canonical URLs, 301 redirects, and monitor 404 hits</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('meta')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'meta' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          Per-Page Meta Editor
        </button>
        <button
          onClick={() => setActiveTab('redirects')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'redirects' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          301 Redirect Manager
        </button>
        <button
          onClick={() => setActiveTab('404logs')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === '404logs' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          404 Hit Logs
        </button>
      </div>

      {/* Content based on tab */}
      {activeTab === 'meta' && (
        <div className="glass-panel p-5 overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-2">Page Route / Entity</th>
                <th className="py-3 px-2">Meta Title</th>
                <th className="py-3 px-2">Meta Description</th>
                <th className="py-3 px-2">Canonical URL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-2 font-mono text-brand-300">/ (Homepage)</td>
                <td className="py-3 px-2 font-semibold">Lucky's GAZAB HI GAZAB — Branded Cosmetics Indore</td>
                <td className="py-3 px-2 text-slate-400 max-w-xs truncate">Retail & Wholesale Branded Cosmetics, Salon Professional Products...</td>
                <td className="py-3 px-2 text-slate-400">https://luckygazab.com</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="py-3 px-2 font-mono text-brand-300">/product/loreal-absolut-repair-mask</td>
                <td className="py-3 px-2 font-semibold">L'Oréal Absolut Repair Hair Mask 250ml — Buy Online Indore</td>
                <td className="py-3 px-2 text-slate-400 max-w-xs truncate">Buy genuine L'Oréal Professionnel Absolut Repair hair mask at best price...</td>
                <td className="py-3 px-2 text-slate-400">https://luckygazab.com/product/loreal-absolut-repair-mask</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'redirects' && (
        <div className="glass-panel p-5 space-y-4 text-xs">
          <h3 className="text-sm font-bold text-white">Active 301 Permanent Redirects</h3>
          <div className="space-y-2">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center font-mono">
              <span>/old-loreal-mask → /product/loreal-absolut-repair-mask</span>
              <span className="text-emerald-400 font-bold">301 Active</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === '404logs' && (
        <div className="glass-panel p-5 space-y-4 text-xs">
          <h3 className="text-sm font-bold text-white">Recent 404 Missing Route Hits</h3>
          <div className="space-y-2">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center font-mono">
              <span>/product/old-discontinued-item</span>
              <span className="text-amber-400 font-bold">14 Hits</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
