"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, MapPin, Users, Zap, Code, ShieldCheck } from "lucide-react";
import Link from "next/link";

const roles = [
    {
        title: "Senior Full-Stack Engineer",
        category: "Engineering",
        type: "Full-time",
        location: "Remote / London",
        icon: Code,
        description: "Scale our logic-driven architecture using Next.js, Node, and advanced animation systems."
    },
    {
        title: "Creative Director",
        category: "Design",
        type: "Full-time",
        location: "London / Hybrid",
        icon: Zap,
        description: "Lead the creative vision for award-winning digital experiences and kinetic UI systems."
    },
    {
        title: "Strategy Lead",
        category: "Management",
        type: "Full-time",
        location: "Remote",
        icon: ShieldCheck,
        description: "Define the digital roadmap for Fortune 500 brands and high-growth startups."
    }
];

const values = [
    {
        title: "Logic-First",
        desc: "We believe perfection starts with robust system logic and clean architecture.",
        icon: Briefcase
    },
    {
        title: "Kinetic Innovation",
        desc: "We don't just build sites; we engineer motion that feels alive and tactile.",
        icon: Users
    },
    {
        title: "Global Reach",
        desc: "Our team spans the globe, bringing diverse insights to every pixel we craft.",
        icon: MapPin
    }
];

export default function CareersPage() {
    return (
        <div className="pt-24 min-h-screen bg-white text-black font-sans">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
                        Join the <br /> <span className="text-primary">Logic.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-neutral-500 font-medium leading-tight max-w-2xl">
                        ConvergeDigitals is looking for visionaries who want to bridge the gap between high-end design and precision engineering.
                    </p>
                </motion.div>
            </section>

            {/* Values Grid */}
            <section className="bg-neutral-50 py-24 border-y border-neutral-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                    <v.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight uppercase">{v.title}</h3>
                                <p className="text-neutral-500 leading-relaxed font-medium">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="container mx-auto px-4 py-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                        Open <br /> Opportunities
                    </h2>
                    <p className="text-neutral-400 font-bold uppercase tracking-widest text-sm">
                        Total {roles.length} Roles
                    </p>
                </div>

                <div className="space-y-px bg-neutral-100 border border-neutral-100 overflow-hidden rounded-3xl">
                    {roles.map((role) => (
                        <motion.div
                            key={role.title}
                            whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
                            className="bg-white p-8 md:p-12 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
                        >
                            <div className="max-w-xl space-y-4">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                                    <role.icon size={16} />
                                    <span>{role.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                    <span className="text-neutral-400">{role.type}</span>
                                </div>
                                <h4 className="text-3xl md:text-4xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">
                                    {role.title}
                                </h4>
                                <p className="text-neutral-500 leading-relaxed font-medium">
                                    {role.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="hidden md:flex flex-col items-end gap-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Location</span>
                                    <span className="font-bold">{role.location}</span>
                                </div>
                                <Link
                                    href="/contact"
                                    className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500"
                                >
                                    <ArrowRight size={24} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 pb-32">
                <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                            Don't see your role? <br /> Pitch us.
                        </h2>
                        <p className="text-primary-foreground/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            We're always looking for geniuses who don't fit into boxes. Send us your portfolio and tell us how you'll change the game.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-neutral-100 transition-colors shadow-2xl"
                        >
                            Inquiry Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
