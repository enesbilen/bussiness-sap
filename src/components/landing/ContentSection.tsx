import { Zap } from "lucide-react";

export function ContentSection() {
    return (
        <div className="py-24 sm:py-32 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

                {/* Unique Features Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-600">Unique Features</span>
                    </div>
                </div>

                <h2 className="text-4xl font-display font-medium tracking-tight text-[#111111] sm:text-5xl mb-6">
                    Elevate Your Projects with SAP
                </h2>

                <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-500">
                    Explore SAP's powerful features. Boost productivity, streamline workflows, and achieve project success with ease.
                </p>

                {/* Content Mockups can go here similar to the user's previous request or just leave as text block for now as per prompt "Further down: 'Unique Features' button, then large title..." */}
            </div>
        </div>
    );
}
