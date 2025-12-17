import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-4 py-12 md:px-8 lg:px-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-semibold leading-tight text-[#202020]">
                Premium <span className="text-[#fc8019]">quality</span>
              </h2>
              <div className="flex items-center gap-4">
                <h2 className="text-5xl md:text-6xl font-semibold text-[#202020]">Food for</h2>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-5xl md:text-6xl font-semibold text-[#202020]">your</h2>
                <div className="">
                  <span className="text-4xl">
                    <Image src="/BananaSvg.d5b77a02.svg" alt="hero-section-logo" width={125} height={75}/></span>
                </div>
                <h2 className="text-5xl md:text-6xl font-semibold text-[#fc8019]">healthy</h2>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="">
                  <span className="text-4xl">
                    <Image src="/AppleSvg.5b1d74bb.svg" alt="hero-section-logo" width={125} height={75}/>
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-semibold text-[#fc8019]">& Daily Life</h2>
              </div>
            </div>
            <p className="text-[#404040] text-base max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            {/* Get Started Section */}
            <div className="space-y-4 pt-4">
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-[#fc8019] focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
              />
              <Button className="bg-[#202020] hover:bg-[#404040] text-white font-semibold px-8 py-3 rounded-lg">
                Get Started
              </Button>
            </div>

            {/* Popular Cities */}
            <div className="space-y-3 pt-2">
              <p className="font-semibold text-[#202020]">Popular cities in India</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {["Hyderabad", "Chennai", "Mumbai", "Bangalore", "Delhi", "Kolkata"].map((city, idx) => (
                  <span
                    key={city}
                    className={`cursor-pointer hover:text-[#fc8019] transition-colors text-sm ${
                      [1, 3, 5].includes(idx) ? "text-[#fc8019] font-medium" : "text-[#404040]"
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Food Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/Rectangle1.webp"
                  alt="Food bowl"
                  width={250}
                  height={250}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
                <Image
                  src="/Rectangle2.webp"
                  alt="Breakfast"
                  width={250}
                  height={320}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/Rectangle3.webp"
                  alt="Burger"
                  width={250}
                  height={350}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
                <Image
                  src="/Rectangle4.webp"
                  alt="Healthy bowl"
                  width={250}
                  height={250}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
