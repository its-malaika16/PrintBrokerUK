import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CreditCard, 
  Layers, 
  Building2, 
  Package, 
  Shirt, 
  Presentation,
  CheckCircle 
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Printing Services | PrintConnect",
  description: "Explore our comprehensive range of printing services including business cards, banners, packaging, signage, corporate branding, and more. Get quotes from verified vendors.",
}

const services = [
  {
    id: "business-cards",
    icon: CreditCard,
    title: "Business Card Printing",
    description: "Make a lasting first impression with premium business cards. Our vendors offer a variety of finishes, materials, and designs to match your brand identity.",
    benefits: [
      "Wide range of paper stocks and finishes",
      "Quick turnaround options available",
      "Custom shapes and sizes",
      "Spot UV, foil stamping, embossing",
    ],
    useCases: ["Networking events", "Client meetings", "Trade shows", "Corporate gifting"],
    image: "bg-gradient-to-br from-pink-100 to-pink-200",
  },
  {
    id: "banners",
    icon: Layers,
    title: "Banner Printing",
    description: "High-impact banner printing for indoor and outdoor advertising. From roll-up banners to large-format mesh banners, find vendors who deliver quality and durability.",
    benefits: [
      "Indoor and outdoor options",
      "Weather-resistant materials",
      "Custom sizes available",
      "Quick installation accessories",
    ],
    useCases: ["Trade shows", "Retail displays", "Event backdrops", "Street advertising"],
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging Printing",
    description: "Custom packaging solutions that protect your products and enhance your brand. From luxury boxes to eco-friendly options, our vendors cover all packaging needs.",
    benefits: [
      "Custom structural design",
      "Premium finishing options",
      "Eco-friendly materials available",
      "Small to large batch production",
    ],
    useCases: ["Product launches", "E-commerce shipping", "Retail packaging", "Gift boxes"],
    image: "bg-gradient-to-br from-orange-100 to-orange-200",
  },
  {
    id: "signage",
    icon: Building2,
    title: "Signage Printing",
    description: "Professional signage solutions for businesses of all sizes. Interior and exterior signs that communicate your brand effectively and stand the test of time.",
    benefits: [
      "Durable materials for longevity",
      "LED and illuminated options",
      "Full design services available",
      "Professional installation",
    ],
    useCases: ["Storefronts", "Office reception", "Wayfinding", "Safety signage"],
    image: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Branding",
    description: "Transform your workspace with comprehensive corporate branding. From wall graphics to reception signage, create an environment that reflects your brand values.",
    benefits: [
      "Complete brand consistency",
      "High-quality wall graphics",
      "Window frosting and decals",
      "Reception and lobby signage",
    ],
    useCases: ["Office refurbishment", "New office setup", "Brand refresh", "Client-facing spaces"],
    image: "bg-gradient-to-br from-indigo-100 to-indigo-200",
  },
  {
    id: "exhibition",
    icon: Presentation,
    title: "Exhibition Printing",
    description: "Stand out at trade shows and exhibitions with premium display solutions. Our vendors specialize in creating impactful booth graphics and event materials.",
    benefits: [
      "Modular display systems",
      "Portable and reusable options",
      "Quick setup designs",
      "Complete booth packages",
    ],
    useCases: ["Trade shows", "Conferences", "Product launches", "Corporate events"],
    image: "bg-gradient-to-br from-red-100 to-red-200",
  },
  {
    id: "apparel",
    icon: Shirt,
    title: "Apparel Printing",
    description: "Custom apparel printing for businesses, events, and teams. From t-shirts to uniforms, find vendors who deliver quality prints that last.",
    benefits: [
      "Screen printing and DTG options",
      "Bulk order discounts",
      "Wide garment selection",
      "Embroidery available",
    ],
    useCases: ["Team uniforms", "Promotional items", "Event merchandise", "Corporate wear"],
    image: "bg-gradient-to-br from-green-100 to-green-200",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              Printing Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              From business cards to exhibition displays, find the right printing partners for every project. Compare vendors and get competitive quotes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/get-quote">
                  Get Free Quotes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vendors">Browse All Vendors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`aspect-video rounded-2xl ${service.image} flex items-center justify-center`}>
                    <service.icon className="h-24 w-24 text-foreground/20" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground">Key Benefits</h3>
                    <ul className="mt-3 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground">Popular Use Cases</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href={`/get-quote?service=${service.id}`}>
                        Get Quote for {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            We have vendors for virtually every printing need. Submit a custom request and we&apos;ll match you with the right partners.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-quote">
                Submit Custom Request
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
