"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TbArrowsCross } from "react-icons/tb"

export default function SearchRestaurantSection() {
  return (
    <section className="bg-[#fc8019] px-4 py-6 sm:py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-white leading-tight text-center lg:text-left lg:whitespace-nowrap">
            Search by
            <br />
            Restaurant
          </h2>

          <p className="hidden lg:block text-white text-3xl">
            <TbArrowsCross />
          </p>

          <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto lg:max-w-lg items-center lg:items-stretch px-2 lg:px-0">
            <div className="relative w-full lg:flex-1">
              <input
                type="text"
                placeholder="Search item or restaurant"
                className="w-full rounded-lg border-2 border-white bg-white px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 lg:py-2 text-xs sm:text-sm lg:text-base placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute right-3 sm:right-4 lg:right-4 top-1/2 h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <Button className="w-full lg:w-auto h-auto bg-[#202020] hover:bg-[#404040] text-white font-semibold px-6 lg:px-4 py-2 sm:py-2 lg:py-2 text-xs sm:text-sm lg:text-base rounded-lg whitespace-nowrap">
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
