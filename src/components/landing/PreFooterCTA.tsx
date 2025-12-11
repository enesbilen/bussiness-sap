import { ArrowRight, Code, Zap, Shield, Rocket } from "lucide-react";

export function PreFooterCTA() {
  return (
    <section 
      className="relative py-20 sm:py-24 px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl p-5 rounded-3xl"
            style={{
              background: "linear-gradient(rgb(183, 255, 51) 0%, rgb(219, 255, 153) 100%)"
            }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-sm font-medium shadow-sm mb-6">
              <Code className="w-4 h-4" />
              <span>SAP-ABAP Development</span>
            </div>

            {/* Başlık */}
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
              Ready to Transform Your SAP-ABAP Workflow?
            </h2>

            {/* Açıklama */}
            <p className="text-base sm:text-lg leading-[1.7] text-[#666666] mb-8 max-w-2xl mx-auto lg:mx-0 font-body">
              Join thousands of developers and teams who are already using <span className="font-bold">sapport</span> to streamline their SAP-ABAP development process. Get started today and experience the difference.
            </p>

          </div>

          {/* Sağ Taraf - Özellikler Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Özellik 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b7ff33] to-[rgba(219,255,153,1)] flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Secure & Reliable
              </h3>
              <p className="text-sm font-body leading-[1.7] text-[#666666]">
                Enterprise-grade security for your projects
              </p>
            </div>

            {/* Özellik 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b7ff33] to-[rgba(219,255,153,1)] flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Scale Easily
              </h3>
              <p className="text-sm font-body leading-[1.7] text-[#666666]">
                Grow your team and projects without limits
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

