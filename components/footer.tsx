import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#fc8019] px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="h-10 w-10 rounded-md bg-white flex items-center justify-center text-[#fc8019] font-bold text-2xl"> */}
              <Image src="fitmelogo copy.svg" alt="fitmelogo for footer" height={22} width={24} className=""/>
            {/* </div> */}
            <h1 className="text-3xl font-bold text-white">FitMe</h1>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <a href="#" className="hover:underline font-medium">
              About us
            </a>
            <a href="#" className="hover:underline font-medium">
              Delivery
            </a>
            <a href="#" className="hover:underline font-medium">
              Help & Support
            </a>
            <a href="#" className="hover:underline font-medium">
              T&C
            </a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-end gap-4">
            <p className="text-white font-medium">Contact: +91 1234567889</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#202020] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
