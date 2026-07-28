import React from 'react';
import Link from 'next/link';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { BookOpen, Calendar, User } from 'lucide-react';

export default function BlogListingPage() {
  const posts = [
    {
      id: 'b1',
      title: 'Top 5 Salon Professional Hair Care Masks for Damaged Hair in Indore',
      slug: 'top-5-salon-hair-masks-damaged-hair-indore',
      excerpt: 'Discover expert tips from salon professionals on choosing deep conditioning hair repair masks for color-treated and chemically straightened hair.',
      author: 'Lucky Matai',
      date: '2026-07-25',
      category: 'Hair Care Tips',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80'
    },
    {
      id: 'b2',
      title: 'Complete Guide to O3+ Professional Facial Kits for Bridal Glow',
      slug: 'guide-to-o3-professional-facial-kits-bridal-glow',
      excerpt: 'Step-by-step breakdown of O3+ brightening facial treatment pods used by top beauty parlors and bridal makeup artists across MP.',
      author: 'Salon Expert',
      date: '2026-07-20',
      category: 'Skin Care & Facials',
      image: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-[#C8A97E] uppercase tracking-[0.2em] block">
            Haute Beautē Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#111111]">
            Beauty & Salon Articles
          </h1>
          <p className="text-xs text-neutral-500 max-w-xl mx-auto">
            Professional hair care guides, bridal makeup tips, and skincare insights from {GROUND_TRUTH_DATA.businessName}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="luxury-card overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="aspect-video overflow-hidden bg-[#F8F8F8]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold text-[#C8A97E] uppercase tracking-wider bg-[#F5EFE6] px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl font-bold text-[#111111] hover:text-[#C8A97E] transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-xs text-neutral-600 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex justify-between items-center text-xs border-t border-[#EAEAEA] text-neutral-400">
                <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> {post.author}</span>
                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
