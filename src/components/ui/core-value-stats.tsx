import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
    label: string;
    value: string;
    description: string;
}

interface CoreValueStatsProps {
    title?: string;
    description?: string;
    stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
    {
        label: "Projects Delivered",
        value: "250+",
        description: "Successful digital solutions across various industries."
    },
    {
        label: "Client Satisfaction",
        value: "99%",
        description: "Consistently rated 5-stars by our premium global partners."
    },
    {
        label: "Team Growth",
        value: "45+",
        description: "Dedicated experts in design, logic, and creative strategy."
    },
    {
        label: "Awards Won",
        value: "12",
        description: "Recognized for excellence in digital innovation and UX."
    }
];

export function CoreValueStats({
    title = "Our Impact in Numbers",
    description = "We combine technical precision with creative excellence to deliver results that exceed expectations.",
    stats = DEFAULT_STATS
}: CoreValueStatsProps) {
    return (
        <section className="w-full bg-muted/30 py-16 md:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
                    <p className="text-muted-foreground text-lg">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="border-none shadow-sm bg-background hover:shadow-md transition-shadow">
                            <CardContent className="p-8 text-center md:text-left">
                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{stat.label}</p>
                                <p className="text-4xl font-bold mb-4">{stat.value}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
