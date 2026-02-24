"use client";

import { motion } from "framer-motion";
import { Laptop, ShoppingBag, Share2, Video } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Website Development",
        description: "High-performance, scalable websites built with modern frameworks and clean architecture.",
        icon: Laptop,
        href: "/services/website-development",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Ecommerce Development",
        description: "Conversion-optimized online stores that provide seamless shopping experiences.",
        icon: ShoppingBag,
        href: "/services/ecommerce-development",
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        title: "Social Media Marketing",
        description: "Data-driven strategies to grow your brand presence and engage your target audience.",
        icon: Share2,
        href: "/services/social-media-marketing",
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Video Editing",
        description: "Professional post-production that tells your story with cinematic precision.",
        icon: Video,
        href: "/services/video-editing",
        color: "bg-pink-50 text-pink-600",
    },
];

export default function ServicesOverview() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
                        >
                            Our Expertise
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            Discover What <br /> <span className="text-black/20">We Offer.</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-sm mb-4">
                        We deliver high-end digital solutions through technical precision and strategic design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-muted overflow-hidden border border-muted rounded-3xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-12 group hover:bg-neutral-50 transition-colors duration-500 cursor-pointer relative"
                        >
                            <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                                <service.icon size={48} className="text-primary" />
                            </div>

                            <div className="flex flex-col h-full">
                                <span className="text-sm font-mono text-muted-foreground mb-8">0{index + 1}</span>
                                <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-8 border-t border-muted/50 flex items-center justify-between group/btn">
                                    <Link href={service.href} className="text-lg font-bold flex items-center gap-4">
                                        Read More
                                        <div className="w-12 h-12 rounded-full border border-muted flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-300">
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                                className="group-hover/btn:text-white"
                                            >
                                                →
                                            </motion.span>
                                        </div>
                                    </Link>
                                    <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent blur-[100px]" />
        </section>
    );
}
