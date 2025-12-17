import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SearchRestaurantSection() {
  return (
    <section className="bg-[#fc8019] px-4 py-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Search by
          <br />
          Restaurant
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative flex-1 max-w-[500px] w-full">
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
