import React, { useState } from 'react';
import { Globe, Plus, Trash2 } from 'lucide-react';

export function SeoManagerPage() {
  const [redirects, setRedirects] = useState([
    { id: 'r1', from: '/loreal-smoothing-cream', to: '/product/loreal-xtenso-oleoshape-smoothing-cream', type: '301 Permanent' },
    { id: 'r2', from: '/facial-kits', to: '/products?category=skin-care-facial-kits', type: '301 Permanent' }
  ]);

  const [fromUrl, setFromUrl] = useState('');
  const [toUrl, setToUrl] = useState('');

  const handleAddRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromUrl || !toUrl) return;
    const r = { id: `r-${Date.now()}`, from: fromUrl, to: toUrl, type: '301 Permanent' };
    setRedirects([...redirects, r]);
    setFromUrl('');
    setToUrl('');
  };

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">SEO & 301 Redirect Manager</h1>
          <p className="text-xs text-[#6B7280]">Manage URL redirects, canonical links, sitemap metadata, and search engine indexation</p>
        </div>
      </div>

      <form onSubmit={handleAddRedirect} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex gap-3 text-xs items-center shadow-xs">
        <input
          type="text"
          required
          placeholder="From URL Path (e.g. /old-path)"
          value={fromUrl}
          onChange={(e) => setFromUrl(e.target.value)}
          className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <input
          type="text"
          required
          placeholder="To Destination URL (e.g. /products/new-path)"
          value={toUrl}
          onChange={(e) => setToUrl(e.target.value)}
          className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all shadow-xs">
          <Plus className="w-4 h-4" />
          <span>Add 301 Redirect</span>
        </button>
      </form>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">From Path</th>
              <th className="py-3 px-3">Destination Path</th>
              <th className="py-3 px-3">Redirect Type</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {redirects.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-3 font-mono text-[#DC2626] font-semibold">{r.from}</td>
                <td className="py-3.5 px-3 font-mono text-[#16A34A] font-semibold">{r.to}</td>
                <td className="py-3.5 px-3 font-bold text-[#475569]">{r.type}</td>
                <td className="py-3.5 px-3 text-right">
                  <button onClick={() => setRedirects(redirects.filter(item => item.id !== r.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                    <Trash2 className="w-4 h-4" />
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
