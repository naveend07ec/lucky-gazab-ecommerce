import React from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { Settings, ShieldCheck, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6 text-[#111827]">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">System Settings & RBAC</h1>
          <p className="text-xs text-[#6B7280]">Ground Truth business info, RBAC roles, permission definitions, and API connection status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {/* Store Business Profile */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-[#111827] flex items-center border-b border-[#E5E7EB] pb-3">
            <MapPin className="w-4 h-4 text-[#2563EB] mr-2" />
            Ground Truth Business Details
          </h3>
          <div className="space-y-2 text-[#374151]">
            <p><strong className="text-[#111827]">Business Name:</strong> {GROUND_TRUTH_DATA.businessName}</p>
            <p><strong className="text-[#111827]">Landline:</strong> {GROUND_TRUTH_DATA.phoneLandline}</p>
            <p><strong className="text-[#111827]">Mobile / WhatsApp:</strong> {GROUND_TRUTH_DATA.mobile}</p>
            <p><strong className="text-[#111827]">Email:</strong> {GROUND_TRUTH_DATA.email}</p>
            <p><strong className="text-[#111827]">Address:</strong> {GROUND_TRUTH_DATA.address.streetAddress}, {GROUND_TRUTH_DATA.address.addressLocality}, {GROUND_TRUTH_DATA.address.postalCode}</p>
            <p><strong className="text-[#111827]">Business Model:</strong> {GROUND_TRUTH_DATA.businessModel}</p>
          </div>
        </div>

        {/* Roles & Permissions */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-[#111827] flex items-center border-b border-[#E5E7EB] pb-3">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] mr-2" />
            Seeded RBAC System Roles
          </h3>
          <div className="space-y-2 text-[#374151]">
            <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
              <span className="font-bold text-[#2563EB]">super_admin</span>
              <p className="text-[11px] text-[#6B7280]">Full system access, settings edit, refund issuance, role assignment</p>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
              <span className="font-bold text-[#2563EB]">catalog_manager</span>
              <p className="text-[11px] text-[#6B7280]">Product CRUD, category & brand tree updates, barcode management</p>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
              <span className="font-bold text-[#2563EB]">order_manager</span>
              <p className="text-[11px] text-[#6B7280]">Order status transitions, invoice printing, shipping tracking entry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
