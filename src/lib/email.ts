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
  // Environment variables kontrolü - Production'da mutlaka env variable'lar kullanılmalı
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  // App Password'daki boşlukları temizle (Gmail App Password'ları bazen boşluklu gelir)
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "") || process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || smtpUser;
  const smtpTo = process.env.SMTP_TO || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP yapılandırması eksik. Lütfen environment variable'ları kontrol edin (SMTP_HOST, SMTP_USER, SMTP_PASS).");
  }

  // Gmail için özel ayarlar
  const isGmail = smtpHost.includes("gmail.com");
  const secure = smtpPort === 465;
  const requireTLS = smtpPort === 587;

  // Nodemailer transporter oluştur
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: secure, // true for 465, false for other ports
    requireTLS: requireTLS, // Gmail için TLS gerekli
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Gmail için ek güvenlik ayarları
    ...(isGmail && {
      tls: {
        rejectUnauthorized: false, // Gmail sertifikası için
      },
    }),
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
    // Bağlantıyı test et
    await transporter.verify();
    
    // Email gönder
    const info = await transporter.sendMail(mailOptions);
    console.log("Email başarıyla gönderildi:", info.messageId);
  } catch (error: any) {
    console.error("Email gönderme hatası:", error);
    
    // Daha detaylı hata mesajı
    let errorMessage = "Email gönderilirken bir hata oluştu.";
    
    if (error.code === "EAUTH") {
      errorMessage = "SMTP kimlik doğrulama hatası. Lütfen kullanıcı adı ve şifrenizi kontrol edin. Gmail kullanıyorsanız App Password kullanmanız gerekebilir.";
    } else if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
      errorMessage = "SMTP sunucusuna bağlanılamadı. Lütfen internet bağlantınızı ve SMTP ayarlarınızı kontrol edin.";
    } else if (error.code === "EENVELOPE") {
      errorMessage = "Email adresi geçersiz. Lütfen alıcı adresini kontrol edin.";
    } else if (error.response) {
      errorMessage = `SMTP sunucu hatası: ${error.response}`;
    } else if (error.message) {
      errorMessage = `Email gönderme hatası: ${error.message}`;
    }
    
    throw new Error(errorMessage);
  }
}

