import React from 'react';
import Link from 'next/link';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <Link href="/blog" className="text-xs text-brand-400 hover:underline inline-flex items-center">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Blog Articles
      </Link>

      <div className="space-y-4">
        <span className="text-xs font-bold text-brand-400 uppercase tracking-wider bg-brand-950 px-3 py-1 rounded-full border border-brand-800">
          Hair Care Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Top 5 Salon Professional Hair Care Masks for Damaged Hair in Indore
        </h1>
        <div className="flex items-center space-x-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1" /> Lucky Matai</span>
          <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> July 25, 2026</span>
        </div>
      </div>

      <div className="glass-panel overflow-hidden p-2 rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1200&q=80"
          alt="Salon Professional Hair Care Masks"
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>

      <article className="glass-panel p-8 text-sm text-slate-300 space-y-6 leading-relaxed">
        <p>
          Chemically treated, colored, or heat-styled hair requires intense conditioning to restore lost moisture, lipids, and structural proteins. At <strong>{GROUND_TRUTH_DATA.businessName}</strong>, we stock 100% genuine salon professional hair masks directly from authorized brand distributors.
        </p>

        <h3 className="text-lg font-bold text-white">1. L'Oréal Professionnel Absolut Repair Mask</h3>
        <p>
          Enriched with Gold Quinoa and Wheat Protein, this mask provides 13x more resistance to hair damage while leaving hair shiny and manageable.
        </p>

        <h3 className="text-lg font-bold text-white">2. Schwarzkopf BC Bonacure Repair Rescue</h3>
        <p>
          Formulated with Cell Equalizer technology to restore inner strength and elasticity to damaged hair cuticles.
        </p>

        <div className="bg-brand-950/60 p-4 rounded-xl border border-brand-800 text-brand-300 text-xs">
          <strong>Visit Our Store:</strong> Drop by {GROUND_TRUTH_DATA.address.streetAddress}, Indore or call us at {GROUND_TRUTH_DATA.phoneLandline} for salon wholesale prices.
        </div>
      </article>
    </div>
  );
}
