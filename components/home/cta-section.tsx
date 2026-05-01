import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Send, CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
              Ready to Find Your Perfect Printing Partner?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Submit one request and receive quotes from multiple verified vendors. No commitment, no fees — just great options.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "One request reaches multiple vendors",
                "Compare quotes side-by-side",
                "No hidden fees or commitments",
                "Support throughout the process",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="/get-quote">
                  <Send className="mr-2 h-5 w-5" />
                  Request Multiple Quotes
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/compare">
                  Compare Vendors
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur-sm">
              <div className="rounded-xl bg-card p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-foreground">
                  How Multiple Quotes Work
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">You Submit</p>
                      <p className="text-sm text-muted-foreground">
                        &ldquo;I need 500 business cards&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">We Match</p>
                      <p className="text-sm text-muted-foreground">
                        5 relevant vendors receive your request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">You Compare</p>
                      <p className="text-sm text-muted-foreground">
                        Review and choose the best offer
                      </p>
                    </div>
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
