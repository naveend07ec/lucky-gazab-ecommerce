import React, { useState } from 'react';
import { Image, Upload, Trash2, Check, FileText } from 'lucide-react';

export function MediaLibraryPage() {
  const [mediaList, setMediaList] = useState([
    { id: 'med-1', fileName: 'loreal-absolut-repair-mask.jpg', url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80', mimeType: 'image/jpeg', sizeBytes: 245000, altText: "L'Oréal Absolut Repair Hair Mask 250ml Jar" },
    { id: 'med-2', fileName: 'o3-facial-kit.jpg', url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80', mimeType: 'image/jpeg', sizeBytes: 312000, altText: 'O3+ Professional Facial Kit Box' }
  ]);

  const [altText, setAltText] = useState('');
  const [urlInput, setUrlInput] = useState('');

  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;
    const newMedia = {
      id: `med-${Date.now()}`,
      fileName: `image-${Date.now()}.jpg`,
      url: urlInput,
      mimeType: 'image/jpeg',
      sizeBytes: 150000,
      altText: altText || 'Cosmetics Asset'
    };
    setMediaList([newMedia, ...mediaList]);
    setUrlInput('');
    setAltText('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Media Library & Asset Manager</h1>
          <p className="text-xs text-slate-400">Manage uploaded product images, banners, EXIF stripped assets, and alt text for SEO</p>
        </div>
      </div>

      {/* Quick Upload Panel */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center">
          <Upload className="w-4 h-4 text-brand-400 mr-2" />
          Add New Media Asset (WebP / JPEG with EXIF Stripping)
        </h3>
        <form onSubmit={handleAddMedia} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <input
            type="url"
            required
            placeholder="Image Asset URL (e.g. https://images.unsplash.com/...)"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="sm:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
          />
          <input
            type="text"
            placeholder="Alt Text (SEO requirement)"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-white"
          />
          <button type="submit" className="sm:col-span-3 gradient-button py-2.5 rounded-xl font-bold text-xs">
            Upload & Encode Image Asset
          </button>
        </form>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {mediaList.map((m) => (
          <div key={m.id} className="glass-card overflow-hidden p-3 space-y-2 text-xs">
            <div className="aspect-square rounded-lg overflow-hidden bg-slate-950">
              <img src={m.url} alt={m.altText} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-semibold text-white truncate block">{m.fileName}</span>
              <span className="text-[10px] text-slate-400 block">{m.mimeType} • Math.round(m.sizeBytes/1024) KB</span>
              <p className="text-[10px] text-brand-300 truncate mt-1">Alt: {m.altText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
