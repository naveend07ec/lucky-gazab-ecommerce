import React from 'react';
import Link from 'next/link';
import { fetchProductBySlug } from '@/lib/api';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { Star, ShieldCheck, Truck, ShoppingBag, CheckCircle, MessageCircle, MapPin, Edit3 } from 'lucide-react';
import { ReviewModal } from '@/components/ReviewModal';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchProductBySlug(params.slug);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumbs */}
        <nav className="text-xs text-neutral-500 space-x-2">
          <Link href="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#111111]">Products</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">{product.name}</span>
        </nav>

        {/* PDP Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#F8F8F8] border border-[#EAEAEA]">
              <img
                src={product.images[0]?.url || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details & Purchase Form */}
          <div className="space-y-6">
            <div className="space-y-2 border-b border-[#EAEAEA] pb-4">
              <span className="text-xs font-bold text-[#C8A97E] uppercase tracking-wider block">
                {product.brand}
              </span>
              <h1 className="font-serif text-3xl font-extrabold text-[#111111] leading-tight">
                {product.name}
              </h1>
              <p className="text-neutral-600 text-xs leading-relaxed">{product.shortDescription}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-3 text-xs border-b border-[#EAEAEA] pb-4">
              <div className="flex text-[#C8A97E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A97E]" />
                ))}
              </div>
              <span className="font-bold text-[#111111]">{product.avgRating} / 5</span>
              <span className="text-neutral-400">({product.reviewCount} verified reviews)</span>
            </div>

            {/* Pricing Box */}
            <div className="space-y-2 p-5 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-extrabold text-[#111111]">₹{product.sellingPrice}</span>
                {product.mrp > product.sellingPrice && (
                  <span className="text-base text-neutral-400 line-through">₹{product.mrp}</span>
                )}
                {product.discountPercent > 0 && (
                  <span className="bg-[#111111] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Save {product.discountPercent}%
                  </span>
                )}
              </div>
              <p className="text-[11px] text-neutral-500">Inclusive of all taxes • Free shipping in Indore over ₹999</p>
            </div>

            {/* Add to Cart Actions */}
            <div className="space-y-3 pt-2">
              <Link
                href="/cart"
                className="luxury-button-primary w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 text-[#C8A97E]" />
                <span>Add to Shopping Bag</span>
              </Link>

              <a
                href={`https://wa.me/91${GROUND_TRUTH_DATA.whatsapp}?text=Hi%20Lucky's%20GAZAB%20HI%20GAZAB%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp Concierge</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-4 p-4 border border-[#EAEAEA] rounded-2xl text-xs">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#C8A97E]" />
                <span>100% Genuine Formula</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-[#C8A97E]" />
                <span>Indore Express Delivery</span>
              </div>
            </div>

            {/* Product Tabs / Information */}
            <div className="space-y-4 pt-4 text-xs text-neutral-700">
              <div className="border-b border-[#EAEAEA] pb-3">
                <h4 className="font-serif font-bold text-sm text-[#111111] mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-1">
                  {product.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="border-b border-[#EAEAEA] pb-3">
                <h4 className="font-serif font-bold text-sm text-[#111111] mb-2">Detailed Description</h4>
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <div className="border-b border-[#EAEAEA] pb-3">
                <h4 className="font-serif font-bold text-sm text-[#111111] mb-2">How to Use</h4>
                <p>{product.usageInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
