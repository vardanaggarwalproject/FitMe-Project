import { CategoryCard } from "./category-card"

const categories = [
  { name: "Sandwich", image: "/Sandwich.ca0a7d0b.svg" },
  { name: "North Indian Thali", image: "/IndianThali.f118f677.svg" },
  { name: "Egg Breakfast", image: "/Breakfast.c7a5ed7f.svg" },
  { name: "Rolls & Puffs", image: "/Rolls.93319602.svg" },
  { name: "Salads", image: "/Salad.e3f69894.svg" },
  { name: "Biriyani Box", image: "/Biriyani.30bdfb8f.svg" },
]

export function CategoriesSection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-[#202020] mb-12">What&apos;s on your mind?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
