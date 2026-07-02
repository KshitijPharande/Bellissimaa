'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PRODUCTS,
  CATEGORIES,
  formatPrice,
  getStockStatus,
  getWhatsAppUrl,
  getRestockWhatsAppUrl,
} from '../../lib/data';

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
      staggerChildren: 0.1
    }
  }
};

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-ivory">
        <h1 className="text-3xl font-[family-name:var(--font-heading)] text-charcoal">
          Product Not Found
        </h1>
        <p className="text-charcoal/50 mt-4">
          The saree you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/catalogue"
          className="inline-block mt-8 text-sm tracking-[0.15em] uppercase text-gold border border-gold px-8 py-3 hover:bg-gold/10 transition-all duration-300"
        >
          Back to Catalogue
        </Link>
      </div>
    );
  }

  const stockStatus = getStockStatus(product.stock);
  const isOutOfStock = product.stock === 0;
  const category = CATEGORIES.find((c) => c.slug === product.category);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id && p.active
  ).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-ivory border-b border-warm-gray-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-charcoal/40">
            <Link href="/" className="hover:text-gold transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/catalogue" className="hover:text-gold transition-colors duration-200">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-charcoal/70">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* ===== IMAGE GALLERY ===== */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Image with slide transitions */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-warm-gray cursor-zoom-in mb-4 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
                onClick={() => setLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={`${product.name} — Image ${selectedImage + 1}`}
                      fill
                      className={`object-cover ${isOutOfStock ? 'grayscale' : ''}`}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {isOutOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 z-10">
                    <span className="bg-gray-600 text-white text-sm tracking-[0.15em] uppercase px-6 py-2">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-20 h-24 overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                        selectedImage === i
                          ? 'border-gold'
                          : 'border-transparent hover:border-gold/30'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* ===== PRODUCT INFO ===== */}
            <motion.div 
              className="lg:py-2"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category & SKU */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.2em] uppercase text-gold font-semibold">
                  {category?.name}
                </span>
                <span className="text-charcoal/20">|</span>
                <span className="text-xs text-charcoal/40 tracking-wider">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-charcoal leading-tight font-medium">
                {product.name}
              </h1>

              {/* Price */}
              <p className="mt-5 text-2xl sm:text-3xl font-semibold text-charcoal">
                {formatPrice(product.price)}
              </p>

              {/* Stock Status */}
              <div className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-sm ${stockStatus.bg}`}>
                <span className={`w-2 h-2 rounded-full ${stockStatus.dot}`} />
                <span className={`text-sm font-medium ${stockStatus.color}`}>
                  {stockStatus.label}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-warm-gray-dark/30 my-8" />

              {/* Description */}
              <p className="text-charcoal/60 leading-relaxed text-base">
                {product.description}
              </p>

              {/* Details Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Fabric', value: product.fabric },
                  { label: 'Color', value: product.color },
                  { label: 'Occasion', value: product.occasion },
                  { label: 'Length', value: product.length },
                ].map((detail) => (
                  <div key={detail.label} className="py-3 border-b border-warm-gray-dark/20">
                    <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-1 font-medium">
                      {detail.label}
                    </p>
                    <p className="text-sm text-charcoal font-semibold">{detail.value}</p>
                  </div>
                ))}
              </div>

              {/* Care Instructions */}
              <div className="mt-8 p-5 bg-warm-gray/75 rounded-sm">
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mb-2 font-medium">
                  Care Instructions
                </p>
                <p className="text-sm text-charcoal/60 leading-relaxed">{product.careInstructions}</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 space-y-3">
                {!isOutOfStock ? (
                  <motion.a
                    href={getWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="enquire-whatsapp"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#20BD5A] transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.15)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.25)]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire on WhatsApp
                  </motion.a>
                ) : (
                  <motion.a
                    href={getRestockWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="request-restock"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group flex items-center justify-center gap-3 w-full py-4 bg-charcoal text-white text-sm tracking-[0.15em] uppercase font-semibold hover:bg-charcoal-light transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    Request Restock
                  </motion.a>
                )}

                <Link
                  href="/catalogue"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-charcoal/20 text-charcoal text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
                >
                  ← Continue Browsing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-warm-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-semibold">
                You May Also Like
              </p>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-charcoal">
                Similar Sarees
              </h2>
              <div className="divider-gold mt-4" />
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {relatedProducts.map((p) => {
                const relOOS = p.stock === 0;
                return (
                  <motion.div 
                    key={p.id} 
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={`/catalogue/${p.slug}`}
                      className={`group block ${relOOS ? 'opacity-65' : ''}`}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          className={`object-cover transition-transform duration-[1s] ${
                            relOOS ? 'grayscale' : 'group-hover:scale-105'
                          }`}
                        />
                        {relOOS && (
                          <span className="absolute top-2 left-2 bg-gray-500 text-white text-[9px] tracking-[0.15em] uppercase px-2 py-1 font-semibold z-10">
                            Sold Out
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] text-charcoal group-hover:text-gold transition-colors duration-300 line-clamp-1 font-medium">
                        {p.name}
                      </h3>
                      <p className="text-sm text-charcoal/70 mt-1 font-semibold">{formatPrice(p.price)}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    );
                  }}
                  aria-label="Previous image"
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === product.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  aria-label="Next image"
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            <motion.div
              className="relative w-full max-w-3xl aspect-[3/4]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain"
                quality={95}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
