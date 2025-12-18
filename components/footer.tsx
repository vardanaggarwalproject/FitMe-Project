import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#fc8019] px-4 py-8 sm:py-10 md:py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:items-start md:justify-start gap-1.5 sm:gap-2">
            <Image src="fitmelogo copy.svg" alt="fitmelogo for footer" height={16} width={18} className="lg:mt-2"/>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">FitMe</h1>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:gap-2 lg:gap-3 items-center md:items-start lg:items-center text-white">
            <a href="#" className="hover:underline font-medium text-sm sm:text-base md:text-sm lg:text-base">
              About us
            </a>
            <a href="#" className="hover:underline font-medium text-sm sm:text-base md:text-sm lg:text-base">
              Delivery
            </a>
            <a href="#" className="hover:underline font-medium text-sm sm:text-base md:text-sm lg:text-base">
              Help & Support
            </a>
            <a href="#" className="hover:underline font-medium text-sm sm:text-base md:text-sm lg:text-base">
              T&C
            </a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-white font-medium text-sm sm:text-base md:text-sm lg:text-base">Contact: +91 1234567889</p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
