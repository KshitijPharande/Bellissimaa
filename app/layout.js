import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

export const metadata = {
  metadataBase: new URL("https://www.bellissimaboutique.in"),
  title: {
    default: "Bellissima Boutique | Premium Handcrafted Sarees & Jewellery, Pune",
    template: "%s | Bellissima Boutique",
  },
  description:
    "Discover exquisite handcrafted sarees, designer velvet clutches, and statement jewellery at Bellissima Boutique in Pune. Featuring Silk, Banarasi, Organza, Georgette & Linen collections. Draped in heritage, curated for you.",
  keywords: [
    "Bellissima Boutique",
    "Bellissima Boutique Pune",
    "boutique in Pune",
    "best boutique in Pune",
    "designer boutique Pune",
    "saree boutique Pune",
    "ethnic boutique Pune",
    "handcrafted sarees Pune",
    "Pune boutique",
    "Bellissima Sarees Pune",
    "designer clutches Pune",
    "traditional potlis Pune",
    "ethnic jewellery Pune"
  ],
  alternates: {
    canonical: "https://www.bellissimaboutique.in/",
  },
  openGraph: {
    title: "Bellissima Boutique | Premium Handcrafted Sarees & Jewellery, Pune",
    description:
      "Exquisite handcrafted sarees, traditional clutches, and statement jewellery curated at Bellissima Boutique in Pune.",
    url: "https://www.bellissimaboutique.in/",
    type: "website",
    locale: "en_IN",
    siteName: "Bellissima Boutique",
    images: [
      {
        url: "/images/Model Shoot/DSC_0087_first.jpg",
        width: 1200,
        height: 630,
        alt: "Bellissima Boutique Collection",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellissima Boutique | Premium Handcrafted Sarees & Jewellery, Pune",
    description:
      "Exquisite handcrafted sarees, traditional clutches, and statement jewellery curated at Bellissima Boutique in Pune.",
    images: ["/images/Model Shoot/DSC_0087_first.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Bellissima Boutique",
              "alternateName": "Bellissima Saree Boutique",
              "image": "https://www.bellissimaboutique.in/icon.jpg",
              "url": "https://www.bellissimaboutique.in/",
              "telephone": "+919112122645",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pune",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5204",
                "longitude": "73.8567"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://wa.me/919112122645"
              ]
            })
          }}
        />
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
