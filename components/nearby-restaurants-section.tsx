import { RestaurantCard } from "./restaurant-card"

const restaurants = [
  {
    name: "Ramachandra Parlour",
    cuisine: "South Indian",
    rating: 4.0,
    time: "30 Mins",
    price: "200 for two",
    image: "/FoodImage1.030cfea1.svg",
  },
  {
    name: "Uma Parlour - Pure Vegetarian",
    cuisine: "South Indian",
    rating: 3.2,
    time: "20 Mins",
    price: "150 for two",
    image: "FoodImage2.49a016da.svg",
  },
  {
    name: "Ramachandra Parlour",
    cuisine: "South Indian",
    rating: 4.0,
    time: "30 Mins",
    price: "200 for two",
    image: "FoodImage3.fb398f64.svg",
  },
  {
    name: "Uma Parlour - Pure Vegetarian",
    cuisine: "South Indian",
    rating: 3.2,
    time: "20 Mins",
    price: "150 for two",
    image: "/FoodImage4.682d7e98.svg",
  },
]

export function NearbyRestaurantsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#202020]">Nearby Restaurant</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-none mx-auto sm:mx-0">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  )
}
