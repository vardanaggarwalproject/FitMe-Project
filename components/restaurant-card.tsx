import Image from "next/image"

interface RestaurantCardProps {
  name: string
  cuisine: string
  rating: number
  time: string
  price: string
  image: string
}

export function RestaurantCard({ name, cuisine, rating, time, price, image }: RestaurantCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer h-full flex flex-col">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-[#202020] line-clamp-1">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-[#404040]">
          <span className="line-clamp-1">{cuisine}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[#404040] mt-auto pt-2">
          <span className="flex items-center gap-1">
            <span className="text-[#fc8019]">⏱</span>
            {time}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#fc8019]">💰</span>
            {price}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-[#1ac84b]">★</span>
          <span className="text-[#404040] font-medium">{rating}</span>
        </div>
      </div>
    </div>
  )
}
