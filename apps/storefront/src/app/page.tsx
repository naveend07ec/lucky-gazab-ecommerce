'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { ShieldCheck, Truck, Sparkles, Award, ArrowRight, Star, Heart, CheckCircle2, ShoppingBag, Mail, RefreshCw, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/catalog')
      .then(res => res.json())
      .then(json => {
        const items = json.products || json.data;
        if (items && Array.isArray(items)) {
          setProducts(items.slice(0, 8));
        }
      })
      .catch(() => {
        // Fallback items if offline
        setProducts([
          {
            id: 'sp-1',
            name: "L'Oréal Professionnel X-Tenso Oleoshape Smoothing Cream (400g)",
            slug: 'loreal-xtenso-oleoshape-smoothing-cream',
            brand: "L'Oréal Professionnel",
            category: 'Salon Professional Products',
            sku: 'LOR-XTENSO-CREAM-400',
            sellingPrice: 1099,
            mrp: 1250,
            discountPercent: 12,
            avgRating: 4.9,
            reviewCount: 142,
            images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80' }]
          },
          {
            id: 'hc-1',
            name: "L'Oréal Professionnel Absolut Repair Hair Mask (250ml)",
            slug: 'loreal-absolut-repair-mask-250',
            brand: "L'Oréal Professionnel",
            category: 'Hair Care & Hair Color',
            sku: 'LOR-ABS-MASK-250',
            sellingPrice: 855,
            mrp: 950,
            discountPercent: 10,
            avgRating: 4.8,
            reviewCount: 160,
            images: [{ url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80' }]
          },
          {
            id: 'sc-1',
            name: 'O3+ Professional Brightening Facial Kit for Radiant Glow',
            slug: 'o3-professional-brightening-facial-kit',
            brand: 'O3+ Professional',
            category: 'Skin Care & Facial Kits',
            sku: 'O3-BRIGHT-FACIAL-KIT',
            sellingPrice: 1290,
            mrp: 1450,
            discountPercent: 11,
            avgRating: 4.9,
            reviewCount: 290,
            images: [{ url: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80' }]
          },
          {
            id: 'cm-1',
            name: 'Maybelline Superstay Matte Ink Liquid Lipstick - Ruler 80',
            slug: 'maybelline-superstay-matte-ink-ruler',
            brand: 'Maybelline New York',
            category: 'Branded Cosmetics & Makeup',
            sku: 'MAY-MATTE-INK-RULER-80',
            sellingPrice: 599,
            mrp: 699,
            discountPercent: 14,
            avgRating: 4.8,
            reviewCount: 380,
            images: [{ url: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80' }]
          }
        ]);
      });
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const brandLogos = [
    "L'Oréal", "Maybelline", "Lakmé", "Colorbar", "Schwarzkopf", "Matrix", "Minimalist", "Mamaearth", "Lotus", "WOW"
  ];

  const testimonials = [
    {
      id: 't1',
      name: 'Pooja Deshmukh',
      role: 'Salon Owner, Indore',
      comment: "Lucky's GAZAB HI GAZAB is our go-to wholesale distributor for L'Oréal and O3+ kits. 100% genuine products with fastest local delivery!",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80'
    },
    {
      id: 't2',
      name: 'Rohan Mehta',
      role: 'Celebrity Hair Stylist',
      comment: 'Unmatched collection of Schwarzkopf and Olaplex professional lines. Authentic GST invoice provided on every purchase.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80'
    },
    {
      id: 't3',
      name: 'Simran Kaur',
      role: 'Beauty Content Creator',
      comment: 'The skin care range is incredible! From Minimalist serums to Lotus sunscreens, everything arrives fresh and genuine.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#111111] overflow-x-hidden">
      {/* --------------------------------------------------------------------- */}
      {/* 1. LUXURY FULL-SCREEN HERO SECTION (90-100VH) */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative h-[90vh] sm:h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#111111]">
        {/* Background Image with Slow Zoom */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80"
            alt="Beauty Model High Fashion Hair & Makeup"
            className="w-full h-full object-cover object-center opacity-85"
          />
        </motion.div>

        {/* High-Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />

        {/* Hero Content Box */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#E5C384]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Haute Beautē & Salon Professional</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Discover Your Beauty, <span className="italic font-normal text-[#E5C384]">Naturally.</span>
            </h1>

            <p className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
              Premium Hair Care, Skin Care & Branded Cosmetics crafted for every style. Authorized retail & salon distributor in Indore.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/products"
                className="bg-white hover:bg-[#E5C384] text-[#111111] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Shop Collection
              </Link>
              <Link
                href="/products?category=salon-professional-products"
                className="bg-transparent hover:bg-white/10 text-white font-bold border border-white/40 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm transition-all"
              >
                Explore Salon Brands
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 2. EDITORIAL SPOTLIGHT HERO / SECOND HERO */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#F9F8F6] border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1000&q=80"
                alt="Professional Salon Collection Hairdresser Styling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">Authorized Wholesale Partner</span>
                <span className="font-serif text-xl font-bold">L'Oréal & Schwarzkopf Professional</span>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-left"
            >
              <span className="text-xs font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">
                Professional Salon Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] leading-tight">
                Transformative Care For Salon Perfection.
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Curated especially for professional salons, hair stylists, and beauty connoisseurs. Experience keratin treatments, scalp detox serums, and intense hydration masks delivered directly from authorized manufacturers.
              </p>
              <div className="pt-2">
                <Link
                  href="/products?category=salon-professional-products"
                  className="inline-flex items-center space-x-2 bg-[#111111] hover:bg-[#8B1E3F] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
                >
                  <span>Shop Salon Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 3. LIFESTYLE CATEGORIES GRID WITH MODEL IMAGES */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">Curated Taxonomy</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">Explore Beauty Categories</h2>
          <p className="text-xs sm:text-sm text-neutral-500">Discover 175+ luxury products across salon, hair care, skin care, makeup, and tools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Category 1: Salon Professional */}
          <Link href="/products?category=salon-professional-products" className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg block">
            <img
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
              alt="Salon Professional Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">35 Products</span>
              <h3 className="font-serif text-2xl font-bold">Salon Professional</h3>
              <span className="text-xs text-neutral-300 font-medium block">L'Oréal, Schwarzkopf, Matrix, Olaplex</span>
            </div>
          </Link>

          {/* Category 2: Hair Care & Hair Color */}
          <Link href="/products?category=hair-care-hair-color" className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg block">
            <img
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80"
              alt="Hair Care & Color Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">35 Products</span>
              <h3 className="font-serif text-2xl font-bold">Hair Care & Color</h3>
              <span className="text-xs text-neutral-300 font-medium block">Shampoos, Masks, Serums, Colors</span>
            </div>
          </Link>

          {/* Category 3: Skin Care & Facial Kits */}
          <Link href="/products?category=skin-care-facial-kits" className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg block">
            <img
              src="https://images.unsplash.com/photo-1567928269937-ae1465228514?w=800&q=80"
              alt="Skin Care Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">35 Products</span>
              <h3 className="font-serif text-2xl font-bold">Skin Care & Facials</h3>
              <span className="text-xs text-neutral-300 font-medium block">O3+ Kits, Serums, Sunscreens, Cleansers</span>
            </div>
          </Link>

          {/* Category 4: Branded Cosmetics */}
          <Link href="/products?category=branded-cosmetics-makeup" className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg block sm:col-span-1 lg:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80"
              alt="Branded Cosmetics Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">35 Products</span>
              <h3 className="font-serif text-2xl font-bold">Branded Cosmetics</h3>
              <span className="text-xs text-neutral-300 font-medium block">Maybelline, Lakmé, Sugar, Colorbar</span>
            </div>
          </Link>

          {/* Category 5: Beauty Tools */}
          <Link href="/products?category=beauty-accessories-tools" className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg block sm:col-span-2 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1000&q=80"
              alt="Beauty Tools Category"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5C384] block">35 Products</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">Beauty Accessories & Salon Tools</h3>
              <span className="text-xs text-neutral-300 font-medium block">Vega Professional Dryers, Straighteners, Steamers, Scissors & Brushes</span>
            </div>
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 4. PROMOTIONAL FEATURED BANNER */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative py-20 bg-[#111827] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1600&q=80" alt="Promotional Banner Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5C384]">Special Indore Offer</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">Glow Like Never Before.</h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light">
            Use code <strong className="text-white underline">GAZAB10</strong> at checkout to get flat 10% OFF on all orders above ₹500. Free express delivery in Indore.
          </p>
          <div>
            <Link href="/products" className="bg-[#8B1E3F] hover:bg-[#A3244B] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all inline-block shadow-lg">
              Claim Offer Now
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 5. BEST SELLERS PRODUCT GRID */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[#EAEAEA] pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">Top Rated</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">Best Selling Products</h2>
          </div>
          <Link href="/products" className="text-xs font-bold text-[#111111] hover:text-[#8B1E3F] uppercase tracking-wider flex items-center space-x-1">
            <span>View All 175 Items</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 6. AUTHORIZED BRANDS SLIDER / LOGO GRID */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 bg-[#F9F8F6] border-y border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] block">
            Authorized Brand Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {brandLogos.map((brand, i) => (
              <span key={i} className="font-serif text-lg sm:text-2xl font-extrabold tracking-wider text-neutral-800 hover:text-[#8B1E3F] transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 7. CUSTOMER TESTIMONIALS / REVIEWS */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#8B1E3F] uppercase tracking-[0.2em] block">Client Feedback</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">Loved By Salons & Beauty Connoisseurs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-[#EAEAEA] rounded-2xl p-6 space-y-4 shadow-sm hover:border-[#8B1E3F] transition-all">
              <div className="flex items-center space-x-1 text-[#D97706]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">"{t.comment}"</p>
              <div className="flex items-center space-x-3 pt-2 border-t border-[#EAEAEA]">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-left leading-tight">
                  <span className="font-bold text-xs text-[#111111] block">{t.name}</span>
                  <span className="text-[10px] text-neutral-400 font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 8. WHY CHOOSE US VALUE PROPOSITIONS */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#E5C384]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider">100% Genuine Products</h4>
            <p className="text-[11px] text-neutral-400">Direct from authorized brand distributors.</p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#E5C384]">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider">Fast Local Delivery</h4>
            <p className="text-[11px] text-neutral-400">Same-day dispatch across Indore MP.</p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#E5C384]">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider">Easy Returns</h4>
            <p className="text-[11px] text-neutral-400">Hassle-free 7-day return policy.</p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#E5C384]">
              <Headphones className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider">Expert Support</h4>
            <p className="text-[11px] text-neutral-400">WhatsApp consultation for salon orders.</p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 9. NEWSLETTER SUBSCRIPTION SECTION */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative py-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1522337094846-8a8385875974?w=1600&q=80" alt="Newsletter Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5C384]">Join Beauty Insider</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Subscribe For Exclusive Salon Offers</h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-light">
            Get early access to new brand arrivals, salon wholesale discounts, and beauty tips directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-[#E5C384]"
            />
            <button
              type="submit"
              className="bg-white hover:bg-[#E5C384] text-[#111111] font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold text-[#E5C384]">
              Thank you for subscribing to Lucky's GAZAB beauty newsletter!
            </motion.p>
          )}
        </div>
      </section>
    </div>
  );
}
