// import FoodItemCard from "../food-item-card/index"
import UnifiedCard from "../unified-card"

import {personalizedItems} from "@/data/personalizedItemData"

export default function PersonalizedSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16 bg-[#f8f8f8]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#202020] mb-12">Personalized recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalizedItems.map((item, index) => (
            <UnifiedCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
