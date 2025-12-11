import Image from "next/image";
import { Monitor, Users, Download, Star, Check, Apple, Square, Layers, ArrowUpRight } from "lucide-react";

const screens = [
    "/daisy_screen/zimmet_talep_listesi_3.jpg",
    "/daisy_screen/personel_raporu_1.jpg",
    "/daisy_screen/performansdegerlendirme.jpg",
    "/daisy_screen/organizasyon_agaci_1.jpg",
    "/daisy_screen/bodro_listesi_1.jpg",
    "/daisy_screen/egitim_yonetim_1.jpg",
];

const stats = [
    { icon: Users, text: "SAP Sistemine Tam Entegre" },
    { icon: Download, text: "MS Active Directory Uyumlu" },
    { icon: Star, text: "Mobil, Web ve Tablet Desteği" },
    { icon: Check, text: "Organik SAP Bağlantısı" },
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
        <div className="relative py-12 sm:py-20 px-6 lg:px-8 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Daisy Portal Tag */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm">
                        <Monitor className="w-4 h-4" />
                        <span>Kurumsal Portal</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                    Daisy: SAP&apos;nizin Üzerine Kurulu Kurumsal Portal
                </h2>

                {/* Description */}
                <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
                    Daisy, SAP sisteminize tam entegre çalışan, organik bağlantılı ve aynı veritabanını paylaşan 
                    web tabanlı bir kurumsal portal çözümüdür. SAP bilmeyen çalışanlarınız bile kolayca 
                    işlemlerini yapabilsin.
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
                                            className="flex-shrink-0 w-[600px] h-[400px] relative overflow-hidden rounded-lg shadow-lg"
                                        >
                                            <Image
                                                src={screen}
                                                alt={`SAP Desktop App Screenshot ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="600px"
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
                            Daisy&apos;yi Keşfedin
                        </h3>
                        <p className="text-sm leading-[1.7] text-[#666666] mb-4 font-body">
                            Papatya metaforu: Merkez SAP sisteminiz, yapraklar ise dijital süreçleriniz. 
                            Daisy ile tüm süreçlerinizi tek bir platformdan yönetin.
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
                        {/* CTA Buttons */}
                        <div className="flex flex-col items-center justify-center mt-5 gap-2">
                            <a href="/daisy" className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1F1F1F] text-white font-body font-medium hover:bg-black transition-colors">
                                <span>Daisy Hakkında Daha Fazla</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a href="/hizmetlerimiz" className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#666666] font-body font-medium hover:bg-gray-50 transition-colors">
                                <span>Danışmanlık Hizmetleri</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

