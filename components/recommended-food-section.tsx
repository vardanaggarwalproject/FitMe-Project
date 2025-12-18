import { FoodItemCard } from "./food-item-card"

const foodItems = [
  {
    name: "Paneer Tikka Rice Bowl",
    restaurant: "The Good Bowl",
    price: "₹200",
    time: "20 Mins",
    image: "/FoodImage5.89d368c1.svg",
  },
  {
    name: "Aloo Paratha Curd Meal (2 pcs)",
    restaurant: "Lunch Box",
    price: "₹169",
    time: "25 Mins",
    image: "/FoodImage6.c12d2578.svg",
  },
  {
    name: "Swap - Diet Meal Box",
    restaurant: "Healthy Food, Salads",
    price: "₹300",
    time: "40 Mins",
    rating: 4.5,
    image: "/FoodImage7.b5d8e9b2.svg",
  },
  {
    name: "The Good Bowl - Traditional Bowls",
    restaurant: "North Indian, Punjabi",
    price: "₹250",
    time: "25 Mins",
    rating: 4.8,
    image: "/FoodImage8.707791d2.svg",
  },
]

export function RecommendedFoodSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">Recommended Food Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-none mx-auto sm:mx-0">
        {foodItems.map((item, index) => (
          <FoodItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
