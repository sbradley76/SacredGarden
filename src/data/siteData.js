import heroBg from '../assets/hero-bg-realistic.png';
import flowerCategory from '../assets/flower-category.png';
import vapeCategory from '../assets/vape-category.png';
import ediblesCategory from '../assets/edibles-category.png';
import glassCategory from '../assets/glass-category.png';
import preRollCategory from '../assets/pre-rolls-category.png';
import accessoriesCategory from '../assets/accessories-category.png';

import flowerProduct from '../assets/flower-product.png';
import vapeProduct from '../assets/vape-product.png';
import ediblesProduct from '../assets/edibles-product.png';
import glassProduct from '../assets/glass-product.png';
import preRollProduct from '../assets/pre-rolls-product.png';
import accessoriesProduct from '../assets/accessories-product.png';

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
];

export const heroData = {
  image: heroBg,
  eyebrow: 'Premium botanical smoke shop',
  title: 'A darker, richer storefront built to feel immersive, lush, and premium.',
  text: 'The Sacred Garden leans into mood, texture, and motion so the brand feels high-end and memorable before Shopify wiring ever goes live.',
  stats: [
    { value: '6', label: 'curated categories' },
    { value: '21+', label: 'adult positioning' },
    { value: 'V2', label: 'interaction pass' },
  ],
};

export const categories = [
  {
    slug: 'flower',
    name: 'Flower',
    image: flowerCategory,
    description: 'Premium jars, soft botanical lighting, and a more editorial presentation.',
  },
  {
    slug: 'vapes',
    name: 'Vapes',
    image: vapeCategory,
    description: 'Sharper packaging presentation with a cleaner luxury-tech silhouette.',
  },
  {
    slug: 'edibles',
    name: 'Edibles',
    image: ediblesCategory,
    description: 'Shelf-ready treats styled more like upscale wellness than convenience store candy.',
  },
  {
    slug: 'glass',
    name: 'Glass',
    image: glassCategory,
    description: 'Showcase pieces with glow, transparency, and stronger premium detail cues.',
  },
  {
    slug: 'pre-rolls',
    name: 'Pre-Rolls',
    image: preRollCategory,
    description: 'Refined tin-and-pack styling with room for strain notes and featured drops.',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    image: accessoriesCategory,
    description: 'Trays, tools, grinders, and lifestyle goods presented with elevated texture.',
  },
];

export const featuredProducts = [
  {
    id: 1,
    category: 'Flower',
    name: 'Emerald Ritual Reserve',
    price: '$48',
    image: flowerProduct,
    badge: 'Small batch',
    description: 'Rich green flower styling, glass jar presentation, and premium shelf presence.',
    notes: ['Indoor style presentation', 'Curated shelf story', 'Featured collection ready'],
  },
  {
    id: 2,
    category: 'Vapes',
    name: 'Velvet Current Live Vape',
    price: '$42',
    image: vapeProduct,
    badge: 'Best seller',
    description: 'A moody pen-and-box display built to feel sharper and more believable on card hover.',
    notes: ['Tech-forward visual', 'Strong hero candidate', 'Good for featured promos'],
  },
  {
    id: 3,
    category: 'Edibles',
    name: 'Garden Gold Gummies',
    price: '$26',
    image: ediblesProduct,
    badge: 'New drop',
    description: 'Styled like a premium botanical edible line with warmer shelf tones and glow.',
    notes: ['Easy upsell slot', 'Works in bundles', 'Strong for category banners'],
  },
  {
    id: 4,
    category: 'Glass',
    name: 'Midnight Moss Glass Piece',
    price: '$88',
    image: glassProduct,
    badge: 'Collector',
    description: 'Designed with stronger transparency cues and a more realistic moody product stage.',
    notes: ['Signature visual piece', 'Luxury focal item', 'Homepage feature ready'],
  },
  {
    id: 5,
    category: 'Pre-Rolls',
    name: 'Evening Blend Five Pack',
    price: '$24',
    image: preRollProduct,
    badge: 'Featured',
    description: 'A refined pre-roll visual direction that feels cleaner and more premium than before.',
    notes: ['Promo banner ready', 'Good for product rail', 'Simple PDP handoff later'],
  },
  {
    id: 6,
    category: 'Accessories',
    name: 'Sacred Session Tray Set',
    price: '$34',
    image: accessoriesProduct,
    badge: 'Add-on',
    description: 'Lifestyle accessory styling with warmer wood tones and better depth for merchandising.',
    notes: ['Cart upsell ready', 'Giftable item', 'Accessory collection anchor'],
  },
];

export const shopFilters = ['All', 'Flower', 'Vapes', 'Edibles', 'Glass', 'Pre-Rolls', 'Accessories'];

export const pillars = [
  {
    title: 'Sharper visual hierarchy',
    text: 'Type sizing, spacing, and card proportions are tuned so the site feels premium instead of overblown or cramped.',
  },
  {
    title: 'Stronger interaction layer',
    text: 'Filters, quick view, cart drawer, hover motion, and category focus give the storefront more life even without live commerce.',
  },
  {
    title: 'Better placeholder art direction',
    text: 'The upgraded graphics are intentionally moodier and more realistic so the brand feels established while you gather final photography.',
  },
];

export const stats = [
  { value: '03', label: 'core pages built' },
  { value: '06', label: 'interactive product cards' },
  { value: '01', label: 'mock cart drawer' },
  { value: '∞', label: 'room to scale' },
];

export const faqs = [
  {
    q: 'What changed in this iteration?',
    a: 'This pass tightens the typography scale, reduces overly rounded pills, upgrades the placeholder graphics, and adds real front-end interactions such as quick view and mock cart controls.',
  },
  {
    q: 'Is it wired to Shopify yet?',
    a: 'Not yet by design. This version focuses on polish, motion, and merchandising behavior so the UX feels premium before the backend pass.',
  },
  {
    q: 'Are these final product photos?',
    a: 'No. They are upgraded placeholder renders to sell the mood and layout. You can swap in real photography later without changing the site structure.',
  },
];

export const brandMoments = [
  {
    title: 'A richer first impression',
    text: 'The homepage opens like a premium lounge instead of a generic product grid.',
  },
  {
    title: 'More believable merchandising',
    text: 'Cards, badges, and detail states now behave more like a real storefront.',
  },
  {
    title: 'Built for a premium next step',
    text: 'Once you are ready, these same components can map cleanly to Shopify collections and products.',
  },
];
