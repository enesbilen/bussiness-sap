import Image from "next/image";
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Youtube, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroContact() {
    return (
        <div className="relative isolate pt-8 pb-8 sm:pt-15 sm:pb-15 overflow-hidden w-full max-w-full">
            {/* Background Image - hero-main.png */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/sap-images/hero/hero-main.png"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            {/* Hero-base.svg */}
            <div className="absolute inset-0 z-[-2]">
                <Image
                    src="/sap-images/hero/hero-base.svg"
                    alt="Hero Base"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            {/* -------------------
          Floating Elements - İletişim Temalı
         ------------------- */}

            {/* LEFT TOP: E-posta Kartı */}
            <div className="absolute left-[2%] top-[15%] xl:left-[10%] xl:top-[20%] w-[260px] hidden lg:block animate-float-slow z-0">
                <div className="bg-white rounded-xl shadow-soft p-5 border border-gray-100 -rotate-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center">
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-sm font-body font-bold text-[#000000]">E-posta</div>
                        </div>
                        <div className="text-[10px] font-body text-[#666666]">İletişim</div>
                    </div>
                    <div className="space-y-3">
                        <a
                            href="mailto:destek@sapport.com.tr"
                            className="block group"
                        >
                            <div className="text-xs font-body text-[#666666] mb-1">Destek</div>
                            <div className="text-sm font-body font-semibold text-[#000000] group-hover:text-[#00AFFF] transition-colors">
                                destek@sapport.com.tr
                            </div>
                        </a>
                        <a
                            href="mailto:kurumsal@sapport.com.tr"
                            className="block group"
                        >
                            <div className="text-xs font-body text-[#666666] mb-1">Kurumsal</div>
                            <div className="text-sm font-body font-semibold text-[#000000] group-hover:text-[#00AFFF] transition-colors">
                                kurumsal@sapport.com.tr
                            </div>
                        </a>
                    </div>
                </div>
                <div className="absolute -top-3 left-1/2 w-3 h-6 bg-[#00AFFF]/80 rounded-full blur-[1px]"></div>
            </div>

            {/* LEFT BOTTOM: Telefon Kartı */}
            <div className="absolute left-[5%] bottom-[10%] xl:left-[12%] xl:bottom-[15%] w-[240px] hidden lg:block animate-float-slower z-0">
                <div className="bg-white rounded-xl shadow-soft p-4 border border-gray-100 rotate-3">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00AFFF] to-[#0094E6] flex items-center justify-center flex-shrink-0">
                            <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-body font-bold text-[#000000] leading-tight mb-2">Telefon ile Arayın</div>
                            <a
                                href="tel:+903125571284"
                                className="text-sm font-body font-semibold text-[#00AFFF] hover:text-[#0094E6] transition-colors"
                            >
                                312 557 12 84
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT TOP: Sosyal Medya Kartı */}
            <div className="absolute right-[2%] top-[15%] xl:right-[10%] xl:top-[20%] w-[280px] hidden lg:block animate-float-slower z-0">
                <div className="bg-white rounded-xl shadow-soft p-5 border border-gray-100 rotate-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center">
                                <MessageSquare className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-sm font-body font-bold text-[#000000]">Sosyal Medya</div>
                        </div>
                        <div className="flex gap-0.5">
                            <div className="w-1.5 h-3 bg-[#00AFFF]/20 rounded-full"></div>
                            <div className="w-1.5 h-3 bg-[#00AFFF] rounded-full"></div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a
                            href="https://www.linkedin.com/company/sapport-bili%C5%9Fim/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center">
                                <Linkedin className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-body text-[#666666]">LinkedIn</div>
                                <div className="text-sm font-body font-semibold text-[#000000] group-hover:text-[#00AFFF] transition-colors">
                                    @sapport-bilisim
                                </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00AFFF] transition-colors" />
                        </a>
                        <a
                            href="https://www.youtube.com/@sapportbilisim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center">
                                <Youtube className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-body text-[#666666]">YouTube</div>
                                <div className="text-sm font-body font-semibold text-[#000000] group-hover:text-[#00AFFF] transition-colors">
                                    @sapportbilisim
                                </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#00AFFF] transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* RIGHT BOTTOM: Adres Kartı */}
            <div className="absolute right-[5%] bottom-[15%] xl:right-[14%] xl:bottom-[20%] w-[240px] hidden lg:block animate-float-slow z-0">
                <div className="bg-white rounded-xl shadow-soft p-4 border border-gray-100 -rotate-3">
                    <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0094E6] to-[#0077CC] flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-body font-bold text-[#000000] mb-1">Ofis Adresimiz</div>
                            <a
                                href="https://maps.google.com/?q=Hacı+Bayram,+Mahmut+Atalay+Sk.+No:2+D:110,+06050+Altındağ/Ankara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-body text-[#666666] hover:text-[#00AFFF] transition-colors leading-tight block"
                            >
                                Hacı Bayram, Mahmut Atalay Sk. No:2 D:110, 06050 Altındağ/Ankara
                            </a>
                        </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                        <div className="text-[10px] font-body text-[#666666]">Çalışma Saatleri</div>
                        <div className="text-xs font-body font-semibold text-[#000000]">Pazartesi - Cuma: 09:00 - 18:00</div>
                    </div>
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
                        <MessageSquare className="w-4 h-4 text-[#00AFFF]" />
                        <span className="text-xs font-body font-semibold text-[#666666]">İletişim</span>
                    </div>
                </div>

                <h1 className="mx-auto max-w-4xl text-4xl font-display font-medium tracking-tighter text-[#000000] sm:text-6xl mb-6 leading-[1.2]">
                    Bizimle İletişime Geçin
                </h1>

                <p className="mt-6 text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto font-body text-center">
                    SAP danışmanlık hizmetleri, Daisy portalı veya özel çözümlerimiz hakkında 
                    bilgi almak için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız!
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-4">
                    <a
                        href="#contact-form"
                        className="rounded-lg bg-gradient-to-r from-[#33B7FF] to-[#00AFFF] hover:from-[#00AFFF] hover:to-[#0094E6] px-8 py-3.5 text-sm font-body font-bold text-white shadow-lg hover:shadow-[#00AFFF]/50 transition-all flex items-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Mesaj Gönder
                    </a>
                    <a
                        href="/hizmetlerimiz"
                        className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-sm font-body font-bold text-[#666666] shadow-sm hover:bg-gray-50 transition-all"
                    >
                        Hizmetlerimiz
                    </a>
                </div>

                {/* Quick Contact Icons */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <a
                        href="mailto:destek@sapport.com.tr"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-body text-[#666666] group-hover:text-[#00AFFF] transition-colors">E-posta</span>
                    </a>
                    <a
                        href="tel:+903125571284"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00AFFF] to-[#0094E6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-body text-[#666666] group-hover:text-[#00AFFF] transition-colors">Telefon</span>
                    </a>
                    <a
                        href="https://maps.google.com/?q=Hacı+Bayram,+Mahmut+Atalay+Sk.+No:2+D:110,+06050+Altındağ/Ankara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0094E6] to-[#0077CC] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-body text-[#666666] group-hover:text-[#00AFFF] transition-colors">Adres</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

