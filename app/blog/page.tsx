import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Print Broker UK",
  description: "Expert insights, guides, and tips for all your printing needs. Learn about the latest trends, best practices, and how to choose the right printing partner.",
}

const featuredPost = {
  slug: "best-printing-companies-uk-2024",
  title: "Best Printing Companies in the UK: 2024 Guide",
  excerpt: "A comprehensive guide to the top printing service providers in the UK. We cover everything from small format printing to large-scale exhibition displays.",
  category: "Guides",
  author: "Sarah Mitchell",
  date: "January 15, 2024",
  readTime: "8 min read",
  image: "bg-gradient-to-br from-primary/20 to-secondary/20",
}

const posts = [
  {
    slug: "banner-vs-vinyl-printing",
    title: "Banner vs Vinyl Printing: Which is Right for Your Business?",
    excerpt: "Understanding the differences between banner and vinyl printing can help you make the right choice for your next project.",
    category: "Tips",
    author: "James Chen",
    date: "January 10, 2024",
    readTime: "5 min read",
  },
  {
    slug: "choose-packaging-vendor",
    title: "How to Choose the Right Packaging Vendor for Your Brand",
    excerpt: "Custom packaging can elevate your brand. Here's what to look for when selecting a packaging printing partner.",
    category: "Guides",
    author: "Emma Thompson",
    date: "January 5, 2024",
    readTime: "6 min read",
  },
  {
    slug: "top-exhibition-printing-services",
    title: "Top Exhibition Printing Services for Trade Shows",
    excerpt: "Make an impact at your next trade show with these exhibition printing tips and vendor recommendations.",
    category: "Industry",
    author: "Michael Roberts",
    date: "December 28, 2023",
    readTime: "7 min read",
  },
  {
    slug: "sustainable-printing-practices",
    title: "Sustainable Printing: Eco-Friendly Options for Businesses",
    excerpt: "Discover how to reduce your environmental impact while meeting your printing needs with sustainable options.",
    category: "Sustainability",
    author: "Sarah Mitchell",
    date: "December 20, 2023",
    readTime: "5 min read",
  },
  {
    slug: "business-card-design-tips",
    title: "10 Business Card Design Tips That Make an Impact",
    excerpt: "Your business card is often the first impression. Learn how to create cards that stand out and get remembered.",
    category: "Design",
    author: "James Chen",
    date: "December 15, 2023",
    readTime: "4 min read",
  },
  {
    slug: "printing-cost-guide",
    title: "Understanding Printing Costs: A Complete Guide",
    excerpt: "Learn what factors affect printing prices and how to get the best value for your budget.",
    category: "Guides",
    author: "Emma Thompson",
    date: "December 10, 2023",
    readTime: "8 min read",
  },
]

const categories = ["All", "Guides", "Tips", "Industry", "Design", "Sustainability"]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              Print Broker UK Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert insights, guides, and tips to help you make better printing decisions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
              <div className={`aspect-video lg:aspect-auto ${featuredPost.image} flex items-center justify-center`}>
                <span className="text-6xl text-primary/20 font-serif">PC</span>
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-8">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {featuredPost.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors lg:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center font-medium text-primary group-hover:underline">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-4xl text-primary/20 font-serif">PC</span>
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-primary p-8 lg:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-primary-foreground lg:text-3xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-primary-foreground/90">
                Get the latest printing industry insights, tips, and exclusive offers delivered to your inbox.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border-0 bg-primary-foreground px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
