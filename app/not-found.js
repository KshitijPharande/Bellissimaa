import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <p className="text-8xl sm:text-9xl font-[family-name:var(--font-heading)] font-bold gold-text mb-4">
          404
        </p>

        <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-charcoal mb-4">
          Page Not Found
        </h1>

        <p className="text-charcoal/50 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to our beautiful collection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-[0.2em] uppercase overflow-hidden"
          >
            <span className="absolute inset-0 gold-gradient opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-charcoal font-semibold">Go Home</span>
          </Link>

          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-[0.2em] uppercase text-charcoal border border-charcoal/20 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Browse Catalogue
          </Link>
        </div>
      </div>
    </div>
  );
}
