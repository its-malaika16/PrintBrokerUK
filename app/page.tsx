import { HeroSection } from "@/components/home/hero-section"
import { SearchSection } from "@/components/home/search-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturedVendors } from "@/components/home/featured-vendors"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedVendors />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  )
}
