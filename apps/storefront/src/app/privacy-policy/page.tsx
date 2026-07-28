import React from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl font-extrabold text-[#111111]">Privacy Policy</h1>
        <p className="text-xs text-neutral-500">Effective Date: July 2026 • {GROUND_TRUTH_DATA.businessName}</p>

        <div className="p-8 bg-white border border-[#EAEAEA] rounded-2xl text-xs text-neutral-700 space-y-4 leading-relaxed shadow-sm">
          <p>
            At <strong>{GROUND_TRUTH_DATA.businessName}</strong>, located at {GROUND_TRUTH_DATA.address.streetAddress}, Indore, we respect your personal privacy and are committed to protecting customer data.
          </p>
          <h3 className="font-serif font-bold text-[#111111] text-sm pt-2">1. Information We Collect</h3>
          <p>We collect your name, phone number, email address, shipping pincode, and payment details during online checkout.</p>

          <h3 className="font-serif font-bold text-[#111111] text-sm pt-2">2. Use of Information</h3>
          <p>Your details are used strictly for order fulfillment, GST invoice generation, shipping tracking, and customer support.</p>

          <h3 className="font-serif font-bold text-[#111111] text-sm pt-2">3. Contact Us</h3>
          <p>For privacy queries, contact us at {GROUND_TRUTH_DATA.email} or call {GROUND_TRUTH_DATA.phoneLandline}.</p>
        </div>
      </div>
    </div>
  );
}
