import * as React from "react";
import {
  Code,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Cloud,
  BarChart3,
  Settings,
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
    id: "s4hana",
    title: "SAP S/4HANA Migration",
    icon: Database,
    description:
      "Eski SAP sistemlerinizi S/4HANA'ya sorunsuz geçiş için kapsamlı planlama, analiz ve implementasyon hizmetleri.",
    features: [
      "System Landscape Assessment",
      "Data Migration Strategy",
      "Custom Code Adaptation",
      "Testing & Validation",
      "Go-Live Support",
      "Post-Migration Optimization",
    ],
  },
  {
    id: "abap",
    title: "ABAP Geliştirme",
    icon: Code,
    description:
      "Modern ABAP teknikleri ile ölçeklenebilir, performanslı ve bakımı kolay SAP uygulamaları geliştiriyoruz.",
    features: [
      "Custom Report Development",
      "Enhancement & Modification",
      "Workflow Development",
      "ALV & Interactive Reports",
      "RFC & BAPI Development",
      "Performance Optimization",
    ],
  },
  {
    id: "fiori",
    title: "SAP Fiori Uygulamaları",
    icon: Smartphone,
    description:
      "Modern, kullanıcı dostu Fiori uygulamaları ile SAP deneyiminizi yeniden tanımlayın.",
    features: [
      "Fiori App Development",
      "UI5 Framework",
      "Responsive Design",
      "Role-Based Apps",
      "Fiori Launchpad Configuration",
      "UX Best Practices",
    ],
  },
  {
    id: "migration",
    title: "SAP Migration Hizmetleri",
    icon: ArrowRight,
    description:
      "SAP sistemlerinizin farklı platformlara veya versiyonlara geçişinde uzman desteği.",
    features: [
      "System Upgrade",
      "Platform Migration",
      "Database Migration",
      "Unicode Conversion",
      "OS/DB Migration",
      "Data Archiving",
    ],
  },
  {
    id: "integration",
    title: "Sistem Entegrasyonu",
    icon: Zap,
    description:
      "SAP sistemlerinizi diğer kurumsal sistemlerle entegre ederek veri akışını optimize ediyoruz.",
    features: [
      "PI/PO Integration",
      "API Development",
      "EDI Configuration",
      "IDoc Processing",
      "Web Services",
      "Cloud Integration",
    ],
  },
  {
    id: "security",
    title: "Güvenlik & Uyumluluk",
    icon: Shield,
    description:
      "Enterprise-grade güvenlik standartları ve sektör uyumluluk gereksinimlerini karşılayan çözümler.",
    features: [
      "Security Audit",
      "Authorization Management",
      "GRC Implementation",
      "Compliance Reporting",
      "Vulnerability Assessment",
      "Security Best Practices",
    ],
  },
  {
    id: "cloud",
    title: "SAP Cloud Platform",
    icon: Cloud,
    description:
      "SAP Cloud Platform ile modern, cloud-native uygulamalar geliştiriyoruz.",
    features: [
      "Cloud Application Development",
      "Integration Suite",
      "API Management",
      "Analytics Cloud",
      "Mobile Services",
      "Cloud Security",
    ],
  },
  {
    id: "analytics",
    title: "SAP Analytics & BI",
    icon: BarChart3,
    description:
      "İş zekası ve analitik çözümleri ile veri odaklı karar alma süreçlerinizi güçlendirin.",
    features: [
      "SAP BW/4HANA",
      "SAP Analytics Cloud",
      "Dashboard Development",
      "Data Modeling",
      "Predictive Analytics",
      "Real-time Reporting",
    ],
  },
  {
    id: "support",
    title: "SAP Destek & Bakım",
    icon: Settings,
    description:
      "7/24 destek hizmeti ile SAP sistemlerinizin kesintisiz çalışmasını sağlıyoruz.",
    features: [
      "24/7 Support",
      "Incident Management",
      "System Monitoring",
      "Performance Tuning",
      "Regular Maintenance",
      "Proactive Monitoring",
    ],
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Aerisap - SAP & ABAP Danışmanlık",
  description:
    "SAP S/4HANA migration, ABAP geliştirme, Fiori uygulamaları ve daha fazlası. 15 yıllık deneyimimizle SAP ekosisteminde ihtiyacınız olan tüm hizmetleri sunuyoruz.",
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
              15 yılı aşkın SAP ve ABAP deneyimi ile kurumsal çözümler sunan
              önde gelen danışmanlık firması olarak, ihtiyacınız olan tüm SAP
              hizmetlerini tek çatı altında sunuyoruz.
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
                    <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-sky-600" />
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
                          <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
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
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white">
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
              className="bg-white text-sky-600 hover:bg-slate-50"
            >
              İletişime Geçin
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

