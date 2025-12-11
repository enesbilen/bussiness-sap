import React from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export function generateContactEmailHTML(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeni İletişim Formu Mesajı</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .email-header {
      background: linear-gradient(135deg, #33B7FF 0%, #00AFFF 100%);
      padding: 30px 20px;
      text-align: center;
    }
    .email-header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .email-body {
      padding: 30px 20px;
    }
    .info-section {
      background-color: #f8f9fa;
      border-left: 4px solid #00AFFF;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .info-row {
      margin-bottom: 12px;
    }
    .info-label {
      font-weight: 600;
      color: #666666;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .info-value {
      color: #000000;
      font-size: 15px;
    }
    .message-section {
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .message-label {
      font-weight: 600;
      color: #333333;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .message-content {
      color: #555555;
      line-height: 1.8;
      white-space: pre-wrap;
    }
    .email-footer {
      background-color: #f8f9fa;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .email-footer p {
      margin: 5px 0;
      color: #666666;
      font-size: 12px;
    }
    .logo {
      color: #ffffff;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <div class="logo">SAPPort</div>
      <h1>Yeni İletişim Formu Mesajı</h1>
    </div>
    
    <div class="email-body">
      <div class="info-section">
        <div class="info-row">
          <div class="info-label">Ad Soyad</div>
          <div class="info-value">${escapeHtml(data.name)}</div>
        </div>
        
        <div class="info-row">
          <div class="info-label">E-posta</div>
          <div class="info-value">
            <a href="mailto:${escapeHtml(data.email)}" style="color: #00AFFF; text-decoration: none;">
              ${escapeHtml(data.email)}
            </a>
          </div>
        </div>
        
        ${data.phone ? `
        <div class="info-row">
          <div class="info-label">Telefon</div>
          <div class="info-value">
            <a href="tel:${escapeHtml(data.phone)}" style="color: #00AFFF; text-decoration: none;">
              ${escapeHtml(data.phone)}
            </a>
          </div>
        </div>
        ` : ''}
        
        ${data.company ? `
        <div class="info-row">
          <div class="info-label">Şirket</div>
          <div class="info-value">${escapeHtml(data.company)}</div>
        </div>
        ` : ''}
        
        <div class="info-row">
          <div class="info-label">Konu</div>
          <div class="info-value">${escapeHtml(getSubjectLabel(data.subject))}</div>
        </div>
      </div>
      
      <div class="message-section">
        <div class="message-label">Mesaj:</div>
        <div class="message-content">${escapeHtml(data.message)}</div>
      </div>
    </div>
    
    <div class="email-footer">
      <p><strong>SAPPort Bilişim Hizmetleri A.Ş.</strong></p>
      <p>Bu e-posta iletişim formunuzdan otomatik olarak gönderilmiştir.</p>
      <p>Hacı Bayram, Mahmut Atalay Sk. No:2 D:110, 06050 Altındağ/Ankara</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function getSubjectLabel(subject: string): string {
  const subjects: { [key: string]: string } = {
    "sap-abap": "SAP-ABAP Danışmanlık",
    "daisy": "Daisy Portal",
    "entegrasyon": "SAP Entegrasyonu",
    "ozel-cozum": "Özel Çözümler",
    "genel": "Genel Bilgi",
    "diger": "Diğer",
  };
  return subjects[subject] || subject;
}

