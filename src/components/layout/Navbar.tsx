"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="relative flex items-center justify-between pl-4 pr-4 py-2 rounded-full bg-[#1F1F1F] text-white shadow-2xl w-full max-w-5xl h-[64px]">
          {/* Desktop: Left Section - Ana Sayfa + Daisy */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-body font-semibold hover:bg-gray-100 transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/daisy"
              className="px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 text-sm font-body font-medium transition-colors"
            >
              Daisy
            </Link>
          </div>

          {/* Mobile: Left Logo */}
          <div className="md:hidden">
            <Link
              href="/"
              className="relative w-full h-auto block hover:scale-105 transition-transform"
              onClick={closeMobileMenu}
            >
              <Image
                src="/sap-images/logo/sapportlogo-white.png"
                alt="SAP Logo"
                width={120}
                height={120}
                className="object-contain w-full h-auto"
              />
            </Link>
          </div>

          {/* Desktop: Center Logo - Absolute positioned */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Link
              href="/"
              className="relative w-full h-4 block hover:scale-105 transition-transform pointer-events-auto"
            >
              <Image
                src="/sap-images/logo/sapportlogo-white.png"
                alt="SAP Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop: Right Section - Sayfalar Dropdown + CTA */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="px-4 py-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 text-sm font-body font-medium transition-colors flex items-center gap-1.5"
              >
                Sayfalar
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#1F1F1F] shadow-2xl border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                  <div className="py-1">
                    <Link
                      href="/hakkimizda"
                      onClick={closeDropdown}
                      className="block px-4 py-2.5 text-sm font-body font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      href="/hizmetlerimiz"
                      onClick={closeDropdown}
                      className="block px-4 py-2.5 text-sm font-body font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      Hizmetlerimiz
                    </Link>
                    <Link
                      href="/blog"
                      onClick={closeDropdown}
                      className="block px-4 py-2.5 text-sm font-body font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/iletisim"
                      onClick={closeDropdown}
                      className="block px-4 py-2.5 text-sm font-body font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      İletişim
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className="rounded-full bg-[#00AFFF] px-6 py-3 text-sm font-body font-bold text-white hover:bg-[#0094E6] transition-colors"
            >
              İletişime Geç
            </Link>
          </div>

          {/* Mobile: Right Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <MenuIcon className="w-6 h-6 text-black" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-24 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div className="relative mx-4 mt-2 rounded-2xl bg-[#1F1F1F] shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col p-4 gap-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl bg-white text-black text-sm font-body font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/daisy"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 text-sm font-body font-medium transition-colors text-center"
              >
                Daisy
              </Link>

              <Link
                href="/hakkimizda"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 text-sm font-body font-medium transition-colors text-center"
              >
                Hakkımızda
              </Link>

              <Link
                href="/hizmetlerimiz"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 text-sm font-body font-medium transition-colors text-center"
              >
                Hizmetlerimiz
              </Link>

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 text-sm font-body font-medium transition-colors text-center"
              >
                Blog
              </Link>

              <Link
                href="/iletisim"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-white hover:bg-white/10 text-sm font-body font-medium transition-colors text-center"
              >
                İletişim
              </Link>

              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl bg-[#00AFFF] text-white text-sm font-body font-bold hover:bg-[#0094E6] transition-colors text-center mt-2"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}