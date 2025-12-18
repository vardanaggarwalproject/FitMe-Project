"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import {ChevronRight } from "lucide-react"


const carouselCards = [
  {
    id: 1,
    image: "/Rectangle1.webp",
    title: "Healthy Bowls",
    description: "Nutritious meal bowls with fresh vegetables",
  },
  {
    id: 2,
    image: "Rectangle2.webp",
    title: "Fresh Breakfast",
    description: "Start your day with wholesome breakfast",
  },
  {
    id: 3,
    image: "/Rectangle3.webp",
    title: "Gourmet Burgers",
    description: "Premium quality burgers made fresh",
  },
  {
    id: 4,
    image: "/Rectangle4.webp",
    title: "Fresh Salads",
    description: "Crisp salads with natural ingredients",
  },
]


const popularCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
]

export function HeroSection() {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [activeCityIndex, setActiveCityIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => {
        if (prev === carouselCards.length - 1) {
          return 0 // Reset to first card after last
        }
        return prev + 1 // Move forward linearly
      })
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCityIndex((prev) => (prev + 1) % popularCities.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-background">
      <div className="container max-w-[1024px] mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content - Hero Text */}
          <div className="flex flex-col justify-end space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-balance text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Premium
                <span className="text-orange-500"> quality </span>
                Food for your
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 sm:px-4 md:px-5 py-2">
                  <span className="text-lg sm:text-xl md:text-2xl">
                    <Image src="/banana.png" alt="herobananaImage" width={40} height={25}/>
                  </span>
                </div>
                <h2 className="text-2xl text-orange-500 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                  {"healthy"}
                </h2>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 sm:px-4 md:px-5 py-2">
                  <span className="text-lg sm:text-xl md:text-2xl"></span>
                  <Image src="/apple.png" alt="hero-section-logo" width={40} height={25}/>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">{"& Daily Life"}</h2>
              </div>

              <p className="max-w-xl mx-auto lg:mx-0 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex w-full flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  className="flex-1 h-12 rounded-lg border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="h-12 px-6 bg-foreground text-sm md:text-base text-background hover:bg-foreground/90 font-light whitespace-nowrap">
                  {"Get Started"}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/gourmet-burger-with-layers.jpg"
                alt="Premium gourmet burger"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block container mx-auto px-4 pb-6 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground lg:text-xl">
            {"Popular cities in India"}
          </h3>
          <div className="overflow-hidden rounded-xl bg-muted/30 py-4">
            <div className="flex gap-3 px-4">
              {popularCities.map((city, index) => (
                <button
                  key={city}
                  onClick={() => setActiveCityIndex(index)}
                  className={`flex-shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    index === activeCityIndex
                      ? "scale-110 bg-orange-500 text-white shadow-lg"
                      : "bg-background text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {carouselCards.map((card, index) => (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  index === activeCardIndex
                    ? "scale-105 shadow-2xl ring-4 ring-orange-500 ring-offset-2"
                    : "scale-100 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      index === activeCardIndex ? "scale-110 brightness-100" : "scale-100 brightness-90"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeCardIndex
                        ? "bg-gradient-to-t from-orange-600/80 via-orange-500/30 to-transparent"
                        : "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    }`}
                  />
                  {index === activeCardIndex && (
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg">
                      <div className="size-2 animate-pulse rounded-full bg-orange-500" />
                      <span className="text-xs font-bold text-orange-500">{"Featured"}</span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3
                    className={`text-lg font-bold transition-all duration-300 ${
                      index === activeCardIndex ? "text-xl" : ""
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/95">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {carouselCards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeCardIndex ? "w-12 bg-orange-500" : "w-2 bg-muted"
                }`}
              />
            ))}
            <ChevronRight className="ml-2 size-5 animate-pulse text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
