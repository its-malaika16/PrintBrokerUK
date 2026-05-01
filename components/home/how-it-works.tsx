import { FileText, Search, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit Your Request",
    description: "Tell us what you need — product type, quantity, deadline, and any special requirements.",
  },
  {
    step: "02",
    icon: Search,
    title: "We Match You with Vendors",
    description: "Our platform instantly matches your request with relevant, verified printing vendors.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Receive Multiple Quotes",
    description: "Get competitive quotes from multiple vendors directly in your inbox within hours.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Choose & Connect",
    description: "Compare quotes, read reviews, and connect with your chosen vendor to get started.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-accent py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
            Get Started in 4 Simple Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From request to delivery, we make finding the right printing partner effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-card border border-border shadow-sm">
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                  <step.icon className="mt-1 h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
