import { LucideIcon } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    wide?: boolean; // If true, spans 2 columns
}

export function BentoCard({ title, description, icon: Icon, wide = false }: BentoCardProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border border-glass-border bg-[#0A0A0A] p-6 sm:p-8 hover:border-white/20 transition-colors duration-300 group ${wide ? "md:col-span-2" : ""
                }`}
        >
            {/* Subtle shine effect on top */}
            <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 mb-4">
                        <Icon className="h-5 w-5 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-display font-medium text-white mb-2">{title}</h3>
                    <p className="text-sm text-brand-text-dim leading-relaxed">{description}</p>
                </div>

                {/* Decorative graphic area at bottom of card, standard in Bento grids */}
                <div className="h-32 w-full rounded-lg bg-white/5 border border-white/5 border-dashed relative overflow-hidden group-hover:bg-white/10 transition-colors">
                    {/* Abstract visual can go here */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-50"></div>
                </div>
            </div>
        </div>
    );
}
