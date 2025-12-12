import * as React from "react";
import {
  Code,
  FileText,
  Package,
  Archive,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

const services = [
  {
    id: "uygulama",
    title: "SAP Uygulama Geliştirme",
    icon: Code,
    description:
      "İşletmenizin ihtiyaçlarına özel SAP uygulamaları geliştiriyoruz. ABAP programlama ve özel çözümler ile iş süreçlerinizi optimize ediyoruz.",
    features: [
      "ABAP Programlama",
      "Özel SAP Uygulamaları",
      "Custom Report Geliştirme",
      "Sistem Entegrasyonları",
      "İş Süreçleri Optimizasyonu",
      "Teknik Danışmanlık",
    ],
  },
  {
    id: "danismanlik",
    title: "SAP Danışmanlık",
    icon: FileText,
    description:
      "Sistemlerinizin yapılandırması, entegrasyonu ve güncelleştirilmesi konusunda uzman danışmanlık hizmetleri sunuyoruz.",
    features: [
      "SAP Sistem Yapılandırması",
      "Sistem Entegrasyonu",
      "Sistem Güncelleştirme",
      "Teknik Danışmanlık",
      "Proje Yönetimi",
      "Eğitim ve Destek",
    ],
  },
  {
    id: "efatura",
    title: "E-Fatura Paketi",
    icon: Package,
    description:
      "Fatura yönetimi için kapsamlı çözümler. E-Fatura sisteminizi SAP ile entegre ederek dijital dönüşümünüzü hızlandırın.",
    features: [
      "E-Fatura Entegrasyonu",
      "Otomatik Fatura Gönderimi",
      "Fatura Takip ve Raporlama",
      "GIB Entegrasyonu",
      "Fatura Arşivleme",
      "Teknik Destek",
    ],
  },
  {
    id: "eirsaliye",
    title: "E-İrsaliye Paketi",
    icon: Package,
    description:
      "Lojistik süreçlerinizi dijitalleştirin. E-İrsaliye paketimiz ile sevkiyat süreçlerinizi optimize edin.",
    features: [
      "E-İrsaliye Entegrasyonu",
      "Sevkiyat Yönetimi",
      "Lojistik Süreç Optimizasyonu",
      "GIB Entegrasyonu",
      "Raporlama ve Takip",
      "Teknik Destek",
    ],
  },
  {
    id: "earsiv",
    title: "E-Arşiv Paketi",
    icon: Archive,
    description:
      "Faturalarınızı güvenle arşivleyin. E-Arşiv paketimiz ile dijital arşivleme süreçlerinizi yönetin.",
    features: [
      "E-Arşiv Entegrasyonu",
      "Dijital Arşivleme",
      "Güvenli Saklama",
      "Hızlı Erişim",
      "Yasal Uyumluluk",
      "Teknik Destek",
    ],
  },
  {
    id: "edefter",
    title: "E-Defter Paketi",
    icon: BookOpen,
    description:
      "Defterlerinizi dijital ortamda tutun. E-Defter paketimiz ile muhasebe süreçlerinizi dijitalleştirin.",
    features: [
      "E-Defter Entegrasyonu",
      "Dijital Defter Yönetimi",
      "Otomatik Kayıt",
      "GIB Entegrasyonu",
      "Yasal Uyumluluk",
      "Teknik Destek",
    ],
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "SAP Uygulama Geliştirme, SAP Danışmanlık ve Paket Çözümler (E-Fatura, E-İrsaliye, E-Arşiv, E-Defter). 150'den fazla firmada kullanılan çözümlerimizle dijital dönüşümünüzde yanınızdayız.",
  openGraph: {
    title: "Hizmetlerimiz | AERISAP",
    description:
      "SAP uygulama geliştirme, danışmanlık ve e-Çözüm paketleri. QNB eFinans iş birliğiyle güvenilir çözümler.",
    url: "https://aerisap.com/hizmetler",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="xl" background="default" className="pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              2017'den beri SAP kurulum, geliştirme ve entegrasyon hizmetleri sunan 
              AERISAP olarak, QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan 
              çözümlerimizle dijital dönüşümünüzde yanınızdayız.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} hover className="h-full flex flex-col">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-copper-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-copper-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      href="/iletisim"
                      variant="outline"
                      className="w-full"
                    >
                      Teklif Alın
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="slate">
        <Container>
          <div className="bg-gradient-to-br from-copper-600 to-copper-800 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projeniz İçin Hemen Teklif Alın
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              SAP projeleriniz için ücretsiz danışmanlık ve özel teklif almak
              için iletişime geçin.
            </p>
            <Button
              asChild
              href="/iletisim"
              variant="secondary"
              size="lg"
              className="bg-white text-copper-700 hover:bg-copper-50"
            >
              İletişime Geçin
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

