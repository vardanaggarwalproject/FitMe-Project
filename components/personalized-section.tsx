import { FoodItemCard } from "./food-item-card"

const personalizedItems = [
  {
    name: "Baked Pizza Wrap - Vegetarian",
    restaurant: "Faasos - Wraps & Rolls",
    price: "₹209",
    time: "35 Mins",
    image: "/recommendedFoodImage1.b5d8e9b2 (1).svg",
  },
  {
    name: "Butter Chicken Pizza - 8 serve",
    restaurant: "Suren Pastries",
    price: "₹289",
    time: "25 Mins",
    image: "/recommendedPizzaSvg2.bd04143f.svg",
  },
  {
    name: "Mexican Patty Signature Wraps",
    restaurant: "Subway",
    price: "₹273",
    time: "32 Mins",
    image: "/recommendedSubwaySvg3.759b5592.svg",
  },
  {
    name: "Southwest Chicken Salad",
    restaurant: "Burgerito",
    price: "₹220",
    time: "41 Mins",
    image: "/recommendedChickenSaladSvg4.9e600542.svg",
  },
]

export function PersonalizedSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16 bg-[#f8f8f8]">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#202020] mb-12">Personalized recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalizedItems.map((item, index) => (
            <FoodItemCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
