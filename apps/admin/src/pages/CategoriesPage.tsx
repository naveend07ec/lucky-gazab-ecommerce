import React, { useState } from 'react';
import { Layers, Award, Plus, Edit3, Trash2 } from 'lucide-react';

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
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Categories & Brands Taxonomy</h1>
          <p className="text-xs text-slate-400">Manage category trees, display order, brand partners, and SEO slugs</p>
        </div>
      </div>

      {/* Sub Tab Switcher */}
      <div className="flex space-x-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveSubTab('categories')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'categories' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          Categories Manager ({categories.length})
        </button>
        <button
          onClick={() => setActiveSubTab('brands')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeSubTab === 'brands' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          Brand Directory ({brands.length})
        </button>
      </div>

      {/* Categories Content */}
      {activeSubTab === 'categories' && (
        <div className="space-y-6">
          <form onSubmit={handleAddCategory} className="glass-panel p-4 flex gap-3 text-xs items-center">
            <input
              type="text"
              required
              placeholder="New Category Name (e.g. Nail Care & Polish)"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
            />
            <button type="submit" className="gradient-button px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Add Category</span>
            </button>
          </form>

          <div className="glass-panel p-5 overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                  <th className="py-3 px-2">Category Name</th>
                  <th className="py-3 px-2">SEO Slug</th>
                  <th className="py-3 px-2">Parent Category</th>
                  <th className="py-3 px-2">Order</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-900/40">
                    <td className="py-3 px-2 font-bold text-white">{cat.name}</td>
                    <td className="py-3 px-2 font-mono text-brand-300">{cat.slug}</td>
                    <td className="py-3 px-2 text-slate-400">{cat.parent}</td>
                    <td className="py-3 px-2 font-bold">{cat.displayOrder}</td>
                    <td className="py-3 px-2">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        {cat.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button onClick={() => setCategories(categories.filter(c => c.id !== cat.id))} className="text-slate-400 hover:text-red-400 p-1">
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
          <form onSubmit={handleAddBrand} className="glass-panel p-4 flex gap-3 text-xs items-center">
            <input
              type="text"
              required
              placeholder="New Brand Name (e.g. Streax Professional)"
              value={newBrandName}
              onChange={(e) => setNewBrandName(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
            />
            <button type="submit" className="gradient-button px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Add Brand Partner</span>
            </button>
          </form>

          <div className="glass-panel p-5 overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                  <th className="py-3 px-2">Brand Partner Name</th>
                  <th className="py-3 px-2">SEO Slug</th>
                  <th className="py-3 px-2">Description</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {brands.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-900/40">
                    <td className="py-3 px-2 font-bold text-white">{b.name}</td>
                    <td className="py-3 px-2 font-mono text-brand-300">{b.slug}</td>
                    <td className="py-3 px-2 text-slate-400">{b.description}</td>
                    <td className="py-3 px-2">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button onClick={() => setBrands(brands.filter(item => item.id !== b.id))} className="text-slate-400 hover:text-red-400 p-1">
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
