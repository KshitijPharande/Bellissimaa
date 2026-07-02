import Link from 'next/link';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const CATEGORIES = [
  { href: '/catalogue?category=silk', label: 'Silk Sarees' },
  { href: '/catalogue?category=banarasi', label: 'Banarasi Sarees' },
  { href: '/catalogue?category=georgette', label: 'Georgette Sarees' },
  { href: '/catalogue?category=chanderi', label: 'Chanderi Sarees' },
  { href: '/catalogue?category=linen', label: 'Linen Sarees' },
  { href: '/catalogue?category=chiffon', label: 'Chiffon Sarees' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal text-white/80">
      {/* Top Gold Line */}
      <div className="h-[2px] gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold tracking-[0.2em] uppercase font-[family-name:var(--font-heading)] text-white mb-5">
              Bellissimaa
            </h3>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Curating timeless sarees that blend heritage craftsmanship with modern elegance. 
              Every drape tells a story of tradition, artistry, and beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-semibold">
              Collections
            </h4>
            <ul className="space-y-3">
              {CATEGORIES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-6 font-semibold">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-white/50">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a
                  href="https://wa.me/XXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors duration-300"
                >
                  XXXXXXX
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-white/50">hello@bellissimaa.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © {new Date().getFullYear()} Bellissimaa. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-wider">
            Crafted with ♡ in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
