import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Users, Award, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "SAPPort Bilişim Hizmetleri A.Ş. olarak SAP-ABAP danışmanlık, Daisy kurumsal portal çözümü ve dijital dönüşüm hizmetleri sunuyoruz. Ankara merkezli ekibimizle SAP projelerinize değer katıyoruz.",
  keywords: [
    "SAPport hakkında",
    "SAP danışmanlık firması",
    "SAP-ABAP uzmanı",
    "Ankara SAP danışmanlık",
    "SAP çözüm ortağı",
    "dijital dönüşüm danışmanlığı",
    "SAP ekibi",
    "SAPport ekibi",
  ],
  openGraph: {
    title: "Hakkımızda | SAPport - SAP-ABAP Danışmanlık",
    description: "SAPPort Bilişim Hizmetleri A.Ş. olarak SAP-ABAP danışmanlık ve dijital dönüşüm çözümleri hakkında bilgi edinin.",
    url: "https://sapport.com.tr/hakkimizda",
  },
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate py-12 sm:py-24 px-6 lg:px-8 overflow-hidden">
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

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm mb-6">
              <Users className="w-4 h-4" />
              <span>SAPPort Bilişim Hizmetleri A.Ş.</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Hakkımızda
            </h1>
            <p className="text-lg sm:text-xl leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              SAPPort Bilişim Hizmetleri A.Ş. olarak kurumsal yazılım çözümleri alanında öncü bir 
              teknoloji şirketi olarak hizmet vermekteyiz. SAP çözüm ortağı olarak, işletmelerin 
              dijital dönüşüm yolculuklarında güvenilir bir yol arkadaşı olmayı hedeflemekteyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vizyon */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.2]">
                Vizyonumuz
              </h2>
              <p className="text-base leading-[1.7] text-[#666666] font-body">
                Türkiye&apos;nin dijital dönüşümünde lider teknoloji şirketi olmak ve global 
                pazarda güçlü bir marka olarak yer almak.
              </p>
            </div>

            {/* Misyon */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.2]">
                Misyonumuz
              </h2>
              <p className="text-base leading-[1.7] text-[#666666] font-body">
                İşletmelerin SAP çözümleriyle dijital dönüşüm süreçlerini en verimli şekilde yönetmesini sağlamak; 
                yenilikçi uygulamalarımızla müşteri deneyimini geliştirmek ve sürdürülebilir başarılarına katkı sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Uzmanlık Alanlarımız
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              Geniş kapsamlı SAP modül yelpazemizde uzman kadromuzla hizmet vermekteyiz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "İnsan Kaynakları (HR)",
              "Finans ve Kontrol (FI)",
              "Malzeme Yönetimi (MM)",
              "Satış ve Dağıtım (SD)",
              "Proje Yönetimi (PM)",
              "Kalite Yönetimi (QM)",
              "SAP Basis",
            ].map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-base font-display font-medium tracking-tight text-[#000000] leading-[1.3]">
                  {module}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Değerlerimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Müşteri Odaklılık",
                desc: "Her projemizde müşterilerimizin ihtiyaçlarını önceliklendiriyor, onların başarısını kendi başarımız olarak görüyoruz."
              },
              {
                icon: Zap,
                title: "Yenilikçilik",
                desc: "Teknolojik gelişmeleri yakından takip ediyor, çözümlerimizi sürekli geliştiriyoruz."
              },
              {
                icon: Award,
                title: "Uzmanlık",
                desc: "Deneyimli kadromuzla en güncel SAP teknolojilerini kullanarak kaliteli hizmet sunuyoruz."
              },
              {
                icon: Shield,
                title: "Güvenilirlik",
                desc: "Projelerimizi zamanında, bütçesinde ve en yüksek kalitede teslim etmeyi taahhüt ediyoruz."
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[#666666] font-body">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fark Yaratan Yaklaşım Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Fark Yaratan Yaklaşımımız
            </h2>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-base leading-[1.7] text-[#666666] font-body mb-6">
              SAPPort olarak, SAP teknolojilerini sadece bir araç olarak görüyor, asıl hedefimizi 
              müşterilerimizin iş süreçlerini optimize etmek ve dijital dönüşümlerini başarıyla 
              gerçekleştirmek olarak belirliyoruz.
            </p>
            <p className="text-base leading-[1.7] text-[#666666] font-body mb-6">
              Web ve mobil teknolojileri etkin kullanarak, modern iş dünyasının gereksinimlerini 
              karşılayan çözümler sunuyoruz. ERP sistemlerine entegre edilebilen ek yazılımların 
              yanı sıra, iş süreçlerini kolaylaştıran çözümler geliştiriyoruz.
            </p>
            <p className="text-base leading-[1.7] text-[#666666] font-body">
              Fiori ve BSP web teknolojilerinin etkin kullanımıyla iş süreçlerinizi web ve mobil 
              ortamlara taşıyoruz. İşletmenizi bir ileri seviyeye çıkartalım.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl text-center bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-lg leading-[1.7] text-[#666666] mb-8 font-body">
            SAP danışmanlık hizmetlerimiz veya Daisy portalı hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-lg bg-[#1F1F1F] px-8 py-3.5 text-sm font-body font-bold text-white shadow-sm hover:bg-black transition-all"
            >
              İletişime Geç
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-sm font-body font-bold text-[#666666] shadow-sm hover:bg-gray-50 transition-all"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

