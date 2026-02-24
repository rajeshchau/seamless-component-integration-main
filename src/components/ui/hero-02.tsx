import { Button } from "@/components/ui/button";

interface Hero02Props {
    title?: string;
    subtitle?: string;
    description?: string;
    primaryCta?: string;
    secondaryCta?: string;
    image?: string;
}

export function Hero02({
    title = "Design with Precision. Build with Purpose.",
    subtitle = "Strategic Digital Agency",
    description = "We help growth-focused brands scale their digital presence through high-performance web solutions and creative excellence.",
    primaryCta = "View Portfolio",
    secondaryCta = "Our Services",
    image = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
}: Hero02Props) {
    return (
        <section className="relative w-full overflow-hidden bg-background">
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 py-16 md:py-24">
                    <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                            {subtitle}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            {title}
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="rounded-full px-8">
                                {primaryCta}
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8">
                                {secondaryCta}
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src={image}
                                alt="Digital Agency Office"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
