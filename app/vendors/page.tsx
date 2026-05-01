"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Search,
  SlidersHorizontal,
  ArrowRight,
  Plus
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { vendors } from "@/lib/vendors"

const locations = ["All Locations", "London", "Manchester", "Birmingham", "Leeds", "Bristol", "Edinburgh"]
const services = ["All Services", "Business Cards", "Banners", "Packaging", "T-Shirts", "Signage", "Exhibition"]

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedService, setSelectedService] = useState("All Services")
  const [compareList, setCompareList] = useState<number[]>([])

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesLocation = selectedLocation === "All Locations" || vendor.location === selectedLocation
    const matchesService = selectedService === "All Services" || 
      vendor.services.some(s => s.toLowerCase().includes(selectedService.toLowerCase()))
    
    return matchesSearch && matchesLocation && matchesService
  })

  const toggleCompare = (vendorId: number) => {
    setCompareList(prev => 
      prev.includes(vendorId) 
        ? prev.filter(id => id !== vendorId)
        : prev.length < 3 
          ? [...prev, vendorId]
          : prev
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              Find Printing Vendors
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our network of verified printing partners. Compare services, ratings, and get quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Listing */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search vendors or services..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SlidersHorizontal className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <div className="mb-6 flex items-center justify-between rounded-xl border border-primary bg-primary/5 p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">
                  {compareList.length} vendor{compareList.length > 1 ? "s" : ""} selected for comparison
                </span>
                <button 
                  onClick={() => setCompareList([])}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </button>
              </div>
              <Button asChild size="sm">
                <Link href={`/compare?vendors=${compareList.join(",")}`}>
                  Compare Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Vendor Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                    {vendor.logo}
                  </div>
                  <div className="flex items-center gap-2">
                    {vendor.featured && (
                      <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                    )}
                    <button
                      onClick={() => toggleCompare(vendor.id)}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                        compareList.includes(vendor.id)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                      title={compareList.includes(vendor.id) ? "Remove from compare" : "Add to compare"}
                    >
                      <Plus className={`h-4 w-4 ${compareList.includes(vendor.id) ? "rotate-45" : ""}`} />
                    </button>
                  </div>
                </div>

                <Link href={`/vendors/${vendor.slug}`}>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                </Link>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {vendor.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
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
                  {vendor.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                  {vendor.services.length > 3 && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      +{vendor.services.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/vendors/${vendor.slug}`}>View Profile</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href={`/get-quote?vendor=${vendor.slug}`}>Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No vendors found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery("")
                setSelectedLocation("All Locations")
                setSelectedService("All Services")
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
