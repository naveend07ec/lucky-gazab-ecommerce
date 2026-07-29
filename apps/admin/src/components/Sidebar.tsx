import React, { useState } from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { LayoutDashboard, Package, Layers, Upload, ShoppingBag, Truck, Users, Star, Globe, BookOpen, Image, Tag, BarChart3, ShieldAlert, Settings, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function Sidebar({ activeTab, setActiveTab, isMobileOpen = false, setIsMobileOpen }: SidebarProps) {
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

  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  const SidebarContent = (
    <div className="flex flex-col justify-between p-3 h-full text-[#E5E7EB] select-none">
      <div className="space-y-4">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 py-2.5 border-b border-[#374151]">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-extrabold text-sm shadow-sm shrink-0">
              G
            </div>
            {(!isCollapsed || isMobileOpen) && (
              <div>
                <h2 className="text-xs font-bold text-white tracking-wide uppercase truncate">GAZAB HI GAZAB</h2>
                <span className="text-[10px] text-[#CBD5E1] block font-medium">Enterprise Console</span>
              </div>
            )}
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:block p-1 rounded-md text-[#CBD5E1] hover:text-white hover:bg-[#1F2937] transition-colors"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Mobile Drawer Close Button */}
          {setIsMobileOpen && (
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1 rounded-md text-[#CBD5E1] hover:text-white hover:bg-[#1F2937] transition-colors"
              title="Close Navigation Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Pinned Navigation Groups */}
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
          {navigationGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {(!isCollapsed || isMobileOpen) && (
                <span className="px-3 text-[9px] font-bold text-[#CBD5E1] uppercase tracking-widest block mb-1">
                  {group.groupName}
                </span>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={`w-full flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-lg text-xs font-medium transition-all relative ${
                      isActive
                        ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                        : 'text-[#CBD5E1] hover:text-white hover:bg-[#1F2937]'
                    }`}
                    title={isCollapsed && !isMobileOpen ? item.label : undefined}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#CBD5E1]'}`} />
                      {(!isCollapsed || isMobileOpen) && <span className="truncate">{item.label}</span>}
                    </div>
                    {isActive && (!isCollapsed || isMobileOpen) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Role Badge Footer & Developer Credit */}
      <div className="pt-3 border-t border-[#374151] text-[10px] text-[#CBD5E1] px-2 space-y-2">
        {(!isCollapsed || isMobileOpen) ? (
          <>
            <div className="flex items-center space-x-2 truncate">
              <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="truncate font-semibold text-[#E5E7EB]">{GROUND_TRUTH_DATA.email}</span>
            </div>
            <div className="text-[10px] text-[#94A3B8] pt-1.5 border-t border-[#374151]/50 text-center font-medium">
              Powered & Developed by{' '}
              <a
                href="https://infynuxsolutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#2563EB] font-semibold transition-colors duration-200"
              >
                Infynux Solutions
              </a>
            </div>
          </>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#16A34A] mx-auto" />
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <motion.aside
        animate={{ width: isCollapsed ? 80 : 256 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="hidden md:flex bg-[#111827] border-r border-[#374151] flex-col h-screen sticky top-0 shrink-0 z-40"
      >
        {SidebarContent}
      </motion.aside>

      {/* Mobile Backdrop & Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen && setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-72 max-w-[85vw] bg-[#111827] border-r border-[#374151] h-full shadow-2xl z-50 flex flex-col"
            >
              {SidebarContent}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
