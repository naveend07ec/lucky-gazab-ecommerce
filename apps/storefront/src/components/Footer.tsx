import React from 'react';
import Link from 'next/link';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#8B1E3F] text-white flex items-center justify-center font-serif text-lg font-bold">
                G
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                LUCKY'S <span className="text-[#8B1E3F]">GAZAB HI GAZAB</span>
              </span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Indore's trusted retail & wholesale destination for 100% original branded cosmetics, salon professional hair care, facial treatment kits, and beauty supplies.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#8B1E3F] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Authorized Distributor</span>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Beauty Collections
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/products?category=salon-professional-products" className="hover:text-[#8B1E3F] transition-colors">Salon Professional Range</Link></li>
              <li><Link href="/products?category=hair-care-hair-color" className="hover:text-[#8B1E3F] transition-colors">Hair Care & Hair Color</Link></li>
              <li><Link href="/products?category=skin-care-facial-kits" className="hover:text-[#8B1E3F] transition-colors">Skin Care & Facial Kits</Link></li>
              <li><Link href="/products?category=branded-cosmetics-makeup" className="hover:text-[#8B1E3F] transition-colors">Branded Cosmetics</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="/track-order" className="hover:text-[#8B1E3F] transition-colors">Track Order Status</Link></li>
              <li><Link href="/blog" className="hover:text-[#8B1E3F] transition-colors">Beauty Journal & Tips</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#8B1E3F] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-[#8B1E3F] transition-colors">Contact Store Location</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Indore Store Location
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                <span>{GROUND_TRUTH_DATA.address.streetAddress}, Indore, {GROUND_TRUTH_DATA.address.postalCode}, MP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8B1E3F] shrink-0" />
                <span>Landline: {GROUND_TRUTH_DATA.phoneLandline}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8B1E3F] shrink-0" />
                <span>Mobile: {GROUND_TRUTH_DATA.mobile}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#8B1E3F] shrink-0" />
                <span>{GROUND_TRUTH_DATA.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500 flex flex-wrap justify-between items-center gap-4">
          <p>© 2026 {GROUND_TRUTH_DATA.businessName}. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-neutral-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-neutral-300">Terms & Conditions</Link>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-5 pt-4 border-t border-[#E5E7EB]/20 text-center text-[13px] sm:text-sm text-[#94A3B8] font-medium">
          Developed by{' '}
          <a
            href="https://infynuxsolutions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#2563EB] font-semibold transition-colors duration-200"
          >
            Infynux Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
