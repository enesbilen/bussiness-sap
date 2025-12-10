import * as React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const footerLinks = {
  sirket: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ekibimiz", href: "/ekibimiz" },
    { name: "Kariyer", href: "/kariyer" },
  ],
  hizmetler: [
    { name: "SAP S/4HANA", href: "/hizmetler#s4hana" },
    { name: "ABAP Geliştirme", href: "/hizmetler#abap" },
    { name: "Fiori & UI5", href: "/hizmetler#fiori" },
  ],
  destek: [
    { name: "İletişim", href: "/iletisim" },
    { name: "Blog", href: "/blog" },
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
    <footer className="bg-[#0a0a0f] border-t border-zinc-800/50 relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">Aerisap</span>
            </Link>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed max-w-xs">
              SAP & ABAP danışmanlık hizmetleri. S/4HANA migration,
              ABAP geliştirme ve Fiori uygulamaları.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                <MapPin className="h-4 w-4 text-indigo-500" />
                <span>İstanbul, Türkiye</span>
              </div>
              <a
                href="tel:+902121234567"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <Phone className="h-4 w-4 text-indigo-500" />
                <span>+90 (212) 123 45 67</span>
              </a>
              <a
                href="mailto:info@aerisap.com"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-indigo-500" />
                <span>info@aerisap.com</span>
              </a>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Şirket
            </h4>
            <ul className="space-y-3">
              {footerLinks.sirket.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Hizmetler
            </h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Destek
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.destek.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
            <p>
              © {new Date().getFullYear()} Aerisap. Tüm hakları saklıdır.
            </p>
            <p>
              SAP® ve diğer SAP ürünleri SAP SE'nin ticari markalarıdır.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
