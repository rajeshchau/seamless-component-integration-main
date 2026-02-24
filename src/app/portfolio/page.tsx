"use client";

import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function PortfolioPage() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Our Portfolio</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    Explore our latest projects where logic meets motion.
                </p>
            </section>

            <TextParallaxContentExample />
            <div className="bg-white">
                <PortfolioPreview />
            </div>
        </div>
    );
}
