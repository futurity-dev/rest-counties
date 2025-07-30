import { HeroSection } from "@/components/hero-section"
import ApiPlayground  from "@/components/api-playground"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function RestCountriesLanding() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeroSection />
      <ApiPlayground/>
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  )
}
