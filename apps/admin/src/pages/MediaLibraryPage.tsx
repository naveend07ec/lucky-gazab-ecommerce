import React, { useState } from 'react';
import { Image, Upload, Trash2, CheckCircle2 } from 'lucide-react';

export function MediaLibraryPage() {
  const [images, setImages] = useState([
    { id: 'img1', name: 'loreal-absolut-repair.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', size: '245 KB' },
    { id: 'img2', name: 'o3-brightening-facial-kit.jpg', url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80', size: '312 KB' },
    { id: 'img3', name: 'maybelline-matte-ink.jpg', url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80', size: '180 KB' }
  ]);

  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Media Assets & Image Library</h1>
          <p className="text-xs text-[#6B7280]">Product photos, salon campaign banners, and CDN image management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.id} className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs p-4 space-y-3">
            <div className="aspect-[4/3] bg-[#F8FAFC] rounded-lg overflow-hidden border border-[#E5E7EB]">
              <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center text-xs">
              <div>
                <span className="font-bold text-[#111827] block truncate max-w-[180px]">{img.name}</span>
                <span className="text-[10px] text-[#6B7280]">{img.size}</span>
              </div>
              <button onClick={() => setImages(images.filter(i => i.id !== img.id))} className="text-[#475569] hover:text-[#DC2626] p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
