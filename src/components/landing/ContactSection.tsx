"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form gönderme işlemi burada yapılabilir
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 sm:py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="lg:col-span-4">
              {/* Üst Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm mb-6">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </div>

              {/* Başlık */}
              <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                Get in Touch with Us
              </h2>

              {/* Alt Açıklama */}
              <p className="text-base sm:text-lg leading-[1.7] text-[#666666] mb-6 font-body">
                Reach out to us for inquiries, support, or partnership
                opportunities. We&apos;re here to assist you!
              </p>

              {/* İletişim Kartları */}
              <div className="space-y-3">
                {/* Email Kartı */}
                <button
                  onClick={() =>
                    (window.location.href = "mailto:hello@sap.com")
                  }
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-body text-[#666666] mb-1">
                        You can email us here
                      </div>
                      <div className="text-base font-body font-semibold text-[#000000]">
                        hello@sap.com
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                </button>

                {/* Phone Kartı */}
                <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-body text-[#666666] mb-1">
                        Or give us a call
                      </div>
                      <div className="text-base font-body font-semibold text-[#000000]">
                        Book a Call
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                </button>

                {/* Location Kartı */}
                <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-body text-[#666666] mb-1">
                        Locations
                      </div>
                      <div className="text-base font-body font-semibold text-[#000000]">
                        Get Directions
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                </button>
              </div>
          </div>

          {/* Sağ Taraf - Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 lg:p-8 border border-gray-200">
            <h3 className="text-2xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
              Send Us a Message
            </h3>
            <p className="text-base sm:text-lg leading-[1.7] text-[#666666] mb-6 font-body">
              Use our convenient contact form to reach out with questions,
              feedback, or collaboration inquiries.
            </p>

            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-body"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-body"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <form onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="w-full py-4 bg-gray-900 text-white font-body font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
