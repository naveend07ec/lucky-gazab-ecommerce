'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/lib/api';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProductCard({ product }: { product: ProductItem }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const primaryImage = product.images?.[0]?.url || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="luxury-card overflow-hidden group flex flex-col justify-between p-4 bg-white relative border border-[#E5E7EB] rounded-xl transition-shadow duration-300"
    >
      {/* Discount Badge */}
      {product.discountPercent > 0 && (
        <span className="absolute top-3 left-3 z-10 bg-[#8B1E3F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
          {product.discountPercent}% OFF
        </span>
      )}

      {/* Wishlist Heart Button with Tap Scale Micro-Interaction */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => setIsWishlisted(!isWishlisted)}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isWishlisted ? 'bg-red-50 text-[#8B1E3F] border border-red-200' : 'bg-white/90 text-neutral-400 hover:text-[#8B1E3F] border border-[#E5E7EB]'
        }`}
        title="Save to Wishlist"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8B1E3F]' : ''}`} />
      </motion.button>

      {/* Product Image */}
      <div>
        <Link href={`/product/${product.slug}`} className="block overflow-hidden rounded-lg bg-[#F8F8F8] aspect-square relative mb-4">
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Brand & Title */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-wider block">
            {product.brand}
          </span>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-sm font-bold text-[#111111] hover:text-[#8B1E3F] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
      </div>

      {/* Rating & Pricing */}
      <div className="mt-4 space-y-3 pt-3 border-t border-[#E5E7EB]">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 fill-[#8B1E3F] text-[#8B1E3F]" />
            <span className="font-bold text-[#111111]">{product.avgRating}</span>
            <span className="text-[#6B7280] text-[10px]">({product.reviewCount})</span>
          </div>
          <span className="text-[10px] text-[#16A34A] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
            In Stock
          </span>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-base font-extrabold text-[#111111]">₹{product.sellingPrice}</span>
          {product.mrp > product.sellingPrice && (
            <span className="text-xs text-[#6B7280] line-through">₹{product.mrp}</span>
          )}
        </div>

        {/* Add to Cart Primary Button */}
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            href={`/product/${product.slug}`}
            className="luxury-button-primary w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-white" />
            <span>View Details & Buy</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
