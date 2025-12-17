import { Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-gray-200 px-4 py-4 md:px-8 lg:px-16 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo */}
         
        <div className="flex items-center gap-2">
          {/* <div className="h-8 w-8 rounded-md bg-[#fc8019] flex items-center justify-center text-white font-bold text-xl">
          </div> */}
          <Image src="./fitmelogo.svg" alt="fit me logo" width={24} height={22}/>
          <h1 className="text-2xl font-bold text-[#202020]">FitMe</h1>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <div className="relative pt-1">
            <input
              type="text"
              placeholder="Enter item or restaurant you are looking"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-sm focus:border-[#fc8019] focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
            />
            <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-[#404040] hover:text-[#fc8019] transition-colors">
            <ShoppingBag className="h-7 w-7" />
          </button>
          <Button className="bg-[#202020] hover:bg-[#404040] text-white font-medium px-6 rounded-lg">Sign In</Button>
        </div>
      </div>
    </header>
  )
}
