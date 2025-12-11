"use client";

import { useState } from "react";
import { Sparkles, Zap, Moon, Wind, Triangle, Layers, Circle } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

// Icon mapping
const iconMap: Record<string, any> = {
  Sparkles,
  Zap,
  Moon,
  Wind,
  Triangle,
  Layers,
  Circle,
};

// Brand logoları ve testimonial verileri
const brandTestimonials = testimonialsData.map((item: any) => ({
  brand: {
    name: item.brand.name,
    icon: iconMap[item.brand.icon] || Circle,
  },
  testimonial: item.testimonial,
}));

export function CompanyTestimonials () {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = brandTestimonials[activeIndex];
  const IconComponent = current.brand.icon;

  return (
    <section className="py-20 sm:py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Başlık */}
        <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
          Müşteri Referansları
        </h2>
        
        {/* Description */}
        <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
          Önde gelen şirketlerin SAPPort ve Daisy ile iş süreçlerini nasıl dönüştürdüklerini keşfedin.
        </p>

        {/* Brand Logo Bar */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-50 rounded-full">
              {brandTestimonials.map((item, i) => {
                const Icon = item.brand.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-white shadow-md opacity-100"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-body font-medium text-sm">{item.brand.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ana Testimonial Kartı */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sol – Fotoğraf */}
            <div className="lg:col-span-2 relative h-96 lg:h-auto bg-gradient-to-br from-gray-300 to-gray-400">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            {/* Sağ – İçerik */}
            <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-between">
              {/* Alıntı */}
              <div>
                <p className="text-xl lg:text-2xl font-body leading-[1.7] text-[#000000] mb-10">
                  {current.testimonial.quote}
                </p>

                {/* Kişi Bilgisi + Sosyal İkonlar */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-black to-gray-300 flex items-center justify-center text-white font-semibold text-lg">
                      {current.testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-[#000000] text-lg">
                        {current.testimonial.name}
                      </div>
                      <div className="text-sm font-body text-[#666666]">
                        {current.testimonial.role}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* İstatistikler – Tek satırda yan yana */}
              <div className="flex items-stretch gap-8 pt-8 border-t border-gray-200">
                {current.testimonial.stats.map((stat: { value: string; label: string }, i: number) => (
                  <div key={i} className="flex-1 relative">
                    {i !== 0 && (
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
                    )}
                    <div className={i === 0 ? "" : "pl-8"}>
                      <div className="text-2xl lg:text-3xl font-display font-bold text-[#000000] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-body text-[#666666]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}