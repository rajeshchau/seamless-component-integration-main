"use client";

import { CoreValueStats } from "@/components/ui/core-value-stats";
import { TimelineDemo } from "@/components/ui/timeline-demo";

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">About ConvergeDigitals</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    We are a digital agency focused on building the future of logic-driven design.
                </p>
            </section>

            <CoreValueStats />
            <TimelineDemo />
        </div>
    );
}
