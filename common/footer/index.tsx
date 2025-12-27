import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fc8019] px-4 py-8 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8">
          {/* Logo & Description */}
          <div className="flex max-sm:items-center flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="fitmelogo copy.svg"
                alt="fitmelogo for footer"
                height={20}
                width={20}
              />
              <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold text-white">
                FitMe
              </h1>
            </div>
            <p className="text-white text-sm sm:text-xs lg:text-sm leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus dolorum minima consequuntur vitae hic fugit,
              officia quod beatae nemo? Dolor!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex max-sm:items-center flex-col gap-3">
            <p className="font-bold text-lg sm:text-base lg:text-lg text-white">
              Pages
            </p>
            <nav className="flex max-sm:items-center flex-col gap-2">
              <Link
                href="#"
                className="text-white hover:underline font-medium text-sm sm:text-xs lg:text-sm transition-all"
              >
                About us
              </Link>
              <Link
                href="#"
                className="text-white hover:underline font-medium text-sm sm:text-xs lg:text-sm transition-all"
              >
                Delivery
              </Link>
              <Link
                href="#"
                className="text-white hover:underline font-medium text-sm sm:text-xs lg:text-sm transition-all"
              >
                Help & Support
              </Link>
              <Link
                href="#"
                className="text-white hover:underline font-medium text-sm sm:text-xs lg:text-sm transition-all"
              >
                T&C
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex max-sm:items-center max-md:items-center flex-col gap-4  sm:col-span-2 lg:col-span-1">
            <p className="font-bold text-lg sm:text-base lg:text-lg text-white">
              Contact Us
            </p>
            <div className="flex  max-md:items-center flex-col gap-2">
              <p className="text-white font-medium text-sm sm:text-xs lg:text-sm">
                +91 1234567889
              </p>
              <Link
                href="mailto:support@fitme.com"
                className="text-white font-medium text-sm sm:text-xs lg:text-sm hover:underline transition-all"
              >
                Email: support@fitme.com
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/30 mt-8 pt-6">
          <p className="text-white text-center text-xs sm:text-xs lg:text-sm">
            © 2025 FitMe. All rights reserved. Your trusted food delivery
            partner.
          </p>
        </div>
      </div>
    </footer>
  );
}
