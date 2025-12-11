"use client";

import { useState } from "react";
import { Linkedin, Twitter, Instagram, Sparkles, Zap, Moon, Wind, Triangle, Layers, Circle } from "lucide-react";

// Brand logoları ve testimonial verileri
const brandTestimonials = [
  {
    brand: { name: "Zenith", icon: Sparkles },
    testimonial: {
      company: "Zenith",
      quote: "SAP has been instrumental in streamlining our project management processes, enabling seamless collaboration and enhancing overall efficiency.",
      name: "Emily Johnson",
      role: "CEO of Zenith",
      stats: [
        { value: "Increased 25%", label: "Operational Efficiency" },
        { value: "Reduced 20%", label: "Project Turnaround Time" },
        { value: "Increased 30%", label: "Resource Utilization" },
      ],
    },
  },
  {
    brand: { name: "Vortex", icon: Zap },
    testimonial: {
      company: "Vortex",
      quote: "The integration of SAP into our workflow has transformed how we manage projects. The intuitive interface and powerful features have significantly improved our team's productivity.",
      name: "Michael Chen",
      role: "CTO of Vortex",
      stats: [
        { value: "Increased 35%", label: "Team Productivity" },
        { value: "Reduced 15%", label: "Project Costs" },
        { value: "Increased 40%", label: "Client Satisfaction" },
      ],
    },
  },
  {
    brand: { name: "Lumina", icon: Moon },
    testimonial: {
      company: "Lumina",
      quote: "SAP's comprehensive project management solution has revolutionized our operations. We've seen remarkable improvements in efficiency and collaboration across all departments.",
      name: "Sarah Williams",
      role: "Operations Director of Lumina",
      stats: [
        { value: "Increased 28%", label: "Process Efficiency" },
        { value: "Reduced 25%", label: "Time to Market" },
        { value: "Increased 45%", label: "Cross-team Collaboration" },
      ],
    },
  },
  {
    brand: { name: "Velocity", icon: Wind },
    testimonial: {
      company: "Velocity",
      quote: "Implementing SAP has been a game-changer for our organization. The platform's robust features and seamless integration capabilities have elevated our project management to new heights.",
      name: "David Martinez",
      role: "Project Manager of Velocity",
      stats: [
        { value: "Increased 32%", label: "Project Success Rate" },
        { value: "Reduced 22%", label: "Resource Waste" },
        { value: "Increased 38%", label: "Team Coordination" },
      ],
    },
  },
  {
    brand: { name: "Apex", icon: Triangle },
    testimonial: {
      company: "Apex",
      quote: "SAP has transformed our project management approach, providing us with the tools and insights needed to deliver exceptional results consistently across all our initiatives.",
      name: "Anna Schmidt",
      role: "Head of Operations at Apex",
      stats: [
        { value: "Increased 42%", label: "Delivery Speed" },
        { value: "Reduced 18%", label: "Operational Overhead" },
        { value: "Increased 50%", label: "Stakeholder Satisfaction" },
      ],
    },
  },
  {
    brand: { name: "Fusion", icon: Layers },
    testimonial: {
      company: "Fusion",
      quote: "With SAP, we've achieved unprecedented levels of operational excellence. The platform has become an integral part of our success story.",
      name: "James Park",
      role: "VP of Engineering at Fusion",
      stats: [
        { value: "Increased 38%", label: "Engineering Output" },
        { value: "Reduced 28%", label: "Development Cycle" },
        { value: "Increased 48%", label: "Code Quality" },
      ],
    },
  },
  {
    brand: { name: "Echo", icon: Circle },
    testimonial: {
      company: "Echo",
      quote: "The impact of SAP on our business has been transformative. We've streamlined processes, improved collaboration, and exceeded our performance targets.",
      name: "Lisa Anderson",
      role: "Chief Strategy Officer at Echo",
      stats: [
        { value: "Increased 44%", label: "Strategic Alignment" },
        { value: "Reduced 30%", label: "Decision Time" },
        { value: "Increased 52%", label: "Business Outcomes" },
      ],
    },
  },
];

export function CompanyTestimonials () {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = brandTestimonials[activeIndex];
  const IconComponent = current.brand.icon;

  return (
    <section className="py-20 sm:py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Başlık */}
        <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
          Company Testimonials
        </h2>
        
        {/* Description */}
        <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
          Discover how leading companies are transforming their operations with SAP&apos;s powerful project management solutions.
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
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                      {current.testimonial.name.split(' ').map(n => n[0]).join('')}
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
                {current.testimonial.stats.map((stat, i) => (
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