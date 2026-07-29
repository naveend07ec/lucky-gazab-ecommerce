import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export function CategoriesPage() {
  const [activeSubTab, setActiveSubTab] = useState<'categories' | 'brands'>('categories');

  const [categories, setCategories] = useState([
    { id: 'c1', name: 'Salon Professional Products', slug: 'salon-professional-products', parent: 'None (Top Level)', displayOrder: 1, status: 'Active' },
    { id: 'c2', name: 'Hair Care & Hair Color', slug: 'hair-care-hair-color', parent: 'None (Top Level)', displayOrder: 2, status: 'Active' },
    { id: 'c3', name: 'Skin Care & Facial Kits', slug: 'skin-care-facial-kits', parent: 'None (Top Level)', displayOrder: 3, status: 'Active' },
    { id: 'c4', name: 'Branded Cosmetics & Makeup', slug: 'branded-cosmetics-makeup', parent: 'None (Top Level)', displayOrder: 4, status: 'Active' }
  ]);

  const [brands, setBrands] = useState([
    { id: 'b1', name: "L'Oréal Professionnel", slug: 'loreal-professionnel', description: 'Professional salon hair care & color', status: 'Active' },
    { id: 'b2', name: 'Schwarzkopf Professional', slug: 'schwarzkopf-professional', description: 'German salon hair technology', status: 'Active' },
    { id: 'b3', name: 'O3+ Professional', slug: 'o3-professional', description: 'Dermatologist tested facial treatment pods', status: 'Active' },
    { id: 'b4', name: 'Maybelline New York', slug: 'maybelline-new-york', description: 'Long-wear cosmetics & lipsticks', status: 'Active' }
  ]);

  const [newCatName, setNewCatName] = useState('');
  const [newBrandName, setNewBrandName] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName) return;
    const newCat = {
      id: `c-${Date.now()}`,
      name: newCatName,
      slug: newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      parent: 'None (Top Level)',
      displayOrder: categories.length + 1,
      status: 'Active'
    };
    setCategories([...categories, newCat]);
    setNewCatName('');
  };

  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName) return;
    const newB = {
      id: `b-${Date.now()}`,
      name: newBrandName,
      slug: newBrandName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      description: 'Authorized Brand Partner',
      status: 'Active'
    };
    setBrands([...brands, newB]);
    setNewBrandName('');
  };

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Categories & Brands Taxonomy</h1>
          <p className="text-xs text-[#6B7280]">Manage category trees, display order, brand partners, and SEO slugs</p>
        </div>
      </div>

      {/* Sub Tab Switcher */}
      <div className="flex space-x-3 border-b border-[#E5E7EB] pb-2 text-xs">
        <button
          onClick={() => setActiveSubTab('categories')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'categories' ? 'bg-[#2563EB] text-white' : 'text-[#6B7280] hover:bg-slate-100'}`}
        >
          Categories Manager ({categories.length})
        </button>
        <button
          onClick={() => setActiveSubTab('brands')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'brands' ? 'bg-[#2563EB] text-white' : 'text-[#6B7280] hover:bg-slate-100'}`}
        >
          Brand Directory ({brands.length})
        </button>
      </div>

      {/* Categories Content */}
      {activeSubTab === 'categories' && (
        <div className="space-y-6">
          <form onSubmit={handleAddCategory} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex gap-3 text-xs items-center shadow-xs">
            <input
              type="text"
              required
              placeholder="New Category Name (e.g. Nail Care & Polish)"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
            />
            <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all shadow-xs">
              <Plus className="w-4 h-4" />
              <span>Add Category</span>
            </button>
          </form>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
                  <th className="py-3 px-3">Category Name</th>
                  <th className="py-3 px-3">SEO Slug</th>
                  <th className="py-3 px-3">Parent Category</th>
                  <th className="py-3 px-3">Order</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#111827]">{cat.name}</td>
                    <td className="py-3.5 px-3 font-mono text-[#2563EB] font-semibold">{cat.slug}</td>
                    <td className="py-3.5 px-3 text-[#6B7280]">{cat.parent}</td>
                    <td className="py-3.5 px-3 font-bold text-[#111827]">{cat.displayOrder}</td>
                    <td className="py-3.5 px-3">
                      <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                        {cat.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button onClick={() => setCategories(categories.filter(c => c.id !== cat.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Brands Content */}
      {activeSubTab === 'brands' && (
        <div className="space-y-6">
          <form onSubmit={handleAddBrand} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex gap-3 text-xs items-center shadow-xs">
            <input
              type="text"
              required
              placeholder="New Brand Name (e.g. Streax Professional)"
              value={newBrandName}
              onChange={(e) => setNewBrandName(e.target.value)}
              className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
            />
            <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all shadow-xs">
              <Plus className="w-4 h-4" />
              <span>Add Brand Partner</span>
            </button>
          </form>

          <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
                  <th className="py-3 px-3">Brand Partner Name</th>
                  <th className="py-3 px-3">SEO Slug</th>
                  <th className="py-3 px-3">Description</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                {brands.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-[#111827]">{b.name}</td>
                    <td className="py-3.5 px-3 font-mono text-[#2563EB] font-semibold">{b.slug}</td>
                    <td className="py-3.5 px-3 text-[#6B7280]">{b.description}</td>
                    <td className="py-3.5 px-3">
                      <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button onClick={() => setBrands(brands.filter(item => item.id !== b.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
