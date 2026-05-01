"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Send, 
  Upload, 
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const productTypes = [
  "Business Cards",
  "Flyers & Leaflets",
  "Brochures & Booklets",
  "Banners & Signs",
  "Roll-up Stands",
  "Exhibition Displays",
  "Packaging & Boxes",
  "Labels & Stickers",
  "T-Shirts & Apparel",
  "Corporate Signage",
  "Vehicle Graphics",
  "Other",
]

const quantities = [
  "50-100",
  "100-250",
  "250-500",
  "500-1000",
  "1000-2500",
  "2500-5000",
  "5000+",
  "Custom",
]

const deadlines = [
  "ASAP / Rush",
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible / No rush",
]

export default function GetQuotePage() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get("service") || ""
  const preselectedVendor = searchParams.get("vendor") || ""

  const [formData, setFormData] = useState({
    productType: preselectedService || "",
    quantity: "",
    location: "",
    deadline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground lg:text-4xl">
            Quote Request Submitted!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your request has been sent to our network of verified vendors. You&apos;ll receive competitive quotes in your inbox within 24 hours.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/vendors">
                Browse Vendors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              Request Multiple Quotes
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Submit one request and receive competitive quotes from multiple verified printing vendors. Free, fast, and no obligation.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">500+ Verified Vendors</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Quotes within 24hrs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">100% Free Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Details */}
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-foreground">Project Details</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your printing project
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type *</Label>
                  <Select 
                    value={formData.productType} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, productType: value }))}
                  >
                    <SelectTrigger id="productType">
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/ /g, "-")}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Select 
                    value={formData.quantity} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, quantity: value }))}
                  >
                    <SelectTrigger id="quantity">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {quantities.map((qty) => (
                        <SelectItem key={qty} value={qty.toLowerCase().replace(/ /g, "-")}>
                          {qty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Delivery Location *</Label>
                  <Input
                    id="location"
                    placeholder="City or postcode"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline *</Label>
                  <Select 
                    value={formData.deadline} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, deadline: value }))}
                  >
                    <SelectTrigger id="deadline">
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent>
                      {deadlines.map((deadline) => (
                        <SelectItem key={deadline} value={deadline.toLowerCase().replace(/ /g, "-")}>
                          {deadline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="notes">Additional Details</Label>
                <Textarea
                  id="notes"
                  placeholder="Describe your project, specifications, special requirements, etc."
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                />
              </div>

              <div className="mt-6 space-y-2">
                <Label>Upload Design File (Optional)</Label>
                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50 p-8">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop your files here, or{" "}
                      <button type="button" className="text-primary hover:underline">
                        browse
                      </button>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      PDF, AI, EPS, PSD, JPG, PNG (Max 25MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-foreground">Contact Details</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                How should vendors reach you?
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+44 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <Button type="submit" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Submit Quote Request
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            What Happens Next?
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "We Match Your Request",
                description: "Your request is instantly sent to relevant vendors in our network who specialize in your product type.",
              },
              {
                step: "2",
                title: "Vendors Send Quotes",
                description: "You'll receive competitive quotes from multiple vendors directly in your inbox within 24 hours.",
              },
              {
                step: "3",
                title: "You Choose the Best",
                description: "Compare quotes, review vendor profiles, and connect with your chosen printing partner.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
