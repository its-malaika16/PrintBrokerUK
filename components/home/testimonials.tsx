import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "PrintConnect saved us hours of research. We received 5 quotes within a day and found a vendor that delivered exceptional quality at a great price.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    rating: 5,
  },
  {
    quote: "As a startup, we needed affordable printing without compromising quality. PrintConnect connected us with the perfect partner for our packaging needs.",
    author: "James Chen",
    role: "Founder",
    company: "GreenBox Co.",
    rating: 5,
  },
  {
    quote: "The comparison feature is invaluable. We could easily evaluate vendors side-by-side and make an informed decision for our exhibition materials.",
    author: "Emma Thompson",
    role: "Events Manager",
    company: "EventCraft UK",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground lg:text-4xl">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See what our clients say about their experience with PrintConnect
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mt-4 text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
