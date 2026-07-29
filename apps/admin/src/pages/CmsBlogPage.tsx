import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, Globe } from 'lucide-react';

export function CmsBlogPage() {
  const [posts, setPosts] = useState([
    { id: 'p1', title: 'Top 5 Salon Professional Hair Care Masks for Damaged Hair in Indore', slug: 'top-5-salon-hair-masks-damaged-hair-indore', author: 'Beauty Editor', status: 'Published', date: '2026-07-20' },
    { id: 'p2', title: 'Complete Guide to O3+ Professional Facial Kits for Bridal Glow', slug: 'guide-to-o3-professional-facial-kits-bridal-glow', author: 'Dermaceutical Expert', status: 'Published', date: '2026-07-15' }
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const post = {
      id: `p-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      author: 'Super Admin',
      status: 'Published',
      date: new Date().toISOString().split('T')[0]
    };
    setPosts([post, ...posts]);
    setNewTitle('');
  };

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">CMS & Journal Content</h1>
          <p className="text-xs text-[#6B7280]">Publish beauty journal articles, salon care guides, and SEO content</p>
        </div>
      </div>

      <form onSubmit={handleAddPost} className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex gap-3 text-xs items-center shadow-xs">
        <input
          type="text"
          required
          placeholder="New Article Title (e.g. Best Hair Smoothing Creams 2026)..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-2.5 text-[#111827] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg font-bold text-xs flex items-center space-x-1 transition-all shadow-xs">
          <Plus className="w-4 h-4" />
          <span>Publish Article</span>
        </button>
      </form>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 overflow-x-auto text-xs shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-[#475569] uppercase font-bold text-[10px] bg-[#F8FAFC]">
              <th className="py-3 px-3">Article Title</th>
              <th className="py-3 px-3">SEO Slug</th>
              <th className="py-3 px-3">Author</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3">Published Date</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-3 font-bold text-[#111827] max-w-md truncate">{post.title}</td>
                <td className="py-3.5 px-3 font-mono text-[#2563EB] font-semibold max-w-xs truncate">{post.slug}</td>
                <td className="py-3.5 px-3 text-[#6B7280]">{post.author}</td>
                <td className="py-3.5 px-3">
                  <span className="bg-emerald-50 text-[#16A34A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    {post.status}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-[#6B7280]">{post.date}</td>
                <td className="py-3.5 px-3 text-right">
                  <button onClick={() => setPosts(posts.filter(p => p.id !== post.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
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
