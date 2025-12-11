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
    { id: "ai", label: "AI", icon: Sparkles, videoUrl: "https://www.youtube.com/watch?v=7zbppuqCq3c" },
    { id: "forms", label: "Forms", icon: FileText, videoUrl: "https://www.youtube.com/watch?v=hhltMjjAx-g" },
    { id: "sprints", label: "Sprints", icon: Rocket, videoUrl: "https://www.youtube.com/watch?v=KJ1mkFIlSGc" },
    { id: "docs", label: "Docs", icon: FileCheck, videoUrl: "https://www.youtube.com/watch?v=9KcaMRsKkwU" },
    { id: "chats", label: "Chats", icon: MessageSquare, videoUrl: "https://www.youtube.com/watch?v=7zbppuqCq3c" },
    { id: "projects", label: "Projects", icon: Target, videoUrl: "https://www.youtube.com/watch?v=7zbppuqCq3c" },
    { id: "tracking", label: "SAP ABAP", icon: Clock },
];

export function LearnSection() {
    const [activeTab, setActiveTab] = useState<string>("ai");

    const getVideoEmbedUrl = (url: string) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const activeTabData = tabs.find(tab => tab.id === activeTab);
    const currentVideoUrl = activeTabData?.videoUrl || "https://www.youtube.com/watch?v=7zbppuqCq3c";

    return (
        <div className="relative py-20 sm:py-24 px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-7xl">
                {/* Learn To Use Pill */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium shadow-sm">
                        <Flag className="w-4 h-4" />
                        <span>Learn To Use</span>
                    </div>
                </div>

                {/* Main Heading */}
                <h2 className="text-center text-4xl sm:text-5xl font-display font-medium tracking-tight text-[#000000] mb-6 leading-[1.2]">
                    Simple Steps for Success
                </h2>

                {/* Description */}
                <p className="text-center text-base sm:text-lg leading-[1.7] text-[#666666] max-w-2xl mx-auto mb-12 font-body">
                    Learn how to make the most of SAP&apos;s features with our easy-to-follow guide for seamless project management.
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
                                        background: "linear-gradient(rgb(183, 255, 51) 0%, rgb(219, 255, 153) 100%)"
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
                                        <div className="w-full h-0.5 bg-[#C3F53C] mt-1"></div>
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
                ) : (
                    <div className="relative w-full rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                        <h3 className="text-3xl font-display font-medium tracking-tight text-[#000000] leading-[1.3]">SAP ABAP</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

