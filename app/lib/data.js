// Product and Category database curated for Bellissima

export const CATEGORIES = [
  {
    id: 'saree',
    name: 'Sarees',
    slug: 'saree',
    description: 'Exquisite handloomed sarees blending heritage and modern drapes',
    image: '/images/Model Shoot/DSC_0087_first.jpg',
  },
  {
    id: 'handbag',
    name: 'Handbags & Potlis',
    slug: 'handbag',
    description: 'Premium handcrafted clutches, bags, and traditional potlis',
    image: '/images/Purse/DSC_0029.jpg',
  },
  {
    id: 'jewellery',
    name: 'Jewellery',
    slug: 'jewellery',
    description: 'Timeless statement jewellery hand-curated for festive styling',
    image: '/images/Jewelley/DSC_0020.JPG',
  },
];

const RAW_PRODUCTS = [
  // --- MODEL SHOOT SAREES ---
  {
    id: 1,
    name: 'Pure Gadwal Peacock Blue Saree',
    slug: 'pure-gadwal-peacock-blue-saree',
    sku: 'BLM-SAR-092',
    category: 'saree',
    price: 19750,
    description: 'A gorgeous 9-inch border pure Gadwal saree in an exquisite peacock blue and navy blue color combination. Handloomed with premium silk and featuring a heavy zari border and pallu.',
    fabric: 'Pure Gadwal Silk',
    color: 'Peacock Blue & Navy Blue',
    occasion: 'Wedding, Festive, Reception',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only. Store wrapped in soft muslin.',
    images: [
      '/images/Model Shoot/DSC_0087_first.jpg',
      '/images/Model Shoot/DSC_0079_second.jpg',
      '/images/Model Shoot/DSC_0084_third.jpg',
      '/images/Model Shoot/DSC_0092_fourth.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 2,
    active: true,
  },
  {
    id: 2,
    name: 'Pure Jamdani Silk Saree',
    slug: 'pure-jamdani-silk-saree',
    sku: 'BLM-SAR-049',
    category: 'saree',
    price: 9850,
    description: 'An elegant pure Jamdani silk saree in beautiful pink, featuring delicate hand-woven floral motifs throughout the body. Exceedingly lightweight with a sophisticated drape.',
    fabric: 'Pure Jamdani Silk',
    color: 'Pink',
    occasion: 'Festive, Party, Reception',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Model Shoot/DSC_0045_first.jpg',
      '/images/Model Shoot/DSC_0049_second.jpg',
      '/images/Model Shoot/DSC_0046_third.jpg',
      '/images/Model Shoot/DSC_0047_fourth.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 3,
    active: true,
  },
  {
    id: 3,
    name: 'Yellow Semi Silk Saree',
    slug: 'yellow-semi-silk-saree',
    sku: 'BLM-SAR-029',
    category: 'saree',
    price: 4500,
    description: 'A vibrant yellow semi-silk saree with a traditional gold zari border. Comfortable to drape, lightweight, and perfect for haldi, pujas, or daytime celebrations.',
    fabric: 'Semi Silk',
    color: 'Yellow',
    occasion: 'Festival, Puja, Haldi',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean or gentle hand wash.',
    images: [
      '/images/Model Shoot/DSC_0022_first.jpg',
      '/images/Model Shoot/DSC_0025_second.jpg',
      '/images/Model Shoot/DSC_0017_third.jpg',
      '/images/Model Shoot/DSC_0020_fourth.jpg'
    ],
    featured: false,
    newArrival: false,
    stock: 5,
    active: true,
  },
  {
    id: 4,
    name: 'Cotton Silk Maheshwari Saree',
    slug: 'cotton-silk-maheshwari-saree',
    sku: 'BLM-SAR-041',
    category: 'saree',
    price: 2850,
    description: 'A classic Cotton Silk Maheshwari saree in pink with a signature border. Blends the breathability of fine cotton with the natural sheen and elegance of silk.',
    fabric: 'Cotton Silk Maheshwari',
    color: 'Pink',
    occasion: 'Casual Festive, Puja, Office',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Model Shoot/DSC_0005_ first.jpg',
      '/images/Model Shoot/DSC_0008_second.jpg',
      '/images/Model Shoot/DSC_0002 _third.jpg',
      '/images/Model Shoot/DSC_0011_fourth.jpg'
    ],
    featured: true,
    newArrival: false,
    stock: 4,
    active: true,
  },

  // --- NEW FOLDER SAREES ---
  {
    id: 5,
    name: 'Elegant Banarasi Saree',
    slug: 'elegant-banarasi-saree-2650',
    sku: 'BLM-SAR-BANARASI-2650',
    category: 'saree',
    price: 2650,
    description: 'A classically woven Banarasi saree featuring a majestic crimson body detailed with traditional golden motifs and an elegant border.',
    fabric: 'Banarasi Silk',
    color: 'Dark Pink and Maroon',
    occasion: 'Festive, Ceremony',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Banarasi Saree 2650--/Dark Pink and Maroon_1.jpg',
      '/images/Saree/Banarasi Saree 2650--/Dark Yellow.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 3,
    active: true,
  },
  {
    id: 6,
    name: 'Banarasi Saree with Butte',
    slug: 'banarasi-saree-with-butte-3050',
    sku: 'BLM-SAR-BAN-BUTTE-3050',
    category: 'saree',
    price: 3050,
    description: 'Beautifully crafted Banarasi saree set apart by its delicate gold butte work spaced gracefully across the rich green fabric and finished with a thick border.',
    fabric: 'Banarasi Silk',
    color: 'Golden',
    occasion: 'Festive, Ceremony',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Saree/Banarasi Saree with butte 3050--/Golden.jpg',
      '/images/Saree/Banarasi Saree with butte 3050--/Pink light.jpg',
      '/images/Saree/Banarasi Saree with butte 3050--/Purple_1.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 4,
    active: true,
  },
  {
    id: 7,
    name: 'Classic Jamdani Saree',
    slug: 'classic-jamdani-saree-1550',
    sku: 'BLM-SAR-JAMDANI-1550',
    category: 'saree',
    price: 1550,
    description: 'A lightweight and breathable Jamdani saree featuring subtle floral hand-weaves. Provides an elegant and airy drape perfect for festivals and casual wear.',
    fabric: 'Jamdani Silk',
    color: 'Multi-color',
    occasion: 'Festive, Casual',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Gentle hand wash in cold water.',
    images: [
      '/images/Saree/Jamdani 1550--/Multi-color.jpg',
      '/images/Saree/Jamdani 1550--/Multi color 2.jpg',
      '/images/Saree/Jamdani 1550--/Peacock Blue_1.jpg'
    ],
    featured: false,
    newArrival: false,
    stock: 5,
    active: true,
  },
  {
    id: 8,
    name: 'Kanchi Silk Saree',
    slug: 'kanchi-silk-saree-3050',
    sku: 'BLM-SAR-KANCHI-3050',
    category: 'saree',
    price: 3050,
    description: 'A traditional Kanchi Silk Saree displaying rich color depth and handloomed check accents. Perfect choice for auspicious ceremonies and temple wear.',
    fabric: 'Kanchipuram Silk',
    color: 'Purple Yellow',
    occasion: 'Wedding, Festive',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only. Store wrapped in cotton cloth.',
    images: [
      '/images/Saree/Kanchi Silk 3050--/Purple Yellow_1.jpg',
      '/images/Saree/Kanchi Silk 3050--/Multi-Color.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 2,
    active: true,
  },
  {
    id: 9,
    name: 'Kantha with Ikat Pallu Saree',
    slug: 'kantha-with-ikat-pallu-saree-3150',
    sku: 'BLM-SAR-KANTHA-IKAT-3150',
    category: 'saree',
    price: 3150,
    description: 'A magnificent combination of detailed Kantha embroidery and a contrasting geometric Ikat woven pallu. Adds an artistic flair to your traditional style.',
    fabric: 'Kantha Cotton Silk',
    color: 'Black',
    occasion: 'Casual, Festive',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Kantha with ikat pallu 3150--/Black.jpg',
      '/images/Saree/Kantha with ikat pallu 3150--/Dark Purple_1.jpg',
      '/images/Saree/Kantha with ikat pallu 3150--/Light Blue.jpg',
      '/images/Saree/Kantha with ikat pallu 3150--/Maroon.jpg',
      '/images/Saree/Kantha with ikat pallu 3150--/Orange.jpg',
      '/images/Saree/Kantha with ikat pallu 3150--/Teal.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 3,
    active: true,
  },
  {
    id: 10,
    name: 'Kota Silk Saree',
    slug: 'kota-silk-saree-4840',
    sku: 'BLM-SAR-KOTA-4840',
    category: 'saree',
    price: 4840,
    description: 'An elegant and translucent Kota Silk saree displaying classic checkered weave patterns and a subtle golden border that captures natural light beautifully.',
    fabric: 'Kota Silk',
    color: 'Lavender and Blue',
    occasion: 'Festive, Puja',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Gentle hand wash. Iron on low heat.',
    images: [
      '/images/Saree/Kota Silk 4840--/Lavender and Blue.jpg'
    ],
    featured: false,
    newArrival: false,
    stock: 5,
    active: true,
  },
  {
    id: 11,
    name: 'Exquisite Organza Saree',
    slug: 'exquisite-organza-saree-1550',
    sku: 'BLM-SAR-ORGANZA-1550',
    category: 'saree',
    price: 1550,
    description: 'A dreamy, lightweight organza saree detailed with floral patterns and a delicate silver trim. Its sheer fabric makes it elegant for day-to-night styling.',
    fabric: 'Organza',
    color: 'Sky Blue',
    occasion: 'Party, Festive',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Saree/Organza Saree 1550--/Sky Blue.jpg',
      '/images/Saree/Organza Saree 1550--/Golden Off white.jpg',
      '/images/Saree/Organza Saree 1550--/Peach.jpg',
      '/images/Saree/Organza Saree 1550--/Pista.jpg'
    ],
    variantColors: [
      'Blue',
      'Gold',
      'Cream',
      'Pink & Silver'
    ],
    variantNames: [
      'Exquisite Organza Saree - Blue',
      'Exquisite Organza Saree - Gold',
      'Exquisite Organza Saree - Cream',
      'Exquisite Organza Saree - Pink & Silver'
    ],
    featured: true,
    newArrival: false,
    stock: 6,
    active: true,
  },
  {
    id: 12,
    name: 'Pure Chanderi Cotton Saree',
    slug: 'pure-chanderi-cotton-saree-4850',
    sku: 'BLM-SAR-CHANDERI-4850',
    category: 'saree',
    price: 4850,
    description: 'A lightweight and breathable Chanderi Cotton Saree in pure ivory. Accented with subtle golden thread borders to bring a clean, dignified look.',
    fabric: 'Chanderi Cotton',
    color: 'pink (dusty rose) and Orange',
    occasion: 'Puja, Festive',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Hand wash gently. Hang to dry.',
    images: [
      '/images/Saree/Pure Chanderi Cotton 4850--/pink (dusty rose) and Orange.jpg'
    ],
    featured: false,
    newArrival: false,
    stock: 4,
    active: true,
  },
  {
    id: 13,
    name: 'Pure Jamdani Silk Saree',
    slug: 'pure-jamdani-silk-saree-folder',
    sku: 'BLM-SAR-PUREJAMDANI',
    category: 'saree',
    price: 9850,
    description: 'A luxurious pure Jamdani silk saree of spectacular quality, handwoven with delicate traditional motifs. Elegant drape that feels soft and regal.',
    fabric: 'Pure Jamdani Silk',
    color: 'teal peacock green',
    occasion: 'Festive, Reception',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Pure Jamdani Silk Sarees/teal_peacock green.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 2,
    active: true,
  },
  {
    id: 14,
    name: 'Pure Silk Banarasi Kora Saree',
    slug: 'pure-silk-banarasi-kora-saree-13550',
    sku: 'BLM-SAR-KORA-13550',
    category: 'saree',
    price: 13550,
    description: 'An premium handloomed Banarasi Kora silk saree. Extremely fine sheer silk fabric woven with premium zari structures, ideal for brides and receptions.',
    fabric: 'Banarasi Kora Silk',
    color: 'Golden bronze',
    occasion: 'Wedding, Reception',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only. Handle with care.',
    images: [
      '/images/Saree/Pure silk banarasi kora 13550--/Golden_bronze_1.jpg',
      '/images/Saree/Pure silk banarasi kora 13550--/Silver_grey.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 2,
    active: true,
  },
  {
    id: 15,
    name: 'Semi Raw Silk Saree',
    slug: 'semi-raw-silk-saree-2950',
    sku: 'BLM-SAR-SEMIRAW-2950',
    category: 'saree',
    price: 2950,
    description: 'A semi-raw silk saree with a rustic, textured body and a rich teal pallu. Perfect balance of traditional weaving and modern design.',
    fabric: 'Semi Raw Silk',
    color: 'Light Blue',
    occasion: 'Festive, Puja',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Saree/Semi Raw Silk 2950--/Light Blue.jpg',
      '/images/Saree/Semi Raw Silk 2950--/Blue_1.jpg',
      '/images/Saree/Semi Raw Silk 2950--/Maroon Red.jpg',
      '/images/Saree/Semi Raw Silk 2950--/Purple.jpg',
      '/images/Saree/Semi Raw Silk 2950--/DSC_0065 (2).JPG'
    ],
    featured: false,
    newArrival: false,
    stock: 4,
    active: true,
  },
  {
    id: 16,
    name: 'Soft Raw Silk Saree',
    slug: 'soft-raw-silk-saree-2950',
    sku: 'BLM-SAR-SOFTRAW-2950',
    category: 'saree',
    price: 2950,
    description: 'An incredibly soft raw silk saree dyed in elegant teal blue. Displays a soft sheen and drapes easily for all-day comfort during family ceremonies.',
    fabric: 'Soft Raw Silk',
    color: 'Sea green',
    occasion: 'Festive, Ceremony',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Soft raw silk 2950--/Sea green.jpg',
      '/images/Saree/Soft raw silk 2950--/Grey.jpg',
      '/images/Saree/Soft raw silk 2950--/Yellow_1.jpg',
      '/images/Saree/Soft raw silk 2950--/Yellow_2.jpg'
    ],
    featured: false,
    newArrival: false,
    stock: 6,
    active: true,
  },
  {
    id: 17,
    name: 'Tasar Paithani Saree',
    slug: 'tasar-paithani-saree-6150',
    sku: 'BLM-SAR-TASARPAITHANI-6150',
    category: 'saree',
    price: 6150,
    description: 'A grand Tasar Paithani silk saree featuring the classic handwoven peacock border and a rich golden pallu that shines at weddings.',
    fabric: 'Tasar Paithani Silk',
    color: 'Sky Blue Azure Blue',
    occasion: 'Wedding, Traditional',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Tasar Paithani 6150--/Sky Blue  Azure Blue.jpg',
      '/images/Saree/Tasar Paithani 6150--/Beige  Mushroom Grey.jpg',
      '/images/Saree/Tasar Paithani 6150--/Royal Blue  Indigo _1.jpg'
    ],
    featured: true,
    newArrival: false,
    stock: 3,
    active: true,
  },
  {
    id: 18,
    name: 'Tasar Saree with Banarasi Pallu',
    slug: 'tasar-saree-with-banarasi-pallu',
    sku: 'BLM-SAR-TASARBANARASI',
    category: 'saree',
    price: 3350,
    description: 'An elegant beige Tasar silk saree decorated with a contrasting maroon Banarasi woven pallu. The ideal combination of two magnificent textures.',
    fabric: 'Tasar Silk',
    color: 'Peacock Blue Teal Blue',
    occasion: 'Traditional, Festive',
    length: '6.3 meters (with blouse piece)',
    careInstructions: 'Dry clean only.',
    images: [
      '/images/Saree/Tasar saree with banarasi pallu_/Peacock Blue  Teal Blue.jpg',
      '/images/Saree/Tasar saree with banarasi pallu_/Copper Brown_1.jpg',
      '/images/Saree/Tasar saree with banarasi pallu_/Deep Purple  Violet.jpg',
      '/images/Saree/Tasar saree with banarasi pallu_/Emerald Green  Dark Teal.jpg',
      '/images/Saree/Tasar saree with banarasi pallu_/Magenta  Fuchsia.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 5,
    active: true,
  },

  // --- HANDBAGS & POTLIS (Each individual file as its own separate product) ---
  {
    id: 19,
    name: 'Bridal Bindal Potli',
    slug: 'bridal-bindal-potli',
    sku: 'BLM-HBG-029',
    category: 'handbag',
    price: 1550,
    description: 'A luxurious handcrafted bridal potli bag featuring beautiful gold thread embroidery, dense bead embellishments, and dynamic hanging pearl drawstrings.',
    fabric: 'Silk Velvet & Beads',
    color: 'Gold',
    occasion: 'Bridal, Wedding, Festive',
    length: 'Standard Potli Size',
    careInstructions: 'Spot clean only. Store in protective pouch.',
    images: [
      '/images/Purse/DSC_0029.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 6,
    active: true,
  },
  {
    id: 20,
    name: 'Indo Western Functional Handbag - Style A',
    slug: 'indo-western-functional-handbag-a',
    sku: 'BLM-HBG-030',
    category: 'handbag',
    price: 3200,
    description: 'A stylish and versatile functional handbag designed for modern wardrobe styling. Reimagines traditional patterns in a contemporary layout.',
    fabric: 'Brocade & Silk',
    color: 'Teal & Gold Pattern',
    occasion: 'Casual, Semi-Formal, Festive',
    length: '10.5" x 7.0" x 3.0"',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Purse/DSC_0030.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 4,
    active: true,
  },
  {
    id: 21,
    name: 'Indo Western Functional Handbag - Style B',
    slug: 'indo-western-functional-handbag-b',
    sku: 'BLM-HBG-031',
    category: 'handbag',
    price: 3200,
    description: 'A stylish and versatile functional handbag designed for modern wardrobe styling. Reimagines traditional patterns in a contemporary layout.',
    fabric: 'Brocade & Silk',
    color: 'Blue-Grey Pattern',
    occasion: 'Casual, Semi-Formal, Festive',
    length: '10.5" x 7.0" x 3.0"',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Purse/DSC_0031.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 0,
    active: true,
  },
  {
    id: 22,
    name: 'Indo Western Functional Handbag - Style C',
    slug: 'indo-western-functional-handbag-c',
    sku: 'BLM-HBG-033',
    category: 'handbag',
    price: 3200,
    description: 'A stylish and versatile functional handbag designed for modern wardrobe styling. Reimagines traditional patterns in a contemporary layout.',
    fabric: 'Brocade & Silk',
    color: 'Crimson Pattern',
    occasion: 'Casual, Semi-Formal, Festive',
    length: '10.5" x 7.0" x 3.0"',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Purse/DSC_0033.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 5,
    active: true,
  },
  {
    id: 23,
    name: 'Indo Western Functional Handbag - Style D',
    slug: 'indo-western-functional-handbag-d',
    sku: 'BLM-HBG-034',
    category: 'handbag',
    price: 3200,
    description: 'A stylish and versatile functional handbag designed for modern wardrobe styling. Reimagines traditional patterns in a contemporary layout.',
    fabric: 'Brocade & Silk',
    color: 'Emerald & Gold Pattern',
    occasion: 'Casual, Semi-Formal, Festive',
    length: '10.5" x 7.0" x 3.0"',
    careInstructions: 'Dry clean recommended.',
    images: [
      '/images/Purse/DSC_0034.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 6,
    active: true,
  },
  {
    id: 24,
    name: 'Functional Green Velvet Clutch with Sling',
    slug: 'functional-green-velvet-clutch-with-sling',
    sku: 'BLM-HBG-038',
    category: 'handbag',
    price: 3200,
    description: 'A gorgeous green velvet clutch detailed with delicate embroidery, structured contours, multi-functional pockets, and a detachable metallic chain sling.',
    fabric: 'Velvet',
    color: 'Green',
    occasion: 'Festive, Party, Reception',
    length: '9.5" x 5.5" x 2.0"',
    careInstructions: 'Spot clean only.',
    images: [
      '/images/Purse/DSC_0038.jpg'
    ],
    featured: false,
    newArrival: true,
    stock: 5,
    active: true,
  },
  {
    id: 25,
    name: 'Pink Velvet Clutch with Sling',
    slug: 'pink-velvet-clutch-with-sling',
    sku: 'BLM-HBG-041',
    category: 'handbag',
    price: 950,
    description: 'A gorgeous pink velvet clutch detailed with delicate embroidery, structured contours, multi-functional pockets, and a detachable metallic chain sling.',
    fabric: 'Velvet',
    color: 'Pink',
    occasion: 'Festive, Party, Reception',
    length: '9.5" x 5.5" x 2.0"',
    careInstructions: 'Spot clean only.',
    images: [
      '/images/Purse/DSC_0043.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 4,
    active: true,
  },
  {
    id: 26,
    name: 'Functional Red Velvet Clutch with Sling',
    slug: 'functional-red-velvet-clutch-with-sling',
    sku: 'BLM-HBG-043',
    category: 'handbag',
    price: 1550,
    description: 'A sleek and functional red velvet clutch adorned with beautiful ethnic embroidery. Features multiple compartments and a detachable metallic sling chain.',
    fabric: 'Velvet',
    color: 'Red',
    occasion: 'Festive, Party, Reception',
    length: '9.5" x 5.5" x 2.0"',
    careInstructions: 'Spot clean only.',
    images: [
      '/images/Purse/DSC_0041.jpg'
    ],
    featured: true,
    newArrival: true,
    stock: 5,
    active: true,
  },

  // --- JEWELLERY ---
  {
    id: 27,
    name: 'Ethnic AD Earrings',
    slug: 'ethnic-ad-earrings',
    sku: 'BLM-JWL-024',
    category: 'jewellery',
    price: 1500,
    description: 'Beautiful handcrafted ethnic earrings detailed with premium American Diamond (AD) stones, giving a brilliant shimmer suitable for all celebratory looks.',
    fabric: 'AD Stones & Gold Plating',
    color: 'Gold & Diamond White',
    occasion: 'Festive, Party, Celebration',
    length: '2.5 inches',
    careInstructions: 'Keep away from perfume, moisture, and store in airtight box.',
    images: ['/images/Jewelley/DSC_0024.JPG'],
    featured: false,
    newArrival: true,
    stock: 8,
    active: true,
  },
  {
    id: 28,
    name: 'Ethnic Jewellery with Beads',
    slug: 'ethnic-jewellery-with-beads',
    sku: 'BLM-JWL-020',
    category: 'jewellery',
    price: 4500,
    description: 'An elegant traditional necklace set decorated with hand-strung colored beads and gold accents, complemented by matching earrings.',
    fabric: 'Colored Beads & Alloy',
    color: 'Red, Green & Gold',
    occasion: 'Festive, Puja, Wedding',
    length: 'Adjustable Dori Fit',
    careInstructions: 'Store in airtight box after cleaning with dry cloth.',
    images: [
      '/images/Jewelley/DSC_0020.JPG',
      '/images/Jewelley/DSC_0022.JPG'
    ],
    featured: true,
    newArrival: true,
    stock: 3,
    active: true,
  },
  {
    id: 29,
    name: 'Elegant Pearl Jewellery Set',
    slug: 'elegant-pearl-jewellery-set',
    sku: 'BLM-JWL-019',
    category: 'jewellery',
    price: 4200,
    description: 'A classic design featuring multiple lines of premium faux pearls connected with a majestic traditional center pendant. Includes matching pearl drop earrings.',
    fabric: 'Premium Pearls & Stones',
    color: 'Pearl White & Gold',
    occasion: 'Festive, Wedding, Reception',
    length: 'Adjustable Thread',
    careInstructions: 'Clean with soft cloth. Avoid spray and water.',
    images: [
      '/images/Jewelley/DSC_0019.JPG',
      '/images/Jewelley/DSC_0018.JPG'
    ],
    featured: true,
    newArrival: false,
    stock: 4,
    active: true,
  },
  {
    id: 30,
    name: 'Beaded Festive Choker Set',
    slug: 'beaded-festive-choker-set',
    sku: 'BLM-JWL-017',
    category: 'jewellery',
    price: 3800,
    description: 'A high-end choker necklace strung with premium beads. Hugs the neck beautifully and features an adjustable cord for a custom fit.',
    fabric: 'Beads & Alloy Gold Plated',
    color: 'Green, Maroon & Gold',
    occasion: 'Festive, Wedding, Ceremony',
    length: 'Adjustable Choker',
    careInstructions: 'Keep dry. Store in cotton wrap.',
    images: ['/images/Jewelley/DSC_0017.JPG'],
    featured: false,
    newArrival: false,
    stock: 5,
    active: true,
  },
  {
    id: 31,
    name: 'Contemporary Indo Western Necklace Set',
    slug: 'contemporary-indo-western-necklace-set',
    sku: 'BLM-JWL-015',
    category: 'jewellery',
    price: 5200,
    description: 'A sleek, modern design that blends traditional techniques with contemporary geometric style. Ideal for fusion and modern ethnic ensembles.',
    fabric: 'Alloy & Semi-precious Stones',
    color: 'Gold & Mint Green',
    occasion: 'Cocktail, Party, Fusion Wear',
    length: 'Adjustable Fit',
    careInstructions: 'Clean with dry microfiber cloth.',
    images: [
      '/images/Jewelley/DSC_0015.JPG',
      '/images/Jewelley/DSC_0016.JPG'
    ],
    featured: true,
    newArrival: true,
    stock: 3,
    active: true,
  },
  {
    id: 32,
    name: 'Ethnic Single Line Gold Chain Necklace',
    slug: 'ethnic-single-line-gold-chain-necklace',
    sku: 'BLM-JWL-014',
    category: 'jewellery',
    price: 1800,
    description: 'A minimalist single line ethnic neckpiece decorated with gold-toned micro beads and traditional motifs. Perfect for daily styling or subtle layers.',
    fabric: 'Gold Plated Brass',
    color: 'Gold',
    occasion: 'Daily Wear, Casual Festive',
    length: '18 inches',
    careInstructions: 'Store in moisture-free box.',
    images: ['/images/Jewelley/DSC_0014.JPG'],
    featured: false,
    newArrival: false,
    stock: 12,
    active: true,
  },
  {
    id: 33,
    name: 'Ethnic 3-Layer Jondhale Pot',
    slug: 'ethnic-3-layer-jondhale-pot',
    sku: 'BLM-JWL-013',
    category: 'jewellery',
    price: 3200,
    description: 'A traditional Maharashtrian 3-layer jondhale pot (जोंधळे पोत) necklace, symbolic of auspicious heritage and detailed with classic gold beads.',
    fabric: 'Traditional Gold Beads & Thread',
    color: 'Gold',
    occasion: 'Puja, Traditional Festivals, Weddings',
    length: 'Adjustable Dori',
    careInstructions: 'Clean with soft cloth. Avoid liquids.',
    images: ['/images/Jewelley/DSC_0013.JPG'],
    featured: true,
    newArrival: false,
    stock: 2,
    active: true,
  },
  {
    id: 34,
    name: 'Contemporary Elegant Jewellery Set',
    slug: 'contemporary-elegant-jewellery-set',
    sku: 'BLM-JWL-012',
    category: 'jewellery',
    price: 4800,
    description: 'A highly sophisticated contemporary jewellery set. Designed with geometric accents, perfect for cocktail drapes, evening wear, and reception gowns.',
    fabric: 'Premium Alloy & Crystal Stones',
    color: 'Silver & Emerald Green',
    occasion: 'Evening Party, Reception, Cocktail',
    length: 'Adjustable Fit',
    careInstructions: 'Clean with dry cotton only.',
    images: [
      '/images/Jewelley/DSC_0012.JPG',
      '/images/Jewelley/DSC_0011.JPG',
      '/images/Jewelley/DSC_0009.JPG',
      '/images/Jewelley/DSC_0008.JPG'
    ],
    featured: false,
    newArrival: true,
    stock: 6,
    active: true,
  },
  {
    id: 35,
    name: 'Precious Stone Jewellery Set',
    slug: 'precious-stone-jewellery-set',
    sku: 'BLM-JWL-010',
    category: 'jewellery',
    price: 6800,
    description: 'A premium designer necklace set embedded with select semi-precious stone drops and detailed metal carvings. Complemented with heavy earrings.',
    fabric: 'Semi-precious Stones & Gold Finish',
    color: 'Ruby Red & Antique Gold',
    occasion: 'Wedding, Festive, Reception',
    length: 'Adjustable',
    careInstructions: 'Do not expose to chemical cleaners.',
    images: ['/images/Jewelley/DSC_0010.JPG'],
    featured: true,
    newArrival: false,
    stock: 2,
    active: true,
  },
  {
    id: 36,
    name: 'Ethnic AD Necklace Set',
    slug: 'ethnic-ad-necklace-set',
    sku: 'BLM-JWL-007',
    category: 'jewellery',
    price: 5400,
    description: 'A stunning traditional necklace set studded with premium American Diamond (AD) stones. Designed to provide a brilliant and clean diamond look.',
    fabric: 'American Diamond & Alloy',
    color: 'Sparkling White & Gold',
    occasion: 'Wedding, Festive, Reception',
    length: 'Adjust0able Neck Size',
    careInstructions: 'Keep in airtight jewelry cover.',
    images: [
      '/images/Jewelley/DSC_0007.JPG',
      '/images/Jewelley/DSC_0003.JPG'
    ],
    featured: false,
    newArrival: false,
    stock: 4,
    active: true,
  },
  {
    id: 37,
    name: 'AD Necklace with Pearl Drops',
    slug: 'ad-necklace-with-pearl-drops',
    sku: 'BLM-JWL-006',
    category: 'jewellery',
    price: 4900,
    description: 'A beautiful blend of sparkling American Diamond (AD) stone clusters and elegant hanging pearl drops, ideal for modern festivity styling.',
    fabric: 'AD & Premium Pearls',
    color: 'Gold, White & Pearl',
    occasion: 'Festive, Party, Reception',
    length: 'Adjustable Dori',
    careInstructions: 'Avoid sweat, chemicals, and water.',
    images: ['/images/Jewelley/DSC_0006.JPG'],
    featured: false,
    newArrival: true,
    stock: 7,
    active: true,
  },
  {
    id: 38,
    name: 'Ethnic Antique Gold Necklace Set',
    slug: 'ethnic-antique-gold-necklace-set',
    sku: 'BLM-JWL-005',
    category: 'jewellery',
    price: 3600,
    description: 'A classic antique-finish necklace set with detailed temple carving designs and small golden beads. Timeless styling piece for festive drapes.',
    fabric: 'Gold Plated Brass Alloy',
    color: 'Antique Gold',
    occasion: 'Puja, Festive, Traditional Wear',
    length: 'Adjustable Dori',
    careInstructions: 'Clean with dry cloth only.',
    images: ['/images/Jewelley/DSC_0005.JPG'],
    featured: false,
    newArrival: false,
    stock: 10,
    active: true,
  },
  {
    id: 39,
    name: 'Fashion Necklace Set with AD',
    slug: 'fashion-necklace-set-with-ad',
    sku: 'BLM-JWL-004',
    category: 'jewellery',
    price: 3400,
    description: 'An elegant fashion necklace set with sparkling American Diamond settings, offering a sleek, sophisticated visual appeal at parties.',
    fabric: 'AD Stones & Silver Plating',
    color: 'Silver & Diamond White',
    occasion: 'Party, Cocktail, Festive',
    length: 'Adjustable Fit',
    careInstructions: 'Store in plastic airtight pouch.',
    images: ['/images/Jewelley/DSC_0004.JPG'],
    featured: false,
    newArrival: false,
    stock: 5,
    active: true,
  },
  {
    id: 40,
    name: 'Ethnic AD into Western Fusion Necklace Set',
    slug: 'ethnic-ad-into-western-fusion-necklace-set',
    sku: 'BLM-JWL-0001',
    category: 'jewellery',
    price: 5600,
    description: 'A striking fusion necklace set that pairs traditional AD work with modern Western silhouettes, designed for statements at receptions.',
    fabric: 'Premium AD & Rhodium Plating',
    color: 'Sparkling Silver & Emerald Green',
    occasion: 'Reception, Evening Gown, Party',
    length: 'Adjustable Neckline',
    careInstructions: 'Wipe clean after use and keep dry.',
    images: ['/images/Jewelley/DSC_0001.JPG'],
    featured: true,
    newArrival: true,
    stock: 3,
    active: true,
  },
];

export const WHATSAPP_NUMBER = '919112122645';

export function getProductVariantInfo(product, selectedImageIndex = 0) {
  const imageUrl = product.images && product.images[selectedImageIndex];
  if (!imageUrl) {
    return { name: product.name, color: product.color };
  }

  // Get the file name without extension
  const filenameWithExt = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  const filename = filenameWithExt.substring(0, filenameWithExt.lastIndexOf('.'));

  // If the filename starts with DSC_ (like DSC_0065 (2)) or similar non-descriptive names, fallback
  if (filename.toUpperCase().startsWith('DSC_') || /^\d+$/.test(filename) || filename.toUpperCase().startsWith('HERO-')) {
    return { name: product.name, color: product.color };
  }

  // Extract color name
  let colorName = filename
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Strip trailing " (1)", "_1", " _1", " (Variant)" or similar counters in filenames
  colorName = colorName
    .replace(/\(\d+\)/g, '')
    .replace(/_1/g, '')
    .replace(/ - 1/g, '')
    .trim();

  // Make the first letter of each word uppercase
  colorName = colorName
    .split(' ')
    .map(word => {
      if (!word) return '';
      if (word.startsWith('(')) {
        return '(' + word.charAt(1).toUpperCase() + word.slice(2);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .filter(Boolean)
    .join(' ');

  const variantName = `${product.name} - ${colorName}`;

  return { name: variantName, color: colorName };
}

export function getWhatsAppUrl(product, selectedImageIndex = 0) {
  const variantInfo = getProductVariantInfo(product, selectedImageIndex);
  const message = `Hi Bellissima! I would like to buy *${variantInfo.name}* (SKU: ${product.sku}) from Bellissima. Could you please let me know how to proceed?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getRestockWhatsAppUrl(product) {
  const message = `Hi Bellissima! I noticed *${product.name}* (SKU: ${product.sku}) is currently out of stock on Bellissima. Could you let me know when it will be available again? I am very interested!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price) {
  if (!price) return '';
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getStockStatus(stock) {
  if (stock === 0) return { label: 'Out of Stock', color: 'text-gray-400', bg: 'bg-gray-100', dot: 'bg-gray-400' };
  return { label: 'In Stock', color: 'text-emerald-600', bg: 'bg-emerald-50', dot: 'bg-emerald-500' };
}

// Post-process RAW_PRODUCTS to dynamically sort images ending/containing _1, (1), or first to the front
export const PRODUCTS = RAW_PRODUCTS.map(product => {
  if (product.images && product.images.length > 1) {
    const sortedImages = [...product.images].sort((a, b) => {
      const aName = a.substring(a.lastIndexOf('/') + 1);
      const bName = b.substring(b.lastIndexOf('/') + 1);
      
      const aHasOne = aName.includes('(1)') || aName.includes('_1') || aName.toUpperCase().includes('FIRST');
      const bHasOne = bName.includes('(1)') || bName.includes('_1') || bName.toUpperCase().includes('FIRST');
      
      if (aHasOne && !bHasOne) return -1;
      if (!aHasOne && bHasOne) return 1;
      return 0;
    });
    return { ...product, images: sortedImages };
  }
  return product;
});
