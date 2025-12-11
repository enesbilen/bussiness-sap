import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Users, Shield, Zap, BarChart3, FileText, Smartphone, Globe, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Daisy - Kurumsal Portal Çözümü",
  description: "Daisy, SAP sisteminize tam entegre çalışan, organik bağlantılı ve aynı veritabanını paylaşan web tabanlı kurumsal portal çözümüdür. SAP bilmeyen çalışanlarınız bile kolayca işlemlerini yapabilsin.",
  keywords: [
    "Daisy portal",
    "SAP portal",
    "kurumsal portal",
    "SAP entegrasyonu",
    "web portal",
    "SAP self servis",
    "kurumsal intranet",
    "SAP HR portal",
    "dijital portal",
    "SAP çalışan portalı",
  ],
  openGraph: {
    title: "Daisy - Kurumsal Portal Çözümü | SAPport",
    description: "SAP sisteminize tam entegre çalışan Daisy kurumsal portalı ile iş süreçlerinizi dijitalleştirin.",
    url: "https://sapport.com.tr/daisy",
  },
  alternates: {
    canonical: "/daisy",
  },
};

export default function DaisyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate py-20 sm:py-32 px-6 lg:px-8 overflow-hidden">
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
              <Globe className="w-4 h-4" />
              <span>Kurumsal Portal</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Daisy: SAP&apos;nizin Üzerine Kurulu <br />
              Kurumsal Portal
            </h1>
            <p className="text-lg sm:text-xl leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              SAP sisteminize tam entegre çalışan, organik bağlantılı ve aynı veritabanını paylaşan 
              web tabanlı kurumsal portal çözümü. SAP bilmeyen çalışanlarınız bile kolayca işlemlerini yapabilsin.
            </p>
          </div>
        </div>
      </section>

      {/* Papatya Metaforu Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Papatya Metaforu
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              Daisy (Papatya) isminin anlamından yola çıkarak, papatyanın merkezindeki sarı kısmın 
              SAP sisteminiz olduğunu, etrafındaki beyaz yaprakların ise bu sisteme entegre edilen 
              dijital süreçler olduğunu düşünün.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Merkez: SAP Sistemi
              </h3>
              <p className="text-sm leading-[1.7] text-[#666666] font-body">
                SAP sisteminiz papatyanın merkezidir. Tüm dijital süreçler bu merkezden beslenir.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Yapraklar: Dijital Süreçler
              </h3>
              <p className="text-sm leading-[1.7] text-[#666666] font-body">
                Her yaprak bir dijital süreçtir: Sözleşme yönetimi, anketler, fatura yönetimi, depo yönetimi...
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Tek Platform
              </h3>
              <p className="text-sm leading-[1.7] text-[#666666] font-body">
                Tüm süreçlerinizi cep telefonu, tablet veya bilgisayar gibi web tabanlı araçlarla yönetin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temel Modüller Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Daisy&apos;nin Temel Modül ve Özellikleri
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              Kurumsal süreçlerinizi tek bir platformdan yönetmenizi sağlayan kapsamlı modüller.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Süreç Yönetimi", desc: "Organizasyonel süreçlerinizi sistematik bir şekilde yönetmenize olanak tanır." },
              { title: "Devamsızlık Kotoları", desc: "Personel devamsızlıklarının takip ve analizini yaparak izin ve fazla mesai kotolarını yönetin." },
              { title: "Organizasyon Şemaları", desc: "Dinamik ve güncellenebilir organizasyon yapısı oluşturabilir ve dijital ortama taşıyabilirsiniz." },
              { title: "Bordro Yönetimi", desc: "Personel bordro bilgilerini hızlı ve güvenilir bir şekilde yönetin, çalışanlarınızın bordrolarına online erişim sağlayın." },
              { title: "Anketler ve Anketör Modülü", desc: "İç ve dış paydaşlarınıza yönelik özelleştirilebilir anketler oluşturabilir ve geri bildirim alabilirsiniz." },
              { title: "Raporlama Aracı", desc: "Detaylı analiz raporları oluşturabilir, yöneticiler için şeffaf ve kullanış dostu bir raporlama altyapısı sunar." },
              { title: "Personel Değerlendirme", desc: "Performans değerlendirme ve analiz modülü ile çalışanlarınızın kariyer yolculuklarını yönetin." },
              { title: "Duyuru Listesi", desc: "Şirket içi haber ve duyuruları tüm çalışanların kolayca erişebileceği şekilde yayınlayabilirsiniz." },
              { title: "İş Takibi", desc: "Atanan görevlerin aşamasını izleyebilir, iş yükünü ve çıkışı optimize edebilirsiniz." },
              { title: "EBYS", desc: "Evrak yönetim süreçlerini dijital ortama taşıyarak zaman ve maliyet tasarrufu sağlar." },
              { title: "Daisy Sosyal", desc: "Çalışanların sosyal bağlantılar kurması, fikir paylaşması ve iletişimlerini artırması için modern bir platform sunar." },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantajlar Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Daisy&apos;nin Avantajları
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Database, title: "SAP Entegrasyonu", desc: "SAP sisteminize tam entegre çalışır ve kurulum süreci zahmetsizdir." },
              { icon: Users, title: "MS Active Directory", desc: "MS Active Directory ile uyumlu çalışır; çalışanlar mevcut sistem şifreleri ile portala erişim sağlayabilir." },
              { icon: Smartphone, title: "Mobil & Web Erişimi", desc: "Mobil, web ve tablet desteği ile her yerden erişim imkânı sunar." },
              { icon: BarChart3, title: "Analitik Raporlar", desc: "Derinlikli analitik raporlar ile yönetim kararları desteklenir." },
              { icon: Shield, title: "Güvenlik", desc: "Daisy'nin SAP sistemi üzerine kurulması ve tüm verinin şirkete ait olması. Ekstra güvenlik katmanları ve şifreleme ile veri koruması." },
              { icon: Zap, title: "Özelleştirme", desc: "Görsel ve işlevsel olarak kuruma özel özelleştirme imkanı." },
            ].map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                    {advantage.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[#666666] font-body">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Daisy nedir ve ne işe yarar?",
                a: "Daisy, şirket çalışanlarınızın web, mobil ve tablet cihazlar üzerinden erişebileceği bir kurumsal portal sistemidir. İzin talepleri, masraf yönetimi, bordro görüntüleme, duyurular ve analitik raporlar gibi işlemleri dijital ortamda yönetmenizi sağlar."
              },
              {
                q: "Daisy hangi özellikleri sunar?",
                a: "İzin yönetimi, masraf takibi, bordro görüntüleme gibi insan kaynakları işlevleri. Şirket içi duyurular ve iletişim için portal altyapısı. Derinlikli raporlama araçlarıyla yöneticilere stratejik karar desteği. EBYS (Elektronik Belge Yönetimi) ile belge süreçlerini dijitalleştirme. Anket modülü sayesinde çalışan geri bildirimlerini toplama."
              },
              {
                q: "Daisy'nin SAP ile entegrasyonu nasıl çalışır?",
                a: "Daisy, SAP sisteminizle doğrudan entegre çalışır. ABAP ile yazıldığından, ekstra entegrasyon maliyetleri veya zorlukları olmadan mevcut altyapınıza kolayca bağlanır."
              },
              {
                q: "Daisy, mobil cihazlarla uyumlu mu?",
                a: "Evet, Daisy hem web hem de mobil cihazlarla tamamen uyumludur. Çalışanlarınız, istedikleri her yerden portal özelliklerine erişebilirler."
              },
              {
                q: "Daisy, hangi şirket boyutları için uygundur?",
                a: "Daisy, küçük, orta ve büyük ölçekli işletmelerin ihtiyaçlarını karşılamak üzere tasarlanmıştır. Modüler yapısı sayesinde, farklı sektörlerin farklı ihtiyaçlarına kolayca uyarlanabilir."
              },
              {
                q: "Daisy kurulumu ne kadar sürer?",
                a: "Daisy, SAP sisteminize entegre edilmek üzere optimize edilmiştir ve genellikle kısa bir süre içinde kullanıma hazır hale getirilebilir. Standart süreçler için birkaç hafta yeterlidir."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-display font-medium tracking-tight text-[#000000] mb-3 leading-[1.3]">
                  {faq.q}
                </h3>
                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl text-center bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] rounded-xl p-6">
          <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
            Daisy ile Dijital Dönüşümünüze Başlayın
          </h2>
          <p className="text-lg leading-[1.7] text-[#666666] mb-8 font-body">
            Daisy hakkında daha fazla bilgi almak veya demo talep etmek için bizimle iletişime geçin.
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

