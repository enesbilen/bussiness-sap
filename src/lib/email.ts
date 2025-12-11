import nodemailer from "nodemailer";
import { generateContactEmailHTML } from "@/templates/email-template";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Environment variables kontrolü
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const smtpTo = process.env.SMTP_TO || smtpUser;

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP yapılandırması eksik. Lütfen .env.development dosyasını kontrol edin.");
  }

  // Nodemailer transporter oluştur
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Email içeriği
  const htmlContent = generateContactEmailHTML(data);
  const textContent = `
Yeni İletişim Formu Mesajı

Ad Soyad: ${data.name}
E-posta: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
${data.company ? `Şirket: ${data.company}` : ""}
Konu: ${data.subject}

Mesaj:
${data.message}
  `.trim();

  // Email gönder
  const mailOptions = {
    from: `"SAPPort İletişim Formu" <${smtpFrom}>`,
    to: smtpTo,
    replyTo: data.email,
    subject: `Yeni İletişim Formu Mesajı - ${data.name}`,
    text: textContent,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    throw new Error("Email gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
  }
}

