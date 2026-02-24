import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { InteractiveHoverLinks } from "@/components/ui/interactive-hover-links";
import { TestimonialV2 } from "@/components/ui/testimonial-v2";
import { CoreValueStats } from "@/components/ui/core-value-stats";
import { Marquee } from "@/components/ui/marquee";
import ServicesOverview from "@/components/ServicesOverview";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* 1. Hero Entry */}
            <ResponsiveHeroBanner />

            {/* 2. Visual Speed & Scale */}
            <section className="py-12 bg-muted/20 border-y">
                <Marquee speed="slow" pauseOnHover>
                    {["STRATEGY", "DESIGN", "LOGIC", "GROWTH", "CREATIVE", "PRECISION"].map((text) => (
                        <div key={text} className="px-12">
                            <span className="text-4xl font-black text-muted-foreground/20 tracking-tighter">{text}</span>
                        </div>
                    ))}
                </Marquee>
            </section>

            {/* 3. Core Services Summary */}
            <ServicesOverview />

            {/* 4. Strategic Navigation */}
            <section className="bg-background">
                <InteractiveHoverLinks />
            </section>

            {/* 5. Social Proof */}
            <TestimonialV2 />
        </div>
    );
}
