'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES, formatPrice, getStockStatus } from './lib/data';

const featuredProducts = PRODUCTS.filter((p) => p.featured && p.active);
const newArrivals = PRODUCTS.filter((p) => p.newArrival && p.active);

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardHoverEffect = {
  hover: {
    y: -8,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Home() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section
        id="hero"
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-charcoal"
      >
        {/* Background Image with Zoom animation */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Bellissimaa luxury saree collection"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-charcoal/85" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Top Line */}
          <motion.div 
            className="w-16 h-[1px] bg-gold/60 mx-auto mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-heading)] font-bold text-white tracking-[0.12em] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Bellissimaa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-white/80 font-[family-name:var(--font-heading)] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Draped in Heritage. Designed for Today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/catalogue"
              id="hero-cta-catalogue"
              className="group relative inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase overflow-hidden"
            >
              <span className="absolute inset-0 gold-gradient opacity-95 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-charcoal font-semibold">
                Explore Collection
              </span>
              <svg
                className="relative w-4 h-4 text-charcoal transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              id="hero-cta-about"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase text-white/90 border border-white/20 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Bottom Line */}
          <motion.div 
            className="w-16 h-[1px] bg-gold/60 mx-auto mt-12"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/35 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ========== FEATURED COLLECTION ========== */}
      <section id="featured" className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold">
              Curated With Love
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-charcoal">
              Featured Collection
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          {/* Product Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/catalogue"
              id="featured-view-all"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-charcoal border-b-2 border-gold pb-1.5 hover:text-gold transition-colors duration-300 group"
            >
              View Our Collections
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== CATEGORY SHOWCASE ========== */}
      <section id="categories" className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold">
              Browse By
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-charcoal">
              Our Collections
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          {/* Category Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={fadeInUp}>
                <Link
                  href={`/catalogue?category=${cat.slug}`}
                  id={`category-${cat.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden bg-charcoal"
                >
                  {/* Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-[1s] group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent group-hover:via-charcoal/40 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-5">
                    <h3 className="text-white text-lg sm:text-2xl font-[family-name:var(--font-heading)] font-semibold text-center tracking-wide">
                      {cat.name}
                    </h3>
                    <p className="text-white/0 group-hover:text-white/60 text-xs sm:text-sm text-center mt-2.5 transition-all duration-500 max-w-64 line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="mt-4 text-gold text-xs tracking-[0.2em] uppercase opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 font-semibold">
                      Explore Collection →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== NEW ARRIVALS ========== */}
      <section id="new-arrivals" className="py-24 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold">
              Just Arrived
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-charcoal">
              New Arrivals
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          {/* Horizontal Scroll */}
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="flex-none w-72 sm:w-80 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== BRAND STORY TEASER ========== */}
      <section id="brand-story" className="py-24 bg-charcoal overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <motion.div 
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Bellissimaa — the art of saree"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
              {/* Decorative Frame */}
              <div className="absolute inset-6 sm:inset-10 border border-gold/30" />
            </motion.div>

            {/* Text Side */}
            <motion.div 
              className="lg:py-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-tight">
                Where Heritage
                <br />
                <span className="italic text-gold-light">Meets Elegance</span>
              </h2>

              <div className="w-12 h-[1px] bg-gold/40 my-8" />

              <p className="text-white/60 leading-relaxed text-base mb-6">
                Bellissimaa was born from a deep love for India&apos;s textile heritage. 
                Based in Pune, we curate sarees that honor 
                centuries-old weaving traditions while embracing contemporary aesthetics.
              </p>
              <p className="text-white/60 leading-relaxed text-base mb-10">
                Every saree in our collection is handpicked — each thread telling a 
                story of the artisan&apos;s devotion, the region&apos;s cultural identity, and 
                the timeless beauty of Indian craftsmanship.
              </p>

              <Link
                href="/about"
                id="story-cta"
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold border border-gold/40 px-10 py-4 hover:bg-gold/10 transition-all duration-300 group"
              >
                Discover Our Journey
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TRUST / VALUES BAR ========== */}
      <section id="values" className="py-20 bg-ivory border-y border-warm-gray-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
                title: 'Handpicked',
                subtitle: 'Curated with care',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Made with Love',
                subtitle: 'By skilled artisans',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Authentic',
                subtitle: '100% genuine fabrics',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: 'WhatsApp Direct',
                subtitle: 'Personal shopping',
              },
            ].map((value, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center text-center group"
                variants={fadeInUp}
              >
                <div className="text-gold mb-3 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="text-sm font-semibold text-charcoal tracking-wide">
                  {value.title}
                </h4>
                <p className="text-xs text-charcoal/50 mt-1">{value.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ========== PRODUCT CARD COMPONENT ========== */
function ProductCard({ product }) {
  const stockStatus = getStockStatus(product.stock);
  const isOutOfStock = product.stock === 0;

  return (
    <motion.div
      variants={cardHoverEffect}
      whileHover="hover"
      className="h-full"
    >
      <Link
        href={`/catalogue/${product.slug}`}
        id={`product-card-${product.slug}`}
        className={`group block h-full ${isOutOfStock ? 'opacity-65' : ''}`}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-gray mb-4 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-[1s] ${
              isOutOfStock ? 'grayscale' : 'group-hover:scale-105'
            }`}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.newArrival && (
              <span className="bg-charcoal text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-semibold">
                New
              </span>
            )}
            {isOutOfStock && (
              <span className="bg-gray-500 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-semibold">
                Out of Stock
              </span>
            )}
          </div>

          {/* Hover Overlay */}
          {!isOutOfStock && (
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
              <span className="text-white text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/50 px-6 py-2.5 bg-charcoal/10 backdrop-blur-[2px]">
                View Details
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-[10px] text-gold tracking-[0.15em] uppercase mb-1.5 font-semibold">
            {CATEGORIES.find((c) => c.slug === product.category)?.name || product.category}
          </p>
          <h3 className="text-base font-[family-name:var(--font-heading)] text-charcoal group-hover:text-gold transition-colors duration-300 font-medium">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-2.5">
            <p className="text-sm font-semibold text-charcoal">
              {formatPrice(product.price)}
            </p>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${stockStatus.dot}`} />
              <span className={`text-[11px] font-medium ${stockStatus.color}`}>
                {stockStatus.label}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
