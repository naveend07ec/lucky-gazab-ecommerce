'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { ShoppingBag, Search, Phone, MessageCircle, User, Heart, Menu, X, LogOut, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function Navbar({ cartCount = 1 }: { cartCount?: number }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      {/* Top Announcement Bar - Dark Charcoal & Deep Burgundy Accents */}
      <div className="bg-[#111111] text-[11px] py-2 px-4 text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#8B1E3F] font-semibold tracking-wide">
              <Phone className="w-3 h-3 mr-1.5" />
              Tel: {GROUND_TRUTH_DATA.phoneLandline} | Mobile: {GROUND_TRUTH_DATA.mobile}
            </span>
            <span className="hidden md:inline text-neutral-400">
              UG-2 Raunak Tower, Near Anand Bazar Square, Indore
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/91${GROUND_TRUTH_DATA.whatsapp}?text=Hi%20Lucky's%20GAZAB%20HI%20GAZAB%2C%20I%20have%20an%20inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B1E3F] font-semibold flex items-center hover:underline tracking-wide"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              WhatsApp Concierge
            </a>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-300 font-medium tracking-wider uppercase text-[10px]">
              Retail & Salon Wholesale
            </span>
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
        {/* Brand Logo - Minimalist Deep Burgundy */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full bg-[#111111] text-white border border-[#8B1E3F] flex items-center justify-center font-serif text-lg font-bold">
            G
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111] block leading-none">
              LUCKY'S <span className="text-[#8B1E3F]">GAZAB HI GAZAB</span>
            </span>
            <span className="text-[9px] text-[#6B7280] tracking-[0.2em] uppercase block mt-1">
              Haute Beautē & Salon Professional • Indore
            </span>
          </div>
        </Link>

        {/* Minimalist Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search L'Oréal, O3+, Schwarzkopf, Maybelline..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F8F8F8] border border-[#E5E7EB] rounded-full py-2.5 pl-4 pr-10 text-xs text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#8B1E3F] focus:bg-white transition-all"
          />
          <Link
            href={`/products?search=${encodeURIComponent(searchQuery)}`}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#111111] hover:bg-[#8B1E3F] text-white p-1.5 rounded-full transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
          </Link>

          {/* Autocomplete Dropdown */}
          {searchQuery.trim().length > 1 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden z-50 p-2 space-y-1 shadow-xl">
              {[
                { name: "L'Oréal Professionnel Absolut Repair Mask", slug: "loreal-absolut-repair-mask", brand: "L'Oréal", price: 855 },
                { name: "O3+ Professional Brightening Facial Kit", slug: "o3-professional-brightening-facial-kit", brand: "O3+", price: 1290 },
                { name: "Schwarzkopf Igora Royal Hair Color", slug: "schwarzkopf-igora-royal-shade-5-0", brand: "Schwarzkopf", price: 460 }
              ]
                .filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()) || i.brand.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/product/${item.slug}`}
                    onClick={() => setSearchQuery('')}
                    className="flex justify-between items-center p-2.5 rounded-xl hover:bg-[#F8F8F8] text-xs transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-[#111111] block">{item.name}</span>
                      <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">{item.brand}</span>
                    </div>
                    <span className="font-extrabold text-[#8B1E3F]">₹{item.price}</span>
                  </Link>
                ))}
            </div>
          )}
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 text-xs">
          {isAuthenticated ? (
            <>
              <Link href="/account" className="text-[#111111] hover:text-[#8B1E3F] transition-colors hidden sm:flex items-center space-x-1.5 font-semibold">
                <User className="w-4 h-4" />
                <span>Account</span>
              </Link>
              <button
                onClick={logout}
                className="text-[#DC2626] hover:text-red-700 transition-colors hidden sm:flex items-center space-x-1.5 font-semibold"
                title="Sign Out of Account"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[#111111] hover:text-[#8B1E3F] px-3.5 py-1.5 rounded-lg border border-[#E5E7EB] hover:border-[#8B1E3F] transition-all flex items-center space-x-1.5 font-medium">
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </Link>
              <Link href="/register" className="bg-[#111111] hover:bg-[#8B1E3F] text-white px-3.5 py-1.5 rounded-lg transition-all hidden sm:flex items-center space-x-1.5 font-medium">
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </Link>
            </>
          )}

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="bg-[#111111] hover:bg-[#8B1E3F] text-white px-4 py-2 rounded-full font-medium text-xs flex items-center space-x-2 transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#8B1E3F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#111111] p-2 focus:outline-none"
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Visible on Mobile 320px - 768px) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 space-y-4 shadow-xl text-xs font-semibold uppercase tracking-wider">
          <div className="relative">
            <input
              type="text"
              placeholder="Search L'Oréal, O3+, Schwarzkopf..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8F8F8] border border-[#E5E7EB] rounded-full py-2 pl-4 pr-10 text-xs text-[#111111]"
            />
            <Link
              href={`/products?search=${encodeURIComponent(searchQuery)}`}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#111111] text-white p-1 rounded-full"
            >
              <Search className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-[#111111] hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              All Collections
            </Link>
            <Link href="/products?category=salon-professional-products" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Salon Professional
            </Link>
            <Link href="/products?category=hair-care-hair-color" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Hair Care & Color
            </Link>
            <Link href="/products?category=skin-care-facial-kits" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Skin Care & Facials
            </Link>
            <Link href="/products?category=branded-cosmetics-makeup" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Branded Cosmetics
            </Link>
            <Link href="/track-order" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Track Order
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Beauty Journal
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-neutral-700 hover:text-[#8B1E3F] py-1 border-b border-[#E5E7EB]">
              Contact Us
            </Link>

            {isAuthenticated ? (
              <div className="pt-2 space-y-2">
                <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="block text-[#111111] font-bold">
                  My Account Profile ({user?.name || 'Customer'})
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-red-600 font-bold text-left block"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-2 flex gap-3">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 border border-[#E5E7EB] rounded-lg text-[#111111] font-bold">
                  Sign In
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="flex-1 text-center py-2 bg-[#111111] text-white rounded-lg font-bold">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Luxury Category Links (Desktop) */}
      <nav className="hidden md:block bg-white border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-8 text-xs font-semibold uppercase tracking-wider py-3">
          <Link href="/products" className="text-[#111111] hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            All Collections
          </Link>
          <Link href="/products?category=salon-professional-products" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Salon Professional
          </Link>
          <Link href="/products?category=hair-care-hair-color" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Hair Care & Color
          </Link>
          <Link href="/products?category=skin-care-facial-kits" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Skin Care & Facials
          </Link>
          <Link href="/products?category=branded-cosmetics-makeup" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Branded Cosmetics
          </Link>
          <Link href="/track-order" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Track Order
          </Link>
          <Link href="/blog" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Beauty Journal
          </Link>
          <Link href="/contact" className="text-neutral-700 hover:text-[#8B1E3F] transition-colors border-b-2 border-transparent hover:border-[#8B1E3F] pb-0.5">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
