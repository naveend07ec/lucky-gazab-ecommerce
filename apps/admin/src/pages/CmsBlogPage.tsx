import React, { useState } from 'react';
import { BookOpen, FileText, Plus, Trash2, Edit3 } from 'lucide-react';

export function CmsBlogPage() {
  const [activeTab, setActiveTab] = useState<'blog' | 'cms'>('blog');

  const [blogPosts, setBlogPosts] = useState([
    { id: 'b1', title: 'Top 5 Salon Professional Hair Care Masks in Indore', slug: 'top-5-salon-hair-masks-damaged-hair-indore', category: 'Hair Care Tips', author: 'Lucky Matai', status: 'Published' },
    { id: 'b2', title: 'Complete Guide to O3+ Professional Facial Kits', slug: 'guide-to-o3-professional-facial-kits-bridal-glow', category: 'Skin Care & Facials', author: 'Salon Expert', status: 'Published' }
  ]);

  const [cmsPages, setCmsPages] = useState([
    { id: 'cms-1', title: 'Privacy Policy', slug: 'privacy-policy', status: 'Published' },
    { id: 'cms-2', title: 'Terms & Conditions', slug: 'terms', status: 'Published' },
    { id: 'cms-3', title: 'Shipping & Refund Policy', slug: 'shipping-policy', status: 'Published' }
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const post = {
      id: `b-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: 'Cosmetics Guide',
      author: 'Lucky Matai',
      status: 'Published'
    };
    setBlogPosts([post, ...blogPosts]);
    setNewTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">CMS Policy Pages & Blog Manager</h1>
          <p className="text-xs text-slate-400">Publish beauty articles, hair care guides, and edit storefront legal policy pages</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'blog' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          Blog Posts ({blogPosts.length})
        </button>
        <button
          onClick={() => setActiveTab('cms')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'cms' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-900'}`}
        >
          CMS Policy Pages ({cmsPages.length})
        </button>
      </div>

      {activeTab === 'blog' && (
        <div className="space-y-6">
          <form onSubmit={handleAddPost} className="glass-panel p-4 flex gap-3 text-xs items-center">
            <input
              type="text"
              required
              placeholder="New Blog Post Title (e.g. 10 Hair Styling Trends for 2026)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
            />
            <button type="submit" className="gradient-button px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Publish Article</span>
            </button>
          </form>

          <div className="glass-panel p-5 overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                  <th className="py-3 px-2">Article Title</th>
                  <th className="py-3 px-2">SEO Slug</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Author</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {blogPosts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-900/40">
                    <td className="py-3 px-2 font-bold text-white max-w-xs">{p.title}</td>
                    <td className="py-3 px-2 font-mono text-brand-300">{p.slug}</td>
                    <td className="py-3 px-2 text-slate-400">{p.category}</td>
                    <td className="py-3 px-2 font-semibold">{p.author}</td>
                    <td className="py-3 px-2">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <button onClick={() => setBlogPosts(blogPosts.filter(item => item.id !== p.id))} className="text-slate-400 hover:text-red-400 p-1">
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

      {activeTab === 'cms' && (
        <div className="glass-panel p-5 overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-2">Page Title</th>
                <th className="py-3 px-2">Storefront Route Slug</th>
                <th className="py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {cmsPages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-900/40">
                  <td className="py-3 px-2 font-bold text-white">{page.title}</td>
                  <td className="py-3 px-2 font-mono text-brand-300">/{page.slug}</td>
                  <td className="py-3 px-2">
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      {page.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
