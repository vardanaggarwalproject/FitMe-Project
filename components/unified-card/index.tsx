import Image from "next/image"

interface CardData {
  title: string
  subtitle: string
  image: string
  rating?: number
  time: string
  price: string
   variant?: "food" | "restaurant"
}

interface UnifiedCardProps {
  data: CardData
}

export default function UnifiedCard({ data }: UnifiedCardProps) {
  const { 
    title, 
    subtitle, 
    image, 
    rating, 
    time, 
    price,
    variant = "food" 
  } = data
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer h-full flex flex-col">
      <div className="relative h-40 sm:h-48 w-full flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col min-h-40 sm:min-h-44">
        <h3 className="font-bold text-base text-[#202020] line-clamp-2 min-h-[3rem]">{title}</h3>
        <p className="text-sm text-[#404040] line-clamp-1">{subtitle}</p>
        {rating && (
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#1ac84b]">★</span>
            <span className="text-[#404040] font-medium">{rating}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-[#404040] pt-2 mt-auto">
          {variant === "food" ? (
            <>
              <span className="flex items-center gap-1 font-semibold text-[#fc8019]">
                <span>💰</span>
                {price}
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#fc8019]">⏱</span>
                {time}
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <span className="text-[#fc8019]">⏱</span>
                {time}
              </span>
              <span className="flex items-center gap-1 font-semibold text-[#fc8019]">
                <span>💰</span>
                {price}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}