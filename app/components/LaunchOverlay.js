'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LaunchOverlay() {
  const [isLaunched, setIsLaunched] = useState(true); // default true for safety in SSR
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    // Check if ?preview=true query parameter is present, or if it hasn't been launched yet
    const isPreviewMode = window.location.search.includes('preview=true');
    const status = localStorage.getItem('bellissima_launched');
    
    if (status !== 'true' || isPreviewMode) {
      setIsLaunched(false);
    }
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    // Wait for the exit animation to complete before removing from DOM and redirecting
    setTimeout(() => {
      localStorage.setItem('bellissima_launched', 'true');
      setIsLaunched(true);
      window.location.href = "https://www.bellissimaboutique.in/";
    }, 1200);
  };

  if (isLaunched) return null;

  return (
    <AnimatePresence>
      {!isLaunching && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Subtle elegant background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

          {/* Luxury Frame Border */}
          <div className="absolute inset-8 border border-gold/20 pointer-events-none flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[10px] tracking-[0.3em] text-gold font-medium">
              EST. 2014
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-4 text-[10px] tracking-[0.3em] text-gold font-medium">
              HANDLOOMED WITH LOVE
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center max-w-lg"
          >
            {/* Logo Emblem */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 relative"
            >
              <Image
                src="/icon.jpg"
                width={100}
                height={100}
                alt="Bellissima Logo"
                className="rounded-full shadow-xl border border-gold/20"
                priority
              />
            </motion.div>

            {/* Brand Title */}
            <h1 className="text-4xl sm:text-5xl font-serif text-charcoal tracking-[0.25em] uppercase mb-3 font-medium">
              Bellissima
            </h1>
            
            <div className="w-16 h-[1px] bg-gold/40 my-4" />

            <p className="text-xs sm:text-sm tracking-[0.3em] text-gold uppercase font-medium mb-6">
              Heritage Ethnic Luxury
            </p>

            <p className="text-sm text-charcoal/60 leading-relaxed max-w-sm mb-12 font-light">
              Exquisite handcrafted sarees, bags, and jewellery. The collection is set, and we are ready to unveil.
            </p>

            {/* Launch Button */}
            <motion.button
              onClick={handleLaunch}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden bg-charcoal text-white hover:bg-gold px-12 py-4 text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold transition-colors duration-500 shadow-xl"
            >
              <span className="relative z-10 text-white group-hover:text-charcoal transition-colors duration-500">
                Launch Website
              </span>
              <span className="absolute inset-0 w-full h-full bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
