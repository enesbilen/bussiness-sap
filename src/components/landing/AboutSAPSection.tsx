import Image from "next/image";
import { Monitor, Users, Download, Star, Check, Apple, Square, Layers  } from "lucide-react";

const screens = [
    "/sap-images/features/screen1.avif",
    "/sap-images/features/screen2.avif",
    "/sap-images/features/screen3.avif",
    "/sap-images/features/screen4.avif",
    "/sap-images/features/screen5.avif",
];

const stats = [
    { icon: Users, text: "400K+ Active users all over the world" },
    { icon: Download, text: "600K+ Downloads Worldwide" },
    { icon: Star, text: "4.4+ Positive Customer Ratings" },
    { icon: Check, text: "Current Version 2.1" },
];

function WindowsIcon({ className }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    );
  }

export function AboutSAPSection() {
    return (
        <div className="relative py-20 sm:py-24 px-6 lg:px-8 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Desktop App Tag */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm">
                        <Monitor className="w-4 h-4" />
                        <span>Desktop App</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                    Download SAP Desktop Application
                </h2>

                {/* Description */}
                <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
                    Elevate your project management experience with SAP&apos;s desktop app. Seamlessly access powerful tools, collaborate with your team, and stay organized right from your desktop.
                </p>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left: Scrolling Screenshots */}
                    <div className="lg:col-span-2 border border-gray-200 rounded-xl">
                        <div className="overflow-hidden relative rounded-xl p-4">
                            {/* Background Image for scrolling screenshots */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/sap-images/features/bg-screen.avif"
                                    alt="Background"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <div className="relative z-10 flex items-center gap-4 animate-scroll">
                                {/* Birden fazla kopya ekleyerek smooth döngü sağlıyoruz */}
                                {[...Array(4)].map((_, setIndex) => (
                                    screens.map((screen, index) => (
                                        <div
                                            key={`set-${setIndex}-${index}`}
                                            className="flex-shrink-0 w-[600px] h-auto"
                                        >
                                            <Image
                                                src={screen}
                                                alt={`SAP Desktop App Screenshot ${index + 1}`}
                                                width={600}
                                                height={400}
                                                className="w-full rounded-lg shadow-lg"
                                                style={{ height: 'auto' }}
                                            />
                                        </div>
                                    ))
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Explore Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                            Explore Our Desktop App
                        </h3>
                        <p className="text-sm leading-[1.7] text-[#666666] mb-4 font-body">
                            Experience the power of SAP&apos;s desktop application. Browse through our gallery for a glimpse of its intuitive interface.
                        </p>

                        {/* Stats Cards */}
                        <div className="space-y-2">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-gray-300"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-body text-[#666666]">{stat.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Download Buttons */}
                        <div className="flex items-center justify-center mt-5 gap-1">
                            <button className="flex items-center gap-2 px-2 py-3 rounded-lg bg-[#1F1F1F] text-white font-body font-medium hover:bg-black transition-colors">
                                <span>Download For Mac</span>
                                <Apple className="w-5 h-5" />
                            </button>
                            <button className="flex items-center gap-2 px-2 py-3 rounded-lg bg-[#1F1F1F] text-white font-body font-medium hover:bg-black transition-colors">
                                <span>Download For Windows</span>
                                <WindowsIcon className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

