import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Shield,
  Lightbulb,
  Building2,
  CheckCircle
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Print Broker UK",
  description: "Learn about Print Broker UK - the premier platform connecting businesses with top printing service providers. Our mission, vision, and commitment to quality.",
}

const stats = [
  { value: "500+", label: "Verified Vendors" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "50,000+", label: "Quotes Delivered" },
  { value: "98%", label: "Satisfaction Rate" },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We verify every vendor and provide honest reviews to help you make informed decisions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our platform to make finding the right printing partner easier than ever.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your success is our success. We're committed to helping you achieve your printing goals.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting relationships with both businesses and vendors in the printing industry.",
  },
]

const team = [
  {
    name: "David Wilson",
    role: "Founder & CEO",
    bio: "20+ years in the printing industry. Founded Print Broker UK to solve the vendor discovery problem.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Vendor Relations",
    bio: "Former print buyer who understands the challenges businesses face when sourcing printing services.",
  },
  {
    name: "James Chen",
    role: "Chief Technology Officer",
    bio: "Tech leader with a passion for building platforms that connect businesses with the right partners.",
  },
  {
    name: "Emma Thompson",
    role: "Customer Success Lead",
    bio: "Dedicated to ensuring every client finds their perfect printing partner through our platform.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              About Print Broker UK
            </h1>
            <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
              We&apos;re on a mission to transform how businesses find and connect with printing service providers. No more endless searching, no more uncertainty — just the right partners for your needs.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Our Story
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
                Built by People Who Understand Printing
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Print Broker UK was born from frustration. Our founder, David Wilson, spent 20 years in the printing industry and saw firsthand how difficult it was for businesses to find the right printing partners. Hours of research, countless phone calls, and still no guarantee of quality or fair pricing.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In 2020, we set out to change that. We built a platform that brings together verified printing vendors and makes it easy for businesses to compare, connect, and get competitive quotes — all in one place.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today, Print Broker UK serves thousands of businesses across the UK, connecting them with our network of 500+ trusted vendors. From business cards to exhibition displays, we&apos;re here to help you find the perfect printing partner for every project.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Building2 className="h-32 w-32 text-primary/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-6 shadow-lg">
                <p className="text-3xl font-bold text-primary">Since 2020</p>
                <p className="text-sm text-muted-foreground">Helping businesses print better</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To make finding the right printing partner as simple as a few clicks. We believe every business deserves access to quality printing services, fair pricing, and vendors they can trust.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become the go-to platform for printing services worldwide. We envision a future where businesses can find, compare, and connect with printing vendors anywhere in the world, instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
              How Print Broker UK Works
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Our unique business model benefits both businesses and vendors.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary-foreground">For Businesses</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "100% free to use — no hidden fees",
                  "Access to 500+ verified vendors",
                  "Request multiple quotes with one form",
                  "Compare vendors side-by-side",
                  "Read real reviews from real clients",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-primary-foreground">For Vendors</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Access to qualified leads",
                  "Build your online reputation",
                  "Showcase your portfolio",
                  "Compete on a level playing field",
                  "Grow your business sustainably",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
              The People Behind Print Broker UK
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n.charAt(0)).join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Find Your Perfect Printing Partner?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join thousands of businesses who have found their ideal printing vendors through Print Broker UK.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/get-quote">
                Get Free Quotes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/vendors">Browse Vendors</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
