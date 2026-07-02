'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Our Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group" id="nav-logo">
            <span
              className={`text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase transition-colors duration-500 font-[family-name:var(--font-heading)] ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              Bellissimaa
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`relative text-sm tracking-[0.15em] uppercase transition-colors duration-300 group ${
                  scrolled
                    ? 'text-charcoal hover:text-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? `rotate-45 translate-y-[4.5px] ${scrolled ? 'bg-charcoal' : 'bg-white'}`
                  : scrolled ? 'bg-charcoal' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? 'opacity-0'
                  : scrolled ? 'bg-charcoal' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen
                  ? `-rotate-45 -translate-y-[4.5px] ${scrolled ? 'bg-charcoal' : 'bg-white'}`
                  : scrolled ? 'bg-charcoal' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-ivory shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-[family-name:var(--font-heading)] text-charcoal hover:text-gold transition-all duration-300 ${
                    mobileOpen ? 'animate-slide-in-right' : ''
                  }`}
                  style={{ animationDelay: `${(i + 1) * 0.1}s`, animationFillMode: 'both' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-gold/40 my-8" />

            {/* Brand tagline in mobile menu */}
            <p className="text-sm text-charcoal/50 tracking-wide italic font-[family-name:var(--font-heading)]">
              Draped in Heritage.
              <br />
              Designed for Today.
            </p>

            {/* Bottom branding */}
            <div className="mt-auto pb-10">
              <p className="text-xs text-charcoal/30 tracking-[0.2em] uppercase">
                © {new Date().getFullYear()} Bellissimaa
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
