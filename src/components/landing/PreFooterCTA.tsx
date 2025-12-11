import { ArrowRight, Code, Zap, Shield, Rocket } from "lucide-react";

export function PreFooterCTA() {
  return (
    <section 
      className="relative py-12 sm:py-20 px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl p-5 rounded-3xl"
            style={{
              background: "linear-gradient(rgb(153, 219, 255) 0%, rgb(0, 148, 230) 100%)"
            }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 text-sm font-medium shadow-sm mb-6">
              <Code className="w-4 h-4" />
              <span>Dijital Dönüşüm</span>
            </div>

            {/* Başlık */}
            <h2 className="text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#1f1f1f] mb-6 leading-[1.2]">
              Dijital Dönüşümünüze Başlamaya Hazır mısınız?
            </h2>

            {/* Açıklama */}
            <p className="text-md sm:text-lg leading-[1.7] text-[#2a2a2a] mb-8 max-w-2xl mx-auto lg:mx-0 font-body">
              SAPPort ile SAP-ABAP danışmanlık hizmetleri ve <span className="font-bold text-[#000]">Daisy</span> kurumsal portal çözümüyle 
              işletmenizin dijital dönüşümünü başlatın. Bugün başlayın ve farkı yaşayın.
            </p>

          </div>

          {/* Sağ Taraf - Özellikler Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Özellik 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Güvenli & Güvenilir
              </h3>
              <p className="text-sm font-body leading-[1.7] text-[#666666]">
                Kurumsal düzeyde güvenlik ve güvenilirlik
              </p>
            </div>

            {/* Özellik 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33B7FF] to-[#00AFFF] flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-[#000000] mb-2 leading-[1.3]">
                Kolay Ölçeklenebilir
              </h3>
              <p className="text-sm font-body leading-[1.7] text-[#666666]">
                İşletmeniz büyüdükçe çözümlerimiz de büyür
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

