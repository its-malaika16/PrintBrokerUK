import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const vendors = [
  {
    id: 1,
    name: "PrintPro UK",
    slug: "printpro-uk",
    logo: "P",
    rating: 4.9,
    reviews: 324,
    location: "London",
    deliveryTime: "2-3 Days",
    services: ["Business Cards", "Flyers", "Brochures", "Stationery"],
    verified: true,
    featured: true,
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
    services: ["Banners", "Roll-ups", "Exhibition Stands", "Signage"],
    verified: true,
    featured: true,
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
    services: ["Custom Boxes", "Food Packaging", "Luxury Packaging"],
    verified: true,
    featured: false,
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
    services: ["T-Shirts", "Hoodies", "Uniforms", "Caps"],
    verified: true,
    featured: true,
  },
]

export function FeaturedVendors() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Featured Vendors
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Top-rated printing partners trusted by thousands
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/vendors">
              View All Vendors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {vendors.map((vendor) => (
            <Link
              key={vendor.id}
              href={`/vendors/${vendor.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                  {vendor.logo}
                </div>
                {vendor.featured && (
                  <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {vendor.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{vendor.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({vendor.reviews} reviews)
                </span>
                {vendor.verified && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {vendor.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {vendor.deliveryTime}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {vendor.services.slice(0, 2).map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {service}
                  </span>
                ))}
                {vendor.services.length > 2 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    +{vendor.services.length - 2}
                  </span>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-medium text-primary group-hover:underline">
                  View Profile
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
