import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardPage } from './pages/DashboardPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { BulkImportPage } from './pages/BulkImportPage';
import { OrdersPage } from './pages/OrdersPage';
import { SuppliersPage } from './pages/SuppliersPage';
import { CustomersPage } from './pages/CustomersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { SeoManagerPage } from './pages/SeoManagerPage';
import { CmsBlogPage } from './pages/CmsBlogPage';
import { MediaLibraryPage } from './pages/MediaLibraryPage';
import { CouponsPage } from './pages/CouponsPage';
import { ReportsPage } from './pages/ReportsPage';
import { AuditLogsPage } from './pages/AuditLogsPage';
import { SettingsPage } from './pages/SettingsPage';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#111827] font-sans antialiased overflow-x-hidden w-full max-w-full">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      
      <div className="flex-1 flex flex-col min-w-0 w-full overflow-x-hidden">
        <Header
          activeTab={activeTab}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto overflow-x-hidden w-full max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full max-w-full overflow-x-hidden"
            >
              {activeTab === 'dashboard' && <DashboardPage />}
              {activeTab === 'products' && <ProductsPage />}
              {activeTab === 'categories' && <CategoriesPage />}
              {activeTab === 'bulk' && <BulkImportPage />}
              {activeTab === 'orders' && <OrdersPage />}
              {activeTab === 'suppliers' && <SuppliersPage />}
              {activeTab === 'customers' && <CustomersPage />}
              {activeTab === 'reviews' && <ReviewsPage />}
              {activeTab === 'seo' && <SeoManagerPage />}
              {activeTab === 'cms' && <CmsBlogPage />}
              {activeTab === 'media' && <MediaLibraryPage />}
              {activeTab === 'coupons' && <CouponsPage />}
              {activeTab === 'reports' && <ReportsPage />}
              {activeTab === 'audit' && <AuditLogsPage />}
              {activeTab === 'settings' && <SettingsPage />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
