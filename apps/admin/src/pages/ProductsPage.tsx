'use client';

import React, { useState } from 'react';
import { Package, Plus, Search, Trash2, Download, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  const [products, setProducts] = useState([
    { id: 'sp-1', name: "L'Oréal Professionnel X-Tenso Oleoshape Smoothing Cream", category: 'Salon Professional Products', sku: 'LOR-XTENSO-CREAM-400', price: '₹1,099', stock: 35, status: 'In Stock' },
    { id: 'hc-1', name: "L'Oréal Professionnel Absolut Repair Hair Mask", category: 'Hair Care & Hair Color', sku: 'LOR-ABS-MASK-250', price: '₹855', stock: 45, status: 'In Stock' },
    { id: 'sc-1', name: 'O3+ Professional Brightening Facial Kit', category: 'Skin Care & Facial Kits', sku: 'O3-BRIGHT-FACIAL-KIT', price: '₹1,290', stock: 30, status: 'In Stock' },
    { id: 'cm-1', name: 'Maybelline Superstay Matte Ink Liquid Lipstick', category: 'Branded Cosmetics & Makeup', sku: 'MAY-MATTE-INK-RULER', price: '₹599', stock: 50, status: 'In Stock' },
    { id: 'ba-1', name: 'Vega Professional Pro Touch Hair Dryer 2000W', category: 'Beauty Accessories & Tools', sku: 'VEG-PRO-DRYER-2000W', price: '₹2,490', stock: 20, status: 'In Stock' }
  ]);

  // Form State
  const [newName, setNewName] = useState('');
  const [newSku, setNewSku] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newStock, setNewStock] = useState('25');
  const [newCat, setNewCat] = useState('Salon Professional Products');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const item = {
      id: `p-${Date.now()}`,
      name: newName,
      category: newCat,
      sku: newSku || `SKU-${Date.now()}`,
      price: `₹${newPrice}`,
      stock: parseInt(newStock) || 25,
      status: 'In Stock'
    };

    setProducts([item, ...products]);
    setShowAddModal(false);
    setNewName('');
    setNewSku('');
    setNewPrice('');
    setSuccessToast(`Product '${newName}' created successfully!`);
    setTimeout(() => setSuccessToast(''), 3000);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete '${name}'?`)) {
      setProducts(products.filter(p => p.id !== id));
      setSuccessToast(`Deleted '${name}'`);
      setTimeout(() => setSuccessToast(''), 3000);
    }
  };

  const handleExportCsv = () => {
    const headers = ['ID', 'Name', 'Category', 'SKU', 'Price', 'Stock', 'Status'];
    const rows = products.map(p => [p.id, `"${p.name}"`, `"${p.category}"`, p.sku, p.price, p.stock, p.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `gazab_products_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 text-[#0F172A] relative w-full">
      {/* Toast Notification */}
      <AnimatePresence>
        {successToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 right-8 z-50 bg-[#16A34A] text-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-2 text-xs font-bold"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Action Header */}
      <div className="flex flex-wrap justify-between items-center border-b border-[#E2E8F0] pb-4 gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#0F172A]">Products & Inventory</h1>
          <p className="text-xs text-[#475569]">Manage catalog products, pricing, stock levels, and SKUs</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleExportCsv}
            className="bg-white border border-[#E2E8F0] text-[#0F172A] px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center space-x-1.5 shadow-xs focus:ring-2 focus:ring-[#2563EB]"
          >
            <Download className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-xs focus:ring-2 focus:ring-[#2563EB]"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Controls Bar */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-wrap justify-between items-center gap-4 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by product name, SKU, or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg py-2 pl-9 pr-4 text-xs text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
          />
          <Search className="w-4 h-4 text-[#475569] absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2 text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] font-medium"
          >
            <option value="">All Categories</option>
            <option value="Salon Professional Products">Salon Professional</option>
            <option value="Hair Care & Hair Color">Hair Care & Color</option>
            <option value="Skin Care & Facial Kits">Skin Care & Facials</option>
            <option value="Branded Cosmetics & Makeup">Branded Cosmetics</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] text-[#475569] uppercase tracking-wider font-bold border-b border-[#E2E8F0] text-[10px]">
                <th className="py-3 px-4">Product Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">SKU</th>
                <th className="py-3 px-4 text-right">Selling Price</th>
                <th className="py-3 px-4 text-center">Stock</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {products
                .filter(p => (!selectedCategory || p.category === selectedCategory) &&
                  (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase())))
                .map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors even:bg-slate-50/40">
                    <td className="py-3.5 px-4 font-bold text-[#0F172A]">{p.name}</td>
                    <td className="py-3.5 px-4 text-[#475569] font-medium">{p.category}</td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-[#475569]">{p.sku}</td>
                    <td className="py-3.5 px-4 font-extrabold text-[#0F172A] text-right">{p.price}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#0F172A] text-center">{p.stock} units</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-[#16A34A] border border-emerald-200">
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => handleDelete(p.id, p.name)}
                          className="text-[#475569] hover:text-[#DC2626] p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 text-xs"
            >
              <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-3">
                <h3 className="font-bold text-sm text-[#0F172A]">Create Catalog Item</h3>
                <button onClick={() => setShowAddModal(false)} className="text-[#475569] hover:text-[#0F172A]">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-[#0F172A] font-semibold mb-1">Product Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. L'Oréal Serum"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5 text-[#0F172A] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#0F172A] font-semibold mb-1">SKU</label>
                    <input
                      type="text"
                      placeholder="LOR-SERUM-100"
                      value={newSku}
                      onChange={(e) => setNewSku(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5 text-[#0F172A] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F172A] font-semibold mb-1">Selling Price (₹)</label>
                    <input
                      type="number"
                      required
                      placeholder="850"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5 text-[#0F172A] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0F172A] font-semibold mb-1">Category</label>
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5 text-[#0F172A] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  >
                    <option value="Salon Professional Products">Salon Professional Products</option>
                    <option value="Hair Care & Hair Color">Hair Care & Hair Color</option>
                    <option value="Skin Care & Facial Kits">Skin Care & Facial Kits</option>
                    <option value="Branded Cosmetics & Makeup">Branded Cosmetics & Makeup</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="bg-white border border-[#E2E8F0] text-[#0F172A] px-4 py-2 rounded-lg font-semibold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg font-semibold">
                    Save Product
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
