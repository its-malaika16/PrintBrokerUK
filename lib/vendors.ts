export interface Vendor {
  id: number
  name: string
  slug: string
  logo: string
  rating: number
  reviews: number
  location: string
  deliveryTime: string
  services: string[]
  verified: boolean
  featured: boolean
  description: string
  about: string
  pricing: {
    service: string
    startingPrice: string
    moq: string
  }[]
  gallery: string[]
  faqs: {
    question: string
    answer: string
  }[]
  contactInfo: {
    email: string
    phone: string
    whatsapp: string
    website: string
  }
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "PrintPro UK",
    slug: "printpro-uk",
    logo: "P",
    rating: 4.9,
    reviews: 324,
    location: "London",
    deliveryTime: "2-3 Days",
    services: ["Business Cards", "Flyers", "Brochures", "Stationery", "Letterheads", "Envelopes"],
    verified: true,
    featured: true,
    description: "Premium small format printing specialists serving businesses across the UK.",
    about: "PrintPro UK has been a trusted name in professional printing for over 15 years. We specialize in premium small format printing, delivering exceptional quality business cards, flyers, brochures, and corporate stationery. Our state-of-the-art facility in London houses the latest printing technology, enabling us to offer quick turnaround times without compromising on quality. We pride ourselves on our attention to detail and commitment to customer satisfaction.",
    pricing: [
      { service: "Business Cards (500)", startingPrice: "£29", moq: "100" },
      { service: "Flyers A5 (1000)", startingPrice: "£45", moq: "250" },
      { service: "Brochures (500)", startingPrice: "£189", moq: "100" },
      { service: "Letterheads (500)", startingPrice: "£79", moq: "250" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "What is your standard turnaround time?", answer: "Our standard turnaround is 2-3 business days. We also offer same-day and next-day services for urgent orders at an additional cost." },
      { question: "Do you offer design services?", answer: "Yes, our in-house design team can help create your artwork from scratch or make adjustments to your existing designs." },
      { question: "What file formats do you accept?", answer: "We accept PDF, AI, EPS, PSD, and high-resolution JPEG/PNG files. PDF is preferred for best results." },
    ],
    contactInfo: {
      email: "hello@printprouk.com",
      phone: "+44 20 7123 4567",
      whatsapp: "+447123456789",
      website: "https://printprouk.com",
    },
  },
  {
    id: 2,
    name: "BannerKing",
    slug: "bannerking",
    logo: "B",
    rating: 4.8,
    reviews: 256,
    location: "Manchester",
    deliveryTime: "3-5 Days",
    services: ["Banners", "Roll-up Stands", "Exhibition Stands", "Signage", "Hoarding Graphics", "Window Graphics"],
    verified: true,
    featured: true,
    description: "Large format printing experts specializing in exhibition and event displays.",
    about: "BannerKing is the UK's leading large format printing specialist, with over a decade of experience creating stunning visual displays for businesses of all sizes. From simple roll-up banners to complete exhibition booth packages, we deliver high-impact solutions that help our clients stand out. Our Manchester-based production facility operates 24/7 to meet tight deadlines, and our nationwide delivery network ensures your materials arrive on time, every time.",
    pricing: [
      { service: "Roll-up Banner (850x2000mm)", startingPrice: "£79", moq: "1" },
      { service: "PVC Banner (per sqm)", startingPrice: "£12", moq: "1" },
      { service: "Exhibition Stand (3x3m)", startingPrice: "£599", moq: "1" },
      { service: "Window Graphics (per sqm)", startingPrice: "£25", moq: "1" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "Do you offer installation services?", answer: "Yes, we provide professional installation services across the UK. Contact us for a quote." },
      { question: "What materials do you use for outdoor banners?", answer: "We use premium PVC and mesh materials with UV-resistant inks for outdoor durability." },
      { question: "Can you create custom-sized displays?", answer: "Absolutely! We specialize in custom solutions to fit any space or requirement." },
    ],
    contactInfo: {
      email: "info@bannerking.co.uk",
      phone: "+44 161 123 4567",
      whatsapp: "+447234567890",
      website: "https://bannerking.co.uk",
    },
  },
  {
    id: 3,
    name: "PackageCraft",
    slug: "packagecraft",
    logo: "PC",
    rating: 4.9,
    reviews: 189,
    location: "Birmingham",
    deliveryTime: "5-7 Days",
    services: ["Custom Boxes", "Food Packaging", "Luxury Packaging", "Shopping Bags", "Product Boxes"],
    verified: true,
    featured: false,
    description: "Bespoke packaging solutions for brands that want to stand out.",
    about: "PackageCraft creates packaging that tells your brand story. We specialize in bespoke packaging design and production, working with brands from concept to delivery. Our Birmingham facility combines traditional craftsmanship with modern production techniques, allowing us to create everything from luxury gift boxes to eco-friendly shipping solutions. We're particularly proud of our sustainable packaging range, made from 100% recyclable materials.",
    pricing: [
      { service: "Custom Mailer Boxes (100)", startingPrice: "£150", moq: "50" },
      { service: "Luxury Gift Boxes (50)", startingPrice: "£225", moq: "25" },
      { service: "Paper Bags with Logo (500)", startingPrice: "£180", moq: "100" },
      { service: "Product Boxes (500)", startingPrice: "£350", moq: "100" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "What is the minimum order quantity?", answer: "MOQ varies by product. Custom boxes start at 50 units, while simpler items like bags can start at 100 units." },
      { question: "Do you offer eco-friendly options?", answer: "Yes! We have a complete range of sustainable packaging options made from recyclable and biodegradable materials." },
      { question: "Can I get a sample before ordering?", answer: "Yes, we offer sample packs for a small fee, which is refunded with your first order." },
    ],
    contactInfo: {
      email: "orders@packagecraft.co.uk",
      phone: "+44 121 123 4567",
      whatsapp: "+447345678901",
      website: "https://packagecraft.co.uk",
    },
  },
  {
    id: 4,
    name: "TeeTime Prints",
    slug: "teetime-prints",
    logo: "T",
    rating: 4.7,
    reviews: 412,
    location: "Leeds",
    deliveryTime: "3-5 Days",
    services: ["T-Shirts", "Hoodies", "Uniforms", "Caps", "Promotional Items"],
    verified: true,
    featured: true,
    description: "Custom apparel printing for businesses, events, and teams.",
    about: "TeeTime Prints has been dressing businesses and teams since 2010. We offer a complete range of apparel printing services, from screen printing for bulk orders to DTG printing for smaller runs and complex designs. Our Leeds warehouse stocks over 500 garment styles in various colors and sizes, ready for customization. Whether you need 50 t-shirts for a team event or 5000 uniforms for your staff, we've got you covered.",
    pricing: [
      { service: "T-Shirts with Logo (50)", startingPrice: "£175", moq: "25" },
      { service: "Hoodies with Logo (25)", startingPrice: "£250", moq: "10" },
      { service: "Polo Shirts (50)", startingPrice: "£325", moq: "25" },
      { service: "Caps with Embroidery (50)", startingPrice: "£225", moq: "25" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "What printing methods do you offer?", answer: "We offer screen printing, DTG (direct-to-garment), heat transfer, and embroidery." },
      { question: "Can I supply my own garments?", answer: "Yes, we can print on customer-supplied garments. Please contact us for details." },
      { question: "How do you handle bulk orders?", answer: "For orders over 500 items, we offer dedicated account management and volume discounts." },
    ],
    contactInfo: {
      email: "hello@teetimeprints.co.uk",
      phone: "+44 113 123 4567",
      whatsapp: "+447456789012",
      website: "https://teetimeprints.co.uk",
    },
  },
  {
    id: 5,
    name: "SignCraft Pro",
    slug: "signcraft-pro",
    logo: "S",
    rating: 4.8,
    reviews: 178,
    location: "Bristol",
    deliveryTime: "5-10 Days",
    services: ["Shop Signs", "Office Signage", "Vehicle Graphics", "LED Signs", "Wayfinding"],
    verified: true,
    featured: false,
    description: "Professional signage solutions for retail and corporate clients.",
    about: "SignCraft Pro has been transforming businesses with impactful signage since 2008. We design, manufacture, and install signs that get noticed. From eye-catching shop fronts to sophisticated corporate wayfinding systems, our team brings your vision to life. We work with a variety of materials including acrylic, aluminum, LED, and eco-friendly alternatives. Every project receives dedicated attention from our experienced team of designers and installers.",
    pricing: [
      { service: "Shop Front Sign (2m)", startingPrice: "£450", moq: "1" },
      { service: "LED Light Box Sign", startingPrice: "£350", moq: "1" },
      { service: "Vehicle Full Wrap", startingPrice: "£1200", moq: "1" },
      { service: "Reception Sign", startingPrice: "£275", moq: "1" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "Do you offer site surveys?", answer: "Yes, we offer free site surveys within 50 miles of Bristol. For further locations, a small travel fee applies." },
      { question: "How long do your signs last?", answer: "Our exterior signs are built to last 7-10 years with proper maintenance. Interior signs can last much longer." },
      { question: "Do you handle planning permissions?", answer: "We can advise on planning requirements and help you navigate the application process if needed." },
    ],
    contactInfo: {
      email: "info@signcraftpro.co.uk",
      phone: "+44 117 123 4567",
      whatsapp: "+447567890123",
      website: "https://signcraftpro.co.uk",
    },
  },
  {
    id: 6,
    name: "ExpoGraphics",
    slug: "expographics",
    logo: "E",
    rating: 4.9,
    reviews: 203,
    location: "Edinburgh",
    deliveryTime: "3-7 Days",
    services: ["Trade Show Displays", "Pop-up Stands", "Backdrops", "Event Graphics", "Floor Graphics"],
    verified: true,
    featured: true,
    description: "Complete exhibition and event printing solutions.",
    about: "ExpoGraphics specializes in creating show-stopping exhibition displays that help businesses make an impact at trade shows, conferences, and events. Based in Edinburgh, we serve clients across the UK with a comprehensive range of portable and modular display solutions. Our team includes dedicated exhibition specialists who understand the unique demands of event marketing. From concept to installation, we ensure your brand makes the right impression.",
    pricing: [
      { service: "Pop-up Stand (3x3)", startingPrice: "£450", moq: "1" },
      { service: "Fabric Backdrop (3m)", startingPrice: "£325", moq: "1" },
      { service: "Floor Graphics (per sqm)", startingPrice: "£35", moq: "1" },
      { service: "Complete Booth Package", startingPrice: "£1500", moq: "1" },
    ],
    gallery: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"],
    faqs: [
      { question: "Can you deliver directly to event venues?", answer: "Yes, we regularly deliver to major UK exhibition venues and can coordinate with event organizers." },
      { question: "Do you offer rental options?", answer: "Yes, we offer rental packages for businesses that don't require permanent ownership of display materials." },
      { question: "What happens if something gets damaged at an event?", answer: "We offer rush reprint services and can often deliver replacement graphics within 24-48 hours." },
    ],
    contactInfo: {
      email: "events@expographics.co.uk",
      phone: "+44 131 123 4567",
      whatsapp: "+447678901234",
      website: "https://expographics.co.uk",
    },
  },
]

export function getVendorBySlug(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug)
}

export function getFeaturedVendors(): Vendor[] {
  return vendors.filter((v) => v.featured)
}

export function getVendorsByService(service: string): Vendor[] {
  return vendors.filter((v) => 
    v.services.some((s) => s.toLowerCase().includes(service.toLowerCase()))
  )
}
