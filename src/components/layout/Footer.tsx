import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] rounded-t-3xl text-gray-300 mx-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sol Kolon - Logo, Tagline, Social Media */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-6">
              <Link
                href="/"
                className="relative w-full h-full block hover:scale-105 transition-transform pointer-events-auto inline-block"
              >
                <Image
                  src="/sap-images/logo/sapportlogo-white.png"
                  alt="SAPPort Logo"
                  width={180}
                  height={60}
                  className="object-contain object-left"
                />
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-[1.7] font-body text-gray-300 mb-6">
              SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle 
              işletmenizin dijital dönüşümünü başlatın.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/sapport-bili%C5%9Fim/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#00AFFF] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@sapportbilisim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#00AFFF] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Orta Kolonlar - Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sayfalar Column */}
            <div>
              <h3 className="text-base font-display font-semibold text-white mb-4">
                Sayfalar
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/daisy"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Daisy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hakkimizda"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetlerimiz"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iletisim"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hizmetler Column */}
            <div>
              <h3 className="text-base font-display font-semibold text-white mb-4">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/hizmetlerimiz#sap-abap"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    SAP-ABAP Danışmanlık
                  </Link>
                </li>
                <li>
                  <Link
                    href="/daisy"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Daisy Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetlerimiz#entegrasyon"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    SAP Entegrasyonu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetlerimiz#ozel-cozumler"
                    className="text-sm font-body text-gray-300 hover:text-[#00AFFF] transition-colors"
                  >
                    Özel Çözümler
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Sağ Kolon - İletişim & Video */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-display font-semibold text-white mb-4">
              Bize Ulaşın
            </h3>
            <div className="space-y-4">
              {/* YouTube Video Link */}
              <a
                href="https://www.youtube.com/@sapportbilisim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#33B7FF] to-[#00AFFF] hover:from-[#00AFFF] hover:to-[#0094E6] rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#00AFFF]/50"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs text-white/80">Videolarımızı İzleyin</div>
                  <div className="text-sm font-body font-bold text-white">
                    YouTube Kanalımız
                  </div>
                </div>
              </a>

              {/* İletişim Link */}
              <Link
                href="/iletisim"
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors border border-gray-700 hover:border-[#00AFFF]"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#00AFFF]/10 rounded-lg">
                  <Mail className="w-5 h-5 text-[#00AFFF]" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs text-gray-400">Bizimle İletişime Geçin</div>
                  <div className="text-sm font-body font-bold text-white">
                    İletişim Sayfası
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-gray-400">
              © {new Date().getFullYear()} SAPPort Bilişim. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/iletisim"
                className="text-sm font-body text-gray-400 hover:text-[#00AFFF] transition-colors"
              >
                İletişim
              </Link>
              <a
                href="#"
                className="text-sm font-body text-gray-400 hover:text-[#00AFFF] transition-colors"
              >
                Gizlilik Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
