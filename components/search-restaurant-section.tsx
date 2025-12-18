import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TbArrowsCross } from "react-icons/tb";
export function SearchRestaurantSection() {
  return (
    <section className="bg-[#fc8019] px-4 py-6 sm:py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Mobile/Mid Screen Layout */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight text-center">
            Search by
            <br />
            Restaurant
          </h2>

          <div className="flex flex-col gap-3 w-full max-w-md items-center px-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search item or restaurant"
                className="w-full rounded-lg border-2 border-white bg-white px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute right-3 sm:right-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <Button className="w-full bg-[#202020] hover:bg-[#404040] text-white font-semibold px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-lg">
              Search Now
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row gap-6 items-center justify-center">
          <h2 className="text-4xl font-bold text-white leading-tight whitespace-nowrap flex items-center justify-center">
            Search by
            <br />
            Restaurant
          </h2>
          <p className="text-white text-5xl"><TbArrowsCross/></p>
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Enter item or restaurant you are looking for"
              className="w-full rounded-lg border-2 border-white bg-white px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
          </div>
          <Button className="bg-[#202020] hover:bg-[#404040] text-white font-semibold px-8 py-4 text-base h-auto whitespace-nowrap rounded-lg">
            Search Now
          </Button>
        </div>
      </div>
    </section>
  )
}
