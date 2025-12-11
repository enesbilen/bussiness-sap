"use client";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between pl-4 pr-4 py-2 rounded-full bg-[#1F1F1F] text-white shadow-2xl w-full max-w-5xl h-[64px]">
        {/* Desktop: Left Section - Home Button + Links */}
        <div className="hidden md:flex items-center gap-1">
          {/* 'Home' button - styled as a white/gray active pill */}
          <Link href="/" className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-body font-semibold hover:bg-gray-100 transition-colors">
            Home
          </Link>

          {/* Other Nav Links */}
          <Link href="#" className="px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 text-sm font-body font-medium transition-colors">
            App
          </Link>

          <button className="flex items-center gap-1 px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 text-sm font-body font-medium transition-colors group">
            Others <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
          </button>
        </div>

        {/* Mobile: Left Logo */}
        <div className="md:hidden">
          <Link href="/" className="relative w-8 h-8 block hover:scale-105 transition-transform">
            {/* Logo - 8 noktalı çiçek/gear benzeri beyaz logo */}
            <Image src="/sap-images/logo/logo-white.svg" alt="SAP Logo" width={32} height={32} className="object-contain" />
          </Link>
        </div>

        {/* Desktop: Center Logo */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="relative w-8 h-8 block hover:scale-105 transition-transform">
            {/* Logo from public/sap-images */}
            <Image src="/sap-images/logo/logo-white.svg" alt="SAP Logo" width={32} height={32} className="object-contain" />
          </Link>
        </div>

        {/* Desktop: Right Section - All Pages + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button className="flex items-center gap-1 px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 text-sm font-body font-medium transition-colors group">
            All Pages <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
          </button>

          <Link
            href="#"
            className="rounded-full bg-[#C3F53C] px-6 py-3 text-sm font-body font-bold text-black hover:bg-[#b2e52b] transition-colors"
          >
            Get Template
          </Link>
        </div>

        {/* Mobile: Right Hamburger Menu */}
        <button className="md:hidden w-10 h-10 rounded-xl bg-white flex items-center justify-center">
          <Menu className="w-6 h-6 text-black" />
        </button>
      </nav>
    </div>
  );
}
