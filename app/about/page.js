'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Bellissima heritage"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-heading)] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About Bellissima
          </motion.h1>
          <motion.div
            className="divider-gold mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              className="relative aspect-[4/5] overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Bellissima — the art of Indian textiles"
                fill
                className="object-cover"
              />
              <div className="absolute inset-6 border border-gold/25" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
                The Beginning
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-charcoal leading-tight">
                Born from a Love
                <br />
                <span className="italic text-gold-dark">for Indian Textiles</span>
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 my-8" />
              <div className="space-y-6 text-charcoal/60 leading-relaxed">
                <p>
                  Bellissima was born from a simple yet profound idea — that every woman
                  deserves to feel extraordinary in what she wears. The Italian word for
                  &quot;most beautiful,&quot; Bellissima reflects our commitment to bringing
                  the finest sarees to discerning women who appreciate artistry and heritage.
                </p>
                <p>
                  What began as a personal passion for collecting rare, handwoven sarees
                  soon blossomed into something much larger. Each visit to weaving clusters
                  across India — from Varanasi to Kanchipuram, from Chanderi to Maheshwar —
                  deepened the conviction that these textile traditions deserve a platform
                  that honors their beauty while making them accessible to the modern woman.
                </p>
                <p>
                  Today, Bellissima stands as a bridge between centuries-old weaving traditions
                  and contemporary aesthetics. Every saree in our collection is a carefully
                  curated piece that celebrates the magic of handcrafted Indian textiles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-warm-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text — reversed order on desktop */}
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
                The Founder&apos;s Vision
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-charcoal leading-tight">
                Beauty, Artistry & Color Harmony
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 my-8" />
              <div className="space-y-6 text-charcoal/60 leading-relaxed">
                <p>
                  With a background in beauty and makeup, our founder brings an instinctual 
                  understanding of color harmony to Bellissima. She hand-selects color 
                  combinations that are aesthetically pleasing from both a beauty and design perspective.
                </p>
                <p>
                  Based in Pune, we personally guide every client on WhatsApp to match 
                  tones and occasions for the perfect ensemble.
                </p>
              </div>

              <a
                href="https://wa.me/XXXXXXX?text=Hi!%20I'd%20love%20to%20know%20more%20about%20Bellissima."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 text-sm tracking-[0.2em] uppercase text-gold border border-gold/40 px-10 py-4 hover:bg-gold/10 transition-all duration-300 group font-medium"
              >
                Say Hello to Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:order-1 relative aspect-square overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/hero-bg.jpg"
                alt="Bellissima — Crafted with Love"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-xl font-[family-name:var(--font-heading)] font-semibold tracking-wide">
                  Handcrafted Weaves
                </p>
                <p className="text-white/60 text-sm tracking-wider">Curated in Pune</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-charcoal">
              Our Values
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
                title: 'Artisan First',
                description:
                  'We work directly with weaving communities across India, ensuring fair compensation and preserving traditional craftsmanship for future generations.',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Quality Uncompromised',
                description:
                  'Every saree is personally inspected by our team before it enters our collection. We never compromise on fabric quality, weaving technique, or finishing.',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
                title: 'Personal Touch',
                description:
                  'No automated checkout, no impersonal experience. Every purchase is a personal conversation where we help you find the perfect saree for your moment.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-8 border border-warm-gray-dark/20 hover:border-gold/30 transition-all duration-300 group bg-warm-gray/10"
              >
                <div className="text-gold mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-charcoal text-center relative overflow-hidden">
        <motion.div
          className="max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
            Ready to Find Your Perfect Saree?
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-white leading-tight">
            Every Saree Has a Story.
            <br />
            <span className="italic text-gold-light">Let&apos;s Write Yours.</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/catalogue"
              className="group relative inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase overflow-hidden"
            >
              <span className="absolute inset-0 gold-gradient opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-charcoal font-semibold">
                Browse Collection
              </span>
            </Link>
            <a
              href="https://wa.me/XXXXXXX?text=Hi!%20I'd%20love%20to%20explore%20your%20saree%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase text-white/80 border border-white/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Chat with Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
