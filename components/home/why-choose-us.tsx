import { Shield, Zap, Users, Award, Clock, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "500+ Verified Vendors",
    description: "Access a curated network of trusted printing professionals across the UK, all vetted for quality and reliability.",
  },
  {
    icon: Zap,
    title: "Quick Quote Comparison",
    description: "Submit one request and receive multiple competitive quotes from relevant vendors within hours.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All vendors meet our strict quality standards. Your satisfaction is backed by our platform guarantee.",
  },
  {
    icon: Award,
    title: "Transparent Reviews",
    description: "Real reviews from real businesses help you make informed decisions with confidence.",
  },
  {
    icon: Clock,
    title: "Save Time & Money",
    description: "No more calling multiple vendors. Compare prices, turnaround times, and services in one place.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Our team is here to help you find the perfect printing partner for your specific needs.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why Print Broker UK
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
            The Smarter Way to Source Printing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We&apos;ve built the platform businesses wish existed — connecting you with the right printing partners, faster.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
