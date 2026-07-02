import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Bellissimaa — Premium Handcrafted Sarees",
    template: "%s | Bellissimaa",
  },
  description:
    "Discover exquisite handcrafted sarees at Bellissimaa from Pune — featuring Silk, Banarasi, Georgette, Chanderi, Linen & Chiffon collections. Draped in Heritage. Designed for Today.",
  keywords: [
    "saree",
    "sarees",
    "handcrafted sarees",
    "Indian sarees",
    "Bellissimaa",
    "Pune sarees",
    "silk sarees",
    "banarasi sarees",
    "designer sarees",
    "premium sarees",
  ],
  openGraph: {
    title: "Bellissimaa — Premium Handcrafted Sarees",
    description:
      "Timeless sarees that blend heritage with modern elegance. Handpicked and curated in Pune.",
    type: "website",
    locale: "en_IN",
    siteName: "Bellissimaa",
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
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
