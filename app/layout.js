import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export const metadata = {
  title: {
    default: "Bellissima — Premium Handcrafted Sarees",
    template: "%s | Bellissima",
  },
  description:
    "Discover exquisite handcrafted sarees at Bellissima from Pune — featuring Silk, Banarasi, Georgette, Chanderi, Linen & Chiffon collections. Draped in Heritage. Designed for Today.",
  keywords: [
    "saree",
    "sarees",
    "handcrafted sarees",
    "Indian sarees",
    "Bellissima",
    "Pune sarees",
    "silk sarees",
    "banarasi sarees",
    "designer sarees",
    "premium sarees",
  ],
  openGraph: {
    title: "Bellissima — Premium Handcrafted Sarees",
    description:
      "Timeless sarees that blend heritage with modern elegance. Handpicked and curated in Pune.",
    type: "website",
    locale: "en_IN",
    siteName: "Bellissima",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
