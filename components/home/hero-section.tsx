import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Building2, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Star className="h-4 w-4 fill-primary" />
              Trusted by 5,000+ Businesses
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Find the Right Printing Partner for Your{" "}
              <span className="text-primary">Business</span>
            </h1>
            
            <p className="mt-6 text-pretty text-lg text-muted-foreground lg:text-xl">
              We help businesses find the best printing partners for every printing need — from business cards to large-scale exhibition branding. Compare vendors, get quotes, and connect with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base">
                <Link href="/get-quote">
                  Get Free Quotes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/compare">Compare Vendors</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Verified Vendors</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">50,000+</p>
                  <p className="text-sm text-muted-foreground">Quotes Delivered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-full max-w-lg">
              {/* Main Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Top Rated Vendors</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Live</span>
                </div>
                {[
                  { name: "PrintPro UK", rating: 4.9, reviews: 324, specialty: "Business Cards & Stationery" },
                  { name: "BannerKing", rating: 4.8, reviews: 256, specialty: "Large Format Printing" },
                  { name: "PackageCraft", rating: 4.9, reviews: 189, specialty: "Custom Packaging" },
                ].map((vendor, i) => (
                  <div key={i} className="mb-3 flex items-center gap-4 rounded-xl bg-muted p-4 last:mb-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                      {vendor.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-foreground">{vendor.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{vendor.reviews} reviews</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Quote Received!</p>
                    <p className="text-xs text-muted-foreground">3 vendors responded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
