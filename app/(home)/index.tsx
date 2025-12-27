"use client";
import { Footer, Header } from "@/common";
import CategoriesSection from "@/components/categories-section";
import HeroSection from "@/components/hero-section";
import NearbyRestaurantsSection from "@/components/nearby-restaurant-section";
import PersonalizedSection from "@/components/personalized-section";
import RecommendedFoodSection from "@/components/recommended-food-section";
import SearchRestaurantSsection from "@/components/search-restaurant-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <HeroSection />

      {/* Combined Section for Nearby & Recommended */}
      <section className="px-3 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-16 lg:py-16 bg-white w-full">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full">
            <NearbyRestaurantsSection />
            <RecommendedFoodSection />
          </div>
        </div>
      </section>

      <SearchRestaurantSsection />
      <CategoriesSection />
      <PersonalizedSection />
      <Footer />
    </div>
  );
}
