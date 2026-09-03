import ProductClientPage from "./ProductClientPage";
import { PRODUCTS } from "../../lib/data";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found at Bellissima Boutique.",
    };
  }

  const titleText = `${product.name} | Bellissima Boutique Pune`;
  const descText = `${product.description} Explore high-quality handcrafted sarees, designer clutches, and statement jewellery at Bellissima Boutique in Pune. Price: ${product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Contact for Price'}.`;
  const productUrl = `https://www.bellissimaboutique.in/catalogue/${product.slug}`;
  const imageUrl = product.images && product.images[0] ? `https://www.bellissimaboutique.in${product.images[0]}` : "https://www.bellissimaboutique.in/icon.jpg";

  return {
    title: product.name,
    description: descText,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: productUrl,
      type: "website",
      locale: "en_IN",
      siteName: "Bellissima Boutique",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: descText,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return <ProductClientPage slug={resolvedParams.slug} />;
  }

  const productUrl = `https://www.bellissimaboutique.in/catalogue/${product.slug}`;
  const imageUrl = product.images && product.images[0] ? `https://www.bellissimaboutique.in${product.images[0]}` : "https://www.bellissimaboutique.in/icon.jpg";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images ? product.images.map((img) => `https://www.bellissimaboutique.in${img}`) : [imageUrl],
    "description": product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "Bellissima Boutique"
    },
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "priceCurrency": "INR",
      "price": product.price ? product.price.toString() : "0",
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Bellissima Boutique"
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bellissimaboutique.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Catalogue",
        "item": "https://www.bellissimaboutique.in/catalogue"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": productUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductClientPage slug={resolvedParams.slug} />
    </>
  );
}
