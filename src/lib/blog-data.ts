import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "sap-s4hana-migration-rehberi",
    title: "SAP S/4HANA Migration Rehberi: Başarılı Geçiş İçin Kritik Adımlar",
    excerpt:
      "SAP S/4HANA'ya geçiş sürecinde dikkat edilmesi gereken önemli noktalar ve en iyi uygulamalar. 15 yıllık deneyimimizden çıkardığımız dersler.",
    content: `
# SAP S/4HANA Migration Rehberi

SAP S/4HANA'ya geçiş, modern işletmeler için kritik bir dönüşüm sürecidir. Bu rehberde, başarılı bir migration için izlenmesi gereken adımları detaylı olarak ele alıyoruz.

## Hazırlık Aşaması

Migration sürecine başlamadan önce, mevcut SAP sisteminizin kapsamlı bir analizini yapmanız gerekmektedir. Bu analiz, hangi modüllerin geçişe hazır olduğunu ve hangi alanlarda özel çalışma gerektiğini ortaya çıkaracaktır.

## Veri Temizleme

Eski sisteminizdeki verilerin temizlenmesi ve optimize edilmesi, migration sürecinin en önemli adımlarından biridir. Gereksiz verilerin temizlenmesi, geçiş süresini kısaltır ve performansı artırır.

## Test Süreci

Kapsamlı test senaryoları oluşturarak, tüm kritik iş süreçlerinizin yeni sistemde sorunsuz çalıştığından emin olmalısınız. Test süreci, canlıya geçişten önceki son kontrol noktasıdır.

## Go-Live ve Destek

Go-live sonrası destek, sistemin stabil çalışması için kritik öneme sahiptir. İlk haftalarda yoğun bir destek süreci planlanmalıdır.
    `,
    author: "Aerisap Ekibi",
    date: "2024-12-15",
    category: "Migration",
  },
  {
    slug: "abap-modern-gelistirme-teknikleri",
    title: "Modern ABAP Geliştirme Teknikleri: 2025 Best Practices",
    excerpt:
      "ABAP programlama dilinde modern geliştirme teknikleri, performans optimizasyonu ve kod kalitesi için en iyi uygulamalar.",
    content: `
# Modern ABAP Geliştirme Teknikleri

ABAP programlama dili, SAP ekosisteminde sürekli gelişmektedir. Modern ABAP teknikleri, daha temiz, performanslı ve bakımı kolay kod yazmanıza olanak sağlar.

## Object-Oriented ABAP

OOP prensiplerini ABAP'a uygulayarak, daha modüler ve yeniden kullanılabilir kod yapıları oluşturabilirsiniz. Encapsulation, inheritance ve polymorphism gibi kavramlar, ABAP geliştirmede de kritik öneme sahiptir.

## Performance Optimization

ABAP kodlarında performans optimizasyonu için dikkat edilmesi gereken noktalar:
- Veritabanı sorgularının optimize edilmesi
- Internal table kullanımında doğru yaklaşımlar
- Parallel processing imkanlarının değerlendirilmesi

## Code Quality

Kod kalitesi, uzun vadede projenin başarısı için kritiktir. Code reviews, unit testing ve documentation, yüksek kaliteli ABAP geliştirmenin temel taşlarıdır.
    `,
    author: "Aerisap Ekibi",
    date: "2024-12-10",
    category: "ABAP",
  },
  {
    slug: "sap-fiori-ux-tasarim-prensipleri",
    title: "SAP Fiori UX Tasarım Prensipleri: Kullanıcı Deneyimini Optimize Etme",
    excerpt:
      "SAP Fiori uygulamalarında kullanıcı deneyimini artırmak için uygulanması gereken tasarım prensipleri ve en iyi uygulamalar.",
    content: `
# SAP Fiori UX Tasarım Prensipleri

SAP Fiori, modern, kullanıcı dostu SAP uygulamaları geliştirmek için tasarlanmış bir tasarım sistemi ve teknoloji yığınıdır.

## Role-Based Design

Fiori uygulamaları, kullanıcıların rollerine göre özelleştirilmiş deneyimler sunar. Her kullanıcı, ihtiyaç duyduğu bilgilere ve işlevlere hızlıca erişebilir.

## Responsive Design

Fiori uygulamaları, tüm cihazlarda mükemmel çalışacak şekilde tasarlanmıştır. Mobil, tablet ve masaüstü deneyimleri optimize edilmiştir.

## Coherent Experience

Tüm Fiori uygulamaları, tutarlı bir kullanıcı deneyimi sunar. Bu tutarlılık, kullanıcıların farklı uygulamalar arasında geçiş yaparken öğrenme eğrisini minimize eder.

## Simple and Intuitive

Fiori tasarım prensipleri, basitlik ve sezgisellik üzerine kuruludur. Kullanıcılar, karmaşık eğitimler olmadan uygulamaları kullanabilir.
    `,
    author: "Aerisap Ekibi",
    date: "2024-12-05",
    category: "Fiori",
  },
  {
    slug: "sap-cloud-platform-entegrasyon",
    title: "SAP Cloud Platform ile Modern Entegrasyon Çözümleri",
    excerpt:
      "SAP Cloud Platform kullanarak sistem entegrasyonlarını nasıl optimize edebilirsiniz? API yönetimi, microservices ve cloud-native yaklaşımlar.",
    content: `
# SAP Cloud Platform ile Modern Entegrasyon

SAP Cloud Platform, kurumsal sistemlerinizi modern cloud teknolojileri ile entegre etmenizi sağlayan güçlü bir platformdur.

## API Management

SAP Cloud Platform'un API Management özellikleri, sistem entegrasyonlarınızı merkezi bir noktadan yönetmenize olanak sağlar. API'lerinizi güvenli bir şekilde expose edebilir, rate limiting ve monitoring gibi özelliklerden yararlanabilirsiniz.

## Microservices Architecture

Cloud-native yaklaşımla, SAP sistemlerinizi microservices mimarisi ile geliştirebilirsiniz. Bu yaklaşım, ölçeklenebilirlik ve esneklik sağlar.

## Integration Suite

SAP Integration Suite, farklı sistemler arasında entegrasyon kurmanızı kolaylaştırır. Pre-built connectors ve templates, entegrasyon sürelerini önemli ölçüde kısaltır.

## Security and Compliance

Cloud platform üzerinde güvenlik ve uyumluluk, kritik öneme sahiptir. SAP Cloud Platform, enterprise-grade güvenlik özellikleri sunar.
    `,
    author: "Aerisap Ekibi",
    date: "2024-11-28",
    category: "Cloud",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}

