"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Label from "@/components/ui/Label";

const contactFormSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  company: z.string().min(2, "Şirket adı en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır")
    .regex(/^[0-9+\s()-]+$/, "Geçerli bir telefon numarası giriniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simüle edilmiş form gönderimi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <>
      <Section spacing="xl" background="default" className="pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              SAP projeleriniz için ücretsiz danışmanlık ve özel teklif almak
              için bizimle iletişime geçin. Ekibimiz en kısa sürede size
              dönüş yapacaktır.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* İletişim Bilgileri */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    İletişim Bilgileri
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Telefon
                        </h3>
                        <a
                          href="tel:+905333474633"
                          className="text-slate-600 hover:text-copper-600 transition-colors"
                        >
                          +90 533 347 46 33
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          E-posta
                        </h3>
                        <a
                          href="mailto:turgut.bakir@aerisap.com"
                          className="text-slate-600 hover:text-copper-600 transition-colors"
                        >
                          turgut.bakir@aerisap.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-copper-100 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-copper-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Adres
                        </h3>
                        <p className="text-slate-600">
                          ASBÜ Sosyokent Teknoloji Geliştirme Bölgesi,<br />
                          Hacı Bayram Mah., Mahmut Atalay Sokak No:6,<br />
                          Kat No: 2 İç Kapı No: 213, Altındağ/Ankara
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Harita */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 w-full bg-slate-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.9538446413626!2d32.85377197735829!3d39.94242207151998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8dfded4053%3A0x4141de562c4c59b9!2zQUVSSVNBUCBZYXrEsWzEsW0gdmUgRGFuxLHFn21hbmzEsWsgQS7Fni4!5e0!3m2!1str!2str!4v1765538101146!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AERISAP Ofis Konumu"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Bize Ulaşın
                  </h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş
                      yapacağız.
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" required>
                          Ad Soyad
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          error={errors.name?.message}
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" required>
                          Şirket
                        </Label>
                        <Input
                          id="company"
                          {...register("company")}
                          error={errors.company?.message}
                          placeholder="Şirket adı"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" required>
                          E-posta
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          error={errors.email?.message}
                          placeholder="ornek@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" required>
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          error={errors.phone?.message}
                          placeholder="+90 533 347 46 33"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" required>
                        Mesaj
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        error={errors.message?.message}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}

