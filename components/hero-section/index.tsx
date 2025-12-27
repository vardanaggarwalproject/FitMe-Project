"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { carouselCards, popularCities } from "@/data/heroData";
// import {ChevronRight } from "lucide-react"


const HeroSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  // const [activeCityIndex, setActiveCityIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => {
        if (prev === carouselCards.length - 1) {
          return 0; // Reset to first card after last
        }
        return prev + 1; // Move forward linearly
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-background">
      <div className="container max-w-[1024px] mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content - Hero Text */}
          <div className="flex flex-col justify-end space-y-6 text-center lg:text-left">
            <div className="max-sm:space-y-1 space-y-4">
              <h1 className="text-balance text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Premium
                <span className="text-orange-500"> quality </span>
                <p className="max-sm:pt-1">Food for your</p>
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 sm:px-4 md:px-5 py-2">
                  <span className="text-lg sm:text-xl md:text-2xl">
                    <Image
                      src="/banana.png"
                      alt="herobananaImage"
                      width={40}
                      height={25}
                    />
                  </span>
                </div>
                <h2 className="text-2xl text-orange-500 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                  healthy
                </h2>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 sm:px-4 md:px-5 py-2">
                  <span className="text-lg sm:text-xl md:text-2xl"></span>
                  <Image
                    src="/apple.png"
                    alt="hero-section-logo"
                    width={40}
                    height={25}
                  />
                </div>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  & Daily Life
                </h2>
              </div>

              <p className="max-w-xl mx-auto lg:mx-0 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex w-full max-sm:flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  className="flex-1 rounded-lg border border-gray-300 bg-background px-4 py-1.5 sm:py-2 text-sm focus:border-[#fc8019] focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
                />
                <Button className="px-6 py-1.5 sm:py-2 bg-foreground text-sm text-background hover:bg-foreground/90 font-light whitespace-nowrap rounded-lg sm:flex-shrink-0 flex-1 sm:flex-initial">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative items-center justify-center">
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
          <h3 className="text-lg font-semibold text-center text-foreground lg:text-xl">
            Popular cities in India
          </h3>
          <div className="overflow-hidden rounded-xl bg-muted/30 py-4">
            <div className="flex gap-3 px-4">
              {popularCities.map((city) => (
                <Button
                  key={city}
                  className="shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 
                    bg-background text-muted-foreground hover:bg-orange-500 hover:text-white"
                >
                  {city}
                </Button>
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
                className={cn(
                  "group relative overflow-hidden rounded-2xl transition-all duration-500",
                  {
                    "sm:scale-105 shadow-2xl ring-4 ring-orange-500 ring-offset-2":
                      index === activeCardIndex,
                    "scale-100 shadow-lg hover:shadow-xl":
                      index !== activeCardIndex,
                  }
                )}
              >
                <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className={cn("transition-all duration-500", {
                      "scale-110 brightness-100": index === activeCardIndex,
                      "scale-100 brightness-90": index !== activeCardIndex,
                    })}
                    // width={1000}
                    // height={1000}
                    fill={true}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-all duration-500",
                      {
                        "bg-linear-to-t from-orange-600/80 via-orange-500/30 to-transparent":
                          index === activeCardIndex,
                        "bg-linear-to-t from-black/70 via-black/30 to-transparent":
                          index != activeCardIndex,
                      }
                    )}
                  />
                  {index === activeCardIndex && (
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg">
                      <div className="size-2 animate-pulse rounded-full bg-orange-500" />
                      <span className="text-xs font-bold text-orange-500">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3
                    className={cn(
                      "text-lg font-bold transition-all duration-300",
                      {
                        "text-xl": index === activeCardIndex,
                      }
                    )}
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
                className={cn("h-2 rounded-full transition-all duration-500", {
                  "w-12 bg-orange-500": index === activeCardIndex,
                  "w-2 bg-gray-500": index !== activeCardIndex,
                })}
              />
            ))}
            {/* <ChevronRight className="ml-2 size-5 animate-pulse text-orange-500" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
