// import FoodItemCard from "../food-item-card/index"
import UnifiedCard from "../unified-card"

import {foodItems} from "@/data/foodItemsData"


export default function RecommendedFoodSection() {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">Recommended Food Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        {foodItems.map((item, index) => (
          <UnifiedCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}
