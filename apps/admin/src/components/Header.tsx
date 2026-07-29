'use client';

import React, { useState } from 'react';
import { GROUND_TRUTH_DATA } from '@lucky-gazab/shared-types';
import { Search, Bell, ShieldCheck, Cpu, Check, AlertTriangle, ShoppingBag, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function Header({ activeTab, isMobileOpen, setIsMobileOpen }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    { id: 'n1', title: 'New Order Received', message: 'Order GAZAB-2026-1002 placed by Vikram Singh', time: '10m ago', icon: ShoppingBag, color: 'text-[#2563EB]', bg: 'bg-blue-50' },
    { id: 'n2', title: 'Low Stock Alert', message: "L'Oréal Absolut Repair Hair Mask under 50 units", time: '1h ago', icon: AlertTriangle, color: 'text-[#F59E0B]', bg: 'bg-amber-50' },
    { id: 'n3', title: 'GST Invoice Generated', message: 'Invoice INV-2026-0001 created successfully', time: '2h ago', icon: Check, color: 'text-[#22C55E]', bg: 'bg-emerald-50' }
  ];

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'products': return 'Products & Inventory';
      case 'categories': return 'Categories & Brands';
      case 'orders': return 'Orders & GST Invoices';
      case 'customers': return 'Customers & CRM';
      case 'reports': return 'Financial Analytics';
      case 'settings': return 'Settings & RBAC';
      default: return tab.toUpperCase();
    }
  };

  return (
    <header className="bg-white border-b border-[#E5E7EB] px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      {/* Mobile Drawer Hamburger & Breadcrumbs */}
      <div className="flex items-center space-x-3 text-xs">
        {setIsMobileOpen && (
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            title="Open Console Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400 font-medium hidden sm:inline">Console</span>
          <span className="text-slate-300 hidden sm:inline">/</span>
          <span className="font-bold text-[#111827] uppercase tracking-wider truncate max-w-[140px] sm:max-w-none">
            {getTabTitle(activeTab)}
          </span>
        </div>
      </div>

      {/* Global Command Search & System Health */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative hidden lg:block w-64">
          <input
            type="text"
            placeholder="Search orders, SKUs, customers (⌘K)..."
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg py-1.5 pl-8 pr-3 text-xs text-[#111827] focus:outline-none focus:border-[#2563EB]"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* System Queue Status Pill */}
        <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-50 text-[#22C55E] border border-emerald-200/80 rounded-full text-[11px] font-semibold">
          <Cpu className="w-3 h-3" />
          <span>Queue Healthy</span>
        </div>

        {/* Notifications & Admin Profile */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs border-l border-[#E5E7EB] pl-3 sm:pl-4 relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setUnreadCount(0);
            }}
            className="p-1.5 text-slate-400 hover:text-[#111827] rounded-lg hover:bg-slate-100 transition-colors relative"
            title="Notifications Panel"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-[#2563EB] absolute top-1 right-1" />
            )}
          </button>

          {/* Notifications Panel Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl z-50 p-4 space-y-3"
              >
                <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-2">
                  <h4 className="font-bold text-[#111827] text-xs">System Notifications</h4>
                  <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-[#111827]">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {notifications.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.id} className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                        <div className={`p-2 rounded-lg ${n.bg} shrink-0`}>
                          <Icon className={`w-3.5 h-3.5 ${n.color}`} />
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <span className="font-bold text-[#111827] text-[11px] block">{n.title}</span>
                          <p className="text-[10px] text-slate-500 leading-snug">{n.message}</p>
                          <span className="text-[9px] text-slate-400 block">{n.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Pill */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              LM
            </div>
            <div className="hidden lg:block text-left leading-tight">
              <span className="font-bold text-[#111827] block text-[11px]">Lucky Matai</span>
              <span className="text-[10px] text-slate-400">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
