import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ArrowRight,
  ChevronDown
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { vendors, getVendorBySlug } from "@/lib/vendors"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return vendors.map((vendor) => ({
    slug: vendor.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const vendor = getVendorBySlug(slug)
  
  if (!vendor) {
    return { title: "Vendor Not Found | PrintConnect" }
  }

  return {
    title: `${vendor.name} | PrintConnect`,
    description: vendor.description,
  }
}

// Sample reviews data
const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent quality and fast delivery. The team was very responsive to our questions and made sure everything was perfect.",
  },
  {
    id: 2,
    author: "James T.",
    rating: 5,
    date: "1 month ago",
    comment: "We've been using this vendor for all our printing needs for the past year. Consistently great results.",
  },
  {
    id: 3,
    author: "Emma L.",
    rating: 4,
    date: "2 months ago",
    comment: "Good quality prints and reasonable prices. Delivery was a day late but they kept us informed.",
  },
]

export default async function VendorDetailPage({ params }: PageProps) {
  const { slug } = await params
  const vendor = getVendorBySlug(slug)

  if (!vendor) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-primary-foreground lg:h-24 lg:w-24">
                {vendor.logo}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                    {vendor.name}
                  </h1>
                  {vendor.verified && (
                    <Badge variant="outline" className="border-green-500 text-green-500">
                      <CheckCircle className="mr-1 h-3 w-3" /> Verified
                    </Badge>
                  )}
                  {vendor.featured && (
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                  )}
                </div>
                <p className="mt-2 text-lg text-muted-foreground">{vendor.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{vendor.rating}</span>
                    <span className="text-muted-foreground">({vendor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {vendor.deliveryTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" asChild>
                <Link href={`/get-quote?vendor=${vendor.slug}`}>
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/${vendor.contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground">About {vendor.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{vendor.about}</p>
              </div>

              {/* Services */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground">Services Offered</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {vendor.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground">Portfolio</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center"
                    >
                      <span className="text-4xl text-primary/30">
                        {vendor.logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground">Pricing Guide</h2>
                <p className="mt-2 text-sm text-muted-foreground">Starting prices. Contact for custom quotes.</p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 text-left font-semibold text-foreground">Service</th>
                        <th className="py-3 text-left font-semibold text-foreground">Starting Price</th>
                        <th className="py-3 text-left font-semibold text-foreground">MOQ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendor.pricing.map((item, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="py-4 text-foreground">{item.service}</td>
                          <td className="py-4 font-semibold text-primary">{item.startingPrice}</td>
                          <td className="py-4 text-muted-foreground">{item.moq} units</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reviews */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Customer Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{vendor.rating}</span>
                    <span className="text-muted-foreground">({vendor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mt-6 space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{review.author}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="mt-4">
                  {vendor.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">Contact {vendor.name}</h3>
                
                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${vendor.contactInfo.email}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">{vendor.contactInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${vendor.contactInfo.phone}`}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">{vendor.contactInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={vendor.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="text-sm font-medium text-foreground">Visit Website</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/get-quote?vendor=${vendor.slug}`}>
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href={`https://wa.me/${vendor.contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
