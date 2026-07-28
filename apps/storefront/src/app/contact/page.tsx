'use client';

import React, { useState } from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact & Visit Our Store</h1>
        <p className="text-slate-400 text-sm">
          We are located at Raunak Tower near Anand Bazar Square, Indore. Drop by or contact us for retail & wholesale beauty inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Information Panel */}
        <div className="glass-panel p-8 space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Store Location & Contact</h2>

          <div className="space-y-4 text-sm">
            <div className="flex items-start space-x-3 text-slate-200">
              <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Address</h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  {GROUND_TRUTH_DATA.address.streetAddress},<br />
                  Near Anand Bazar Square, Khajrana Road,<br />
                  {GROUND_TRUTH_DATA.address.addressLocality}, {GROUND_TRUTH_DATA.address.addressRegion} — {GROUND_TRUTH_DATA.address.postalCode}, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-200">
              <Phone className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Phone Numbers</h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  Landline: <a href={`tel:${GROUND_TRUTH_DATA.phoneLandline}`} className="text-brand-300 hover:underline">{GROUND_TRUTH_DATA.phoneLandline}</a><br />
                  Mobile: <a href={`tel:${GROUND_TRUTH_DATA.mobile}`} className="text-brand-300 hover:underline">{GROUND_TRUTH_DATA.mobile}</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-200">
              <Mail className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Email Address</h4>
                <a href={`mailto:${GROUND_TRUTH_DATA.email}`} className="text-slate-400 hover:text-white text-xs">
                  {GROUND_TRUTH_DATA.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-slate-200">
              <Clock className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Store Hours</h4>
                <p className="text-slate-400 text-xs">Monday to Saturday: 10:00 AM – 8:30 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <a
              href={`https://wa.me/91${GROUND_TRUTH_DATA.whatsapp}?text=Hello%20Lucky's%20GAZAB%20HI%20GAZAB`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat Directly on WhatsApp (+91 {GROUND_TRUTH_DATA.whatsapp})</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel p-8 space-y-4">
          <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Send Us a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been sent to Lucky's GAZAB HI GAZAB team (mgmatai@hotmail.com). We will reach out shortly.");
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Your Name</label>
              <input type="text" required placeholder="Enter full name" className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500" />
            </div>
            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Email or Phone Number</label>
              <input type="text" required placeholder="Enter contact info" className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500" />
            </div>
            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Inquiry Type</label>
              <select className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500">
                <option>Retail Order Question</option>
                <option>Salon B2B Wholesale Pricing</option>
                <option>Product Availability</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Message</label>
              <textarea rows={4} required placeholder="Type your message here..." className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white focus:border-brand-500"></textarea>
            </div>
            <button type="submit" className="gradient-button w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
