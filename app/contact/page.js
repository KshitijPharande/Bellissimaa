'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-charcoal text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We&apos;d Love to Hear from You
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Get In Touch
          </motion.h1>
          <motion.div 
            className="divider-gold mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-[family-name:var(--font-heading)] text-charcoal mb-8">
                Let&apos;s Connect
              </h2>
              <p className="text-charcoal/60 leading-relaxed mb-10">
                Whether you have a question about our collection, need styling advice, 
                or simply want to say hello — we&apos;re here for you. We personally 
                respond to every inquiry.
              </p>

              {/* Contact Cards */}
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/XXXXXXX?text=Hi!%20I%20have%20a%20question%20about%20Bellissima."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-4 p-5 border border-warm-gray-dark/20 hover:border-[#25D366]/40 transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">
                      WhatsApp (Preferred)
                    </h3>
                    <p className="text-sm text-charcoal/50">XXXXXXX</p>
                    <p className="text-xs text-[#25D366] mt-1 font-semibold">
                      Typically replies within minutes →
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 border border-warm-gray-dark/20 bg-white"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-sm text-charcoal/50">XXXXXXX</p>
                    <p className="text-xs text-charcoal/40 mt-1">Mon – Sat, 10 AM – 7 PM</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 border border-warm-gray-dark/20 bg-white"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-sm text-charcoal/50">hello@bellissima.in</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 border border-warm-gray-dark/20 bg-white"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-sm text-charcoal/50">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-white p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-warm-gray-dark/10">
                <h2 className="text-2xl font-[family-name:var(--font-heading)] text-charcoal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-charcoal/50 mb-8">
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted && (
                  <motion.div 
                    className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    ✓ Thank you! Your message has been received. We&apos;ll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  {/* Name */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-2" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b-2 border-charcoal/10 bg-transparent py-3 text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-charcoal/25"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email & Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-2" htmlFor="contact-email">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-b-2 border-charcoal/10 bg-transparent py-3 text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-charcoal/25"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-2" htmlFor="contact-phone">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border-b-2 border-charcoal/10 bg-transparent py-3 text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-charcoal/25"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-charcoal/50 mb-2" htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-b-2 border-charcoal/10 bg-transparent py-3 text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-charcoal/25"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit"
                    className="group relative inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase overflow-hidden w-full sm:w-auto justify-center cursor-pointer"
                  >
                    <span className="absolute inset-0 gold-gradient opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-charcoal font-semibold">
                      Send Message
                    </span>
                    <svg className="relative w-4 h-4 text-charcoal transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-64 sm:h-80 bg-warm-gray-dark/30 relative flex items-center justify-center overflow-hidden">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <svg className="w-10 h-10 text-charcoal/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="text-sm text-charcoal/40 tracking-wide">Pune, Maharashtra, India</p>
          <p className="text-xs text-charcoal/25 mt-1">Map integration coming soon</p>
        </motion.div>
      </section>
    </>
  );
}
