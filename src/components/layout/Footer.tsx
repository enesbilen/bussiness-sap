import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] rounded-t-3xl text-gray-300 mx-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sol Kolon - Logo, Tagline, Social Media */}
          <div className="lg:col-span-3">
            {/* Logo - Yeşil stilize edilmiş çiçek/gear */}
            <div className="mb-6">
              <div className="w-16 h-16 relative">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* 8 petal-like shapes arranged in a circle */}
                  <circle cx="32" cy="8" r="6" fill="#C3F53C" />
                  <circle cx="56" cy="20" r="6" fill="#C3F53C" />
                  <circle cx="56" cy="44" r="6" fill="#C3F53C" />
                  <circle cx="32" cy="56" r="6" fill="#C3F53C" />
                  <circle cx="8" cy="44" r="6" fill="#C3F53C" />
                  <circle cx="8" cy="20" r="6" fill="#C3F53C" />
                  <circle cx="20" cy="8" r="6" fill="#C3F53C" />
                  <circle cx="44" cy="8" r="6" fill="#C3F53C" />
                </svg>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-[1.7] font-body text-gray-300 mb-8">
              Empowering Your Projects, Enhancing Your Success, Every Step of the Way.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Orta Kolonlar - Navigation Links */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Home Column */}
            <div>
              <h3 className="text-base font-display font-semibold text-white mb-4">Home</h3>
              <ul className="space-y-3">
                {[
                  "Product Features",
                  "Benefits",
                  "How To Use",
                  "Key Features",
                  "Pricing",
                  "Testimonials",
                  "FAQ's",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-body text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Column */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4 font-sans">App</h3>
              <ul className="space-y-3">
                {["Mobile App", "Desktop App", "How To Use"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-body text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Pages Column */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4 font-sans">All Pages</h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "App",
                  "Blogs",
                  "Blog Open",
                  "Contact",
                  "Privacy Policy",
                  "404",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-body text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ Kolon - App Download */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white mb-4 font-sans">
              Download our App
            </h3>
            <div className="space-y-3">
              {/* Google Play Button */}
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-white"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.5,14.5L14.54,12.85L17.5,11.2L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs text-gray-400">Get It On</div>
                  <div className="text-sm font-body font-bold text-white">Google Play</div>
                </div>
              </button>

              {/* App Store Button */}
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-white"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-body font-bold text-white">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-gray-400">
              © 2024 Sap. All rights reserved.
            </p>
            <a
              href="#"
              className="text-sm font-body text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <p className="text-sm font-body text-gray-400">Template By Praha</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
