import Image from "next/image";
import { Flame, ArrowUpRight } from "lucide-react";

export function FeaturesSection() {
    return (
        <div className="relative py-20 sm:py-24 px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Daisy Features Pill */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm">
                        <Flame className="w-4 h-4" />
                        <span>Daisy Özellikleri</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                    Daisy&apos;nin Öne Çıkan Özellikleri
                </h2>

                {/* Description */}
                <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
                    SAP sisteminize tam entegre Daisy portalı ile iş süreçlerinizi dijitalleştirin, 
                    verimliliğinizi artırın ve çalışan deneyimini iyileştirin.
                </p>

                {/* Two Column Features */}
                <div className="grid grid-cols-12 gap-8 mt-12">
                    {/* Left Column: İnsan Kaynakları Yönetimi (col-4) */}
                    <div className="col-span-12 lg:col-span-4 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                                    İnsan Kaynakları Yönetimi
                                </h3>
                                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                                    Bordro görüntüleme, izin talepleri, masraf yönetimi ve performans değerlendirme 
                                    gibi tüm İK süreçlerini tek platformdan yönetin.
                                </p>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="relative mt-6 flex items-center justify-center bg-dotted-pattern rounded-lg min-h-[300px]">
                            {/* feature4.svg - Sol tarafta arkada */}
                            <div className="absolute left-0 w-40 z-10">
                                <Image
                                    src="/sap-images/features/feature4.svg"
                                    alt="Meeting Scheduling Feature"
                                    width={160}
                                    height={160}
                                    className="w-full rounded-lg"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                            {/* feature3.svg - Ortada önde */}
                            <div className="relative mx-auto w-[200px] z-20">
                                <Image
                                    src="/sap-images/features/feature3.svg"
                                    alt="Meeting Scheduling Feature"
                                    width={200}
                                    height={200}
                                    className="w-full rounded-lg"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                            {/* feature4.svg - Sağ tarafta arkada */}
                            <div className="absolute right-0 w-40 z-10">
                                <Image
                                    src="/sap-images/features/feature4.svg"
                                    alt="Meeting Scheduling Feature"
                                    width={160}
                                    height={160}
                                    className="w-full rounded-lg"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Duyuru & Organizasyon (col-8) */}
                    <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                                    Duyuru & Organizasyon
                                </h3>
                                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                                    Şirket içi duyurular, anketler, organizasyon şemaları ve dinamik iletişim 
                                    araçlarıyla kurumsal iletişiminizi güçlendirin.
                                </p>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="relative mt-6 min-h-[300px] overflow-hidden bg-dotted-pattern rounded-lg p-3">
                            {/* feature2.svg - Arkada tam width */}
                            <div className="relative w-full z-10 pt-10">
                                <Image
                                    src="/sap-images/features/feature2.svg"
                                    alt="Communication Feature"
                                    width={800}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            {/* feature1.svg - Önde, 20px left kaydırılmış, tam width */}
                            <div className="absolute top-3 w-full z-20 left-10 bg-white rounded-lg">
                                <Image
                                    src="/sap-images/features/feature1.svg"
                                    alt="Communication Feature"
                                    width={800}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Three Column Features */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-12">
                    {/* Column 1: Self Servis Hizmetler */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                                    Self Servis Hizmetler
                                </h3>
                                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                                    Çalışanlarınız izin talepleri, bordro görüntüleme ve masraf yönetimi 
                                    gibi işlemleri kendileri yapabilsin.
                                </p>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">
                            {/* İç içe görseller: feature_col_1-1 önde, feature_col_1-2 ve feature_col_1-3 arkada */}
                            <div className="relative min-h-[200px] overflow-hidden rounded-lg bg-dotted-pattern" >
                                    {/* Sol tarafta arkada */}
                                    <div className="absolute top-4 left-1/10 -translate-x-1/20 z-30">
                                        <Image
                                            src="/sap-images/features/feature_col_1-2.svg"
                                            alt="Intelligent Notifications"
                                            width={400}
                                            height={400}
                                            className="h-auto rounded-lg"
                                        />
                                    </div>

                                    {/* Sağ tarafta arkada */}
                                    <div className="absolute top-10 left-1/6 -translate-x-1/12 z-20">
                                        <Image
                                            src="/sap-images/features/feature_col_1-3.svg"
                                            alt="Intelligent Notifications"
                                            width={400}
                                            height={400}
                                            className="h-auto rounded-lg"
                                        />
                                    </div>

                                    {/* En önde ortada */}
                                    <div className="absolute top-18 left-1/4 -translate-x-1/7 z-10">
                                        <Image
                                            src="/sap-images/features/feature_col_1-1.svg"
                                            alt="Intelligent Notifications"
                                            width={400}
                                            height={400}
                                            className="h-auto rounded-lg"
                                        />
                                    </div>
                                    {/* feature_col_1-4 - Normal konumda */}
                                    <div className="absolute top-38 w-full px-10">
                                        <Image
                                            src="/sap-images/features/feature_col_1-4.svg"
                                            alt="Intelligent Notifications"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>

                    {/* Column 2: Mobil & Web Erişimi */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                                    Mobil & Web Erişimi
                                </h3>
                                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                                    Web, mobil ve tablet desteği ile çalışanlarınız her yerden 
                                    ve her zaman işlemlerine erişebilsin.
                                </p>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">
                            {/* İç içe görseller: feature_col_2-1 önde, feature_col_2-2 arkada */}
                            <div className="relative min-h-[200px] overflow-hidden rounded-lg bg-dotted-pattern" >
                                {/* feature_col_2-2 - Arkada */}
                                <div className="absolute top-4 left-1/10 -translate-x-1/20 z-30">
                                    <Image
                                        src="/sap-images/features/feature_col_2-2.svg"
                                        alt="Rapid Feedback Loop"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                {/* feature_col_2-1 - En önde */}
                                <div className="absolute top-10 left-1/6 -translate-x-1/12 z-20">
                                    <Image
                                        src="/sap-images/features/feature_col_2-1.svg"
                                        alt="Rapid Feedback Loop"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Analitik Raporlar & EBYS */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-display font-medium tracking-tight text-[#000000] mb-2 leading-[1.3]">
                                    Analitik Raporlar & EBYS
                                </h3>
                                <p className="text-sm leading-[1.7] text-[#666666] font-body">
                                    Derinlikli analitik raporlar ve EBYS entegrasyonu ile 
                                    belge yönetimini dijitalleştirin.
                                </p>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">
                                <div className="relative min-h-[200px] overflow-hidden py-3 rounded-lg bg-dotted-pattern" >
                                    <div className="relative w-full px-3 mb-1 h-auto">
                                            <Image
                                            src="/sap-images/features/feature_col_3-1.svg"
                                            alt="Task Attachments"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="relative w-full px-3 mb-1 h-auto">
                                        <Image
                                            src="/sap-images/features/feature_col_3-2.svg"
                                            alt="Task Attachments"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="relative w-full px-3 mb-1 h-auto">
                                        <Image
                                            src="/sap-images/features/feature_col_3-3.svg"
                                            alt="Task Attachments"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

