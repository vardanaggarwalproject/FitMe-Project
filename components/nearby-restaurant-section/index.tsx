

import UnifiedCard from "../unified-card"


import {restaurants} from "@/data/restaurantsData"

export default function NearbyRestaurantsSection() {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">Nearby Restaurant</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        {restaurants.map((restaurant, index) => (
          <UnifiedCard key={index} data={restaurant} />
        ))}
      </div>
    </div>
  )
}
