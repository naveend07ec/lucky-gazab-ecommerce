import React, { useState } from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { LayoutDashboard, Package, Layers, Upload, ShoppingBag, Truck, Users, Star, Globe, BookOpen, Image, Tag, BarChart3, ShieldAlert, Settings, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationGroups = [
    {
      groupName: 'Core Operations',
      items: [
        { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
        { id: 'products', label: 'Products & Inventory', icon: Package },
        { id: 'categories', label: 'Categories & Brands', icon: Layers },
        { id: 'bulk', label: 'Bulk CSV Import', icon: Upload }
      ]
    },
    {
      groupName: 'Sales & Fulfillment',
      items: [
        { id: 'orders', label: 'Orders & GST Invoices', icon: ShoppingBag },
        { id: 'suppliers', label: 'Suppliers & POs', icon: Truck },
        { id: 'customers', label: 'Customers & CRM', icon: Users },
        { id: 'reviews', label: 'Review Moderation', icon: Star }
      ]
    },
    {
      groupName: 'Marketing & Content',
      items: [
        { id: 'seo', label: 'SEO & 301 Redirects', icon: Globe },
        { id: 'cms', label: 'CMS & Journal', icon: BookOpen },
        { id: 'media', label: 'Media Assets', icon: Image },
        { id: 'coupons', label: 'Coupons & Banners', icon: Tag }
      ]
    },
    {
      groupName: 'System & Analytics',
      items: [
        { id: 'reports', label: 'Financial Analytics', icon: BarChart3 },
        { id: 'audit', label: 'Audit & Health Logs', icon: ShieldAlert },
        { id: 'settings', label: 'Settings & RBAC', icon: Settings }
      ]
    }
  ];

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between p-3 h-screen sticky top-0 shrink-0 text-slate-300 z-40 select-none"
    >
      <div className="space-y-4">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 py-2.5 border-b border-slate-800/80">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0">
              G
            </div>
            {!isCollapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
                <h2 className="text-xs font-bold text-white tracking-wide uppercase truncate">GAZAB HI GAZAB</h2>
                <span className="text-[9px] text-slate-400 block font-medium">Enterprise Console</span>
              </motion.div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Pinned Navigation Groups */}
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
          {navigationGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {!isCollapsed && (
                <span className="px-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {group.groupName}
                </span>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-lg text-xs font-medium transition-colors relative ${
                      isActive
                        ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-[#1E293B]'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4 shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.label}</span>}
                    </div>
                    {isActive && !isCollapsed && (
                      <motion.div layoutId="activePill" className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Role Badge Footer */}
      <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 px-2 flex items-center justify-between">
        {!isCollapsed ? (
          <div className="flex items-center space-x-2 truncate">
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="truncate font-medium">{GROUND_TRUTH_DATA.email}</span>
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#22C55E] mx-auto" />
        )}
      </div>
    </motion.aside>
  );
}
