import Image from "next/image"

interface FoodItemCardProps {
  name: string
  restaurant: string
  price: string
  time: string
  image: string
  rating?: number
}

export function FoodItemCard({ name, restaurant, price, time, image, rating }: FoodItemCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer h-full flex flex-col">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2 flex-1 flex flex-col">
        <h3 className="font-bold text-base text-[#202020] line-clamp-2 min-h-[3rem]">{name}</h3>
        <p className="text-sm text-[#404040] line-clamp-1">{restaurant}</p>
        {rating && (
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#1ac84b]">★</span>
            <span className="text-[#404040] font-medium">{rating}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm pt-2 mt-auto">
          <span className="flex items-center gap-1 font-semibold text-[#fc8019]">
            <span>💰</span>
            {price}
          </span>
          <span className="flex items-center gap-1 text-[#404040]">
            <span className="text-[#fc8019]">⏱</span>
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
