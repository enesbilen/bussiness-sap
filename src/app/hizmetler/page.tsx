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
    gradient: "from-indigo-500 to-purple-500",
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
    gradient: "from-purple-500 to-pink-500",
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
    gradient: "from-amber-500 to-orange-500",
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
    gradient: "from-cyan-500 to-blue-500",
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
    gradient: "from-emerald-500 to-teal-500",
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
    gradient: "from-rose-500 to-red-500",
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
    gradient: "from-indigo-400 to-blue-400",
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
    gradient: "from-violet-500 to-purple-500",
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
    gradient: "from-slate-500 to-zinc-500",
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
      <Section spacing="xl" background="primary" className="pt-32 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              15 yılı aşkın deneyimimizle, SAP projelerinizde ihtiyacınız olan
              tüm hizmetleri <span className="text-white font-medium">tek çatı altında</span> sunuyoruz.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="secondary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} hover className="h-full flex flex-col group border-zinc-800">
                  <CardHeader>
                    <div className={`
                      h-14 w-14 rounded-2xl bg-gradient-to-br ${service.gradient} 
                      flex items-center justify-center mb-4 glow shadow-lg
                    `}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-zinc-400 mb-8 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      href="/iletisim"
                      variant="outline"
                      className="w-full mt-auto"
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

      <Section spacing="lg" background="primary">
        <Container>
          <div className="rounded-3xl relative overflow-hidden p-8 sm:p-12 text-center text-white border border-zinc-800">
            {/* Gradient BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-indigo-900/40" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Projeniz İçin Teklif Alın
              </h2>
              <p className="text-lg text-zinc-300 mb-8">
                SAP projeleriniz için ücretsiz danışmanlık ve size özel çözümlerimizi
                konuşmak için hemen iletişime geçin.
              </p>
              <Button
                asChild
                href="/iletisim"
                variant="primary"
                size="lg"
              >
                İletişime Geçin
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
