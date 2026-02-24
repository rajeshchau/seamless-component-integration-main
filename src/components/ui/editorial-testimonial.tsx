import { Badge } from "@/components/ui/badge";

interface EditorialTestimonialProps {
    quote?: string;
    author?: string;
    role?: string;
    company?: string;
    image?: string;
    tag?: string;
}

export function EditorialTestimonial({
    quote = "ConvergeDigitals transformed our digital presence with a level of precision and strategic insight that we hadn't found elsewhere. Their team doesn't just build sites; they engineer experiences that drive growth.",
    author = "Sarah Chen",
    role = "VP of Product",
    company = "TechFlow Solutions",
    image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    tag = "Case Study"
}: EditorialTestimonialProps) {
    return (
        <section className="w-full bg-background py-16 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-8 border-primary/20 bg-primary/5 text-primary">
                        {tag}
                    </Badge>

                    <blockquote className="relative">
                        <svg
                            className="absolute -top-10 -left-10 h-20 w-20 text-muted-foreground/10"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>

                        <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight tracking-tight text-foreground">
                            &ldquo;{quote}&rdquo;
                        </p>

                        <footer className="mt-12 flex items-center gap-6">
                            <div className="flex-shrink-0">
                                <img
                                    src={image}
                                    alt={author}
                                    className="h-16 w-16 rounded-full object-cover grayscale transition-all hover:grayscale-0"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-foreground">{author}</p>
                                <p className="text-muted-foreground">
                                    {role} at <span className="text-foreground/80">{company}</span>
                                </p>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
