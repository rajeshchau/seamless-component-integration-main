"use client";

import ServicesOverview from "@/components/ServicesOverview";
import { Marquee } from "@/components/ui/marquee";

export default function ServicesPage() {
    return (
        <div className="pt-24 min-h-screen flex flex-col">
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Our Services</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    We combine precision engineering with creative excellence to deliver high-performance digital products.
                </p>
            </section>

            <ServicesOverview />

            <section className="py-24 bg-muted/20 border-y">
                <Marquee speed="slow" pauseOnHover>
                    {["STRATEGY", "DESIGN", "LOGIC", "GROWTH", "CREATIVE", "PRECISION"].map((text) => (
                        <div key={text} className="px-12">
                            <span className="text-6xl font-black text-muted-foreground/10 tracking-tighter">{text}</span>
                        </div>
                    ))}
                </Marquee>
            </section>
        </div>
    );
}
