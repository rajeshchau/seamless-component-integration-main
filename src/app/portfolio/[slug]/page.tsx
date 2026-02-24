"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

const projectData: Record<string, any> = {
    "luxe-fashion": {
        title: "Luxe Fashion Hub",
        category: "Ecommerce",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
        problem: "Luxe Fashion Hub was struggling with slow load times and a high cart abandonment rate. Their existing platform was unable to handle high-traffic peaks during seasonal sales.",
        solution: "We rebuilt their entire ecommerce engine using Next.js and a headless commerce architecture. We implemented advanced caching strategies and a streamlined checkout flow.",
        technologies: ["Next.js", "Shopify Headless", "Tailwind CSS", "Stripe", "Vercel"],
        results: [
            "40% increase in conversion rate",
            "90% reduction in page load time",
            "Scaleable to 10k+ concurrent users",
            "Increased average order value by 15%",
        ],
    },
    "ecoengine": {
        title: "EcoEngine SAS",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        problem: "EcoEngine needed a robust dashboard to visualize complex environmental data for their enterprise clients. The existing solution was sluggish and lacked intuitive UX.",
        solution: "We engineered a custom real-time analytics dashboard with reusable components and optimized data fetching. We focused on a minimal, high-performance interface.",
        technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
        results: [
            "Significant improvement in data processing speed",
            "Enhanced user engagement by 60%",
            "Adopted by 5 Fortune 500 companies within 6 months",
            "Seamless mobile accessibility for field agents",
        ],
    },
};

export default function CaseStudyPage() {
    const { slug } = useParams();
    const project = projectData[slug as string];

    if (!project) return <div className="pt-40 text-center font-bold">Project Not Found</div>;

    return (
        <div className="pt-32 pb-10">
            <section className="container-custom mb-12">
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/40 hover:text-indigo-600 transition-colors mb-12">
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">{project.category}</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 uppercase">{project.title}</h1>
                </motion.div>
            </section>

            <section className="container-custom mb-24">
                <div className="aspect-video rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
            </section>

            <section className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-20 mb-24">
                <div className="lg:col-span-2 space-y-16">
                    <div>
                        <h2 className="text-3xl font-black tracking-tighter mb-6 uppercase">The Challenge</h2>
                        <p className="text-xl text-black/60 font-medium leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black tracking-tighter mb-6 uppercase">The Solution</h2>
                        <p className="text-xl text-black/60 font-medium leading-relaxed">{project.solution}</p>
                    </div>
                </div>
                <div className="lg:col-span-1 space-y-12">
                    <div className="bg-gray-50 p-10 rounded-[2.5rem]">
                        <h4 className="font-black tracking-tight mb-6 uppercase">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => (
                                <span key={tech} className="bg-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black/60 border border-gray-100 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-indigo-600 text-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-100">
                        <h4 className="font-black tracking-tight mb-8 uppercase">Key Results</h4>
                        <ul className="space-y-4">
                            {project.results.map((result: string) => (
                                <li key={result} className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-indigo-300 shrink-0 mt-1" />
                                    <span className="font-bold text-sm tracking-tight">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}
