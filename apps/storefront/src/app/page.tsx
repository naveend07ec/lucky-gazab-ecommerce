'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { ShieldCheck, Truck, Sparkles, Award, ArrowRight, Star, Heart, CheckCircle2, ShoppingBag, Mail, RefreshCw, Headphones, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroLooks = [
    {
      id: 'look-1',
      title: 'TRY THE LOOK ON NOW!',
      subtitle: 'MAKE HEARTS SKIP A BEAT',
      badge: 'MAYBELLINE NEW YORK VIRTUAL STUDIO',
      bgImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&q=80',
      themeColor: '#C026D3',
      products: [
        {
          num: 1,
          name: 'FIT ME FOUNDATION',
          subName: 'Matte + Poreless Liquid Foundation',
          price: 499,
          mrp: 599,
          slug: 'maybelline-fitme-found-128',
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
          hotspotPos: { top: '25%', left: '48%' } // Eyes/Skin
        },
        {
          num: 2,
          name: 'COLOR RIVALS PALETTE',
          subName: '9 Color Pigmented Eyeshadow',
          price: 289,
          mrp: 349,
          slug: 'swiss-beauty-eye-palette-01',
          image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&q=80',
          hotspotPos: { top: '38%', left: '55%' } // Eye Makeup
        },
        {
          num: 3,
          name: 'SUPER STAY MATTE INK',
          subName: '16HR Liquid Lipstick Ruler 80',
          price: 599,
          mrp: 699,
          slug: 'maybelline-superstay-matte-ink-ruler',
          image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&q=80',
          hotspotPos: { top: '56%', left: '50%' } // Lips
        }
      ]
    },
    {
      id: 'look-2',
      title: 'SALON KERATIN SMOOTH',
      subtitle: '72-HOUR INTENSE GLOSS & SHINE',
      badge: "L'ORÉAL PROFESSIONNEL PARIS",
      bgImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80',
      themeColor: '#2563EB',
      products: [
        {
          num: 1,
          name: 'X-TENSO OLEOSHAPE',
          subName: 'Smoothing & Straightening Cream',
          price: 1099,
          mrp: 1250,
          slug: 'loreal-xtenso-oleoshape-smoothing-cream',
          image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&q=80',
          hotspotPos: { top: '22%', left: '42%' }
        },
        {
          num: 2,
          name: 'ABSOLUT REPAIR MASK',
          subName: 'Wheat Oil Resurfacing Masque',
          price: 855,
          mrp: 950,
          slug: 'loreal-absolut-repair-mask-250',
          image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=300&q=80',
          hotspotPos: { top: '45%', left: '60%' }
        },
        {
          num: 3,
          name: 'OIL HAIR SERUM',
          subName: '6 Rare Flower Oils Nourishment',
          price: 549,
          mrp: 649,
          slug: 'loreal-extraordinary-oil-100',
          image: 'https://images.unsplash.com/photo-1608248597263-0057e57b4524?w=300&q=80',
          hotspotPos: { top: '65%', left: '46%' }
        }
      ]
    },
    {
      id: 'look-3',
      title: 'GLASS SKIN FACIAL GLOW',
      subtitle: 'BRIDAL RADIANCE & DEEP HYDRATION',
      badge: 'O3+ PROFESSIONAL SKINCARE',
      bgImage: 'https://images.unsplash.com/photo-1567928269937-ae1465228514?w=1600&q=80',
      themeColor: '#D97706',
      products: [
        {
          num: 1,
          name: 'BRIGHTENING FACIAL KIT',
          subName: '5-Step Professional Bridal Kit',
          price: 1290,
          mrp: 1450,
          slug: 'o3-professional-brightening-facial-kit',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&q=80',
          hotspotPos: { top: '30%', left: '50%' }
        },
        {
          num: 2,
          name: 'VITAMIN C FACE SERUM',
          subName: '10% Ethyl Ascorbic Acid Glow',
          price: 649,
          mrp: 699,
          slug: 'minimalist-vitc-serum-30',
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
          hotspotPos: { top: '48%', left: '44%' }
        },
        {
          num: 3,
          name: 'SUNSCREEN MATTE GEL',
          subName: 'SPF 50 PA++++ UVA/UVB Shield',
          price: 385,
          mrp: 455,
          slug: 'lotus-safesun-spf50-100',
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&q=80',
          hotspotPos: { top: '62%', left: '55%' }
        }
      ]
    }
  ];

  // Auto cycle hero looks if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveLookIndex((prev) => (prev + 1) % heroLooks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, heroLooks.length]);

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
        // Fallback catalog
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

  const currentLook = heroLooks[activeLookIndex];

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
      {/* 1. MAYBELLINE-STYLE INTERACTIVE HERO SECTION ("TRY THE LOOK ON NOW!") */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative min-h-[85vh] lg:h-[90vh] w-full bg-[#111111] text-white overflow-hidden flex items-center">
        {/* Background Image Carousel with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLook.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentLook.bgImage}
              alt={currentLook.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            />
            {/* Dramatic Purple / Dark Gradient Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls (Left/Right Arrows + Play/Pause) */}
        <div className="absolute top-6 right-6 z-30 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <button
            onClick={() => setActiveLookIndex((prev) => (prev === 0 ? heroLooks.length - 1 : prev - 1))}
            className="text-white hover:text-[#E5C384] transition-colors"
            title="Previous Look"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono font-bold tracking-widest text-neutral-300">
            {activeLookIndex + 1} / {heroLooks.length}
          </span>

          <button
            onClick={() => setActiveLookIndex((prev) => (prev + 1) % heroLooks.length)}
            className="text-white hover:text-[#E5C384] transition-colors"
            title="Next Look"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:text-[#E5C384] transition-colors pl-2 border-l border-white/20"
            title={isPlaying ? 'Pause Auto Play' : 'Play Auto Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Interactive Face Hotspots ([1], [2], [3]) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {currentLook.products.map((p) => (
            <motion.div
              key={p.num}
              style={{ top: p.hotspotPos.top, left: p.hotspotPos.left }}
              className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              onMouseEnter={() => setHoveredHotspot(p.num)}
              onMouseLeave={() => setHoveredHotspot(null)}
              whileHover={{ scale: 1.25 }}
            >
              <div className={`relative flex items-center justify-center w-8 h-8 rounded-full font-extrabold text-xs text-black border-2 border-white shadow-2xl transition-all ${
                hoveredHotspot === p.num ? 'bg-[#E5C384] scale-125 ring-4 ring-white/50' : 'bg-white/90'
              }`}>
                {p.num}
                {/* Pulsing ring around hotspot */}
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-40" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Banner Content (Bottom Left + Right Product Cards) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end py-12">
          
          {/* Left Column: Bold Condensed Headline & CTA */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-[#E5C384]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLook.badge}</span>
            </div>

            <motion.h1
              key={`title-${currentLook.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans font-black text-5xl sm:text-7xl lg:text-7xl uppercase tracking-tighter leading-none text-white drop-shadow-2xl"
            >
              {currentLook.title}
            </motion.h1>

            <motion.p
              key={`sub-${currentLook.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-neutral-200"
            >
              {currentLook.subtitle}
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="bg-white hover:bg-[#E5C384] text-black font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all shadow-2xl hover:scale-105"
              >
                Shop Featured Products
              </Link>
              <Link
                href={`/product/${currentLook.products[2].slug}`}
                className="bg-black/50 hover:bg-black/80 text-white font-bold border border-white/40 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-md transition-all"
              >
                Virtual Try On
              </Link>
            </div>

            {/* Look Selector Pills */}
            <div className="flex items-center space-x-3 pt-6">
              {heroLooks.map((look, idx) => (
                <button
                  key={look.id}
                  onClick={() => setActiveLookIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeLookIndex === idx ? 'w-10 bg-[#E5C384]' : 'w-3 bg-white/40 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Floating Product Cards (Numbered 1, 2, 3) */}
          <div className="lg:col-span-5 space-y-3">
            {currentLook.products.map((p) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: p.num * 0.1 }}
                onMouseEnter={() => setHoveredHotspot(p.num)}
                onMouseLeave={() => setHoveredHotspot(null)}
                className={`relative flex items-center space-x-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-lg text-black border transition-all shadow-xl cursor-pointer ${
                  hoveredHotspot === p.num ? 'border-[#E5C384] ring-2 ring-[#E5C384] bg-white translate-x-[-8px]' : 'border-white/50 hover:bg-white'
                }`}
              >
                {/* Number Badge (1, 2, 3) */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white font-black text-xs flex items-center justify-center">
                  {p.num}
                </div>

                {/* Product Thumbnail */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-200">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-left min-w-0">
                  <span className="font-extrabold text-xs uppercase tracking-wider block text-black truncate">
                    {p.name}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium block truncate">
                    {p.subName}
                  </span>
                  <div className="flex items-center space-x-2 pt-0.5">
                    <span className="font-extrabold text-xs text-black">₹{p.price}</span>
                    <span className="text-[10px] text-neutral-400 line-through">₹{p.mrp}</span>
                  </div>
                </div>

                {/* Shop Button */}
                <Link
                  href={`/product/${p.slug}`}
                  className="flex-shrink-0 bg-black hover:bg-[#8B1E3F] text-white p-2.5 rounded-full transition-colors"
                  title="View Product Details"
                >
                  <ShoppingBag className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 2. EDITORIAL SPOTLIGHT HERO / SECOND HERO */}
      {/* --------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-[#F9F8F6] border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side - Salon & Skincare Model */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=80"
                alt="Professional Salon Hair Treatment & Skincare Model"
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
      {/* 3. LIFESTYLE CATEGORIES GRID WITH COSMETIC MODELS */}
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
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80"
              alt="Salon Hair Care Treatment Model"
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
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80"
              alt="Model with Hair Care Serum"
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
              alt="Skincare Model Applying Face Serum"
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
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80"
              alt="Cosmetics Model Applying Lipstick Makeup"
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
              alt="Professional Vega Beauty Accessories Tools"
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
