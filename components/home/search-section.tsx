"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock, Layers } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceTypes = [
  "Business Cards",
  "Flyers & Brochures",
  "Banners & Signs",
  "Packaging",
  "Corporate Branding",
  "Exhibition Displays",
  "Apparel Printing",
  "Stickers & Labels",
]

const locations = [
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Glasgow",
  "Bristol",
  "Liverpool",
  "Edinburgh",
  "All UK",
]

const deliveryTimes = [
  "Same Day",
  "Next Day",
  "2-3 Days",
  "1 Week",
  "2+ Weeks",
  "Flexible",
]

export function SearchSection() {
  const [serviceType, setServiceType] = useState("")
  const [location, setLocation] = useState("")
  const [deliveryTime, setDeliveryTime] = useState("")

  return (
    <section className="relative -mt-6 z-10 px-4 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
              Search Printing Services
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Find the perfect printing partner for your project
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {/* Service Type */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Layers className="h-4 w-4 text-primary" />
                Service Type
              </label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(/ /g, "-")}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Location
              </label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc.toLowerCase()}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Delivery Time */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Delivery Time
              </label>
              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {deliveryTimes.map((time) => (
                    <SelectItem key={time} value={time.toLowerCase().replace(/ /g, "-")}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Search Vendors
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Business Cards", "Banners", "Packaging", "T-Shirts"].map((item) => (
              <button
                key={item}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
