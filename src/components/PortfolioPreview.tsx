"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Luxe Fashion Hub",
        category: "Ecommerce",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
        link: "/portfolio/luxe-fashion",
    },
    {
        title: "EcoEngine SAS",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        link: "/portfolio/ecoengine",
    },
    {
        title: "Nova Stream",
        category: "Video Production",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
        link: "/portfolio/nova-stream",
    },
];

export default function PortfolioPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-6 block">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Precision in Every Project.</h2>
                        <p className="text-black/60 font-medium leading-relaxed">
                            We've helped brands across the globe achieve digital dominance through meticulously crafted experiences.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-all"
                    >
                        View All Projects
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <Link href={project.link}>
                                <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/5] mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                                <h3 className="text-2xl font-black tracking-tight group-hover:text-indigo-600 transition-colors uppercase">{project.title}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
