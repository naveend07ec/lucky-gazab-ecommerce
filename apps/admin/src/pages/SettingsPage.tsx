import React from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { Settings, ShieldCheck, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white">System Settings & RBAC</h1>
          <p className="text-xs text-slate-400">Ground Truth business info, RBAC roles, permission definitions, and API connection status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Store Business Profile */}
        <div className="glass-panel p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center border-b border-slate-800 pb-3">
            <MapPin className="w-4 h-4 text-brand-400 mr-2" />
            Ground Truth Business Details
          </h3>
          <div className="space-y-2 text-slate-300">
            <p><strong className="text-white">Business Name:</strong> {GROUND_TRUTH_DATA.businessName}</p>
            <p><strong className="text-white">Landline:</strong> {GROUND_TRUTH_DATA.phoneLandline}</p>
            <p><strong className="text-white">Mobile / WhatsApp:</strong> {GROUND_TRUTH_DATA.mobile}</p>
            <p><strong className="text-white">Email:</strong> {GROUND_TRUTH_DATA.email}</p>
            <p><strong className="text-white">Address:</strong> {GROUND_TRUTH_DATA.address.streetAddress}, {GROUND_TRUTH_DATA.address.addressLocality}, {GROUND_TRUTH_DATA.address.postalCode}</p>
            <p><strong className="text-white">Business Model:</strong> {GROUND_TRUTH_DATA.businessModel}</p>
          </div>
        </div>

        {/* Roles & Permissions */}
        <div className="glass-panel p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center border-b border-slate-800 pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2" />
            Seeded RBAC System Roles
          </h3>
          <div className="space-y-2 text-slate-300">
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="font-bold text-brand-300">super_admin</span>
              <p className="text-[10px] text-slate-400">Full system access, settings edit, refund issuance, role assignment</p>
            </div>
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="font-bold text-blue-300">catalog_manager</span>
              <p className="text-[10px] text-slate-400">Product CRUD, category & brand tree updates, barcode management</p>
            </div>
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="font-bold text-purple-300">order_manager</span>
              <p className="text-[10px] text-slate-400">Order status transitions, invoice printing, shipping tracking entry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
