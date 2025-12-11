import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail, ContactFormData } from "@/lib/email";

// Rate limiting için basit bir in-memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit: 5 istek / 15 dakika
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 dakika

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Form validasyon şeması
const contactFormSchema = z.object({
  name: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır").max(100),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, "Konu seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır").max(2000),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting kontrolü
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    // Request body'yi parse et
    const body = await request.json();

    // Validasyon
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "Form verileri geçersiz",
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const formData: ContactFormData = validationResult.data;

    // Email gönder
    await sendContactEmail(formData);

    return NextResponse.json(
      { 
        success: true,
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Hata mesajını güvenli bir şekilde döndür
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// GET isteklerini reddet
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

