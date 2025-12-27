import CategoryCard from "../category-card/index"
import {categories} from "@/data/categoryData"

export default function CategoriesSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#202020] mb-12">What&apos;s on your mind?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} data={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
