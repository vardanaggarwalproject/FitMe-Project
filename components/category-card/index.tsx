import Image from "next/image"

interface CategoryCardProps {
  name: string
  image: string
}

interface categoryData{
  data : CategoryCardProps
}


export default function CategoryCard({ data }: categoryData) {
  const {name,image} = data;
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <p className="text-center font-medium text-[#202020] group-hover:text-[#fc8019] transition-colors text-sm">
        {name}
      </p>
    </div>
  )
}
