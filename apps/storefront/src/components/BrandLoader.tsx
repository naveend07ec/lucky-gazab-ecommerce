'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BrandLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#111111] text-white flex flex-col items-center justify-center p-4 select-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#8B1E3F] text-white font-serif text-3xl font-bold flex items-center justify-center mx-auto shadow-2xl border border-white/20">
              G
            </div>
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                LUCKY'S <span className="text-[#8B1E3F]">GAZAB HI GAZAB</span>
              </h1>
              <p className="text-[10px] text-neutral-400 tracking-[0.3em] uppercase">
                Haute Beautē & Salon Professional • Indore
              </p>
            </div>
            <div className="w-24 h-0.5 bg-neutral-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-[#8B1E3F]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
