'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { ShieldCheck, Truck, Sparkles, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/catalog/products')
      .then(res => res.json())
      .then(json => {
        if (json.success && json.data) {
          setProducts(json.data.slice(0, 4));
        }
      })
      .catch(() => {
        // Fallback items if offline
        setProducts([
          {
            id: 'sp-1',
            name: "L'Oréal Professionnel X-Tenso Oleoshape Smoothing Cream",
            slug: 'loreal-xtenso-oleoshape-smoothing-cream',
            brand: "L'Oréal Professionnel",
            category: 'Salon Professional Products',
            sku: 'LOR-XTENSO-CREAM-400',
            sellingPrice: 1099,
            mrp: 1250,
            discountPercent: 12,
            avgRating: 4.9,
            reviewCount: 42,
            images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80' }]
          },
          {
            id: 'hc-1',
            name: "L'Oréal Professionnel Absolut Repair Hair Mask",
            slug: 'loreal-absolut-repair-mask',
            brand: "L'Oréal Professionnel",
            category: 'Hair Care & Hair Color',
            sku: 'LOR-ABS-MASK-250',
            sellingPrice: 855,
            mrp: 950,
            discountPercent: 10,
            avgRating: 4.8,
            reviewCount: 34,
            images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80' }]
          },
          {
            id: 'sc-1',
            name: 'O3+ Professional Brightening Facial Kit',
            slug: 'o3-professional-brightening-facial-kit',
            brand: 'O3+ Professional',
            category: 'Skin Care & Facial Kits',
            sku: 'O3-BRIGHT-FACIAL-KIT',
            sellingPrice: 1290,
            mrp: 1450,
            discountPercent: 11,
            avgRating: 4.9,
            reviewCount: 52,
            images: [{ url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80' }]
          },
          {
            id: 'cm-1',
            name: 'Maybelline Superstay Matte Ink Liquid Lipstick',
            slug: 'maybelline-superstay-matte-ink',
            brand: 'Maybelline New York',
            category: 'Branded Cosmetics & Makeup',
            sku: 'MAY-MATTE-INK-RULER',
            sellingPrice: 599,
            mrp: 699,
            discountPercent: 14,
            avgRating: 4.8,
            reviewCount: 89,
            images: [{ url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80' }]
          }
        ]);
      });
  }, []);

  const categories = [
    {
      title: 'Salon Professional Range',
      slug: 'salon-professional-products',
      subtitle: 'Shampoos, Masks, Serums & Hair Straightening Pods',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80'
    },
    {
      title: 'Skin Care & Facial Kits',
      slug: 'skin-care-facial-kits',
      subtitle: 'O3+ Brightening Pods & Dermaceutical Treatments',
      image: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80'
    },
    {
      title: 'Hair Care & Hair Color',
      slug: 'hair-care-hair-color',
      subtitle: 'Schwarzkopf Igora & L\'Oréal Absolut Repair',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80'
    },
    {
      title: 'Branded Cosmetics & Makeup',
      slug: 'branded-cosmetics-makeup',
      subtitle: 'Maybelline Lipsticks, Foundations & Accessories',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80'
    }
  ];

  return (
    <div className="space-y-16 pb-16 bg-white overflow-hidden">
      {/* Editorial Luxury Hero Section - Cinematic Entrance */}
      <section className="relative bg-[#111111] text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Left Content (Fade & Slide Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 text-left"
          >
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#8B1E3F] font-semibold border-b border-[#8B1E3F]/30 pb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Beautē & Salon Professional</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Elevate Your Beauty & <span className="italic text-[#8B1E3F]">Salon Experience</span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Welcome to <strong>{GROUND_TRUTH_DATA.businessName}</strong>, Indore's premier retail & wholesale distributor for 100% genuine salon professional products, branded cosmetics, and beauty essentials.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/products"
                  className="bg-[#8B1E3F] hover:bg-[#6d1731] text-white font-semibold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center space-x-2 shadow-lg"
                >
                  <span>Discover Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all"
                >
                  <span>Salon B2B Inquiry</span>
                </Link>
              </motion.div>
            </div>

            {/* Store Info Footer */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-6 text-xs text-neutral-400">
              <div>
                <span className="text-[#8B1E3F] font-bold block">Indore Flagship Store</span>
                <span>UG-2 Raunak Tower, Near Anand Bazar Sq.</span>
              </div>
              <div>
                <span className="text-[#8B1E3F] font-bold block">Phone / Helpline</span>
                <span>{GROUND_TRUTH_DATA.phoneLandline} | {GROUND_TRUTH_DATA.mobile}</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Image (Fade & Slide Right with subtle Zoom) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                alt="Luxury Cosmetics Display"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-[#F8F8F8] border border-[#E5E7EB] rounded-2xl text-center"
        >
          <div className="space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#8B1E3F] mx-auto" />
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#111111]">100% Genuine Guarantee</h4>
            <p className="text-[11px] text-[#6B7280]">Direct from authorized brand distributors</p>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#E5E7EB] pt-4 sm:pt-0">
            <Award className="w-6 h-6 text-[#8B1E3F] mx-auto" />
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#111111]">Salon Professional Pricing</h4>
            <p className="text-[11px] text-[#6B7280]">Special B2B wholesale rates for parlors & salons</p>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#E5E7EB] pt-4 sm:pt-0">
            <Truck className="w-6 h-6 text-[#8B1E3F] mx-auto" />
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#111111]">Fast MP & Interstate Shipping</h4>
            <p className="text-[11px] text-[#6B7280]">GST tax invoices provided with every purchase</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-[#111111]">
            Explore Beauty Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="luxury-card overflow-hidden group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="font-serif text-base font-bold text-[#111111] group-hover:text-[#8B1E3F] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-[#6B7280]">{cat.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Seller Products Section */}
      <section className="bg-[#F8F8F8] py-16 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">
                Top Rated Formulas
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#111111]">
                Best Sellers & Salon Favorites
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-semibold text-[#111111] hover:text-[#8B1E3F] uppercase tracking-wider flex items-center space-x-1"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Journal Blog Highlights */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">
            Expert Insights
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-[#111111]">
            Beauty & Salon Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="luxury-card overflow-hidden p-6 space-y-3"
          >
            <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-wider">Hair Care Tips</span>
            <Link href="/blog/top-5-salon-hair-masks-damaged-hair-indore">
              <h3 className="font-serif text-xl font-bold text-[#111111] hover:text-[#8B1E3F] transition-colors">
                Top 5 Salon Professional Hair Care Masks for Damaged Hair in Indore
              </h3>
            </Link>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Discover expert tips from salon professionals on choosing deep conditioning hair repair masks for chemically straightened and color-treated hair.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="luxury-card overflow-hidden p-6 space-y-3"
          >
            <span className="text-[10px] font-bold text-[#8B1E3F] uppercase tracking-wider">Skin Care & Facials</span>
            <Link href="/blog/guide-to-o3-professional-facial-kits-bridal-glow">
              <h3 className="font-serif text-xl font-bold text-[#111111] hover:text-[#8B1E3F] transition-colors">
                Complete Guide to O3+ Professional Facial Kits for Bridal Glow
              </h3>
            </Link>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Step-by-step breakdown of O3+ brightening facial treatment pods used by top beauty parlors and bridal makeup artists across MP.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
