import Image from "next/image";
import { Check, Clock, TrendingUp, Target, GitBranch, BarChart3, LayoutGrid, LucideIcon } from "lucide-react";

interface Feature {
    icon: LucideIcon;
    text: string;
    isActive: boolean;
}

export function Hero() {
    const features: Feature[] = [
        { icon: Clock, text: "SAP Entegrasyonu", isActive: true },
        { icon: GitBranch, text: "Daisy Portal", isActive: true },
        { icon: BarChart3, text: "ABAP Danışmanlık", isActive: true },
        { icon: LayoutGrid, text: "Dijital Dönüşüm", isActive: true },
    ];
    return (
        <div className="relative isolate pt-8 pb-8 sm:pt-15 sm:pb-15 overflow-hidden w-full max-w-full">
        {/* Background Image - hero-main.png */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/sap-images/hero/hero-main.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-50" // Adjusted opacity to ensure text readability if needed, or remove if user wants full opacity
            priority
          />
        </div>
  
        {/* Hero-base.svg */}
        <div className="absolute inset-0 z-[-2]">
          <Image
            src="/sap-images/hero/hero-base.svg"
            alt="Hero Base"
            fill
            className="object-cover opacity-50" // Adjusted opacity to ensure text readability if needed, or remove if user wants full opacity
            priority
          />
        </div>

            {/* -------------------
          Floating Elements 
         ------------------- */}

            {/* LEFT TOP: SAP Modülleri Card */}
            <div className="absolute left-[2%] top-[15%] xl:left-[10%] xl:top-[20%] w-[260px] hidden lg:block animate-float-slow z-0">
                <div className="bg-white rounded-xl shadow-soft p-5 border border-gray-100 -rotate-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <div className="text-[#00AFFF]">★</div> {/* Star icon approximation */}
                            <div className="text-sm font-body font-bold text-[#000000]">SAP Modülleri</div>
                        </div>
                        <div className="text-[10px] font-body text-[#666666]">Uzmanlık Alanları</div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-body font-medium text-[#666666]">HR</span>
                            <span className="font-body text-[#666666]">İnsan Kaynakları</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-body font-medium text-[#666666]">FI/CO</span>
                            <span className="font-body text-[#666666]">Finans & Kontrol</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-body font-medium text-[#666666]">MM/SD</span>
                            <span className="font-body text-[#666666]">Malzeme & Satış</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-body font-medium text-[#666666]">PM/QM</span>
                            <span className="font-body text-[#00AFFF]">Proje & Kalite</span>
                        </div>
                    </div>
                </div>
                {/* Green pin graphic overlay if needed, or simple CSS shape */}
                <div className="absolute -top-3 left-1/2 w-3 h-6 bg-[#00AFFF]/80 rounded-full blur-[1px]"></div>
            </div>

            {/* LEFT BOTTOM: Improve Organization Card */}
            <div className="absolute left-[5%] bottom-[10%] xl:left-[12%] xl:bottom-[15%] w-[240px] hidden lg:block animate-float-slower z-0">
                <div className="bg-white rounded-xl shadow-soft p-4 border border-gray-100 rotate-3">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#00AFFF]/10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-[#00AFFF]" />
                        </div>
                        <div>
                            <div className="text-xs font-body font-bold text-[#000000] leading-tight mb-2">Kurumsal Dijital Dönüşüm Çözümleri</div>
                        </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <div className="flex -space-x-1">
                            <div className="w-5 h-5 rounded-full bg-gray-200 border border-white"></div>
                            <div className="w-5 h-5 rounded-full bg-gray-300 border border-white"></div>
                        </div>
                        <span className="text-xs font-body font-bold text-[#000000]">34.5K</span>
                    </div>
                </div>
            </div>


            {/* RIGHT TOP: Today Tasks */}
            <div className="absolute right-[2%] top-[15%] xl:right-[10%] xl:top-[20%] w-[280px] hidden lg:block animate-float-slower z-0">
                <div className="bg-white rounded-xl shadow-soft p-5 border border-gray-100 rotate-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <div className="text-brand-green">★</div>
                            <div className="text-sm font-body font-bold text-[#000000]">Daisy Özellikleri</div>
                        </div>
                        <div className="flex gap-0.5">
                            <div className="w-1.5 h-3 bg-[#00AFFF]/20 rounded-full"></div>
                            <div className="w-1.5 h-3 bg-[#00AFFF] rounded-full"></div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {[
                            { text: "İnsan Kaynakları Yönetimi", checked: false },
                            { text: "Duyuru & Organizasyon", checked: false },
                            { text: "Self Servis Hizmetler", checked: false },
                            { text: "Mobil & Web Erişimi", checked: false },
                        ].map((task, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${task.checked ? 'border-[#00AFFF] bg-[#00AFFF]/10' : 'border-gray-200'}`}>
                                    {task.checked && <div className="w-2 h-2 rounded-full bg-[#00AFFF]" />}
                                </div>
                                <span className={`text-xs font-body ${task.checked ? 'text-[#666666] line-through' : 'text-[#666666]'}`}>{task.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT BOTTOM: Earnings Card */}
            <div className="absolute right-[5%] bottom-[15%] xl:right-[14%] xl:bottom-[20%] w-[220px] hidden lg:block animate-float-slow z-0">
                <div className="bg-white rounded-xl shadow-soft p-4 border border-gray-100 -rotate-3">
                    <div className="flex justify-between items-start mb-2">
                        <div className="text-[10px] font-body text-[#666666]">16 January 2024</div>
                        <div className="text-xl font-display font-bold text-[#000000]">76%</div>
                    </div>
                    <div className="text-xs font-body font-bold text-[#000000] mb-2">Operasyonel Verimlilik</div>
                    {/* Simple SVG Graph */}
                    <svg viewBox="0 0 100 30" className="w-full h-10 stroke-[#00AFFF] fill-none stroke-2">
                        <path d="M0,25 C20,25 20,10 40,10 C60,10 60,20 80,5 C90,0 100,5 100,5" />
                        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00AFFF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#00AFFF" stopOpacity="0" />
                        </linearGradient>
                    </svg>
                </div>
            </div>


            {/* -------------------
          Center Content
         ------------------- */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">

                {/* Center Logo */}
                <div className="mb-10 flex justify-center">
                    <div className="relative w-20 h-20 bg-gradient-to-b from-[#33B7FF] to-[#00AFFF] rounded-2xl flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,175,255,0.4)]">
                        <Image src="/sap-images/logo/logo-main.svg" alt="Icon" width={44} height={44} className="text-black" />
                    </div>
                </div>

                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-100 px-4 py-1.5 shadow-sm">
                        <span className="text-xs font-body font-semibold text-[#666666]">SAP-ABAP Danışmanlık & Kurumsal Portal Çözümleri</span>
                    </div>
                </div>

                <h1 className="mx-auto max-w-4xl text-4xl font-display font-medium tracking-tighter text-[#000000] sm:text-6xl mb-6 leading-[1.2]">
                    SAP&apos;nizi Dijitalleştirin, <br className="hidden sm:block" />
                    İş Süreçlerinizi Hızlandırın
                </h1>

                <p className="mt-6 text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto font-body text-center">
                    SAPPort ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle 
                    işletmenizin dijital dönüşümünü başlatın. SAP bilmeyen çalışanlarınız bile 
                    kolayca işlemlerini yapabilsin.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <a
                        href="/daisy"
                        className="rounded-lg bg-[#1F1F1F] px-8 py-3.5 text-sm font-body font-bold text-white shadow-sm hover:bg-black transition-all"
                    >
                        Daisy&apos;yi Keşfet
                    </a>
                    <a
                        href="/hizmetlerimiz"
                        className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-sm font-body font-bold text-[#666666] shadow-sm hover:bg-gray-50 transition-all"
                    >
                        Hizmetlerimiz
                    </a>
                </div>

                {/* Features Section */}
                <div className="mt-8">
                    <h2 className="text-center text-base font-display font-medium tracking-tight text-[#000000] mb-4">
                        Öne Çıkan Özelliklerimiz
                    </h2>
                    <div className="overflow-hidden relative mx-auto" style={{ width: '680px', maxWidth: '100%' }}>
                        <div className="flex items-center gap-4 animate-scroll">
                            {/* Birden fazla kopya ekleyerek smooth döngü sağlıyoruz */}
                            {[...Array(4)].map((_, setIndex) => (
                                features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={`set-${setIndex}-${index}`}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-100 shadow-sm flex-shrink-0 whitespace-nowrap"
                                        >
                                            <Icon className={`w-5 h-5 ${feature.isActive ? 'text-gray-800' : 'text-gray-400'}`} />
                                            <span className={`text-sm font-body ${feature.isActive ? 'text-[#000000]' : 'text-[#666666]'}`}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    );
                                })
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
