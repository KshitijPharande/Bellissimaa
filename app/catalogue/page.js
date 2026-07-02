'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORIES, formatPrice, getStockStatus } from '../lib/data';

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

function CatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter((p) => p.active);

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    if (priceRange.min) {
      filtered = filtered.filter((p) => p.price >= Number(priceRange.min));
    }
    if (priceRange.max) {
      filtered = filtered.filter((p) => p.price <= Number(priceRange.max));
    }

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter((p) => p.stock > 0);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, showInStockOnly, sortBy]);

  const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
    setShowInStockOnly(false);
    setSortBy('newest');
  };

  const activeFilterCount =
    selectedCategories.length +
    (priceRange.min ? 1 : 0) +
    (priceRange.max ? 1 : 0) +
    (showInStockOnly ? 1 : 0);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-charcoal text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Collection
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Catalogue
          </motion.h1>
          <motion.div 
            className="divider-gold mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="mt-6 text-white/50 max-w-lg mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our curated collection of handpicked sarees. Each piece is
            a celebration of India&apos;s finest textile traditions.
          </motion.p>
        </div>
      </section>

      {/* Catalogue Body */}
      <section className="py-16 bg-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10">
            {/* ===== SIDEBAR FILTERS (Desktop) ===== */}
            <motion.aside 
              className="hidden lg:block w-64 shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FilterPanel
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                showInStockOnly={showInStockOnly}
                setShowInStockOnly={setShowInStockOnly}
                clearFilters={clearFilters}
                activeFilterCount={activeFilterCount}
              />
            </motion.aside>

            {/* ===== MAIN CONTENT ===== */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-gray-dark/30">
                <div className="flex items-center gap-4">
                  {/* Mobile filter button */}
                  <button
                    onClick={() => setFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-2 text-sm text-charcoal border border-charcoal/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer"
                    id="mobile-filter-btn"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="bg-gold text-charcoal text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  <p className="text-sm text-charcoal/50">
                    {filteredProducts.length} saree{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  id="sort-select"
                  className="text-sm text-charcoal bg-transparent border border-charcoal/20 px-4 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                </select>
              </div>

              {/* Product Grid with AnimatePresence for filter transitions */}
              {filteredProducts.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
                  layout
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CatalogueCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-charcoal/40 text-lg font-[family-name:var(--font-heading)]">
                    No sarees match your filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-sm text-gold underline underline-offset-4 hover:text-gold-dark transition-colors duration-300 cursor-pointer"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MOBILE FILTER DRAWER ===== */}
      <AnimatePresence>
        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFiltersOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-ivory shadow-2xl overflow-y-auto"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] text-charcoal">
                    Filters
                  </h3>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="text-charcoal/50 hover:text-charcoal cursor-pointer"
                    aria-label="Close filters"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FilterPanel
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  showInStockOnly={showInStockOnly}
                  setShowInStockOnly={setShowInStockOnly}
                  clearFilters={clearFilters}
                  activeFilterCount={activeFilterCount}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function CataloguePage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-12 bg-charcoal min-h-screen flex items-center justify-center">
          <div className="text-gold animate-pulse text-lg">Loading Collection...</div>
        </div>
      }
    >
      <CatalogueContent />
    </Suspense>
  );
}

/* ===== FILTER PANEL ===== */
function FilterPanel({
  selectedCategories,
  toggleCategory,
  priceRange,
  setPriceRange,
  showInStockOnly,
  setShowInStockOnly,
  clearFilters,
  activeFilterCount,
}) {
  return (
    <div className="space-y-8">
      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors duration-300 underline underline-offset-4 cursor-pointer"
        >
          Clear all filters ({activeFilterCount})
        </button>
      )}

      {/* Categories */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal/70 mb-4 font-semibold">
          Category
        </h4>
        <div className="space-y-3">
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border transition-all duration-200 flex items-center justify-center ${
                  selectedCategories.includes(cat.slug)
                    ? 'bg-gold border-gold'
                    : 'border-charcoal/30 group-hover:border-gold/50'
                }`}
              >
                {selectedCategories.includes(cat.slug) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <button
                onClick={() => toggleCategory(cat.slug)}
                className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-200 cursor-pointer"
              >
                {cat.name}
              </button>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal/70 mb-4 font-semibold">
          Price Range
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange((p) => ({ ...p, min: e.target.value }))}
            className="w-full text-sm border border-charcoal/20 bg-transparent px-3 py-2 focus:outline-none focus:border-gold placeholder:text-charcoal/30"
          />
          <span className="text-charcoal/30">—</span>
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange((p) => ({ ...p, max: e.target.value }))}
            className="w-full text-sm border border-charcoal/20 bg-transparent px-3 py-2 focus:outline-none focus:border-gold placeholder:text-charcoal/30"
          />
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="text-xs tracking-[0.2em] uppercase text-charcoal/70 mb-4 font-semibold">
          Availability
        </h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
              showInStockOnly ? 'bg-gold' : 'bg-charcoal/20'
            }`}
            onClick={() => setShowInStockOnly(!showInStockOnly)}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                showInStockOnly ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </div>
          <span className="text-sm text-charcoal/70">In Stock only</span>
        </label>
      </div>
    </div>
  );
}

/* ===== CATALOGUE CARD ===== */
function CatalogueCard({ product }) {
  const stockStatus = getStockStatus(product.stock);
  const isOutOfStock = product.stock === 0;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/catalogue/${product.slug}`}
        id={`catalogue-card-${product.slug}`}
        className={`group block ${isOutOfStock ? 'opacity-65' : ''}`}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-gray mb-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-[1s] ${
              isOutOfStock ? 'grayscale' : 'group-hover:scale-105'
            }`}
          />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {product.newArrival && (
              <span className="bg-charcoal text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 font-semibold">
                New
              </span>
            )}
            {isOutOfStock && (
              <span className="bg-gray-500 text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 font-semibold">
                Sold Out
              </span>
            )}
          </div>

          {/* Hover Overlay */}
          {!isOutOfStock && (
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
              <span className="text-white text-[10px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 border border-white/50 px-4 py-2 bg-charcoal/10 backdrop-blur-[1px]">
                View Details
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <p className="text-[10px] text-gold tracking-[0.15em] uppercase mb-1 font-semibold">
          {CATEGORIES.find((c) => c.slug === product.category)?.name}
        </p>
        <h3 className="text-sm font-[family-name:var(--font-heading)] text-charcoal group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-semibold text-charcoal">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${stockStatus.dot}`} />
            <span className={`text-[10px] font-medium ${stockStatus.color}`}>
              {stockStatus.label}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
