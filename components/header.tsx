import { Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-gray-200 px-3 py-3 sm:px-6 sm:py-4 lg:px-16 bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <Image src="./fitmelogo.svg" alt="fit me logo" width={20} height={18} className="sm:w-[24px] sm:h-[22px]" />
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#202020]">FitMe</h1>
        </div>

        {/* Actions with Search */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Search Bar - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex w-40 lg:w-56">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 pr-10 text-xs sm:text-sm focus:border-[#fc8019] focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button className="text-[#404040] hover:text-[#fc8019] transition-colors" aria-label="Shopping Bag">
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </button>
          <Button className="bg-[#202020] hover:bg-[#404040] text-white font-medium px-3 py-2 sm:px-4 sm:py-2 lg:px-6 text-xs sm:text-sm rounded-lg h-8 sm:h-9 lg:h-10">
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for food or restaurant"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-sm focus:border-[#fc8019] focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  )
}
