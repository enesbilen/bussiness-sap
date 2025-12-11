import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Users, Clock, Database, Shield, Zap, FileText, Settings, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "SAP HR, FI/CO, MM/SD, PM/QM modülleri, SGK entegrasyonu, Pozitif Zaman Yönetimi, ABAP geliştirme ve özel SAP çözümleri için profesyonel danışmanlık hizmetleri.",
  keywords: [
    "SAP HR danışmanlık",
    "SAP FI/CO",
    "SAP MM/SD",
    "SAP PM/QM",
    "SGK entegrasyonu",
    "Pozitif zaman yönetimi",
    "ABAP geliştirme",
    "SAP modül danışmanlığı",
    "SAP özel çözümler",
    "SAP entegrasyon hizmetleri",
    "SAP danışman",
  ],
  openGraph: {
    title: "Hizmetlerimiz | SAPport - SAP Danışmanlık Hizmetleri",
    description: "SAP HR, SGK Entegrasyonu, Pozitif Zaman Yönetimi ve tüm SAP modülleri için danışmanlık hizmetleri.",
    url: "https://sapport.com.tr/hizmetlerimiz",
  },
  alternates: {
    canonical: "/hizmetlerimiz",
  },
};

export default function HizmetlerimizPage() {
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
              <Briefcase className="w-4 h-4" />
              <span>SAP Danışmanlık Hizmetleri</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Hizmetlerimiz
            </h1>
            <p className="text-lg sm:text-xl leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              İnsan kaynakları HR başta olmak üzere FI, MM, SD, PM, QM, Basis gibi tüm SAP modüllerinde 
              geniş kapsamlı destek ve geliştirme hizmetleri sunmaktayız.
            </p>
          </div>
        </div>
      </section>

      {/* SAP HR Danışmanlık Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              SAP HR Danışmanlık Hizmetleri
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              SAPPort Bilişim, SAP HR modülü üzerinde uzmanlaşmış danışmanlık hizmetleriyle 
              işletmelerin insan kaynakları süreçlerini modernize eder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Personel Yönetimi",
                desc: "Personel işe alım, çıkış ve nakil işlemlerinin SAP sistemi üzerinden yönetimi."
              },
              {
                icon: Shield,
                title: "SGK Entegrasyonu",
                desc: "Personel işlemlerinin SAP sistemi üzerinden doğrudan SGK platformuna aktarılması."
              },
              {
                icon: Clock,
                title: "Pozitif Zaman Yönetimi",
                desc: "Giriş-çıkış kayıtları, vardiya planlamaları, fazla mesai hesaplamaları ve izin takibi."
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[#666666] font-body">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SGK Entegrasyonu Detay Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                SGK Entegrasyonu ile Zaman ve Verimlilik Kazanın
              </h2>
              <p className="text-base leading-[1.7] text-[#666666] mb-6 font-body">
                İşletmenizin SGK ile ilgili operasyonlarını SAP sistemi üzerinden otomatikleştirerek 
                iş yükünüzü hafifletiyoruz.
              </p>
              <ul className="space-y-4">
                {[
                  "Çalışan işe alımı, çıkarılması veya nakil işlemleri otomatik olarak SGK web sitesine aktarılır.",
                  "SGK kullanıcı bilgileri SAP sistemi üzerinde tanımlanarak ek oturum açma ihtiyacı ortadan kalkar.",
                  "Hızlı, hatasız ve kullanış dostu bir deneyim sunar.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AFFF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-[1.7] text-[#666666] font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.3]">
                SGK Teşviki Uygulamaları
              </h3>
              <p className="text-sm leading-[1.7] text-[#666666] mb-4 font-body">
                İşletmenizin SGK teşviki kazancını optimize etmek için geliştirilen çözümümüz:
              </p>
              <ul className="space-y-3">
                {[
                  "Uygun teşvikleri otomatik olarak hesaplar ve bildirir.",
                  "Teşvikin verilmesi sonrası süreci takip ederek riskleri minimize eder.",
                  "Şirketinize özel çözümler sunarak maliyetleri düşürmenizi sağlar.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AFFF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-[1.7] text-[#666666] font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pozitif Zaman Yönetimi Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Pozitif Zaman Yönetimi
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              İşletmelerin sürdürülebilir başarısı için kritik öneme sahip olan personel çalışma 
              saatlerinin yönetimi konusunda kapsamlı bir yaklaşım sunar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Giriş-çıkış saatlerine göre vardiya ve çalışma saatlerinin otomatik hesaplanması",
              "Fazla mesai, izinler ve puantaj hesaplamaları",
              "Bordro hesaplamaları için PDKS entegrasyonu ile verilerin otomatik aktarımı",
              "Yıllık izin bakiyelerinin takibini kolaylaştırma",
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Modülleri Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              SAP Modülleri
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              Tüm SAP modüllerinde uzman kadromuzla hizmet vermekteyiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "SAP HR", desc: "İnsan Kaynakları modülü - Çalışan yönetimi, bordro işlemleri ve organizasyonel yapıların yönetimi." },
              { icon: BarChart3, title: "SAP FI", desc: "Finans ve Kontrol modülü - Finansal işlemler, muhasebe süreçleri ve finansal raporlama." },
              { icon: Database, title: "SAP MM", desc: "Malzeme Yönetimi modülü - Stok yönetimi, tedarik zinciri süreçleri ve lojistik operasyonları." },
              { icon: FileText, title: "SAP SD", desc: "Satış ve Dağıtım modülü - Sipariş yönetimi, teslimat süreçleri ve faturalama işlemleri." },
              { icon: Settings, title: "SAP PM", desc: "Proje Yönetimi modülü - Tesis yönetimi, bakım süreçleri ve ekipman yönetimi." },
              { icon: Shield, title: "SAP QM", desc: "Kalite Yönetimi modülü - Kalite kontrol, test prosedürleri ve hata analizleri." },
              { icon: Zap, title: "SAP Basis", desc: "Teknik altyapı modülü - Sistem kurulumu, bakımı ve performans optimizasyonu." },
            ].map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                    {module.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-[#666666] font-body">
                    {module.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Özel Çözümler Section */}
      <section className="py-12 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              İnovatif Çözümlerimiz
            </h2>
            <p className="text-lg leading-[1.7] text-[#666666] max-w-3xl mx-auto font-body">
              Kendi geliştirdiğimiz Daisy portalı ve BİRİŞ helpdesk uygulaması gibi yenilikçi 
              çözümlerimizle, müşterilerimizin iş süreçlerini dijitalleştiriyor ve verimliliğini artırıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.3]">
                Daisy Portal
              </h3>
              <p className="text-base leading-[1.7] text-[#666666] mb-4 font-body">
                SAP sisteminize tam entegre çalışan kurumsal portal çözümü. İnsan kaynakları yönetiminden 
                belge yönetimine, iş takibinden performans değerlendirmesine kadar tüm süreçlerinizi 
                dijitalleştirin.
              </p>
              <Link
                href="/daisy"
                className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#000000] hover:text-[#666666] transition-colors"
              >
                Daisy Hakkında Daha Fazla <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.3]">
                BİRİŞ Helpdesk
              </h3>
              <p className="text-base leading-[1.7] text-[#666666] mb-4 font-body">
                Modern işletmelerin iş takibi ve görevlendirme süreçlerini dijitalleştiren yenilikçi bir çözüm. 
                Daisy portal altyapısı üzerinde çalışan BİRİŞ, kurumsal iletişim ve koordinasyonu maksimum seviyeye çıkarır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "SAP danışmanlık hizmetleriniz neleri kapsar?",
                a: "SAP danışmanlık hizmetlerimiz, kurulum, özelleştirme, entegrasyon, süreç analizi, performans optimizasyonu ve kullanıcı eğitimi gibi geniş bir yelpazede profesyonel çözümler sunar. İş süreçlerinizi en verimli şekilde yönetebilmeniz için size özel stratejiler geliştiriyoruz."
              },
              {
                q: "İnsan Kaynakları (HR) süreçlerinde nasıl destek sağlıyorsunuz?",
                a: "İnsan kaynakları süreçleriniz için SAP HR modülü üzerinden bordro, performans değerlendirme, işe alım, izin yönetimi ve çalışan bilgisi yönetimi gibi çözümler sunuyoruz. Ayrıca Daisy gibi ürünlerimizle bu süreçleri dijital platformlara taşıyoruz."
              },
              {
                q: "ERP sistemlerine entegre edilebilir özel yazılımlar geliştiriyor musunuz?",
                a: "Evet, iş süreçlerinize tam uyumlu özel yazılımlar geliştiriyoruz. Fiori ve BSP teknolojilerini kullanarak, ihtiyaçlarınıza uygun web ve mobil çözümler sunuyoruz."
              },
              {
                q: "Şirket içi süreç yönetimi için hangi çözümleri sunuyorsunuz?",
                a: "Daisy ve Biriş gibi ürünlerimizle iş takibi, görevlendirme, izin süreçleri, bordro görüntüleme, raporlama ve çok daha fazlasını yönetmenize yardımcı oluyoruz. Bu çözümler, süreçlerinizi daha verimli ve şeffaf hale getirir."
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
            İşletmenizi Bir İleri Seviyeye Taşıyoruz
          </h2>
          <p className="text-lg leading-[1.7] text-[#666666] mb-8 font-body">
            SAP danışmanlık hizmetlerimiz veya özel çözümlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-lg bg-[#1F1F1F] px-8 py-3.5 text-sm font-body font-bold text-white shadow-sm hover:bg-black transition-all"
            >
              İletişime Geç
            </Link>
            <Link
              href="/daisy"
              className="rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-sm font-body font-bold text-[#666666] shadow-sm hover:bg-gray-50 transition-all"
            >
              Daisy&apos;yi Keşfet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

