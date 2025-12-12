import * as React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const footerLinks = {
  sirket: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ekibimiz", href: "/ekibimiz" },
    { name: "Kariyer", href: "/kariyer" },
    { name: "Haberler", href: "/haberler" },
  ],
  hizmetler: [
    { name: "SAP Uygulama Geliştirme", href: "/hizmetler#uygulama" },
    { name: "SAP Danışmanlık", href: "/hizmetler#danismanlik" },
    { name: "E-Fatura Paketi", href: "/hizmetler#efatura" },
    { name: "E-İrsaliye Paketi", href: "/hizmetler#eirsaliye" },
    { name: "E-Arşiv Paketi", href: "/hizmetler#earsiv" },
    { name: "E-Defter Paketi", href: "/hizmetler#edefter" },
  ],
  iletisim: [
    { name: "İletişim", href: "/iletisim" },
    { name: "Destek", href: "/destek" },
    { name: "SSS", href: "/sss" },
    { name: "Gizlilik Politikası", href: "/gizlilik" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/aerisap",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aerisap",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Şirket Bilgileri */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">AERISAP</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              2017'de kurulan ve 2019'dan bu yana anonim şirket olarak faaliyet gösteren 
              Ankara merkezli SAP danışmanlık firması. SAP A.G tarafından geliştirme ortağı olarak tanınmaktadır.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-copper-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  ASBÜ Sosyokent Teknoloji Geliştirme Bölgesi,<br />
                  Hacı Bayram Mah., Mahmut Atalay Sokak No:6,<br />
                  Kat No: 2 İç Kapı No: 213, Altındağ/Ankara
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-copper-600 flex-shrink-0" />
                <a
                  href="tel:+905333474633"
                  className="text-slate-400 hover:text-copper-500 transition-colors"
                >
                  +90 533 347 46 33
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-copper-600 flex-shrink-0" />
                <a
                  href="mailto:turgut.bakir@aerisap.com"
                  className="text-slate-400 hover:text-copper-500 transition-colors"
                >
                  turgut.bakir@aerisap.com
                </a>
              </div>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="text-white font-semibold mb-4">Şirket</h4>
            <ul className="space-y-3">
              {footerLinks.sirket.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-copper-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-copper-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim & Sosyal */}
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.iletisim.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-copper-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-white font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-copper-500 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} AERISAP Yazılım & Danışmanlık A.Ş. Tüm hakları saklıdır.
            </p>
            <p className="text-slate-500 text-sm">
              SAP ve diğer SAP ürün ve hizmetleri SAP SE'nin ticari markalarıdır.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

