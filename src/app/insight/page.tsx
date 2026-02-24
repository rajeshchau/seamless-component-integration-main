"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const insights = [
    {
        category: "Strategy",
        date: "Feb 24, 2026",
        title: "The Logic Behind High-Performance Digital Scalability",
        description: "How we approach architecture to ensure your brand survives and thrives under extreme traffic loads.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
        category: "Design",
        date: "Feb 18, 2026",
        title: "Emotional Engineering: Why Micro-Interactions Matter",
        description: "Exploring the bridge between calculated logic and human emotion through motion design.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    },
    {
        category: "Intelligence",
        date: "Feb 10, 2026",
        title: "Integrating AI Without Losing Your Brand Voice",
        description: "A strategic guide to leverage automation while maintaining authentic human-centric narratives.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
        category: "Development",
        date: "Jan 28, 2026",
        title: "Next.js 16 and the Future of the Modern Web",
        description: "Deep dive into the latest changes in the React ecosystem and what it means for agency performance.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    }
];

export default function InsightPage() {
    return (
        <div className="pt-24 min-h-screen bg-background">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-32 border-b border-muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
                        >
                            Intelligence Hub
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase"
                        >
                            Insights<span className="text-primary">.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-xl md:text-2xl max-w-md leading-relaxed pb-4"
                    >
                        Deep dives into the intersection of calculated logic and creative motion. Our laboratory for digital excellence.
                    </motion.p>
                </div>
            </section>

            {/* Featured Articles Grid */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-muted overflow-hidden border border-muted rounded-3xl">
                    {insights.map((article, index) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background group cursor-pointer overflow-hidden p-8 md:p-12"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-center mb-12">
                                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                        {article.category} // {article.date}
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-muted flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-2xl">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: "circOut" }}
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 group-hover:text-primary transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 line-clamp-2">
                                    {article.description}
                                </p>

                                <div className="mt-auto pt-8 border-t border-muted/50">
                                    <span className="text-sm font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-500">
                                        Read Investigation
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Subscription/CTA */}
            <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                            Stay <span className="text-white/20">Ahead</span> of the Logic Curve.
                        </h2>
                        <p className="text-neutral-400 text-xl mb-12 max-w-2xl">
                            Subscribe to our laboratory updates and never miss a breakthrough in digital performance.
                        </p>
                        <div className="w-full max-w-md flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-10 py-4 transition-all duration-300 whitespace-nowrap">
                                Join Laboratory
                            </button>
                        </div>
                    </div>
                </div>

                {/* Visual Decoration */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
                    <Marquee speed="slow" reverse={true}>
                        <span className="text-[15rem] font-black text-white/5 tracking-tighter mx-12">INTELLIGENCE</span>
                        <span className="text-[15rem] font-black text-white/5 tracking-tighter mx-12">LOGIC</span>
                        <span className="text-[15rem] font-black text-white/5 tracking-tighter mx-12">MOTION</span>
                    </Marquee>
                </div>
            </section>
        </div>
    );
}
