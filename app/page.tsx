import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { SearchRestaurantSection } from "../components/search-restaurant-section"
import { CategoriesSection } from "../components/categories-section"
import { NearbyRestaurantsSection } from "../components/nearby-restaurants-section"
import { RecommendedFoodSection } from "../components/recommended-food-section"
import { PersonalizedSection } from "../components/personalized-section"
import { Footer } from "../components/footer"

export default function FitMeLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection />
      

      {/* Combined Section for Nearby & Recommended */}
      <section className="px-4 py-16 md:px-8 lg:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <NearbyRestaurantsSection />
            <RecommendedFoodSection />
          </div>
        </div>
      </section>

      <SearchRestaurantSection />
      <CategoriesSection />

      <PersonalizedSection />
      <Footer />
    </div>
  )
}
