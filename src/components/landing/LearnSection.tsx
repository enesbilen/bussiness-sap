"use client";

import { useState } from "react";
import { Flag, Sparkles, FileText, Rocket, FileCheck, Clock, MessageSquare, Target, LucideIcon } from "lucide-react";

interface Tab {
    id: string;
    label: string;
    icon: LucideIcon;
    videoUrl?: string;
}

const tabs: Tab[] = [
    { id: "daisy", label: "Daisy Tanıtımı", icon: Sparkles, videoUrl: "https://www.youtube.com/watch?v=7zbppuqCq3c" },
    { id: "entegrasyon", label: "SAP Entegrasyonu", icon: FileText, videoUrl: "https://www.youtube.com/watch?v=hhltMjjAx-g" },
    { id: "danismanlik", label: "Danışmanlık", icon: Rocket, videoUrl: "https://www.youtube.com/watch?v=KJ1mkFIlSGc" },
    { id: "cozumler", label: "Özel Çözümler", icon: FileCheck, videoUrl: "https://www.youtube.com/watch?v=9KcaMRsKkwU" },
];

export function LearnSection() {
    const [activeTab, setActiveTab] = useState<string>("daisy");

    const getVideoEmbedUrl = (url: string) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const activeTabData = tabs.find(tab => tab.id === activeTab);
    const currentVideoUrl = activeTabData?.videoUrl || tabs[0].videoUrl || "https://www.youtube.com/watch?v=7zbppuqCq3c";

    return (
        <div className="relative py-12 sm:py-20 px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Video Gallery Pill */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm">
                        <Flag className="w-4 h-4" />
                        <span>Video Galeri</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                    Daisy&apos;yi ve Hizmetlerimizi Keşfedin
                </h2>

                {/* Description */}
                <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
                    SAPPort ve Daisy hakkında detaylı bilgi almak için videolarımızı izleyin. 
                    SAP entegrasyonu, danışmanlık hizmetlerimiz ve özel çözümlerimiz hakkında daha fazla öğrenin.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-10 mb-12">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="flex flex-col items-center gap-2 transition-all"
                            >
                                <div 
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                        isActive ? "" : "bg-gray-100"
                                    }`}
                                    style={isActive ? {
                                        background: "linear-gradient(rgb(51, 183, 255) 0%, rgb(0, 175, 255) 100%)"
                                    } : {}}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                                    }`}>
                                        <Icon className="w-5 h-5 text-black" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    
                                    <span className={`text-sm font-body font-medium ${isActive ? "text-[#000000]" : "text-[#666666]"}`}>
                                        {tab.label}
                                    </span>
                                    {isActive && (
                                        <div className="w-full h-0.5 bg-[#00AFFF] mt-1"></div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Video Player or SAP ABAP Content */}
                {activeTabData?.videoUrl ? (
                    <div className="relative w-full rounded-xl overflow-hidden bg-gray-100 aspect-video">
                        <iframe
                            src={getVideoEmbedUrl(currentVideoUrl)}
                            title="SAP Tutorial Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

