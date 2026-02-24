import { SterlingGateKineticNavigation } from "@/components/ui/sterling-gate-kinetic-navigation";
import { GradientWave } from "@/components/ui/gradient-wave";
import { Marquee } from "@/components/ui/marquee";
import { InteractiveHoverLinks } from "@/components/ui/interactive-hover-links";
import { TestimonialV2 } from "@/components/ui/testimonial-v2";
import { EditorialTestimonial } from "@/components/ui/editorial-testimonial";
import { CoreValueStats } from "@/components/ui/core-value-stats";
import { Hero02 } from "@/components/ui/hero-02";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { TextParallaxContentExample } from "@/components/ui/text-parallax-content-scroll";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { Footer1 } from "@/components/ui/footer-1";
import { HoverPreview } from "@/components/ui/hover-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PlaygroundPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* 1. Kinetic Navigation */}
            <SterlingGateKineticNavigation />

            {/* 2. Responsive Hero Banner */}
            <ResponsiveHeroBanner />

            <main className="space-y-32 py-20">
                {/* 3. Text Parallax Section */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Badge variant="outline">Immersive Scrolling</Badge>
                        <h2 className="text-4xl font-bold tracking-tight mt-4">Parallax Content</h2>
                    </div>
                    <TextParallaxContentExample />
                </section>

                {/* 4. Timeline Section */}
                <section className="w-full">
                    <div className="container mx-auto px-4 mb-12 text-center">
                        <h2 className="text-4xl font-bold tracking-tight">Animated Timeline</h2>
                    </div>
                    <TimelineDemo />
                </section>

                {/* 5. Gradient Wave Section */}
                <section className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-8 text-center mb-12">
                        <Badge variant="outline">Advanced Graphics</Badge>
                        <h2 className="text-4xl font-bold tracking-tight">WebGL Gradient Wave</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A premium, interactive WebGL-based gradient wave effect suitable for immersive backgrounds.
                        </p>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <GradientWave className="absolute inset-0" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
                            <h3 className="text-white text-3xl font-bold tracking-tighter">Immersive Experiences</h3>
                        </div>
                    </div>
                </section>

                {/* 6. Marquee Section */}
                <section className="w-full">
                    <div className="container mx-auto px-4 mb-12 text-center">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Dynamic Marquee</h2>
                        <p className="text-muted-foreground">Smooth infinite scrolling for logos, features, or reviews.</p>
                    </div>
                    <Marquee className="bg-muted py-8" pauseOnHover>
                        {Array(10).fill(0).map((_, i) => (
                            <div key={i} className="flex items-center gap-4 px-12">
                                <span className="text-2xl font-bold text-muted-foreground/40">BRAND {i + 1}</span>
                            </div>
                        ))}
                    </Marquee>
                </section>

                {/* 7. Hero 02 */}
                <Hero02 />

                {/* 8. Interactive Hover Links */}
                <section className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Interactive Navigation</h2>
                        <p className="text-muted-foreground">Hover to see spring-based motion and parallel image previews.</p>
                    </div>
                    <InteractiveHoverLinks />
                </section>

                {/* 7. Hover Preview */}
                <section className="container mx-auto px-4 text-center py-20 bg-muted/20 rounded-[40px]">
                    <h2 className="text-4xl font-bold tracking-tight mb-8">Content Previews</h2>
                    <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                        Try hovering over {" "}
                        <HoverPreview url="https://convergedigitals.com" isStatic imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" className="text-primary font-bold underline underline-offset-4 cursor-pointer">
                            this link
                        </HoverPreview>
                        {" "} to see a live preview of the target destination without leaving the current page. Works with any URL.
                    </p>
                </section>

                {/* 8. Core Value Stats */}
                <CoreValueStats />

                {/* 9. Testimonials */}
                <div className="space-y-20">
                    <TestimonialV2 />
                    <EditorialTestimonial />
                </div>

                {/* 10. Components Showcase */}
                <section className="container mx-auto px-4 py-20 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold">Base Elements</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button>Default Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">Destructive</Button>
                            </div>
                            <div className="flex flex-wrap gap-2 text-white">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold">Utility Animations</h3>
                            <div className="space-y-4">
                                <p className="animate-fade-slide-in-1 text-muted-foreground">Delayed entry animation 1</p>
                                <p className="animate-fade-slide-in-2 text-muted-foreground">Delayed entry animation 2</p>
                                <p className="animate-fade-slide-in-3 text-muted-foreground">Delayed entry animation 3</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer1 />
        </div>
    );
}
