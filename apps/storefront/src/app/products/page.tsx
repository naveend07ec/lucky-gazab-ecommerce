import React from 'react';
import Link from 'next/link';
import { fetchProducts } from '@/lib/api';
import { ProductCard } from '@/components/ProductCard';

export default async function ProductsListingPage({
  searchParams
}: {
  searchParams?: { category?: string; brand?: string; search?: string };
}) {
  const products = await fetchProducts(searchParams);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#EAEAEA] pb-6 space-y-2 text-center sm:text-left">
          <span className="text-[10px] font-bold text-[#C8A97E] uppercase tracking-[0.2em] block">
            Haute Beautē Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#111111]">
            {searchParams?.category ? searchParams.category.replace(/-/g, ' ').toUpperCase() : 'All Beauty & Salon Collections'}
          </h1>
          <p className="text-xs text-neutral-500">
            Showing {products.length} genuine retail & salon professional items
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs">
          <Link
            href="/products"
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              !searchParams?.category ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-700 border-[#EAEAEA] hover:border-[#111111]'
            }`}
          >
            All Products
          </Link>
          <Link
            href="/products?category=salon-professional-products"
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              searchParams?.category === 'salon-professional-products' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-700 border-[#EAEAEA] hover:border-[#111111]'
            }`}
          >
            Salon Professional Range
          </Link>
          <Link
            href="/products?category=hair-care-hair-color"
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              searchParams?.category === 'hair-care-hair-color' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-700 border-[#EAEAEA] hover:border-[#111111]'
            }`}
          >
            Hair Care & Color
          </Link>
          <Link
            href="/products?category=skin-care-facial-kits"
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              searchParams?.category === 'skin-care-facial-kits' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-700 border-[#EAEAEA] hover:border-[#111111]'
            }`}
          >
            Skin Care & Facials
          </Link>
          <Link
            href="/products?category=branded-cosmetics-makeup"
            className={`px-4 py-2 rounded-full font-semibold border transition-all ${
              searchParams?.category === 'branded-cosmetics-makeup' ? 'bg-[#111111] text-white border-[#111111]' : 'bg-white text-neutral-700 border-[#EAEAEA] hover:border-[#111111]'
            }`}
          >
            Branded Cosmetics
          </Link>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 bg-[#F8F8F8] border border-[#EAEAEA] rounded-2xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#111111]">No Matching Products Found</h3>
            <p className="text-xs text-neutral-500">Try refining your search filter or explore all collections.</p>
            <Link href="/products" className="luxury-button-primary px-6 py-2.5 rounded-lg font-semibold text-xs inline-block">
              View All Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
