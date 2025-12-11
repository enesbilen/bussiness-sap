"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Youtube, Building2, MessageSquare } from "lucide-react";
import Link from "next/link";
import { HeroContact } from "@/components/landing/HeroContact";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Detaylı hata mesajını göster
        const errorMessage = data.details 
          ? `${data.error}: ${data.details.map((d: any) => d.message).join(", ")}`
          : data.error || "Bir hata oluştu";
        throw new Error(errorMessage);
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      items: [
        { label: "Destek", value: "destek@sapport.com.tr", href: "mailto:destek@sapport.com.tr" },
        { label: "Kurumsal", value: "kurumsal@sapport.com.tr", href: "mailto:kurumsal@sapport.com.tr" },
      ],
      color: "from-[#33B7FF] to-[#00AFFF]",
    },
    {
      icon: Phone,
      title: "Telefon",
      items: [
        { label: "Telefon", value: "312 557 12 84", href: "tel:+903125571284" },
      ],
      color: "from-[#00AFFF] to-[#0094E6]",
    },
    {
      icon: MapPin,
      title: "Adres",
      items: [
        { 
          label: "Ofis", 
          value: "Hacı Bayram, Mahmut Atalay Sk. No:2 D:110, 06050 Altındağ/Ankara, Türkiye",
          href: "https://maps.google.com/?q=Hacı+Bayram,+Mahmut+Atalay+Sk.+No:2+D:110,+06050+Altındağ/Ankara"
        },
      ],
      color: "from-[#0094E6] to-[#0077CC]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroContact />

      {/* Main Content */}
      <section className="py-12 sm:py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-display font-medium tracking-tight text-[#000000] mb-8 leading-[1.2]">
                İletişim Bilgileri
              </h2>
              <p className="text-base leading-[1.7] text-[#666666] mb-8 font-body">
                Aşağıdaki yollarla bizimle iletişime geçebilirsiniz. Sorularınız için 
                en kısa sürede size dönüş yapacağız.
              </p>

              {/* İletişim Kartları - Minimalist */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#00AFFF] hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-display font-semibold text-[#000000] mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1.5">
                            {info.items.map((item, itemIndex) => (
                              <div key={itemIndex}>
                                {item.href ? (
                                  <a
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="block group"
                                  >
                                    {item.label && (
                                      <div className="text-xs font-body text-[#666666] mb-0.5">
                                        {item.label}
                                      </div>
                                    )}
                                    <div className="text-sm font-body font-medium text-[#000000] group-hover:text-[#00AFFF] transition-colors break-words">
                                      {item.value}
                                    </div>
                                  </a>
                                ) : (
                                  <div>
                                    {item.label && (
                                      <div className="text-xs font-body text-[#666666] mb-0.5">
                                        {item.label}
                                      </div>
                                    )}
                                    <div className="text-sm font-body font-medium text-[#000000] break-words">
                                      {item.value}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sosyal Medya - Minimalist */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="text-sm font-display font-semibold text-[#000000] mb-3">
                  Sosyal Medya
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/sapport-bili%C5%9Fim/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] hover:from-[#00AFFF] hover:to-[#0094E6] flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@sapportbilisim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] hover:from-[#00AFFF] hover:to-[#0094E6] flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

            </div>

            {/* Sağ Taraf - Form */}
            <div id="contact-form" className="lg:col-span-7 scroll-mt-24">
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-3xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                  Bize Mesaj Gönderin
                </h2>
                <p className="text-base leading-[1.7] text-[#666666] mb-8 font-body">
                  Sorularınız, geri bildirimleriniz veya işbirliği teklifleriniz için 
                  iletişim formumuzu kullanabilirsiniz.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-body font-medium text-[#666666] mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all font-body"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-body font-medium text-[#666666] mb-2">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all font-body"
                        placeholder="E-posta adresinizi girin"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-body font-medium text-[#666666] mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all font-body"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-body font-medium text-[#666666] mb-2">
                        Şirket
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all font-body"
                        placeholder="Şirket adınızı girin"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-body font-medium text-[#666666] mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all font-body"
                    >
                      <option value="">Konu seçin</option>
                      <option value="sap-abap">SAP-ABAP Danışmanlık</option>
                      <option value="daisy">Daisy Portal</option>
                      <option value="entegrasyon">SAP Entegrasyonu</option>
                      <option value="ozel-cozum">Özel Çözümler</option>
                      <option value="genel">Genel Bilgi</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-medium text-[#666666] mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00AFFF] focus:border-transparent transition-all resize-none font-body"
                      placeholder="Mesajınızı detaylı bir şekilde yazın"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#33B7FF] to-[#00AFFF] hover:from-[#00AFFF] hover:to-[#0094E6] text-white font-body font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#00AFFF]/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Mesajı Gönder</span>
                      </>
                    )}
                  </button>

                  {/* Success/Error Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-body">
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-body">
                      Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta ile iletişime geçin.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section - Full Width */}
      <section className="py-12 sm:py-20 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-gray-600 text-sm font-medium shadow-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>Konumumuz</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-[#000000] mb-4 leading-[1.2]">
              Ofisimizi Ziyaret Edin
            </h2>
            <p className="text-base leading-[1.7] text-[#666666] max-w-2xl mx-auto font-body">
              SAPPort Bilişim Hizmetleri ofisimize gelerek bizimle yüz yüze görüşebilir, 
              projeleriniz hakkında detaylı bilgi alabilirsiniz.
            </p>
          </div>

          {/* Google Maps Container */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.9611256664084!2d32.85202068913678!3d39.94225921095786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f6a6d2fde41%3A0x135125c42a921c2!2sSAPPort%20Bili%C5%9Fim%20Hizmetleri!5e0!3m2!1str!2str!4v1765469977925!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="SAPPort Bilişim Hizmetleri Konumu"
              ></iframe>
            </div>
            
            {/* Address Info Bar */}
            <div className="bg-gradient-to-r from-[#33B7FF] to-[#00AFFF] p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-1">
                      SAPPort Bilişim Hizmetleri
                    </h3>
                    <p className="text-sm font-body text-white/90">
                      Hacı Bayram, Mahmut Atalay Sk. No:2 D:110, 06050 Altındağ/Ankara, Türkiye
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Hacı+Bayram,+Mahmut+Atalay+Sk.+No:2+D:110,+06050+Altındağ/Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00AFFF] font-body font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Yol Tarifi Al</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

