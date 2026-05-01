import Link from "next/link"
import { 
  CreditCard, 
  FileText, 
  Layers, 
  Package, 
  Shirt, 
  Presentation,
  Building2,
  Box,
  ArrowRight
} from "lucide-react"

const categories = [
  {
    title: "Small Format Printing",
    icon: CreditCard,
    description: "Business cards, flyers, brochures, and stationery",
    items: ["Business Cards", "Flyers", "Brochures", "Leaflets", "Menus", "Booklets", "Posters", "Letterheads", "Envelopes", "Stickers", "Labels"],
    href: "/services#small-format",
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Large Format Printing",
    icon: Layers,
    description: "Banners, signage, and exhibition graphics",
    items: ["Banners", "Roll-up Stands", "Exhibition Stands", "Sign Boards", "Hoarding Graphics", "Window Graphics", "Wall Graphics", "Vehicle Branding"],
    href: "/services#large-format",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Corporate Branding",
    icon: Building2,
    description: "Office branding and professional signage",
    items: ["Office Branding", "Wall Branding", "Window Frosting", "Reception Signage", "Corporate Gifts Printing"],
    href: "/services#corporate",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Packaging Printing",
    icon: Package,
    description: "Custom boxes and product packaging",
    items: ["Product Boxes", "Food Packaging", "Luxury Packaging", "Shopping Bags", "Custom Boxes"],
    href: "/services#packaging",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Apparel Printing",
    icon: Shirt,
    description: "Custom clothing and uniform printing",
    items: ["T-Shirt Printing", "Uniform Printing", "Hoodie Printing", "Cap Printing"],
    href: "/services#apparel",
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Event & Exhibition",
    icon: Presentation,
    description: "Trade show displays and event branding",
    items: ["Backdrops", "Booth Graphics", "Stage Branding", "Event Signage", "Trade Show Displays"],
    href: "/services#exhibition",
    color: "bg-red-50 text-red-600"
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find vendors for every type of printing service you need
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <p className="mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
                {category.items.length > 4 && (
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    +{category.items.length - 4} more
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                View Vendors
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
